class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value)
    if(this.length === 0 ){
      this.bottom = newNode
      this.top = this.bottom
      this.length++;
      }else{
        this.top.next = newNode;
        this.top= newNode
        this.length++;
      }
      

      return this
  }
  pop(){
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(5)
myStack.push(6)




//Discord
//Udemy
//google
