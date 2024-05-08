class School{
  constructor(){
      this.student = []
      this.size = this.student.length
  }
  push(id){
      this.student.push(id)
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
          console.log("null");
      }
  }
  print(){
   console.log(this.student);
  }
}

let jsOne = new School
jsOne.push("Pelumi")
jsOne.push("jinad")
jsOne.push("Jawad")
jsOne.pop()
jsOne.peekLast()
jsOne.peekFirst()
jsOne.isEmpty()
jsOne.print()
console.log(jsOne);
