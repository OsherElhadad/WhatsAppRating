﻿$(function () {
    $("#search_input").keyup(async e => {
        const query = $("#search_input").val();
        var response = await fetch("Ratings/Search?query=" + query);
        var json = await response.json();
        console.log(json);
    });
});