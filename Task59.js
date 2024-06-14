let courses=["react","HTML","CSS","JAVASCRIPT","node.js",'java'];
console.log("orinal array:"+ courses);

let lastelement=courses.pop();
console.log("After removed the last elements:"+courses);

let firstelement=courses.shift();
console.log("After removed the first elements:"+courses);
courses.splice(1,4);
console.log("Aftr removed 2 elements starting from index 1:"+courses);