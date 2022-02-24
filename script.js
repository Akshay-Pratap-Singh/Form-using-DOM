
function submit(){
    //First Name
    let firstName = document.getElementById("firstName").value;
    let row1 = document.getElementById("row1");
    row1.innerHTML = firstName;
    document.getElementById("firstName").value = "";

    //Last Name
    let lastName = document.getElementById("lastName").value;
    let row2 = document.getElementById("row2");
    row2.innerHTML = lastName;
    document.getElementById("lastName").value = "";

    //Address
    let address = document.getElementById("address").value;
    let row3 = document.getElementById("row3");
    row3.innerHTML = address;
    document.getElementById("address").value = "";
    
    //Pin Code
    let pinCode = document.getElementById("pinCode").value;
    let row4 = document.getElementById("row4");
    row4.innerHTML = pinCode;
    document.getElementById("pinCode").value = "";

    //Gender
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let row5 = document.getElementById("row5");
    row5.innerHTML = gender;
    //Method#1
    // var ele = document.getElementsByName("gender");
    // for(var i=0;i<ele.length;i++)
    //   ele[i].checked = false;
    //Method#2
    document.querySelector('input[name="gender"]:checked').checked = false;
    
    //Food
    let row6 = document.getElementById("row6");
    var arr = new Array();
    //Reference the Table.
    var spanFood = document.getElementById("spanFood");

    //Reference all the CheckBoxes in Table.
    var chks = spanFood.getElementsByTagName("INPUT");

    // Loop and push the checked CheckBox value in Array.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            arr.push(chks[i].value);
            //to delete checkbox tick
            chks[i].checked = false;
        }
    }
    //Display the selected CheckBox values.
    row6.innerHTML = arr.join(",");


    //State
    let state = document.getElementById("state").value;
    let row7 = document.getElementById("row7");
    row7.innerHTML = state;
    document.getElementById("state").value = "";

    //Country
    let country = document.getElementById("country").value;
    let row8 = document.getElementById("row8");
    row8.innerHTML = country;
    document.getElementById("country").value = "";
    
    
    
   
   

    console.log(firstName);
}




