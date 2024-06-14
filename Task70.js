var array1=[1,2,3,4,5];
var array2=[9,6,8,4,5];
var combined=[];

for(var i=0;i<array1.length;i++){
    combined[combined.length]=array1[i];
}
for(var j=0;j<array2.length;j++){
    combined[combined.length]=array2[j];    
}
var uniqueElements=[];

for(var k=0;k<combined.length;k++)
{
    var element=combined[k];
    var count=0;

    for(var l=0;l<combined.length;l++){
        if(combined[l] === element){
            count++;
        }
    }
    if(count===1){
        uniqueElements[uniqueElements.length]=element;
    }
}
console.log(uniqueElements);