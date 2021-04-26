class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
      numbers = [34,84,15,0,2,99,79,9,88,89,18,31,39,100,101];
        constructor(){
          this.root = null
        }
    
    insert(value){
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          let current = this.root;
          while(current){
              if(value === current.value) return undefined;
              if(value < current.value){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }
                  current = current.left;
              } else {
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } 
                  current = current.right;
              }
          }
      }
  }