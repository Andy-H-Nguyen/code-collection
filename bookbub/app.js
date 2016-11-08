var fs = require('fs');


var keywordDictionary = {};

/* Reads into hash array
 * keywordDictionary.(:keyword).(:genre).(:value);
 */
function readKeywordCSV() {
    // CSV data
    var fileContents = fs.readFileSync('./test-data/sample_genre_keyword_value.csv');
    var lines = fileContents.toString().split('\n');
    
    // Remove column header
    lines.splice(0,1);
    
    // Variables in loop
    var line;
    var genreName;
    var genreKeyword;
    var genreValue;

    for (var i = 0; i < lines.length; i++) {
        genreName = lines[i].toString().split(',')[0].trim();
        genreKeyword = lines[i].toString().split(',')[1].trim();
        genreValue = lines[i].toString().split(',')[2].trim();
        
        if (!keywordDictionary[genreKeyword]) {
            keywordDictionary[genreKeyword] = {};
        }
        
        if (!keywordDictionary[genreKeyword][genreName]) {
            keywordDictionary[genreKeyword][genreName] = {};
        }
        
        keywordDictionary[genreKeyword][genreName] = genreValue;
    }
    console.log(keywordDictionary);
}

function classifyJSON() {
    var json = JSON.parse(fs.readFileSync('./test-data/sample_genre_keyword_value.json', 'utf8'));

}

readKeywordCSV();