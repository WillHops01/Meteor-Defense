class TestObject{
  constructor(screenWidth, screenHeight){
    this.width = 150;
    this.height = 30;

    this.position = {
      x: screenWidth/2 - this.width/2,
      y: screenHeight - this.height - 10
    };
  }

  draw(ctx){
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export default TestObject;