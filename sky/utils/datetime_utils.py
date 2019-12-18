import datetime, calendar
import dateutil.parser
import re

def timestamp_to_datetime(timestamp):
    """timestamp is iso format with timezone, eg: 2019-03-11T09:04:10.244Z
    In javascript, get iso timestamp by Date.toISOString(), eg: new Date().toISOString()
    """
    return dateutil.parser.parse(timestamp)

def datetime_to_timestamp(dt, timezone=datetime.timezone.utc):
    """to utc iso format timestamp, eg: 2019-03-11T09:07:39.404510Z"""
    if not dt.tzinfo:
        dt = dt.replace(tzinfo=timezone)
    return dt.isoformat().replace('+00:00', 'Z')

def is_iso_timestamp(timestamp):
    """simply detect if iso timestamp"""
    if isinstance(timestamp, str):
        l = len(timestamp)
        if re.search(r'^\d{4}-', timestamp) and l >= 11 and l <= 30:
            if timestamp[10] == 'T':
                return True

# datetime must has timezone
def datetime_to_utc_unix_timestamp(dt):
    return int(calendar.timegm(dt.utctimetuple()))
