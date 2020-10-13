//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let htmlEntities = {
          '&' :	'&amp;',
          '<'	: '&lt;',
          '>'	: '&gt;',
          '\"':	'&quot;',
          '\'':	'&apos;'
    };

    //split string into array of characters
    return str.split("")
    //map character to array of character; replace it with the coresponding html entity or leave it be if no match
              .map( x => htmlEntities.hasOwnProperty(x) ? htmlEntities[x] : x)

              //.map(entity => htmlEntities[entity] || entity)  //better and more elegant
    //join back teh array into string of characters          
              .join('');
  }
  
/*  ------REGEX SOlUTION-------



  function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
      };
      // Using a regex, replace characters with it's corresponding html entity
      return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
    }
    
*/


  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos");
  convertHTML("Sixty > twelve");
  convertHTML('Stuff in "quotation marks"');
  convertHTML("Schindler's List");
  convertHTML("<>");
  convertHTML("abc");