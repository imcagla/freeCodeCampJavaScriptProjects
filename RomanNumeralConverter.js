function convertToRoman(num) {
    let roman_nums = {M:1000, CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    
    let temp = "";
    let new_num;
    let remained_part;
  
    for (let item in roman_nums) {
      if(num >= roman_nums[item]) {
        new_num = (num)/roman_nums[item];
        temp += item.repeat(new_num);
        num = num-Math.floor(new_num)*roman_nums[item];
      }
      
    }
    num=temp;
    console.log(num);
   return num;
  }
  
  convertToRoman(777);