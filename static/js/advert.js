

var marketingnativeadlist = {};
var nativeadposition = [3,6,9];
	
	//(cDate.valueOf()>=new Date('2019/05/23 00:00:00').valueOf() && cDate.valueOf()<new Date('2019/06/28 00:00:00').valueOf())?true:false,
	
// marketingnativeadlist['20190620t1']	 = {
	// enable:false,
	// pos:2, // base on nativeadposition, start at 0
	// type:'native',
	// title:'入讀科大「神科」環球商業學',
	// description:'新星Oscar分析面試過關 留學經歷成關鍵',
	// sponsorship:'In partnership with 明報升學網',
	// url:'https://jupas.mingpao.com/non_jupas/%e5%85%a5%e8%ae%80%e7%a7%91%e5%a4%a7%e3%80%8c%e7%a5%9e%e7%a7%91%e3%80%8d%e7%92%b0%e7%90%83%e5%95%86%e6%a5%ad%e5%ad%b8-%e6%96%b0%e6%98%9foscar%e5%88%86%e6%9e%90%e9%9d%a2%e8%a9%a6%e9%81%8e%e9%97%9c/?utm_source=JUPASsite&utm_medium=NativeAdapp(site)&utm_campaign=EduExpo_2019',
	// img:'https://creative.mingpao.com/image/201906/EDU20190606_01.Still007.jpg'
	// };
	
	
marketingnativeadlist['20190627t1']	 = {
	enable:true,
	pos:2, // base on nativeadposition, start at 0
	type:'banner',
	title:'聖誕繽紛賞',
	description:'聖誕繽紛賞',
	sponsorship:'in partnership with 明報',
	url:'https://www.mpnewsmuseum.com/2019-christmas/?utm_source=Desktop&utm_medium=OLNativeAd&utm_campaign=2019ChristmasJP',
	img:'https://creative.mingpao.com/image/201912/M90862_685x156.jpg'
	};

var adUnit = adUnit||'frontpage';
var pageMode = pageMode||'frontpage';


var adDivId = [
	// ["custom2", "x", [1,1]],
	["custom1", "x", [1,1]],
	["custom3", "x", [1,1]],
	["custom4", "x", [1,1]],
	["custom5", "x", [1,1]],
	["custom6", "x", [1,1]],
	["custom7", "x", [1,1]],
	["custom8", "x", [1,1]],
	["custom9", "x", [1,1]],
	["headerbannerd", "x", [[728,90],[996,250],[996,90]]],
	// ["footerbannerd", "x", [728,90]],
	["rightbanner1", "x", [[300,250],[300,600]]],
	["rightbanner1_1", "x", [[1,1],[300,80]]],
	["rightbanner2_1", "x", [[300,250],[300,600]]],
	["rightbanner2_2", "MPC_GPT_News/ros/ros_mkt_lrec_300x250", [[300,250],[300,600]]],
	["rightbanner3_1", "x", [[300,250],[300,600]]],
	["rightbanner3_1s", "x", [[300,250],[300,600]]],
	["custom_contentvideo", "x", [1,1]],
	["ucf_1x1_contentvideo", "MPC_GPT_Ucfunnel/Desktop/ol_custom_1x1_contentvideo", [1,1]]
];

var urlPage = window.location.href.toLowerCase();
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
} else if (urlPage.indexOf('editorial-page1')>=0) {
	adUnit = 'editorial-page1';
}




/************************** page check for ad brand safety***********************/
var sensitiveAdSlot = ['custom2_custom_1x1_skinner']; //to specify ad slot, empty this array to add targeting to all slot
var sensitiveAdRemark = null; //'yes';
var enableSensitiveAdDetect = true;
var abortAdIfSensitiveContent = false;
var sensitiveBasicBlocklist= false; //combine the basic list block list and specified block list
var enableSensitiveRemark = 'no';
/* in case of blocking*/
var articleID = document.URL.split('/')[7]||null;

var blockkey = ["自殺","逃犯條例","遊行","集會","林鄭月娥","何君堯","鄭若驊","濫權","警方","警隊","警員","暴動","警棍","縱火",
"三罷","罷工","罷課","罷市","中央","佔領","阻塞","習近平","一國兩制","雙普選","送中","建制派","民主派",
"港鐵","催淚彈","豆袋彈","橡膠子彈","撤回","暫緩","光復","胡椒噴霧","連儂牆","黑衣","示威者","銀髮族","白衣","磚頭","陳浩天","監警會","人鏈","五大訴求","光復香港","時代革命","汽油彈",""
		];
        
var blockkey_extend = {
	'custom2_custom_1x1_skinner':[
        '1964',
		'八九民運','八九學運',
		'六四事件','天安門事件','8964',
		'社運人士','社運團體',
		'AK- 47 機關槍','機關槍',
		'另類右翼',
		'反送中條例','反逃犯引渡條例',
		'突擊步槍','步槍',
		'攻擊','襲擊',
		'襲擊者',
		'拍賣',
		'斬首','斬頭','殺頭',
		'英國脫歐',
		'炸彈',
		'炸彈襲擊 ','爆炸',
		'流血',
		'癌症',
		'林鄭月娥','林鄭',
		'死亡',
		'死亡人數',
		'災難','災禍','災害',
		'選舉',
		'極端主義',
		'極端主義者',
		'引渡',
		'狂熱人士',
		'過分武力','濫用武力',
		'G20','二十國集團',
		'槍','槍枝','手槍',
		'槍','槍枝','槍火','手槍',
		'仇恨犯罪',
		'仇恨言論',
		'侵入',
		'騎劫',
		'反同',
		'反同的',
		'ISIS','伊斯蘭國',
		'伊斯蘭教的','伊斯蘭的',
		'ISIS','伊斯蘭國',
		'伊斯蘭教主義者','信奉伊斯蘭教人士',
		'蔡欣穎',
		'聖戰主義',
		'聖戰分子',
		'殺人','殺戮',
		'用刀攻擊',
		'全民罷工','大罷工',
		'大規模槍擊',
		'大屠殺','屠殺',
		'激進分子','好戰分子',
		'猥褻','性侵','性侵者','被猥褻','被性侵',
		'謀殺','兇殺','殺人犯','兇手','被殺',
		'全裸','裸體',
		'裸照','裸體',
		'習近平','習主席','習近平主席',
		'抗議','示威',
		'支持獨立',
		'戀童癖患者',
		'戀童癖',
		'請願','請願信請願','請願信',
		'手槍','槍',
		'墜機','飛機失事',
		'政治',
		'色情片','成人電影',
		'種族歧視',
		'激進','激進分子',
		'激進','激進化','極端','極端化',
		'暴亂',
		'強姦','強暴','性侵犯',
		'強姦犯',
		'集會',
		'暴亂',
		'革命','起義',
		'婊',
		'審慎','謹慎','小心','低調',
		'經銷商','代理商經',
		'步槍',
		'火箭炮',
		'性','性愛',
		'射擊','槍擊','射殺',
		'屠殺',
		'刺死','刺傷',
		'偷竊','盜竊',
		'自殺',
		'坦克',
		'種子',
		'恐怖','恐懼',
		'催淚彈',
		'恐怖主義',
		'恐怖分子',
		'偷竊','盜竊',
		'小偷',
		'折磨','虐待',
		'特朗普',
		'貿易戰',
		'戰爭',
		'武器'
		]};		
(function(d){
	/* article page only*/
	if(articleID!=null  && !isNaN(parseInt(articleID)) && enableSensitiveAdDetect==true){
	let newsContent = '';
		/*collect title*/
		newsContent+= document.querySelector('h1').innerText;
		/*collect 2nd part of content*/
		if(document.getElementsByClassName('article_content')){
			newsContent+='\r\n'+document.getElementsByClassName('article_content')[0].innerText;
			}
		/*collect image captions*/
		// if(document.querySelector('.thumbnail')){
			// document.querySelector('.thumbnail').querySelectorAll('a').forEach(function(item){	newsContent+='\r\n'+item.title;});
			// }
		if(blockkey.length>0){
			for(b in blockkey){
				if(blockkey[b]=='' || blockkey[b]==null) continue;

				if(newsContent.search(blockkey[b])>=0){
					console.log('%c[MPADS]'+'['+blockkey[b]+'] found.'+((enableSensitiveAdDetect)?' Sensitive ad mode enabled':''),'background-color:black;color:yellow');
					if(enableSensitiveAdDetect){
						console.log('%c[MPADS]sensitive Ad Remarked','background-color:black;color:yellow');
						sensitiveAdRemark = 'yes';
						}
					break;
					}
			}
		}
        
        /*** brand safety check  for skinner ***/
        var ad = "custom2_custom_1x1_skinner";
        if(articleID!=null && !isNaN(parseInt(articleID)) &&
            (sensitiveAdSlot.length==0||
                (sensitiveAdSlot.length>0 && sensitiveAdSlot.indexOf(ad)>=0))
            ){
            
            
        console.log('%c[MPADS]sensitive Ad checking for '+ad,'background-color:black;color:yellow');
        blockkeylist = blockkey_extend[ad]||[];
        
        if(blockkey_extend[ad] && sensitiveBasicBlocklist){
            blockkeylist = blockkeylist.concat(blockkey);
        }
        
        for(b of blockkeylist){
            if(b=='' || b==null) continue;
            
            let searchPos = newsContent.search(b);
            if(searchPos>=0){
                console.log('%c[MPADS]'+'['+b+'] found.'+((enableSensitiveAdDetect)?' Sensitive ad mode enabled':'')+' pos:'+searchPos,'background-color:black;color:yellow');
                if(enableSensitiveAdDetect && sensitiveAdSlot.indexOf('custom2_custom_1x1_skinner')>=0){
                    console.log('%c[MPADS]sensitive Ad Remarked','background-color:black;color:yellow');
                    // sensitiveAdRemark = 'yes';
                    enableSensitiveRemark = 'yes';
                    }
                break;
                }
            }
        console.log('%c[MPADS]sensitive Ad Remark enabled: '+enableSensitiveRemark,'background-color:black;color:yellow');
        
            
        }
	}
})(document);

				

/************************** end of page check for ad brand safety***********************/




// load GPT asynchronously
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
	  var gads = document.createElement("script");
	  //gads.async = true;
	  gads.type = "text/javascript";
	  var useSSL = "https:" == document.location.protocol;
	  gads.src = (useSSL ? "https:" : "http:") +
	  "//www.googletagservices.com/tag/js/gpt.js";
	  var node = document.getElementsByTagName("script")[0];
	  node.parentNode.insertBefore(gads, node);
	
	var advStyle = document.createElement('style');
	advStyle.innerHTML = '.slot1x1{height:1px;}';
	document.head.appendChild(advStyle);
})();

/* GPT load */
googletag.cmd.push(function() {
			
	googletag.pubads().enableSingleRequest();
	googletag.pubads().setCentering(true);
	 // googletag.pubads().enableLazyLoad({
		// fetchMarginPercent: 100,  // Fetch slots within 5 viewports.
		// renderMarginPercent: 50,  // Render slots within 2 viewports.
		// mobileScaling: 2.0  // Double the above values on mobile.
	  // });
	googletag.enableServices();
	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
	if(!event.isEmpty){
		console.log('[ADSLOT]Rendering ended',event.slot.getSlotElementId());
		}else{
		// console.log('[ADSLOT] Empty :',event.slot.getSlotElementId());
		}
	});

	googletag.pubads().addEventListener('impressionViewable', function(event) {
			var tag = event.slot.getAdUnitPath().split("/");
			var adUnit =tag[tag.length-1]; 
			
			console.log('[ADSLOT] viewable : ',adUnit );  //,' @ ',(Date.now()-timerStart));			
		});
});


(function(){
/* custom_1x1_skinner first priority load */
	googletag.cmd.push(function() {
			var adtag = '7101/MPC_GPT_OL/'+adUnit+'/custom_1x1_skinner';
		// if(document.getElementById('custom2')){
			var custom_1x1_skinner = document.createElement('div');
			custom_1x1_skinner.id = 'custom_1x1_skinner';
			custom_1x1_skinner.classList.add('slot1x1');
			// document.getElementById('custom2').appendChild(custom_1x1_skinner);
			document.body.insertBefore(custom_1x1_skinner,document.body.firstElementChild);
			
		if(document.getElementById('custom_1x1_skinner')){
			console.log('[MPADS]custom_1x1_skinner first priority load ');
			googletag.defineSlot(adtag, [1,1],'custom_1x1_skinner').addService(googletag.pubads()).setCollapseEmptyDiv(true);
			googletag.display('custom_1x1_skinner');			
		}
	});
})();


	
function marketingnativead(orders){
	var refNode = document.getElementsByClassName('thumbnail_list')||false;
	if(refNode||refNode.length>0){
		for(orderid in orders){
			// console.log((typeof orders[orderid]['enable']!='undefined'&& orders[orderid]['enable']==true));
			if(!(typeof orders[orderid]['enable']!='undefined' && orders[orderid]['enable']==true)){
				continue;
			}
			var nativead = marketingnativeadtemplete(orders[orderid]);
			var pos = nativeadposition[orders[orderid]['pos']];
			
			if(document.getElementById('custom6').style.display!='none')
				pos-=1;
			
			// if(document.getElementById('custom7').style.display!='none')
				// pos-=1;
			
			// if(document.getElementById('custom8').style.display!='none')
				// pos-=1;
			
			console.log(orders[orderid],'pos:',pos);
			refNode = refNode[pos]||false;
			
			if(refNode){
				refNode.parentNode.insertBefore(nativead,refNode);//nextElementSibling
				console.log('[MPNativeAd]order:',orderid,':',orders[orderid]['title'],' loaded');
				}
			}
		}
}

function marketingnativeadtemplete(info){
	console.log('[MP-NATIVEAD] delivering ',info);
	var template = document.createElement('div');
	switch(info['type']){
		case 'native':
			template.classList.add('thumbnail_list');
			template.classList.add('pull-left');
			template.classList.add('marketingnativead');
			template.style.backgroundColor='#FFFFCC';
			
			template.innerHTML = '<div class="thumbnail pull-left imgLiquid4 imgLiquid imgLiquid_bgSize imgLiquid_ready" data-imgliquid-verticalalign="0%" data-imgliquid-horizontalalign="50%" style="width: 180px; height: 125px; background-image: url(&quot;'+(info['img']||'')+'&quot;); background-size: cover; background-position: 50% 0%; background-repeat: no-repeat;"><a href="'+(info['url']||'')+'" title="'+(info['img']||'')+'title" style="display: block; width: 100%; height: 100%;"><img src="'+(info['img']||'')+'" alt="'+(info['title']||'')+'" style="display: none;"></a></div>	<div class="article pull-left">		<a href="'+(info['url'])+'" class="color_666"><h4>'+(info['title']||'')+'</h4></a><p>'+(info['description']||'')+'</p>		<h5 class="line_2em color_aaa" style="/*text-align: right;*/">'+(info['sponsorship']||'')+'</h5>	</div>';
		break;
		
		case 'banner':
			
			// template.classList.add('marketingnativead');
			template.classList.add('marketingnativebanner');
			template.innerHTML ='<a href="'+(info['url'])+'" rel="follow"><img src="'+info['img']+'" alt="'+(info['title']||'')+'" title="'+(info['title']||'')+'" width="685" height="140"></a>';
		break;
		
	}
	return template;
	}


function ldyadvert(){
	 googletag.cmd.push(function() { 
	 //troubleshooting about view rate
		for(var i=0; i<adDivId.length; i++){
			if (document.getElementById(adDivId[i][0])!=null) {
				adDivId[i].push("xi");
				if (adDivId[i][0]=="headerbannerd"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/topsb_728x90";
				}
				
				if (urlPage.indexOf('editorial-page1')==-1){
					
					if (adDivId[i][0]=="custom1")
						adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1";
					
					if (adDivId[i][0]=="custom2")
						adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_skinner";
					
					if (adDivId[i][0]=="custom3")
						adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_floating";
					
					if (adDivId[i][0]=="custom4")
						adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_catfish_slider";
					
					if (adDivId[i][0]=="custom5")
						adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_welcome";
						
					if (adDivId[i][0]=="custom_contentvideo"){
						adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_contentvideo";
						}						
					
					if (adUnit != "frontpage") {
						if (adDivId[i][0]=="custom6")
							adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_native";
						
						if (adDivId[i][0]=="custom7")
							adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_native2";
						
						if (adDivId[i][0]=="custom8")
							adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/custom_1x1_native3";
					}
						// console.log(urlPage);
						
					if (adDivId[i][0]=="custom9"){
						if (urlPage.indexOf('1.php')>=0 || urlPage.indexOf('2.php')>=0) {
							adDivId[i][1]="MPC_GPT_OL/allindex-teads-inread";
						}
					}
					
						
				}
				

				//bottomsb
				 if (adDivId[i][0]=="footerbannerd"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/bottomsb_728x90";
					}			
				 if (adDivId[i][0]=="rightbanner1"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/lrec1_300x250";
					}
				 if (adDivId[i][0]=="rightbanner2_1"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/lrec2_300x250";
					}
				 if (adDivId[i][0]=="rightbanner3_1"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/lrec3_300x250";
					}
				 if (adDivId[i][0]=="rightbanner3_1s"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/lrec3_300x250";
					}
				 if (adDivId[i][0]=="rightbanner1_1"){
					adDivId[i][1]="MPC_GPT_OL/"+ adUnit +"/button_300x80";
					}
				//console.log('[ADSLOT]loading '+adDivId[i][1]+' @ '+adDivId[i][0]);	
				if(adDivId[i][1]=='x')
					continue;
				
                
				googletag.defineSlot("/7101/"+adDivId[i][1], adDivId[i][2], adDivId[i][0]).addService(googletag.pubads()).setCollapseEmptyDiv(true,true).setTargeting('sensitiveAdRemark',['',enableSensitiveRemark]);
				
            
				googletag.display(adDivId[i][0]);
				
			}
		}
		
	 });//googletag.cmd.push(function()
}

function placeDIV(){
	var pathbasename = window.location.pathname.split('/')[window.location.pathname.split('/').length-1];	
	if(pathbasename.indexOf('1.php')>=0||pathbasename.indexOf('2.php')>=0){
		 pageMode = 'section';
	}else if(pathbasename != 'main.php'){		
		 pageMode = 'article';
		
	}
	console.log('Page Channel: ',adUnit,pageMode);
	
	//offset custom2 rendering priority 20180809
	// jQuery('body').prepend('<div id="custom2" class="mpads" style="width:1px;height:1px;"></div>');
	
	//changed for better viewablity 20180926
	// jQuery('#maincontent .group:eq(0)').after('<div id="custom2" class="mpads" style="width:1px;height:1px;"></div>');
		var custom1 = document.createElement("div");
		custom1.setAttribute("id", "custom1");	 //custom_1x1
		custom1.classList.add('adslot_custom_1x1');
		custom1.style.width='1px';
		custom1.style.height='1px';
		custom1.classList.add('mpads');
		var custom2 = document.createElement("div");
		custom2.setAttribute("id", "custom2");	//custom_1x1_skinner
		custom2.classList.add('adslot_custom_1x1_skinner');
		custom2.style.width='1px';
		custom2.style.height='1px';
		custom2.classList.add('mpads');
		var custom3 = document.createElement("div");
		custom3.setAttribute("id", "custom3");//custom_1x1_floating
		custom3.classList.add('adslot_custom_1x1_floating');
		custom3.style.width='1px';
		custom3.style.height='1px';
		custom3.classList.add('mpads');
		var custom4 = document.createElement("div");
		custom4.setAttribute("id", "custom4"); //custom_1x1_catfish_slider
		custom4.classList.add('adslot_custom_1x1_catfish_slider');
		custom4.style.width='1px';
		custom4.style.height='1px';
		custom4.classList.add('mpads');
		var custom5 = document.createElement("div");//custom_1x1_welcome  
		custom5.classList.add('adslot_custom_1x1_welcome');
		custom5.setAttribute("id", "custom5");
		custom5.style.width='1px';
		custom5.style.height='1px';
		custom5.classList.add('mpads');
		var custom6 = document.createElement("div");
		custom6.setAttribute("id", "custom6");//custom_1x1_native
		custom6.classList.add('adslot_custom_1x1_native');
		custom6.style.width='1px';
		custom6.style.height='1px';
		custom6.classList.add('mpads');
		var custom7 = document.createElement("div");
		custom7.setAttribute("id", "custom7");//custom_1x1_native2
		custom7.classList.add('adslot_custom_1x1_native2');
		custom7.style.width='1px';
		custom7.style.height='1px';
		custom7.classList.add('mpads');
		var custom8 = document.createElement("div");
		custom8.setAttribute("id", "custom8"); //custom_1x1_native3
		custom8.classList.add('adslot_custom_1x1_native3');
		custom8.style.width='1px';
		custom8.style.height='1px';
		custom8.classList.add('mpads');
		var custom9 = document.createElement("div");
		custom9.setAttribute("id", "custom9"); //teads
		custom9.classList.add('adslot_teads');
		custom9.style.width='1px';
		custom9.style.height='1px';
		custom9.classList.add('mpads');
		
	if (adUnit == "frontpage") {
		jQuery('.section_content_wrapper1').before(custom1);
		jQuery('.section_content_wrapper1').before(custom2);
		jQuery('.section_content_wrapper1').before(custom3);
		jQuery('.section_content_wrapper1').before(custom4);
		jQuery('.section_content_wrapper1').before(custom5);
		}
	
	if (adUnit != "frontpage") {
		jQuery('#maincontent .col > .group:first').after(custom1);
		jQuery('#maincontent .col > .group:first').after(custom2);
		jQuery('#maincontent .col > .group:first').after(custom3);
		jQuery('#maincontent .col > .group:first').after(custom4);
		jQuery('#maincontent .col > .group:first').after(custom5);
		
		switch(pageMode){
			case 'section':
			jQuery('.thumbnail_list_wrap > .thumbnail_list:eq(1)').after(custom6);
			jQuery('.thumbnail_list_wrap > .thumbnail_list:eq(4)').after(custom7);
			jQuery('.thumbnail_list_wrap > .thumbnail_list:eq(7)').after(custom8);
			break;
			
			// default:
			// jQuery('#maincontent .col > .group:first').after(custom6);		
			// jQuery('#maincontent .col > .group:first').after(custom7);		
			// jQuery('#maincontent .col > .group:first').after(custom8);
			}
		}
		
	if (urlPage.indexOf('1.php')>=0 || urlPage.indexOf('2.php')>=0) {
		jQuery('#maincontent .col > .group:first').after(custom9);
		}
        
    if (pageMode=='article') {
        currentHot = 'article';
        var custom_ucf = document.createElement("div");
        custom_ucf.setAttribute("id", "ucf_1x1_contentvideo");
        custom_ucf.classList.add('slot_underlay');
        
        
        if(!document.getElementById('ucf_1x1_contentvideo')){
            var afterFirstP = document.getElementsByTagName('p')[2];
			if(afterFirstP){
				afterFirstP = afterFirstP.nextElementSibling;
				var parentOfAfterFirstP= afterFirstP.parentNode;
				parentOfAfterFirstP.insertBefore(custom_ucf,afterFirstP);
				}
        }

        
        $('li:eq(0)').after('<div id="aa" align="center"></div>');	
        
        jQuery('p:first').after('<div class="clear"></div><div class="af_init_mingpao_01"></div>');
        jQuery('p:first').after('<div class="clear"></div><span id="innity-in-post" class="pns-ads"></span>');
        
        // jQuery('p:eq(2)').before('<div id="teads_adjust" style=""></div>');
        // specialarrangment('placediv-pnsarticle');
	}
}


	// var mptimer = document.createElement('script');
			// mptimer.innerHTML = 'var timerStart = Date.now();';
			// document.head.appendChild(mptimer);
			


$(function(){
	placeDIV();
	marketingnativead(marketingnativeadlist);
	ldyadvert();
	
});