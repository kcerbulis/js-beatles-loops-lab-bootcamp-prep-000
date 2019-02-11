const musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


var musicianArray = [];





function theBeatlesPlay(musician, instruments){
  for (let i = 0; i <= 3; ++i ){
    musicianArray.push(musician[i] + " plays " + instruments[i])
  }
  return musicianArray
}














var k = [];


function iLoveTheBeatles(num){
  do {
  k.push("I love the Beatles!");
  ++num
} while (num < 15);
  return k
}















