//自動更新??
function genRowColumns() {
    let cut = document.getElementById('cutCnt').value;
    const number = genNumberCode(yousoCnt);

    const outputCode = '<div class="container">\n\t<div class="row row-cols-'+ cut + '">\n' + number +'\t</div>\n</div>';

    genCode(outputCode);
}

function genNumberCode() {
    let border = genBorerCode();
    let bgc = genBackGroundColorCode();
    let nun = document.getElementById('yousoCnt').value;

    let outputNumberCode = "";
    let haikeisyoku = "";

    let youso = '\t\t<div class="col '+ border + bgc + '">ここに要素を入力</div>\n';
    for (let i=0; i < nun; i++){
        outputNumberCode += youso;
    }

    return outputNumberCode;
}

function genBorerCode() {
    let bor = document.getElementById('border').checked;
    let waku = "";
    if (bor == 1)waku = "border ";
    return waku;
}

function genBackGroundColorCode() {
    const selectBackGroundColor = document.getElementById("rowColumnsBackGroundColor");

    const selectedIndex = selectBackGroundColor.selectedIndex;
    const selectedValue = selectBackGroundColor.options[selectedIndex].value;

    const outputBackGroundColor = "bg-" + selectedValue;

    return outputBackGroundColor;
}