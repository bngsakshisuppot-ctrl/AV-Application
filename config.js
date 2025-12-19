<script>
const API_URL = "https://script.google.com/macros/s/AKfycbzHo7wQhXHoHYz_Yruhod3d3rQOAGHI4SvL6f0dADjMu8XYA1DNhkW-_NJShwSIXRLt/exec";

function getUser() {
  return JSON.parse(sessionStorage.getItem("user"));
}

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

// protect pages
if (!location.pathname.includes("login")) {
  if (!getUser()) {
    window.location.href = "login.html";
  }
}
</script>
