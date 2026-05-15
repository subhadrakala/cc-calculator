import postfix from './postfix.js';

function main () {
    let args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Please provide an expression');
        return;
    }

    let pos = postfix(args[0]);
    let result = calculate(pos);
    console.log(String(result));
}

main();

function calculate(s) {
    let stack = [];

    const tokens = s.split(' ');
    const operators = new Set(['+','-','*','/','^']);

    for (let i=0; i < tokens.length; i++) {
        if (operators.has(tokens[i])) {
            let right = stack.pop();
            let left = stack.pop();
            let value;
            if (tokens[i] === '+' ) {
                value = Number(left) + Number(right);
            }
            else if ( tokens[i] === '-') {
                value = Number(left) - Number(right);
            }
            else if ( tokens[i] === '*') {
                value = Number(left) * Number(right);
            }
            else if ( tokens[i] === '/') {
                value = Number(left) / Number(right);
            }
             else if ( tokens[i] === '^') {
                value = Number(left) ** Number(right);
            }
            stack.push(value);
        }
        else {
            stack.push(tokens[i]);
        }
   }
   return stack.pop();
}