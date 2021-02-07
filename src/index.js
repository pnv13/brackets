module.exports = function check(str, bracketsConfig) {
    let stack = [];

    if (str.length <= 1) false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let brackets = bracketsConfig.find(
            (b) => char === b[0] || char === b[1]
        );
        console.log(brackets);
        if (char === brackets[0]) {
            if (char === brackets[1] && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (
            char === brackets[1] &&
            stack[stack.length - 1] === brackets[0]
        ) {
            stack.pop();
        } else if (
            char === brackets[0] &&
            stack[stack.length - 1] === brackets[0]
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
