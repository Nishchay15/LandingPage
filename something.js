
        function submitForm() {
            
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;

            
            alert("Your name is " + name);

            
            if (phone.length !== 10) {
                alert("Your number is invalid");
                return;
            }

            
            var validDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
            var isValidDomain = false;

            for (var i = 0; i < validDomains.length; i++) {
                if (email.includes(validDomains[i])) {
                    isValidDomain = true;
                    break;
                }
            }

            if (isValidDomain) {
                alert("Please enter your official mail id");
                return;
            }

            
            var bannerText = "Thank you " + name + " for sharing your details. We will reach out to you on your mail id: " + email;
            document.getElementById("banner").innerText = bannerText;
        }

        function submitContactForm() {
           
            alert("Contact form submitted!");
        }
