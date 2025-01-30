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
   
    addEmpFrom.reset();
    loadData()
});


function loadData() {
    let allData = JSON.parse(localStorage.getItem('employees'))
    // console.log(allData);

    let result = "";
    allData.forEach((record, index) => {
        let row = `<tr>
        <td>${index + 1}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>${record.mobileNo}</td>
        <td>${record.role}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button> || <button onclick="editEmployee(${index})">Edit</button></td>
        </tr>`
        result = result + row;
    });

    document.querySelector('#viewData').innerHTML = result
}

loadData()


function deleteEmployee(index) {
    let allData = JSON.parse(localStorage.getItem('employees'))
    // console.log(allData[index])
    allData.splice(index, 1);

    localStorage.setItem("employees", JSON.stringify(allData));
    loadData();
}