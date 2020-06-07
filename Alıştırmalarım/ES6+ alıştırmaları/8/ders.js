const map = new Map();
map.set({"id":"html","price":3});
map.set({"id":"css","price":5});
map.set({"id":"js","price":10});
map.set({"id":"nodejs","price":10});

const a = {id,price}=map;

for (const i of a){
  console.log(i);
}