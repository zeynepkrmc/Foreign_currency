const api_key="b7b8bb0425ba177913c63bbb";
const url="https://v6.exchangerate-api.com/v6/" + api_key;

//input  elements
const currency_one = document.getElementById("currency_one"); //input 1
const currency_two = document.getElementById("currency_two");//input 2
const list_one = document.getElementById("list_one");//list 1
const list_two = document.getElementById("list_two");//list 2
const amount = document.getElementById("amount");//amount element
const calculate = document.getElementById("calculate");//calculation
const result = document.getElementById("result");//result

//we will send a query to the address and a json array will be returned. We will reach the array elemnts and use them as options.
fetch(url + "/codes") //fetch returns promise 
    .then(resp => resp.json())//converting the response to json
    .then(data => {//get them as string
        const items = data.supported_codes;
        
        let options;
        for(let item of items) {
            //console.log(item);
            options += `<option value=${item[0]}>${item[1]}</option>`;
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;
        
    }) 
    
    