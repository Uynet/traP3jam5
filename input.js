let inputedKeyList = (new Array(256)).fill(false);
let clickedKeyList = (new Array(256)).fill(false);
let anyKeyPress = false;

export default class Input{
  /*押下状態のときtrue*/
  static isKeyInput(key){
    return inputedKeyList[key];
  }
}
/*receive input event*/
document.onkeydown = e=> {
  anyKeyPress = true;
  inputedKeyList[event.keyCode] = true;
  //上下キーを封じる
  switch(e.keyCode){
    case KEY.UP: 
    case KEY.DOWN: 
    case KEY.RIGHT: 
    case KEY.LEFT: 
    case KEY.SP: event.preventDefault();
  }
};
document.onkeyup = e=>{
  anyKeyPress = false;
  clickedKeyList[event.keyCode] = false;
  inputedKeyList[event.keyCode] = false;
};

