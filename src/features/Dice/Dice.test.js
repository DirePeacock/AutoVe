//import * as Dice from './Dice';
var dice_sizes = [4,6,8,10,12,20]
const DiceFunc = require("./Dice");
describe("dice class", () => {
    test.each(dice_sizes)('roll a dice', (size) => {
        var funcstr = `1d${size}`
        let myfuncobj = new DiceFunc.DiceFunc(funcstr);
        var num = myfuncobj.eval()
        console.log(`\"${funcstr}\" = ${num}`)
        let inrange = (num <= size ) && (num >= 1)
        expect(inrange).toBe(true);
    });
    test.each(dice_sizes)('roll few dice', (size) => {
        var funcstr = `2d${size}`
        let myfuncobj = new DiceFunc.DiceFunc(funcstr);
        var num = myfuncobj.eval()
        console.log(`\"${funcstr}\" = ${num}`)
        let inrange = (num <= size*2 ) && (num >= 2)
        expect(inrange).toBe(true);
    });
});
