const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arg){
  let array = [];

  if (arg instanceof HTMLElement) {
    array.push(arg);
  }else{
    const vals = document.querySelectorAll(arg); //nodeList
    array = Array.from(vals);
  }
  return new DOMNodeCollection(array);
}

// const dom = $l(".first-ul");
