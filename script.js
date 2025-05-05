function answ() {
  if (confirm("OK para mostrar/Cancel para ocultar")) {
    document.getElementById("answers").style = "display: initial";
  } else {
    document.getElementById("answers").style = "display: none";
  }
}
