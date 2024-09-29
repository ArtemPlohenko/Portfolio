document.addEventListener("DOMContentLoaded", function () {
  /*============= Burger Menu =============*/
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
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
        welcome: "Welcome",
        description: "This is a simple language switcher example.",
      },
    },
    uk: {
      translation: {
        welcome: "Вітаємо",
        description: "Це приклад простого перемикача мови.",
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
    document.getElementById("welcome-msg").textContent = i18next.t("welcome");
    document.getElementById("description-msg").textContent = i18next.t("description");
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
