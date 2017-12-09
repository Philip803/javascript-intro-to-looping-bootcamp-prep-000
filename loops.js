function forLoop(){
  var array = [];
  for(let i = 0 ; i < 25 ; i++){
    array.push =  'I am ${i === 1 ? 1 : i} stange loop.'
  }
  return array;
}