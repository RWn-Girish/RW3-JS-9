const clearErrors = () => {
    $(".errors").html("")
}

const setError = (id, message) => {
    $(`#${id}`).html(message)
}



const validation = (event)=> {
    event.preventDefault();

    clearErrors();
    const fname = $('#fname').val();
    const lname = $('#lname').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const gender = $('input[name="gender"]:checked').val()

    let passmatch = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$`)
    
    if(fname == ""){
        setError("fnameError","First name is not Empty")
    }else if(fname.length <5){
        setError("fnameError","First name minimum 5 Charachter")
    }

    if(lname == ""){
        setError("lnameError","Last name is not Empty")
    }
    if(email == ""){
        setError("emailError","Email is not Empty")
    }
    if(password == ""){
        setError("passError","Password is not Empty")
    }else if(!passmatch.test(password.value)){
        setError('passError', 'Password is not matched')
    }

    if(!gender){
        setError("genderError","Please Select any One Gender")
    }


}


document.querySelector('form').addEventListener('submit', validation)