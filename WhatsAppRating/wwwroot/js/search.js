$(function () {
    $("#search_input").keyup(async e => {
        const query = $("#search_input").val();
        console.log(query);
        const response = await fetch('Ratings/Search?query=' + query);
        const j = await response.json();
        return j;
    });
});