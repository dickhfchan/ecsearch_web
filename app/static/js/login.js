function checkFbLoginState() {
		var promo_email = $("#promo_email").val();
	
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				//alert("good");
				FB.api('/me?fields=id,name,email,first_name,last_name,gender,birthday,locale', function(response) {
					//alert(response.name);
					$.ajax({
					   url: "includes/scripts/oauth_login.php",
					   type: "POST",
					   data: {
						   provider:'facebook',
						   id:response.id,
						   name:response.name,
						   email:response.email,
						   promo: promo_email
					   },
					   success: function(data){	
						  // alert(data);
						   window.location.reload();
						   //refresh_loginMenu();	
						   //magnificPopup.close();
					   },
					});
				});			
			}
		});
	  }	
	
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '349939139291319',
      xfbml      : true,
      version    : 'v4.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
	
	function FbLogin() {
	FB.login(function(response){
		checkFbLoginState();
	}, {scope: 'public_profile,email', return_scopes: true});
  }


function checkFbLoginAgencyState() {
			var _sc = $("input[name=sc]").val();
			 //alert("good");
			FB.getLoginStatus(function(response) {				
				if (response.status === 'connected') {
					//alert("good");
					FB.api('/me?fields=id,name,email,first_name,last_name,gender,birthday,locale', function(response) {
						//alert(response.email);
						$.ajax({
						   url: "includes/scripts/oauth_alogin.php",
						   type: "POST",
						   data: {
							   provider:'facebook',
							   id:response.id,
							   name:response.name,
							   email:response.email,
						   },
						   success: function(data){	
							   //alert(data);
							   window.location.href = "index.php";   
							   
						   },
						});
					});			
				}
			});
		  }	

function checkFbVerifyAgencyState() {
			var _sc = $("input[name=sc]").val();
			 //alert("good");
			FB.getLoginStatus(function(response) {				
				if (response.status === 'connected') {
					//alert("good");
					FB.api('/me?fields=id,name,email,first_name,last_name,gender,birthday,locale', function(response) {
						//alert(response.email);
						$.ajax({
						   url: "includes/scripts/oauth_verify.php",
						   type: "POST",
						   data: {
							   provider:'facebook',
							   id:response.id,
							   name:response.name,
							   email:response.email,
							   sc: _sc,
						   },
						   success: function(data){	
							   //alert(data);
							   if ( data == "2" ){
								   alert("Facebook與申請電郵不符");
							   } else {
								   //alert("223");
								   window.location.href = "index.php";   
							   }
							   //window.location.reload();
							   //refresh_loginMenu();	
							   //magnificPopup.close();
						   },
						});
					});			
				}
			});
		  }	
	
	function FbAgencyVerify() {
		//alert("123");
	FB.login(function(response){
		checkFbVerifyAgencyState();
	}, {scope: 'public_profile,email', return_scopes: true});
  }

	function FbAgencyLogin() {
		//alert("123");
	FB.login(function(response){
		checkFbLoginAgencyState();
	}, {scope: 'public_profile,email', return_scopes: true});
  }
	
  function FbLogout() {	
    var logout = false;
    FB.getLoginStatus(function(response) {
      if (response.status=='connected') {
		FB.logout(function(response){
			LogoutAjax();
		});		  
	  } else {
		LogoutAjax();
	  }
    }); 
  }  
	
	function LogoutAjax() {
		$.ajax({
		   url: "includes/scripts/oauth_logout.php",
		   type: "POST",
		   success: function(data){	
			   window.location.reload();
			  // $('.popover').hide();
			  // refresh_loginMenu();
		   }	      
		});	
  }
		$('#userPopover').popover({html:true,content:function(){return $('#userMenu').html();}});
		$('#agencyPopover').popover({html:true,content:function(){return $('#agencyMenu').html();}});
		
		function Logout() {	
		  switch (document.getElementById('oauth_proivder').value) {
			  case "facebook":
				FbLogout();
				break;
			  case "google":
				googleLogout();
				break;
			  default:
				LogoutAjax();
				break;
		  }
	    }