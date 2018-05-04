import Drawer from "./drawer.js";
import EM from "./eM.js";
import Input from "./input.js";

export default class Game{
  static Boot(){
    this.Init();
  }
  static Init(){
    Drawer.Init();
    EM.Init();
    this.state = "GAME";
    this.Run();
  }
  static Update(){
    EM.Update();
  }
  static UpdateTitle(){
  }
  static UpdateResult(){
    if(Input.isKeyInput(84)){
        let tweet = ["http://twitter.com/intent/tweet?text=",EM.player.HP,"点でした https://stop.uynet.trap.show &hashtags=traP3jam"] ;
        let con  =  tweet.join("");
        location.href = (con);
    }
  }
  static Run(){
    requestAnimationFrame(Game.Run);
    switch(Game.state){
      case "TITLE" : Game.UpdateTitle(); break;
      case "GAME" : Game.Update(); break;
      case "RESULT" : Game.UpdateResult(); break;
    }
    
    Drawer.Render();
    timer++;
  }
}
