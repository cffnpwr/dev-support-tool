// 入力フォーム


// 文字色
let selectTextColor = document.querySelector('[name="textColor"]');
let outputTextColor = '"text-dark container';

selectTextColor.onchange = event => {
  if (0 === selectTextColor.selectedIndex){
    outputTextColor = '"text-dark container';
  }else if (1 === selectTextColor.selectedIndex){
    outputTextColor = '"text-light container';
  }else if (2 === selectTextColor.selectedIndex){
    outputTextColor = '"text-primary container';
  }else if (3 === selectTextColor.selectedIndex){
    outputTextColor = '"text-secondary container';
  }else if (4 === selectTextColor.selectedIndex){
    outputTextColor = '"text-success container';
  }else if (5 === selectTextColor.selectedIndex){
    outputTextColor = '"text-info container';
  }else if (6 === selectTextColor.selectedIndex){
    outputTextColor = '"text-warning container';
  }else if (7 === selectTextColor.selectedIndex){
    outputTextColor = '"text-danger container';
  }
};

// 背景色
let selectBackgroundColor = document.querySelector('[name="backgroundColor"]');
let outputBackgroundColor = 'bg-white"';

selectBackgroundColor.onchange = event => {
  if (0 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-dark"';
  }else if (1 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-white"';
  }else if (2 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-primary"';
  }else if (3 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-secondary"';
  }else if (4 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-success"';
  }else if (5 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-info"';
  }else if (6 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-warning"';
  }else if (7 === selectBackgroundColor.selectedIndex){
    outputBackgroundColor = 'bg-danger"';
  }
};

// 位置ヘルパー
let selectPosition = document.querySelector('[name="position"]');
let outputPosition = '';
selectPosition.onchange = event => {
  if (0 === selectPosition.selectedIndex){
    outputPosition = '';
  }else if (1 === selectPosition.selectedIndex){
    outputPosition = 'fixed-top ';
  }else if (2 === selectPosition.selectedIndex){
    outputPosition = 'fixed-bottom ';
  }
};

// 文字の配置
let selectTextAlignment = document.querySelector('[name="textAlignment"]');
let outputTextAlignment = 'text-start';

selectTextAlignment.onchange = event => {
  if (0 === selectTextAlignment.selectedIndex){
    outputTextAlignment = 'text-start';
  }else if (1 === selectTextAlignment.selectedIndex){
    outputTextAlignment = 'text-center';
  }else if (2 === selectTextAlignment.selectedIndex){
    outputTextAlignment = 'text-end';
  }
};

// 影の追加
let selectShadows = document.querySelector('[name="shadows"]');
let outputShadows = '';

selectShadows.onchange = event => {
  if (0 === selectShadows.selectedIndex){
    outputShadows = '';
  }else if (1 === selectShadows.selectedIndex){
    outputShadows = 'shadow ';
  }
};

// 文字の大きさ
let selectFontSize = document.querySelector('[name="fontSize"]');
let outputFontSize = 'fs-3';

selectFontSize.onchange = event => {
  if (0 === selectFontSize.selectedIndex){
    outputFontSize = 'fs-1';
  }else if (1 === selectFontSize.selectedIndex){
    outputFontSize = 'fs-2';
  }else if (2 === selectFontSize.selectedIndex){
    outputFontSize = 'fs-3';
  }else if (3 === selectFontSize.selectedIndex){
    outputFontSize = 'fs-4';
  }else if (4 === selectFontSize.selectedIndex){
    outputFontSize = 'fs-5';
  }
};

// 文字の太さ
let selectFontWeight = document.querySelector('[name="fontWeight"]');
let outputFontWeight = 'fw-normal';

selectFontWeight.onchange = event => {
  if (0 === selectFontWeight.selectedIndex){
    outputFontWeight = 'fw-bold';
  }else if (1 === selectFontWeight.selectedIndex){
    outputFontWeight = 'fw-bolder';
  }else if (2 === selectFontWeight.selectedIndex){
    outputFontWeight = 'fw-normal';
  }else if (3 === selectFontWeight.selectedIndex){
    outputFontWeight = 'fw-light';
  }else if (4 === selectFontWeight.selectedIndex){
    outputFontWeight = 'fw-lighter';
  }
};

// ボタンの挙動
let showMessage = () => {
  let textbox = document.getElementById("inputMessage");
  // 出力される内容
  let inputValue = "<div class="+ outputTextColor +" "+ outputPosition +""+ outputTextAlignment +" "+ outputShadows +""+ outputFontSize +" "+ outputFontWeight +" "+ outputBackgroundColor +">"+ textbox.value +"</div>"


  // 出力メッセージを生成
  let output = inputValue;
  // コードを表示
  document.getElementById("outputMessage").innerHTML = output;
}
