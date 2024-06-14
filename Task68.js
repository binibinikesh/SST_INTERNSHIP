const person={
    fullname:function(city,country){
        return this.firstname+""+this.lastname+","+city+","+country;
    }
}
const person1={
    firstname:"Bini",
    lastname:"kesh",
}
console.log(person.fullname.call(person1,"India","Norway"));