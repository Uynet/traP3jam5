import Drawer from "./drawer.js";
import Entity from "./entity.js";
//entityManager
export default class EM{
  static Init(){
    this.list = [];
    this.Add(new Entity(Vec2(200-16,200-16)));
  }
  static Add(entity){
    this.list.push(entity);
    Drawer.Add(entity);
  }
  static Update(){
    this.list.forEach(e=>e.Update());
  }
}
