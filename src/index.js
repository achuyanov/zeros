module.exports = function zeros(expression) {
  // your solution
    let factArray = expression.split('*');
    let ret2 = 0;
    let ret5 = 0;
  
    const numK = function (val, k) {
      let ret = 0;
      while (val % k == 0) {
        ret += 1;
        val /= k;
      }
      return ret;
    }

    factArray.forEach (fact => {
      let num = fact.replace(/!/g, '');
      let step = (fact.includes('!!')) ? 2:1;
      for (num; num >0; num -=step) {
          ret5 += numK(num,5);
          ret2 += numK(num,2);
      } 
    });
    return (ret5 < ret2) ? ret5 : ret2;
  }
