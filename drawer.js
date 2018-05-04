export default class Drawer{
  static Init(){
    this.canvas = document.getElementById("po");
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext("2d");
    this.Stage = [];//ステージてきな
    this.layer = [];
  }
  static Add(entity){
    this.Stage.push(entity);
  }
  static Render(){
    this.ctx.fillStyle = "rgb(250, 250, 250)";
    this.ctx.fillRect(0, 0, 400, 400);
      this.ctx.stroke();

    this.Stage.forEach(e=>{
      this.ctx.fillStyle = "rgb(50, 50, 50)";
      this.ctx.fillRect(e.pos.x, e.pos.y, 32, 32);
      this.ctx.stroke();
    });
  }
}
