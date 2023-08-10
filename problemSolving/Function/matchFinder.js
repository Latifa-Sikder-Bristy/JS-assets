function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return 'Please enter string';
    }
    const indexOf = string1.indexOf(string2);
    return indexOf !== -1;
}

console.log(matchFinder('“John Doe”', 'oe'));