const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    });
    var a;
    var b;

    r1.question("Enter the first number \n",(a)=>{
    r1.question("Enter the second number \n",(b)=>{

    const sum=parseInt(a)+parseInt(b);
    console.log("sum of two number is " +sum+"");
    
    r1.close();
    });
});  
