function viewSource() {
  const location = window.location.toString();
  const splitLocation = location.split("/");
  console.log(splitLocation)
  const userName = splitLocation[2].split(".")[0];
  const repoName = splitLocation[3];
  const fileName = splitLocation[4];
  const sourceURL = "https://github.com/" + userName + "/" + repoName + "/blob/master/" + fileName;
  window.open(sourceURL, "_blank");
}
