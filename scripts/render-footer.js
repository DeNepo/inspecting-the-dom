function renderFooter() {

  const img = document.createElement("img");
  img.setAttribute("src", "https://pbs.twimg.com/profile_images/984474625009741824/Bs_qKx6-_400x400.jpg");
  img.setAttribute("alt", "https://deroosadvocaten.nl/wp-content/uploads/2017/12/Geschaald-hack-your-future.png")
  img.width = 100;
  img.height = 100;

  const a = document.createElement("a");
  a.href = "https://hackyourfuture.be";
  a.target = "_blank";
  a.appendChild(img);

  return a;
}
