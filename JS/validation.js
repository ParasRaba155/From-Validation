function validateForm() {
    event.preventDefault();
    // let fname = document.getElementById("fname");
    // let lname = document.getElementById("lname");
    // let address = document.getElementById("staddress");
    // let address2 = document.getElementById("staddress2");
    // let city = document.getElementById("city");
    // let state = document.getElementById("state");
    // let zipcode = document.getElementById("zipcode");
    // let phone = document.getElementById("phone");
    // let email = document.getElementById("email");
    // let sugg = document.getElementById("suggest");
    // let feedbk = document.getElementById("feedback");


    // let fname_pattern = "[a-zA-Z]{2,30}$";
    // if(!fname.value.match(fname_pattern)){
    //     let text;
    //     text = 'Name must only contain alphabets and its length should be between 2 and 30'
    //     document.getElementById("OP1").innerHTML = text; 

    // }

    // let lname_pattern = "[a-zA-Z]{2,30}$";
    // if (!lname.value.match(fname_pattern)) {
    //     let text;
    //     // text = 'Please do not let the name be empty or the name should not contain any other charcters than alphabets'
    //     text = 'Name must only contain alphabets and its length should be between 2 and 30'
    //     document.getElementById("OP2").innerHTML = text;    
    // }

    // let add_pattern = "[a-zA-Z0-9]{3,600}$"

    // if (!address.value.match(add_pattern)){
    //     let text;
    //     text = 'Invalid Address'
    //     document.getElementById("OP3").innerHTML = text;
    // }

    // if (!address2.value.match(add_pattern)){
    //     let text;
    //     text = 'Invalid Address'
    //     document.getElementById("OPa").innerHTML = text;
    // }

    // let city_pattern = "[a-zA-Z]{3,30}$"

    // if (!city.value.match(city_pattern)){
    //     let text;
    //     text = 'City name must only have alphabets and its length should be between 2 and 31'
    //     document.getElementById("OP4").innerHTML = text;
    // }

    // if (!state.value.match(city_pattern)){
    //     let text;
    //     text = 'State name must only have alphabets and its length should be between 2 and 31'
    //     document.getElementById("OP5").innerHTML = text;
    // }

    // let zip_pattern = "^[0-9]{6}$"

    // if (!zipcode.value.match(zip_pattern)){
    //     let text;
    //     text = 'Zip code must contatin numbes only and it should be of length 6'
    //     document.getElementById("OP6").innerHTML = text;
    // }

    // let phone_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$"

    // if (!phone.value.match(phone_pattern)){
    //     let text;
    //     text = 'The phone number must be of the given pattern'
    //     document.getElementById("OP7").innerHTML = text;
    // }

    // let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"

    // if (!email.value.match(email_pattern)){
    //     let text;
    //     text = 'Email is invalid'
    //     document.getElementById("OP8").innerHTML = text;
    // }

    // if (sugg.value.length > 2){
    //     let text;
    //     text = 'Plase write suggestion from 3 to 600 words'
    //     document.getElementById("OP9").innerHTML = text;
    // }

    // if (feedbk.value.length){
    //     let text;
    //     text = 'Plase write suggestion from 3 to 600 words'
    //     document.getElementById("OP10").innerHTML = text;
    // }
  
}

function fname_val(){
    let fname = document.getElementById("fname");

    let fname_pattern = "[a-zA-Z]{2,30}$";
    if(!fname.value.match(fname_pattern)){
        let text;
        text = 'Name must only contain alphabets and its length should be between 2 and 30'
        document.getElementById("OP1").innerHTML = text; 

    }
}

function lname_val(){
    let lname = document.getElementById("lname");

    let lname_pattern = "[a-zA-Z]{2,30}$";
    if(!lname.value.match(lname_pattern)){
        let text;
        text = 'Name must only contain alphabets and its length should be between 2 and 30'
        document.getElementById("OP2").innerHTML = text; 

    }
}

function address_val(){

    let add_pattern = "[a-zA-Z0-9]{3,600}$";

    let address = document.getElementById("staddress");

    if (!address.value.match(add_pattern)){
        let text;
        text = 'Invalid Address'
        document.getElementById("OP3").innerHTML = text;
    }
   
}

function address2_val(){

    let add_pattern = "[a-zA-Z0-9]{3,600}$";

    let address = document.getElementById("staddress2");

    if (!address.value.match(add_pattern)){
        let text;
        text = 'Invalid Address'
        document.getElementById("OPa").innerHTML = text;
    }
   
}

function city_val(){

    let city_pattern = "[a-zA-Z]{3,30}$"

    let city = document.getElementById("city");

    if (!city.value.match(city_pattern)){
        let text;
        text = 'City name must only have alphabets and its length should be between 2 and 31'
        document.getElementById("OP4").innerHTML = text;
    }

}

function state_val(){

    let state_pattern = "[a-zA-Z]{3,30}$"

    let state = document.getElementById("state");

    if (!state.value.match(state_pattern)){
        let text;
        text = 'state name must only have alphabets and its length should be between 2 and 31'
        document.getElementById("OP5").innerHTML = text;
    }

}


function zipcode_val(){
    let zip_pattern = "^[0-9]{6}$";

    let zipcode = document.getElementById("zipcode");


    if (!zipcode.value.match(zip_pattern)){
        let text;
        text = 'Zip code must contatin numbes only and it should be of length 6'
        document.getElementById("OP6").innerHTML = text;
    }
}

function phone_val(){

    let phone_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
    let phone = document.getElementById("phone");

    if (!phone.value.match(phone_pattern)){
        let text;
        text = 'The phone number must be of the given pattern'
        document.getElementById("OP7").innerHTML = text;
    }

}

function email_val(){

    let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    let email = document.getElementById("email");

    if (!email.value.match(email_pattern)){
        let text;
        text = 'Email is invalid'
        document.getElementById("OP8").innerHTML = text;
    }

}

function sugg_val(){
    let sugg = document.getElementById("suggest");

    if(sugg.value.length > 2){
        let text;
        text = 'Plase write suggestion from 3 to 600 words'
        document.getElementById("OP9").innerHTML = text;
    }
}

function feedbk_val(){

    let feedbk = document.getElementById("suggest");

    if(feedbk.value.length > 2){
        let text;
        text = 'Plase write suggestion from 3 to 600 words'
        document.getElementById("OP9").innerHTML = text;
    }

}