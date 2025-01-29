let fname = document.querySelector("#fname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let mobileNo = document.querySelector("#mobileNo")
let role = document.querySelector("#role")
let addEmpFrom = document.querySelector("#addEmp")


addEmpFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    let newEmp = {
        name: fname.value,
        email: email.value,
        password: password.value,
        mobileNo: mobileNo.value,
        role: role.value
    };
    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.push(newEmp);
    localStorage.setItem("employees", JSON.stringify(employees));
    // console.log(newEmp);
    addEmpFrom.reset();
})