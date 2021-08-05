//  罫線の色
let selectImageRuledLineColor = document.querySelector('[name="imageRuledLineColor"]');
let outputImageRuledLineColor = '"border border-white';

selectImageRuledLineColor.onchange = event => {
    if (0 === selectImageRuledLineColor.selectedIndex){
        outputImageRuledLineColor = '"border border-dark';
    }
    else if (1 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-white';
    }
    else if (2 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-primary';
    }
    else if (3 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-secondary';
    }
    else if (4 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-success';
    }
    else if (5 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-info';
    }
    else if (6 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-warning';
    }
    else if (7 === selectImageRuledLineColor.selectedIndex)
    {
        outputImageRuledLineColor = '"border border-danger';
    }
};



// 影の追加
let selectImageShadow = document.querySelector('[name="ImageShadow"]');
let outputImageShadow = '';

selectImageShadow.onchange = event => {
    if (0 === selectImageShadow.selectedIndex)
    {
      outputImageShadow = '';
    }
    else if (1 === selectImageShadow.selectedIndex)
    {
      outputImageShadow = 'shadow';
    }
};



//  縦サイズ
let selectImageSizeChange = document.querySelector('[name="imageSizeChange"]');
let outputImageSizeChange = 'width="10%"';

selectImageSizeChange.onchange = event => {
    if (0 === selectImageSizeChange.selectedIndex){
        outputImageSizeChange = 'width="2.5%"';
    }
    else if (1 === selectImageSizeChange.selectedIndex)
    {
        outputImageSizeChange = 'width="5%"';
    }
    else if (2 === selectImageSizeChange.selectedIndex)
    {
        outputImageSizeChange = 'width="7.5%"';
    }
    else if (3 === selectImageSizeChange.selectedIndex)
    {
        outputImageSizeChange = 'width="10%"';
    }
};




// 画像の配置
let selectImagePlacement = document.querySelector('[name="imagePlacement"]');
let outputImagePlacement = 'rounded float-start"';

selectImagePlacement.onchange = event => {
  if (0 === selectImagePlacement.selectedIndex)
  {
    outputImagePlacement = 'rounded float-start"';
  }
  else if (1 === selectImagePlacement.selectedIndex)
  {
    outputImagePlacement = 'rounded mx-auto d-block"';
  }
  else if (2 === selectImagePlacement.selectedIndex)
  {
    outputImagePlacement = 'rounded float-end"';
  }
};


// ボタンの挙動
let showMessage = () => {
  let textbox = document.getElementById("inputMessage");
  // 出力される内容
  let inputValue = "<img src=" + textbox.value + ".jpg class=" + outputImageRuledLineColor +" "+ outputImageShadow +" "+ outputImagePlacement +" alt=" + textbox.value +" "+ outputImageSizeChange +">"


  // 出力メッセージを生成
  let output = inputValue;
  // コードを表示
  document.getElementById("outputMessage").innerHTML = output;
}