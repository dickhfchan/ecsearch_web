!function(){$.validator.addMethod("uniqueEmail",function(a,b,c){var d;return $.ajax({type:"POST",url:"includes/scripts/signup_unique_email.php",dataType:"json",data:{email:a},async:!1,success:function(a){d=a}}),1==d}),$.validator.addMethod("uniqueNickName",function(a,b,c){var d;return $.ajax({type:"POST",url:"includes/scripts/signup_unique_nick_name.php",dataType:"json",data:{nick_name:a},async:!1,success:function(a){d=a}}),1==d}),$.validator.addMethod("pwcheck",function(a){return/^[A-Za-z0-9\d=!\-@._*]*$/.test(a)&&/[a-z]/.test(a)&&/\d/.test(a)}),$.validator.addMethod("noSpace",function(a){return a.indexOf(" ")<0&&""!=a}),$.validator.addMethod("custom",function(a,b,c){return!1})}();