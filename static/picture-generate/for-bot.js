"use strict";

var nav = document.getElementsByClassName("toggler permanentTopNav")[0];
nav.style.display = "none";

if (navigator.userAgent.includes("hide-content")) {
  var content = document.getElementsByClassName("content")[0];
  content.className += " hide-content";
}

var footer_container = document
  .evaluate(
    "/html/body[@class='bilberry-hugo-theme']/footer/div[@class='container']",
    document
  )
  .iterateNext();
footer_container.innerHTML = "";
footer_container.className += " qr-footer";

var qr_holder = document.createElement("img");
const qr_size = 256;
new AwesomeQR.AwesomeQR({
  text: "https://weekly.hitsz.org" + window.location.pathname,
  size: qr_size,
})
  .draw()
  .then((dataURL) => (qr_holder.src = dataURL));
footer_container.appendChild(qr_holder);

var scan_tip = document.createElement("div");
scan_tip.className = "scan-tip";
scan_tip.textContent = "长按扫码在浏览器中打开全文";
footer_container.appendChild(scan_tip);
