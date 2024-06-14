const person={
    firstName:"john",
    lastName:"doe",
    fullName:function(){
        return this.firstName+""+this.lastName;
    }
}
const member=
{
    firstName:"Bini",
    lastName:"kesh",
}
let fullName = person.fullName.bind(member);
console.log(fullName());