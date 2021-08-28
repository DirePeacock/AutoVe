
//import * as Parser from './CommandParser.js';
let FULL_REGEX = new RegExp(/[0-9]+d[0-9]+.*/);
let BASE_REGEX = new RegExp(/[0-9]+d[0-9]+/);


class  DiceFunc  {
    constructor(str){
        let DiceFuncVals = this.Parse(str);
        this.str = DiceFuncVals.str
        this.rolls = DiceFuncVals.rolls
        this.size = DiceFuncVals.size
        this.average = DiceFuncVals.average
        
        this.func = DiceFuncVals.func
    }
    operator_decorator_dict={ 
        "r":reroll_below_decorator,
    }
    decorate_func(func, operator){
        return func
    }
    
    Parse(input) {
        var stripped_str = (String(input)).replace(' ', '');
        let str = FULL_REGEX.exec(stripped_str)
        var base_matches = BASE_REGEX.exec(stripped_str)
        
        let rolls = 1
        let size = 6
        let average = 3.5
        var split_base =  base_matches[0].split('d')
        
        if(split_base.length >1) {
            rolls = parseInt(split_base[0])
            size = parseInt(split_base[1])
        } else {
            size = parseInt(split_base[0])
        }
        let func = Roll
        average = (0.5+ (1.0 * size / 2))
        
        // for operator after d[0-9]+ ; apply operator

        // we go L-R for operators but the number of rolls applies last
        if(rolls > 1) {
            var rvs = multiple_roll_decorator(func, average, rolls)
            func = rvs.func
            average = rvs.average
        }
        let retdict = {str, size, rolls, average, func};
        //console.log(retdict);
        return retdict;
    }
    eval(){
        return this.func(this.size);
    }

} ;

function Roll(size=6) {
    retval = Math.ceil(Math.random()*size);
    //#console.log(`rolling a ${size} for a ${retval}`)
    return retval
}

//  function RollXdY(X, Y) {
//     var retval =0;
//     for(let i =0; i<X; i++)
//     {
//         retval += Roll(Y);
//     }
//     return retval;
// }
 
// https://hackernoon.com/playing-around-with-your-standard-run-of-the-mill-javascript-decorator-example-28d0445307e1
// borrowing from @jlowery2663
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if (result === null)
    result = [];
  return result;
}

const multiple_roll_decorator = function(fn, avg, rolls) {
    // damn is this even something to decorate?
    // """given XdY, if you roll a number less than or equal to reroll_loe_num, you must use the lower"""
    if (typeof fn === 'function')
    {
        let average = avg * rolls
        let func = function(...args){
            try {
                let rv = 0
                
                const paramNames = getParamNames(fn)
                const params = paramNames.reduce((obj, pn, i) => {
                    obj[pn] = args[i];
                    return obj;}, {} )

                for(let i =0; i< rolls; i++) {
                    rv += fn(params.size)
                }
                return rv

            } catch(err) {
                console.error(err);
            }
        };
        let return_dict = {func, average}
        return return_dict
    }
    else {
        console.log(`${fn.name} aint a function`)
        return fn;
    }
}

const reroll_below_decorator = function(fn, reroll_loe_num) {
    // """given XdY, if you roll a number less than or equal to reroll_loe_num, you must use the lower"""
    if (typeof fn === 'function')
    {
        let new_fn = function(...args){
            try {
                // console.log('Running function: ', fn.name)
                // console.log(`args: ${args}`)
                let rv = fn(...args)
                
                const paramNames = getParamNames(fn)
                const params = paramNames.reduce((obj, pn, i) => {
                    obj[pn] = args[i];
                    return obj;}, {} )
                // console.log(`${fn.name}(${JSON.stringify(params)}) = ${rv}`)
                return rv
            } catch(err) {
                console.warn(err);
            }
        };
        new_fn.att = "YO"
        return new_fn
    }
    else {
        console.log(`${fn.name} aint a function`)
        return fn;
    }
}
function cmdRoll(cmd_string) {
    let myfuncobj = new DiceFunc(cmd_string);
    return myfuncobj.eval()
        
}


module.exports.DiceFunc = DiceFunc;
module.exports.cmdRoll = cmdRoll;
// wrapped_roll = reroll_below_decorator(RollXdY);
// let thing = wrapped_roll(1,6);
// console.log('hey', thing);
// console.log('has att ', wrapped_roll.att);

//  let thing2 = new DiceFunc('1d8');
//  console.log(`rolling ${thing2.str} => ${thing2.eval()