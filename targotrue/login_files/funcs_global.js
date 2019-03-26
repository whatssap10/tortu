/*
 - sIFR -
 */

// Global Variables for getting the External Website URL

/* document.write( '<script type="text/javascript" src="/de/javascript/suche.js" /></script>' ); */


var loc= window.location.search;
var externalURL = loc.match(/(\&|\?){1}param=(.*)/);
if(externalURL != null)
{
	externalURL=externalURL[2];
}


function startSIFR() {
	if (typeof sIFR == 'function') {
		sIFR.setup();
		sIFR.replaceElement("h2.sIFRutiger", named({
			sFlashSrc: "swf/frutiger-reg.swf",
			sColor: "002F5F"
		}));
	}
}

/*
 - Functions -
 */

/* JQuery functions */
$(document).ready(function() {

	/* show/hide contents on faq pages */
	$("a.faqContentLink").bind("click", function() {
		var faqContentLink = $(this),
			faqContent        = $(this).next();

		if(faqContent.css("display") == "none") {
			faqContentLink.addClass("opened");
			faqContent.css("display", "block");
		} else {
			faqContentLink.removeClass("opened");
			faqContent.css("display", "none");
		}
	});

});

function changeFormValue(thisForm, thisValue, thisStatus) {
	var thisValNow = thisForm.value;
	if(thisStatus=='0') {
		if(thisValNow==thisValue) {
			thisForm.value = '';
			thisForm.select();
		}
	} else {
		if(thisValNow=='') {
			thisForm.value = thisValue;
		}
	}
}

function toggleCBoxContent(itemToShow) {
	var contactBoxItems = ['hotline', 'filialsuche', 'msf', 'internet'];

	for (var i = 0; i < contactBoxItems.length; i++) {
		var toolboxIcon = document.getElementById('cbox_icon_' + contactBoxItems[i]);
		var toolboxContent = document.getElementById('cbox_content_' + contactBoxItems[i]);

		if (contactBoxItems[i] == itemToShow) {
			toolboxIcon.src = "..//de/images/public/cbox_icon_" + contactBoxItems[i] + "_on.gif";
			toolboxContent.className = "cbox_content-on";
		}
		else {
			toolboxIcon.src = "..//de/images/public/cbox_icon_" + contactBoxItems[i] + "_off.gif";
			toolboxContent.className = "cbox_content-off";
		}
	}
}

function toggleFlap(flapToShow) {
	var flapNavi = document.getElementById('flap_navi');
	var flapNaviItems = flapNavi.getElementsByTagName('li');

	if (flapToShow <= flapNaviItems.length) {
		for (var i = 0; i < flapNaviItems.length; i++) {
			var naviFlap = document.getElementById(flapNaviItems[i].id);
			var naviContent = document.getElementById('pb_content_' + flapNaviItems[i].id);

			if (naviFlap.id == 'flap' + flapToShow) {
				naviFlap.className = "flap-active";
				naviContent.className = "pb_flap_content-active";
				flapFound = true;
			}
			else {
				naviFlap.className = "flap";
				naviContent.className = "pb_flap_content";
			}
		}
	}
}

function toggleImgFlap(flapToShow, flapBorderColor) {
	var flapNavi = document.getElementById('pb_imgflaps');
	var flapNaviItems = flapNavi.getElementsByTagName('li');

	if (flapToShow <= flapNaviItems.length) {
		for (var i = 1; i <= flapNaviItems.length; i++) {
			var naviFlap = document.getElementById('pb_imgflap-' + i);
			var naviFlapImg = document.getElementById('pb_imgflap-img-' + i);
			var naviContent = document.getElementById('pb_imgflap_content-' + i);

			if (naviFlap.id == 'pb_imgflap-' + flapToShow) {         /* hover frame image */
				naviFlapImg.src = '/de/images/public/frame-imgflap-' + flapBorderColor + '-ho.gif';
				naviContent.style.display = 'block';
			}
			else {                                                                                                 /* link frame image */
				naviFlapImg.src = '/de/images/public/frame-imgflap-' + flapBorderColor + '-li.gif';
				naviContent.style.display = 'none';
			}
		}
	}
}

function toggleFormList(parFormList, parListNum) {
	var FormList                = document.getElementById(parFormList);
	var FormListItems        = FormList.getElementsByTagName('li');

	for (var i = 1; i <= FormListItems.length; i++) {
		var FormListItem          = document.getElementById('FormListItem' + i);
		var FormListItemCont = document.getElementById('FormListItemCont' + i);

		if (FormListItem.blur) { FormListItem.blur(); }

		if (i == parListNum && FormListItemCont.style.display != 'block')
		{
			FormListItems[i-1].style.backgroundImage        = 'url(/de/images/public/icon-formlist-opened.gif)';
			FormListItemCont.style.display                                 = 'block';
		}
		else
		{
			FormListItems[i-1].style.backgroundImage        = "url(/de/images/public/icon-formlist-closed.gif)";
			FormListItemCont.style.display                                 = 'none';
		}
	}
}

function toggleFormList1x1(parFormList, parListNum) {
	var FormList                = document.getElementById(parFormList);
	var FormListItems        = FormList.getElementsByTagName('li');

	for (var i = 1; i <= FormListItems.length; i++) {
		var FormListItem          = document.getElementById('FormListItem' + i);
		var FormListItemCont = document.getElementById('FormListItemCont' + i);

		if (FormListItem.blur) { FormListItem.blur(); }

		if (i == parListNum && FormListItemCont.style.display != 'block')
		{
			FormListItemCont.style.display                                 = 'block';
		}
		else
		{
			FormListItemCont.style.display                                 = 'none';
		}
	}
}


/* - Expandable List - */
function toggleExpList(parExpListID, parExpListLayer, parExpListItem) {
	var ID                                =        document.getElementById(parExpListID);
	var ExpListLayer        =        parExpListID + '-Layer' + parExpListLayer;
	var ChildsCN                =         ID.getElementsByTagName('li');

	var ExpLiItemsCount = 0;

	for (var i = 0; i < ChildsCN.length; i++)
	{
		if (ChildsCN[i].className == ExpListLayer || ChildsCN[i].className == ExpListLayer + ' opened')
		{
			ExpLiItemsCount++;

			var ExpListLayerID                 = ExpListLayer + '-' + ExpLiItemsCount;
			var Content                         = document.getElementById(ExpListLayerID);
			var parentListItem                = Content.parentNode;
			var parentListItemCN        = ExpListLayer;

			if (parExpListItem == ExpLiItemsCount && Content.style.display != 'block')
			{
				Content.style.display                         = 'block';
				parentListItem.className                = parentListItemCN + ' opened';
			}
			else
			{
				Content.style.display                         = 'none';
				parentListItem.className                = parentListItemCN;
			}
		}
	}
}

function getFlap(par) {
	flapNo = par.match(/(\&|\?){1}flap=([0-9]{1})$/);
	if (flapNo != null) {
		toggleFlap(flapNo[2]);
		return true;
	} else {
		return false;
	}
}

function getFlap1(par) {
	flapNo = par.match(/(\&|\?){1}flap=([0-9]{1})$/);
	if (flapNo != null) {
		toggleFlapMCC(flapNo[2],"sonderedition");
		return true;
	} else {
		return false;
	}
}


function getUrl(par) {
	var flapNo = getparametervalue("Url",par);
	if (flapNo != null)
	{
		var protocol= par.match(/(\&|\?){1}protocol=(http|https|ftp)/);

		if (flapNo == "www.travelmoneyonline.americanexpress.com/b2c/default.aspx?r=DE")
		{
			var URL="https://www.travelmoneyonline.americanexpress.com/b2c/Default.aspx?r=DE&f=a2g0G3K4O0w0N1W4n9C9&c=Kunde";
			setUrl(URL);
		}
		else if(flapNo == "web3.hrs.de/web3/") {

			setUrl("http://web3.hrs.de/web3/?clientId=ZGVfX2NpdGliYW5r");
		}
		else if(flapNo == "d169.keyingress.de/i_ce/") {

			setUrl("https://d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank");
		}
		else if(flapNo == "www.airlineplus.net/premium") {

			setUrl("http://www.airlineplus.net/premium-karte-lounge.php");
		}
		else if(flapNo == "netigate.se/") {


			setUrl("https://www.netigate.se/s.asp?s=29513X9261");
		}

		else if(flapNo == "www.urlaubsplus.com/targobank") {

			setUrl("http://www.urlaubsplus.com/targobank");
		}


		else if(flapNo == "www.otto-reisen.de/ottoshopneu/index.aspx") {


			setUrl("https://www.otto-reisen.de/ottoshopneu/index.aspx?CLIENT=24");
		}

		else if(flapNo == "finanzen.net/bankentest2010") {


			setUrl("http://www.finanzen.net/bankentest2010");
		}


		else if(flapNo == "brokerwahl.de") {


			setUrl("http://www.brokerwahl.de");
		}
		else if(flapNo == "avira.com/de/aktion/targobank_premium.html") {


			setUrl("http://www.avira.com/de/aktion/targobank_premium.html");
		}
		else if(flapNo == "avira.com/de/aktion/targobank_suite.html") {


			setUrl("http://www.avira.com/de/aktion/targobank_suite.html");
		}

		else if(flapNo == "www.boerse-berlin.de") {


			setUrl("http://www.boerse-berlin.de");
		}


		else if(flapNo == "www.boerse-duesseldorf.de") {


			setUrl("http://www.boerse-duesseldorf.de");
		}

		else if(flapNo == "www.boerse-frankfurt.de") {


			setUrl("http://www.boerse-frankfurt.de");
		}

		else if(flapNo == "www.scoach.de") {


			setUrl("http://www.scoach.de");
		}

		else if(flapNo == "www.boersenag.de") {


			setUrl("http://www.boersenag.de");
		}

		else if(flapNo == "www.bayerische-boerse.de") {


			setUrl("http://www.bayerische-boerse.de");
		}

		else if(flapNo == "www.boerse-stuttgart.de") {


			setUrl("http://www.boerse-stuttgart.de");
		}

		else if(flapNo == "d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank") {


			setUrl("https://d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank");
		}

		else if(flapNo == "smava.de/partner/534477763") {


			setUrl("http://www.smava.de/partner/534477763");
		}

		else if(flapNo == "affinioninternational.de/TARGOBANK.100.0.html") {


			setUrl("https://www.affinioninternational.de/TARGOBANK.100.0.html");
		}

		else if(flapNo == "gdata.de/targobank") {


			setUrl("http://www.gdata.de/targobank");
		}
		else if(flapNo == "facebook.com") {


			setUrl("http://www.facebook.com");
		}
		else if(flapNo == "starmoney.de/index.php?id=2607&no_cache=1&tx_sfpartnershops_pi1%5Bpartner_id%5D=targobank&tx_sfpartnershops_pi1%5Bc_id%5D=4") {


			setUrl("http://www.starmoney.de/index.php?id=2607&no_cache=1&tx_sfpartnershops_pi1%5Bpartner_id%5D=targobank&tx_sfpartnershops_pi1%5Bc_id%5D=4");
		}
		else if(flapNo == "d264.keyingress.de/?i_survey=29__58b8a07b7dcd3c8c02c1fb6494af44fa&id=targobank") {


			setUrl("https://d264.keyingress.de/?i_survey=29__58b8a07b7dcd3c8c02c1fb6494af44fa&id=targobank");
		}
		else if(flapNo == "n-tv.de/Bankencheck") {


			setUrl("http://www.n-tv.de/Bankencheck");
		}

		else {
			if(protocol != null)
			{
				var URL=protocol[2]+"://"+flapNo;
				setUrl(unescape(URL));
			} else {

				setUrl(unescape(flapNo));

			}
		}
	}
}

function setUrl(URL)
{
	var exturls=new Array();
	var gefunden = 0;
	exturls[0]="http://www.citigroup.com";
	exturls[1]="http://www.citibank.de";
	exturls[2]="http://www.creditmutuel.de";
	exturls[3]="http://www.creditmutuel.fr";
	exturls[4]="https://www.travelmoneyonline.americanexpress.com/b2c/Default.aspx?r=DE&f=a2g0G3K4O0w0N1W4n9C9&c=Kunde";
	exturls[5]="http://www.schuldenhelpline.de";
	exturls[6]="http://web3.hrs.de/web3/?clientId=ZGVfX2NpdGliYW5r";
	exturls[7]="http://www.airlineplus.net/premium-karte-lounge.php";
	exturls[8]="https://www.otto-reisen.de/ottoshopneu/index.aspx?CLIENT=24";
	exturls[9]="https://www.netigate.se/s.asp?s=29513X9261";
	exturls[10]="http://www.citi.com";
	exturls[11]="http://www.finanzen.net/bankentest2010";
	exturls[12]="https://d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank";
	exturls[13]="http://www.brokerwahl.de";
	exturls[14]="http://www.avira.com/de/aktion/targobank_premium.html";
	exturls[15]="http://www.avira.com/de/aktion/targobank_suite.html";
	exturls[16]="http://www.urlaubsplus.com/targobank";
	exturls[17]="http://www.boerse-berlin.de";
	exturls[18]="http://www.boerse-duesseldorf.de";
	exturls[19]="http://www.boerse-frankfurt.de";
	exturls[20]="http://www.scoach.de";
	exturls[21]="http://www.boersenag.de";
	exturls[22]="http://www.bayerische-boerse.de";
	exturls[23]="http://www.boerse-stuttgart.de";
	exturls[24]="http://www.smava.de/partner/534477763";
	exturls[25]="https://www.affinioninternational.de/TARGOBANK.100.0.html";
	exturls[26]="http://www.facebook.com";
	exturls[27]="http://www.gdata.de/targobank";
	exturls[28]="https://d264.keyingress.de/?i_survey=29__58b8a07b7dcd3c8c02c1fb6494af44fa&id=targobank";
	exturls[29]="http://www.n-tv.de/Bankencheck";
	exturls[30]="http://www.starmoney.de/index.php?id=2607&no_cache=1&tx_sfpartnershops_pi1%5Bpartner_id%5D=targobank&tx_sfpartnershops_pi1%5Bc_id%5D=4";
// exturls[4]="https://www.travelmoneyonline.americanexpress.com/b2c/default.aspx?r=DE&f=a2g0G3K4O0w0N1W4n9C9&c=Kunde";

	for(i=0;i<exturls.length;i++)
	{
		if (URL.indexOf("https://www.travelmoneyonline")!=-1 && URL==exturls[i])
		{
			document.getElementById('speedbump').innerHTML = "<p><!--&Uuml;ber diesen Link k&ouml;nnen Sie die angeforderte Seite direkt erreichen: <a href="+URL+">"+URL+"</a>--><span style='padding-left: 480px;'><a href="+URL+"><img src='/de/images/public/btn_weiter-gr.gif' width='90' height='26' alt='weiter'/></a></span></p>"

			document.getElementById('speedbump1').innerHTML = "<a href="+URL+">"+URL+"</a>"

			gefunden = 1;
		}
		else if (URL.indexOf("https://www.netigate.se/")!=-1 && URL==exturls[i])
		{
			document.getElementById('speedbump').innerHTML = "<p><!--&Uuml;ber diesen Link k&ouml;nnen Sie die angeforderte Seite direkt erreichen: <a href="+URL+">"+URL+"</a>--><span style='padding-left: 480px;'><a href="+URL+"><img src='/de/images/public/btn_weiter-gr.gif' width='90' height='26' alt='weiter'/></a></span></p>"

			document.getElementById('speedbump1').innerHTML = "<a href="+URL+">"+URL+"</a>"

			gefunden = 1;
		}
		else if (URL.indexOf("https://www.otto-reisen.de/ottoshopneu/index.aspx")!=-1 && URL==exturls[i])
		{
			document.getElementById('speedbump').innerHTML = "<p><!--&Uuml;ber diesen Link k&ouml;nnen Sie die angeforderte Seite direkt erreichen: <a href="+URL+">"+URL+"</a>--><span style='padding-left: 480px;'><a href="+URL+"><img src='/de/images/public/btn_weiter-gr.gif' width='90' height='26' alt='weiter'/></a></span></p>"

			document.getElementById('speedbump1').innerHTML = "<a href="+URL+">"+URL+"</a>"

			gefunden = 1;
		}
		else
		{

			if (URL==exturls[i])
			{
				document.getElementById('speedbump').innerHTML = "<p><!--&Uuml;ber diesen Link k&ouml;nnen Sie die angeforderte Seite direkt erreichen: <a href="+URL+">"+URL+"</a>--><span style='padding-left: 480px;'><a href="+URL+"><img src='/de/images/public/btn_weiter-gr.gif' width='90' height='26' alt='weiter'/></a></span></p>"

				document.getElementById('speedbump1').innerHTML = "<a href="+URL+">"+URL+"</a>"

				gefunden = 1;
			}
		}
	}

	if(gefunden == 0) {

		if(URL.search(/http/) ==-1) {

			if (URL.search(/ftp/) ==-1) {

				URL = "http://" + URL

			}

		}

		document.getElementById('speedbump').innerHTML = "<p><!--&Uuml;ber diesen Link k&ouml;nnen Sie die angeforderte Seite direkt erreichen: <a href="+URL+">"+URL+"</a>--><span style='padding-left: 480px;'><a href="+URL+"><img src='/de/images/public/btn_weiter-gr.gif' width='90' height='26' alt='weiter'/></a></span></p>"

		document.getElementById('speedbump1').innerHTML = "<a href="+URL+">"+URL+"</a>"

	}
}


//Function for speedbumb_redirect. Delivers the URLs to redirect to.
function getUrlWithoutSpeedbump(par){
	var flapNo = par.match(/(\&|\?){1}Url=(([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/);
	if (flapNo != null)
	{
		var protocol= par.match(/(\&|\?){1}protocol=(http|https|ftp)/);
		if (flapNo[2].indexOf("www.travelmoneyonline")!=-1)
		{
			var URL="https://www.travelmoneyonline.americanexpress.com/b2c/Default.aspx?r=DE&f=a2g0G3K4O0w0N1W4n9C9&c=Kunde";
			return URL;
		}
		else if(flapNo[2].indexOf("web3.hrs.de/web3/")!=-1) {

			var URL="http://web3.hrs.de/web3/?clientId=ZGVfX2NpdGliYW5r";
			return URL;
		}
		else if(flapNo[2].indexOf("d169.keyingress.de/i_ce/")!=-1) {

			var URL="https://d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank";
			return URL;
		}
		else if(flapNo[2].indexOf("www.airlineplus.net/premium")!=-1) {

			var URL="http://www.airlineplus.net/premium-karte-lounge.php";
			return URL;
		}
		else if(flapNo[2].indexOf("netigate.se/")!=-1) {


			var URL="https://www.netigate.se/s.asp?s=29513X9261";
		}

		else if(flapNo[2].indexOf("www.urlaubsplus.com/targobank")!=-1) {

			var URL="http://www.urlaubsplus.com/targobank";
			return URL;
		}


		else if(flapNo[2].indexOf("www.otto-reisen.de/ottoshopneu/index.aspx")!=-1) {


			var URL="https://www.otto-reisen.de/ottoshopneu/index.aspx?CLIENT=24";
			return URL;
		}

		else if(flapNo[2].indexOf("finanzen.net/bankentest2010")!=-1) {


			var URL="http://www.finanzen.net/bankentest2010";
			return URL;
		}


		else if(flapNo[2].indexOf("brokerwahl.de")!=-1) {


			var URL="http://www.brokerwahl.de";
			return URL;
		}
		else if(flapNo[2].indexOf("avira.com/de/aktion/targobank_premium.html")!=-1) {


			var URL="http://www.avira.com/de/aktion/targobank_premium.html";
			return URL;
		}
		else if(flapNo[2].indexOf("avira.com/de/aktion/targobank_suite.html")!=-1) {


			var URL="http://www.avira.com/de/aktion/targobank_suite.html";
			return URL;
		}

		else if(flapNo[2].indexOf("www.boerse-berlin.de")!=-1) {


			var URL="http://www.boerse-berlin.de";
			return URL;
		}


		else if(flapNo[2].indexOf("www.boerse-duesseldorf.de")!=-1) {


			var URL="http://www.boerse-duesseldorf.de";
			return URL;
		}

		else if(flapNo[2].indexOf("www.boerse-frankfurt.de")!=-1) {


			var URL="http://www.boerse-frankfurt.de";
			return URL;
		}

		else if(flapNo[2].indexOf("www.scoach.de")!=-1) {


			var URL="http://www.scoach.de";
			return URL;
		}

		else if(flapNo[2].indexOf("www.boersenag.de")!=-1) {


			var URL="http://www.boersenag.de";
			return URL;
		}

		else if(flapNo[2].indexOf("www.bayerische-boerse.de")!=-1) {


			var URL="http://www.bayerische-boerse.de";
			return URL;
		}

		else if(flapNo[2].indexOf("www.boerse-stuttgart.de")!=-1) {


			var URL="http://www.boerse-stuttgart.de";
			return URL;
		}

		else if(flapNo[2].indexOf("d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank")!=-1) {


			var URL="https://d169.keyingress.de/i_ce/?i=119_4e579fac80fb6a189071383a664df51d&id=targobank";
			return URL;
		}

		else if(flapNo[2].indexOf("smava.de/partner/534477763")!=-1) {


			var URL="http://www.smava.de/partner/534477763";
			return URL;
		}

		else if(flapNo[2].indexOf("affinioninternational.de/TARGOBANK.100.0.html")!=-1) {


			var URL="https://www.affinioninternational.de/TARGOBANK.100.0.html";
			return URL;
		}

		else if(flapNo[2].indexOf("facebook.com")!=-1) {


			var URL="http://www.facebook.com";
			return URL;
		}
		
		else if(flapNo[2].indexOf("n-tv.de/Bankencheck")!=-1) {


			var URL="http://www.n-tv.de/Bankencheck";
			return URL;
		}

		else {
			if(protocol != null)
			{
				var URL=protocol[2]+"://"+flapNo[2];
				var URL=URL;
				return URL;
			}
		}
	}
}


function getFile(pURL,pFunc) {

	if (window.XMLHttpRequest) { // code for Mozilla, Safari, etc
		xmlhttp=new XMLHttpRequest();
		eval('xmlhttp.onreadystatechange='+pFunc+';');
		xmlhttp.open("GET", pURL, true);
		xmlhttp.send(null);
	} else if (window.ActiveXObject) { //IE
		xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
		if (xmlhttp) {
			eval('xmlhttp.onreadystatechange='+pFunc+';');
			xmlhttp.open('GET', pURL, false);
			xmlhttp.send();
		}
	}

}

function getExternalURL() {

	if (xmlhttp.readyState==4) {

		if (xmlhttp.status==200)
		{
			var tmpArr=xmlhttp.responseText.split('\n');
			var tmp;
			for (var idx=0;idx<tmpArr.length;idx++)
			{
				tmpArr[idx] = tmpArr[idx].replace(/(\s*)/gi,"");
				tmp=tmpArr[idx].split('=');

				if(tmp[0] == externalURL)
				{
					document.getElementById('speedbump').innerHTML="<p>&Uuml;ber diesen Link k&ouml;nnen Sie die angeforderte Seite direkt erreichen: <a href="+tmp[1]+">"+tmp[1]+"</a></p>"

				}
			}
		}
	}
}

function openPopWindow(myURL, params, windowName){
	windowName = ((typeof(windowName) == 'undefined') || (params.length == 0)) ? 'newWindow' : windowName;
	if((typeof(params) == 'undefined') || (params.length == 0)){
		new_window = window.open(myURL, windowName);
	}else{
		new_window = window.open(myURL, windowName, params);
	}
	new_window.focus();
}

function setCBoxInput(defaultVal, fieldVal, elemID) {
	var elemVal = document.getElementById(elemID);
	if (fieldVal == defaultVal) {
		elemVal.value = '';

	}
	else if (fieldVal == '') {

		elemVal.value = defaultVal;
	}
	else{
		//alert("OK");
		//window.location="/de/service/filialsuche.aspx?WID_SRCH_ADR="+fieldVal;

	}
}

function contentLayer(divID, action, topposition) {
	var divLayer = document.getElementById(divID);
	if (action == 'show') {
		divLayer.style.display         = 'block';
		divLayer.style.top                 = topposition;
	} else {
		divLayer.style.display = 'none';
	}

}

function toggleHomeContent(content, action) {

	var contentBoxDef         = document.getElementById('page_content_default');

	for (var i = 1; i <= 5; i++) {
		var navImg                        = document.getElementById('nav-img-' + i);

		var contentBox                 = document.getElementById('page_content_' + i);

		if (i == content && action == 'show') {
			contentBox.style.display        =        'block';
			contentBoxDef.style.display        =        'none';
			navImg.src                                        =        'images/home/nav-item-' + i + '-hov.jpg';

		} else {
			contentBox.style.display        =        'none';
			navImg.src                                        =        'images/home/nav-item-' + i + '.jpg';

		}

		if (content == 'default') {
			contentBoxDef.style.display        =        'block';
		}
	}
}

function getparametervalue(nameofparameter, url){

	url = decodeURIComponent(url).replace(/<(?:.|\n)*?>/gm, '');

	nameofparameter = nameofparameter.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+nameofparameter+"=([^&#]*)";
	//var regexS = "[\\?&]"+nameofparameter+"=([^#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(url);
	if( results == null )
		return "";
	else
		return results[1];

}

function hilightHeader(itemToShow) {

	var toolboxIcon1 = document.getElementById('Dispo');
	var toolboxIcon2 = document.getElementById('Förder');


	if ('Dispo' == itemToShow) {

		toolboxIcon1.className = "groupslink";
		toolboxIcon2.className = "groupslink1";
		toolboxIcon1.className = "active";


	}
	else {

		toolboxIcon1.className = "groupslink1";
		toolboxIcon2.className = "groupslink";
		toolboxIcon2.className = "active";
	}

}

function toggleSubFlap(subFlapToShow, SubFlapsTotal) {
	for (var i = 1; i <= SubFlapsTotal; i++) {
		var subFlap = document.getElementById("pb_content_subflap" + i);
		(i == subFlapToShow) ? subFlap.style.display = "block" :  subFlap.style.display = "none";
	}
}

function toggleSubContent(contentToShow) {
	var divItems = document.getElementsByTagName('div');
	var divItemActive = document.getElementById('pb_subcontent_' + contentToShow);
	if (divItems && divItems.length) {
		for (var i = 0; i < divItems.length; i++) {

			if (divItems[i].className == 'pb_subcontent-active') divItems[i].className = 'pb_subcontent';
		}
	}
	if (divItemActive && divItemActive.style) divItemActive.className = 'pb_subcontent-active';
}

function openPopWindowService(myURL, params, windowName){
	windowName = ((typeof(windowName) == 'undefined') || (params.length == 0)) ? 'newWindow' : windowName;
	if((typeof(params) == 'undefined') || (params.length == 0)){
		new_window = window.open(myURL, windowName);
	}else{
		new_window = window.open(myURL, windowName, params);
	}

}

function setCBoxInput1(defaultVal, fieldVal, elemID) {
	var elemVal = document.getElementById(elemID);
	if (fieldVal == defaultVal) {
		elemVal.value = '';

	}
	else if (fieldVal == '') {

		elemVal.value = defaultVal;
	}
	else{
		//alert("OK");
		//window.location="/de/service/filialsuche.aspx?WID_SRCH_ADR="+fieldVal;

	}
}


function setCBoxInput2(defaultVal, fieldVal, elemID) {
	var elemVal = document.getElementById(elemID);

	if (fieldVal == defaultVal) {
		elemVal.value = '';

	}
	else if (fieldVal == '') {

		elemVal.value = defaultVal;
	}
	else{
		openPopWindow('/de/service/popup_service_mobile-kundenberatung.html'+ '?txtpostcode='+ fieldVal, 'width=630, height=670, resizable=yes, location=yes, scrollbars=yes' , 'TARGOPOPUP');
		elemVal.value = defaultVal;

	}
}

function openPopWindowWithReferer(url,optionPopup,namePopup) {

	var urlQuery=url+'?recommend='+document.location.href;
	openPopWindow(urlQuery, optionPopup , namePopup);


}


function getSubFlap(par) {
	var subFlapNo = par.match(/^(\&|\?){1}subflap=([\d]{1})$/);
	if (subFlapNo != null) {
		toggleSubContent(subFlapNo[2]);
		return true;
	}
	return false;
}

/* JQuery functions */
$(document).ready( function() {

	/* show/hide contents on faq pages */
	$("a.faqContentLink").bind("click", function() {
		var faqContentLink = $(this),
			faqContent        = $(this).next();

		if(faqContent.css("display") == "none") {
			faqContentLink.addClass("opened");
			faqContent.css("display", "block");
		} else {
			faqContentLink.removeClass("opened");
			faqContent.css("display", "none");
		}
	});

});


/* Alles zum Antrag - Ausklapper   */

function toggleTheView(theView, cat) {
	if(theView==1) {
		if ($('#tagesgeldOnlineCon').is(':visible')) {
			$('#tagesgeldOnlineCon').slideUp(function () {
				$('#tagesgeldOnlineHead').css("backgroundImage","url('/de/images/bg-header-online-"+cat+"-closed.gif')");
			});
		} else {
			$('#tagesgeldOnlineHead').css("backgroundImage","url('/de/images/bg-header-online-"+cat+"-open.gif')");
			$('#telefonFilialeHead').css("backgroundImage","url('/de/images/bg-header-filiale-"+cat+"-closed.gif')");
			$('#tagesgeldOnlineCon').slideDown();
			$('#telefonFilialeCon').hide();
		}
	}
	if(theView==2) {
		if ($('#telefonFilialeCon').is(':visible')) {
			$('#telefonFilialeCon').slideUp(function () {
				$('#telefonFilialeHead').css("backgroundImage","url('/de/images/bg-header-filiale-"+cat+"-closed.gif')");
			});
		} else {
			$('#telefonFilialeHead').css("backgroundImage","url('/de/images/bg-header-filiale-"+cat+"-open.gif')");
			$('#tagesgeldOnlineHead').css("backgroundImage","url('/de/images/bg-header-online-"+cat+"-closed.gif')");
			$('#telefonFilialeCon').slideDown();
			$('#tagesgeldOnlineCon').hide();
		}
	}
	if(theView==3) {
		if ($('#weitereinfosCon').is(':visible')) {
			$('#weitereinfosCon').slideUp(function () {
				$('#weitereinfosOnlineHead').css("backgroundImage","url('/de/images/bg-header-online-"+cat+"-closed.gif')");
			});
		} else {
			$('#weitereinfosOnlineHead').css("backgroundImage","url('/de/images/bg-header-online-"+cat+"-open.gif')");
			$('#weitereinfosCon').slideDown();
			$('#weitereinfosOnlineCon').hide();
		}
	}
}

function toggleHorizontalFlap(selectedhFlap, cat) {
	var arrFlaps = (typeof(objPage) == 'undefined') ? ['online', 'filiale', 'weitereinfos'] : objPage.hFlaps;

	j = arrFlaps.length;

	for(var i = 0; i < j; i++) {
		if($("#HorizontalFlap_" + arrFlaps[i] + "_Con").is(':visible')) {
			$("#HorizontalFlap_" + arrFlaps[i] + "_Con").slideUp();
		}
		$("#HorizontalFlap_" + arrFlaps[i] + "_Head").css("backgroundImage", "url('/de/images/bg-header-" + arrFlaps[i] + "-" + cat + "-closed.gif')");
	}

	if(selectedhFlap != currenthFlap) {
		$('#HorizontalFlap_' + selectedhFlap + '_Head').show(
			function () {
				$("#HorizontalFlap_" + selectedhFlap + "_Head").css("backgroundImage", "url('/de/images/bg-header-" + selectedhFlap + "-" + cat + "-open.gif')");
				$('#HorizontalFlap_' + selectedhFlap + '_Con').slideDown();
			}
		);
		currenthFlap = selectedhFlap;
	} else {
		currenthFlap = undefined;
	}
} var currenthFlap;

/* Start: iFrame - Homepage */

if (window.name && String(window.name).indexOf('tab_lb_iframe') > -1) {
	var css_file = document.createElement('link');
	css_file.rel = 'stylesheet';
	css_file.type = 'text/css';
	css_file.href= '/de/cssnv/iframe_app.css';
	document.getElementsByTagName('head')[0].appendChild(css_file);
}

/* Ende: iFrame - Homepage */
