let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other two operands as strings too.
//  The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers