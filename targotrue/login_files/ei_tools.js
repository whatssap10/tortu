/*ce fichier est destiné à recevoir des fonctions statiques utilitaires : pas de variables globales, pas de création d'objet */

//fonction à appeler à l'ouverture/fermeture d'une lightbox pour empêcher le scroll en arrière plan.
function ei_bodynoscroll(action) {
	//fonction pour récupérer un nom de classe (fictif) qui sert à savoir combien de lightbox sont affichées
	function GetNoScroll(iterator){
		if(iterator == 0)
			return "ei_noscroll";
		else
			return "ei_noscroll" + iterator;
	}

	var i = 0;
	while($("html").hasClass(GetNoScroll(i)) ){
		i++; //on incrémente pour chaque lb affichée
	}

    if (action) {
        $("html").addClass(GetNoScroll(i));
        $("body").addClass(GetNoScroll(i));
		if(i == 0){
			//première lb, on met en place le blocage du touchmove
			$("body").on("touchmove.noscroll", function (e) {
				//on bloque le touchmove : touchmove.noscroll -> on identifie l'événement touchmove avec ".noscroll" pour pouvoir supprimer celui-ci et uniquement celui-ci par la suite.
				e.preventDefault();
				e.stopPropagation();
			});
		}
		
    } else {
		i--;
		
        $("html").removeClass(GetNoScroll(i));
        $("body").removeClass(GetNoScroll(i));
		if(i == 0){
			//fermeture de la seule lb encore affichée, on enlève le blocage du touchmove
			$("body").off('touchmove.noscroll');
		}
    }
}

//fonction à appeler pour centrer une lightbox
function ei_centerbox(idLb) {

	var lastPos;
	if (!$("html").hasClass("ei_noscroll1")) {
		$("body").off("touchstart.noscroll");
		 $("body").on("touchstart.noscroll", function (e) {
			lastPos = e.originalEvent.touches[0].clientY; //initialisation de la position de départ
		 });
		 $("body").off("touchmove.noscroll");
		 $("body").on("touchmove.noscroll",  function (e) {
			var currentY = e.originalEvent.touches[0].clientY; //position courante du doigt
			if($(e.target).parents(".ei_blocmodal_env").length > 0 || $(e.target).hasClass("ei_blocmodal_env")){	
				var target = $(e.target).parents(".ei_blocmodal_env")[0];		//élément qui est en train d'essayer de scroller
				if (target === undefined)
					target = e.target;
				var bOk = false;	
				if(lastPos > currentY){		
					//on essaie d'aller vers le bas
					if(target.scrollHeight - (target.scrollTop + target.clientHeight) > 0) // on n'est pas déjà en bas (scrollHeight : taille totale de la lightbox, scrollTop : longueur qui a déjà été scrollée, clientHeight : longueur visible de la lightbox)
						bOk = true; // on ne bloque pas
				}else if(lastPos < currentY ){ 
					//on essaie d'aller vers le haut
					if(target.scrollTop != 0) //on n'est pas déjà en haut
						bOk = true; // on ne bloque pas
				}else{
					bOk = true;
				}
				lastPos = currentY;	 //sauvegarde de la position
				if (bOk){
					return;}
			}
			e.preventDefault();
			e.stopPropagation();
		 });
	}
	 
 var blocmod = $('#'+idLb).find(".ei_blocmodal");
	
	// détermine s'il faut redimensionner ou non la lightbox
    var bShouldResize = false;
    if (blocmod.attr("style") == undefined)
        bShouldResize = true;
    else if (blocmod.attr("style").indexOf("width") < 0)
        bShouldResize = true;
		
	try{
		if (bShouldResize) {
        //calcul de la largeur idéale de la lightbox
			blocmod.css("width","0px");
			var pad = blocmod.css("padding-right");
			if(pad != undefined && pad != null && pad != "")
				blocmod.css("width","calc("+blocmod[0].scrollWidth+"px + "+ pad +")"); 
			else
				blocmod.css("width",blocmod[0].scrollWidth+"px");
		}	
		
		if (blocmod.css("height").replace("px","") >= $(window).height()) {
			blocmod.css("top", "0"); //si la lightbox déborde de l'écran, on ne la décale pas
			$('#'+idLb).scrollTop(0);
		}else{
			blocmod.css("top", "calc(50% - ("+blocmod.css("height")+"/2))"); //sinon on centre (50% - demi taille de la lb)
		}	
				
	}catch(e){}
}