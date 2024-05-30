const r1=require("readline").createInterface({
input:process.stdin,
output:process.stdout,
});

r1.question("what is your name?\n",(name)=>{
console.log("Good name " + name+" !"),

r1.question("what is your age?\n",(age)=>{

console.log("oh! NICE" + age+" !"),

r1.close();
});

});