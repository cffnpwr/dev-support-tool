/**
 * 
 * @param {string} defaultClasses 色のプレビューDOMに標準でついているクラス
 * @param {string} valueDom 色のプレビューに使用されるDOMのidを入力してね
 * @param {string} ColorDom 色の種類(赤とか黒とかそういうやつ)を選ぶためのDOMのid
 * @param {string} DarknessDom 色の濃さを選ぶためのDOMのid
 * @param {string} type text-red-800とかのtextの部分。クラスで変更できる要素の酒類
 */
function updateColorValue(defaultClasses, valueDom, ColorDom, DarknessDom, type) {
    // value lists
    const colorList = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    // doms
    const colorValue = document.getElementById(valueDom);
    const colorParamColor = document.getElementById(ColorDom);
    const colorParamDarkness = document.getElementById(DarknessDom);

    // color
    let classAddition;
    let outputClassAddition;

    switch (colorParamColor.value) {
        case "none":
            classAddition = "";
            outputClassAddition = "none";

            break;

        case "black":
        case "white":
            classAddition = " bg-" + colorParamColor.value;
            outputClassAddition = "" + type + "-" + colorParamColor.value;

            break;

        default:
            classAddition = " bg-" + colorParamColor.value + "-" + colorList[colorParamDarkness.value];
            outputClassAddition = "" + type + "-" + colorParamColor.value + "-" + colorList[colorParamDarkness.value];

            break;
    }

    colorValue.classList.value = defaultClasses + classAddition;
    colorValue.value = outputClassAddition;
}