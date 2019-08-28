function renderFooter() {

  const img = document.createElement("img");
  img.setAttribute("src", "https://user-images.githubusercontent.com/18554853/63869485-7ffd8f80-c9b8-11e9-8c29-0fd1bdb75d4f.jpg");
  img.setAttribute("alt", "Hack Your Future, Belgium")
  img.width = 100;
  img.height = 100;

  const a = document.createElement("a");
  a.href = "https://hackyourfuture.be";
  a.target = "_blank";
  a.appendChild(img);

  return a;
}
