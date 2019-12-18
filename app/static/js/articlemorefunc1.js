document.write('<div class="articlemorefuncpart share_wrap2"></div>');
if (typeof articleMoreFuncDone=='undefined') {
	articleMoreFuncDone=true;
	function articleMoreFuncOpenWin() {
		var print_title ='';
		var myWindow;
		try {
			myWindow=window.open('../htm/friendly1.htm','明報新聞網','width=500,height=600, top=0, left=0, toolbar=no, menubar=no, scrollbars=yes, resizable=yes,location=no, status=no');
		}catch (e) {
			return true;
		}
	}
	function articleMoreFuncTofriend()	{
		var myWindow;
		try {
			myWindow=window.open('../htm/tofriend1.htm','明報新聞網','width=480,height=613, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no');
		}catch (e) {
			return true;
		}
	}
	function articleMoreFuncShortLink() {
		var sUrl=location.protocol+'//'+location.hostname+'/';
		if(location.hostname.search(/^webdevp/i)>=0) sUrl+='ldy/'
		urlArray=location.href.split('/');
		urlDocIssue=urlArray.slice(-3, -2).join('');
		urlNodeID=urlArray.slice(-2, -1).join('');
		if(typeof urlDocIssue!='undefined' && typeof urlNodeID!='undefined' && urlDocIssue!='' && urlNodeID!=''){
			sUrl+='ldy';
			sUrl+=urlDocIssue.substr(2,6);
			sUrl+=urlNodeID;
			prompt('URL:', sUrl);
		}
	}
	function articleMoreFuncShortLink2() {
		var sUrlArray=location.href.split('/');
		if(typeof sUrlArray!='undefined' && isNaN(sUrlArray.slice(-1))) sUrlArray=sUrlArray.slice(0, -1);
		var sUrl=sUrlArray.join('/');
		if(typeof sUrl!='undefined' && sUrl!='') prompt('URL:', sUrl);
	}
	$(function() {
		var additionfunc='';
		//additionfunc+='<a href="javascript:void(0);" onclick="articleMoreFuncOpenWin();"><div class="print_icon" title="友善列印"></div></a>';
		//additionfunc+='<a href="javascript:void(0);" onclick="articleMoreFuncTofriend();"><div class="email_icon" title="寄給朋友"></div></a>';
		additionfunc+='<a href="javascript:void(0);" onclick="articleMoreFuncShortLink2();"><div class="sharelink_icon" title="分享連結"></div></a>';
		//additionfunc+='<a href="javascript:void(0);" onclick="articleMoreFuncShortLink();"><div class="sharelink_icon" title="分享連結(短)"></div></a>';
		//additionfunc+='<a href="javascript:void(0);" onclick="articleFontSize(\'minus\')"><div class="Smallerfonts_icon" title="字體縮小"></div></a>';
		//additionfunc+='<a href="javascript:void(0);" onclick="articleFontSize(\'plus\')"><div class="Biggerfonts_icon" title="字體放大"></div></a>';
		$('.articlemorefuncpart').html(additionfunc);
	});
	
	function articleFontSize(act)	{
		var fontSize = parseInt($('article.txt4').css('font-size'));
		
		if (fontSize > 16 && act == "minus"){
			$('article.txt4').css('font-size',fontSize-16);
		}
		if (fontSize < 48 && act == "plus"){
			$('article.txt4').css('font-size',fontSize+16);
		}
	}
}
