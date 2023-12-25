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

    let isCardsAdded = false;

    toggleMenuButton.addEventListener("click", () => {
      if (!isCardsAdded) {
        bloggerInfoCard.style.setProperty("display", "flex", "important");
        menuCard.style.setProperty("display", "flex", "important");
        mobileMenuContainer.appendChild(bloggerInfoCard);
        mobileMenuContainer.appendChild(menuCard);
        isCardsAdded = true;
      } else {
        mobileMenuContainer.removeChild(bloggerInfoCard);
        mobileMenuContainer.removeChild(menuCard);
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
    function addHoverControl(buttonId, dropDownId) {
      const button = document.getElementById(buttonId);
      const dropDown = document.getElementById(dropDownId);

      if (!button) {
        return;
      }

      let isHovering = false;

      button.addEventListener("mouseover", function () {
        isHovering = true;
        dropDown.style.display = "flex";
      });

      button.addEventListener("mouseout", function () {
        isHovering = false;
        setTimeout(function () {
          if (!isHovering) {
            dropDown.style.display = "none";
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
          }
        }, 200);
      });
    }

    addHoverControl("transmission", "transmissionDropDown");
    addHoverControl("category", "categoryDropDown");
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
