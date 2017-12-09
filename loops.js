function forLoop(){
  var array = [];
  for(let i = 0 ; i < 25 ; i++){
    array.push =  'I am ${i === 0 ? "1" : "i + 1"} strange loop.'
  }
  return array;
}