function genBreadcrumb() {
    const nakami = genBreadCode();

    const outputCode = '<nav aria-label="breadcrumb">\n\t<ol class="breadcrumb">\n' + nakami + '\t</ol>\n</nav>';

    genCode(outputCode);
}

function genBreadCode() {
    let div = document.getElementById('divCnt').value - 1;

    let bcc = "";
    const basicBreadcrumb = '\t\t<li class="breadcrumb-item"><a href="#">親のページ名</a></li>\n';

    for(let i = 0; i < div; i++){
        bcc += basicBreadcrumb;
    }

    bcc += '\t\t<li class="breadcrumb-item active" aria-current="page">現在のページ名</li>\n';

    return bcc;
}