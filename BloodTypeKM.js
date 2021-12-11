// prompts for the user to enter the blood types
var donor_type = prompt("Please enter the donor's blood type");
var receiver_type = prompt("Please enter the receiver's blood type");

function getBloodType(donor_type, receiver_type){
    // variable to show what is present in the donor's blood type
    var dantigen_a = donor_type.includes("A");
    var dantigen_b = donor_type.includes("B");
    var dantigen_rh = donor_type.includes("+");
    // variable to show what is present in the receiver's blood type
    var rantigen_a = receiver_type.includes("A");
    var rantigen_b = receiver_type.includes("B");
    var rantigen_rh = receiver_type.includes("+");
    
    // if function for presence of antigen A
    if(dantigen_a == true && rantigen_a == true){
        console.log("Blood types are compatible");
    }
    // else if function for presence of antigen B
    else if(dantigen_b == true && rantigen_b == true){
        console.log("Blood types are compatible");
    }
    // else if function for presence of antigen Rh
    else if(dantigen_rh == true && rantigen_rh == true){
        console.log("Blood types are compatible");
    }
    // else function for none of the above (O-)
    else{
        console.log("Blood types are NOT compatible");
    }
}

getBloodType(donor_type, receiver_type);