//let tokens = ['[0-9]*','d', '+', '-', '(',')'];
function Parse(input) {
    var output = '';
    var stripped = (String(input)).replace(' ', '');
    var myregex = new RegExp(/[0-9]d[0-9]/);
    let result = myregex[Symbol.split](stripped)
    console.log(result);

    return 'A';
}

const string = '1d8';
const regexp = /[0-9]+d[0-9]+/;
const matches = regexp.exec(string);
console.log(matches)
matches.forEach((element) => {console.log(element)});
