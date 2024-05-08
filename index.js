class School{
  constructor(){
      this.student = []
      this.size = this.student.length
  }
  push(item){
      this.student.push(item)
  }
  pop(){
      this.student.pop() 
  }
  peekLast(){
      console.log(this.student[this.student.length -1]);
  }
  peekFirst(){
      console.log(this.student[this.size]);
  }
  isEmpty(){
      if(this.student.length < 1){
          console.log("empty object");
      }
  }
  print(){
   console.log(this.student);
  }
}

let jsOne = new School
jsOne.push("jinad")
jsOne.push("Pelumi")
jsOne.push("Jawad")
jsOne.pop()
jsOne.peekLast()
jsOne.peekFirst()
jsOne.isEmpty()
jsOne.print()
console.log(jsOne);


//  class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(item) {
//     this.items.push(item);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   print() {
//     console.log(this.items.join(' '));
//   }
// }

// let school = new Stack
// school.push("Jinad")
// school.push("pelumi")
// school.print()
// console.log(school.pop())
// school.print()
// console.log(school.peek())
// school.print()
// console.log(school.isEmpty())