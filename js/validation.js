/*
function validate() {
	if(validateUsername()&&validateEmail()&&validateFirstname()&&validateLastname()&&validatePassword()&&validatePasswordCheck()&&validateGender()){
	return true	
	}else{
		return false;
	}	
}
*/
/*
document.getElementById("email").addEventListener("onkeyup", validateEmail, true);
*/

function validateEmail() {
		
	var email = document.forms["registration"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
	if(document.getElementById('email').value == "")
	{		
		document.getElementById('email').style.border = "1px solid #DADADA";
        document.getElementById('msgEmail').innerHTML = "";
		return true;
	}else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		document.getElementById('email').style.border = "solid 1px red";
        document.getElementById('msgEmail').innerHTML = "Error: This is no legit Email!";
        return false;
    }else{
		document.getElementById('email').style.border = "solid 1px green";
		document.getElementById('msgEmail').innerHTML = "";
		return true;
	}	
}


function validateUsername() {   
	
	var username = document.forms["registration"]["username"].value;
	var re = /^[a-zA-Z\s]+$/;

    if(document.getElementById('username').value == "")
	{		
		document.getElementById('username').style.border = "1px solid #DADADA";
		document.getElementById('msgUsername').innerHTML = "";
		return false;
	}else if(!re.test(username)) {
	  document.getElementById('username').style.border = "solid 1px red";
      document.getElementById('msgUsername').innerHTML = "Error: Input contains invalid characters!";     
      return false;
    }else{
		document.getElementById('username').style.border = "solid 1px green";
		document.getElementById('msgUsername').innerHTML = "";
		return true;
	}	
}


function validateFirstname() {   
	
	var username = document.forms["registration"]["firstname"].value;
	var re = /^[a-zA-Z\s]+$/;

    if(document.getElementById('firstname').value == "")
	{		
		document.getElementById('firstname').style.border = "1px solid #DADADA";
		document.getElementById('msgFirstname').innerHTML = "";
		return false;
	}else if(!re.test(username)) {
	  document.getElementById('firstname').style.border = "solid 1px red";
      document.getElementById('msgFirstname').innerHTML = "Error: Input contains invalid characters!";     
      return false;
    }else{
		document.getElementById('firstname').style.border = "solid 1px green";
		document.getElementById('msgFirstname').innerHTML = "";
		return true;
	}	
}


function validateLastname() {   
	
	var username = document.forms["registration"]["lastname"].value;
	var re = /^[a-zA-Z\s]+$/;

    if(document.getElementById('lastname').value == "")
	{		
		document.getElementById('lastname').style.border = "1px solid #DADADA";
		document.getElementById('msgLastname').innerHTML = "";
		return false;
	}else if(!re.test(username)) {
	  document.getElementById('lastname').style.border = "solid 1px red";
      document.getElementById('msgLastname').innerHTML = "Error: Input contains invalid characters!";
      return false;
    }else{
		document.getElementById('lastname').style.border = "solid 1px green";
		document.getElementById('msgLastname').innerHTML = "";
		return true;
	}	
}



function validatePassword() {   
	
	var password = document.forms["registration"]["password"].value;
	var re = /^[a-zA-Z\s]+$/;

    if(document.getElementById('password').value == "")
	{		
		document.getElementById('password').style.border = "1px solid #DADADA";
		
		return false;
	}else if(!re.test(password)) {
	  document.getElementById('password').style.border = "solid 1px red";
           
      return false;
    }else{
		document.getElementById('password').style.border = "solid 1px green";
		
		return true;
	}	
}

function validatePasswordCheck() {   
	
	var password = document.forms["registration"]["password"].value;
	var passwordcheck = document.forms["registration"]["passwordcheck"].value;
	var re = /^[a-zA-Z\s]+$/;

    if(document.getElementById('passwordcheck').value == "")
	{		
		document.getElementById('passwordcheck').style.border = "1px solid #DADADA";
		document.getElementById('msgPasswordCHeck').innerHTML = "";
		return false;
	}else if(password != passwordcheck) {
	  document.getElementById('passwordcheck').style.border = "solid 1px red";
      document.getElementById('msgPasswordCheck').innerHTML = "Error: Passwords are not equal!";    
      return false;
    }else{
		document.getElementById('passwordcheck').style.border = "solid 1px green";
		document.getElementById('msgPasswordCheck').innerHTML = "";
		return true;
	}	
}


function validateGender() {   
	
	var gender = document.forms["registration"]["gender"].value;
	var re = /^[a-zA-Z\s]+$/;
	var gender2 = "Male";
	var gender3 = "Female";
	

    if(document.getElementById('gender').value == "")
	{		
		document.getElementById('gender').style.border = "1px solid #DADADA";
		document.getElementById('msgGender').innerHTML = "";
		return false;
	}else if(gender2 != gender && gender3 != gender) {
	  document.getElementById('gender').style.border = "solid 1px red";
      document.getElementById('msgGender').innerHTML = "Error: This is no legit Gender!";     
      return false;
    }else{
		document.getElementById('gender').style.border = "solid 1px green";
		document.getElementById('msgGender').innerHTML = "";
		return true;
	}	
}

/*
function validateLatitude() {
	
	var latitude = document.forms["registration"]["latitude"].value;
    var re =/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	if(document.getElementById('latitude').value == "")
	{		
		document.getElementById('latitude').style.border = "1px solid #DADADA";
		document.getElementById('msgLoca').innerHTML = ""; 
		return false;
	}else if(!re.test(latitude)) {
		
	  document.getElementById('latitude').style.border = "solid 1px red";
	  document.getElementById('msgLoca').innerHTML = "Error: Input contains invalid characters!";
           
      return false;
    }else{
		document.getElementById('latitude').style.border = "solid 1px green";
		document.getElementById('msgLoca').innerHTML = "";
		return true;
	}
	
	
	
	
}

function validateName() {
	
    var name = document.forms["registration"]["name"].value;
	var re = /^[a-zA-Z\s]+$/;

    if(document.getElementById('name').value == "")
	{		
		document.getElementById('name').style.border = "1px solid #DADADA";
		document.getElementById('msgName').innerHTML = ""; 
		return false;
	}else if(!re.test(name)) {
	  document.getElementById('name').style.border = "solid 1px red";	
	 document.getElementById('msgName').innerHTML = "Error: Input contains invalid characters!"; 
         
      return false;
    }else{
		document.getElementById('msgName').innerHTML = ""; 
		document.getElementById('name').style.border = "solid 1px green";
		return true;
	}
	
}

function validateDate(){
	
}

*/
