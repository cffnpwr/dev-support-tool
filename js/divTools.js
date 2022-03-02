// 初期化
window.addEventListener('DOMContentLoaded', function () {updatePreview(); }, false);


//値配列
const sizeList = ["Auto", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96];
const spaceList = ["None", 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60, 64, 72, 80, 96];
const shadowList = ["None", "sm", "md", "lg", "xl", "2xl"];

function updateShadowColorValue() {
    updateColorValue("rounded w-7 border-2 mr-4 value", "divShadowColorValue", "divShadowColorParamColor", "divShadowColorParamDarkness", "shadow");
}

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


// Box Shadow (大きさ)
const divShadowSize = document.getElementById("divShadowSize");
const divShadowSizeClass = "&nbspshadow-";
let divShadowSizeCode = "";

divShadowSize.addEventListener('input', function () {
    divShadowSizeCode = giveClass(shadowList[divShadowSize.value], divShadowSizeClass);
    document.getElementById("divShadowSizeValue").innerHTML = shadowList[divShadowSize.value];
    if (shadowList[divShadowSize.value] != "None") {
        document.getElementById("divShadowColor").disabled = false;
        divShadowColorCode = giveClass(divShadowColor.value, divShadowColorClass);
    } else {
        document.getElementById("divShadowColor").disabled = true;
        divShadowColorCode = "";
    };
    codeGenerator();
}, false);

// Box Shadow (色)
const divShadowColor = document.getElementById("divShadowColor");
let divShadowColorPreview = document.getElementById("divShadowColorPreview");
const divShadowColorClass = "&nbspshadow-";
let divShadowColorCode = "";

divShadowColor.addEventListener('input', function () {
    updateShadowColorValue()
    divShadowColorCode = giveClass(divShadowColor.value, divShadowColorClass);
    codeGenerator();
}, false);


// Background Color
// const divBackgroundColor = document.getElementById("divBackgroundColor");
// let divBackgroundColorPreview = document.getElementById("divBackgroundColorPreview");
// const divBackgroundColorClass = "&nbspbg-";
// let divBackgroundColorCode = "";

// divBackgroundColor.addEventListener('input', function () {
//     divBackgroundColorPreview.innerHTML = "<div class='w-12 h-7 bgColorBorder bg-" + divBackgroundColor.value + "'></div>";
//     divBackgroundColorCode = giveClass(divBackgroundColor.value, divBackgroundColorClass);
//     codeGenerator();
// }, false);


// クラス付与
function giveClass(parameter, className) {
    if (parameter == "Auto" || parameter == "None" || parameter == "") {
        return "";
    } else {
        return className + parameter;
    }
};


// コード生成器
function codeGenerator() {
    const codeGeneration = '<div class="' + divSizeHeightCode + divSizeWidthCode + divSpacePaddingTopCode + divSpacePaddingBottomCode + divSpacePaddingRightCode + divSpacePaddingLeftCode + divSpaceMarginTopCode + divSpaceMarginBottomCode + divSpaceMarginRightCode + divSpaceMarginLeftCode + '"></div>'
    document.getElementById("outputCode").innerHTML = codeGeneration;
};

function updatePreview() {
    //コード領域のDOM
    const codeBlock = document.getElementById("codeBlock");
    //プレビュー領域のDOM
    const previewBlock = document.getElementById("previewBlock");
    //入力されたテキスト
    const inputText = document.getElementById("inputText").value.replace(/\r?\n/g, '<br>');

    const tag = document.getElementById("tagValue").value;

    //プレビュー用のDOMを作成
    const preview = document.createElement(tag);

    //出力されるDOMのclassのリスト
    let previewClassList = [];

    const valueDOMs = document.getElementsByClassName("value");

    for (const dom of valueDOMs) {
        const value = dom.value;

        if (value !== "none" && value !== undefined)
            previewClassList.push(value);
    }

    let flag;

    if (document.getElementById("isLine").checked === true) {
        flag = true;

        const lineValueDOMs = document.getElementsByClassName("lineValue");

        for (const dom of lineValueDOMs) {
            const value = dom.value;

            if (value !== "none" && value !== undefined)
                previewClassList.push(value);
        }
    } else
        flag = false;

    const lineParamDOMs = document.getElementsByClassName("lineParam");

    for (const dom of lineParamDOMs)
        if (flag !== true)
            dom.setAttribute("disabled", "true");

        else
            dom.removeAttribute("disabled");

    preview.innerHTML = inputText;
    if (previewClassList.length !== 0)
        preview.classList.add(...previewClassList);

    previewBlock.textContent = null;
    previewBlock.appendChild(preview);
    console.log(previewClassList);

    //コード領域に出力
    const code = preview.outerHTML;

    codeBlock.value = code;
}