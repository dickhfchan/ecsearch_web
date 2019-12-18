/* GDPR cookies reminder 20180725*/
/* https://cookieconsent.insites.com/download/*/

/*
available to enable/disable this GDPR alert controlled with "msg.enable".


Installation Guide:
1. add this script below to anywhere in webpage

<!--GDPR-->
<script src="//creative.mingpao.com/js/gdpr.js"></script>

or 


function setupGDPR(){
	console.log('[GDPR] setup remind');
	var d = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.src = "https://creative.mingpao.com/js/gdpr.js";
	
	d.appendChild(s);
}




2. installation completed


*/

(function(w,d){
console.log('[GDPR] loaded');

var msg = {
	theme :"classic",
	message :"本網站有使用Cookies，請確定同意接受才繼續瀏覽。",
	dismiss :"接受",
	link :"了解更多",
	href :"https://member.mingpao.com/cfm/tnc1.cfm",
	enable:true
	};
	
	if(msg.enable){
		var gdprcss = d.createElement('link');
		gdprcss.rel ="stylesheet";
		gdprcss.type="text/css" 
		gdprcss.href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css";

		var gdprjs = d.createElement('script');
		gdprjs.src = "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js";

		var gdprscript = d.createElement('script');
		gdprscript.id="gdpr";
		gdprscript.innerHTML = 'window.addEventListener("load", function(){'+
		'window.cookieconsent.initialise({'+
		'  "palette": {'+
		'    "popup": {'+
		'      "background": "#edeff5",'+
		'      "text": "#838391"'+
		'    },'+
		'    "button": {'+
		'      "background": "#4b81e8"'+
		'    }'+
		'  },'+
		'  "theme": "'+msg.theme+'",'+
		'  "content": {'+
		'    "message": "'+msg.message+'",'+
		'    "dismiss": "'+msg.dismiss+'",'+
		'    "link": "'+msg.link+'",'+
		'    "href": "'+msg.href+'"'+
		'  }'+
		'})});';

		d.getElementsByTagName('head')[0].appendChild(gdprcss);
		d.getElementsByTagName('head')[0].appendChild(gdprjs);
		d.getElementsByTagName('head')[0].appendChild(gdprscript);
		}

})(window,document);
