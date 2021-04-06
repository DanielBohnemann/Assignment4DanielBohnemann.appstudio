let babyName = ["Danny", "Sam", "Chris", "John", "Jacob", "Maddy", "Micah", "Michael", "Pat", "Liz", "Kate", "Jess", "Morgan", "Jeff", "Jim", "Jackson", "Jack", "Boston", "Bryce", "Matt"]
let favBabyName = []
program3.onshow=function(){
  babyNames.clear()
  for (i = 0; i < babyName.length; i++)
    babyNames.addItem(babyName[i])
}






btn1.onclick=function(){
  favBabyName.push(babyNames.value)
  console.log(favBabyName)
}

Button1.onclick=function(){
  ChangeForm(program3b)
}
