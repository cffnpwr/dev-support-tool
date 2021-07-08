window.onload = changeCategory;

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
        
            default:
                break;
        }
    }
}

//更新確認
const observer = new MutationObserver(changeCategory);

const target = document.getElementById("settingsList");
const obsConfig = {
    attributes: true,
    childList: true,
    subtree: true
};

observer.observe(target, obsConfig);