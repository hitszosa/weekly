"use strict";

var nav = document.getElementsByClassName("toggler permanentTopNav")[0];
nav.style.display = "none";

var footer_container = document
  .evaluate(
    "/html/body[@class='bilberry-hugo-theme']/footer/div[@class='container']",
    document
  )
  .iterateNext();
footer_container.innerHTML = "";
footer_container.className += " qr-footer";

var qr_holder = document.createElement("div");
const qr_size = 256;
new QRCode(qr_holder, {
  text: "https://weekly.hitsz.org" + window.location.pathname,
  width: qr_size,
  height: qr_size,
  // correctLevel : QRCode.CorrectLevel.H
});
qr_holder.style.width = "fit-content";
footer_container.appendChild(qr_holder);

var scan_tip = document.createElement("div");
scan_tip.className = "scan-tip";
scan_tip.textContent = "长按扫码在浏览器中打开全文";
footer_container.appendChild(scan_tip);
