
const applyFilterBtn = document.getElementById("apply-button2");
const formElement = document.getElementById("grid1");
const tableContainer = document.querySelector('div[style*="overflow"]');
const statusSection = document.querySelector(".status");
const filterImage = document.querySelector(".filterrr");
function isMobile() {
  return window.innerWidth <= 768;
}
let isTableVisible = false;
function toggleTable() {
  if (isMobile()) {
    if (!isTableVisible) {
      // Show table
      formElement.style.display = "none";
      statusSection.style.display = "none";
      tableContainer.style.display = "block";
      isTableVisible = true;
    } else {
      // Hide table and show original screen
      formElement.style.display = "block";
      statusSection.style.display = "block";
      tableContainer.style.display = "none";
      isTableVisible = false;
    }
  }
}
function showForm() {
  formElement.style.display = "block";
  statusSection.style.display = "block";
  tableContainer.style.display = "none";
  isTableVisible = false;
}
// Handle window resize
let lastWidth = window.innerWidth;
window.addEventListener("resize", function () {
  const currentWidth = window.innerWidth;
  if (lastWidth <= 768 && currentWidth > 768) {
    // Mobile to Desktop
    formElement.style.display = "block";
    statusSection.style.display = "block";
    tableContainer.style.display = "block";
  } else if (lastWidth > 768 && currentWidth <= 768) {
    // Desktop to Mobile
    formElement.style.display = "block";
    statusSection.style.display = "block";
    tableContainer.style.display = "none";
    isTableVisible = false;
  }
  lastWidth = currentWidth;
});
// Initial setup
function setInitialState() {
  if (isMobile()) {
    formElement.style.display = "block";
    statusSection.style.display = "block";
    tableContainer.style.display = "none";
    isTableVisible = false;
  } else {
    formElement.style.display = "block";
    statusSection.style.display = "block";
    tableContainer.style.display = "block";
  }
}
setInitialState();
applyFilterBtn.addEventListener("click", toggleTable);
filterImage.addEventListener("click", showForm);
window.addEventListener("load", setInitialState);














