const scroll = function () {
    const title = document.title;

    document.title = title.slice(1) + title.slice(0, 1);
};

setInterval(scroll, 200);