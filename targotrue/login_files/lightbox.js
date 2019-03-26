/*
 * FBC - LightBox
 */

    function OpenLB(idLb, idCont) {
        OpenLightBox(idLb);
        $('#' + idCont).focus();
        return false;
    }
    //Fermeture de la ligthbox:
    function CloseLB(idLb, callback) {
        CloseLightBox(idLb, callback);
        return false;
    }

	function OpenLightBox(idDiv, callback)
	{
		//Déclaration de fonctions:
		// Fournir hauteur et largeur pour le fond désactivé
		var redimBg = function(){
			$('#bg_modal_name').css({'height' : $(document).height(), 'width' : $(document).width()});
		};
		//	Positionner la fenêtre modale
		var reTopModal = function(){
			$('#' + idDiv).css({'top': $(this).scrollTop() + $(window).height()/2, 'left':$(this).scrollLeft() + $(window).width()/2});
		};
		//Faire apparaitre la fenêtre modale:
		$('#' + idDiv ).fadeIn(function(){
			if(callback != undefined) callback();
		});
			
		//Récupération du margin, qui permettra de centrer la fenêtre
		var margTop = ($('#' + idDiv).height()) / 2;
		var margLeft = ($('#' + idDiv).width()) / 2;
		//On affecte le margin
		$('#' + idDiv).css({
			'margin-top' : -margTop,
			'margin-left' : -margLeft
		});
		
		//Effet fade-in du fond opaque
		//$('body').append('<div id="bg_modal_name" class="blocfondmodal"></div>'); //Ajout du fond opaque noir
		$('body').append('<div id="bg_modal_name" class="blocfondmodal bg-'+ idDiv +'"></div>');
		//Apparition du fond - .css({'filter' : 'alpha(opacity=60)'}) pour corriger les bogues de IE
		$('div.blocfondmodal').css({'filter' : 'alpha(opacity=60)'}).fadeIn();
		
		//boxModel false pour IE avec le doctype html 4.01 transitional
		if (!jQuery.support.boxModel){
			redimBg();
			reTopModal(idDiv);
			
			$(window).resize(function(){
				redimBg();
				reTopModal(idDiv);
			});

			$(window).scroll(function() {
		redimBg();
		reTopModal();
			});
		};


		return false;
	}
	function CloseLightBox(idLightBox, callback)
	{
		$('#bg_modal_name.bg-' + idLightBox +', #' + idLightBox).fadeOut(function() {
			$('#bg_modal_name.bg-'+idLightBox).remove();
			if($(this).is('#bg_modal_name.bg-'+idLightBox) && callback != undefined)
				callback();
		});
	}
