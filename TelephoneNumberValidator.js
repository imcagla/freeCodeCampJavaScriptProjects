function telephoneCheck(str) {
    let phoneRegex1 = /^([(]\d{3}[)]|\d{3})[-|\s]?\d{3}[-|\s]?\d{4}$/g;
    let phoneRegex2 = /^[1]?\s?([(]\d{3}[)]|\d{3})[-|\s]?\d{3}[-|\s]?\d{4}$/g; 
    let result1 = phoneRegex1.test(str);
    let result2 = phoneRegex2.test(str);
  
    if(result1||result2)
      return true;
    else
      return false;
  }
  
  telephoneCheck("5555555555");