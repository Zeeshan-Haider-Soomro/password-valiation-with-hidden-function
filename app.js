function button1(){
    window.location.href =  "verified.html"
}


function loginForm(){
    
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let error = document.getElementById("error")
    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(regEmail.test(email.value) || regPassword.test(password.value)){
        if(regEmail.test(email.value)){
            if(regPassword.test(password.value)){
                // alert("login")
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "LOGIN",
                    showConfirmButton: false,
                    timer: 1500
                });
                error.innerHTML = " "
            }
            else{
                // alert("password incorrect")
                error.innerHTML = "password incorrect"
            }
        }
        else{
            // alert("email incorrect")
            error.innerHTML = "email incorrect"
        }
    }
    else{
        // alert("email and password incorrect")
        error.innerHTML = "email and password incorrect"
    }
    
    


}

let isOpen = false

function hiddenPassword(){
    let eye = document.getElementById("eye")
    isOpen = !isOpen
    if(isOpen){
        eye.className = "fa-solid fa-eye"
        password.type = 'text';
    }
    else{
        eye.className = "fa-solid fa-eye-slash"
        password.type = 'password';
        
    }

}






