// 初期化
window.addEventListener('DOMContentLoaded', codeGenerator, false);


//値配列
const vList = ["Auto", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96]


// Sizing (縦)
const divSizeHeight = document.getElementById("divSizeHeight");
const divSizeHeightClass = "h-";
let divSizeHeightCode = "";

divSizeHeight.addEventListener('input', function () {
    divSizeHeightCode = giveClass(vList[divSizeHeight.value], divSizeHeightClass);
    document.getElementById("divSizeHeihgtValue").innerHTML = displayValue(divSizeHeight.value);
    codeGenerator();
}, false);

// Sizing (横)
const divSizeWidth = document.getElementById("divSizeWidth");
const divSizeWidthClass = "&nbspw-";
let divSizeWidthCode = "";

divSizeWidth.addEventListener('input', function () {
    divSizeWidthCode = giveClass(vList[divSizeWidth.value], divSizeWidthClass);
    document.getElementById("divSizeWidthValue").innerHTML = displayValue(divSizeWidth.value);
    codeGenerator();
}, false);


// クラス付与
function giveClass(parameter, className) {
    if (parameter == "Auto") {
        return "";
    } else {
        return className + parameter;
    }
}


// 値の表示
function displayValue(parameter) {
    if (vList[parameter] == 0) {
        return "Auto";
    } else {
        return vList[parameter];
    }
}


// コード生成
function codeGenerator() {
    const codeGeneration = '<div class="' + divSizeHeightCode + divSizeWidthCode + '"></div>'
    document.getElementById("outputCode").innerHTML = codeGeneration;
}