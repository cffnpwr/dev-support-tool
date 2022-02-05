const textScroll = function () {
    const scrollList = document.getElementsByClassName("scroll");

    for (let i = 0; i < scrollList.length; i++) {
        const scrollDom = scrollList[i];
        const scrollText = scrollDom.textContent;

        scrollDom.textContent = scrollText.slice(1) + scrollText.slice(0, 1);
    }
};

setInterval(textScroll, 200);