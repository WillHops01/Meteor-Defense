// class TestObject{
//   constructor(screenWidth, screenHeight){
//     this.width = 150;
//     this.height = 30;

//     this.position = {
//       x: screenWidth/2 - this.width/2,
//       y: screenHeight - this.height - 10
//     };
//   }

//   draw(ctx){
//     ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }

//   update(deltaTime)
//   {
    
//     if(!deltaTime) return;
//     console.log(deltaTime);
//     this.position.x += 5 / deltaTime;
//   }
// }

// export default TestObject;

let a = [1,2,3];
a.forEach(el => {
  if (el === 2){
    a.splice(a.indexOf(el),1);
  } else {
    console.log(el);
  }
});

console.log(a);