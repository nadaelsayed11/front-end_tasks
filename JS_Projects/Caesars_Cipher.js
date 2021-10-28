function rot13(str) {
    var newStr = [];
    for(var i = 0; i < str.length; i++)
    {
      if(str[i] <=  'M' && str[i] >=  'A')
        newStr.push(String.fromCharCode(str.charCodeAt(i) + 13));
      else if(str[i] <=  'Z' && str[i] >=  'M')
        newStr.push(String.fromCharCode('A'.charCodeAt(0) + 12 -('Z'.charCodeAt(0) - str.charCodeAt(i))));
      else
        newStr.push(str[i]);
    }
    return newStr.join("");
  }
  console.log(rot13("SERR PBQR PNZC"));
  
  // function rot13(str) {
  //   for(var i = 0; i < str.length; i++)
  //   {
  //     if(str[i] <=  'Z' && str[i] >=  'A')
  //       str[i] = String.fromCharCode(str.charCodeAt(i) + 13); //TypeError: 0 is read-only
  //   return str;
  // }