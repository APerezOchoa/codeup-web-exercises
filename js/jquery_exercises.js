"use strict";

$(function() {
    //////////////////Code from selectors exercise////////////////
    // $("li").css("font-size", "20px")
    // $("h1, p, li").css("background-color", "yellow")
    // alert($(".heading").html())
    /////////////////////////////////////////////////////////////

    $('h1').click(function(){
        $(this).css("background", "yellow");
    });

    $('p').dblclick(function(){
        $(this).css("font-size", "18px");
    });

    $('li').hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });
});