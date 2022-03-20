"use strict";

var nav = document.getElementsByClassName("toggler permanentTopNav")[0];
nav.style.display = "none";

if (navigator.userAgent.includes("hide-content")) {
  var content = document.getElementsByClassName("content")[0];
  content.className += " hide-content";
}

document.getElementsByTagName("footer")[0].remove();

var footer_container = document.createElement("div");
footer_container.className = "qr-footer";

// Insert before Title
// var article = document.getElementsByTagName("article")[0];
// article.insertBefore(footer_container, article.firstChild);

// Insert after Title line
var title_line = document.getElementsByClassName("meta")[0];
title_line.parentElement.insertBefore(footer_container, title_line.nextSibling);

var week_count = window.location.pathname.match(/week-(\d+)/)[1];

var qr_holder = document.createElement("img");
var qr_size = 100 * window.devicePixelRatio;
new AwesomeQR.AwesomeQR({
  text: "w.lug.pub/" + week_count,
  size: qr_size,
  margin: 0,
})
  .draw()
  .then((dataURL) => (qr_holder.src = dataURL));
footer_container.appendChild(qr_holder);

var scan_tip = document.createElement("div");
scan_tip.className = "scan-tip";
scan_tip.innerHTML =
  "请访问 w.lug.pub/" + week_count + "<br>或长按扫码浏览全文";
footer_container.appendChild(scan_tip);
