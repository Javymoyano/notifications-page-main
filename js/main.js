//!Get DOM element
const markAsReadElement = document.querySelector(".header__link");
const unreadCountElement = document.querySelector(".unread-count");

//!Escuchar los clicks de los eventos
markAsReadElement.addEventListener("click", () => {
  markAllAsRead(), resetUnreadCount();
});

//!Marcar todas las notificaciones como leidas

function markAllAsRead() {
  //*Traer todas las notificaciones no leidas
  const unreadNotifications = document.querySelectorAll(
    ".notification--unread"
  );
  unreadNotifications.forEach((notif) =>
    notif.classList.remove("notification--unread")
  );
}

function resetUnreadCount() {
  unreadCountElement.textContent = "0";
}
