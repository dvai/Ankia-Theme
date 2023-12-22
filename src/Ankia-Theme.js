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
    const menu = document.getElementById("menu");

    if (toggleMenuButton && menu) {
      toggleMenuButton.addEventListener("click", () =>
        menu.classList.toggle("showMenu")
      );
    }
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
      if (prevScrollPos > currentScrollPos) {
        navigationBar.classList.remove("hide");
      } else if (
        currentScrollPos - prevScrollPos > scrollDistance &&
        !document.querySelector("#menu.showMenu")
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
