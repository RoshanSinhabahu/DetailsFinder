function search(){
    clearMesseges();

    const InsNumb=document.getElementById("IDInput").value;
    const InsNumbLen=InsNumb.length;
    const First2dig=InsNumb.substr(0,2);
    const First4dig=InsNumb.substr(0,4);
    const letter=InsNumb.substr(9,1);
    const NSec3num=InsNumb.substr(4,3);
    const OSec3num=InsNumb.substr(2,3);
    const OldFe_B3num=OSec3num-500;
    const NewFe_B3num=NSec3num-500;

    //OLD NIC
    if(InsNumbLen==10&&letter=="v"||letter=="V"||letter=="x"||letter=="X"){
        document.getElementById("result").innerHTML+="Old NIC";
        document.getElementById("byear").innerHTML+="19"+First2dig;
        if(OSec3num>500){
            document.getElementById("gender").innerHTML+="Female";
            if(OldFe_B3num<32){
                document.getElementById("bmonth").innerHTML+="January";
                document.getElementById("bday").innerHTML+=OldFe_B3num;
            }
            else if(OldFe_B3num<61){
                document.getElementById("bmonth").innerHTML+="February";
                document.getElementById("bday").innerHTML+=OldFe_B3num-31;
            }
            else if(OldFe_B3num<92){
                document.getElementById("bmonth").innerHTML+="March";
                document.getElementById("bday").innerHTML+=OldFe_B3num-60;
            }
            else if(OldFe_B3num<122){
                document.getElementById("bmonth").innerHTML+="April";
                document.getElementById("bday").innerHTML+=OldFe_B3num-91;
            }
            else if(OldFe_B3num<153){
                document.getElementById("bmonth").innerHTML+="May";
                document.getElementById("bday").innerHTML+=OldFe_B3num-121;
            }
            else if(OldFe_B3num<183){
                document.getElementById("bmonth").innerHTML+="June";
                document.getElementById("bday").innerHTML+=OldFe_B3num-152;
            }
            else if(OldFe_B3num<214){
                document.getElementById("bmonth").innerHTML+="July";
                document.getElementById("bday").innerHTML+=OldFe_B3num-182;
            }
            else if(OldFe_B3num<245){
                document.getElementById("bmonth").innerHTML+="August";
                document.getElementById("bday").innerHTML+=OldFe_B3num-213;
            }
            else if(OldFe_B3num<275){
                document.getElementById("bmonth").innerHTML+="September";
                document.getElementById("bday").innerHTML+=OldFe_B3num-244;
            }
            else if(OldFe_B3num<306){
                document.getElementById("bmonth").innerHTML+="October";
                document.getElementById("bday").innerHTML+=OldFe_B3num-274;
            }
            else if(OldFe_B3num<336){
                document.getElementById("bmonth").innerHTML+="November";
                document.getElementById("bday").innerHTML+=OldFe_B3num-305;
            }
            else if(OldFe_B3num<367){
                document.getElementById("bmonth").innerHTML+="December";
                document.getElementById("bday").innerHTML+=OldFe_B3num-335;
            }
            else{}
        }
        else if(OSec3num<500){
            document.getElementById("gender").innerHTML+="Male";
            if(OSec3num<32){
                document.getElementById("bmonth").innerHTML+="January";
                document.getElementById("bday").innerHTML+=OSec3num;
            }
            else if(OSec3num<61){
                document.getElementById("bmonth").innerHTML+="February";
                document.getElementById("bday").innerHTML+=OSec3num-31;
            }
            else if(OSec3num<92){
                document.getElementById("bmonth").innerHTML+="March";
                document.getElementById("bday").innerHTML+=OSec3num-60;
            }
            else if(OSec3num<122){
                document.getElementById("bmonth").innerHTML+="April";
                document.getElementById("bday").innerHTML+=OSec3num-91;
            }
            else if(OSec3num<153){
                document.getElementById("bmonth").innerHTML+="May";
                document.getElementById("bday").innerHTML+=OSec3num-121;
            }
            else if(OSec3num<183){
                document.getElementById("bmonth").innerHTML+="June";
                document.getElementById("bday").innerHTML+=OSec3num-152;
            }
            else if(OSec3num<214){
                document.getElementById("bmonth").innerHTML+="July";
                document.getElementById("bday").innerHTML+=OSec3num-182;
            }
            else if(OSec3num<245){
                document.getElementById("bmonth").innerHTML+="August";
                document.getElementById("bday").innerHTML+=OSec3num-213;
            }
            else if(OSec3num<275){
                document.getElementById("bmonth").innerHTML+="September";
                document.getElementById("bday").innerHTML+=OSec3num-244;
            }
            else if(OSec3num<306){
                document.getElementById("bmonth").innerHTML+="October";
                document.getElementById("bday").innerHTML+=OSec3num-274;
            }
            else if(OSec3num<336){
                document.getElementById("bmonth").innerHTML+="November";
                document.getElementById("bday").innerHTML+=OSec3num-305;
            }
            else if(OSec3num<367){
                document.getElementById("bmonth").innerHTML+="December";
                document.getElementById("bday").innerHTML+=OSec3num-335;
            }
            else{}
        }
        else{}
    }
    //NEW NIC
    else if(InsNumbLen==12){
        document.getElementById("result").innerHTML+="New NIC";
        document.getElementById("byear").innerHTML+=First4dig;
        if(NSec3num>500){
            document.getElementById("gender").innerHTML+="Female";
            if(NewFe_B3num<32){
                document.getElementById("bmonth").innerHTML+="January";
                document.getElementById("bday").innerHTML+=NewFe_B3num;
            }
            else if(NewFe_B3num<61){
                document.getElementById("bmonth").innerHTML+="February";
                document.getElementById("bday").innerHTML+=NewFe_B3num-31;
            }
            else if(NewFe_B3num<92){
                document.getElementById("bmonth").innerHTML+="March";
                document.getElementById("bday").innerHTML+=NewFe_B3num-60;
            }
            else if(NewFe_B3num<122){
                document.getElementById("bmonth").innerHTML+="April";
                document.getElementById("bday").innerHTML+=NewFe_B3num-91;
            }
            else if(NewFe_B3num<153){
                document.getElementById("bmonth").innerHTML+="May";
                document.getElementById("bday").innerHTML+=NewFe_B3num-121;
            }
            else if(NewFe_B3num<183){
                document.getElementById("bmonth").innerHTML+="June";
                document.getElementById("bday").innerHTML+=NewFe_B3num-152;
            }
            else if(NewFe_B3num<214){
                document.getElementById("bmonth").innerHTML+="July";
                document.getElementById("bday").innerHTML+=NewFe_B3num-182;
            }
            else if(NewFe_B3num<245){
                document.getElementById("bmonth").innerHTML+="August";
                document.getElementById("bday").innerHTML+=NewFe_B3num-213;
            }
            else if(NewFe_B3num<275){
                document.getElementById("bmonth").innerHTML+="September";
                document.getElementById("bday").innerHTML+=NewFe_B3num-244;
            }
            else if(NewFe_B3num<306){
                document.getElementById("bmonth").innerHTML+="October";
                document.getElementById("bday").innerHTML+=NewFe_B3num-274;
            }
            else if(NewFe_B3num<336){
                document.getElementById("bmonth").innerHTML+="November";
                document.getElementById("bday").innerHTML+=NewFe_B3num-305;
            }
            else if(NewFe_B3num<367){
                document.getElementById("bmonth").innerHTML+="December";
                document.getElementById("bday").innerHTML+=NewFe_B3num-335;
            }
            else{}
        }
        else if(NSec3num<500){
            document.getElementById("gender").innerHTML+="Male";
            if(NSec3num<32){
                document.getElementById("bmonth").innerHTML+="January";
                document.getElementById("bday").innerHTML+=NSec3num;
            }
            else if(NSec3num<61){
                document.getElementById("bmonth").innerHTML+="February";
                document.getElementById("bday").innerHTML+=NSec3num-31;
            }
            else if(NSec3num<92){
                document.getElementById("bmonth").innerHTML+="March";
                document.getElementById("bday").innerHTML+=NSec3num-60;
            }
            else if(NSec3num<122){
                document.getElementById("bmonth").innerHTML+="April";
                document.getElementById("bday").innerHTML+=NSec3num-91;
            }
            else if(NSec3num<153){
                document.getElementById("bmonth").innerHTML+="May";
                document.getElementById("bday").innerHTML+=NSec3num-121;
            }
            else if(NSec3num<183){
                document.getElementById("bmonth").innerHTML+="June";
                document.getElementById("bday").innerHTML+=NSec3num-152;
            }
            else if(NSec3num<214){
                document.getElementById("bmonth").innerHTML+="July";
                document.getElementById("bday").innerHTML+=NSec3num-182;
            }
            else if(NSec3num<245){
                document.getElementById("bmonth").innerHTML+="August";
                document.getElementById("bday").innerHTML+=NSec3num-213;
            }
            else if(NSec3num<275){
                document.getElementById("bmonth").innerHTML+="September";
                document.getElementById("bday").innerHTML+=NSec3num-244;
            }
            else if(NSec3num<306){
                document.getElementById("bmonth").innerHTML+="October";
                document.getElementById("bday").innerHTML+=NSec3num-274;
            }
            else if(NSec3num<336){
                document.getElementById("bmonth").innerHTML+="November";
                document.getElementById("bday").innerHTML+=NSec3num-305;
            }
            else if(NSec3num<367){
                document.getElementById("bmonth").innerHTML+="December";
                document.getElementById("bday").innerHTML+=NSec3num-335;
            }
            else{}
        }
        else{}
    }
    //ERROR
    else{
        document.getElementById("result").innerHTML="Invalid Input!";
        document.getElementById("result").style.color="rgb(246, 71, 59)";
        document.getElementById("result").style.textAlign="center";
    }
}

function clearMesseges(){
    document.getElementById("result").innerHTML="";
        document.getElementById("result").style.color="";
    document.getElementById("gender").innerHTML="";
    document.getElementById("byear").innerHTML="";
    document.getElementById("bmonth").innerHTML="";
    document.getElementById("bday").innerHTML="";
    }