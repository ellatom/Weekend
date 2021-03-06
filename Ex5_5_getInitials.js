// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata
//strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F
const str = "Ella Ginzburg";

const getInitials = (str) => {
    if (str === "")
        return "String Empty";

    let arrName = str.split(" ");
    return arrName[0].charAt(0) + "." + arrName[1].charAt(0);//~arrName[1][0]
};

console.log(getInitials(str));