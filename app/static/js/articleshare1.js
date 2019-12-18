/*(function(d, s, id) {
	var js, fjs=d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js=d.createElement(s); js.id = id; js.async = true;
	js.src='//connect.facebook.net/zh_HK/all.js#xfbml=1&appId='+(urlProduct=='pns'?'282283041917382':'393860190703690')+'&version=v2.0';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/
function articleshare(type) {
	var url = $('meta[property="og:url"]').attr('content');
	var title = window.document.title;
	if(type == 'facebook') {
		window.open("http://www.facebook.com/share.php?u="+encodeURIComponent(url)+"&amp;t="+encodeURIComponent(title),'','scrollbars=1,status=1,height=480,width=640,resizable=1');
	}else if(type == 'twitter') {
		window.open("http://twitter.com/home?status="+encodeURIComponent(title)+' '+encodeURIComponent(url),'','scrollbars=1,status=1,height=480,width=640,resizable=1');
	}else if(type == 'sina') {
		window.open('https://service.weibo.com/share/share.php?url='+encodeURIComponent(url)+'&title='+ encodeURIComponent(title),'','scrollbars=1,status=1,height=480,width=640,resizable=1');
	}else if(type == 'QQ') {
	  window.open('http://share.v.t.qq.com/index.php?c=share&a=index&url='+encodeURIComponent(url)+'&title='+encodeURIComponent(title),'','scrollbars=1,status=1,height=480,width=640,resizable=1');
	}else if(type == 'googleplus') {
	  window.open('https://plus.google.com/share?url=' + encodeURIComponent(url));
	}
}
document.write('<span class="sina_large"><a href="javascript:void(0);" onclick="articleshare(\'sina\')"><span class="stButton"><span class="stLarge" rel="nofollow"></span></span></a></span>');
