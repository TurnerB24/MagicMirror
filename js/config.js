// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Baarn,Netherlands',
    'units':'metric',
    'lang':lang
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

// compliments:
var morning = [
            'Good morning, handsome!',
            'Let\'s go! Get up!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Working hard or hardly working?,
            'How\'s your day been so far?',
            'Looking good today!'
        ];
       
var evening = [
            'How was work?',
            'Take a load off!',
            'Whatcha got planned?'
        ];
