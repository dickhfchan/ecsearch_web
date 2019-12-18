import datetime, re
import sky
from sky import current_app as app, url_for, request, render_template, current_user, cache, setting, db
from app.blueprints import api
from app import middlewares, models

@app.route('/')
def home():
    recommended_comments = list(db.execute('''SELECT *,
					( SELECT `nick_name` FROM `member_list` WHERE `id` = `comment_list`.`member_id` ) as `comment_member` ,
					( SELECT `photo` FROM `agency_list` WHERE `id` = `comment_list`.`agency_id` ) as `agency_photo`,
					( SELECT `agency_name_cn` FROM `agency_list` WHERE `id` = `comment_list`.`agency_id` ) as `agency_name_cn`,
					( SELECT `agency_name` FROM `agency_list` WHERE `id` = `comment_list`.`agency_id` ) as `agency_name`
					FROM `comment_list`
					WHERE `status` = '1' AND `top_page` = '1' ORDER BY `id` DESC LIMIT 0,8'''))
    recommended_comment_chunks = sky.split_every(recommended_comments, 4)
    return render_template('index.html', recommended_comment_chunks=recommended_comment_chunks)
