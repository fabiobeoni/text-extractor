var
    request = require('request'),
    cheerio = require('cheerio');

var textCache = [];

function makeRequest(url,skipTextDuplicates){

    request(url, function (error, response, body) {
        var $ = cheerio.load(body);
        var $textNodes = $("*:not(title):not(head):not(script):not(style):not(frame):not(iframe)").contents().filter(function () {
            return (this.nodeType === 3);
        });
        // For testing
        $textNodes.each(function () {
            var text = $(this).text();

            //skip empty nodes
            if(text.trim()!==''){
                var indexKey = null;

                if(skipTextDuplicates){
                    //creates a key from text
                    indexKey = text.toLowerCase().trim().split(' ').join('_');

                    //add new unique entries, and prints them
                    if(textCache.indexOf(indexKey)==-1){
                        textCache.push(indexKey);
                        console.log(url + '|#|'+ text.trim());
                    }
                }
                else
                    console.log(url + ';'+ text.trim());
            }
        });
    })
}

function extractURLs(list) {
    for(var i in list)
        makeRequest(list[i],true);
}

extractURLs([
    'http://hqlqamoodle1.hq.un.fao.org/',
    'http://hqlqamoodle1.hq.un.fao.org/course/',
    'http://hqlqamoodle1.hq.un.fao.org/mod/page/view.php?id=120',
    'http://hqlqamoodle1.hq.un.fao.org/mod/page/view.php?id=116',
    'http://hqlqamoodle1.hq.un.fao.org/login/index.php',
    'http://hqlqamoodle1.hq.un.fao.org/mod/page/view.php?id=86',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=4',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=14',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=38',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=36',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=34',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=32',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=31',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=29',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=28',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=81',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=27',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=25',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=9',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=24',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=22',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=21',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=17',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=16',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=39',
    'http://hqlqamoodle1.hq.un.fao.org/course/index.php?categoryid=82',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=154',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=131',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=152',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=241',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=134',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=132',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=136',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=138',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=139',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=141',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=327',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=142',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=143',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=178',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=184',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=182',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=187',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=307',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=194',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=192',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=191',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=189',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=329',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=240',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=155',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=157',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=158',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=160',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=161',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=162',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=164',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=166',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=297',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=170',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=169',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=167',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=172',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=300',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=299',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=148',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=324',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=302',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=276',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=198',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=196',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=176',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=175',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=173',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=180',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=181',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=185',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=185',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=188',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=325',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=301',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=204',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=203',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=202',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=201',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=150',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=199',
    'http://hqlqamoodle1.hq.un.fao.org/course/view.php?id=330'
]);
