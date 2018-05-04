import Entity from "./entity.js";

export default class Life extends Entity{
  constructor(pos){
    super(pos);
    this.color = {
      r : 75,
      g : 75,
      b : 75,
    }
    this.name = "life";
  }
  Update(){
  }
}
