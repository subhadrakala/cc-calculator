const precedence = new Map();

precedence.set('+', 1);
precedence.set('-', 1);
precedence.set('*', 2);
precedence.set('/', 2);
precedence.set('^', 3);


export default function postfix(s) {
    let stack = [];
    let result = '';

    let i=0;
    while (i < s.length) {

        let flag = false;
        if (s[i] === ' ') {
            i++;
            continue;
        }

        while ((!isNaN(s[i]) || s[i] === '.') && i < s.length && s[i] !== ' ') {
            result += s[i];
            flag=true;
            i++;
        }
        if (flag) {
            result += ' ';
        }
    
        if (precedence.has(s[i])) {
            while (stack.length > 0 && (precedence.get(stack[stack.length - 1]) >= precedence.get(s[i])) && (s[i] !== '^')) {
                result += stack.pop();
                result += ' ';
            }
            stack.push(s[i]);
        }
        else if (s[i] === '(') {
            stack.push(s[i]);
        }
        else if (s[i] === ')') {
            while(stack.length > 0 && (stack[stack.length-1] !== '(')) {
                result += stack.pop();
                result += ' ';
            }
            stack.pop();
        }
        i++;

    }

    while ( stack.length > 0) {
        result += stack.pop();
        result += ' ';
    }
    return result.trim();
}





