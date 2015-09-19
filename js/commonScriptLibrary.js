//Program Name: commonScriptLibrary.js
//Author: Anbu (anbutoffee@gmail.com)
//Created Date: 13 JULY 2014
//Last Modified: 13 JULY 2014
//Usage: This js file is to be included with login.html

//--------------------------------------------------------------------------------//
// Function: Document Ready
//--------------------------------------------------------------------------------//
$(document).ready(function(){
	var psUserName = "admin";
	var psPassword = "admin";
	
	$("#submitLogin").click(function(){
	  var txtUserName = $("#txtUserName").val();
	  var txtPassword = $("#txtPassword").val();
	  
	  if(txtUserName == psUserName && txtPassword == psPassword){
		//On success do stuff here
		//Navigate to next process
		$("#triggerLoginAlert").hide();
		alert("Login Success");
	  }
	  else{
		$("#triggerLoginAlert").show();
	  }
	});  

	$('#rootwizard').bootstrapWizard(
        {'tabClass': 'nav nav-tabs', 'nextSelector': '.button-next', 'previousSelector': '.button-previous', onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index+1;
        if($total == index){
            return;
        }
        
        // If it's the last tab then hide the last button and show the finish instead
        if($current >= $total) {
            var formData = JSON.stringify(serializeObject('#wizardForm'));
            formData = "var data="+formData;
            var downloadData = "data:text/json;charset=utf-8," + formData;
            console.log(downloadData);
            $("#downloadJSON").attr("href", downloadData);

            //Load updated settings to settingsInfo
            $("#settingsInfo").val(formData);

            $('#rootwizard').find('.next').hide();
            $('#rootwizard').find('.finish').show();
            $('#rootwizard').find('.finish').removeClass('disabled');
        } else {
            $('#rootwizard').find('.next').show();
            $('#rootwizard').find('.finish').hide();
        }
    }});
});