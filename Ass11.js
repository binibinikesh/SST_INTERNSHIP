
const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    });
    var a;
    var b;
    

    r1.question("Enter the base \n",(a)=>{
    r1.question("Enter the height \n",(b)=>{
    
       

    const area=a*b/2;
    console.log("Area of the triangle is"+area);
    
    r1.close();
    });
  });

