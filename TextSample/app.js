// 入力フォーム


// 文字色
let selectTextColor = document.querySelector('[name="textColor"]');
let outputTextColor
selectTextColor.onchange = event => {
  if (0 === selectTextColor.selectedIndex){
    outputTextColor = Dark;
  }else if (1 === selectTextColor.selectedIndex){
    outputTextColor = Light;
  }else if (2 === selectTextColor.selectedIndex){
    outputTextColor = Primary;
  }else if (3 === selectTextColor.selectedIndex){
    outputTextColor = Secondary;
  }else if (4 === selectTextColor.selectedIndex){
    outputTextColor = Success;
  }else if (5 === selectTextColor.selectedIndex){
    outputTextColor = Info;
  }else if (6 === selectTextColor.selectedIndex){
    outputTextColor = Warning;
  }else if (7 === selectTextColor.selectedIndex){
    outputTextColor = Danger;
  }
};

// 背景色
let selectBackgroundColor = document.querySelector('[name="backgroundColor"]');

selectBackgroundColor.onchange = event => {
  if (0 === selectBackgroundColor.selectedIndex){

  }else if (1 === selectBackgroundColor.selectedIndex){

  }else if (2 === selectBackgroundColor.selectedIndex){

  }else if (3 === selectBackgroundColor.selectedIndex){

  }else if (4 === selectBackgroundColor.selectedIndex){

  }else if (5 === selectBackgroundColor.selectedIndex){

  }else if (6 === selectBackgroundColor.selectedIndex){

  }else if (7 === selectBackgroundColor.selectedIndex){

  }
};

// 背景グラデーション
let selectBackgroundGradation = document.querySelector('[name="backgroundGradation"]');

selectBackgroundGradation.onchange = event => {
  if (0 === selectBackgroundGradation.selectedIndex){

  }else if (1 === selectBackgroundGradation.selectedIndex){

  }else if (2 === selectBackgroundGradation.selectedIndex){

  }else if (3 === selectBackgroundGradation.selectedIndex){

  }else if (4 === selectBackgroundGradation.selectedIndex){

  }else if (5 === selectBackgroundGradation.selectedIndex){

  }else if (6 === selectBackgroundGradation.selectedIndex){

  }else if (7 === selectBackgroundGradation.selectedIndex){

  }
};

// 位置ヘルパー
let selectPosition = document.querySelector('[name="position"]');

selectPosition.onchange = event => {
  if (0 === selectPosition.selectedIndex){

  }else if (1 === selectPosition.selectedIndex){

  }else if (2 === selectPosition.selectedIndex){

  }
};

// 文字の配置
let selectTextAlignment = document.querySelector('[name="textAlignment"]');

selectTextAlignment.onchange = event => {
  if (0 === selectTextAlignment.selectedIndex){

  }else if (1 === selectTextAlignment.selectedIndex){

  }else if (2 === selectTextAlignment.selectedIndex){

  }
};

// 影の追加
let selectShadows = document.querySelector('[name="shadows"]');

selectShadows.onchange = event => {
  if (0 === selectShadows.selectedIndex){

  }else if (1 === selectShadows.selectedIndex){

  }
};

// 文字の大きさ
let selectFontSize = document.querySelector('[name="fontSize"]');

selectFontSize.onchange = event => {
  if (0 === selectFontSize.selectedIndex){

  }else if (1 === selectFontSize.selectedIndex){

  }else if (2 === selectFontSize.selectedIndex){

  }else if (3 === selectFontSize.selectedIndex){

  }else if (4 === selectFontSize.selectedIndex){

  }else if (5 === selectFontSize.selectedIndex){

  }
};

// 文字の太さ
let selectFontWeight = document.querySelector('[name="fontWeight"]');

selectFontWeight.onchange = event => {
  if (0 === selectFontWeight.selectedIndex){

  }else if (1 === selectFontWeight.selectedIndex){

  }else if (2 === selectFontWeight.selectedIndex){

  }else if (3 === selectFontWeight.selectedIndex){

  }else if (4 === selectFontWeight.selectedIndex){

  }else if (5 === selectFontWeight.selectedIndex){

  }
};

// ボタンの挙動
const showMessage = () => {
  const textbox = document.getElementById("inputMessage");
  const inputValue = textbox.value;

  //出力メッセージを生成
  const output = inputValue;
  //コードを表示
  document.getElementById("outputMessage").innerHTML = output;
}