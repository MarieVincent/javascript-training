var string = "Hello world";
string += "!";
console.log('string :', string);

var index = string.indexOf('lo');
console.log('index of lo :', index);

function contains(haystack, needle) {
    var index = haystack.indexOf(needle);
    if (index >= 0) {
        return true;
    }
    else {
        return false;
    }
    //résumé : return haystack.indexOf(needle)>=0;
}
var isTrue = contains('Jack', 'ack');
var isAlsoTrue = contains('Jim', 'Jim');
var isFalse = contains('Mac Donalds', 'ack');
console.log(isTrue, isAlsoTrue, isFalse);
//en fait la fonction existait déjà, mais depuis ES6 en 2015//
console.log('Jack is back'.includes('ack'));

/**
 *Expression Reguliere (expression entre / / )
  */

var hello = "Hello world";
var found = hello.search(/orl/);
var alsoFound = hello.search(/world/i);//i : pour la casse//
console.log('found :', found, 'also :', alsoFound);

var x = /(.)*(world)/i.test('Hello world');
console.log('x :',x);

var strangelyTrue = /(.)*(world)/i.test('Hello Worlds here');
console.log('strangelyTrue :', strangelyTrue);

//not conforme : we must finish witj (world) (à cause du $)
var moreStrict=/(.)*(world)$/i.test('Hello world here');
console.log('moreStrict: ',moreStrict);

//substr
var test = "I love funkoPop";
console.log('Print beginning at 1, for 4 characters',test.substr(1,4));
console.log('Print beginning at 1',test.substr(1));

//substring
var test = "I love funkoPop";
console.log('Print between index 1 and 4 ', test.substring(1,4));