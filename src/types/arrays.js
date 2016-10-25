var x = [2, 8, 6, 4, 32, 75, -3];

//Add an element at the end

x [8] = 50; //We have to now the size of the table
console.log('table', x);

//Better way to insert
x.push(50);
console.log('tablebis', x);

//remove last element frome array
var lastElement = x.pop();//delete last element from table and put it in lastElement
console.log('table3', x);

//remove first element
x.shift();
console.log('table4', x);

//insert
x.unshift('I am the first');
console.log('X after unshift', x);

console.log('1er element', x[0]);
x[2] = -35; // modify array

//deviation
x[-2] = "what??";
console.log('found :', x[-2]); //Don't do it

//console.log('all table', x);
//x[99] = 149;
//console.log('big table now :', x);

/*Let's start over and do serious stuff*/
x = [2, 8, 6, 4, 32, 75, -3];

x.sort();
console.log('x sorted', x);

x.sort(function (a, b) { //on définit pour la fonction comment calculer qui es tle plus petit et le plus grand//
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
})
console.log('x correcly sorted', x);

var sortFunction = (a, b) => a < b ? -1 : 1; //on écrit la fonction de manière plus dense : function fat arrow
x.sort(sortFunction);
console.log('ES 2015 sorted', x);

var z = 2<10? "Little" : "big"
//z = Little -> Elvis operator (else if...)



var filtered = x.filter (function (number) { //x ne change pas, on cret un novueau tableau//
    return number>=0;
})
console.log('filtered x :', filtered);

var fat =  (number) => number>=0   ;
filtered = x.filter(fat);
console.log('filtered fat :', filtered);

direct = x.filter(number=> number>=0);
