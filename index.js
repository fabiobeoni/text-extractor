var
    request = require('request'),
    cheerio = require('cheerio');

function parse(url) {
    request(url, function (error, response, body) {
        var $ = cheerio.load(body);
        var $textNodes = $("*:not(title):not(head):not(script):not(style):not(frame):not(iframe)").contents().filter(function () {
            return (this.nodeType === 3);
        });
        // For testing
        $textNodes.each(function (i,item) {
            console.log($(this).text());
        });
    })
}

parse('http://www.fao.org');
