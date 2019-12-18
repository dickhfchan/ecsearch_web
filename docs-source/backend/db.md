# Database & Elasticsearch
The project uses Elassandra(Elasticsearch + Cassandra). Cassandra python driver to access database. Custom methods to search in database.
* [Elassandra](https://www.elassandra.io/)
* [Cassandra](http://cassandra.apache.org/)
* [Elasticsearch](https://www.elastic.co/products/elasticsearch)
* [Cassandra python driver](https://docs.datastax.com/en/developer/python-driver/3.18/)

## Commands
/db.py provides commands to access database.
```sh
# delete keyspace and recreate by define in /models.
python db.py --recreate
# development mode. development config will be detected.
python db.py --recreate --dev
# delete elastic indexes and recreate by define in /app/elastic.py
python db.py --elastic
# seed database. check /app/seeds/
python db.py --seed
# do all together
python db.py --recreate --elastic --seed --dev
```

## Add, Update, Delete
Cassandra python driver has many methods to do these. But in /app/cassandra_cqlengine.py, part of the methods are overrided to work with hooks. So just use follow methods:
### Add
```py
course = Course.create(status='pending', title='title')
# recommended
course_data = {
  'status': 'pending',
  'title': 'title',
}
course = Course.create(**course_data)
```
### Update
Fetch item before update.
```py
course = Course.objects(id='id').first()
course.update(status='pending', title='title')
# recommended
course = Course.objects(id='id').first()
course_data = {
  'status': 'pending',
  'title': 'title',
}
course.update(**course_data)
```
### Delete
Fetch item before update.
```py
course = Course.objects(id='id').first()
course.delete()
```
## Read
Query Cassandra is difficult. So Elasticsearch is using to support query.
### Read by Cassandra python driver
Python driver is still recommended to query when get by id.
```py
course = Course.objects(id='id').first()
course = Course.objects(id__in=['id1', 'id2'])
```
### Read by Elasticsearch
Elasticsearch is to do complex query. It exposes an api to do these works. Check its official docs to learn query api and format.
Its api is strong, but most functions of it we used are simple. So some methods are added to simplify the work at `app/plugins/cassandra_cqlengine_elastic.py`. The columns to query must be mappinged in `app/elastic.py`.
#### Where
```py
Model.elastic(column, condition, value)
Model.elastic(column, condition, value).where(column, condition, value)
Model.elastic().where(column, condition, value)
# when only 2 arguments, condition will be think as `=`
Model.elastic(column, value)
Model.elastic(column, value).where(column, value)
```
##### Conditions
Supported now: >, <, =, >=, <=, in, between, <between, between>, \<between\>, common, exists, missing
* between: <= and >=,
* <between: < and >=,
* between>: <= and >,
* \<between\>: < and >,
* common: `like`, full text search, the column elastic type must be text, such as course.title
* exists: not null
* missing: is null
#### Where2
when use exists and missing, value is not required, use where2
```py
Model.elastic().where2(column, 'exists')
```
#### Other methods
* take(self, size, from_index=0)
* sort(self, name, order='desc')
* count()
* get()
* first()
* first_or_404()
```py
query = Model.elastic(column, value).where(column, value).where(column, '>', value)
rows = query.get()
# after get or first called, total hit data can be accessed by query.total
total = query.total
```
