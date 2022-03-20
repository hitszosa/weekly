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

var week_count = window.location.pathname.match(/week-(\d+)/)[1];

var qr_holder = document.createElement("img");
var qr_size = 256;
new AwesomeQR.AwesomeQR({
  text: "w.lug.pub/" + week_count,
  size: qr_size,
})
  .draw()
  .then((dataURL) => (qr_holder.src = dataURL));
footer_container.appendChild(qr_holder);

var scan_tip = document.createElement("div");
scan_tip.className = "scan-tip";
scan_tip.innerHTML = "请访问 w.lug.pub/" + week_count + "<br>或长按扫码打开全文";
footer_container.appendChild(scan_tip);
