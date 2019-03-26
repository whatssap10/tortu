+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})}var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.VERSION="3.2.0",b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},b.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){"in"!=b.hoverState&&c.detach(),b.$element.trigger("hidden.bs."+b.type)}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(d),d.isDefaultPrevented()?void 0:(c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=window.SVGElement&&c instanceof window.SVGElement,f=c.getBoundingClientRect?c.getBoundingClientRect():null,g=d?{top:0,left:0}:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=e?{}:{width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()};return a.extend({},f,h,i,g)},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=c,a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function c(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})}var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.VERSION="3.2.0",b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=c,a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery);

if(!jQuery.cookie) {
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
}

var searchSuggest = function() {

	'use strict';

	if(typeof window.TAB === 'object') {
		TAB.$cache = TAB.$;
	} else {
		window.TAB = {};
		TAB.$cache = {
			html: $('html')
		};
		window.PATH_JS = '/de/javascript/redesign/';
	}

	if(!$.fn.on) {
		$.fn.on = $.fn.bind;
		$.fn.off = $.fn.unbind;
	}

	TAB.Util = TAB.Util || {};
	TAB.Util.keyCode = TAB.Util.keyCode || {"BACKSPACE": 8, "COMMA": 188, "DELETE": 46, "DOWN": 40, "END": 35, "ENTER": 13, "ESCAPE": 27, "HOME": 36, "LEFT": 37, "NUMPAD_ADD": 107, "NUMPAD_DECIMAL": 110, "NUMPAD_DIVIDE": 111, "NUMPAD_ENTER": 108, "NUMPAD_MULTIPLY": 106, "NUMPAD_SUBTRACT": 109, "PAGE_DOWN": 34, "PAGE_UP": 33, "PERIOD": 190, "RIGHT": 39, "SPACE": 32, "TAB": 9, "UP": 38};

	TAB.htmlEncode = function(value){
		return $('<div/>').text(value).html();
	};

	TAB.htmlDecode = function(value){
		return $('<div/>').html(value).text();
	};

	(function () {

		(function (factory) {
			var SearchSuggest = factory(jQuery, TAB);

			new SearchSuggest({
				selector: '#recherche',
                'keywordLists': [
                    PATH_JS + 'configs/tab.idms.suggest.keywords.js',
                    '//investments.targobank.de/files/js/suggester/php_keyword_list_nsin.js'
                ]
			});

		})(function ($, TAB) {

			var _defaults = {
				'selector': '.search-suggest-input',
				'keywordLists': [
					'configs/tab.idms.suggest.keywords',
					'//investments.targobank.de/files/js/suggester/php_keyword_list_nsin.js'
				],
				'keys': {
					'STO' : 'Aktien', // CIWI0239
					'FUN' : 'Fonds', // CIWI0240
					'ETF' : 'ETFs', // CIWI0446
					'IND' : 'Indizes', // CIWI0244
					'CUR' : 'W&auml;hrungen',
					'MET' : 'Edelmetalle',
					'COM' : 'Rohstoffe',
					'BON' : 'Anleihe'
				},
				'keys_more_text': {
					'STO' : 'alle Aktien', // CIWI0239
					'FUN' : 'alle Fonds', // CIWI0240
					'ETF' : 'alle ETFs', // CIWI0446
					'IND' : 'alle Indizes', // CIWI0244
					'CUR' : 'alle W&auml;hrungen',
					'MET' : 'alle Edelmetalle',
					'COM' : 'alle Rohstoffe',
					'BON' : 'alle Anleihen'
				},
				'ciwi_keys_mapping': {
					'STO' : 'CIWI0012',
					'FUN' : 'CIWI0020',
					'ETF' : 'CIWI0427',
					'IND' : 'CIWI0055',
					'CUR' : 'CIWI0275',
					'MET' : 'CIWI0281',
					'COM' : 'CIWI0281',
					'BON' : 'CIWI0195'
				},
				'ciwi_keys_search_mapping': {
					'STO' : {
						type: 'asset-search',
						ciwi: 'CIWI0009',
						referer: 'CIWI0004.html'
					},
					'FUN' : {
						type: 'asset-search',
						ciwi: 'CIWI0101',
						referer: 'CIWI0096.html'
					},
					'ETF' : {
						type: 'asset-search',
						ciwi: 'CIWI0434',
						referer: 'CIWI0433.html'
					},
					'IND' : 'CIWI0244',
					'CUR' : false,
					'MET' : false,
					'COM' : {
						type: 'asset-search',
						ciwi: 'CIWI0193',
						referer: 'CIWI0433.html'
					},
					'BON' : false
				},
				'init': true,
				suggestIDMSenabled: true
			};

			var SearchSuggest = function (options) {

				options = options || {};

				this.$cache = {};
				this.config = $.extend({}, _defaults, options);

				this.config.init && this.init();

			};

			SearchSuggest.prototype.perform = function (keys, keywordlist) {

				keywordlist = keywordlist || {};

				var self = this,
					$input = self.$cache.input,
					timer = null,
					time_idms = 200,
					cache = {},
					popover_class = 'search-suggest-popover',
					xhr = null,
					minLength = 3,
					last_value = '';

				if ($input.length === 0) {
					return false;
				}

				var buildSuggestPopover = function(value) {

					last_value = value;

					$input.popover({
						animation: false,
						placement: 'bottom',
						html: true,
						trigger: 'manual',
						container: 'body',
						title: false,
						template: '<div class="popover idms '+ popover_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
						content: function () {
							return [
								'<div class="suggest-title">TARGOBANK Suche <a href="#" class="close-suggest"></a></div>',
								'<div id="suggest-vts"></div>',
								'<div id="suggest-branch"></div>',
								'<div class="suggest-title">Wertpapiersuche <a href="#" class="toggle-suggestIDMS">Wertpapiersuche '+(self.config.suggestIDMSenabled ? 'ausblenden' : 'einblenden')+'</a></div>',
								'<div id="suggest-idms"></div>'
							].join('');
						}
					});

					timer = setTimeout(function () {
						if($('.' +popover_class).length === 0) {
							$input.popover('show');
						}
						suggestBranch(value);
						suggestVTS(value);
						self.config.suggestIDMSenabled && suggestIDMS(value);
					}, time_idms);

				};

				var suggestBranch = function (value) {
					var text;
					if(isNaN(value)) {
						text = 'alle <strong>TARGOBANK Filialen</strong> im Ort <strong>"' + value + '"</strong> finden Sie hier.';
					} else {
						text = 'alle <strong>TARGOBANK Filialen</strong> in der Postleitzahl <strong>"' + value + '"</strong> finden Sie hier.';
					}
					$('#suggest-branch').html(
						'<p class="arrow-nav"><a href="/de/service/suchen-und-finden/SearchList.aspx?loca=' + value + '&type=branch&sub=true&adv=" class="tab-lightbox lightbox-iframe chevron-right">'+text+'</a></p>'
					)
				};

				var suggestVTS = function (value) {
					$('#suggest-vts').html(
						'<p class="arrow-nav"><a href="#" onclick="$(\'.search-form\').submit();" class="chevron-right">Klicken Sie hier um die <strong>TARGOBANK.de</strong> nach <strong>"'+ value +'"</strong> zu durchsuchen.</a></p>'
					)
				};

				var suggestIDMS = function (value) {

					var url = '//investments.targobank.de/ciminfo/www/autocompleter_v3.html?AMOUNT=1&SEARCH_VALUE=' + encodeURIComponent($.trim(value)) + '&NSIN=1&jsonpcallback=?',
						value_lower = value.toLowerCase(),
						value_upper = value.toUpperCase();

					var callback = function (html) {

						var $resultArea = $('#suggest-idms');

						if (html.length === 0) {
							$resultArea.html('').hide();
							return;
						}

						$resultArea.html(html.join('')).show();

					};

					if (cache[url]) {
						callback(cache[url]);
						return;
					}

					if (xhr) {
						try {
							xhr.abort();
							xhr = null;
						} catch (e) {}
					}

					try {
						xhr = $.ajax({
							type: 'GET',
							url: url,
							dataType: 'jsonp',
							crossDomain: true,
							beforeSend: function () {
								TAB.$cache.html.addClass('search-suggest-loading');
							},
							success: function (data) {

								var html = [];
								$.each( self.config.keys , function (key, title) {

									if (data[key] || keywordlist[key]) {

										var counter = 0,
											markup = '',
											entries = [],
											x = 0;

										markup += '<ul class="link-list-b">';

										keywordlist[key] && $.each(keywordlist[key], function (i, entry) {
											if (entry.NAME.toLowerCase().indexOf(value_lower) > -1
												|| entry.WKN.toLowerCase().indexOf(value_lower) > -1
												|| (entry.is_sponsored && entry.ALWAYS === true)) {
												entries.push(entry);
											}
										});

										var ciwi_parameter = '';

										if(self.config.ciwi_keys_mapping[key]) {
											ciwi_parameter = 'ciwi=' + self.config.ciwi_keys_mapping[key];
										}

										data[key] && $.each(data[key].data, function (i, entry) {
											entries.push(entry);
										});

										var count_total = entries.length;

										if(data[key].amount && !isNaN(data[key].amount) && data[key].amount > 0) {
											count_total += data[key].amount - data[key].data.length;
										}

										$.each(entries, function (i, entry) {

											if (x > 4) {
												return false;
											}

											if(!entry.NAME) {
												count_total--;
												return true;
											}

											if (!entry.is_sponsored && markup.indexOf('data-id="' + entry.ID_NOTATION + '"') > -1) {
												count_total--;
												return true;
											}
											if (!entry.is_sponsored && entry.WKN && markup.indexOf('data-wkn="' + entry.WKN + '"') > -1) {
												count_total--;
												return true;
											}

											x++;

											var url = entry.URL || 'https://www.targobank.de/kurse/index.html?'+ciwi_parameter+'&ID_NOTATION=' + entry.ID_NOTATION + '&addEvent=filter_wpsuche',
												name = TAB.htmlDecode(entry.NAME),
												css_classes = ['arrow-nav'],
												wkn = entry.WKN || '';

											if(entry.css_classes) {
												css_classes.push(entry.css_classes);
											}
											if(entry.is_sponsored) {
												wkn = 'Anzeige';
											}

											name = name.toUpperCase().replace(value_upper, '<span class="highlight">'+value_upper+'</span>');

											markup += '<li class="'+css_classes.join(' ')+'" data-wkn="' + wkn + '" data-id="' + entry.ID_NOTATION + '"><a href="' + url + '" class="idms"><span class="name pull-left">' + name + '</span>';

											if (entry.WKN || entry.is_sponsored) {
												wkn = wkn.replace(value_upper, '<span class="highlight">'+value_upper+'</span>');
												markup += ' <span class="wkn pull-right">' + wkn + '</span>';
											}

											markup += '</a></li>';

											counter++;

										});

										markup += '</ul>';

										var markup_title = '';

										if(self.config.ciwi_keys_search_mapping[key] && count_total > 5) {

											var search_mapping = self.config.ciwi_keys_search_mapping[key],
												url, link_classes = [];

											if(typeof search_mapping === 'object' && search_mapping.type === 'asset-search') {
												url = 'https://www.targobank.de/kurse/index.html?ciwi='+ search_mapping.ciwi + '&SEARCH=' + value + '&REFERER=' + search_mapping.referer;
											} else {
												url = 'https://www.targobank.de/kurse/index.html?ciwi='+ search_mapping +'&SEARCH_VALUE='+value+'&FACTSHEET=0';
											}

											markup_title = '<h3 class="idms-title"><a href="'+url+'" class="'+ link_classes.join(' ') +'" data-value="'+value+'">' + title + ' <!--('+counter+' von ' + (count_total) + ')--><span class="pull-right">'+ self.config.keys_more_text[key] +' <i class="fa fa-angle-right"></i></span></a></h3>';

										} else {
											markup_title = '<h3 class="idms-title">' + title + ' <!--('+counter+' von ' + (count_total) + ')--></h3>';
										}

										markup = markup_title + markup;

										if (counter > 0) {
											html.push(markup);
										}

									}

								});

								if (html !== '') {
									cache[url] = html;
									callback(html);
								}

							},
							complete: function () {
								xhr = null;
								TAB.$cache.html.removeClass('search-suggest-loading');
							}
						});
					} catch (e) {
						xhr = null;
					}

				};

				var clearAllTimer = function () {
					if (timer) {
						clearTimeout(timer);
						timer = null;
					}
				};

				$input
					.on('keydown', function (e) {

						var code = e.keyCode || e.which;

						if($('.' + popover_class).length === 1) {

							var $popover = $('.' +popover_class);

							if(code === TAB.Util.keyCode.UP || code === TAB.Util.keyCode.DOWN) {

								var $arrowNav = $popover.find('.arrow-nav');

								if($arrowNav.filter('.active').length === 0) {
									$arrowNav.filter(':first').addClass('active');
								} else {

									var activeIndex = 0;

									$arrowNav.each(function(i,e) {

										var $e = $(e);

										if($e.hasClass('active')) {
											$e.removeClass('active');
											activeIndex = i;
										}

									});

									if(code === TAB.Util.keyCode.UP) {
										activeIndex--;
										if(activeIndex < 0) {
											activeIndex = $arrowNav.length - 1;
										}
									} else {
										activeIndex++;
										if(activeIndex + 1 > $arrowNav.length) {
											activeIndex = 0;
										}
									}

									$arrowNav.filter(':eq('+activeIndex+')').addClass('active');

								}

								return false;
							}

							if(code === TAB.Util.keyCode.ENTER || code === TAB.Util.keyCode.NUMPAD_ENTER) {

								if($popover.find('.arrow-nav.active').length > 0) {

									var $link = $popover.find('.arrow-nav.active a');

									if($link.hasClass('idms')) {
										window.location.href = $link.prop('href');
									} else {
										$link.trigger('click');
									}

									return false;
								}

							}

						}

					})
					.on('keyup change', function (e) {

						var $this = $(this),
							value = $(this).val(),
							code = e.keyCode || e.which;

						if(value === 'Text, WKN, ISIN, PLZ' || value === '') {
							return;
						}

						if (code !== TAB.Util.keyCode.DELETE && code !== TAB.Util.keyCode.BACKSPACE && code !== TAB.Util.keyCode.SPACE) {

							var stop = false;

							$.each(TAB.Util.keyCode, function (name, keyCode) {
								if (code === keyCode) {
									stop = true;
									return false;
								}
							});

							if (stop) {
								return false;
							}

						}

						clearAllTimer();

						if (value.length < minLength) {
							$this.popover('destroy');
							return;
						}

						buildSuggestPopover(value);

					})
					.on('click', function () {
						var $this = $(this),
							value = $(this).val();

						if(value === 'Text, WKN, ISIN, PLZ' || value === '') {
							return;
						}

						if (value.length < minLength) {
							$this.popover('destroy');
							return;
						}

						buildSuggestPopover(value);

					});

				$('.' +popover_class+ ' .toggle-suggestIDMS').live('click',function() {

					if(self.config.suggestIDMSenabled) {
						$.cookie('suggest-idms-disabled','true', { expires: 730, path: '/' });
						self.config.suggestIDMSenabled = false;
						$('#suggest-idms').hide();
						$(this).html('Wertpapiersuche einblenden');
					} else {
						$.removeCookie('suggest-idms-disabled', { path: '/' });
						self.config.suggestIDMSenabled = true;
						suggestIDMS( last_value );
						$('#suggest-idms').show();
						$(this).html('Wertpapiersuche ausblenden');
					}

					return false;
				});
				$('.close-suggest,.tab-lb','.' +popover_class).live('click',function() {
					$input.popover('destroy');
					return false;
				});
			};

			SearchSuggest.prototype.loadIDMSKeywords = function( doPerform ) {

				var self = this;

				doPerform = doPerform || false;

                $.getScript( self.config.keywordLists[0] , function () {

                    window.idms_suggest_keywords = window.idms_suggest_keywords || false;

                    $.getScript( self.config.keywordLists[1] , function () {

                        window.s = window.s || [];

                        var keywordlist = {};

                        if (idms_suggest_keywords) {
                            $.each(idms_suggest_keywords, function (key, entries) {

                                if (!self.config.keys[key]) {
                                    self.config.keys[key] = key;
                                }
                                if (!keywordlist[key]) {
                                    keywordlist[key] = [];
                                }

                                $.each(entries, function (entry_key, entry) {
									entry.css_classes = 'sponsored';
									entry.is_sponsored = true;
                                    keywordlist[key].unshift(entry);
                                });

                            });
                        }

                        $.each(self.config.keys, function (key, name) {
                            if (!window.s[key]) {
                                return;
                            }
                            if (!keywordlist[key]) {
                                keywordlist[key] = [];
                            }

                            var x = 1,
                                new_entry = {};

                            $.each(window.s[key], function (i, entry) {

                                if (x === 1) {
                                    new_entry = {};
                                    new_entry.NAME = entry;
                                }
                                if (x === 2) {
                                    new_entry.ID_NOTATION = entry;
                                }
                                if (x === 3) {
                                    new_entry.WKN = entry;
                                    x = 0;
                                    keywordlist[key].push(new_entry);
                                }
                                x++;

                            });

                        });

                        doPerform && self.perform(
                            self.config.keys,
                            keywordlist
                        );

                        window.s = window.aSearchNameFields = window.aReturnNameFields = null;
                    });
                });
			};

			SearchSuggest.prototype.init = function () {

				var self = this;

				this.config.suggestIDMSenabled = !($.cookie('suggest-idms-disabled') === 'true');

				$(function () {

					self.$cache.input = $(self.config.selector);

					self.$cache.input.one('focus', function () {
						if(!self.config.suggestIDMSenabled) {
							self.perform( self.config.keys, {} );
						} else {
							self.loadIDMSKeywords(true);
						}
					}).attr({
						autocomplete: 'off'
					});

				});

			};

			return SearchSuggest;

		});

	})();

};

searchSuggest();