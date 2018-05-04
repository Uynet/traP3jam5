import Drawer from "./drawer.js";
import EM from "./eM.js";

export default class Game{
  static Boot(){
    this.Init();
  }
  static Init(){
    Drawer.Init();
    EM.Init();
    this.Run();
  }
  static Update(){
    EM.Update();
  }
  static Run(){
    requestAnimationFrame(Game.Run);
    Game.Update();
    Drawer.Render();
    timer++;
  }
}
