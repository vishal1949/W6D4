class DOMNodeCollection {
  constructor(arrHTML) {
    this.arrHTML = arrHTML;
    this.emptyStr = ' ';
  }
  html(string){
    if(!string){
      return this.arrHTML[0].innerHTML(); 
    }else{
      this.arrHTML.forEach(element => {
        element.innerHTML = string;
      });
    }
  }
  empty(){
    this.html(" ");
  }
  append(someEl){ //someElemenet
    this.arrHTML.forEach(element => {
      element.innerHTML += someEl;
    });
  }
  
  attr(attrName, val){ //if one then get value, if two set val
    // debugger
    if(!val){
      return this.arrHTML[0][attrName] //calling the method with the name attrname
    }else{
      this.arrHTML.forEach(element => {
        element[attrName] = val;
      });
    }
  }
  
  addClass(classname){
      this.attr("className", classname )
  }

  removeClass(){
    this.attr("className", this.emptyStr);
  }

  children(){
    const arr = [];

    this.arrHTML.forEach(element => {
      if (!(!element.children)){
        arr.push(element.children);
      }
    });
    
    return new DOMNodeCollection(arr);
  }

  parent(){
    const arr = [];
    this.arrHTML.forEach(element => {
      if (!(!element.parentElement)){
        arr.push(element.parentElement);
      }
    });

    return new DOMNodeCollection(arr);
  }

  find(selector) {
    let children = this.arrHTML.children();
    let searchResults = [];
    
    children.forEach(child => {
      searchResults.push(child.querySelectorAll(selector));
    });

    return new DOMNodeCollection(searchResults)
  };

  remove() {
    this.arrHTML.forEach(element => {
      element.remove();
    });
  };
};

module.exports = DOMNodeCollection;