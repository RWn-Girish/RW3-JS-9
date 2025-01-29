// loop => for, while ,dowhile
/**
    for (init; condition; expression){
        statements....
    }

    while(condition){
        statements....
    }

    do{
        statements....
    }while(condition)
 */

// 1 to 5
// let i
// for(i=1; i<=15; i++){
//     console.log(i);
// }
// console.log("outside: ",i);
/*
    init    con             inc
    i=1     1<=5    T   1   2
            2<=5    T   2   3
            3<=5    T   3   4
            4<=5    T   4   5
            5<=5    T   5   6
            6<=5    F   stop 
*/


// let x = 10;
// while(x >10){
//     console.log(x);
//     x++;
// }


// let y = 10;
// do{
//     console.log(y);
//     y--;
// }while(y>10)


// 1 3 5 7 9 11 ....
// for(let i = 1; i<=20; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }

// for(let i = 1; i<=35; i += 2 ){
//     console.log(i);
// }


/*
    1. print 1 to n
    2. print n to 1
    3. print -n to n
    4. print odd number
    5. print even number
    6. print series 1, 4, 9, 16, 25, .....
    7. print series 1, 4, 3, 16, 5, ....
    8. print series 1, 4, 12, 32, ....
    9. print series 1, 1, 2, 3, 5, ....
    10. find out total of upto n number
*/


// Patterns

/*
    1 1 1 1 1
    2 2 2 2 2
    3 3 3 3 3
    4 4 4 4 4

*/


// for(let i = 1; i<=5; i++){
//     let data = ""
//     for(let j= 1;j<=i; j++){
//         data = data + j + " "
//     }
//     console.log(data);
//     console.log("\n")
// }


/*
    init        cond        init                    inc(j)      int(i)
    i = 1       1<=5    T   j = 1   1<=5    T       2            1 2 3 4 5
                                    2<=5    T       3            1 2 3 4 5
                                    3<=5    T       4            1 2 3 4 5
                                    4<=5    T       5
                                    5<=5    T       6
                                    6<=5    F                   2
                2<=5    T   j = 1   1<=5    T       2

*/


// for(let i = 1; i<=5;i++){
//     let j =1, data = "";
//     do{
//         data += i + " ";
//         j++
//     }while(j<=i);
//     console.log(data)
// }


// Continue

// for(let i = 1; i<=10; i++){
//     if(i=== 3 || i ===5 ){
//         continue;
//     }
//     console.log(i)
// }

// goto

let a = 1;
while(a<=15){
    if(a==5){
        continue
    }
    console.log(a);
    a++
}

console.log("outside block")

// 1 1 2 3 5 8 13

// let a = 1, b =1, c;
// console.log(a);
// console.log(b);
// for(let i = 1; i<=10;i++){
//     c = a + b 
//     console.log(c);
//     a = b;
//     b = c;
// }

//  5.9 =. floor / ceil
// Armstrong number => 123 => 1^3 + 2^3 + 3^3

// let num = 121, a, sum = 0;
// a = num;
// while(num>0){
//     let rem = num % 10;
//     sum =  sum = rem  + (sum * 10)     //       321 sum + (rem ** 3)
//     num = Math.floor(num / 10);
// }
// if(a === sum){
//     console.log("Number is Palindrom");
// }else{

//     console.log("Number is not Palindrom");
// }