$(function () {
    $("body").ready(async e => {
        const query = $("#search_input").val();
        const response = await fetch('Ratings/Search?query=' + query);
        const items = await response.json();
        if (items == null) {
            return;
        }

        const template = $("#template").html();
        let results = '';
        for (item in items) {
            let row = template;
            for (key in items[item]) {
                if (items[item][key] == null) {
                    row = row.replaceAll('{' + key + '}', "");
                } else {
                    row = row.replaceAll('{' + key + '}', items[item][key]);
                }
                row = row.replaceAll('{' + key + "Key" + '}', key);
                row = row.replaceAll('%7B' + key + '%7D', items[item][key]);
                row = row.replaceAll('%7B' + key + "Key" + '%7D', key);
            }
            results += row;
        }

        $("#accordionFlush").html(results);
    });

    $("#search_input").on('keypress keyup keydown bind' ,async e => {
        const query = $("#search_input").val();
        const response = await fetch('Ratings/Search?query=' + query);
        const items = await response.json();
        if (items == null) {
            return;
        }

        const template = $("#template").html();
        let results = '';
        for (item in items) {
            let row = template;
            for (key in items[item]) {
                if (items[item][key] == null) {
                    row = row.replaceAll('{' + key + '}', "");
                } else {
                    if (key == "time") {
                        row = row.replaceAll('{' + key + '}', items[item][key].substr(0, 10) + " " + items[item][key].substr(11,5));
                    } else {
                        row = row.replaceAll('{' + key + '}', items[item][key]);
                    }
                }
                row = row.replaceAll('{' + key + "Key" + '}', key);
                row = row.replaceAll('%7B' + key + '%7D', items[item][key]);
                row = row.replaceAll('%7B' + key + "Key" + '%7D', key);
            }
            results += row;
        }

        $("#accordionFlush").html(results);
    });
});