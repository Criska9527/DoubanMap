//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("ga",{months:"Ean\u00e1ir;Feabhra;M\u00e1rta;Aibre\u00e1n;Bealtaine;M\u00e9itheamh;I\u00fail;L\u00fanasa;Me\u00e1n F\u00f3mhair;Deaireadh F\u00f3mhair;Samhain;Nollaig".split(";"),monthsShort:"Ean\u00e1 Feab M\u00e1rt Aibr Beal M\u00e9it I\u00fail L\u00fana Me\u00e1n Deai Samh Noll".split(" "),
monthsParseExact:!0,weekdays:"D\u00e9 Domhnaigh;D\u00e9 Luain;D\u00e9 M\u00e1irt;D\u00e9 C\u00e9adaoin;D\u00e9ardaoin;D\u00e9 hAoine;D\u00e9 Satharn".split(";"),weekdaysShort:"Dom Lua M\u00e1i C\u00e9a D\u00e9a hAo Sat".split(" "),weekdaysMin:"Do Lu M\u00e1 Ce D\u00e9 hA Sa".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Inniu ag] LT",nextDay:"[Am\u00e1rach ag] LT",nextWeek:"dddd [ag] LT",
lastDay:"[Inn\u00e9 aig] LT",lastWeek:"dddd [seo caite] [ag] LT",sameElse:"L"},relativeTime:{future:"i %s",past:"%s \u00f3 shin",s:"c\u00fapla soicind",ss:"%d soicind",m:"n\u00f3im\u00e9ad",mm:"%d n\u00f3im\u00e9ad",h:"uair an chloig",hh:"%d uair an chloig",d:"l\u00e1",dd:"%d l\u00e1",M:"m\u00ed",MM:"%d m\u00ed",y:"bliain",yy:"%d bliain"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(a){return a+(1===a?"d":2===a%10?"na":"mh")},week:{dow:1,doy:4}})});