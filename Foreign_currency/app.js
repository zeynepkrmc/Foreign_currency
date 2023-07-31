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
        
        //for loop -> option list
        let options;
        for(let item of items) {
            //item 0 and item 1
            options += `<option value=${item[0]}>${item[1]}</option>`;
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;
        
    });

    calculate.addEventListener("click", function(){
        const curr1 = currency_one.value;
        const curr2 = currency_two.value;
        const amount2 = amount.value;
        //console.log(curr1, curr2, amount2);

        fetch(url +"/latest/" + curr1)
        .then(res => res.json())
        .then(data => {
            const res = (data.conversion_rates[curr2] * amount2).toFixed(3);
            result.innerHTML =`
            <div class="card border-primary">
            <div class="card-body text-center" style="font-size: 30px;">
            ${amount2} ${curr1} = ${res} ${curr2}
            </div>
        </div>`;
            //console.log(data.conversion_rates[curr2] * amount2);
        })
    });
    