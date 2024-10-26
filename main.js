const APIKey = "";
const ChannelId = "UC2vLhj8PZYnRrtZ-tyEfOuQ";
const subscriberCount = document.getElementById("subscriberCount");
const channeltittle = document.getElementById("channeltittle");
const toggleLinksButton = document.getElementById("toggleLinksButton");
const socialLinks = document.getElementById("socialLinks");
const socialMediaCard = document.getElementById("socialMediaCard");
const logo = document.getElementById("logo");

toggleLinksButton.addEventListener("click", () => {
  if (socialLinks.classList.contains("hidden")) {
    socialLinks.classList.remove("hidden");
    toggleLinksButton.textContent = 'Hide ';
    socialMediaCard.classList.add("hidden");
  } else {
    socialLinks.classList.add("hidden");
    toggleLinksButton.textContent = 'Show ';
    socialMediaCard.classList.add("hidden");
  }
});

const Instagram = "https://www.instagram.com/k_brow.n/?next=%2F";
const Facebook = "https://x.com/brown_k75474";
const Github = "https://github.com/Elli-mask";
const Whatsapp = "https://wa.me/254743678908"; // Your WhatsApp link

function secondfunction(a) {
  window.open(a);
}

// Function to display the social media card in the center
function showCard(name, imgSrc, link) {
  socialMediaCard.innerHTML = `
   <img src="${imgSrc}" alt="${name}" class="w-[60px] h-[60px] z-30">
   <h2 class="text-2xl text-white z-30">${name}</h2>
   <a href="${Instagram}}" target="_blank" class="z-30 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Visit ${name}</a>
 `;
  socialMediaCard.classList.remove("hidden");
  socialLinks.classList.add("hidden");
}

document.getElementById("year").textContent = new Date().getFullYear();
