const clearErrors = () => {
    const errors = document.querySelectorAll(".errors")
    for(let item of errors){
        item.innerHTML = ""
    }
}

const setError = (id, message) => {
    document.getElementById(id).innerHTML = message
}



const validation = (event)=> {
    event.preventDefault();

    clearErrors();
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const gender = document.querySelector('input[name="gender"]:checked')

    let passmatch = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$`)
    

    // console.log(fname.value)
    // console.log(lname.value)
    // console.log(email.value)
    // console.log(password.value)
    // console.log(gender)
    if(fname.value == ""){
        // document.getElementById("fnameError").innerHTML = "First name is not Empty";
        setError("fnameError","First name is not Empty")
    }else if(fname.value.length <5){
        document.getElementById("fnameError").innerHTML = "First name minimum 5 Charachter";
    }

    if(lname.value == ""){
        document.getElementById("lnameError").innerHTML = "Last name is not Empty";
    }
    if(email.value == ""){
        document.getElementById("emailError").innerHTML = "Email is not Empty";
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is not Empty";
    }else if(!passmatch.test(password.value)){
        setError('passError', 'Password is not matched')
    }

    if(!gender){
        document.getElementById("genderError").innerHTML = "Please Select any One Gender";
    }


}


document.querySelector('form').addEventListener('submit', validation)