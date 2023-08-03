/* var MyTotalScoor = 85;
var TomTotalScoor = 66;
var JaneTotalScoor = 95;
var PeterTotalScoor = 56;
var JohnTotalScoor = 40; */

var studentNames = ['Me', 'Tom', 'Jane', 'Peter', 'John']
var totalScoor = [85, 66, 95, 56, 44]

//name
for(var i = 0; i < studentNames.length; i++){
    var studentName = studentNames[i];
    console.log(studentName +' got');
}
//scoor
for(var i = 0; i < totalScoor.length; i++){
    var score = totalScoor[i];

    if (score >= 80) {
        console.log('A grade');
    } else if (80 > score >= 60) {
    console.log('B grade');
    } else if (60 > score >= 50) {
    console.log('C grade');
    } else if (50 >= score >= 40) {
    console.log('D grade');
    } else {
    console.log('F grade');
    }
}