/**
 * TARGOBANK Suche
 */

(function ($) {

    $(function () {
        $('#e_search form').bind('submit', function (e) {

            var $input = $(this).find('#recherche'),
                value = $input.val();

            if ((value.length === 6 && value.match(/[0-9]/g)) ||
                (value.length === 12 && isNaN(value.substring(0, 2)) && new RegExp('[0-9]{5,}').test(value) )) {
                e.preventDefault();
                location.href = '/de/idms_vitrine.html?ciwi=CIWI0238&SEARCH_VALUE=' + value;
            }
            if (value.length === 5 && !isNaN(value)) {
                if ($input.popover) {
                    $input.popover('destroy');
                }
                e.preventDefault();
                TAB.Lightbox.open('/de/service/suchen-und-finden/SearchList.aspx?loca=' + value + '&type=branch&sub=true&adv=', 800, 500, 'iframe');
            }

        });
    });

})(window.jQuery);