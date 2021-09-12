const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switchBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";

const root = document.documentElement;

/* theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switchBtn);
const currentTheme = localStorage.getItem(theme);

/* portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector("#search");

/* portfolio card object*/
console.log(document.querySelectorAll(portfolioData))
const portfolioCards = [
  {
    dataItem: "web",
    dataOpen: "web-1",
    title: "Web Development",
    detail: "Food Website",
    img: "./assets/portfolio-1.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "web",
    dataOpen: "web-2",
    title: "Web Development",
    detail: "Skate Website",
    img: "./assets/portfolio-2.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "web",
    dataOpen: "web-3",
    title: "Web Development",
    detail: "Fitness Website",
    img: "./assets/portfolio-3.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "app",
    dataOpen: "app-1",
    title: "App Development",
    detail: "Game App",
    img: "./assets/portfolio-5.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "app",
    dataOpen: "app-2",
    title: "App Development",
    detail: "Gambling App",
    img: "./assets/portfolio-6.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "app",
    dataOpen: "app-3",
    title: "App Development",
    detail: "Finance App",
    img: "./assets/portfolio-7.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "ui",
    dataOpen: "ui-1",
    title: "UI Design",
    detail: "Intricate Design",
    img: "./assets/portfolio-4.jpg",
    alt: "portfolio",
  },
  {
    dataItem: "ui",
    dataOpen: "ui-2",
    title: "UI Design",
    detail: "Fantastic Design",
    img: "./assets/portfolio-8.jpg",
    alt: "portfolio",
  },
];

// Portfolio card loop

const cardsParent = document.getElementById("cardBody");

portfolioCards.forEach((item) => {
  const content = `<div class="portfolio-card" data-item=${item.dataItem} data-open=${item.dataOpen}>
      <div class="card-body">
        <img src=${item.img} alt=${item.alt} />
        <div class="card-popup-box">
          <div>${item.title}</div>
          <h3>${item.detail}</h3>
        </div>
      </div>
    </div>`;

  cardsParent.innerHTML += content;
});

// Modal pop-ups

const modalCards = [
  {
    id: "web-1",
    header: "Web Project I",
    img: "./assets/portfolio-1.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "web-2",
    header: "Web Project II",
    img: "./assets/portfolio-2.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "web-3",
    header: "Web Project III",
    img: "./assets/portfolio-3.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "app-1",
    header: "App Project I",
    img: "./assets/portfolio-5.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "app-2",
    header: "App Project II",
    img: "./assets/portfolio-6.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "app-3",
    header: "App Project III",
    img: "./assets/portfolio-7.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "ui-1",
    header: "UI Project I",
    img: "./assets/portfolio-4.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
  {
    id: "ui-2",
    header: "UI Project II",
    img: "./assets/portfolio-8.jpg",
    text1: "My first awesome website",
    text2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam atque quibusdam fuga.",
    text3:
      "Perspiciatis vel placeat veniam minima fugiat alias beatae, accusantium, velit magnam suscipit accusamus ipsam earum odit. Ducimus?",
  },
];

const modalParent = document.getElementById("modalMain");

modalCards.forEach((item) => {
  const content = `<div id="${item.id}" class="modal" data-animation="slideInOutTop">
    <div class="modal-dialog">
      <header class="modal-header">
        <h3>${item.header}</h3>
        <i class="fas fa-times" data-close></i>
      </header>
      <div class="modal-body">
        <div class="img-wrapper">
          <img src="${item.img}" alt="portfolio image" />
        </div>
        <div class="text-wrapper">
          <p><strong>${item.text1}</strong></p>
          <p>
            ${item.text2}
          </p>
          <p>
            ${item.text3}
          </p>
        </div>
      </div>
    </div>
  </div>`;

  modalParent.innerHTML += content;
});

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });
  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    // set active state
    setActive(elm, switchBtn);
    setTheme(toggle);
  });
}

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();

  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

/* modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// modal/full site modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

//modal

document.addEventListener("click", (e) => {
 if (e.target.className && e.target.getAttribute('class').includes('filter-link')) {
  setActive(e.target, ".filter-link");
  const filter = e.target.dataset.filter;
  document.querySelectorAll(portfolioData).forEach((card) => {
    if (filter === "all") {
      card.style.display = "block";
    } else if (card.dataset.item === filter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })
}

  //console.log(e.target, document.querySelector(".modal.is-visible"));
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

console.log(document.querySelectorAll(portfolioData))