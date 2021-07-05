window.onload = changeCategory;

function changeCategory() {
    const openedCategory = document.getElementsByClassName("accordion-collapse collapse show")[0];

    if(openedCategory != null) {
        const settingsCategoryId = openedCategory.children[0].getAttribute("id");

        switch (settingsCategoryId) {
            case "carousel":
                document.getElementById(settingsCategoryId).onchange = genCarousel;
                genCarousel();
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