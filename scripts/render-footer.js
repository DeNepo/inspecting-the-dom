function renderFooter() {

  const img = document.createElement("img");
  img.setAttribute("src", "https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg");
  img.setAttribute("alt", "Hack Your Future, Belgium")
  img.width = 100;
  img.height = 100;

  const a = document.createElement("a");
  a.href = "https://hackyourfuture.be";
  a.target = "_blank";
  a.appendChild(img);

  return a;
}
