//import * as Dice from './Dice';
var dice_sizes = [4,6,8,10,12,20]
const DiceFunc = require("./Dice");
describe("dice class", () => {
    test.each(dice_sizes)('roll a dice', (size) => {
        var funcstr = `1d${size}`
        let myfuncobj = new DiceFunc.DiceFunc(funcstr);
        var num = myfuncobj.eval()
        console.log(`\"${funcstr}\" = ${num}`)
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(size)
    });
    test.each(dice_sizes)('roll few dice', (size) => {
        var numDice = 2
        var funcstr = `${numDice}d${size}`
        let myfuncobj = new DiceFunc.DiceFunc(funcstr);
        var num = myfuncobj.eval()
        console.log(`\"${funcstr}\" = ${num}`)
        expect(num).toBeGreaterThanOrEqual(numDice)
        expect(num).toBeLessThanOrEqual(size*numDice)
    });
    test.each(dice_sizes)('roll dx', (size) => {
        
        var funcstr = `d${size}`
        let myfuncobj = new DiceFunc.DiceFunc(funcstr);
        var num = myfuncobj.eval()
        console.log(`\"${funcstr}\" = ${num}`)
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(size)
    });
});
