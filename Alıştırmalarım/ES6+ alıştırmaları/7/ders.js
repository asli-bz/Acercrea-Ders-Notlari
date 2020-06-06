const html = new Map();
html.set("id","html");
html.set("price",3);
html.set("id","css");
html.set("price",5);
html.set("id","Js");
html.set("price",10);
html.set("id","NodeJs");
html.set("price",10);
console.log(html);

const htmlset = new Set();
htmlset.add({id:"html",price:3});
htmlset.add({id:"css",price:5});
htmlset.add({id:"js",price:10});
htmlset.add({id:"NodeJs",price:10});

console.log(htmlset);
