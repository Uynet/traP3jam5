import EM from "./eM.js";
import Game from "./game.js";

export default class Drawer{
  static Init(){
    this.canvas = document.getElementById("po");
    this.canvas.width = 284;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext("2d");
    this.Stage = [];//ステージてきな
    this.layer = [];
  }
  static Add(entity){
    this.Stage.push(entity);
  } static Render(){
    //clear
    this.ctx.fillStyle = "rgb(250, 250, 250)";
    this.ctx.fillRect(0, 0, 400, 400);
    this.ctx.stroke();

    this.Stage.forEach(e=>{
      switch(e.shape){
        case "box" :
          this.ctx.fillStyle = "rgb("+e.color.r+","+e.color.g+","+e.color.b+")";
          this.ctx.fillRect(e.pos.x, e.pos.y, e.size, e.size);
          this.ctx.stroke();
          break;
        case "text" :
          this.ctx.font = "18px 'ＭＳ Ｐゴシック'";
          this.ctx.strokeStyle = "white";
          this.ctx.strokeText(e.text,e.pos.x,e.pos.y);
          break;
      }
    });
    this.ctx.font = "18px 'ＭＳ Ｐゴシック'";
    this.ctx.strokeStyle = "white";
    this.ctx.strokeText(6-EM.player.count,EM.player.pos.x+8,EM.player.pos.y+22);
    this.ctx.strokeStyle = "black";
    this.ctx.strokeText("すこあ : "+EM.player.HP,85,320)
    if(Game.state == "RESULT"){
      this.ctx.strokeStyle = "black";
      this.ctx.strokeText("げーむおーばー",85,350)
      this.ctx.strokeText("Tキーでツイート",85,380)
    }
  }
}
