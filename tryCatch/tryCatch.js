// try Catch


try {
    console.log("Hello")
    let a = 10, b = 4
    if(b == undefined){
        throw new Error("Bhai B to bhulay j gyo")
    }
    console.log(a/b);


} catch (error) {
    console.log("Error:=> ", error);    
}finally{
    console.log("Finally is Run....");
}