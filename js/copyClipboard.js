/**
 * 
 * @param {string} id ここにボタンのidを入れるとそのボタンの文字が"コピーしました"に変わりますよ
 */
function copyToClipboard(id) {
    const target = document.getElementById("codeBlock");
    navigator.clipboard.writeText(target.value);
    const button = document.getElementById(id);
    const prevText = button.textContent;
    button.textContent = "コピーしました";

    setInterval(restoreButtonText, 3000, id, prevText);
}

function restoreButtonText(id, text) {
    document.getElementById(id).textContent = text;
}