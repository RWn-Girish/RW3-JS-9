// Oprators => Arithmetic => + - * / %  **  ++ --
// console.log(2/5);
// console.log(2%5);

// let a = 15;
// console.log(a**3);

// console.log(a++);   // post => 16
// console.log(a);
// console.log(++a);   // pre => 16
// console.log(a);

// Relational => < <= > >= == !=  === !==

// console.log(10 == "10");
// console.log(10 === "10");   // false
// console.log(10 == 10);
// console.log(10 != 110);

// Assignment / Short hand Property
// let a = 12;
// a = a + 10; // a += 10

// Logical => ! && ||  ^(XOR)

/*
    A    B  &&      ||(piped)   ^(XOR)
    F    F   F      F           F
    F    T   F      T           T
    T    F   F      T           T
    T    T   T      T           F
*/
// console.log(2^5);
// console.log(1&&1);


// Swapping value in two vairable 1. using third var 2. without third var

// let x = 10, y = 20, z;

// console.log("Before Swapping value of x & y");
// console.log("X : ", x);
// console.log("Y : ", y);

// z = x;
// x = y;
// y = z;

// z =  x + y
// x = z - x
// y = z - y

// x =  x + y
// y = x - y
// x = x - y

// x = x ^ y
// y = x ^ y
// x = x ^ y

// console.log("After Swapping value of x & y");
// console.log("X : ", x);
// console.log("Y : ", y);


// // Emp Salary => Basic salary => HRA(12) & DA(5) =>
// let basicSlr = 5000, hra, da, final;

// hra = basicSlr * 0.12
// da = basicSlr * 0.05
// final = basicSlr + hra  + da
// console.log("Basic Slaray : ", basicSlr);
// console.log("HRA : ", hra);
// console.log("DA : ", da);
// console.log("Final Amount : ", final);



// Bill amt =>discount,  CGST + SGST => 

// let billAmt = 12000, dis, sgst, cgst, finalBill;
// dis = billAmt * 0.05;
// sgst = (billAmt - dis) * 0.025;
// cgst = sgst;
// finalBill = billAmt - dis + cgst + sgst
// console.log("Bill", billAmt, dis, sgst, cgst, finalBill)


/*
    1. convert doller into rupees
    2. convert feet into inches
    3. convert meters into inches
    4. convert celc into ferhanhit
    5. findout area of circle
    6. findout area of triangle
    7. findout area of rectangel
    8. find out simple intrest
    9. find out three sub total and percentage
    10. Emplyee basic salary to calculate HRA(15) and DA(8)
*/
 