document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.innerText = "🌙";
  btn.className = "toggle-dark-btn";
  document.body.appendChild(btn);

  btn.onclick = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  };

  // Ghi nhớ lựa chọn người dùng
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
