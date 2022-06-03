
//gets a part of a string, does not include the last number
'abcde'.slice(0,3) // [0, 3)

//!!to note splice is not a method for string

//gets char code at a specific point from a string
"abcde".charCodeAt(0); // 97

//convert an ASCII value to a char
String.fromCharCode(97);  // a 

// converts a string into an array
'a,b,c,d,e'.split(',');