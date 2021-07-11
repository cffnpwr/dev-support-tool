window.onload = changeCategory;

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function changeCategory() {
    const openedCategory = document.getElementsByClassName("accordion-collapse collapse show")[0];

    if(openedCategory != null) {
        const settingsCategoryId = openedCategory.children[0].getAttribute("id");
        const allCategory = document.getElementsByClassName("accordion-body");

        for (const key in allCategory) {
            allCategory[key].onchange = null;
        }

        switch (settingsCategoryId) {
            case "carousel":
                document.getElementById(settingsCategoryId).onchange = genCarousel;
                genCarousel();
                break;
            
            case "text":
                document.getElementById(settingsCategoryId).onchange = genText;
                genText();
                break;

            case "card":
                document.getElementById(settingsCategoryId).onchange = genCard;
                genCard();
                break;
        
            default:
                break;
        }
    }
}

function changeOutputText() {
    let outputText = document.getElementById("outputArea").value;
    document.getElementById("outputAreaDummy").textContent = outputText + '\u200b';
}

function closeAccordion() {
    const openedAccordion = document.getElementsByClassName("accordion-collapse collapse show");

    for (const key in openedAccordion) {
        openedAccordion[key].className = "accordion-collapse collapse";
    }
}

function copyOutputCode() {
    var targetCode = document.getElementById("outputArea");
    targetCode.select();
    document.execCommand("Copy");
}

//更新確認
const observer = new MutationObserver(changeCategory);

const target = document.getElementById("settingsTabs");
const obsConfig = {
    attributes: true,
    childList: true,
    subtree: true
};

observer.observe(target, obsConfig);