// 初期化
window.addEventListener('DOMContentLoaded', codeGenerator, false);


//値配列
const sizeList = ["Auto", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96]
const spaceList = ["None", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96]


// Sizing (縦)
const divSizeHeight = document.getElementById("divSizeHeight");
const divSizeHeightClass = "h-";
let divSizeHeightCode = "";

divSizeHeight.addEventListener('input', function () {
    divSizeHeightCode = giveClass(sizeList[divSizeHeight.value], divSizeHeightClass);
    document.getElementById("divSizeHeihgtValue").innerHTML = displaySize(divSizeHeight.value);
    codeGenerator();
}, false);

// Sizing (横)
const divSizeWidth = document.getElementById("divSizeWidth");
const divSizeWidthClass = "&nbspw-";
let divSizeWidthCode = "";

divSizeWidth.addEventListener('input', function () {
    divSizeWidthCode = giveClass(sizeList[divSizeWidth.value], divSizeWidthClass);
    document.getElementById("divSizeWidthValue").innerHTML = displaySize(divSizeWidth.value);
    codeGenerator();
}, false);


// Padding (上)
const divSpacePaddingTop = document.getElementById("divSpacePaddingTop");
const divSpacePaddingTopClass = "&nbsppt-";
let divSpacePaddingTopCode = "";

divSpacePaddingTop.addEventListener('input', function () {
    divSpacePaddingTopCode = giveClass(spaceList[divSpacePaddingTop.value], divSpacePaddingTopClass);
    document.getElementById("divSpacePaddingTopValue").innerHTML = displaySpace(divSpacePaddingTop.value);
    codeGenerator();
}, false);

// Padding (下)
const divSpacePaddingBottom = document.getElementById("divSpacePaddingBottom");
const divSpacePaddingBottomClass = "&nbsppb-";
let divSpacePaddingBottomCode = "";

divSpacePaddingBottom.addEventListener('input', function () {
    divSpacePaddingBottomCode = giveClass(spaceList[divSpacePaddingBottom.value], divSpacePaddingBottomClass);
    document.getElementById("divSpacePaddingBottomValue").innerHTML = displaySpace(divSpacePaddingBottom.value);
    codeGenerator();
}, false);

// Padding (右)
const divSpacePaddingRight = document.getElementById("divSpacePaddingRight");
const divSpacePaddingRightClass = "&nbsppr-";
let divSpacePaddingRightCode = "";

divSpacePaddingRight.addEventListener('input', function () {
    divSpacePaddingRightCode = giveClass(spaceList[divSpacePaddingRight.value], divSpacePaddingRightClass);
    document.getElementById("divSpacePaddingRightValue").innerHTML = displaySpace(divSpacePaddingRight.value);
    codeGenerator();
}, false);

// Padding (左)
const divSpacePaddingLeft = document.getElementById("divSpacePaddingLeft");
const divSpacePaddingLeftClass = "&nbsppl-";
let divSpacePaddingLeftCode = "";

divSpacePaddingLeft.addEventListener('input', function () {
    divSpacePaddingLeftCode = giveClass(spaceList[divSpacePaddingLeft.value], divSpacePaddingLeftClass);
    document.getElementById("divSpacePaddingLeftValue").innerHTML = displaySpace(divSpacePaddingLeft.value);
    codeGenerator();
}, false);

// Margin (上)
const divSpaceMarginTop = document.getElementById("divSpaceMarginTop");
const divSpaceMarginTopClass = "&nbspmt-";
let divSpaceMarginTopCode = "";

divSpaceMarginTop.addEventListener('input', function () {
    divSpaceMarginTopCode = giveClass(spaceList[divSpaceMarginTop.value], divSpaceMarginTopClass);
    document.getElementById("divSpaceMarginTopValue").innerHTML = displaySpace(divSpaceMarginTop.value);
    codeGenerator();
}, false);

// Margin (下)
const divSpaceMarginBottom = document.getElementById("divSpaceMarginBottom");
const divSpaceMarginBottomClass = "&nbspmb-";
let divSpaceMarginBottomCode = "";

divSpaceMarginBottom.addEventListener('input', function () {
    divSpaceMarginBottomCode = giveClass(spaceList[divSpaceMarginBottom.value], divSpaceMarginBottomClass);
    document.getElementById("divSpaceMarginBottomValue").innerHTML = displaySpace(divSpaceMarginBottom.value);
    codeGenerator();
}, false);

// Margin (右)
const divSpaceMarginRight = document.getElementById("divSpaceMarginRight");
const divSpaceMarginRightClass = "&nbspmr-";
let divSpaceMarginRightCode = "";

divSpaceMarginRight.addEventListener('input', function () {
    divSpaceMarginRightCode = giveClass(spaceList[divSpaceMarginRight.value], divSpaceMarginRightClass);
    document.getElementById("divSpaceMarginRightValue").innerHTML = displaySpace(divSpaceMarginRight.value);
    codeGenerator();
}, false);

// Margin (左)
const divSpaceMarginLeft = document.getElementById("divSpaceMarginLeft");
const divSpaceMarginLeftClass = "&nbspml-";
let divSpaceMarginLeftCode = "";

divSpaceMarginLeft.addEventListener('input', function () {
    divSpaceMarginLeftCode = giveClass(spaceList[divSpaceMarginBottom.value], divSpaceMarginLeftClass);
    document.getElementById("divSpaceMarginLeftValue").innerHTML = displaySpace(divSpaceMarginLeft.value);
    codeGenerator();
}, false);


// クラス付与
function giveClass(parameter, className) {
    if (parameter == "Auto") {
        return "";
    } else if (parameter == "None") {
        return "";
    } else {
        return className + parameter;
    }
}


// Sizing 値の表示
function displaySize(parameter) {
    if (sizeList[parameter] == 0) {
        return "Auto";
    } else {
        return sizeList[parameter];
    }
}

// Spacing 値の表示
function displaySpace(parameter) {
    if (spaceList[parameter] == 0) {
        return "None";
    } else {
        return spaceList[parameter];
    }
}


// コード生成
function codeGenerator() {
    const codeGeneration = '<div class="' + divSizeHeightCode + divSizeWidthCode + divSpacePaddingTopCode + divSpacePaddingBottomCode + divSpacePaddingRightCode + divSpacePaddingLeftCode + divSpaceMarginTopCode + divSpaceMarginBottomCode + divSpaceMarginRightCode + divSpaceMarginLeftCode + '"></div>'
    document.getElementById("outputCode").innerHTML = codeGeneration;
}