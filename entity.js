import Input from "./input.js";

export default class Entity{
  constructor(pos){
    this.pos = pos;
    this.color = {
      r : 20,
      g : 50,
      b : 110,
    }
    this.size = 32;
    this.shape = "box";
  }
  Update(){
  }
}
