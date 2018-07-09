"use strict";

function animateValue(e, t, n, i) {
  function o() {
    var e = (new Date).getTime(),
      t = Math.max((w - e) / i, 0),
      o = Math.round(n - t * r);
    a.innerHTML = o, o == n && clearInterval(c)
  }
  var a = document.getElementById(e),
    r = n - t,
    s = 50,
    l = Math.abs(Math.floor(i / r));
  l = Math.max(l, s);
  var c, d = (new Date).getTime(),
    w = d + i,
    c = setInterval(o, l);
  o()
}

function onMouseMove(e) {
  function t(e, t, n, i) {
    for (var o = "", a = 1; a < n; a++) o += a * e + "px " + a * t + "px #d0e6e7, ";
    return o += n * e + "px " + n * t + "px " + i + "px rgba(189, 214, 218, 1)"
  }
  mouseX = e.clientX, mouseY = e.clientY;
  var n = window.innerWidth / 2,
    i = window.innerHeight / 2,
    o = document.getElementsByClassName("threeD-txt--atticlab")[0];
  mouseX < n && mouseY > i ? (o.style.textShadow = t(1, -1, 10, 40), o.style.transform = "rotate3d(1, 0, 0, -10deg)") : mouseX > n && mouseY > i ? (o.style.textShadow = t(-1, -1, 10, 40), o.style.transform = "rotate3d(1, 0, 0, 10deg)") : mouseX < n && mouseY < i ? (o.style.textShadow = t(1, 1, 10, 40), o.style.transform = "rotate3d(0, 1, 0, -10deg)") : mouseX > n && mouseY < i ? (o.style.textShadow = t(-1, 1, 10, 40), o.style.transform = "rotate3d(0, 1, 0, 10deg)") : o.style.textShadow = t(1, -1, 10, 40)
}

function initPattern(e) {
  function t(e) {
    a = document.createElement("div"), e.appendChild(a), r = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 8e3), r.position.set(0, 0, 10), s = new THREE.Scene, c = new Array;
    for (var t = 2 * Math.PI, i = new THREE.SpriteCanvasMaterial({
        color: 16777215,
        program: function(e) {
          e.beginPath(), e.arc(0, 0, .2, 0, t, !0), e.fill()
        }
      }), o = 0, m = 0; m < u; m++)
      for (var f = 0; f < h; f++) d = c[o++] = new THREE.Sprite(i), d.position.x = m * w - u * w / 2, d.position.z = f * w - h * w / 2, s.add(d);
    l = new THREE.CanvasRenderer({
      alpha: !0
    }), l.setPixelRatio(window.devicePixelRatio), l.setSize(window.innerWidth, window.innerHeight), a.appendChild(l.domElement), window.addEventListener("resize", n, !1)
  }

  function n() {
    g = window.innerHeight, f = window.innerWidth, r.aspect = window.innerWidth / window.innerHeight, r.updateProjectionMatrix(), l.setSize(window.innerWidth, window.innerHeight)
  }

  function i() {
    requestAnimationFrame(i), o()
  }

  function o() {
    r.position.y = 1e3, r.lookAt(s.position);
    for (var e = 0, t = 0; t < u; t++)
      for (var n = 0; n < h; n++) d = c[e++], d.position.y = 5 * Math.sin(.9 * (t + m)) + 5 * Math.sin(.9 * (n + m)), d.scale.x = d.scale.y = 4 * (Math.sin(.9 * (t + m)) + 3) + 4 * (Math.sin(.9 * (n + m)) + 1);
    l.render(s, r), m += .1
  }
  var a, r, s, l, c, d, w = 140,
    u = 40,
    h = 40,
    m = 0,
    f = window.innerWidth / 2,
    g = window.innerHeight / 2;
  t(e), i()
}
$(function() {
  $(".dropdown-menu .dropdown-item").click(function() {
    $(".lang-selector span:first-child").text($(this).text()), $(".lang-selecto span:first-child").val($(this).text())
  }), $(".list__item").click(function() {
    $(this).toggleClass("active")
  }), $(".list__item.hiring__list-item").click(function() {
    $(this).off("click").toggleClass("active")
  }),
  $("#close-vote").click(function() {
    $(".vote").addClass("d-none")
  })
}), $.fn.isInViewport = function() {
  if ($(this).length > 0) {
    var e = $(this).offset().top,
      t = e + $(this).outerHeight(),
      n = $(window).scrollTop(),
      i = n + $(window).height();
    return t > n && e < i
  }
};
var isScrollInit = !1;
$(window).on("scroll", function() {
  $(".stats").isInViewport() && !isScrollInit && (animateValue("cosultations", 0, 232, 6e3), animateValue("clients", 0, 180, 6e3), animateValue("website", 0, 46, 6e3), animateValue("prjs", 0, 86, 6e3), isScrollInit = !0)
}), $("#toggle").click(function() {
  $(this).toggleClass("active"), $("#overlay").toggleClass("open"), $(".wrapper").toggleClass("overflow-hidden"), $(".vote").addClass("d-none")
}), $(function() {
  $(".nav-tab").click(function() {
    var e = $(this).attr("aria-controls");
    $("#show-more-btn").attr("data-type", e)
  }), $("#show-more-btn").click(function() {
    var e = $(this).attr("data-type");
    $("#row-" + e + " .col-news:hidden").slice(0, 6).slideDown()
  })
});
var mouseX = 0,
  mouseY = 0,
  currentSectionEl = document.getElementsByClassName("section-top")[0];
currentSectionEl && currentSectionEl.addEventListener("mousemove", onMouseMove, !1), [].forEach.call(document.getElementsByClassName("pattern"), function(e, t, n) {
  initPattern(e)
});
