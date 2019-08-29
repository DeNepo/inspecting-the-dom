function openInHixie(id) {
  const exampleDiv = document.getElementById(id);
  const HTMLstr = exampleDiv.innerHTML;
  const encodedHTML = encodeURIComponent(HTMLstr);
  const url = "https://software.hixie.ch/utilities/js/live-dom-viewer/?" + encodedHTML;
  window.open(url, "_blank");
}
