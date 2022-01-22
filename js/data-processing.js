//use location object to access querystring (address bar)
const queryString = window.location.search;
let   myData = ''; //will store data for output
let myCart = '';//will store info about Cart contents
let myTotal = 0;//cost of items in cart

if(queryString != "") { //process data
 
    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach(function(value, key) {
        
        function titleCase(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            }
            return str.join(' ');
          }
          titleCase("I'm a little tea pot");
        if(key=="Cart"){//Add price of cart items
            // alert(value);

            switch(value){

                case "Widget":
                    myCart += "Widget: $3.99<br />";
                    myTotal += 3.99;
                break;

                
                case "Sprocket":
                    myCart += "Sprocket: $5.99<br />";
                    myTotal += 5.99;
                break;

                
                case "Thingy":
                    myCart += "Thingy: $1.99<br />";
                    myTotal += 1.99;
                break;
            }



        }else{//build the shipping info
            //will replace underscore with space
            ////https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi
            key = key.split("_").join(" ");
            myData += `<p>${key}: ${value}</p>`;

        }
        
    });

    myCart = `  <h3><p>Cart Contents</p></h3>
                <p>Widget: $${myCart}</p>
                <p>Total: $${myTotal}</p>
            `;
    myData = myCart + `<h3>Shipping Info</h3>` + myData;
    myData += '<p><a href="index.html">CLEAR</a></p>';

    document.getElementById("output").innerHTML = myData;
}