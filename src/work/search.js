/*const contents=search('it');
contents.forEach(function (content) {
    const node = document.createTextNode(content);
    document.querySelector('body').appendChild(node);
})
*/

// $('body').text(contents.join(''));

function displaySearch(term) {
    clearResult('section.search');
    var contents = search(term);
    contents.forEach(function (content) {
        const pElement = $('<p>').text(content); //là je demande la création d'un paragraphe en html et on y mets du texte
        $('.search').append(pElement);
    });

}
function displaySearchValue() {
    displaySearch($('input.search').val());
}

function clearResult(localisation) {
    $(localisation).empty();
}

$('button').on('click', displaySearchValue);
/*function () {
 //const term = $('input.search');
 // console.log('test', term.val());//on veut la valeur du terme
 // displaySearch(term.val());
 displaySearchValue();
 });*/




