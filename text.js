import Entity from "./entity.js";
import EM from "./eM.js"

export default class Text extends Entity{
  constructor(pos,text){
    super(pos);
    this.shape = "text";
    this.text = text;
    this.dir = "R";
  }
  Turn(dir){
    this.dir = dir;
    switch(dir){
      case "R" :this.text = "→" ;break;
      case "L" :this.text = "←" ;break;
      case "U" :this.text = "↑" ;break;
      case "D" :this.text = "↓" ;break;
    }
  }
  Update(){
  }
}
