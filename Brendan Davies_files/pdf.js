/**
 * Created by Brendan on 2/21/2016.
 */
var pdf = (function makePDF(){
    function formatPage(){
        $("nav").remove();
        $("#feedly-mini").remove();
        $("body").css("padding-top","0px");
    }

    //function makePDF(){
    //    var doc = new jsPDF();
    //
    //// We'll make our own renderer to skip this editor
    //        var specialElementHandlers = {
    //            '#editor': function(element, renderer){
    //                return true;
    //            }
    //        };
    //
    //// All units are in the set measurement for the document
    //// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    //        doc.fromHTML($('body').get(0), 15, 15, {
    //            'width': 1024,
    //            'elementHandlers': specialElementHandlers
    //        });
    //}
    //
    return {
        formatPage: formatPage
    }
})();