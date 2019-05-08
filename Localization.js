
var currentContent;
var currentCode;



function getLocalData(localCode,callback){
    currentCode=localCode;
    $.getScript(chooseLanguage(),function(){
        currentContent = content;
        callback();
    });
}

function chooseLanguage(){
    switch(currentCode){
        case 'en':
        return 'LocalizationEN.js';
        case 'ar':
        return 'LocalizationAR.js';
    }
}
function chooseNextLanguage(){
    switch(currentCode){
        case 'en':
        return 'ar';
        case 'ar':
        return 'en';
    }
}

function returnDigits(stringDigits)
{
    switch(currentCode){
        case 'en':
        return stringDigits;
        case 'ar':
        return convertNumber(stringDigits);
    }
}
function returnDate(currentdate)
{
    return days[currentdate.getDay()]+" "+months[currentdate.getMonth()]+" "+returnDigits(""+currentdate.getDate())+" "+returnDigits(""+currentdate.getFullYear());
}

function isNumeric(x) {
    return parseFloat(x).toString() === x.toString();
}

// String.prototype.toAr= function() {
//     return this.replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
// }
function convertNumber(fromNum) {
    var arabicMap = [
        '٩',
        '٨',
        '٧',
        '٦',
        '٥',
        '٤',
        '٣',
        '٢',
        '١',
        '٠'
    ];
    var t=0;
    var result="";
    for( t=0;t<fromNum.length;t++){
        if(isNumeric(fromNum[t]))
            result+=arabicMap[9-fromNum[t]];
        else
            result+=fromNum[t];
    }
    return result;
}

