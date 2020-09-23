/*
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.
*/
function century(year) {
    // Finish this :)
      let cent = 0;
    if ((year%100) <! 0) {
      cent = Math.floor(year/100);
    } else cent = Math.floor(year/100)+1;
    return cent;
  }
  
  century(-2000);
  
  
  /* best practice clever
  const century = year => Math.ceil(year/100)
  */
  /*
  function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }
  */
  /*                        %
  7/100         0.07        7
  102/100       1.02        2
  1002/100     10.02        2
  2002/100     20.02        2
  10002/100   200.02        2
  2000/100     20           0
  if year%100 <!0
      then century = Math.floor(year/100)+1
  else century = Math.floor(year/100);
  */