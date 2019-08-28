function openInHixie(id) {
  const divToStudy = document.getElementById(id);
  const htmlToStudy = divToStudy.innerHTML;
  const encodedHTML = encodeURIComponent(htmlToStudy);
  const url = "https://software.hixie.ch/utilities/js/live-dom-viewer/?" + encodedHTML;
  window.open(url, "_blank");
}
