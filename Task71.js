function hasproperty(obj,prop){
    for (var key in obj){
        if(key===prop){
            return true;
        }
    }
    return false;
}
var person={
    name:"Bini",
    age:20,
    occupation:"Engineer"
};
var res=hasproperty(person,"name");
if(res===true)
{
    console.log("Present");
}
else
{
    console.log("Not present");
}