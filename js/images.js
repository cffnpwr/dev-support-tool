// 入力フォーム

//自動更新
function genImage() {
    const color = genImageRuledLineColorCode();
    const shadow = genImageShadowCode();
    const size = genImageSizeChangeCode();
    const pos = genImagePlacementCode();

    const inputText = h(document.getElementById("inputImageMessage").value);

    const outputCode = '<img src=img/' + inputText + '.jpg class="' + color + ' ' + pos + ' ' + shadow + '" ' + size + '>\n\t';

    genCode(outputCode);
}

// 罫線の色
function genImageRuledLineColorCode() {
    const selectImageRuledLineColor = document.getElementById("imageRuledLineColor");

    const selectedIndex = selectImageRuledLineColor.selectedIndex;
    const selectedValue = selectImageRuledLineColor.options[selectedIndex].value;

    const outputImageRuledLineColor = "border-" + selectedValue + " border";

    return outputImageRuledLineColor;
}

// 画像の影
function genImageShadowCode() {
    const selectImageShadow = document.getElementById("imageShadow");

    const selectedIndex = selectImageShadow.selectedIndex;
    const outputImageShadow = selectImageShadow.options[selectedIndex].value;

    return outputImageShadow;
}

// 画像サイズ
function genImageSizeChangeCode() {
    const selectImageSizeChange = document.getElementById("imageSizeChange");

    const selectedIndex = selectImageSizeChange.selectedIndex;
    const outputImageSizeChange = selectImageSizeChange.options[selectedIndex].value;

    return outputImageSizeChange;
}

// 画像の配置
function genImagePlacementCode() {
    const selectImagePlacement = document.getElementById("imagePlacement");

    const selectedIndex = selectImagePlacement.selectedIndex;
    const outputImagePlacement = selectImagePlacement.options[selectedIndex].value;

    return outputImagePlacement;
}
