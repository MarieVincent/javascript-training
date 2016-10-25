var topics = require('../data').topics;

var result = topics.filter(function (topic) {
    //reutrn true if we keep this topic
    return topic.user.name === 'Leonard';
});
console.log("Leonard's comments", result);

result = topics.filter(topic => topic.user.name === 'Leonard');
console.log("Leonard's comments2", result);

var titles = topics.map(function (topic) {
    return topic.title;
});
console.log('titles', titles);

titles = topics.map(topic => topic.title);
console.log('titles', titles);

console.log('##########');
var hasViolence = topics.some(function (topic) {
    return topic.tags.includes('violence')
});
console.log('has violence', hasViolence);

console.log('##########');

//1.topic titles where sheldon wrote at least one comment
var filtered = topics.filter(function (topic) {
    return topic.comments.some(function (comment) {
        return comment.user.name === 'Sheldon';
    });
});
console.log('number of filtered topics', filtered.length);


var titles = filtered.map(function (topic) {
    return topic.title;
});


//FAT ARROW

titles = (topics.filter(topic=>topic.comments.some(comment =>comment.user.name === 'Sheldon'))).map(topic=>topic.title);
console.log("Topics' names", titles);

//2.Sorted id of Penny's comment
var titlesId = [];
topics.forEach(function (topic) {
    topic.comments.forEach(function (comment) {
        if (comment.user.name === 'Penny') {
            titlesId.push(comment.id);
        }
    });
});
console.log('id', titlesId);

var sortFunction = (a, b) => a < b ? -1 : 1;
titlesId.sort(sortFunction);
console.log("id sorted of Penny's comment", titlesId);

//3.Contents of the comments written by a standard user, tagged 'violence'
var filteredContent = [];
topics.forEach(function (topic) {
    topic.comments.forEach(function (comment) {
        if (comment.tags !== undefined && !comment.user.admin) {
            comment.tags.forEach(function (tag) {
                if (tag === 'violence') {
                    filteredContent.push(comment.content);
                }
            });
        }
        ;
    });
});
console.log('violent contents', filteredContent);

//4.search

