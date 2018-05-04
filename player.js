import Entity from "./entity.js";
import Input from "./input.js";
import EM from "./eM.js";
import Text from "./text.js";
import Game from "./game.js";

export default class Player extends Entity{
  constructor(pos){
    super(pos);
    this.vel = VEC0();
    this.dir = "R";
    this.name = "player";
    this.count = 0;
    this.HP = 0;//すこあ
    this.interval = 15;
  }
  Step(){
    this.lastSteppedTime = timer;
    switch(this.dir){
      case "R" : this.pos.x += (32+pad);break;
      case "L" : this.pos.x -= (32+pad);break;
      case "U" : this.pos.y -= (32+pad);break;
      case "D" : this.pos.y += (32+pad);break;
    }
    if(this.pos.x<0)this.pos.x+=288;
    if(this.pos.y<0)this.pos.y+=288;
    this.pos.x %= 288
    this.pos.y %= 288
    this.count+=1;
    this.count %= 7;
    if(this.count == 6){
      EM.Step();
      this.color.r = 255
        EM.lifeList.forEach((e)=>{
          if(e.pos.x+2 == this.pos.x){
            if(e.pos.y+2 == this.pos.y){
              Game.state = "RESULT";
            }
          }
        })
        this.HP++;
    }else{
      this.color.r = 55
    }
  }
  Update(){
    if(timer%this.interval==this.interval-1)this.Step();
    let d = -(this.lastSteppedTime-timer)/30;
    this.size = 28;

    let po = ["R","L","U","D"];
    po.forEach((e=>{
      if(Input.isKeyInput(KEY[e]))this.dir = e;
    }))
    if(Input.isKeyInput(88)){
      this.interval--;
      this.interval = Math.max(1,this.interval);
      }
  }
}
