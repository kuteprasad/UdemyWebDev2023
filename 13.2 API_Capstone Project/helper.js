function copyTextFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
