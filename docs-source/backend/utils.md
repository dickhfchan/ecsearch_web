# Utils
Some functions to simplify work. At /app/utils/

## Common used
### str_rand
str_rand(size=6, chars=string.ascii_uppercase + string.digits)
### md5(str0)
### sha1(str0)
### sha512(str0)
### salt_hash(str0)
### hash_pwd(pwd)
### pwd_hashed_compare(pwd, hashed)
### custom_json_dumps
can dump Model, Decimal
### jsonify
stronger than flask.jsonify, common used in router functions to return data:
```py
@api.route('/course/toggle_liked', methods=['POST'])
@middlewares.auth
def course_toggle_liked():
    data = ut.request_json()
    id = data['id']
    course = Course.elastic('id', id).first_or_404()
    record = CourseLikedByUser.elastic('user_id', current_user.id).where('course_id', id).first()
    liked_count = course.liked_count
    if record:
        record.delete()
        liked_count -= 1
    else:
        data = {
            'user_id': current_user.id,
            'course_id': id,
        }
        CourseLikedByUser.create(**data)
        liked_count += 1
    course.update(liked_count=liked_count)
    return ut.jsonify({'liked_count': liked_count})
```
### abort
stronger than flask.abort, common used in router functions to abort request
```py
ut.abort(404)
ut.abort(400, 'Invalid input')
# message can be complex data, like dict, model
ut.abort(status, message = None, headers = None)
```
### request_json
get request json data
```py
data = ut.request_json()
```
