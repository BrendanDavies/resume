/**
 * Created by Brendan on 1/18/2016.
 */
$(document).ready(function(){
    "use strict";

    $('.nav a:not(.dropdown-toggle)').on('click', function(){
        //$('nav.navbar button.navbar-toggle').click();
        $(".navbar-collapse").collapse('hide');
    });
});