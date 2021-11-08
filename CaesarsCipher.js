function rot13(str) {
    let letters = {
      A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26
      };
    const  spec_chars = [" ", "!", "?", ".", ","]
  
    let new_digit = 0;
    let temp_str = "";
    for(let i=0;i<str.length;i++) {
      if(spec_chars.includes(str[i])) {
        temp_str += str[i];
      } else {
        if((letters[str[i]] + 13)!==26){
            new_digit = (letters[str[i]] + 13)%26;
            temp_str += Object.keys(letters)[new_digit-1];
            }
        else{
            new_digit = (letters[str[i]] + 13);
            temp_str += Object.keys(letters)[new_digit-1];
        }
      }
    }
    str = temp_str;
    return str;
  }
  
  rot13("SERR CVMMN!");