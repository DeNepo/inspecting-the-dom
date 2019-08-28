function viewSource() {
  const location = window.location.toString();
  const splitLocation = location.split("/");
  const userName = splitLocation[2].split(".")[0];
  const repoName = splitLocation[3];
  const folderName = splitLocation[4];
  const fileName = splitLocation[5];
  const sourceURL = "https://github.com/" + userName + "/" + repoName + "/blob/master/" + folderName + "/" + fileName;
  window.open(sourceURL, "_blank");
}
