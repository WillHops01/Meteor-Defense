export const calculateDistance = (pos1, pos2) => {
  //debugger;
  let xDist = Math.abs(pos1.x - pos2.x);
  let yDist = Math.abs(pos1.y - pos2.y);
  return Math.sqrt((xDist * xDist) + (yDist * yDist));
};

// calculateDistance(){
//   let xDist = Math.abs(this.position.x - this.destination.x);
//   let yDist = Math.abs(this.position.y - this.destination.y);
//   return Math.sqrt((xDist * xDist) + (yDist * yDist));
// }