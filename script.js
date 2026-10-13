const RAWQ_EMAIL = "rawqwears@gmail.com";
const RAWQ_WHATSAPP = "919847594021";
const RAWQ_PRICE = 599;
const RAWQ_SIZES = ["S", "M", "L", "XL", "XXL"];

/* =========================================
   RAWQ PRODUCT DATABASE — ALL 81 DESIGNS
========================================= */

const rawqRows = {
  Animes: [
    ["Aizen", "aizen.webp", "Design preview"],
    ["Eren Yeager Black", "eren-yeager-black.webp", "Black"],
    ["Eren Yeager White", "eren-yeager-white.webp", "White"],
    ["Ichigo Kurosaki", "ichigo-kurosaki.webp", "Design preview"],
    ["Light Yagami", "light-yagami.webp", "Design preview"],
    ["Luffy", "luffy.webp", "Design preview"],
    ["Saitama", "saitama.webp", "Design preview"],
    ["Son Goku", "son-goku.webp", "Design preview"],
    ["Sung Jin Woo", "sung-jin-woo.webp", "Design preview"],
    ["Vegeta Black", "vegeta-black.webp", "Black"],
    ["Vegeta White", "vegeta-white.webp", "White"],
    ["Zoro Black", "zoro-black.webp", "Black"],
    ["Zoro White", "zoro-white.webp", "White"]
  ],

  Avengers: [
    ["Bat Man", "bat-man.webp", "Design preview"],
    ["Captain Amrica", "captain-amrica.webp", "Design preview"],
    ["Clack Panther", "clack-panther.webp", "Design preview"],
    ["Hulk", "hulk.webp", "Design preview"],
    ["Iron Man", "iron-man.webp", "Design preview"],
    ["Spider Man", "spider-man.webp", "Design preview"],
    ["Super Man", "super-man.webp", "Design preview"],
    ["Thanos", "thanos.webp", "Design preview"],
    ["Thor", "thor.webp", "Design preview"]
  ],

  Cars: [
    ["Bmw Black", "bmw-black.webp", "Black"],
    ["Bmw White", "bmw-white.webp", "White"],
    ["Dodge", "dodge.webp", "Design preview"],
    ["Dodge Charger", "dodge-charger.webp", "Design preview"],
    ["Ferrari", "ferrari.webp", "Design preview"],
    ["Gtr", "gtr.webp", "Design preview"],
    ["Mclaren Black", "mclaren-black.webp", "Black"],
    ["Mclaren White", "mclaren-white.webp", "White"],
    ["Mustang", "mustang.webp", "Design preview"],
    ["Porsche", "porsche.webp", "Design preview"],
    ["Supra Black", "supra-black.webp", "Black"],
    ["Supra White", "supra-white.webp", "White"],
    ["Tokyo", "tokyo.webp", "Design preview"]
  ],

  Cricket: [
    ["Dhoni", "dhoni.webp", "Design preview"],
    ["Kohli", "kohli.webp", "Design preview"],
    ["Rohit", "rohit.webp", "Design preview"],
    ["Sachin", "sachin.webp", "Design preview"]
  ],

  Football: [
    ["Cr7 1", "cr7-1.webp", "Design preview"],
    ["Cr7 2", "cr7-2.webp", "Design preview"],
    ["Dybala", "dybala.webp", "Design preview"],
    ["Kaka", "kaka.webp", "Design preview"],
    ["Maldini", "maldini.webp", "Design preview"],
    ["Messi Black", "messi-black.webp", "Black"],
    ["Messi White", "messi-white.webp", "White"],
    ["Neymar 1", "neymar-1.webp", "Design preview"],
    ["Neymar 2", "neymar-2.webp", "Design preview"],
    ["Ozil", "ozil.webp", "Design preview"],
    ["Yamal", "yamal.webp", "Design preview"]
  ],

  Movies: [
    ["Aloshy", "aloshy.webp", "Design preview"],
    ["Chotta Mumbai", "chotta-mumbai.webp", "Design preview"],
    ["Goat Thoma", "goat-thoma.webp", "Design preview"],
    ["God Father", "god-father.webp", "Design preview"],
    ["God Father White", "god-father-white.webp", "White"],
    ["Kumbalani Nights Black", "kumbalani-nights-black.webp", "Black"],
    ["Kumbalani Nights White", "kumbalani-nights-white.webp", "White"],
    ["Michle Black", "michle-black.webp", "Black"],
    ["Michle White", "michle-white.webp", "White"],
    ["Nadeshan", "nadeshan.webp", "Design preview"],
    ["Neelakandante Pattalam", "neelakandante-pattalam.webp", "Design preview"],
    ["Quintel Varkkichan", "quintel-varkkichan.webp", "Design preview"],
    ["Sagar Alaias Jacky", "sagar-alaias-jacky.webp", "Design preview"],
    ["Shetty", "shetty.webp", "Design preview"],
    ["Vakkachan", "vakkachan.webp", "Design preview"],
    ["Vishwanathan", "vishwanathan.webp", "Design preview"],
    ["Dhoom", "dhoom.webp", "Design preview"]
  ],

  Typography: [
    ["Badass", "badass.webp", "Design preview"],
    ["Cant Black", "cant-black.webp", "Black"],
    ["Cant White", "cant-white.webp", "White"],
    ["Crystal", "crystal.webp", "Design preview"],
    ["Dream Black", "dream-black.webp", "Black"],
    ["Dream White", "dream-white.webp", "White"],
    ["Explore", "explore.webp", "Design preview"],
    ["Ghoul", "ghoul.webp", "Design preview"],
    ["Hope Black", "hope-black.webp", "Black"],
    ["Hope White", "hope-white.webp", "White"],
    ["Keep Moving", "keep-moving.webp", "Design preview"],
    ["Marshmallow", "marshmallow.webp", "Design preview"],
    ["Money Black", "money-black.webp", "Black"],
    ["Money White", "money-white.webp", "White"]
  ]
};

const rawqData = Object.fromEntries(
  Object.entries(rawqRows).map(([category, items]) => [
    category,
    items.map(([name, file, colour]) => ({
      name,
      image: `assets/designs/${file}`,
      colour,
      price: RAWQ_PRICE
    }))
  ])
);

/* =========================================
   HELPERS AND STATE
========================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let currentCategory = "";
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* =========================================
   WHATSAPP ORDER MESSAGE
========================================= */

function createWhatsAppURL({
  name,
  category,
  colour,
  size,
  quantity
}) {
  const total = RAWQ_PRICE * quantity;

  const message =
    `Hi RAWQ! 👋 I would like to order a T-shirt.\n\n` +
    `Design: ${name}\n` +
    `Category: ${category}\n` +
    `Colour: ${colour}\n` +
    `Size: ${size}\n` +
    `Quantity: ${quantity}\n` +
    `Price per T-shirt: ₹${RAWQ_PRICE}\n` +
    `Subtotal: ₹${total}\n\n` +
    `Please confirm stock availability, delivery charges ` +
    `and estimated delivery time.\n\nThank you!`;

  return `https://wa.me/${RAWQ_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function orderOnWhatsApp(details) {
  const url = createWhatsAppURL(details);

  const orderWindow = window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

  if (!orderWindow) {
    window.location.href = url;
  }

  showToast("Opening RAWQ WhatsApp order…");
}

/* =========================================
   OPEN A CATEGORY
========================================= */

function openCategory(category) {
  const items = rawqData[category];
  const designSection = $("#designs");
  const designTitle = $("#designTitle");
  const designIntro = $("#designIntro");
  const searchInput = $("#productSearch");
  const nav = $("#nav");
  const menuToggle = $("#menuToggle");

  if (!items || !designSection || !designTitle || !designIntro) {
    showToast("Collection could not open. Please refresh the page.");
    return;
  }

  currentCategory = category;

  designTitle.textContent = `${category.toUpperCase()} DESIGNS.`;

  designIntro.textContent =
    `${items.length} designs in this collection. ` +
    `Full T-shirt price: ₹${RAWQ_PRICE}.`;

  if (searchInput) searchInput.value = "";

  renderProducts(items);

  designSection.hidden = false;
  designSection.classList.add("is-visible");

  designSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  if (nav) nav.classList.remove("open");
  if (menuToggle) menuToggle.textContent = "☰";
}

/* =========================================
   RENDER PRODUCT CARDS
========================================= */

function renderProducts(items) {
  const designGrid = $("#designGrid");
  const resultCount = $("#resultCount");

  if (!designGrid) return;

  if (resultCount) {
    resultCount.textContent = `${items.length} DESIGNS`;
  }

  if (!items.length) {
    designGrid.innerHTML =
      '<p class="muted">No designs found. Try another search.</p>';
    return;
  }

  designGrid.innerHTML = items.map((item, index) => `
    <article class="design-card">

      <button
        class="product-image-button"
        type="button"
        data-preview="${escapeHTML(item.image)}"
        data-name="${escapeHTML(item.name)}"
        data-colour="${escapeHTML(item.colour)}"
        aria-label="Preview ${escapeHTML(item.name)}">

        <img
          class="product-photo"
          src="${escapeHTML(item.image)}"
          alt="${escapeHTML(item.name)} T-shirt design"
          loading="lazy">

        <span class="image-badge">
          ${escapeHTML(item.colour)}
        </span>

        <span class="zoom-mark" aria-hidden="true">↗</span>
      </button>

      <div class="design-info">
        <div>
          <strong>${escapeHTML(item.name)}</strong>
          <small>
            ${escapeHTML(currentCategory)} ·
            ${String(index + 1).padStart(2, "0")}
          </small>
        </div>

        <span class="price">₹${RAWQ_PRICE}</span>
      </div>

      <div class="rawq-order-options">

        <label>
          <span>SELECT SIZE</span>
          <select class="rawq-size" aria-label="Select T-shirt size">
            ${RAWQ_SIZES.map(size => `
              <option value="${size}" ${size === "M" ? "selected" : ""}>
                ${size}
              </option>
            `).join("")}
          </select>
        </label>

        <label>
          <span>QUANTITY</span>
          <select class="rawq-qty" aria-label="Select quantity">
            ${[1, 2, 3, 4, 5].map(quantity => `
              <option value="${quantity}" ${quantity === 1 ? "selected" : ""}>
                ${quantity}
              </option>
            `).join("")}
          </select>
        </label>

      </div>

      <p class="rawq-card-total">
        Total: ₹<span class="rawq-total">${RAWQ_PRICE}</span>
      </p>

      <button
        class="mini-btn rawq-whatsapp-btn"
        type="button"
        data-order="${escapeHTML(item.name)}"
        data-category="${escapeHTML(currentCategory)}"
        data-colour="${escapeHTML(item.colour)}">

        ORDER ON WHATSAPP ↗
      </button>

    </article>
  `).join("");

  /* Update totals when quantity changes */
  designGrid.querySelectorAll(".design-card").forEach(card => {
    const quantitySelect = card.querySelector(".rawq-qty");
    const totalElement = card.querySelector(".rawq-total");

    quantitySelect.addEventListener("change", () => {
      const quantity = Number(quantitySelect.value);
      totalElement.textContent = RAWQ_PRICE * quantity;
    });

    /* Show a useful message if an image is missing */
    const image = card.querySelector("img");

    image.addEventListener("error", () => {
      image.alt = "Image could not load: " + image.alt;
      image.classList.add("rawq-image-error");
    }, { once: true });
  });
}

/* =========================================
   PRODUCT PREVIEW / LIGHTBOX
========================================= */

function openPreview(image, name, colour, category) {
  const overlay = document.createElement("div");

  overlay.className = "product-lightbox";

  overlay.innerHTML = `
    <button
      class="lightbox-close"
      type="button"
      aria-label="Close preview">×</button>

    <div class="lightbox-panel">

      <img
        src="${escapeHTML(image)}"
        alt="${escapeHTML(name)}">

      <div>
        <p class="eyebrow">RAWQ COLLECTION</p>

        <h3>${escapeHTML(name)}</h3>

        <p>
          Category: ${escapeHTML(category)}
        </p>

        <p>
          Colour: ${escapeHTML(colour)}
        </p>

        <p>
          Full T-shirt price: ₹${RAWQ_PRICE}
        </p>

        <div class="rawq-order-options rawq-preview-options">

          <label>
            <span>SELECT SIZE</span>
            <select class="rawq-preview-size" aria-label="Select preview size">
              ${RAWQ_SIZES.map(size => `
                <option value="${size}" ${size === "M" ? "selected" : ""}>
                  ${size}
                </option>
              `).join("")}
            </select>
          </label>

          <label>
            <span>QUANTITY</span>
            <select class="rawq-preview-qty" aria-label="Select preview quantity">
              ${[1, 2, 3, 4, 5].map(quantity => `
                <option value="${quantity}" ${quantity === 1 ? "selected" : ""}>
                  ${quantity}
                </option>
              `).join("")}
            </select>
          </label>

        </div>

        <p class="rawq-card-total">
          Total: ₹<span class="rawq-preview-total">${RAWQ_PRICE}</span>
        </p>

        <button
          class="btn red-btn rawq-preview-order"
          type="button">
          ORDER ON WHATSAPP ↗
        </button>

      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const sizeSelect = overlay.querySelector(".rawq-preview-size");
  const quantitySelect = overlay.querySelector(".rawq-preview-qty");
  const totalElement = overlay.querySelector(".rawq-preview-total");
  const orderButton = overlay.querySelector(".rawq-preview-order");

  quantitySelect.addEventListener("change", () => {
    totalElement.textContent =
      RAWQ_PRICE * Number(quantitySelect.value);
  });

  orderButton.addEventListener("click", () => {
    const size = sizeSelect.value;
    const quantity = Number(quantitySelect.value);

    closePreview();

    orderOnWhatsApp({
      name,
      category,
      colour,
      size,
      quantity
    });
  });

  function closePreview() {
    overlay.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeyDown);
  }

  function onKeyDown(event) {
    if (event.key === "Escape") {
      closePreview();
    }
  }

  overlay.addEventListener("click", event => {
    if (
      event.target === overlay ||
      event.target.closest(".lightbox-close")
    ) {
      closePreview();
    }
  });

  document.addEventListener("keydown", onKeyDown);
}

/* =========================================
   MAIN WEBSITE SETUP
========================================= */

function setupRAWQ() {
  const categoryGrid = $("#categoryGrid");
  const searchInput = $("#productSearch");
  const designGrid = $("#designGrid");
  const nav = $("#nav");
  const menuToggle = $("#menuToggle");
  const backButton = $("#backButton");
  const designSection = $("#designs");

  if (!categoryGrid || !designSection || !designGrid) {
    console.error("RAWQ: Required HTML elements are missing.");
    return;
  }

  /* Category buttons */
  categoryGrid.addEventListener("click", event => {
    const card = event.target.closest("[data-category]");

    if (card) {
      openCategory(card.dataset.category);
    }
  });

  /* Search within the current category */
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (!currentCategory) return;

      const query = searchInput.value.trim().toLowerCase();

      const items = rawqData[currentCategory].filter(item =>
        item.name.toLowerCase().includes(query)
      );

      renderProducts(items);
    });
  }

  /* Product preview and WhatsApp ordering */
  designGrid.addEventListener("click", event => {
    const preview = event.target.closest("[data-preview]");

    if (preview) {
      openPreview(
        preview.dataset.preview,
        preview.dataset.name,
        preview.dataset.colour,
        currentCategory
      );

      return;
    }

    const button = event.target.closest("[data-order]");

    if (!button) return;

    const card = button.closest(".design-card");

    if (!card) return;

    const size = card.querySelector(".rawq-size").value;
    const quantity = Number(card.querySelector(".rawq-qty").value);

    orderOnWhatsApp({
      name: button.dataset.order,
      category: button.dataset.category,
      colour: button.dataset.colour,
      size,
      quantity
    });
  });

  /* Back to collections */
  if (backButton) {
    backButton.addEventListener("click", () => {
      designSection.hidden = true;
      $("#shop")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* Mobile navigation */
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");

      menuToggle.textContent =
        nav.classList.contains("open") ? "×" : "☰";
    });
  }

  /* Navigation links */
  $$(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");

      if (menuToggle) {
        menuToggle.textContent = "☰";
      }

      $$(".nav-link").forEach(item => {
        item.classList.remove("active");
      });

      if (link.classList.contains("nav-link")) {
        link.classList.add("active");
      }
    });
  });

  /* Current year */
  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* Scroll progress indicator */
  const progress = document.createElement("div");

  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");

  document.body.appendChild(progress);

  let scrollTicking = false;

  function updateScrollUI() {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    progress.style.transform =
      `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;

    $(".header")?.classList.toggle("scrolled", window.scrollY > 18);

    scrollTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (scrollTicking) return;

    window.requestAnimationFrame(updateScrollUI);
    scrollTicking = true;
  }, { passive: true });

  updateScrollUI();

  /* Scroll reveal animations */
  const revealTargets = $$( 
    ".section-head, .category-card, .custom-panel, " +
    ".about h2, .about-copy, .value-strip"
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");

    if (element.classList.contains("category-card")) {
      element.style.transitionDelay =
        `${(index % 4) * 55}ms`;
    }
  });

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    });

    revealTargets.forEach(element => observer.observe(element));
  } else {
    revealTargets.forEach(element => {
      element.classList.add("is-visible");
    });
  }
}

/* =========================================
   START WHEN HTML IS READY
========================================= */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupRAWQ);
} else {
  setupRAWQ();
}
/* RAWQ — RELIABLE SCROLL-UP REVEAL */
(() => {
  function initRAWQScrollReveal() {
    const selectors = [
      ".category-card",
      ".design-card",
      ".section-head",
      ".custom-panel",
      ".steps",
      ".rawq-faq-list details"
    ];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(selectors.join(",")).forEach(el => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -35px 0px"
    });

    function revealElements(root = document) {
      root.querySelectorAll(selectors.join(",")).forEach(el => {
        if (!el.classList.contains("rawq-reveal")) {
          el.classList.add("rawq-reveal");
          observer.observe(el);
        }
      });
    }

    revealElements();

    /* Also animate products added dynamically */
    const grid = document.querySelector("#designGrid");

    if (grid) {
      new MutationObserver(() => revealElements(grid))
        .observe(grid, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initRAWQScrollReveal,
      { once: true }
    );
  } else {
    initRAWQScrollReveal();
  }
})();