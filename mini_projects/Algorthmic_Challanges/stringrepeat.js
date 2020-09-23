function repeatStr (n, s) {
    let newest = '';
    
    for(i=0; i<n; i++) {
      newest= newest+s;
      
  }return newest;
  }

  repeatStr(3, "*")
  repeatStr(5, "#")
  repeatStr(2, "ha ")

  /* Better practice
    function repeatStr (n, s) {
    return s.repeat(n);
}
  */