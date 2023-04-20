function add7(number) {

return number + 7
}


function multiple(number1,number2) {
        result = number1 * number2
        return result
    }

function capitalize(string) {
        string = string.toString()

        var firstletter = string[3].toUpperCase()

        return firstletter
    }

function lastLetter(last) {
        this.last = last

        return last.substr(last.length -1)
    }
console.log(add7(10));
console.log(multiple(10, 20));
console.log(capitalize("hello"));
console.log(lastLetter("Sir"))
console.log("yes")