const bioData = {
    name: "vinod",
    age: 26,
    channel:"thapa technical",
};

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// {"name":"vinod","age":26,"channel":"thapa technical"}

const objData = JSON.parse(jsonData);
console.log(objData);
// { name: 'vinod', age: 26, channel: 'thapa technical' }