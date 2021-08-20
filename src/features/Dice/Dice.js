import * as Parser from './CommandParser.js';
export function Roll(size=6) {
    return Math.floor(Math.random()*size);
}
export function RollXdY(X, Y) {
    var retval =0;
    for(let i =0; i<X; i++)
    {
        retval += Roll(Y);
    }
    return retval;
}
export function cmdRoll(str) {
    var thing = Parser.Parse(str);
    return thing

}
