// 初期化
window.addEventListener('DOMContentLoaded', codeGenerator, false);


//値配列
const sizeList = ["Auto", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96];
const spaceList = ["None", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96];
const shadowList = ["None", "sm", "md", "lg", "xl", "2xl"];
const colorList = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const bordersList = ["None", 1, 2, 4, 8];
const bordersRadiusList = ["None", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const rotateList = ["None", 0, 1, 2, 3, 6, 12, 45, 90, 180];
const floatsList = ["None", "right", "left"];

// Sizing (縦)

// 値の取得
const divSizeHeight = document.getElementById("divSizeHeight");
// クラス名の指定
const divSizeHeightClass = "h-";
// Sizing (縦) のコード用変数を宣言
let divSizeHeightCode = "";

// 値が変更されたら実行
divSizeHeight.addEventListener('input', function () {
    // Sizing (縦) のコードを生成
    divSizeHeightCode = giveClass(sizeList[divSizeHeight.value], divSizeHeightClass);
    // 取得した値を HTML に表示
    document.getElementById("divSizeHeihgtValue").innerHTML = sizeList[divSizeHeight.value];
    // 出力コード生成器の実行
    codeGenerator();
}, false);

// Sizing (横)
const divSizeWidth = document.getElementById("divSizeWidth");
const divSizeWidthClass = "&nbspw-";
let divSizeWidthCode = "";

divSizeWidth.addEventListener('input', function () {
    divSizeWidthCode = giveClass(sizeList[divSizeWidth.value], divSizeWidthClass);
    document.getElementById("divSizeWidthValue").innerHTML = sizeList[divSizeWidth.value];
    codeGenerator();
}, false);


// Padding (上)
const divSpacePaddingTop = document.getElementById("divSpacePaddingTop");
const divSpacePaddingTopClass = "&nbsppt-";
let divSpacePaddingTopCode = "";

divSpacePaddingTop.addEventListener('input', function () {
    divSpacePaddingTopCode = giveClass(spaceList[divSpacePaddingTop.value], divSpacePaddingTopClass);
    document.getElementById("divSpacePaddingTopValue").innerHTML = spaceList[divSpacePaddingTop.value];
    codeGenerator();
}, false);

// Padding (下)
const divSpacePaddingBottom = document.getElementById("divSpacePaddingBottom");
const divSpacePaddingBottomClass = "&nbsppb-";
let divSpacePaddingBottomCode = "";

divSpacePaddingBottom.addEventListener('input', function () {
    divSpacePaddingBottomCode = giveClass(spaceList[divSpacePaddingBottom.value], divSpacePaddingBottomClass);
    document.getElementById("divSpacePaddingBottomValue").innerHTML = spaceList[divSpacePaddingBottom.value];
    codeGenerator();
}, false);

// Padding (右)
const divSpacePaddingRight = document.getElementById("divSpacePaddingRight");
const divSpacePaddingRightClass = "&nbsppr-";
let divSpacePaddingRightCode = "";

divSpacePaddingRight.addEventListener('input', function () {
    divSpacePaddingRightCode = giveClass(spaceList[divSpacePaddingRight.value], divSpacePaddingRightClass);
    document.getElementById("divSpacePaddingRightValue").innerHTML = spaceList[divSpacePaddingRight.value];
    codeGenerator();
}, false);

// Padding (左)
const divSpacePaddingLeft = document.getElementById("divSpacePaddingLeft");
const divSpacePaddingLeftClass = "&nbsppl-";
let divSpacePaddingLeftCode = "";

divSpacePaddingLeft.addEventListener('input', function () {
    divSpacePaddingLeftCode = giveClass(spaceList[divSpacePaddingLeft.value], divSpacePaddingLeftClass);
    document.getElementById("divSpacePaddingLeftValue").innerHTML = spaceList[divSpacePaddingLeft.value];
    codeGenerator();
}, false);

// Margin (上)
const divSpaceMarginTop = document.getElementById("divSpaceMarginTop");
const divSpaceMarginTopClass = "&nbspmt-";
let divSpaceMarginTopCode = "";

divSpaceMarginTop.addEventListener('input', function () {
    divSpaceMarginTopCode = giveClass(spaceList[divSpaceMarginTop.value], divSpaceMarginTopClass);
    document.getElementById("divSpaceMarginTopValue").innerHTML = spaceList[divSpaceMarginTop.value];
    codeGenerator();
}, false);

// Margin (下)
const divSpaceMarginBottom = document.getElementById("divSpaceMarginBottom");
const divSpaceMarginBottomClass = "&nbspmb-";
let divSpaceMarginBottomCode = "";

divSpaceMarginBottom.addEventListener('input', function () {
    divSpaceMarginBottomCode = giveClass(spaceList[divSpaceMarginBottom.value], divSpaceMarginBottomClass);
    document.getElementById("divSpaceMarginBottomValue").innerHTML = spaceList[divSpaceMarginBottom.value];
    codeGenerator();
}, false);

// Margin (右)
const divSpaceMarginRight = document.getElementById("divSpaceMarginRight");
const divSpaceMarginRightClass = "&nbspmr-";
let divSpaceMarginRightCode = "";

divSpaceMarginRight.addEventListener('input', function () {
    divSpaceMarginRightCode = giveClass(spaceList[divSpaceMarginRight.value], divSpaceMarginRightClass);
    document.getElementById("divSpaceMarginRightValue").innerHTML = spaceList[divSpaceMarginRight.value];
    codeGenerator();
}, false);

// Margin (左)
const divSpaceMarginLeft = document.getElementById("divSpaceMarginLeft");
const divSpaceMarginLeftClass = "&nbspml-";
let divSpaceMarginLeftCode = "";

divSpaceMarginLeft.addEventListener('input', function () {
    divSpaceMarginLeftCode = giveClass(spaceList[divSpaceMarginLeft.value], divSpaceMarginLeftClass);
    document.getElementById("divSpaceMarginLeftValue").innerHTML = spaceList[divSpaceMarginLeft.value];
    codeGenerator();
}, false);


// Box Shadow (有効化)
const checkBoxShadow = document.getElementById("isShadow");
const enableDivShadowSize = document.getElementById("divShadowSize");

checkBoxShadow.addEventListener('change', function () {
    // 有効時
    if (checkBoxShadow.checked) {
        // Box Shadow (大きさ)
        enableDivShadowSize.disabled = false;
        divShadowSizeCode = giveClass(shadowList[divShadowSize.value], divShadowSizeClass);
        document.getElementById("divShadowSizeValue").innerHTML = shadowList[divShadowSize.value];
        codeGenerator();

        // 無効時
    } else {
        // Box Shadow (大きさ)
        enableDivShadowSize.disabled = true;
        divShadowSizeCode = "";
        codeGenerator();
    }
}, false);


// Box Shadow (大きさ)
const divShadowSize = document.getElementById("divShadowSize");
const divShadowSizeClass = "&nbspshadow-";
let divShadowSizeCode = "";

divShadowSize.addEventListener('input', function () {
    divShadowSizeCode = giveClass(shadowList[divShadowSize.value], divShadowSizeClass);
    document.getElementById("divShadowSizeValue").innerHTML = shadowList[divShadowSize.value];
    codeGenerator();
}, false);


// Box Shadow (色)


// Borders (有効化)
const checkBorders = document.getElementById("isBorders");
const enableDivBordersWidth = document.getElementById("divBordersWidth");
const enableDivBordersRadius = document.getElementById("divBordersRadius");

checkBorders.addEventListener('change', function () {
    // 有効時
    if (checkBorders.checked) {
        // Borders (太さ)
        enableDivBordersWidth.disabled = false;
        divBordersWidthCode = giveClass(bordersList[divBordersWidth.value], divBordersWidthClass);
        document.getElementById("divBordersWidthValue").innerHTML = bordersList[divBordersWidth.value];

        // Borders (角)
        enableDivBordersRadius.disabled = false;
        divBordersRadiusCode = giveClass(bordersRadiusList[divBordersRadius.value], divBordersRadiusClass);
        document.getElementById("divBordersRadiusValue").innerHTML = bordersRadiusList[divBordersRadius.value];

        codeGenerator();

        // 無効時
    } else {
        // Borders (太さ)
        enableDivBordersWidth.disabled = true;
        divBordersWidthCode = "";

        // Borders (角)
        enableDivBordersRadius.disabled = true;
        divBordersRadiusCode = "";

        codeGenerator();
    }
}, false);


// Borders (太さ)
const divBordersWidth = document.getElementById("divBordersWidth");
const divBordersWidthClass = "&nbspborder&nbspborder-";
let divBordersWidthCode = "";

divBordersWidth.addEventListener('input', function () {
    divBordersWidthCode = giveClass(bordersList[divBordersWidth.value], divBordersWidthClass);
    document.getElementById("divBordersWidthValue").innerHTML = bordersList[divBordersWidth.value];
    codeGenerator();
}, false);


// Borders (角)
const divBordersRadius = document.getElementById("divBordersRadius");
const divBordersRadiusClass = "&nbsprounded-";
let divBordersRadiusCode = "";

divBordersRadius.addEventListener('input', function () {
    divBordersRadiusCode = giveClass(bordersRadiusList[divBordersRadius.value], divBordersRadiusClass);
    document.getElementById("divBordersRadiusValue").innerHTML = bordersRadiusList[divBordersRadius.value];
    codeGenerator();
}, false);


// Borders (色)


// Background Color


// Rotate
const divRotate = document.getElementById("divRotate");
const divRotateClass = "&nbsprotate-";
let divRotateCode = "";

divRotate.addEventListener('input', function () {
    divRotateCode = giveClass(rotateList[divRotate.value], divRotateClass);
    document.getElementById("divRotateValue").innerHTML = rotateList[divRotate.value];
    codeGenerator();
}, false);


// Floats
const divFloat = document.getElementById("divFloat");
const divFloatClass = "&nbspfloat-";
let divFloatCode = "";

divFloat.addEventListener('input', function () {
    divFloatCode = giveClass(floatsList[divFloat.value], divFloatClass);
    document.getElementById("divFloatValue").innerHTML = floatsList[divFloat.value];
    codeGenerator();
}, false);


// Flex (有効化)
const checkFlex = document.getElementById("isFlex");
let divFlexCode = "";

checkFlex.addEventListener('change', function () {
    // 有効時
    if (checkFlex.checked) {
        divFlexCode = "&nbspflex"
        codeGenerator();

        // 無効時
    } else {
        divFlexCode = "";
        codeGenerator();
    }
}, false);






// クラス付与
function giveClass(parameter, className) {
    if (parameter == "Auto") {
        return "";
    } else if (parameter == "None") {
        return "";
    } else if (parameter == "") {
        return "";
    } else {
        return className + parameter;
    }
};


// コード生成器
function codeGenerator() {
    const codeGeneration = '<div class="'
        + divSizeHeightCode
        + divSizeWidthCode
        + divSpacePaddingTopCode
        + divSpacePaddingBottomCode
        + divSpacePaddingRightCode
        + divSpacePaddingLeftCode
        + divSpaceMarginTopCode
        + divSpaceMarginBottomCode
        + divSpaceMarginRightCode
        + divSpaceMarginLeftCode
        + divShadowSizeCode
        + divBordersWidthCode
        + divBordersRadiusCode
        + divRotateCode
        + divFloatCode
        + divFlexCode
        + '"></div>'
    document.getElementById("outputCode").innerHTML = codeGeneration;
};