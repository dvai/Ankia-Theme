/*!
 * Ankia-Theme v1.4
 * https://ankia.top/
 *
 * Licensed Apache-2.0 © 东东
 */
async function fetchNote(noteId = null) {
  if (!noteId) {
    noteId = document.body.getAttribute("data-note-id");
  }

  const resp = await fetch(`api/notes/${noteId}`);

  return await resp.json();
}
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const toggleMenuButton = document.getElementById("toggleMenuButton");
    const mobileMenuContainer = document.getElementById("mobileMenuContainer");
    const bloggerInfoCard = document.getElementById("bloggerInfoCard");
    const menuCard = document.getElementById("menuCard");
    const main = document.getElementById("main");

    let isCardsAdded = false;

    toggleMenuButton.addEventListener("click", () => {
      toggleMenuButton.classList.toggle("active");
      if (!isCardsAdded) {
        bloggerInfoCard.style.setProperty("display", "flex", "important");
        menuCard.style.setProperty("display", "flex", "important");
        mobileMenuContainer.appendChild(bloggerInfoCard);
        mobileMenuContainer.appendChild(menuCard);
        main.style.display = "none";
        isCardsAdded = true;
      } else {
        mobileMenuContainer.removeChild(bloggerInfoCard);
        mobileMenuContainer.removeChild(menuCard);
        main.style.display = "block";
        isCardsAdded = false;
      }

      mobileMenuContainer.classList.toggle("showMenu");
    });
  },
  false
);
document.addEventListener(
  "DOMContentLoaded",
  () => {
    var navigationItems = document.querySelectorAll(".navigationItemsStyle");
    // 为每个.navigationItemsStyle元素添加事件监听器
    navigationItems.forEach(function (item) {
      var button = item.querySelector(".menuLinkStyle");
      var dropDown = item.querySelector(".dropDownStyle");
      if (!button || !dropDown) {
        return;
      }
      var svgElement = button.querySelector("svg");
      let isHovering = false;

      button.addEventListener("mouseover", function () {
        isHovering = true;
        dropDown.style.display = "flex";

        svgElement.classList.add("unfolding");
      });

      button.addEventListener("mouseout", function () {
        isHovering = false;
        setTimeout(function () {
          if (!isHovering) {
            dropDown.style.display = "none";
            svgElement.classList.remove("unfolding");
          }
        }, 200);
      });

      dropDown.addEventListener("mouseover", function () {
        isHovering = true;
      });

      dropDown.addEventListener("mouseout", function () {
        isHovering = false;
        setTimeout(function () {
          if (!isHovering) {
            dropDown.style.display = "none";
            svgElement.classList.remove("unfolding");
          }
        }, 200);
      });
    });
  },
  false
);
document.addEventListener(
  "DOMContentLoaded",
  () => {
    var prevScrollPos = window.pageYOffset;
    const scrollDistance = 10;

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      const navigationBar = document.getElementById("navigationBar");
      if (currentScrollPos < 100) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        navigationBar.classList.remove("hide");
      } else if (
        currentScrollPos - prevScrollPos > scrollDistance &&
        !document.querySelector("#mobileMenuContainer.showMenu")
      ) {
        navigationBar.classList.add("hide");
      }

      prevScrollPos = currentScrollPos;
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const rewardBtn = document.getElementById("rewardBtn");
    const rewardImgContainer = document.getElementById("rewardImgContainer");
    if (rewardBtn) {
      rewardBtn.addEventListener("click", function () {
        if (rewardImgContainer.style.display === "flex") {
          rewardImgContainer.style.opacity = "0";
          setTimeout(function () {
            rewardImgContainer.style.display = "none";
            rewardImgContainer.style.flexWrap = "";
          }, 500);
        } else {
          rewardImgContainer.style.opacity = "1";
          rewardImgContainer.style.display = "flex";
          rewardImgContainer.style.flexWrap = "wrap";
        }
      });
    }
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const toc = document.getElementById("toc");
    if (!toc) return;

    const sections = document.querySelectorAll(
      "#content h2, #content h3, #content h4, #content h5, #content h6"
    );
    const links = toc.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const target = document.getElementById(link.getAttribute("href").slice(1));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    function changeLinkState() {
      let index = sections.length;
      while (--index && window.scrollY < sections[index].offsetTop) { }

      links.forEach((link) => link.classList.remove("tocActive"));
      links[index].classList.add("tocActive");
    }

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    if (!document.queryCommandSupported("copy")) {
      return;
    }

    function flashCopyMessage(button, message) {
      button.textContent = message;
      setTimeout(function () {
        button.textContent = "Copy";
      }, 1000);
    }

    function selectText(node) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      return selection;
    }

    function addCopyButton(container) {
      var copyButton = document.createElement("button");
      copyButton.className = "copyButtonStyle";
      copyButton.textContent = "Copy";
      copyButton.setAttribute("title", "复制");

      var codeElement = container.firstElementChild;
      copyButton.addEventListener("click", function () {
        try {
          var selection = selectText(codeElement);
          document.execCommand("copy");
          selection.removeAllRanges();

          flashCopyMessage(copyButton, "Copied!");
        } catch (error) {
          console && console.log(error);
          flashCopyMessage(copyButton, "Failed");
        }
      });

      container.appendChild(copyButton);
    }

    var preBlocks = document.querySelectorAll("pre");
    Array.prototype.forEach.call(preBlocks, addCopyButton);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const target = document.getElementById("onTop");
    target.addEventListener("click", (e) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    //字数统计
    const content = document.getElementById("content");
    if (!content) { return }
    const articleWordCount = document.getElementById("articleWordCount");
    articleWordCount.innerText = content.innerText.split(/[\s-+:,/\\]+/).filter(chunk => chunk !== '').join('').length;
  },
  false
);

