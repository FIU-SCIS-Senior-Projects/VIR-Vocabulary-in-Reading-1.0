//Angular Services

/*
High = blue
Middle = pink
low = red
AWL = green
 */

// Service for K1 aka High Frequency words
app.factory('k1', ['$http',function($http){
    var o = {
        words: [],
        textWords: [{words: '', color: ''}],
        wordCount: 0
    };

    o.getAll = function() { //Querying the backend for all k1 words using the index route
        return $http.get('/k1').success(function(data){ 
            angular.copy(data, o.words) //Deep copy of returned data to keep the $scope data updated
        });
    };
    o.create = function(k1) {
        return $http.post('/k1', k1).success(function(data) {
            o.words.push(data);
        });
    };


    // Counts amount of K1/High-Frequency words in the text input by the user
    o.countHighFreq = function(words) {
        o.wordCount = 0;
        o.textWords = [];
        console.log("Scanning text and comparing with K1");
        for( var i = 0; i < o.words.length; i++ ){ // Array holding all high freq words
            for( var j = 0; j < words.length; j++ ){ // Array holding text inputted by user
                if(o.words[i].word === words[j]) {
                    o.wordCount++;
                    o.textWords.push({words: o.words[i].word, color: 'high'});
                }
            }
        }
    };

    return o;
}]);

// Service for K2 aka Medium Frequency words
app.factory('k2', ['$http',function($http){
    var o = {
        words: [],
        textWords: [{words: '', color: ''}],
        wordCount: 0
    };
    o.getAll = function() { //Querying the backend for all k2 words using the index route
        return $http.get('/k2').success(function(data){ 
            angular.copy(data, o.words) //Deep copy of returned data to keep the $scope data updated
        });
    };
    o.create = function(k2) {
        return $http.post('/k2', k2).success(function(data) {
            o.words.push(data);
        });
    };


    // Counts amount of K2/Medium-Frequency words in the text input by the user
    o.countMedFreq = function(words) {
        o.wordCount = 0;
        o.textWords = [{words: '', color: ''}];
        console.log("Scanning text and comparing with K2");
        for( var i = 0; i < o.words.length; i++ ){ // Array holding all medium freq words
            for( var j = 0; j < words.length; j++ ){ // Array holding text inputted by user
                if(o.words[i].word === words[j]) {
                    o.wordCount++;
                    o.textWords.push({words: o.words[i].word, color: 'med'});
                }
            }
        }
    };

    return o;
}]);

// Service for Offlist aka Low Frequency words
app.factory('offlist', ['$http',function($http){
    var o = {
        words: [],
        textWords: [{words: '', color: ''}],
        wordCount: 0
    };
    o.getAll = function() { //Querying the backend for all offlist words using the index route
        return $http.get('/offlist').success(function(data){ 
            angular.copy(data, o.words) //Deep copy of returned data to keep the $scope data updated
        });
    };
    o.create = function(offlist) {
        return $http.post('/offlist', offlist).success(function(data) {
            o.words.push(data);
        });
    };

    o.countLowFreq = function(words) {
        o.wordCount = 0;
        o.textWords = [];
        console.log("Scanning text and comparing with Offlist");
        for( var i = 0; i < o.words.length; i++ ){ // Array holding all low freq words
            for( var j = 0; j < words.length; j++ ){ // Array holding text inputted by user
                if(o.words[i].word === words[j]) {
                    o.wordCount++;
                    o.textWords.push({words: o.words[i].word, color: 'low'});
                }
            }
        }
    };
    return o;
}]);

// Service for AWL
app.factory('awl', ['$http',function($http){
    var o = {
        words: [],
        textWords:[{words: '', color: ''}],
        wordCount: 0     
    };
    o.getAll = function() { //Querying the backend for all awl words using the index route
        return $http.get('/awl').success(function(data){ 
            angular.copy(data, o.words) //Deep copy of returned data to keep the $scope data updated
        });
    };
    o.create = function(awl) {
        return $http.post('/awl', awl).success(function(data) {
            o.words.push(data);
        });
    };

    o.countAWLFreq = function(words) {
        o.wordCount = 0;
        o.textWords = [];
        console.log("Scanning text and comparing with AWL");
        for( var i = 0; i < o.words.length; i++ ){ // Array holding all awl words
            for( var j = 0; j < words.length; j++ ){ // Array holding text inputted by user
                console.log(o.words[i].word);
                if(o.words[i].word === words[j]) {
                    o.wordCount++;
                    o.textWords.push({words: o.words[i].word, color: 'awl'});
                }
            }
        }
    };
    return o;
}]);

// Service for Enhanced Text
app.factory('enhanced', ['$http',function($http){
    var o = {
        textWords:[{words: '', color: ''}],
        wordCount: 0   
    };

    o.setEnhanced = function(words) {
        o.wordCount = 0;
        o.textWords = [];

        for( var j = 0; j < words.length; j++ ){ // Array holding text inputted by user
            o.wordCount++;
            o.textWords.push({words: words[j], color: words[j].color});               
        }
        
        console.log("enhanced text word count:" + o.wordCount);
    };

    return o;
}]);
