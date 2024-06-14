const person={
    fullname:function(city,country){
        return this.firstname+""+this.lastname+","+city+","+country;
    }
}
const person1={
    firstname:"Bini",
    lastname:"kesh",
}
console.log(person.fullname.apply(person1,["India","Norway"]));