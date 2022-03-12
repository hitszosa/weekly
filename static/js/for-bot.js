"use strict";

if (navigator.userAgent == "PicBot") {
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
  new QRCode(qr_holder, {
    text: "http://weekly.hitsz.org" + window.location.pathname,
    width: 200,
    height: 200,
    // correctLevel : QRCode.CorrectLevel.H
  });
  qr_holder.style.width = "fit-content";
  qr_holder.style.margin = 0;
  footer_container.appendChild(qr_holder);

  var scan_tip = document.createElement("div");
  scan_tip.className = "scan-tip";
  scan_tip.textContent = "长按扫码在浏览器中打开";
  footer_container.appendChild(scan_tip);
}
