const quizCapitalJapan = '日本の首都は？';
const correctAnswer = '正解';
const incorrectAnswer = '不正解';
//let flg=true;
//while(flg){
while(true){
  if(prompt(quizCapitalJapan)=== '東京'){
    alert(`${correctAnswer}です！`);
    break;
  }else{
  alert(`${incorrectAnswer}です！`);
  }
}