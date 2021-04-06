
program3b.onshow=function(){
  for(let j = 0; j < favBabyName.length; j++) {
  favBabys.addItem(favBabyName[j])
  }
  
  
}

favbtn.onclick=function(){
  overallFav = favBabys.value
  lbl3.value = `Your favorite was ${overallFav}`
  
}
