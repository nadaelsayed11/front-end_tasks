function lowerCase(str) {
  var newStr = [];
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++)
  {
    if((str[i] <=  'z' && str[i] >=  'a') || (str[i] <=  '9' && str[i] >=  '0'))
      newStr.push(str[i]);
  }
  return newStr;
}

function palindrome(str) {
  str = lowerCase(str);
  var halfLength = str.length / 2
  for(var i = 0; i < halfLength; i++)
  {
    if(str[i] != str[length - i - 1])
      return false;
  }
  return true;
}


palindrome("eye");