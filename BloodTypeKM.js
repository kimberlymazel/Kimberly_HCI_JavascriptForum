// prompts for the user to enter the blood types
var donor_type = prompt("Please enter the donor's blood type");
var receiver_type = prompt("Please enter the receiver's blood type");

function canGiveBlood(donor_type, receiver_type){
    // variable to show what is present in the donor's blood type
    var dantigen_a = !donor_type.includes("B") && !donor_type.includes("O");
    var dantigen_b = !donor_type.includes("A") && !donor_type.includes("O");
    var dantigen_ab = donor_type.includes("AB");
    var dantigen_rh = donor_type.includes("+");
    var dantigen_o = donor_type.includes("O");
    
    // variable to show what is present in the receiver's blood type
    var rantigen_a = !receiver_type.includes("B") && !receiver_type.includes("O");
    var rantigen_b = !receiver_type.includes("A") && !receiver_type.includes("O");
    var rantigen_ab = receiver_type.includes("AB");
    var rantigen_rh = receiver_type.includes("+");
    var rantigen_o = receiver_type.includes("O")

    var lettercompat = 0;  // compatibility between letters
    var posnegcompat = 0;  // compatibility between negative and positive

    // A and A -> true
    if(dantigen_a == true && rantigen_a == true){
        lettercompat = true;
    }
    // A and B -> false
    else if(dantigen_a == true && rantigen_b == true){
        lettercompat = false;
    }
    // B and B -> true
    else if(dantigen_b == true && rantigen_b == true){
        lettercompat = true;
    }
    // B and A -> false
    else if(dantigen_b == true && rantigen_a == true){
        lettercompat = false;
    }
    // AB and A -> false
    else if(dantigen_ab == true && rantigen_a == true){
        lettercompat = false;
    }
    // AB and B -> false
    else if(dantigen_ab == true && rantigen_b == true){
        lettercompat = false;
    }
    // AB and AB -> true
    else if(dantigen_ab == true && rantigen_ab == true){
        lettercompat = true;
    }
    // A and AB -> true
    else if(dantigen_a == true && rantigen_ab == true){
        lettercompat = true;
    }
    // B and AB -> true
    else if(dantigen_b == true && rantigen_ab == true){
        lettercompat = true;
    }
    // O and O -> true
    else if(dantigen_o == true && rantigen_o == true){
        lettercompat = true;
    }
    // O and A / B / AB -> true
    else if(dantigen_o == true && rantigen_o == false){
        lettercompat = true;
    }
    // A / B / AB and O -> false
    else if(dantigen_o == false && rantigen_o == true){
        lettercompat = false;
    }
    
    // + and + -> true
    if(dantigen_rh == true && rantigen_rh == true){
        posnegcompat = true;
    }
    // + and - -> false
    else if(dantigen_rh == true && rantigen_rh == false){
        posnegcompat = false;
    }
    // - and + -> true
    else if(dantigen_rh == false && rantigen_rh == true){
        posnegcompat = true;
    }
    // - and - -> true
    else if(dantigen_rh == false && rantigen_rh == false){
        posnegcompat = true;
    }

    if(lettercompat == true && posnegcompat == true){
      return true;
    }
    else{
      return false;
    }
}

canGiveBlood(donor_type, receiver_type);
