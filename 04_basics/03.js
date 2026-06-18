const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

console.log(typeof map); // object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
console.log(myObject);

for(const[key,value] of myObject){
    console.log(key,':-',value);
}