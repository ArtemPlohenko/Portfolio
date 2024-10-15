document.addEventListener("DOMContentLoaded", function () {
  /*============= Burger Menu =============*/
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".nav");
  const body = document.body;

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  /*============= Language Dropdown =============*/
  const languageBtn = document.querySelector(".language-btn");
  const languageSwitch = document.querySelector(".language-switch");

  languageBtn.addEventListener("click", () => {
    languageSwitch.classList.toggle("active");
    languageBtn.classList.toggle("active");
  });

  /*============= Language Switch =============*/
  const resources = {
    en: {
      translation: {
        description: "With great power comes great electricity bill",
      },
    },
    uk: {
      translation: {
        description: "Велика потужність приносить великі рахунки за електроенергію",
      },
    },
  };

  let currentLanguage = "en";

  i18next.init(
    {
      lng: currentLanguage,
      debug: false,
      resources,
    },
    function (err, t) {
      updateContent();
      updateButtonText();
    }
  );

  function updateContent() {
    const descriptionMsg = document.getElementById("description-msg");

    if (descriptionMsg) {
      descriptionMsg.textContent = i18next.t("translation:description");
    }
  }

  function updateButtonText() {
    if (currentLanguage === "en") {
      languageBtn.textContent = "EN";
    } else if (currentLanguage === "uk") {
      languageBtn.textContent = "UA";
    }
  }

  document.getElementById("en-btn").addEventListener("click", () => {
    currentLanguage = "en";
    i18next.changeLanguage(currentLanguage, updateContent);
    updateButtonText();
    languageSwitch.classList.remove("active");
    languageBtn.classList.remove("active");
  });

  document.getElementById("uk-btn").addEventListener("click", () => {
    currentLanguage = "uk";
    i18next.changeLanguage(currentLanguage, updateContent);
    updateButtonText();
    languageSwitch.classList.remove("active");
    languageBtn.classList.remove("active");
  });

  window.addEventListener("click", function (e) {
    if (!languageSwitch.contains(e.target) && !languageBtn.contains(e.target)) {
      languageSwitch.classList.remove("active");
      languageBtn.classList.remove("active");
    }
  });
});
