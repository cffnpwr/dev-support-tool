function startObserver() {
    const fontWeightParam = document.getElementById("fontWeightParam");
    const fontSizeParam = document.getElementById("fontSizeParam");
    const textColorParamColor = document.getElementById("textColorParamColor");
    const textColorParamDarkness = document.getElementById("textColorParamDarkness");
    const lineColorParamColor = document.getElementById("lineColorParamColor");
    const lineColorParamDarkness = document.getElementById("lineColorParamDarkness");
    const lineWeightParam = document.getElementById("lineWeightParam");
    const lineOffsetParam = document.getElementById("lineOffsetParam");
    const italicValue = document.getElementById("italicValue");

    const settings = document.getElementById("settings");

    fontWeightParam.oninput = updateFontWeightValue;
    fontSizeParam.oninput = updateFontSizeValue;
    textColorParamColor.oninput = updateTextColorValue;
    textColorParamDarkness.oninput = updateTextColorValue;
    lineColorParamColor.oninput = updateLineColorValue;
    lineColorParamDarkness.oninput = updateLineColorValue;
    lineWeightParam.oninput = updateLineWeightValue;
    lineOffsetParam.oninput = updateLineOffsetValue;
    italicValue.oninput = updateItalicValue;

    settings.oninput = updatePreview;
}

function updateFontWeightValue(e) {
    // weight lists
    const weightList = ["none", "thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"];
    // doms
    const fontWeightValue = document.getElementById("fontWeightValue");

    // font weight
    let value = "";
    fontWeightValue.textContent = weightList[e.target.value];
    if (weightList[e.target.value] !== "none")
        value = "font-" + weightList[e.target.value]
    else
        value = "none";
    fontWeightValue.value = value;
}

function updateLineWeightValue(e) {
    // weight lists
    const lineWeightList = ["none", 1, 2, 4, 8];
    // doms
    const lineWeightValue = document.getElementById("lineWeightValue");

    // line weight
    let value = "";
    lineWeightValue.textContent = lineWeightList[e.target.value];
    if (lineWeightList[e.target.value] !== "none")
        value = lineWeightValue.value = "decoration-" + lineWeightList[e.target.value];
    else
        value = "none";
    lineWeightValue.value = value;
}

function updateFontSizeValue(e) {
    // size lists
    const sizeList = ["none", "xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
    // doms
    const fontSizeValue = document.getElementById("fontSizeValue");

    // font size
    let value = "";
    fontSizeValue.textContent = sizeList[e.target.value];
    if (sizeList[e.target.value] !== "none")
        value = fontSizeValue.value = "text-" + sizeList[e.target.value];
    else
        value = "none";
    fontSizeValue.value = value;
}

function updateLineOffsetValue(e) {
    //offset list
    const offsetList = ["none", 1, 2, 4, 8];
    //doms
    const lineOffsetValue = document.getElementById("lineOffsetValue");

    //line offset
    let value = "";
    lineOffsetValue.textContent = offsetList[e.target.value];
    if (offsetList[e.target.value] !== "none")
        value = lineOffsetValue.value = "underline-offset-" + offsetList[e.target.value];
    else
        value = "none";
    lineOffsetValue.value = value;
}

function updateItalicValue(e) {
    if (e.target.checked)
        e.target.value = "italic";
    else
        e.target.value = "none";
}

function updateTextColorValue() {
    updateColorValue("rounded w-7 border-2 mr-4 value", "textColorValue", "textColorParamColor", "textColorParamDarkness", "text");
}

function updateLineColorValue() {
    updateColorValue("rounded w-7 border-2 mr-4 lineValue", "lineColorValue", "lineColorParamColor", "lineColorParamDarkness", "decoration");
}

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

    changeScrollState();

    //コード領域に出力
    const code = preview.outerHTML;

    codeBlock.value = code;
}

document.addEventListener('DOMContentLoaded', function () { startObserver(); updatePreview(); });