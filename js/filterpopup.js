const applyFilterBtn = document.getElementById("apply-button2");
const formElement = document.getElementById("grid1");
const tableContainer = document.querySelector('div[style*="overflow"]');
const statusSection = document.querySelector(".status");
const filterImage = document.querySelector(".filterrr");

function isMobile() {
  return window.innerWidth <= 768;
}

// Modified to toggle table visibility
function toggleTable() {
  if (isMobile()) {
    if (tableContainer.style.display === "none") {
      // Show table, hide form
      formElement.style.display = "none";
      statusSection.style.display = "none";
      tableContainer.style.display = "block";
    } else {
      // Hide table, show form
      formElement.style.display = "block";
      statusSection.style.display = "block";
      tableContainer.style.display = "none";
    }
  } else {
    // Desktop view remains the same
    formElement.style.display = "block";
    statusSection.style.display = "block";
    tableContainer.style.display = "block";
  }
}

function showForm() {
  formElement.style.display = "block";
  statusSection.style.display = "block";
  if (isMobile()) {
    tableContainer.style.display = "none";
  }
}

let lastWidth = window.innerWidth;
window.addEventListener("resize", function () {
  const currentWidth = window.innerWidth;

  // Mobile to Desktop transition
  if (lastWidth <= 768 && currentWidth > 768) {
    formElement.style.display = "block";
    statusSection.style.display = "block";
    tableContainer.style.display = "block";
  }
  // Desktop to Mobile transition
  else if (lastWidth > 768 && currentWidth <= 768) {
    tableContainer.style.display = "none";
    formElement.style.display = "block";
    statusSection.style.display = "block";
  }

  lastWidth = currentWidth;
});

function setInitialState() {
  if (isMobile()) {
    tableContainer.style.display = "none";
    // formElement.style.display = 'block';
    statusSection.style.display = "block";
  } else {
    // Desktop view shows both
    tableContainer.style.display = "block";
    // formElement.style.display = 'block';
    statusSection.style.display = "block";
  }
}

setInitialState();

// Changed from showTable to toggleTable
applyFilterBtn.addEventListener("click", toggleTable);
filterImage.addEventListener("click", showForm);

document.addEventListener("click", function (event) {
  if (
    isMobile() &&
    tableContainer.style.display === "block" &&
    !applyFilterBtn.contains(event.target) &&
    !filterImage.contains(event.target)
  ) {
    return;
  }
});

window.addEventListener("load", setInitialState);
