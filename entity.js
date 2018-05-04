import Input from "./input.js";

export default class Entity{
  constructor(pos){
    this.pos = pos;
  }
  Update(){
    if(Input.isKeyInput(KEY.R)) this.pos.x++;
    if(Input.isKeyInput(KEY.L)) this.pos.x--;
    if(Input.isKeyInput(KEY.U)) this.pos.y--;
    if(Input.isKeyInput(KEY.D)) this.pos.y++;
  }
}
