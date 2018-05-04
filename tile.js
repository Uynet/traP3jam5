import Entity from "./entity.js";

export default class Tile extends Entity{
  constructor(pos){
    super(pos);
    this.color = {
      r : 200,
      g : 100,
      b : 100,
    }
  }
  Update(){
  }
}
