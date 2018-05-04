import Drawer from "./drawer.js";
import Player from "./player.js";
import Tile from "./tile.js";
import Text from "./text.js";
import Life from "./life.js";
//entityManager
export default class EM{

  static Init(){
    this.list = [];
    this.lifeList = [];
    this.player = null;
    this.Set();
  }
  static Grid(p){
    return Vec2(p.x*(32+pad),p.y*(32+pad));
  }
  static Step(){
    let x = Math.floor(Math.random()*8) 
    let y = Math.floor(Math.random()*8) 
    let p = this.Grid(Vec2(x,y));
    this.Add(new Life(p));
  }
  static Set(){
    this.LaidTail();
    for(let i = 0;i<8;i++) this.Step();
    this.lastSteppedTime = 0
    let x = Math.floor(Math.random()*8) 
    let y = Math.floor(Math.random()*8) 
    let p = this.Grid(Vec2(x,y));
    p.x += 2;
    p.y += 2;
    this.Add(new Player(p));
  }
  static LaidTail(){
    for(let x = 0;x<8;x++){
      for(let y = 0;y<8;y++){
        let p = Vec2(x*(32+pad),y*(32+pad));
        let tile = new Tile(p);
        if((x%2-0.5)*(y%2-0.5)>0){
          tile.color.r = 215;
          tile.color.g = 185;
          tile.color.b = 205;
        }else{
          tile.color.r = 170;
          tile.color.g = 180;
          tile.color.b = 210;
        }
        this.Add(tile);
      }
    }
  }
  static Add(entity){
    if(entity.name == "player")this.player = entity;
    if(entity.name == "life")this.lifeList.push(entity);
    this.list.push(entity);
    Drawer.Add(entity);
  }
  static Update(){
    this.list.forEach(e=>e.Update());
  }
}
