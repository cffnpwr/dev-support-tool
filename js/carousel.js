//自動更新
function genCarousel() {
    const typeList = [
        "controle",
        "indicator",
        "caption",
        "crossfade"
    ];
    let carouselType = [];
    let slideCnt = 0;

    for (const key in typeList) {
        if (!document.getElementById(typeList[key]).checked) {
            carouselType.push(typeList[key]);
        }
    }
    slideCnt = document.getElementById("slideCnt").value;

    document.getElementById("outputArea").value = genCarouselCode(slideCnt, carouselType);
    changeOutputText();
}

function genCarouselCode(slideCnt, ignoreType) {
    let crossfade = " carousel-fade";
    let controle = '\
\t<button class="carousel-control-prev" type="button" data-bs-target="#carouselSlide" data-bs-slide="prev"> \n\
\t\t<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n\
\t\t<span class="visually-hidden">前へ</span>\n\
\t</button>\n\
\t<button class="carousel-control-next" type="button" data-bs-target="#carouselSlide" data-bs-slide="next">\n\
\t\t<span class="carousel-control-next-icon" aria-hidden="true"></span>\n\
\t\t<span class="visually-hidden">次へ</span>\n\
\t</button>\n';

    let indicators = "";
    for (let i = 0; i < slideCnt; i++) {
        if (i < 1) {
            indicators += '\t\t<button type="button" data-bs-target="#carouselSlide" data-bs-slide-to="'+ i +'" class="active" aria-current="true" aria-label="スライド ' + (i + 1) +'"></button>\n';
        }else{
            indicators += '\t\t<button type="button" data-bs-target="#carouselSlide" data-bs-slide-to="'+ i +'" aria-label="スライド ' + (i + 1) +'"></button>\n';
        }
    }
    let indicator = '\
\t<div class="carousel-indicators">\n'
    + indicators +
'\t</div>\n';

    let slides = "";
    let caption = '\
\t\t\t<div class="carousel-caption d-none d-md-block">\n\
\t\t\t\t<h5>スライドのタイトル</h5>\n\
\t\t\t\t<p>スライドの説明</p>\n\
\t\t\t</div>\n';

    for (const key in ignoreType) {
        if (ignoreType[key] == "caption") {
            caption = "";
        }
    }

    for (let i = 0; i < slideCnt; i++) {
        if (i < 1) {
            slides += '\
\t\t<div class="carousel-item active">\n\
\t\t\tスライドの中身\n ' + caption + '\
\t\t</div>\n ';
        }else{
            slides += '\
\t\t<div class="carousel-item">\n\
\t\t\tスライドの中身\n' + caption + ' \
\t\t</div>\n ';
        }
    }
    
    for (const key in ignoreType) {
        switch (ignoreType[key]) {
            case "controle":
                controle = "";
                break;

            case "indicator":
                indicator = "";
                break;
            
            case "crossfade":
                crossfade = "";
                break;
        
            default:
                break;
        }
    }

    const carousel = '\
<div id="carouselSlide" class="carousel slide' + crossfade + '" data-bs-ride="carousel">\n\
\t<div class="carousel-inner">\n'
    + slides + 
'\t</div>\n'
    + controle + indicator +
'</div>';

    return carousel;
}