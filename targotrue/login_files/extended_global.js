var __jQuery = window.jQuery.noConflict();
var $ = __jQuery;
// extended_global.js
// v 2.6.1
// OS: fix conflicting __jQuery include by EI

var DEV = false,
  PATH_IMG = "/de/images/redesign/",
  PATH_FLASH = "/de/swf/",
  PATH_JS = "/de/javascript/redesign/",
  PATH_CSS = "/de/cssnv/redesign/";

if (window.location.host.indexOf("tab-p") === 0) {
  DEV = true;
  PATH_IMG = "http://tab-p.arsmedium.de/dev/responsive-new/resources/images/";
  PATH_FLASH = "http://tab-p.arsmedium.de/dev/responsive-new/resources/flash/";
  PATH_JS = "http://tab-p.arsmedium.de/dev/responsive-new/resources/js/";
  PATH_CSS = "http://tab-p.arsmedium.de/dev/responsive-new/resources/css/";
}

// TAB DirectMenu Autoshow
var tab_directmenu_timings = {
  delay_in: 1000, // zeit bis directmenu nach pageload rausgefahren wird (ms)
  delay_out: 1500, // dauer wie lange directmenu offen ist (ms)
  animation_time: 1000 // dauer der animationen (ms)
};

document.documentElement.className =
  document.documentElement.className.replace(/\bno-js\b/g, "") + " js ";

try {
  document.domain = "targobank.de";
} catch (ex) {}

// GA functions
function trkSET(trkParameter, trkValue) {
  _gaq.push(["_set", trkParameter, trkValue]);

  if (typeof ga === "function") {
    ga("set", trkParameter, trkValue);
  }
}

function trkEVT(trkEVT_category, trkEVT_action, trkEVT_label) {
  _gaq.push(["_trackEvent", trkEVT_category, trkEVT_action, trkEVT_label]);

  if (typeof ga === "function") {
    ga("send", "event", trkEVT_category, trkEVT_action, trkEVT_label);
  }
}

function trkVPV(trkVirtualPage) {
  _gaq.push(["_trackPageview", trkVirtualPage]);

  if (typeof ga === "function") {
    ga("send", "pageview", trkVirtualPage);
  }
}

function openPopWindow(myURL, params, windowName) {
  windowName =
    typeof windowName == "undefined" || params.length == 0
      ? "newWindow"
      : windowName;
  if (typeof params == "undefined" || params.length == 0) {
    new_window = window.open(myURL, windowName);
  } else {
    new_window = window.open(myURL, windowName, params);
  }
  new_window.focus();
}

function gup(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return decodeURIComponent("");
  else return decodeURIComponent(results[1]);
}

function loadJS(src, async) {
  async = async || false;
  if (typeof src === "string") {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    if (async) {
      s.async = true;
    }
    $("head").append(s);
  }
}

// __jQuery plugins
(function(window, $) {
  /*!
 * __jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/__jQuery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
  (function($, document, undefined) {
    var pluses = /\+/g;

    function raw(s) {
      return s;
    }

    function decoded(s) {
      return decodeURIComponent(s.replace(pluses, " "));
    }

    var config = ($.cookie = function(key, value, options) {
      // write
      if (value !== undefined) {
        options = $.extend({}, config.defaults, options);

        if (value === null) {
          options.expires = -1;
        }

        if (typeof options.expires === "number") {
          var days = options.expires,
            t = (options.expires = new Date());
          t.setDate(t.getDate() + days);
        }

        value = config.json ? JSON.stringify(value) : String(value);

        return (document.cookie = [
          encodeURIComponent(key),
          "=",
          config.raw ? value : encodeURIComponent(value),
          options.expires ? "; expires=" + options.expires.toUTCString() : "", // use expires attribute, max-age is not supported by IE
          options.path ? "; path=" + options.path : "",
          options.domain ? "; domain=" + options.domain : "",
          options.secure ? "; secure" : ""
        ].join(""));
      }

      // read
      var decode = config.raw ? raw : decoded;
      var cookies = document.cookie.split("; ");
      for (var i = 0, l = cookies.length; i < l; i++) {
        var parts = cookies[i].split("=");
        if (decode(parts.shift()) === key) {
          var cookie = decode(parts.join("="));
          return config.json ? JSON.parse(cookie) : cookie;
        }
      }

      return null;
    });

    config.defaults = {};

    $.removeCookie = function(key, options) {
      if ($.cookie(key) !== null) {
        $.cookie(key, null, options);
        return true;
      }
      return false;
    };
  })(__jQuery, document);

  /*
 * __jQuery.socialshareprivacy.js | 2 Klicks fuer mehr Datenschutz
 *
 * http://www.heise.de/extras/socialshareprivacy/
 * http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html
 *
 * Copyright (c) 2011 Hilko Holweg, Sebastian Hilbig, Nicolas Heiringhoff, Juergen Schmidt,
 * Heise Zeitschriften Verlag GmbH & Co. KG, http://www.heise.de
 *
 * is released under the MIT License http://www.opensource.org/licenses/mit-license.php
 *
 * Spread the word, link to us if you can.
 */
  (function(b) {
    function x(b, a) {
      var f = decodeURIComponent(b);
      if (f.length <= a) return b;
      var j = f.substring(0, a - 1).lastIndexOf(" ");
      return (f = encodeURIComponent(f.substring(0, j)) + "\u2026");
    }

    function q(c) {
      return b('meta[name="' + c + '"]').attr("content") || "";
    }

    function r() {
      var c = q("DC.title"),
        a = q("DC.creator"),
        c = 0 < c.length && 0 < a.length ? c + (" - " + a) : b("title").text();
      return encodeURIComponent(c);
    }

    function s() {
      var c = document.location.href,
        a = b("link[rel=canonical]").attr("href");
      a &&
        0 < a.length &&
        (0 > a.indexOf("http") &&
          (a = document.location.protocol + "//" + document.location.host + a),
        (c = a));
      return c;
    }

    b.fn.socialSharePrivacy = function(c) {
      var a = b.extend(
          !0,
          {
            services: {
              facebook: {
                status: "on",
                dummy_img: "socialshareprivacy/images/dummy_facebook.png",
                txt_info:
                  "2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Facebook senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.",
                txt_fb_off: "nicht mit Facebook verbunden",
                txt_fb_on: "mit Facebook verbunden",
                perma_option: "on",
                display_name: "Facebook",
                referrer_track: "",
                language: "de_DE",
                action: "recommend"
              },
              twitter: {
                status: "on",
                dummy_img: "socialshareprivacy/images/dummy_twitter.png",
                txt_info:
                  "2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Twitter senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.",
                txt_twitter_off: "nicht mit Twitter verbunden",
                txt_twitter_on: "mit Twitter verbunden",
                perma_option: "on",
                display_name: "Twitter",
                referrer_track: "",
                tweet_text: r,
                language: "en"
              },
              gplus: {
                status: "on",
                dummy_img: "socialshareprivacy/images/dummy_gplus.png",
                txt_info:
                  "2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Google+ senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.",
                txt_gplus_off: "nicht mit Google+ verbunden",
                txt_gplus_on: "mit Google+ verbunden",
                perma_option: "on",
                display_name: "Google+",
                referrer_track: "",
                language: "de"
              }
            },
            info_link:
              "http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html",
            txt_help:
              "Wenn Sie diese Felder durch einen Klick aktivieren, werden Informationen an Facebook, Twitter oder Google in die USA &uuml;bertragen und unter Umst&auml;nden auch dort gespeichert. N&auml;heres erfahren Sie durch einen Klick auf das <em>i</em>.",
            settings_perma:
              "Dauerhaft aktivieren und Daten&uuml;ber&shy;tragung zustimmen:",
            cookie_path: "/",
            cookie_domain: document.location.host,
            cookie_expires: "365",
            css_path: "socialshareprivacy/css_path",
            uri: s
          },
          c
        ),
        f = "on" === a.services.facebook.status,
        j = "on" === a.services.twitter.status,
        n = "on" === a.services.gplus.status;
      if (f || j || n)
        return (
          0 < a.css_path.length &&
            (document.createStyleSheet
              ? document.createStyleSheet(a.css_path)
              : b("head").append(
                  '<link rel="stylesheet" type="text/css" href="' +
                    a.css_path +
                    '" />'
                )),
          this.each(function() {
            b(this).prepend('<ul class="social_share_privacy_area"></ul>');
            var d = b(".social_share_privacy_area", this),
              c = a.uri;
            "function" === typeof c && (c = c(d));
            if (f) {
              var g = encodeURIComponent(
                  c + a.services.facebook.referrer_track
                ),
                q =
                  '<iframe src="http://www.facebook.com/plugins/like.php?locale=' +
                  a.services.facebook.language +
                  "&amp;href=" +
                  g +
                  "&amp;send=false&amp;layout=button_count&amp;width=120&amp;show_faces=false&amp;action=" +
                  a.services.facebook.action +
                  '&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:145px; height:21px;" allowTransparency="true"></iframe>',
                t =
                  '<img src="' +
                  a.services.facebook.dummy_img +
                  '" alt="Facebook &quot;Like&quot;-Dummy" class="fb_like_privacy_dummy" />';
              d.append(
                '<li class="facebook help_info"><span class="info">' +
                  a.services.facebook.txt_info +
                  '</span><span class="switch off">' +
                  a.services.facebook.txt_fb_off +
                  '</span><div class="fb_like dummy_btn">' +
                  t +
                  "</div></li>"
              );
              var k = b("li.facebook", d);
              b(
                "li.facebook div.fb_like img.fb_like_privacy_dummy,li.facebook span.switch",
                d
              ).live("click", function() {
                k.find("span.switch").hasClass("off")
                  ? (k.addClass("info_off"),
                    k
                      .find("span.switch")
                      .addClass("on")
                      .removeClass("off")
                      .html(a.services.facebook.txt_fb_on),
                    k.find("img.fb_like_privacy_dummy").replaceWith(q))
                  : (k.removeClass("info_off"),
                    k
                      .find("span.switch")
                      .addClass("off")
                      .removeClass("on")
                      .html(a.services.facebook.txt_fb_off),
                    k.find(".fb_like").html(t));
              });
            }
            if (j) {
              g = a.services.twitter.tweet_text;
              "function" === typeof g && (g = g());
              var g = x(g, "120"),
                o = encodeURIComponent(c + a.services.twitter.referrer_track),
                e = encodeURIComponent(c),
                r =
                  '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?url=' +
                  o +
                  "&amp;counturl=" +
                  e +
                  "&amp;text=" +
                  g +
                  "&amp;count=horizontal&amp;lang=" +
                  a.services.twitter.language +
                  '" style="width:130px; height:25px;"></iframe>',
                u =
                  '<img src="' +
                  a.services.twitter.dummy_img +
                  '" alt="&quot;Tweet this&quot;-Dummy" class="tweet_this_dummy" />';
              d.append(
                '<li class="twitter help_info"><span class="info">' +
                  a.services.twitter.txt_info +
                  '</span><span class="switch off">' +
                  a.services.twitter.txt_twitter_off +
                  '</span><div class="tweet dummy_btn">' +
                  u +
                  "</div></li>"
              );
              var l = b("li.twitter", d);
              b(
                "li.twitter div.tweet img,li.twitter span.switch",
                d
              ).live("click", function() {
                l.find("span.switch").hasClass("off")
                  ? (l.addClass("info_off"),
                    l
                      .find("span.switch")
                      .addClass("on")
                      .removeClass("off")
                      .html(a.services.twitter.txt_twitter_on),
                    l.find("img.tweet_this_dummy").replaceWith(r))
                  : (l.removeClass("info_off"),
                    l
                      .find("span.switch")
                      .addClass("off")
                      .removeClass("on")
                      .html(a.services.twitter.txt_twitter_off),
                    l.find(".tweet").html(u));
              });
            }
            if (n) {
              var s =
                  '<div class="g-plusone" data-size="medium" data-href="' +
                  (c + a.services.gplus.referrer_track) +
                  '"></div><script type="text/javascript">window.___gcfg = {lang: "' +
                  a.services.gplus.language +
                  '"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); </script>',
                v =
                  '<img src="' +
                  a.services.gplus.dummy_img +
                  '" alt="&quot;Google+1&quot;-Dummy" class="gplus_one_dummy" />';
              d.append(
                '<li class="gplus help_info"><span class="info">' +
                  a.services.gplus.txt_info +
                  '</span><span class="switch off">' +
                  a.services.gplus.txt_gplus_off +
                  '</span><div class="gplusone dummy_btn">' +
                  v +
                  "</div></li>"
              );
              var m = b("li.gplus", d);
              b(
                "li.gplus div.gplusone img,li.gplus span.switch",
                d
              ).live("click", function() {
                m.find("span.switch").hasClass("off")
                  ? (m.addClass("info_off"),
                    m
                      .find("span.switch")
                      .addClass("on")
                      .removeClass("off")
                      .html(a.services.gplus.txt_gplus_on),
                    m.find("img.gplus_one_dummy").replaceWith(s))
                  : (m.removeClass("info_off"),
                    m
                      .find("span.switch")
                      .addClass("off")
                      .removeClass("on")
                      .html(a.services.gplus.txt_gplus_off),
                    m.find(".gplusone").html(v));
              });
            }
            d.append(
              '<li class="settings_info"><div class="settings_info_menu off perma_option_off"><a href="' +
                a.info_link +
                '"><span class="help_info icon"><span class="info">' +
                a.txt_help +
                "</span></span></a></div></li>"
            );
            b(".help_info:not(.info_off)", d).live("mouseenter", function() {
              var a = b(this),
                c = window.setTimeout(function() {
                  b(a).addClass("display");
                }, 500);
              b(this).data("timeout_id", c);
            });
            b(".help_info", d).live("mouseleave", function() {
              var a = b(this).data("timeout_id");
              window.clearTimeout(a);
              b(this).hasClass("display") && b(this).removeClass("display");
            });
            c = "on" === a.services.facebook.perma_option;
            g = "on" === a.services.twitter.perma_option;
            o = "on" === a.services.gplus.perma_option;
            if (
              ((f && c) || (j && g) || (n && o)) &&
              (!b.browser.msie || (b.browser.msie && 7 < b.browser.version))
            ) {
              for (
                var i = document.cookie.split(";"), e = "{", p = 0;
                p < i.length;
                p += 1
              ) {
                var w = i[p].split("="),
                  e = e + ('"' + b.trim(w[0]) + '":"' + b.trim(w[1]) + '"');
                p < i.length - 1 && (e += ",");
              }
              var e = JSON.parse(e + "}"),
                h = b("li.settings_info", d);
              h.find(".settings_info_menu").removeClass("perma_option_off");
              h
                .find(".settings_info_menu")
                .append(
                  '<span class="settings">Einstellungen</span><form><fieldset><legend>' +
                    a.settings_perma +
                    "</legend></fieldset></form>"
                );
              f &&
                c &&
                ((i =
                  "perma_on" === e.socialSharePrivacy_facebook
                    ? ' checked="checked"'
                    : ""),
                h
                  .find("form fieldset")
                  .append(
                    '<input type="checkbox" name="perma_status_facebook" id="perma_status_facebook"' +
                      i +
                      ' /><label for="perma_status_facebook">' +
                      a.services.facebook.display_name +
                      "</label>"
                  ));
              j &&
                g &&
                ((i =
                  "perma_on" === e.socialSharePrivacy_twitter
                    ? ' checked="checked"'
                    : ""),
                h
                  .find("form fieldset")
                  .append(
                    '<input type="checkbox" name="perma_status_twitter" id="perma_status_twitter"' +
                      i +
                      ' /><label for="perma_status_twitter">' +
                      a.services.twitter.display_name +
                      "</label>"
                  ));
              n &&
                o &&
                ((i =
                  "perma_on" === e.socialSharePrivacy_gplus
                    ? ' checked="checked"'
                    : ""),
                h
                  .find("form fieldset")
                  .append(
                    '<input type="checkbox" name="perma_status_gplus" id="perma_status_gplus"' +
                      i +
                      ' /><label for="perma_status_gplus">' +
                      a.services.gplus.display_name +
                      "</label>"
                  ));
              h.find("span.settings").css("cursor", "pointer");
              b(h.find("span.settings"), d).live("mouseenter", function() {
                var a = window.setTimeout(function() {
                  h
                    .find(".settings_info_menu")
                    .removeClass("off")
                    .addClass("on");
                }, 500);
                b(this).data("timeout_id", a);
              });
              b(h, d).live("mouseleave", function() {
                var a = b(this).data("timeout_id");
                window.clearTimeout(a);
                h
                  .find(".settings_info_menu")
                  .removeClass("on")
                  .addClass("off");
              });
              b(h.find("fieldset input")).live("click", function(c) {
                var e = c.target.id,
                  g =
                    "socialSharePrivacy_" +
                    e.substr(e.lastIndexOf("_") + 1, e.length);
                if (b("#" + c.target.id + ":checked").length) {
                  var c = a.cookie_expires,
                    h = a.cookie_path,
                    f = a.cookie_domain,
                    i = new Date();
                  i.setTime(i.getTime() + c * 864e5);
                  document.cookie =
                    g +
                    "=perma_on; expires=" +
                    i.toUTCString() +
                    "; path=" +
                    h +
                    "; domain=" +
                    f;
                  b("form fieldset label[for=" + e + "]", d).addClass(
                    "checked"
                  );
                } else {
                  c = a.cookie_path;
                  h = a.cookie_domain;
                  f = new Date();
                  f.setTime(f.getTime() - 100);
                  document.cookie =
                    g +
                    "=perma_on; expires=" +
                    f.toUTCString() +
                    "; path=" +
                    c +
                    "; domain=" +
                    h;
                  b("form fieldset label[for=" + e + "]", d).removeClass(
                    "checked"
                  );
                }
              });
              f &&
                c &&
                "perma_on" === e.socialSharePrivacy_facebook &&
                b("li.facebook span.switch", d).click();
              j &&
                g &&
                "perma_on" === e.socialSharePrivacy_twitter &&
                b("li.twitter span.switch", d).click();
              n &&
                o &&
                "perma_on" === e.socialSharePrivacy_gplus &&
                b("li.gplus span.switch", d).click();
            }
          })
        );
    };
  })(__jQuery);

  // $.touchwipe
  (function($) {
    $.fn.touchwipe = function(settings) {
      var config = {
        min_move_x: 20,
        wipeLeft: function() {},
        wipeRight: function() {},
        preventDefaultEvents: true
      };

      if (settings) $.extend(config, settings);

      this.each(function() {
        var startX;
        var isMoving = false;

        function cancelTouch() {
          this.removeEventListener("touchmove", onTouchMove);
          startX = null;
          isMoving = false;
        }

        function onTouchMove(e) {
          if (config.preventDefaultEvents) {
            e.preventDefault();
          }
          if (isMoving) {
            var x = e.touches[0].pageX;
            var dx = startX - x;
            if (Math.abs(dx) >= config.min_move_x) {
              cancelTouch();
              if (dx > 0) {
                config.wipeLeft();
              } else {
                config.wipeRight();
              }
            }
          }
        }

        function onTouchStart(e) {
          if (e.touches.length == 1) {
            startX = e.touches[0].pageX;
            isMoving = true;
            this.addEventListener("touchmove", onTouchMove, false);
          }
        }

        this.addEventListener("touchstart", onTouchStart, false);
      });

      return this;
    };
  })(__jQuery);
  // $ timer
  __jQuery.fn.extend({
    everyTime: function(b, a, c, d, e) {
      return this.each(function() {
        __jQuery.timer.add(this, b, a, c, d, e);
      });
    },
    oneTime: function(b, a, c) {
      return this.each(function() {
        __jQuery.timer.add(this, b, a, c, 1);
      });
    },
    stopTime: function(b, a) {
      return this.each(function() {
        __jQuery.timer.remove(this, b, a);
      });
    }
  });
  __jQuery.extend({
    timer: {
      guid: 1,
      global: {},
      regex: /^([0-9]+)\s*(.*s)?$/,
      powers: { ms: 1, cs: 10, ds: 100, s: 1e3, das: 1e4, hs: 1e5, ks: 1e6 },
      timeParse: function(b) {
        if (void 0 == b || null == b) return null;
        var a = this.regex.exec(__jQuery.trim(b.toString()));
        return a[2] ? parseInt(a[1], 10) * (this.powers[a[2]] || 1) : b;
      },
      add: function(b, a, c, d, e, f) {
        var g = 0;
        __jQuery.isFunction(c) && (e || (e = d), (d = c), (c = a));
        a = __jQuery.timer.timeParse(a);
        if (!("number" != typeof a || isNaN(a) || 0 >= a)) {
          e && e.constructor != Number && ((f = !!e), (e = 0));
          e = e || 0;
          f = f || !1;
          if (!b.$timers) b.$timers = {};
          b.$timers[c] || (b.$timers[c] = {});
          d.$timerID = d.$timerID || this.guid++;
          var h = function() {
            if (!f || !this.inProgress)
              (this.inProgress = !0),
                ((++g > e && 0 !== e) || !1 === d.call(b, g)) &&
                  __jQuery.timer.remove(b, c, d),
                (this.inProgress = !1);
          };
          h.$timerID = d.$timerID;
          b.$timers[c][d.$timerID] ||
            (b.$timers[c][d.$timerID] = window.setInterval(h, a));
          this.global[c] || (this.global[c] = []);
          this.global[c].push(b);
        }
      },
      remove: function(b, a, c) {
        var d = b.$timers,
          e;
        if (d) {
          if (a) {
            if (d[a]) {
              if (c)
                c.$timerID &&
                  (window.clearInterval(d[a][c.$timerID]),
                  delete d[a][c.$timerID]);
              else
                for (c in d[a]) window.clearInterval(d[a][c]), delete d[a][c];
              for (e in d[a]) break;
              e || ((e = null), delete d[a]);
            }
          } else for (a in d) this.remove(b, a, c);
          for (e in d) break;
          if (!e) b.$timers = null;
        }
      }
    }
  });
  if (__jQuery.browser.msie)
    __jQuery(window).bind("unload", function() {
      var b = __jQuery.timer.global,
        a;
      for (a in b)
        for (var c = b[a], d = c.length; --d; ) __jQuery.timer.remove(c[d], a);
    });
  // __jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/__jQuery/easing/
  __jQuery.easing["jswing"] = __jQuery.easing["swing"];
  __jQuery.extend(__jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
      return __jQuery.easing[__jQuery.easing.def](e, t, n, r, i);
    },
    easeInQuad: function(e, t, n, r, i) {
      return r * (t /= i) * t + n;
    },
    easeOutQuad: function(e, t, n, r, i) {
      return -r * (t /= i) * (t - 2) + n;
    },
    easeInOutQuad: function(e, t, n, r, i) {
      if ((t /= i / 2) < 1) return r / 2 * t * t + n;
      return -r / 2 * (--t * (t - 2) - 1) + n;
    },
    easeInCubic: function(e, t, n, r, i) {
      return r * (t /= i) * t * t + n;
    },
    easeOutCubic: function(e, t, n, r, i) {
      return r * ((t = t / i - 1) * t * t + 1) + n;
    },
    easeInOutCubic: function(e, t, n, r, i) {
      if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
      return r / 2 * ((t -= 2) * t * t + 2) + n;
    },
    easeInQuart: function(e, t, n, r, i) {
      return r * (t /= i) * t * t * t + n;
    },
    easeOutQuart: function(e, t, n, r, i) {
      return -r * ((t = t / i - 1) * t * t * t - 1) + n;
    },
    easeInOutQuart: function(e, t, n, r, i) {
      if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
      return -r / 2 * ((t -= 2) * t * t * t - 2) + n;
    },
    easeInQuint: function(e, t, n, r, i) {
      return r * (t /= i) * t * t * t * t + n;
    },
    easeOutQuint: function(e, t, n, r, i) {
      return r * ((t = t / i - 1) * t * t * t * t + 1) + n;
    },
    easeInOutQuint: function(e, t, n, r, i) {
      if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
      return r / 2 * ((t -= 2) * t * t * t * t + 2) + n;
    },
    easeInSine: function(e, t, n, r, i) {
      return -r * Math.cos(t / i * (Math.PI / 2)) + r + n;
    },
    easeOutSine: function(e, t, n, r, i) {
      return r * Math.sin(t / i * (Math.PI / 2)) + n;
    },
    easeInOutSine: function(e, t, n, r, i) {
      return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n;
    },
    easeInExpo: function(e, t, n, r, i) {
      return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n;
    },
    easeOutExpo: function(e, t, n, r, i) {
      return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n;
    },
    easeInOutExpo: function(e, t, n, r, i) {
      if (t == 0) return n;
      if (t == i) return n + r;
      if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
      return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n;
    },
    easeInCirc: function(e, t, n, r, i) {
      return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n;
    },
    easeOutCirc: function(e, t, n, r, i) {
      return r * Math.sqrt(1 - (t = t / i - 1) * t) + n;
    },
    easeInOutCirc: function(e, t, n, r, i) {
      if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
      return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
    },
    easeInElastic: function(e, t, n, r, i) {
      var s = 1.70158;
      var o = 0;
      var u = r;
      if (t == 0) return n;
      if ((t /= i) == 1) return n + r;
      if (!o) o = i * 0.3;
      if (u < Math.abs(r)) {
        u = r;
        var s = o / 4;
      } else var s = o / (2 * Math.PI) * Math.asin(r / u);
      return (
        -(
          u *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin((t * i - s) * 2 * Math.PI / o)
        ) + n
      );
    },
    easeOutElastic: function(e, t, n, r, i) {
      var s = 1.70158;
      var o = 0;
      var u = r;
      if (t == 0) return n;
      if ((t /= i) == 1) return n + r;
      if (!o) o = i * 0.3;
      if (u < Math.abs(r)) {
        u = r;
        var s = o / 4;
      } else var s = o / (2 * Math.PI) * Math.asin(r / u);
      return (
        u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) +
        r +
        n
      );
    },
    easeInOutElastic: function(e, t, n, r, i) {
      var s = 1.70158;
      var o = 0;
      var u = r;
      if (t == 0) return n;
      if ((t /= i / 2) == 2) return n + r;
      if (!o) o = i * 0.3 * 1.5;
      if (u < Math.abs(r)) {
        u = r;
        var s = o / 4;
      } else var s = o / (2 * Math.PI) * Math.asin(r / u);
      if (t < 1)
        return (
          -0.5 *
            u *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin((t * i - s) * 2 * Math.PI / o) +
          n
        );
      return (
        u *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin((t * i - s) * 2 * Math.PI / o) *
          0.5 +
        r +
        n
      );
    },
    easeInBack: function(e, t, n, r, i, s) {
      if (s == undefined) s = 1.70158;
      return r * (t /= i) * t * ((s + 1) * t - s) + n;
    },
    easeOutBack: function(e, t, n, r, i, s) {
      if (s == undefined) s = 1.70158;
      return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n;
    },
    easeInOutBack: function(e, t, n, r, i, s) {
      if (s == undefined) s = 1.70158;
      if ((t /= i / 2) < 1)
        return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
      return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n;
    },
    easeInBounce: function(e, t, n, r, i) {
      return r - __jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n;
    },
    easeOutBounce: function(e, t, n, r, i) {
      if ((t /= i) < 1 / 2.75) {
        return r * 7.5625 * t * t + n;
      } else if (t < 2 / 2.75) {
        return r * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + n;
      } else if (t < 2.5 / 2.75) {
        return r * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + n;
      } else {
        return r * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + n;
      }
    },
    easeInOutBounce: function(e, t, n, r, i) {
      if (t < i / 2)
        return __jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * 0.5 + n;
      return (
        __jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * 0.5 + r * 0.5 + n
      );
    }
  });
})(window, __jQuery);

(function(window, $) {
  // singleton
  window.TAB = window.TAB || {};
  // __jQuery-obj storing
  TAB.$ = TAB.$ || {};

  TAB.$.window = TAB.$.window || $(window);
  TAB.$.document = TAB.$.document || $(document);
  TAB.$.html = TAB.$.html || $("html");

  // globals
  TAB.href = String(location.href);
  TAB.path = String(location.pathname);
  TAB.isLive = !!(TAB.href.indexOf("targobank.de") > -1);
  TAB.useHTTPS = !!("https:" === location.protocol);
  TAB.oldIE = false;
  TAB.isTouch = "ontouchstart" in window;
  TAB.isiPad = !!navigator.userAgent.match(/iPad/i);
  TAB.isiPhone = !!navigator.userAgent.match(/iPhone/i);
  TAB.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
  TAB.viewPortWidth = TAB.$.window.width();
  TAB.isMobile = TAB.isiPad || TAB.isiPhone || TAB.isAndroid ? true : false;
  TAB.debug = true;

  TAB.autoloads = TAB.autoloads || [];
  TAB.lazyAutoloads = TAB.lazyAutoloads || [];
  TAB.Extension = TAB.Extension || {};

  // robust loggin
  window.log = TAB.log = function() {
    try {
      !TAB.debug && console.log.apply(window, arguments);
    } catch (e) {}
  };

  // layout-detection
  TAB.templateVersion = 1;

  if (TAB.$.html.attr("id") === "targobank") {
    TAB.templateVersion = 2;
  }

  if (window.name && String(window.name).indexOf("tab_lb_iframe") > -1) {
    TAB.$.html.addClass("lightbox");
  }

  /** JS UA Sniffing **/
  TAB.userAgentClass = function() {
    if (!$.browser) return;

    var clientClass = "";

    $.each($.browser, function(i, e) {
      if (i != "version" && e === true) {
        TAB.$.html.addClass("ua-" + i);
        clientClass = i;
      }
    });

    var clientVersion = $.browser.safari
      ? $.browser.version.charAt(0)
      : parseInt($.browser.version);

    if (clientClass != "" && clientVersion != "") {
      TAB.$.html.addClass("ua-" + clientClass + "-" + String(clientVersion));
    }

    if ($.browser.msie && clientVersion < 9) {
      TAB.oldIE = true;
    }
  };

  /** preloader **/
  TAB.preloader = function(src, callback) {
    if (src) {
      try {
        var tmpImg = new Image();
        if (typeof callback === "function") {
          tmpImg.bindabort = tmpImg.binderror = tmpImg.bindload = callback;
        }
        tmpImg.src = src;
      } catch (e) {
        if (typeof callback === "function") {
          callback();
        }
      }
    }
  };

  /** CSS ROUTER **/
  TAB.cssRouter = function() {
    var paths = window.cssRouterPath
      ? window.cssRouterPath.split("/")
      : TAB.path.split("/");

    $.each(paths, function(i, e) {
      if (paths.length > 2 && paths[i + 1] !== undefined) {
        TAB.$.html.addClass(e);
      }
    });
  };

  TAB.Flyout = (function() {
    var ready, $activeNavElement, isOpen, pathFlyout;
    ready = false;
    isOpen = false;

    var bindDomEvents = function() {
      $("#nav .hide-on-nav").remove();

      $("#nav .ym-wbox > ul > li > .e_smenu > ul > li > a").removeAttr("href");

      $("#nav .ym-wbox > ul > li > .e_smenu > ul").each(function() {
        $(">li:last", $(this)).addClass("last");
      });

      $("#nav .ym-wbox > ul").bind("mouseleave", function() {
        $(this)
          .find(">li")
          .removeClass("locked");
      });

      $("#nav .ym-wbox > ul > li > a").bind("touchstart", function(event) {
        var $this = $(this);

        if ($this.hasClass("touch-open")) {
        } else {
          event.preventDefault();

          $("#nav .ym-wbox > ul > li > a").removeClass("touch-open");
          $this.addClass("touch-open");

          $("#nav .ym-wbox > ul > li > .e_smenu").hide();
          $this.next(".e_smenu").show();
        }
      });

      $(
        "#nav .ym-wbox > ul > li"
      ).bind("mouseenter focus touchstart", function() {
        var $this = $(this);

        if (!$this.hasClass("custom-width")) {
          $(".e_smenu2 a", $this).each(function(i, e) {
            setTimeout(function() {
              $(e).width(
                $(e)
                  .find("span")
                  .width()
              );
            }, $.browser.msie ? 50 : 0);
          });
          $this.addClass("custom-width");
        }

        $this.removeClass("locked");
        $this.nextAll().addClass("locked");
        $this.prevAll().addClass("locked");
      });

      $("#nav .two-column li:even").addClass("even");
      $("#nav .two-column li:odd").addClass("odd");

      !TAB.isTouch &&
        $("#nav .e_menuDeroulant > .e_smenu").append(
          '<div class="flyout-arrow"></div>'
        );

      $("#nav .e_smenu2 a").each(function(i, e) {
        var $e = $(e);
        $e.html("<span>" + $e.html() + "</span>");
      });
    };

    return {
      isReady: function() {
        return ready;
      },
      init: function() {
        if (ready) {
          return null;
        }

        bindDomEvents();

        ready = true;

        log("Flyout");
      }
    };
  })();

  TAB.DirectMenu = (function() {
    var ready, markup, $directMenu;
    ready = false;

    markup = {
      menu: [
        '<div id="tab-directmenu" class="v2">',
        '<a href="/de/service/kontakt.html" data-lb-width="700" data-lb-height="400" class="kontakt" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'Kontakt\')"></a>',
        '<a href="/de/service/popup_service_telefon.html?addEvent=HP_directmenue_telefon" data-lb-width="620" data-lb-height="500" class="telefon tab-lb" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'Telefon-Kontakt\')"></a>',
        '<a href="/de/service/suchen-und-finden/filialsuche.aspx?addEvent=HP_directmenue_filialsuche" data-lb-width="800" data-lb-height="500" class="filiale tab-lb" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'Filialsuche\')"></a>',
        '<a href="/de/service/popup_service_mobile-kundenberatung.html?addEvent=HP_directmenue_msf" data-lb-width="700" data-lb-height="400" class="berater tab-lb" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'Beratung zu Hause\')"></a>',
        '<a href="/de/service/kontakt/kontaktformular.html?addEvent=HP_directmenue_kontaktformular" data-lb-width="700" data-lb-height="625" class="email tab-lb" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'E-Mail-Kontakt\')"></a>',
        //'<a href="/de/service/de-mail.html" class="de-email" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'De-Mail\')"></a>',
        '<a href="/termin/index.html" data-lb-width="660" data-lb-height="940" class="online-termin tab" onclick="trkEVT(\'Direktmenue\', \'Klick\', \'Online-Terminvereinbarung\')"></a>',
        "</div>"
      ]
    };

    if (DEV) {
      // just for agency usage
      markup = {
        menu: [
          '<div id="tab-directmenu" class="v2">',
          '<a href="/de/service/kontakt.html" data-lb-width="700" data-lb-height="400" class="kontakt"></a>',
          '<a href="http://tab-p.arsmedium.de/dev/responsive-new/lightbox-telefon.html?addEvent=HP_directmenue_telefon" data-lb-width="620" data-lb-height="600" class="telefon tab-lb"></a>',
          '<a href="/de/service/suchen-und-finden/filialsuche.aspx?addEvent=HP_directmenue_filialsuche" data-lb-width="500" data-lb-height="500" class="filiale tab-lb"></a>',
          '<a href="/de/service/popup_service_mobile-kundenberatung.html?addEvent=HP_directmenue_msf" data-lb-width="700" data-lb-height="400" class="berater tab-lb"></a>',
          '<a href="/de/service/kontakt/kontaktformular.html?addEvent=HP_directmenue_kontaktformular" data-lb-width="700" data-lb-height="625" class="email tab-lb"></a>',
          //'<a href="/de/de-mail/" class="de-email"></a>',
          '<a href="#link-terminanfrange" data-lb-width="770" data-lb-height="880" class="online-termin tab-lb"></a>',
          "</div>"
        ]
      };
    }

    var bindDomEvents = function() {
      if (typeof window.tab_directmenu_nr === "string") {
        markup.menu[2] =
          '<a href="/de/service/popup_service_telefon.html?addEvent=HP_directmenue_telefon&number=' +
          tab_directmenu_nr +
          '" data-lb-width="620" data-lb-height="620" class="telefon tab-lb"></a>';
        if (DEV) {
          // just for agency usage
          markup.menu[2] =
            '<a href="http://tab-p.arsmedium.de/dev/responsive-new/lightbox-telefon.html?addEvent=HP_directmenue_telefon&number=' +
            tab_directmenu_nr +
            '" data-lb-width="620" data-lb-height="620" class="telefon tab-lb"></a>';
        }
      }

      TAB.$.root.append(markup.menu.join(""));

      $directMenu = $("#tab-directmenu");

      if (window.tab_directmenu_top && !isNaN(window.tab_directmenu_top)) {
        $directMenu.css("top", tab_directmenu_top);
      }

      $directMenu.data("top", parseInt($directMenu.css("top")));

      if (true || TAB.isTouch) {
        $directMenu.append('<a href="" class="close-menu"></a>');

        $directMenu
          .bind("touchstart", function() {
            var $this = $(this);

            if ($this.hasClass("open")) {
              //$this.stop(true).animate({width:'35px'}).removeClass('open');
              //return false;
            } else {
              $this
                .stop(true)
                .animate({ width: "147px" })
                .addClass("open");
              return false;
            }
          })
          .hover(
            function() {
              var $this = $(this);
              $this.addClass("hover");
              if ($this.hasClass("module-open")) return;
              $this.stop(true).animate({ width: "147px" });
            },
            function() {
              var $this = $(this);
              $this.removeClass("hover");
              if ($this.hasClass("module-open")) return;
              $this
                .stop(true)
                .animate({ width: "35px" })
                .removeClass("open");
            }
          )
          .find("a.close-menu")
          .bind("touchstart", function() {
            $directMenu
              .stop(true)
              .animate({ width: "35px" })
              .removeClass("open");
            return false;
          });
      } else {
        $directMenu.hover(
          function() {
            var $this = $(this);
            $this.addClass("hover");
            if ($this.hasClass("module-open")) return;
            $this.stop(true).animate({ width: "147px" });
          },
          function() {
            var $this = $(this);
            $this.removeClass("hover");
            if ($this.hasClass("module-open")) return;
            $this.stop(true).animate({ width: "35px" });
          }
        );
      }
    };

    return {
      isReady: function() {
        return ready;
      },
      init: function() {
        if (ready) {
          return null;
        }

        bindDomEvents();

        ready = true;

        if (typeof tab_directmenu_timings === "object" && !TAB.isTouch) {
          TAB.lazyAutoloads.push(function() {
            var show_directmenu = function() {
              window.setTimeout(function() {
                $directMenu
                  .addClass("hover")
                  .stop(true)
                  .animate(
                    { width: "147px" },
                    tab_directmenu_timings.animation_time,
                    function() {
                      window.setTimeout(function() {
                        $directMenu
                          .removeClass("hover")
                          .stop(true)
                          .animate(
                            { width: "35px" },
                            tab_directmenu_timings.animation_time
                          );
                      }, tab_directmenu_timings.delay_out);
                    }
                  );
              }, tab_directmenu_timings.delay_in);
            };

            if ($("#hero-slider").hasClass("homepage")) {
              show_directmenu();
            } else {
              if ($.cookie("directMenu") !== "shown") {
                $.cookie("directMenu", "shown", { expires: 365, path: "/" });
                show_directmenu();
              }
            }
          });
        }

        log("DirectMenu");
      }
    };
  })();

  TAB.Lightbox = (function() {
    var ready,
      markup,
      isOpen,
      overlayAppended,
      offsetTop,
      defaults,
      isCloseable;
    ready = false;
    isOpen = false;
    overlayAppended = false;
    offsetTop = 150;
    defaults = {
      width: 700,
      height: 400
    };
    isCloseable = true;

    markup = {
      overlay: ['<div id="tab_lb_overlay"></div>'],
      box: [
        '<div id="tab_lb_box">',
        '<div id="tab_lb_close"></div>',
        '<div id="tab_lb_content">',
        "</div>",
        "</div>"
      ]
    };

    var setOverlayDimensions = function() {
      if (overlayAppended) {
        $("#tab_lb_overlay").height(TAB.$.root.outerHeight() - 95);
      }
    };

    var open = function(target, width, height, player, closeable, callback) {
      if (!target) return;

      if (typeof closeable !== "boolean") {
        closeable = true;
      }
      if (typeof callback !== "function") {
        callback = false;
      }

      isCloseable = closeable;
      player = player || "detect";

      var iFrame = false;

      if (player === "detect") {
        if (
          target.indexOf("http") === 0 ||
          target.indexOf("/") === 0 ||
          target.indexOf("./") === 0
        ) {
          iFrame = true;
        } else {
          var $target = $(target);
          if ($target.length === 0) {
            open(target, width, height, "iframe", closeable);
          }
        }
      } else {
        if (player === "iframe") {
          iFrame = true;
        }
      }

      showOverlay();

      $("#tab_lb_box").remove();

      var boxMarkup = markup.box.join("");

      if (!isCloseable) {
        boxMarkup = boxMarkup.replace('<div id="tab_lb_close"></div>', "");
      }

      TAB.$.root.append(boxMarkup);

      if (iFrame) {
        $("#tab_lb_content")
          .removeClass("inline")
          .addClass("iframe")
          .html(
            '<iframe frameborder="0" src="' +
              target +
              '" id="tab_lb_iframe" style="border:0;width:100%;height:400px;" name="tab_lb_iframe" scrolling="auto"></iframe>'
          );
      } else {
        $("#tab_lb_content")
          .removeClass("iframe")
          .addClass("inline")
          .html($target.html());
      }

      width = width || defaults.width;

      $("#tab_lb_box")
        .width(width)
        .css("margin-left", "-" + (width + 16) / 2 + "px");

      if (height) {
        if (iFrame) {
          $("#tab_lb_content iframe").css({
            height: height,
            "min-height": "auto"
          });
        } else {
          $("#tab_lb_content").css({ height: height, "min-height": "auto" });
        }
      }

      if (callback) {
        callback();
      }
      $("#tab_lb_box")
        .css({ top: TAB.$.window.scrollTop() + offsetTop })
        .fadeIn();

      isOpen = true;
    };

    var showOverlay = function() {
      if (!overlayAppended) {
        TAB.$.root.append(markup.overlay.join(""));
        overlayAppended = true;
        setOverlayDimensions();
      }
      $("#tab_lb_overlay").fadeIn();
    };

    var close = function() {
      if (isCloseable) {
        $("#tab_lb_box").remove();
        $("#tab_lb_overlay").fadeOut();
        isOpen = false;
      }
    };

    var bindDomEvents = function() {
      TAB.$.document.keydown(function(e) {
        if (e.keyCode == 27) {
          isOpen && close();
        }
      });
      TAB.$.window.resize(function() {
        setOverlayDimensions();
      });

      $(".tab-lb").live("click", function() {
        var width = $(this).attr("data-lb-width"),
          height = $(this).attr("data-lb-height");

        if (!width) {
          width = false;
        } else {
          width = parseInt(width);
        }

        if (!height) {
          height = false;
        } else {
          height = parseInt(height);
        }

        open($(this).attr("href"), width, height);
        return false;
      });
      $("#tab_lb_close,#tab_lb_overlay").live("click", function() {
        close();
      });
    };

    return {
      isReady: function() {
        return ready;
      },
      init: function() {
        if (ready) return;

        bindDomEvents();

        ready = true;

        log("Lightbox");
      },
      close: function(forceClose) {
        if (typeof forceClose === "boolean" && forceClose === true) {
          isCloseable = true;
        }
        close();
      },
      open: function(target, width, height, player, closeable, callback) {
        target = target || false;
        width = width || false;
        height = height || false;
        player = player || "detect";
        callback = callback || false;
        open(target, width, height, player, closeable, callback);
      }
    };
  })();

  TAB.lightbox = TAB.Lightbox;

  TAB.Accordion = (function() {
    var open = function(targetId) {
      if (typeof targetId !== "string") {
        return;
      }
      if (typeof arguments[1] === "undefined") {
        return;
      }

      var $parent = $("#" + targetId),
        $target;

      if (!$parent.length) {
        return;
      }

      for (var i = 1, l = arguments.length; i < l; i++) {
        if (typeof arguments[i] === "undefined" || isNaN(arguments[i])) break;

        var index = arguments[i];

        $target = $parent.find(
          ">.tab-accordion-box>.tab-accordion-box-title:eq(" + index + "):first"
        );

        if (!$target.parent().hasClass("open")) {
          $target.click();
        }

        $parent = $target.next().find("div:first");

        if (
          !$parent.length ||
          $parent.attr("class").indexOf("tab-accordion") === -1
        )
          break;
      }
    };

    return {
      open: function() {
        //return open(targetId);
        return open.apply(this, arguments);
      },

      init: function() {
        // tab-accordion
        $(".tab-accordion-box-title:not(.tab-accordion-ready)")
          .bind("click keypress", function(event, data) {
            if (event.keyCode && event.keyCode != "13") {
              return;
            }

            if ($(">a", $(this)).length) {
              var $link = $(">a", $(this));

              if ($link.attr("target") === "_blank") {
                window.open($link.attr("href"));
              } else {
                location.href = $link.attr("href");
              }

              return false;
            }

            var animationTime = "normal";

            if (data && typeof data.animationTime === "number") {
              animationTime = data.animationTime;
            }

            var $this = $(this),
              $next = $this.next(),
              $parent = $this.parent();

            $parent.siblings(".open").each(function(i, e) {
              var $e = $(e);
              $e.find("> .tab-accordion-box-content").slideUp(animationTime);
              $e.removeClass("open");
            });

            if ($parent.hasClass("open")) {
              $next.slideUp(animationTime);
              $parent.removeClass("open");
            } else {
              $next.slideDown(animationTime);
              $parent.addClass("open");
            }

            return false;
          })
          .addClass("tab-accordion-ready")
          .attr("tabindex", "0");

        var deepLink_content = gup("accordian-content"),
          deepLink_content_container = ".tab-accordion-content:first";

        var deepLink_modul = gup("accordian-modul"),
          deepLink_modul_container = ".tab-accordion-modul:first";

        if (deepLink_modul.indexOf("|") > -1) {
          var _tmp = deepLink_modul.split("|");
          deepLink_modul_container = "#" + _tmp[0];
          deepLink_modul = _tmp[1];
        }

        if (deepLink_content.indexOf("|") > -1) {
          var _tmp = deepLink_content.split("|");
          deepLink_content_container = "#" + _tmp[0];
          deepLink_content = _tmp[1];
        }

        if (deepLink_content != "" && !isNaN(deepLink_content)) {
          deepLink_content--;
          $(
            deepLink_content_container +
              " > .tab-accordion-box:eq(" +
              deepLink_content +
              ") > .tab-accordion-box-title"
          ).trigger("click", { animationTime: 0 });
        } else {
          var deepLink_explist = gup("explist");

          if (
            deepLink_explist != "" &&
            !isNaN(deepLink_explist) &&
            !$("ul.explist").length
          ) {
            deepLink_explist--;
            $(
              deepLink_content_container +
                " > .tab-accordion-box:eq(" +
                deepLink_explist +
                ") > .tab-accordion-box-title"
            ).trigger("click", { animationTime: 0 });
          }
        }

        if (deepLink_modul != "" && !isNaN(deepLink_modul)) {
          deepLink_modul--;
          setTimeout(function() {
            $(
              deepLink_modul_container +
                " > .tab-accordion-box:eq(" +
                deepLink_modul +
                ") > .tab-accordion-box-title"
            ).trigger("click", { animationTime: 0 });
          }, 1000);
        }

        if (gup("open-accordian")) {
          open.apply(window, gup("open-accordian").split("|"));
        }

        log("Accordion");
      }
    };
  })();

  TAB.PageTabs = (function() {
    var ready = false;

    var openPageTab = function(target) {
      if (typeof target === undefined) {
        return;
      }

      if (isNaN(target)) {
        var $target = $(target);
      } else {
        var $target = $(".tab-pagetabs-box:eq(" + target + ")");
      }

      if ($target.length) {
        $("#page-tabs ul a").removeClass("active theme-border theme-color");
        $(
          "#page-tabs ul a:eq(" + $target.attr("data-pagetab-index") + ")"
        ).addClass("active theme-border theme-color");
        $(".tab-pagetabs-box").removeClass("active");
        $target.addClass("active");
      }
    };

    return {
      isReady: function() {
        return ready;
      },
      init: function() {
        if (ready) {
          return;
        }

        $(".tab-pagetabs-box").each(function(i, e) {
          var $this = $(e);
          $this.attr("data-pagetab-index", i);
        });

        // tab-pages
        $("#page-tabs ul a").bind("click", function() {
          var $this = $(this);
          if ($this.attr("href").indexOf("#") === 0) {
            openPageTab($this.attr("href"));
            return false;
          }
        });

        // tab-pages
        $("a.page-tab-open").bind("click", function() {
          openPageTab($(this).attr("href"));
          return false;
        });

        if (!$("#page-tabs > h2").length) {
          $("#page-tabs").addClass("no-headline");
        }

        var deepLink = gup("page-tab");

        if (deepLink != "" && !isNaN(deepLink)) {
          deepLink--;
          openPageTab(deepLink);
        } else {
          if (!$(".tab-pagetabs-box.active").length) {
            openPageTab(0);
          } else {
            var deepLink_index = $(".tab-pagetabs-box.active").attr(
              "data-pagetab-index"
            );
            if (deepLink_index) {
              openPageTab(parseInt(deepLink_index));
            }
          }
        }

        var deepLinkFlap = gup("flap");

        if (deepLinkFlap != "" && !isNaN(deepLinkFlap)) {
          deepLinkFlap--;
          openPageTab(deepLinkFlap);
        } else {
          if (!$(".tab-pagetabs-box.active").length) {
            openPageTab(0);
          } else {
            var deepLinkFlap_index = $(".tab-pagetabs-box.active").attr(
              "data-pagetab-index"
            );
            if (deepLinkFlap_index) {
              openPageTab(parseInt(deepLinkFlap_index));
            }
          }
        }

        ready = true;

        log("PageTabs");
      }
    };
  })();

  TAB.ContentTabs = (function() {
    return {
      init: function() {
        var deepLink = gup("content-tab"),
          _tmp = deepLink.split("|");

        if (_tmp.length == 2) {
          if (deepLink == "" || isNaN(deepLink)) {
            deepLink = false;
          } else {
            deepLink--;
          }
        } else {
          deepLink = false;
        }

        $(".tab-content-tabs:not(.tab-tabs-ready)")
          .each(function(i, e) {
            var $tabs = $(e),
              dontActiveOnStart = $tabs.hasClass("no-active");

            $tabs.prepend(
              '<div class="tab-content-tab-titles ym-clearfix"></div>'
            );

            if (i > 0) {
              deepLink = false;
            } else {
              if (
                parseInt(deepLink) >= $tabs.find(">.tab-content-tab").length
              ) {
                deepLink = false;
              }
            }

            $tabs.find(">.tab-content-tab").each(function(x, e) {
              var $tab = $(e),
                $title = $tab.find(">.tab-content-tab-title");

              if (!deepLink && !dontActiveOnStart) {
                if (x === 0 || !$title.length) {
                  $tab.addClass("active");
                }
              }

              $tabs
                .find(".tab-content-tab-titles")
                .append(
                  '<div class="' +
                    $title.attr("class") +
                    '"><div class="tab-title-border">' +
                    $title.html() +
                    "</div></div>"
                );
              $title.remove();
            });

            if (deepLink) {
              $tabs
                .find(">.tab-content-tab:eq(" + deepLink + ")")
                .addClass("active");
              $tabs
                .find(">.tab-content-tab-titles > div:eq(" + deepLink + ")")
                .addClass("active");
            } else {
              if (!dontActiveOnStart) {
                $tabs
                  .find(">.tab-content-tab-titles > div:first")
                  .addClass("active");
              }
            }

            $(".tab-content-tab-title", $tabs)
              .bind("click keypress", function(event) {
                if (event.keyCode && event.keyCode != "13") {
                  return;
                }

                if ($("a", $(this)).length) {
                  var $link = $("a", $(this));

                  if ($link.attr("target") === "_blank") {
                    window.open($link.attr("href"));
                  } else {
                    location.href = $link.attr("href");
                  }

                  return false;
                }

                var $this = $(this),
                  $parent = $this.closest(".tab-content-tabs"),
                  index = $this.prevAll().length;

                $parent.removeClass("no-active");

                if ($this.hasClass("active")) {
                  return false;
                }

                $parent
                  .find(">.tab-content-tab-titles>.tab-content-tab-title")
                  .removeClass("active");
                $this.addClass("active");

                $parent.find(">.tab-content-tab").removeClass("active");
                $parent
                  .find(">.tab-content-tab:eq(" + index + ")")
                  .addClass("active");

                return false;
              })
              .attr("tabindex", "0");
          })
          .addClass("tab-tabs-ready");

        if (_tmp.length == 2) {
          $(
            ".tab-content-tab-title:eq(" + (_tmp[1] - 1) + ")",
            "#" + _tmp[0]
          ).click();
        }

        log("ContentTabs");
      }
    };
  })();

  TAB.Extension.Ticker = function() {
    TAB.$.startTicker = $("#start_ticker");

    this.intervalTime = 5000;
    this.isFirstTime = true;
    this.doTimer = true;
    this.index = -1;
    this.timer = null;
    this.maxItem = TAB.$.startTicker.find(".entry").length - 1;
    this.bindEvents();

    this.showNextItem();
    this.startTimer();
  };

  /** Extension: StartTicker **/

  TAB.Extension.Ticker.prototype = {
    bindEvents: function() {
      var that = this;

      $(".entry_wrapper", TAB.$.startTicker)
        .click(function() {
          if (
            $(this)
              .find(".active > a")
              .attr("target")
              .indexOf("_blank") > -1
          ) {
            window.open(
              $(this)
                .find(".active > a")
                .attr("href")
            );
          } else {
            window.location.href = $(this)
              .find(".active > a")
              .attr("href");
          }
          return false;
        })
        .hover(
          function() {
            that.stopTimer();
          },
          function() {
            that.startTimer();
          }
        );
    },

    startTimer: function() {
      var that = this;
      TAB.$.startTicker.everyTime(this.intervalTime, "ticker", function() {
        that.showNextItem();
      });
    },
    stopTimer: function() {
      TAB.$.startTicker.stopTime("ticker");
    },

    showNextItem: function() {
      this.index++;
      if (this.index > this.maxItem) this.index = 0;

      var that = this;

      function callback() {
        TAB.$.startTicker.find(".entry").removeClass("active");
        if (!TAB.oldIE) {
          TAB.$.startTicker
            .find(".entry:eq(" + that.index + ")")
            .addClass("active")
            .fadeIn(1000, function() {});
        } else {
          TAB.$.startTicker
            .find(".entry:eq(" + that.index + ")")
            .addClass("active")
            .show();
        }
      }

      if (this.isFirstTime) {
        this.isFirstTime = false;
        callback();
      } else {
        if (!TAB.oldIE) {
          TAB.$.startTicker.find(".entry:visible").fadeOut(1000, function() {
            callback();
          });
        } else {
          TAB.$.startTicker.find(".entry:visible").hide(1, function() {
            callback();
          });
        }
      }
    }
  };

  /** Extension: HeroSlider**/

  // Constructor
  TAB.Extension.HeroSlider = function() {
    if (!$("#hero-teaser").length || $("#hero-slider").length) {
      return;
    }

    var self = this;

    TAB.$.heroSliderData = $("#hero-slider-datamap");

    if (!TAB.$.heroSliderData.length) {
      TAB.$.html.addClass("no-slides");
      $("#hero-teaser").html('<div class="slider-fallback-img"></div>');
      return;
    }

    $("#hero-teaser").append('<div id="hero-slider"></div>');
    $("#hero-slider").append(
      '<div id="hero-slider_text_wrapper"><div class="hero-slider_text" id="hero-slider_text"></div></div><div id="hero-slider_nav"></div>'
    );

    // Define needed Markup (private)
    this.markup = {
      navArrows: [
        '<div class="hero-slider_ctrl" id="hero-slider_left"></div>',
        '<div class="hero-slider_ctrl" id="hero-slider_right"></div>'
      ],
      fullpageImage: [
        '<div id="hero-slider_img"><div class="loader"></div><div class="img bg"></div><div class="img"></div><div class="img bg next"></div><div class="img next"></div></div>'
      ],
      sliderSubNav: [
        '<div class="hero-slider_nav_item">',
        '<div class="nav_tooltip">',
        '<div class="tooltip_arrow"></div>',
        "</div>",
        "</div>"
      ],
      targoCard: [
        '<div id="start_mood_text"></div>',
        '<div id="hero-slider_text-box">',
        '<div id="hero-slider_text_content">',
        "</div>",
        "</div>"
      ]
    };

    this.intervalTime = 6000;

    this.single = !!(TAB.$.heroSliderData.find(">li").length === 1);

    // DOM-Storing & adding Markup to DOM
    TAB.$.heroSlider = $("#hero-slider");
    TAB.$.heroSliderNav = $("#hero-slider_nav");
    TAB.$.heroSliderData = $("#hero-slider-datamap");
    TAB.$.body = TAB.$.body || $("body");

    TAB.$.root.append(this.markup.fullpageImage.join(""));

    if (!this.single) {
      TAB.$.heroSlider.append(this.markup.navArrows.join(""));
    }

    TAB.$.heroSliderImg = $("#hero-slider_img");
    TAB.$.heroSliderText = $("#hero-slider_text");

    TAB.$.heroSliderText.append(this.markup.targoCard.join(""));

    TAB.$.heroSliderTargoCardContent = $("#hero-slider_text_content");

    if (!this.single) {
      this.buildSubNav();
    }

    this.bindEvents();
    this.buildCounter = 0;
    this.buildSlide(0);
    this.inImageAnimation = false;
    this.doAnimation = true;

    if (TAB.$.heroSliderData.hasClass("homepage")) {
      TAB.$.html.addClass("homepage");
    }

    TAB.$.heroSlider.attr("class", TAB.$.heroSliderData.attr("class"));

    TAB.$.heroSlider.addClass("ready").removeClass("hidden");

    this.tooltipTimer = null;

    if (TAB.$.heroSliderData.hasClass("show-tooltips-on-start")) {
      var timer = 1000;

      var $sliderNavDots = $(">div>.nav_tooltip", TAB.$.heroSliderNav);

      $sliderNavDots.each(function(i, e) {
        var $e = $(e).parent();

        setTimeout(function() {
          $e.trigger("mouseenter", { forceExecute: true });
          setTimeout(function() {
            $e.trigger("mouseleave", { forceExecute: true });

            if (i == $sliderNavDots.length - 1) {
              TAB.$.heroSliderData.removeClass("show-tooltips-on-start");
              self.startTimer();
            }
          }, 800);
        }, timer);

        timer = timer + 1500;
      });
    }
  };

  TAB.Extension.HeroSlider.prototype = {
    startTimer: function() {
      if (this.single || this.intervalTime === 0) {
        return;
      }

      var self = this;

      TAB.$.heroSlider
        .stopTime()
        .everyTime(this.intervalTime, "move", function() {
          if (!$("#tab_lb_overlay").is(":visible")) {
            if (!TAB.$.heroSliderData.hasClass("show-tooltips-on-start")) {
              self.buildSlide(self.getNextSlideNr("right"));
            }
          }
        });
    },
    stopTimer: function() {
      TAB.$.heroSlider.stopTime();
    },

    buildSubNav: function() {
      var slideCounter = 0;

      var that = this;

      TAB.$.heroSliderData.find("> li").each(function(i, e) {
        var $this = $(e),
          hasTooltipData = false;

        if ($this.find(".data-tooltip").length) {
          hasTooltipData = true;
        }

        if (!that.single) {
          TAB.$.heroSliderNav.append(that.markup.sliderSubNav.join(""));

          TAB.$.heroSliderNav.find("> div:last").attr("data-index", i);

          if (hasTooltipData) {
            TAB.$.heroSliderNav
              .find("> div:last")
              .find(".nav_tooltip")
              .prepend($this.find(".data-tooltip").html());
          } else {
            TAB.$.heroSliderNav
              .find("> div:last")
              .find(".nav_tooltip")
              .remove();
          }
        }

        slideCounter = i;
        $this.attr("data-index", i);

        if (i == 0) {
          $this
            .find(".data-img > img")
            .bind("load", function() {
              that.startTimer();
              $("#hero-slider_img .loader").remove();
            })
            .each(function() {
              if (this.loaded) {
                this.load();
              }
            });
        }
      });

      TAB.$.heroSliderNav.find("> div:first").addClass("active");

      if (TAB.$.html.hasClass("ua-msie-7")) {
        TAB.$.heroSliderNav.css({
          left: "50%",
          marginLeft: "-" + TAB.$.heroSliderNav.width() / 2 + "px"
        });
      }

      this.countSlides = slideCounter;
    },

    getNextSlideNr: function(direction) {
      var newSlide = false;

      if (direction === "left") {
        if (this.currentSlide === 0) {
          newSlide = this.countSlides;
        } else {
          newSlide = this.currentSlide - 1;
        }
      } else {
        if (this.currentSlide === this.countSlides) {
          newSlide = 0;
        } else {
          newSlide = this.currentSlide + 1;
        }
      }

      return newSlide;
    },

    bindEvents: function() {
      var that = this;

      $("#hero-slider_text_wrapper")
        .hover(
          function() {
            that.stopTimer();
          },
          function() {
            that.startTimer();
          }
        )
        .click(function() {
          var $this = $(this);

          if (!$this.hasClass("full-link")) {
            return false;
          }

          if (that.currentSlideDataRel.find(".data-text").attr("data-track")) {
            eval(
              that.currentSlideDataRel.find(".data-text").attr("data-track")
            );
          }

          if ($this.attr("data-full-link")) {
            window.location.href = $this.attr("data-full-link");
            return false;
          }

          var $target = $this.find(".button");

          if ($target.length === 1) {
            var href = $target.attr("href");
            if (href && href.length > 0) {
              if ($target.hasClass("tab-lb")) {
                var width = $target.attr("data-lb-width"),
                  height = $target.attr("data-lb-height");

                if (!width) {
                  width = false;
                } else {
                  width = parseInt(width);
                }

                if (!height) {
                  height = false;
                } else {
                  height = parseInt(height);
                }

                TAB.Lightbox.open($target.attr("href"), width, height);
                return false;
              }

              if ($target.attr("target") == "_blank") {
                window.open(href);
              } else {
                window.location.href = href;
              }
            }
          }

          return false;
        });

      $(".hero-slider_ctrl", TAB.$.heroSlider)
        .click(function(event) {
          var $this = $(this);
          var direction =
            $this.attr("id") === "hero-slider_left" ? "left" : "right";
          var newSlide = that.getNextSlideNr(direction);

          if (newSlide !== false) {
            that.buildSlide(newSlide);
          }

          $this.mouseleave();
          that.tooltipTimer = window.setTimeout(function() {
            $this.mouseenter();
          }, 1000);

          that.stopTimer();

          $this.blur();

          return false;
        })
        .mouseenter(function() {
          return false;

          var $this = $(this);
          if (TAB.$.heroSliderData.hasClass("show-tooltips-on-start"))
            return false;
          var direction =
            $this.attr("id") === "hero-slider_left" ? "left" : "right";
          var newSlide = that.getNextSlideNr(direction);

          if (newSlide !== false) {
            $(">div:eq(" + newSlide + ")", TAB.$.heroSliderNav).mouseenter();
          }

          return false;
        })
        .mouseleave(function() {
          return false;

          window.clearTimeout(that.tooltipTimer);
          $(">div", TAB.$.heroSliderNav).mouseleave();
          return false;
        });

      $(">div", TAB.$.heroSliderNav)
        .click(function() {
          var $this = $(this);
          if ($this.hasClass("active")) return false;
          var newSlide = parseInt($this.attr("data-index"));
          that.buildSlide(newSlide);
          $this.mouseleave();

          that.stopTimer();
        })
        .mouseenter(function(e, data) {
          var $this = $(this);

          if (!(data && data.forceExecute)) {
            if (
              $this.hasClass("active") ||
              TAB.$.heroSliderData.hasClass("show-tooltips-on-start")
            )
              return false;
          }

          var $tooltip = $this.find(".nav_tooltip");
          if (TAB.oldIE) {
            $tooltip.show();
          } else {
            $tooltip
              .css({ opacity: 0, marginBottom: "-10px" })
              .show()
              .stop(true)
              .animate({ opacity: 1, marginBottom: "0px" });
          }
          return false;
        })
        .mouseleave(function(e, data) {
          var $this = $(this);

          if (!(data && data.forceExecute)) {
            if (TAB.$.heroSliderData.hasClass("show-tooltips-on-start"))
              return false;
          }

          var $tooltip = $this.find(".nav_tooltip");
          if (TAB.oldIE) {
            $tooltip.hide();
          } else {
            $tooltip
              .stop(true)
              .animate({ opacity: 0, marginBottom: "10px" }, function() {
                $(this).hide();
              });
          }
        });

      TAB.isTouch &&
        !this.single &&
        $("#hero-slider").touchwipe({
          wipeLeft: function() {
            that.buildSlide(that.getNextSlideNr("right"));
          },
          wipeRight: function() {
            that.buildSlide(that.getNextSlideNr("left"));
          },
          min_move_x: 100,
          min_move_y: 100,
          preventDefaultEvents: false
        });
    },

    buildVideoPlayer: function(src) {
      if (!src || !jwplayer) return;

      TAB.$.heroSliderTextBox.append(
        '<div style="position: absolute;z-index:100;left:60px;"><div id="hero-video"></div></div>'
      );

      jwplayer("hero-video").setup({
        width: "200px",
        height: "225px",
        autoplay: true,
        controlbar: "no",
        modes: [
          {
            type: "flash",
            src: PATH_FLASH + "/jwplayer.swf",
            config: {
              file: src,
              wmode: "transparent"
            }
          }
        ]
      });
    },

    buildSmallCalc: (function() {
      var __jQueryUiLoaded = false;

      var formatGermanCurrency = function(number) {
        var value;
        value = number.toString().replace(".", ",");
        if (value.length > 3) {
          var mod = value.length % 3;
          var output = mod > 0 ? value.substring(0, mod) : "";
          for (var i = 0; i < Math.floor(value.length / 3); i++) {
            if (mod == 0 && i == 0)
              output += value.substring(mod + 3 * i, mod + 3 * i + 3);
            else output += "." + value.substring(mod + 3 * i, mod + 3 * i + 3);
          }
          value = output.replace(".,", ",").replace(",.", ".");
        }
        return value;
      };

      return function($slide) {
        var render = function() {
          var markup = [
           ""
          ];

          markup = markup.join("");

          if ($slide.find(".data-calculator-headline").length === 1) {
            markup = markup.replace(
              "{headline}",
              '<div class="small-calc-headline">' +
                $slide.find(".data-calculator-headline").html() +
                "</div>"
            );
          } else {
            markup = markup.replace("{headline}", "");
          }

          if ($slide.find(".data-calculator-stoerer").length === 1) {
            markup = markup.replace(
              "{stoerer}",
              '<div class="small-calc-stoerer">' +
                $slide.find(".data-calculator-stoerer").html() +
                "</div>"
            );
          } else {
            markup = markup.replace("{stoerer}", "");
          }

          if ($slide.find(".data-calculator-text").length === 1) {
            markup = markup.replace(
              "{text}",
              '<div class="small-calc-text">' +
                $slide.find(".data-calculator-text").html() +
                "</div>"
            );
          } else {
            markup = markup.replace("{text}", "");
          }

          TAB.$.heroSliderTargoCardContent
            .append('<div id="hero-slider-small-calc"></div>')
            .show();

          var $smallCalc = $("#hero-slider-small-calc");

          $smallCalc.html(markup);

          buildSlider($smallCalc);
          domEvents($smallCalc);
        };

        var buildSlider = function($smallCalc) {
          var formatOutput = function(value, format) {
            if (format === "currency") {
              return formatGermanCurrency(value) + " &euro;";
            }
            if (format === "month") {
              return value + " monate";
            }

            return value;
          };

          $smallCalc.find(".is-slider").each(function(i, element) {
            var $input = $(element),
              format = $input.attr("data-format");

            $input
              .after('<div class="small-calc-slider"></div>')
              .before(
                '<span class="input-value">' +
                  formatOutput($input.val(), format) +
                  "</span>"
              );

            var $slider = $input.next(),
              $output = $input.prev();

            $slider.wrap('<div class="small-calc-slider-bg"></div>');

            $slider.slider({
              change: function(event, ui) {
                $output.html(formatOutput($input.val(), format));
                $input.val(ui.value);
              },
              slide: function(event, ui) {
                $output.html(formatOutput($input.val(), format));
                $input.val(ui.value);
              },
              min: parseInt($input.attr("min")),
              max: parseInt($input.attr("max")),
              step: parseInt($input.attr("step")),
              value: parseInt($input.attr("value")),
              range: "min"
            });
          });
        };

        var domEvents = function($smallCalc) {
          $smallCalc.find(".small-calc-submit > a").on("click", function(e) {
            e.preventDefault();
            $smallCalc.find(">form").submit();
          });
        };

        if (!__jQueryUiLoaded) {
          $.getScript(PATH_JS + "__jQuery-ui-custom-build.min.js", function() {
            __jQueryUiLoaded = true;
            $("html").append(
              '<link rel="stylesheet" href="' +
                PATH_CSS +
                'hero-slider-small-calc.css" />'
            );
            render();
          });
        } else {
          render();
        }
      };
    })(),

    buildSlide: function(slideNr) {
      if (
        this.inImageAnimation ||
        isNaN(slideNr) ||
        slideNr < 0 ||
        slideNr > this.countSlides ||
        slideNr === this.currentSlide
      )
        return;

      this.inImageAnimation = true;
      this.currentSlideDataRel = TAB.$.heroSliderData.find(
        "> li:eq(" + slideNr + ")"
      );

      var imgSrc = this.currentSlideDataRel
        .find(".data-img > img:not(.bg)")
        .attr("src");
      var imgSrcBg = [];

      $.each(this.currentSlideDataRel.find(".data-img > img.bg"), function(
        i,
        e
      ) {
        var $this = $(this),
          align = "left";

        if ($this.hasClass("right")) {
          align = "right";
        }

        imgSrcBg.push({
          src: $(e).attr("src"),
          align: align
        });
      });

      var that = this;

      if (!this.doAnimation || this.buildCounter === 0) {
        TAB.$.heroSliderImg
          .find(".img:not(.next):not(.bg)")
          .css("background-image", "url(" + imgSrc + ")")
          .show();
        if (imgSrcBg.length === 1) {
          TAB.$.heroSliderImg
            .find(".img.bg:not(.next)")
            .css("background-image", "url(" + imgSrcBg[0].src + ")")
            .show()
            .find(">div")
            .remove();
        } else {
          TAB.$.heroSliderImg
            .find(".img.bg:not(.next)")
            .css("background-image", "none")
            .show();
          $.each(imgSrcBg, function(i, e) {
            TAB.$.heroSliderImg
              .find(".img.bg:not(.next)")
              .append(
                '<div class="bg-' +
                  e.align +
                  '" style="background-image: url(' +
                  e.src +
                  ')"></div>'
              );
          });
        }
        this.inImageAnimation = false;
      } else {
        TAB.$.heroSliderImg
          .find(".img.next:not(.bg)")
          .css("background-image", "url(" + imgSrc + ")")
          .fadeIn("slow", function() {
            TAB.$.heroSliderImg
              .find(".img:not(.next):not(.bg)")
              .hide()
              .attr("class", "img next");
            $(this).removeClass("next");
            that.inImageAnimation = false;
          });

        if (imgSrcBg.length === 1) {
          TAB.$.heroSliderImg
            .find(".img.next.bg")
            .css("background-image", "url(" + imgSrcBg[0].src + ")")
            .fadeIn("slow", function() {
              TAB.$.heroSliderImg
                .find(".img.bg:not(.next)")
                .hide()
                .attr("class", "img next bg")
                .find(">div")
                .remove();
              $(this).removeClass("next");
            });
        } else {
          $.each(imgSrcBg, function(i, e) {
            TAB.$.heroSliderImg
              .find(".img.next.bg")
              .append(
                '<div class="bg-' +
                  e.align +
                  '" style="background-image: url(' +
                  e.src +
                  ')"></div>'
              );
          });
          TAB.$.heroSliderImg.find(".img.next.bg").fadeIn("slow", function() {
            TAB.$.heroSliderImg
              .find(".img.bg:not(.next)")
              .hide()
              .attr("class", "img next bg");
            $(this).removeClass("next");
          });
        }
      }

      TAB.$.heroSliderTextBox =
        TAB.$.heroSliderTextBox || $("#hero-slider_text-box");

      TAB.$.heroSliderText.find("> a").remove();

      TAB.$.heroSliderTextBox.find("iframe").remove();

      if (this.currentSlideDataRel.hasClass("iframe")) {
        var iframe_url = this.currentSlideDataRel.attr("data-iframe-src"),
          iframe_width =
            this.currentSlideDataRel.attr("data-iframe-width") || "780",
          iframe_height =
            this.currentSlideDataRel.attr("data-iframe-height") || "211";

        if (parseInt(iframe_height) > 211) {
          TAB.$.heroSlider.height(
            TAB.$.heroSlider.height() + (parseInt(iframe_height) - 211)
          );
        }

        TAB.$.heroSliderText.removeClass("align-right align-left");
        $("#hero-slider_text_wrapper").removeClass("full-link");
        TAB.$.heroSliderTextBox.removeClass("white-box card");
        TAB.$.heroSliderTargoCardContent.html("").hide();
        TAB.$.heroSliderText
          .find("#start_mood_text")
          .html("")
          .hide();

        TAB.$.heroSliderTextBox.append(
          '<iframe src="' +
            iframe_url +
            '" id="tab-hero-iframe" frameborder="0" width="' +
            iframe_width +
            '" height="' +
            iframe_height +
            '"></iframe>'
        );
      } else {
        if (this.currentSlideDataRel.hasClass("align-left")) {
          TAB.$.heroSliderText.addClass("align-left");
          TAB.$.heroSliderText.removeClass("align-right");
        } else {
          TAB.$.heroSliderText.addClass("align-right");
          TAB.$.heroSliderText.removeClass("align-left");
        }

        if (this.currentSlideDataRel.hasClass("blue-arrows")) {
          TAB.$.heroSlider.addClass("blue-arrows");
        } else {
          TAB.$.heroSlider.removeClass("blue-arrows");
        }

        if (this.currentSlideDataRel.hasClass("full-link")) {
          $("#hero-slider_text_wrapper").addClass("full-link");
        } else {
          $("#hero-slider_text_wrapper").removeClass("full-link");
        }

        if (this.currentSlideDataRel.hasClass("type-card")) {
          TAB.$.heroSliderTextBox.addClass("card");
          TAB.$.heroSliderTextBox.removeClass("white-box");
        } else if (this.currentSlideDataRel.hasClass("type-box")) {
          TAB.$.heroSliderTextBox.addClass("white-box");
          TAB.$.heroSliderTextBox.removeClass("card");
        } else {
          TAB.$.heroSliderTextBox.removeClass("card white-box");
        }

        if (this.currentSlideDataRel.hasClass("wide")) {
          TAB.$.heroSliderTextBox.addClass("wide");
        } else {
          TAB.$.heroSliderTextBox.removeClass("wide");
        }

        if (this.currentSlideDataRel.find(".data-text").length) {
          TAB.$.heroSliderTargoCardContent
            .html(this.currentSlideDataRel.find(".data-text").html())
            .show();
        } else {
          TAB.$.heroSliderTargoCardContent.html("").hide();
        }

        if (this.currentSlideDataRel.find(".data-headline").length) {
          TAB.$.heroSliderText
            .find("#start_mood_text")
            .html(this.currentSlideDataRel.find(".data-headline").html())
            .show();
        } else {
          TAB.$.heroSliderText
            .find("#start_mood_text")
            .html("")
            .hide();
        }
      }

      // video consultant
      if (this.currentSlideDataRel.attr("data-video-src")) {
        this.buildVideoPlayer(this.currentSlideDataRel.attr("data-video-src"));
      }

      // calculator
      if (this.currentSlideDataRel.hasClass("type-small-calc")) {
        this.buildSmallCalc(this.currentSlideDataRel);
      }

      TAB.$.heroSliderNav.find("> .active").removeClass("active");
      TAB.$.heroSliderNav.find("> div:eq(" + slideNr + ")").addClass("active");

      this.currentSlide = slideNr;
      this.buildCounter++;

      if (this.currentSlideDataRel.attr("data-full-link-href")) {
        $("#hero-slider_text_wrapper").attr(
          "data-full-link-href",
          this.currentSlideDataRel.attr("data-full-link-href")
        );
      } else {
        $("#hero-slider_text_wrapper").removeAttr("data-full-link-href");
      }

      $("#hero-slider_text_wrapper a").bind("click", function(e) {
        e.stopPropagation();
      });
    }
  };

  TAB.FormFields = (function() {
    var niceSelect = function($selects) {
      if ($selects && $selects.length) {
        $selects.each(function(i, e) {
          var $this, $niceSelect, spanText;
          $this = $(this);

          if ($this.hasClass("has-nice-select")) {
            return true;
          }

          $this.after('<div class="nice-select"></div>');
          $niceSelect = $this.next();

          $this.data("nice-select", $niceSelect).appendTo($niceSelect);
          spanText = $this.find("option:selected").html();

          $niceSelect.append(
            '<span class="nice-select-title">' + spanText + "</span>"
          );

          if ($this.hasClass("has-error")) {
            $niceSelect.addClass("has-error");
          }

          $this.bind("focus", function() {
            $this.closest(".nice-select").addClass("has-focus");
          });
          $this.bind("blur", function() {
            $this.closest(".nice-select").removeClass("has-focus");
          });
          $this
            .bind("change keyup", function() {
              var $this, $option;
              $this = $(this);
              $option = $this.find("option:selected");
              if (!$option.length) {
                $option = $this.find("option:first");
              }
              $this
                .parent()
                .find(".nice-select-title")
                .html($option.html());
            })
            .css("opacity", 0)
            .addClass("has-nice-select");
        });
      }
    };

    var checkHasValue = function($this) {
      if ($this.hasClass("has-error")) {
        return null;
      }
      if ($this.val() != "") {
        $this.addClass("has-value");
      } else {
        $this.removeClass("has-value");
      }
    };

    var placeholder = (function() {
      var isInputSupported = "placeholder" in document.createElement("input"),
        isTextareaSupported =
          "placeholder" in document.createElement("textarea");

      if (isInputSupported && isTextareaSupported) return function() {};

      function setCaretPosition(elem, caretPos) {
        if (elem != null) {
          if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.move("character", caretPos);
            range.select();
          } else {
            if (elem.selectionStart) {
              elem.focus();
              elem.setSelectionRange(caretPos, caretPos);
            } else elem.focus();
          }
        }
      }

      return function($elements) {
        if (!$elements.__jQuery || $elements.length === 0) {
          return null;
        }

        $elements.each(function(i, input) {
          var $input = $(input);

          if ($input.attr("type") === "password") return;

          if (!$input.data("placeholder")) {
            $input.data("placeholder", $input.attr("placeholder"));
          } else {
            // already enhanced
            return null;
          }
          if (!$input.data("init-value")) {
            $input.data("init-value", $input.val());
          }

          if ($input.data("init-value") === "") {
            $input.addClass("placeholder").val($input.data("placeholder"));
          }

          if ($input.data("init-value") === $input.data("placeholder")) {
            $input.addClass("placeholder");
          }

          $input.bind("keyup", function() {
            if ($input.val() === "") {
              $input.addClass("placeholder").val($input.data("placeholder"));
              setCaretPosition(this, 0);
            } else if ($input.hasClass("placeholder")) {
              $input
                .val($input.val().replace($input.data("placeholder"), ""))
                .removeClass("placeholder");
            }
          });
          $input.bind("blur", function() {
            if (
              $input.val() === "" ||
              $input.val() === $input.data("placeholder")
            ) {
              $input.addClass("placeholder").val($input.data("placeholder"));
            }
          });
          $input.bind("focus click", function() {
            if ($input.val() === $input.data("placeholder")) {
              setCaretPosition(this, 0);
            }
          });

          // form handling
          var $form = $input.closest("form");

          if ($form.data("placeholder-enhanced")) {
            return null;
          }

          $form.data("placeholder-enhanced", true);

          $form.bind("submit", function() {
            $(this)
              .find(".placeholder:input")
              .val("");
          });
        });
      };
    })();

    return {
      init: function() {
        $(".tab-input:input").each(function(i, e) {
          var $this = $(e);

          if ($this.data("has-event") === true) {
            return true;
          }

          $this.bind("blur", function() {
            checkHasValue($this);
          });

          checkHasValue($this);

          $this.data("has-event", true);
        });

        niceSelect($("select.tab-nice-select"));

        //$('input, textarea').placeholder();

        placeholder($(":input[placeholder]"));

        log("FormFields");
      },
      niceSelect: niceSelect
    };
  })();

  TAB.AudioPlayer = {
    isHTML5: false,
    isReady: false,
    inited: false,
    HTML5Player: false,

    supportsHTML5AudioMP3: function() {
      var elem = document.createElement("audio"),
        bool = false;

      try {
        if (!!elem.canPlayType) {
          if (elem.canPlayType("audio/mpeg;").replace(/^no$/, "") != "") {
            bool = true;
          }
        }
      } catch (e) {}

      if (bool) {
        this.HTML5Player = elem;
      }

      return bool;
    },

    init: function() {
      if (this.inited) return;

      this.isHTML5 = this.supportsHTML5AudioMP3();

      if (!this.isHTML5) {
        this.appendFlashPlayer();
      }

      this.inited = true;
    },

    play: function(url) {
      if (!url) return;

      TAB.AudioPlayer.init();

      if (this.isHTML5) {
        this.HTML5Player.setAttribute("src", url);
        this.HTML5Player.play();
      } else {
        FlashAudioPlayerApi.doMethod("method:setUrl", url);
        FlashAudioPlayerApi.doMethod("method:play", "");
      }
    },

    pause: function() {
      TAB.AudioPlayer.init();

      if (this.isHTML5) {
        this.HTML5Player.pause();
      } else {
        FlashAudioPlayerApi.doMethod("method:pause", "");
      }
    },

    appendFlashPlayer: function() {
      window.FlashAudioPlayerApi = {
        _getFlashObject: function() {
          return document.getElementById("audioplayer");
        },
        doMethod: function(param1, param2) {
          var self = this;

          if (!param1) return;

          param2 = param2 || "";

          if (!TAB.AudioPlayer.isReady) {
            this.callbacks.onInit.push(function() {
              self._getFlashObject().SetVariable(param1, param2);
            });
          } else {
            this._getFlashObject().SetVariable(param1, param2);
          }
        },
        onInit: function() {
          TAB.AudioPlayer.isReady = true;

          $.each(this.callbacks.onInit, function(key, func) {
            if (typeof func === "function") {
              func();
            }
          });
        },
        onUpdate: function() {},
        callbacks: {
          onInit: []
        }
      };

      var flashvars = {
        listener: "FlashAudioPlayerApi",
        interval: 500
      };

      $("body").append('<div id="audioplayer"></div>');

      swfobject.embedSWF(
        PATH_FLASH + "mediathek/player_mp3_js.swf",
        "audioplayer",
        "0",
        "0",
        "9.0.0",
        "expressInstall.swf",
        flashvars,
        {},
        {}
      );
    }
  };

  TAB.MediaCenter = (function() {
    var domManipulation = function() {
      $(".mediacenter-teaser").hover(
        function() {
          var $this = $(this);
          $this
            .find(".mediacenter-teaser-size,.mediacenter-teaser-button")
            .stop(true, true)
            .slideDown("fast");
        },
        function() {
          var $this = $(this);
          $this
            .find(".mediacenter-teaser-size,.mediacenter-teaser-button")
            .stop(true, true)
            .slideUp("fast");
        }
      );

      $(".audioplayer[data-audio-file-url]").bind("click", function() {
        var $this = $(this),
          url = $this.attr("data-audio-file-url");

        if ($this.data("is-playing")) {
          TAB.AudioPlayer.pause();
          $this.removeClass("pause").addClass("play");
          $this.data("is-playing", false);
        } else {
          TAB.AudioPlayer.play(url);
          $(".audioplayer.pause[data-audio-file-url]")
            .removeClass("pause")
            .addClass("play");
          $this.removeClass("play").addClass("pause");
          $this.data("is-playing", true);
        }

        return false;
      });
    };

    return {
      init: function() {
        domManipulation();
      }
    };
  })();

  TAB.DynamicHotline = function() {
    $(tab_dynamic_hotline.field).html(
      tab_dynamic_hotline["text_" + new Date().getDay().toString()] || ""
    );
  };

  TAB.DomReady = function() {
    this.$.body = this.$.body || $("body");
    this.$.root = this.$.root || $("#root");

    $("#sub-nav li.hide-on-subnav").each(function(i, e) {
      var $this = $(this);
      $this.find("li").each(function(i, e) {
        $(e).insertBefore($this);
      });
      $this.remove();
    });

    this.userAgentClass();
    this.cssRouter();

    for (var key in this.autoloads) {
      if (typeof TAB.autoloads[key] === "function") {
        this.autoloads[key].call(this);
      }
    }

    this.Lightbox.init();
    this.Flyout.init();

    if (window.tab_hide_directmenu !== true) {
      this.DirectMenu.init();
    }

    this.Accordion.init();
    this.PageTabs.init();
    this.ContentTabs.init();
    new TAB.Extension.HeroSlider();
    this.FormFields.init();
    this.MediaCenter.init();

    $("li.expand-all").click(function() {
      $(this)
        .closest("ul")
        .find(">.hidden")
        .removeClass("hidden");
      $(this).hide();
      $("li.close-all").show();
    });

    $("li.close-all").click(function() {
      $(this)
        .closest("ul")
        .find(">.closeable")
        .addClass("hidden");
      $(this).hide();
      $("li.expand-all").show();
    });

    if (!!window.tab_dynamic_hotline && window.tab_dynamic_hotline.field) {
      TAB.DynamicHotline();
    }

    if ($("#start_ticker").length) {
      window.NewsTicker = new TAB.Extension.Ticker();
    }

    if ($("#nav").length) {
      this.$.html.addClass("has-nav");
    } else {
      this.$.html.addClass("has-no-nav");
    }

    TAB.isTouch
      ? this.$.html.addClass("touch")
      : this.$.html.addClass("no-touch");

    if ($("#antrag-iframe").length === 1) {
      var $request_iframe = $("#antrag-iframe");

      this.$.html.addClass("request-page");
      if (this.$.html.attr("id") === "design12") {
        this.$.html.removeAttr("id");
      }

      if ($request_iframe.hasClass("idms")) {
        (function() {
          var getFooterOffsetTop = function(footerNegativeBottom) {
            footerNegativeBottom = footerNegativeBottom || 0;

            var footer_pos =
              TAB.$.window.height() +
              TAB.$.window.scrollTop() -
              $request_iframe.offset().top -
              27;

            if (footer_pos > $request_iframe.height() - 27) {
              footer_pos = $request_iframe.height() - 27;
            }

            footer_pos = footer_pos - footerNegativeBottom;

            return footer_pos;
          };

          var handleIDMSIFrame = function() {};

          window.setIframeHeight = function(height, first_call) {
            first_call = first_call || true;

            var minHeight = 1000;
            if (!isNaN(height) && height > minHeight) {
              $request_iframe.height(height + 20);
            } else {
              $request_iframe.height(minHeight);
            }

            if (first_call) {
              var $idms_footer = $request_iframe.contents().find("#footerIDMS");

              var footerNegativeBottom = parseInt(
                $request_iframe
                  .contents()
                  .find("#container")
                  .css("top")
              );

              if (typeof footerNegativeBottom !== "number") {
                footerNegativeBottom = 0;
              }
              if (
                $request_iframe
                  .contents()
                  .find("#footerIDMS")
                  .parent()
                  .is("body")
              ) {
                footerNegativeBottom = 0;
              }

              $request_iframe.css("overflow", "hidden");

              $idms_footer.css({
                position: "absolute",
                bottom: "auto",
                top: getFooterOffsetTop(footerNegativeBottom)
              });
              $idms_footer
                .find(
                  "#IDMS_autocomplete_choices, #market_watch_loading, #market_watch_window"
                )
                .css({ position: "absolute", marginLeft: "-7px" });

              handleIDMSIFrame = function() {
                $request_iframe
                  .contents()
                  .find("#footerIDMS")
                  .css({ top: getFooterOffsetTop(footerNegativeBottom) });
              };
            }
          };

          TAB.$.window.bind("scroll resize", function() {
            handleIDMSIFrame();
          });
        })();
      } else {
        (function() {
          var first_call = true;

          window.setIframeHeight = function(height) {
            var minHeight = 1000;
            if (!isNaN(height) && height > minHeight) {
              $request_iframe.height(height + 20);
            } else {
              $request_iframe.height(minHeight);
            }

            if (first_call) {
              $request_iframe.css("overflow", "hidden");
              first_call = false;
            }
          };
        })();
      }

      window.scrollToTop = function() {
        window.scrollTo(0, 0);
      };
    }

    // Theme
    var theme = -1;

    if (typeof tab_theme === "number" && !isNaN(tab_theme)) {
      theme = tab_theme - 1;
    } else {
      var $activeMenu = $("#nav ul:first > li.e_select");
      if ($activeMenu.length) {
        theme = $activeMenu.prevAll().length;
      }
    }

    if (!isNaN(theme) && theme > -1 && theme < 6) {
      this.$.html.addClass("theme-" + (theme + 1));
    } else if (this.$.html.attr("class").indexOf("theme-") === -1) {
      if (this.$.html.hasClass("request-page")) {
        var new_theme = $request_iframe.attr("data-theme");

        if (new_theme) {
          this.$.html.addClass("theme-" + new_theme);
        } else {
          this.$.html.addClass("theme-0");
        }
      } else {
        this.$.html.addClass("theme-0");
      }
    }

    $(".tab-category-grid .ym-g33.theme-border").append(
      '<div class="theme-bg-gradient col-bg-left"></div>'
    );

    if ($.browser.msie) {
      $("#sub-nav ul").each(function() {
        var $this = $(this);
        $this.find(">li:first").addClass("first");
        $this.find(">li:last").addClass("last");
      });
    }

    if ($("#sub-nav").length) {
      $("li:not(.e_select)", "#sub-nav").each(function() {
        var $this = $(this),
          $submenu = $this.find(">.e_smenu");

        if ($submenu.length) {
          $this.addClass("has-sub");

          if (!$this.hasClass("e_select")) {
            $submenu.hide();
          }

          $this.hover(
            function() {
              $this.stopTime();

              $this.oneTime(300, "show", function() {
                $submenu.stop(true, true).slideDown("normal");
                $(this).addClass("sub-open");
              });
            },
            function() {
              $this.stopTime();

              $this.oneTime(700, "close", function() {
                $submenu.stop(true, true).slideUp("slow");
                $(this).removeClass("sub-open");
              });
            }
          );
        }
      });
      $('a[href="#"]', "#sub-nav")
        .addClass("no-link")
        .removeAttr("href");
      $("#page-tabs h2").addClass("min-width");
    }

    if ($("#socialshareprivacy").length) {
      $("#socialshareprivacy").socialSharePrivacy({
        services: {
          facebook: {
            perma_option: "off",
            dummy_img: PATH_IMG + "share_facebook.png"
          },
          twitter: {
            perma_option: "off",
            dummy_img: PATH_IMG + "share_twitter.png"
          },
          gplus: {
            perma_option: "off",
            dummy_img: PATH_IMG + "share_gplus.png"
          }
        },
        css_path: false
      });
    }

    $(".groups_tabs > a").click(function() {
      var $this = $(this),
        $parent = $this.parent();

      $("table", $parent).hide();
      $($(this).attr("href")).show();

      $("a", $parent).removeClass("active");
      $this.addClass("active");

      return false;
    });

    $(".list-view").each(function(i, e) {
      var $e = $(e);
      $e.find(".list-view-entry:first").addClass("first");
      $e.find(".list-view-entry:odd").addClass("odd");
    });

    $('#sub-nav a[href="#"], .content a[href="#"]').click(function(e) {
      e.preventDefault();
    });

    if (typeof _gaq !== "undefined" && !!window.trkEVT) {
      $('#sub-nav a[href!="#"]').mousedown(function() {
        trkEVT("Linkenavigation", "Klick", $(this).text());
      });
      $('#nav a[href!="#"]').mousedown(function() {
        var $this = $(this);
        if (!$this.closest("li").hasClass("has-teaser")) {
          trkEVT("Hauptnavigation", "Klick", $this.text());
        }
      });
    }

    (function() {
      // Using CSS Router to bypass LENA Assistant on pages with
      if (
        TAB.$.html.hasClass("online-banking") &&
        !TAB.$.html.hasClass("service")
      ) {
        return;
      }

      if (typeof window.tab_showassistent === "boolean") {
        if (window.tab_showassistent === false) {
          return;
        }
      } else {
        if ($("#nav").length === 0) {
          return;
        }
      }

      TAB.$.body = TAB.$.body || $("body");

      if (window.name && String(window.name).indexOf("tab_lb_iframe") > -1) {
        return;
      }

      (function(d, t) {
        var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        g.src =
          "//projects.elitechnology.com/jsprojects/targobank/init.js?v=" +
          +new Date();
        g.async = true;
        s.parentNode.insertBefore(g, s);
      })(document, "script");
    })();

    if ($("#recherche").length > 0) {
      loadJS(PATH_JS + "tab-search-suggest.js", true);
    }

    this.$.html.addClass("dom-ready");
  };

  TAB.AllReady = function() {
    for (var key in this.lazyAutoloads) {
      if (typeof this.lazyAutoloads[key] === "function") {
        this.lazyAutoloads[key].call(this);
      }
    }
    this.$.html.addClass("all-ready");
  };

  TAB.$.document.ready(function() {
    TAB.DomReady();
  });

  TAB.$.window.load(function() {
    TAB.AllReady();
  });

  // misc
  TAB.redirectOnMobile = function(url) {
    if (
      window.navigator.userAgent.toLowerCase().indexOf("mobile") > -1 &&
      typeof url === "string"
    ) {
      window.location.replace(url);
    }
  };

  loadJS(PATH_JS + "nav-teasers.js");
})(window, __jQuery);

(function(w, $) {
  var path = w.location.pathname;

  if (path.indexOf("/user/administration/UA_Gestion.aspx") === -1) {
    return;
  }

  var hash = w.location.hash.replace("#", "");

  if (hash !== "" && !isNaN(hash)) {
    $(function() {
      $('input[name="data/saisie/NUM_CTR_CPT"]').val(hash);
      $('input[name="data/saisie/NUM_CTR_CAR"]').val(hash);
    });
  }
})(window, __jQuery);
