var ord=window.ord || Math.floor(Math.random() * 1e16);
var urlPage = window.location.href.toLowerCase();
var adUnit;

if (urlPage.indexOf('main.php')>=0) {
	adUnit = 'frontpage';
} else if (urlPage.indexOf('beautystyle')>=0) {
	adUnit = 'allchannels-beauty';
} else if (urlPage.indexOf('celebrity')>=0) {
	adUnit = 'allchannels-celebrity';
} else if (urlPage.indexOf('family')>=0) {
	adUnit = 'allchannels-family';
} else if (urlPage.indexOf('album')>=0) {
	adUnit = 'allchannels-gallery';
} else if (urlPage.indexOf('hotpick')>=0) {
	adUnit = 'allchannels-hotpick';
} else if (urlPage.indexOf('cultureleisure')>=0) {
	adUnit = 'allchannels-leisure';
} else if (urlPage.indexOf('showbiz')>=0) {
	adUnit = 'allchannels-showbiz';
}

if (urlPage.indexOf('main.php')==-1) {		
	document.write('<div class="adv300 right_wrap" id="rightbanner2"><div id="rightbanner2_2"></div> <div style="height:8px"></div><div id="rightbanner3_1"></div><div style="height:8px"></div>');
	//document.write('<scr' + 'ipt type="text/javascr' + 'ipt" src="http://ad.doubleclick.net/N7101/adj/MPC_OL/' + adUnit + ';sz=300x250;tile=6;pos=lrec2;ord=' + ord + '?"><\/scr' + 'ipt>');
	//document.write('<div style="height:8px"></div><script type="text/javascript" src="http://ad.doubleclick.net/N7101/adj/MPC_News/ros_allchannels-lrec3;sz=300x250;tile=20;pos=lrec3;ord=' + ord + '?"><\/script><div style="height:8px"></div>');
	//document.write('</div>');
}

if (urlPage.indexOf('main.php')==-1) {
	//if (urlPage.indexOf('page')==-1)
		document.write('<div id="custom_contentvideo"></div>');
	//document.write('<scr' + 'ipt type="text/javascr' + 'ipt" src="http://ad.doubleclick.net/N7101/adj/MPC_OL/allchannels-contentvideo;sz=1x1;tile=7;pos=contentvideo;ord=' + ord + '?"><\/scr'+'ipt>');
}