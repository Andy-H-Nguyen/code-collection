var fs = require('fs');

var Classifier = function() {

    var keywordDictionary = {};
    var titlePointDictionary ={};
    
    /* Reads into hash array of the form:
     * keywordDictionary.(:keyword).(:genre).(:value);
     */
    function readKeywordCSV() {
        // CSV data
        var fileContents = fs.readFileSync('./test-data/sample_genre_keyword_value.csv');
        var lines = fileContents.toString().split('\n');
        
        // Remove column header
        lines.splice(0,1);
        
        // Variables in loop
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
    }
    
    /** 
     * Reads into hash array of the form:
     * titlePointDictionary.(:title).(:genre).(:value);
     */
    function classifyJSON() {
        var json = JSON.parse(fs.readFileSync('./test-data/sample_book_json.txt', 'utf8'));
        
        // Variables in loop
        var genreValue;
        
        for (var i=0; i<json.length; i++) {
            if(!titlePointDictionary[json[i].title]) {
                titlePointDictionary[json[i].title] = {};
            }
                
            Object.keys(keywordDictionary).forEach(function (keyword) {
                Object.keys(keywordDictionary[keyword]).forEach(function (genre) {
                    genreValue = keywordDictionary[keyword][genre] 
                               * countFrequency(json[i].description.toLowerCase(), keyword.toLowerCase());
                    
                    if (!titlePointDictionary[json[i].title][genre] && genreValue != 0) {
                        titlePointDictionary[json[i].title][genre] = 0;
                    }
                    
                    if (genreValue != 0) {
                        console.log(keyword + ":" + countFrequency(json[i].description, keyword))
                        titlePointDictionary[json[i].title][genre] += genreValue;
                    }
                });
            });
        }
    }
    
    /**
     * Returns the result of the classification
     */
    this.getResults = function() {
        readKeywordCSV();
        classifyJSON();
        return titlePointDictionary;   
    }
    
    return this;
}

/** Returns frequency of word in str
 */
function countFrequency(str, word) {
    return str.split(word).length - 1;
}

var c = new Classifier();
console.log(c.getResults());
