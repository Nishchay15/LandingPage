function submitForm() {
    var name = document.getElementById('name').value;
   alert('Your Name is: ' + name);
 }

//check phone number valid/invalid
 function checkphoneNumber(phoneNumber) {
    if (phoneNumber.match(/\d/g).length !== 10) {
        alert("your number is invalid");
    } else {
        alert("your number is valid");
    }
}
 
//validating email id
function validateEmail() {
    var email = document.getElementById("email").value;
    var invalidDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
    var isInvalid = false;

    for (var i = 0; i < invalidDomains.length; i++) {
        if (email.includes(invalidDomains[i])) {
            isInvalid = true;
            break;
            
        }
    }   

    if (isInvalid) {
        alert("Please enter your official mail id");
    }
}

function showThankYou(name, email) {
    var banner = document.getElementsByClassName('banner');
    if (banner) {
       banner.textContent = 'Thank you ' + nameValue + ' for sharing your details. We will reach out to you on your mail id: ' + emailValue;
     
    }
   showThankYou(name,email)
}

 












