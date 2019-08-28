function viewSource() {
  const location = window.location.toString();
  const splitLocation = location.split("/");
  const fileName = splitLocation[5];
  const sourceURL = "https://github.com/HackYourFutureBelgium/inspecting-the-dom/blob/master/examples-to-study/" + fileName;
  window.open(sourceURL, "_blank");
}
