const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

r1.question("Enter the first number:\n",(a)=>{
    r1.question("Enter the second number:\n",(b)=>{
        const num1=parseFloat(a);
        const num2=parseFloat(b);

        console.log("inetial number:num1=",+num1+",num2=",+num2);

        console.log("Logical operator");

        console.log("num1&&num2:",num1&&num2);
        console.log("num1||num2:",num1||num2);
        console.log("num1!num2:",!num2);

        r1.close();
    });
});
    
