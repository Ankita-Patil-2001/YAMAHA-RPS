document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleSidebarBtn = document.getElementById("toggleSidebar");
  const sidebarIcon = document.getElementById("sidebar-icon");
  const masterItem = document.getElementById("master");
  const subNav = masterItem.querySelector(".sub-nav");
  const toggleIcon = masterItem.querySelector(".nav-text133");
  const submenuItems = document.querySelectorAll(".has-submenu");
  const tabs = document.querySelectorAll(".tabs2 .tab");
  const contents = document.querySelectorAll(".content");
  const userIcon = document.querySelector(".mobile-user-icon");
  const mobileSidebar = document.querySelector(".mobile-sidebar");
  const overlay = document.querySelector(".mobile-overlay");
  const closeBtn = document.querySelector(".mobile-sidebar-close");
  const iconRow = document.querySelector(".icon-row");
  const isMobile = () => window.innerWidth <= 768;

  function setInitialSidebarState() {
    if (isMobile()) {
      // Mobile settings
      sidebar.classList.add("closed");
      if (sidebar.classList.contains("closed")) {
        sidebarIcon.style.left = "8px";
        sidebarIcon.style.right = "auto";
        sidebarIcon.style.backgroundColor = "white";
      } else {
        sidebarIcon.style.left = "8px";  // Keep it on left for mobile
        sidebarIcon.style.right = "auto";
        sidebarIcon.style.backgroundColor = "rgba(2, 25, 227, 1)";
      }
    } else {
      // Desktop settings
      sidebar.classList.add("closed");
      if (sidebar.classList.contains("closed")) {
        sidebarIcon.style.left = "8px";
        sidebarIcon.style.right = "auto";
        sidebarIcon.style.backgroundColor = "white";
      } else {
        sidebarIcon.style.left = "auto";
        sidebarIcon.style.right = "-200px"; // Move to right for desktop
        sidebarIcon.style.backgroundColor = "rgba(2, 25, 227, 1)";
      }
    }
  }

  function toggleSidebar() {
    sidebar.classList.toggle("closed");

    if (isMobile()) {
      // Mobile toggle behavior
      if (sidebar.classList.contains("closed")) {
        sidebarIcon.style.left = "8px";
        sidebarIcon.style.right = "auto";
        sidebarIcon.style.backgroundColor = "white";
      } else {
        sidebarIcon.style.left = "8px";  // Keep it on left for mobile
        sidebarIcon.style.right = "auto";
        sidebarIcon.style.backgroundColor = "rgba(2, 25, 227, 1)";
      }
    } else {
      // Desktop toggle behavior
      if (sidebar.classList.contains("closed")) {
        sidebarIcon.style.left = "8px";
        sidebarIcon.style.right = "auto";
        sidebarIcon.style.backgroundColor = "white";
      } else {
        sidebarIcon.style.left = "auto";
        sidebarIcon.style.right = "-200px"; // Move to right for desktop
        sidebarIcon.style.backgroundColor = "rgba(2, 25, 227, 1)"
      }
    }
  }

  // Event listeners
  toggleSidebarBtn.addEventListener("click", toggleSidebar);
  sidebarIcon.addEventListener("click", toggleSidebar);

  // Update on window resize
  window.addEventListener("resize", setInitialSidebarState);

  // Set initial state
  setInitialSidebarState();

  // Rest of your existing code remains the same...
  masterItem.addEventListener("click", function (e) {
    if (e.target === masterItem || e.target.closest(".ffff")) {
      const isVisible = subNav.style.display === "block";
      subNav.style.display = isVisible ? "none" : "block";
      toggleIcon.src = isVisible
        ? "./assets/images/Vectorplus.png"
        : "./assets/images/Vector (1).png";
      masterItem.classList.toggle("active");
    }
  });
  masterItem.addEventListener("click", function (e) {
    if (e.target === masterItem || e.target.closest(".ffff")) {
      toggleMasterSubmenu();
    }
  });

  // Close master submenu when sidebar is closed
  sidebar.addEventListener("transitionend", function () {
    if (sidebar.classList.contains("closed")) {
      subNav.style.display = "none";
      toggleIcon.src = "./assets/images/Vectorplus.png";
      masterItem.classList.remove("active");
    }
  });
  
  submenuItems.forEach((item) => {
    const submenuHeader = item.querySelector(".submenu-header");
    const toggleIcon = submenuHeader.querySelector(".toggle-icon");
    const nestedNav = item.querySelector(".nested-sub-nav");

    submenuHeader.addEventListener("click", function (e) {
      e.stopPropagation();
      const isExpanded = item.classList.contains("active");
      item.classList.toggle("active");
      nestedNav.style.display = isExpanded ? "none" : "block";
      toggleIcon.src = isExpanded
        ? "./assets/images/Vectorplus.png"
        : "./assets/images/minus.png";
      toggleIcon.style.transform = isExpanded
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
  });

  const firstTab = tabs[0];
  const firstContent = contents[1];
  firstTab.classList.add("active");
  firstTab.style.backgroundColor = "white";
  firstContent.style.display = "block";

  for (let i = 1; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  function handleTabClick(tab) {
    const tabNumber = tab.getAttribute("data-tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.style.backgroundColor = "";
    });
    tab.classList.add("active");
    tab.style.backgroundColor = "white";
    contents.forEach((content) => {
      content.style.display = "none";
    });
    const activeContent = document.getElementById(`content-${tabNumber}`);
    activeContent.style.display = "block";
    document.querySelectorAll(".container2").forEach((container) => {
      container.style.display = "none";
    });
    const activeContainer = document.getElementById(`container2-${tabNumber}`);
    if (activeContainer) {
      activeContainer.style.display = "block";
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      handleTabClick(this);
    });
  });

  window.addEventListener("load", function () {
    const defaultTab = tabs[0];
    handleTabClick(defaultTab);
  });

  const sidebarContent = iconRow.cloneNode(true);
  mobileSidebar.appendChild(sidebarContent);

  userIcon.addEventListener("click", function () {
    mobileSidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeSidebar() {
    mobileSidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSidebar();
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  mobileSidebar.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  mobileSidebar.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX - touchStartX > 50) {
        closeSidebar();
      }
    },
    false
  );

  const userPopup = document.createElement("div");
  userPopup.classList.add("user-popup");
  userPopup.innerHTML = `
    <div class="popup-content">
        <div class="icon"><img src="assets/images/icon1.png" alt="Icon 1" /></div>
        <div class="icon"><img src="assets/images/icon2.png" alt="Icon 2" /></div>
        <div class="icon"><img src="assets/images/icon3.png" alt="Icon 3" /></div>
        <div class="icon"><img src="assets/images/icon4.png" alt="Icon 4" /></div>
    </div>
  `;
  document.body.appendChild(userPopup);

  const profileUserIcon = document.querySelector(".proileuser img");
  profileUserIcon.addEventListener("click", function (event) {
    userPopup.classList.toggle("active");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      !profileUserIcon.contains(event.target) &&
      !userPopup.contains(event.target)
    ) {
      userPopup.classList.remove("active");
    }
  });
  
});
