# Schedule Task
The project use flask-apscheduler plugin (based on APScheduler) to do schedule tasks.
* [schedule vs. Celery vs. APScheduler](https://www.jianshu.com/p/94b273f6ed77)
* [flask-apschedule](https://github.com/viniciuschiele/flask-apscheduler)
* [APScheduler](https://apscheduler.readthedocs.io/en/latest/)

Example Links:
* https://github.com/viniciuschiele/flask-apscheduler/blob/master/examples/advanced.py

## Examples
```py
from datetime import datetime, timedelta
# must use utc datetime because `SCHEDULER_TIMEZONE` is utc in config
exec_time = datetime.utcnow() + timedelta(seconds=1)
def test_job(name):
    print("hello, %s" % name)
# the 1st argument is id
# trigger: date, cron, interval
app.scheduler.add_job('test', test_job, trigger='date', next_run_time=exec_time, args=['haha'], kwargs={})
```
