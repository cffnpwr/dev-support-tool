// 入力フォーム

//自動更新
function genText() {
    const color = genTextColorCode();
    const bgc = genBackGroundColorCode();
    const pos = genPositionCode();
    const align = genAlignmentCode();
    const shadow = genShadowCode();
    const size = genFontSizeCode();
    const weight = genFontWeightCode();

    const inputText = h(document.getElementById("inputMessage").value);

    const outputCode = '<div class="' + color + ' ' + bgc + ' ' + pos + ' ' + align + ' ' + shadow + ' ' + size + ' ' + weight + '">\n\t' + inputText + '\n</div>';

    genCode(outputCode);
}

// 文字色
function genTextColorCode() {
    const selectTextColor = document.getElementById("textColor");

    const selectedIndex = selectTextColor.selectedIndex;
    const selectedValue = selectTextColor.options[selectedIndex].value;

    const outputTextColor = "text-" + selectedValue + " container";

    return outputTextColor;
}

// 背景色
function genBackGroundColorCode() {
    const selectBackGroundColor = document.getElementById("backGroundColor");

    const selectedIndex = selectBackGroundColor.selectedIndex;
    const selectedValue = selectBackGroundColor.options[selectedIndex].value;

    if (selectedValue == "null") {
        return;
    } else {
        const outputBackGroundColor = "bg-" + selectedValue;

        return outputBackGroundColor;
    }
}

// 位置ヘルパー
function genPositionCode() {
    const selectPosition = document.getElementById("position");

    const selectedIndex = selectPosition.selectedIndex;
    const outputPosition = selectPosition.options[selectedIndex].value;

    return outputPosition;
}

// 文字の配置
function genAlignmentCode() {
    const selectAlignment = document.getElementById("alignment");

    const selectedIndex = selectAlignment.selectedIndex;
    const outputAlignment = selectAlignment.options[selectedIndex].value;

    return outputAlignment;
}

// 影の追加
function genShadowCode() {
    const selectShadow = document.getElementById("shadow");

    const selectedIndex = selectShadow.selectedIndex;
    const outputShadow = selectShadow.options[selectedIndex].value;

    return outputShadow;
}

// 文字の大きさ
function genFontSizeCode() {
    const selectFontSize = document.getElementById("fontSize");

    const selectedIndex = selectFontSize.selectedIndex;
    const outputFontSize = selectFontSize.options[selectedIndex].value;

    return outputFontSize;
}

// 文字の太さ
function genFontWeightCode() {
    const selectFontWeight = document.getElementById("fontWeight");

    const selectedIndex = selectFontWeight.selectedIndex;
    const outputFontWeight = selectFontWeight.options[selectedIndex].value;

    return outputFontWeight;
}

