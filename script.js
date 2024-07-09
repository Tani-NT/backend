// #forEach
var arr = [1,2,3,4]
arr.forEach(function(ele){
    ele+=1
    console.log(ele)
})

// #map : to create new array from an existing array
var arr1 = [5,6,7,8]
var newArr = arr1.map(function(elem){
    return elem*2
})
console.log(newArr)

// #filter : =< the length of an array
var arr3 = [10,11,12,13]
var ans = arr3.filter(function(elem){
    if(elem>11){
        return true;
    }
})
console.log(ans)

// #find : to search element in an array
var arr4 = [14,15,16,17]
var res = arr4.find(function(elem){
    if(elem === 14) return elem;
})
console.log(res)

// #indexOf : tells the index of the element if it not there then it gives -1
console.log(arr4.indexOf(16))

// #object : they are key-value pairs
var obj = {
    name: "Tanya",
    age: 19
}
console.log(obj.name)

// freeze : the object value will be immutable after freezing
Object.freeze(obj)

obj.name = "Tani"
console.log(obj.name)

// async function

async function abcd(){
    var blob = await fetch(`https://randomuser.me/api`);
    var ans = await blob.json();
    console.log(ans.results[0].name)
}
abcd();