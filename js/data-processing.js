//use location object to access querystring (address bar)
const queryString = window.location.search;
let   myData = ''; //will store data for output
let myCart = '';//will store info about Cart contents
let myTotal = 0;//cost of items in cart

if(queryString != "") { //process data
 
    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach(function(value, key) {

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

            function titleCase(value) {
                value = value.toLowerCase().split(' ');
                for (var i = 0; i < value.length; i++) {
                  value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1); 
                  // value of zero (Kim) - K to uppercase + value of 1 (i and everything after to concatenate)
                }
                return value.join(' ');
              }

            if (key == "First Name"){
                value = titleCase(value);
            } 

            if (key == "Last Name"){
                value = titleCase(value); 
            }

            if (key == "Address"){
                value = titleCase(value);
            }

            if (key == "City"){
                value = titleCase(value);
            }

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