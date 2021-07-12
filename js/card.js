function genCard() {
    const optionList = [
        "cardTitle",
        "cardSubtitle",
        "cardText",
        "cardImg"
    ];

    let cardOptions = [];

    for (const key in optionList) {
        if (document.getElementById(optionList[key] + "Chk").checked) {
            cardOptions.push(optionList[key]);
        }
    }

    genCode(genCardCode(cardOptions));
}

function genCardCode(cardOptions) {
    let title = "";
    let subtitle = "";
    let text = "";
    let img = "";
    
    for (const key in cardOptions) {
        switch (cardOptions[key]) {
            case "cardTitle":
                const titleText = document.getElementById(cardOptions[key] + "Txt").value;
                title = '\t\t<h5 class="card-title">' + titleText + '</h5>\n';
                break;

            case "cardSubtitle":
                const subtitleText = document.getElementById(cardOptions[key] + "Txt").value;
                subtitle = '\t\t<h6 class="card-subtitle">' + subtitleText + '</h6>\n';
                break;
                
            case "cardText":
                const textText = document.getElementById(cardOptions[key] + "Txt").value.replace(/[\r\n]/g, '<br>\n\t\t\t');
                text = '\t\t<p class="card-text">\n\t\t\t' + textText + '\n\t\t</p>\n';
                break;

            case "cardImg":
                img = '\t<img class="card-img-top" src="img/[ここにファイル名を書いてね]">\n';
                break;

            default:
                break;
        }
    }

    const cardCode = '<div class="card">\n' + img + '\t<div class="card-body">\n' + title + subtitle + text + '\t</div>\n</div>';

    return cardCode;
    
}

function changeState() {
    const optionList = [
        "cardTitle",
        "cardSubtitle",
        "cardText"
    ];

    for (const key in optionList) {
        if (document.getElementById(optionList[key] + "Chk").checked) {
            document.getElementById(optionList[key] + "Txt").removeAttribute('disabled');
        }else{
            document.getElementById(optionList[key] + "Txt").setAttribute('disabled', true);
        }
    }
}