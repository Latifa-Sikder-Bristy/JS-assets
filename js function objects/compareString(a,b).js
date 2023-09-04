function compare(a, b) {
    // Convert the two numbers to strings.
    aString = a.toString();
    bString = b.toString();

    // Compare the two strings.
    if (aString === bString) {
        return true;
    } else {
        return false;
    }
}