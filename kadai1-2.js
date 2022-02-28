const quizCapitalJapan = "日本の首都は？";
const correctAnswer = "正解";
const incorrectAnswer = "不正解";
let flg=true;
while(flg){
  if(flg=(window.prompt(quizCapitalJapan)!== "東京")){
    window.alert(`${incorrectAnswer}です！`);
    continue;
  }
  window.alert(`${correctAnswer}です！`);
}