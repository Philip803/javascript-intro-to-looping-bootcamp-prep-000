function forLoop(array){
  for(let i = 0 ; i < 25 ; i++){
    array.push =  `I am ${i === 0 ? "0" : "i + 1"} strange loops.`
  }
  return array;
}