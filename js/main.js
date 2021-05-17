/**
 * navbar toggle
 */
const pageParentEl = document.querySelector(".site-content");
const openSidebarEl = document.querySelector(".open-sidebar");
const openSidebarEl2 = document.querySelector(".open-sidebar-default");
const closeSidebarEl = document.querySelector(".close-sidebar");

openSidebarEl2?.addEventListener("click", (e) => {
    pageParentEl.classList.toggle("closed");
});

openSidebarEl?.addEventListener("click", (e) => {
    pageParentEl.classList.toggle("closed");
});

closeSidebarEl?.addEventListener("click", (e) => {
    pageParentEl.classList.remove("closed");
});

/**
 * Switch navbar by watching scoll event
 */
const headerEl = document.querySelector(".header");
const fallbackNavEl = document.querySelector(".secondary-nav");
window.addEventListener("scroll", (e) => {
    if (window.scrollY > (headerEl.offsetTop + headerEl.offsetHeight)) {
        fallbackNavEl.classList.remove("hidden-lg-down");
    }
    else {
        fallbackNavEl.classList.add("hidden-lg-down");
    }
});

/**
 * Winbox integration
 */
const bitcoinRatesSectionEl = document.querySelector(".bitcoin-rates-section");
const openBitcoinRatesEl = document.querySelector("#open-bitcoin-rates");

openBitcoinRatesEl?.addEventListener("click", (e) => {
    const bitcoinRatesBox = new WinBox({
        title: 'Current Crypto Rates',
        index: 999999,
        width: "100%",
        height: "100%",
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: bitcoinRatesSectionEl,
        // modal: true,
        background: "#000000",
        onfocus: function() {
            this.setBackground("#000000");
        },
        onblur: function() {
            this.setBackground("#777");
        },
    });
});