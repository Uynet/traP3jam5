const pad = 4;
let timer = 0;
const cl = console.log;
const Vec2 = (x,y)=>{
  return {
    x : x,
    y : y,
  }
}

const KEY = {
  X : 88,
  L : 37,
  U : 38,
  R : 39,
  D : 40,
}
const CPV = (v)=>{
  return {
    x : v.x,
    y : v.y,
  }
}
const VEC0 = ()=>{
  return {
    x : 0,
    y : 0,
  }
}
const sq = (e)=>{
  return e*e;
};
