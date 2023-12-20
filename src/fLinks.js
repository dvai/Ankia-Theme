const myInfo = {
    "title": "<博客名称>",
    "link": "<博客链接>",
    "img": "<博主头像>",
    "des": "<博客简介>"
}
const fLinks = {
    "0": {
        "title": "东东的小黑盒",
        "link": "https://www.ankia.top",
        "img": "https://s2.loli.net/2023/12/12/PcJogDt13i5U67M.png",
        "des": "生活未必似你所见"
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById("main");
    const title = main.querySelector("#title");
    if (title.innerHTML === "🔗友链") {
        const content = document.getElementById("content");
        content.innerHTML = "";
        var fLinkContainer = document.createElement("div");
        fLinkContainer.classList.add("fLinkContainer");
        for (let key in fLinks) {
            const html = `<a href="${fLinks[key]['link']}" target="_blank" rel="noopener">
              <div class="fLink">
                <img src="${fLinks[key]['img']}" alt="${fLinks[key]['title']}">
                <div id = "fLinkTitle">${fLinks[key]['title']}</div>
                <div id = "fLinkDes">${fLinks[key]['des']}</div>
              </div>
            </a>`
            fLinkContainer.innerHTML += html
        }
        content.appendChild(fLinkContainer);
        content.innerHTML += `<div>
     <hr>
    <p>我的友链：</p>
    <pre><code class="language-json">"title": "${myInfo["title"]}",
"link": "${myInfo["link"]}",
"img": "${myInfo["img"]}",
"des": "${myInfo["des"]}"</code></pre>
    <p>加入本站友链的格式：</p>
    <pre><code class="language-json">{
    "title": "博客名称",  //建议8个中文字符以内
    "link": "博客链接",
    "img": "站长头像",
    "des": "博客描述"
}</code></pre>
</div>`
    }

}, false);