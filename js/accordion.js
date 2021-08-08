function genAccordion() {
    const accrdnCnt = document.getElementById("accrdnCnt").value;
    const isFlush = document.getElementById("isFlush").checked;

    const flush = (isFlush ? " accordion-flush" : "");

    let accrdnBody = "";
    for (let i = 0; i < accrdnCnt; i++) {
        accrdnBody += '\t<div class="accordion-item">\n\
\t\t<h2 class="accordion-header" id="heading'+ i + '">\n\
\t\t\t<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+ i + '" aria-controls="collapse' + i + '">\n\
\t\t\t\t見出しが入ります\n\
\t\t\t</button>\n\
\t\t</h2>\n\
\t\t<div id="collapse'+ i + '" class="accordion-collapse collapse" aria-labelledby="heading' + i + '" data-bs-parent="#accordion">\n\
\t\t\t<div class="accordion-body">\n\
\t\t\t\tテキストが入ります\n\
\t\t\t</div>\n\
\t\t</div>\n\
\t</div>\n';
    }

    let outputCode = '<div class="accordion' + flush + '" id="accordion">\n' + accrdnBody + '</div>';
    genCode(outputCode);
}