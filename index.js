document.getElementById("back").addEventListener("click", () => {
  const side = document.getElementById("side");
  const body = document.getElementById("body");
  if (side.style.display === "none") {
    body.style.display = "none";
    side.style.display = "block";
    document.getElementById("back").toggleAttribute("disabled");
  } else {
    side.style.display = "none";
    body.style.display = "block";
    document.getElementById("back").toggleAttribute("disabled");
  }
});

document.querySelectorAll(".main-contact-list_area-main-item").forEach((i) => {
  i.addEventListener("click", () => {
    const side = document.getElementById("side");
    const body = document.getElementById("body");
    body.style.display = "block";
    side.style.display = "none";
    document.getElementById("back").toggleAttribute("disabled", false);
    window.scroll({
      top: document.body.clientHeight,
      behavior: "smooth",
    });
    document.querySelector(".main-contact-message_body-content").scroll({
      top: document.querySelector(".main-contact-message_body-content")
        .clientHeight,
      behavior: "smooth",
    });
  });
});

document.getElementById("send").addEventListener("click", () => {
  const msg = document.getElementById("messenger").value;
  const msgBody = document.querySelector(".main-contact-message_body-content");
  if (msg.trim()) {
    const newChild = `<div class="me"><p>${msg.split('\n').join('<br />')}</p><small>${new Date().toLocaleTimeString()}</small></div>`;
    msgBody.innerHTML += newChild;
    document.getElementById("messenger").value = "";
    document.querySelector(".main-contact-message_body-content").scroll({
      top: document.querySelector(".main-contact-message_body-content")
        .clientHeight,
      behavior: "smooth",
    });
  }
});
