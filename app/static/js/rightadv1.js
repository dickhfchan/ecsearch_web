var winlocatn = window.location.href.toLowerCase();
document.write('<div class="adv300 right_wrap"><div id="rightbanner1"></div><div class="adv300 right_wrap" id="rightbanner1_1"></div><div class="adv300 right_wrap" id="rightbanner2_1"></div>');
if (winlocatn.indexOf('main.php')==-1) {
	document.write('<div class="adv300 right_wrap" id="rightbanner3_1s"></div>');
}
document.write('</div>');

if (winlocatn.indexOf('showbiz')>-1 || winlocatn.indexOf('celebrity')>-1 || winlocatn.indexOf('beautystyle')>-1 || winlocatn.indexOf('cultureleisure')>-1) {
	//GSK
	var zflag_nid="1044"; var zflag_cid="2871/2690"; var zflag_sid="583"; var zflag_width="300"; var zflag_height="80"; var zflag_sz="16"; 
	document.write('<script language="JavaScript" src="https://tt3.zedo.com/jsc/tt3/fo.js"></script>');
}