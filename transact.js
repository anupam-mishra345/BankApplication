function trans(){

    var value=Number(document.getElementById("input2").value)
    var bal=Number(document.getElementById("avbal").innerHTML)
    var condition=document.getElementById("select1").value
    var description=document.getElementById("input1").value

    if(description==""){
        description="-"
    }

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today=new Date();
    var date=today.getDate()+' '+month[today.getMonth()]+', '+today.getFullYear();
    var time=("0"+today.getHours()).slice(-2)+":"+("0"+today.getMinutes()).slice(-2)+":"+("0"+today.getSeconds()).slice(-2);

    if(condition=='Dep'){
        if(value==0)
        {
            alert("No value is entered")
        }
        else{
            if(value>=0){
                bal=bal+value;
                document.getElementById("avbal").innerHTML=bal;
                var dep1=Number(document.getElementById("dep2").innerHTML)
                dep1=dep1+value;
                document.getElementById("dep2").innerHTML=dep1
                document.getElementById("input2").value=""
                document.getElementById("input1").value=""

                var pN1=document.createElement("td")
                var dt=document.createTextNode(date +"  \xa0\xa0 "+time)
                var pN2=document.createElement("td")
                var dsc=document.createTextNode(description)
                var pN3=document.createElement("td")
                var val=document.createTextNode(value)

                pN1.appendChild(dt)
                pN2.appendChild(dsc)
                pN3.appendChild(val)

                var tr1=document.createElement("tr")

                var elem=document.getElementById("td1")
                elem.appendChild(tr1)

                tr1.appendChild(pN1)
                tr1.appendChild(pN2)
                tr1.appendChild(pN3)

                if(bal>=1000){
                    document.getElementById("div0").style.backgroundColor='rgb(55, 140, 28,0.7)';
                }
                else{
                    document.getElementById("div0").style.backgroundColor='rgb(194, 75, 54,0.7)';
                }
            }
            else
            {
                alert("Transaction failed. No Negative values are allowed.")
            }
        }
    }

    else if(condition=='With'){

        if(value==0)
        {
            alert("No value is entered")
        }
        else{

            if(bal>=value){
                if(value>=0){
                    bal=bal-value;
                    document.getElementById("avbal").innerHTML=bal;
                    var with1=Number(document.getElementById("with2").innerHTML)
                    with1=with1+value;
                    document.getElementById("with2").innerHTML=with1
                    document.getElementById("input2").value=""
                    document.getElementById("input1").value=""

                    var pN21=document.createElement("td")
                    var dt2=document.createTextNode(date +"  \xa0\xa0 "+time)
                    var pN22=document.createElement("td")
                    var dsc2=document.createTextNode(description)
                    var pN23=document.createElement("td")
                    var val2=document.createTextNode(value)

                    pN21.appendChild(dt2)
                    pN22.appendChild(dsc2)
                    pN23.appendChild(val2)

                    var tr2=document.createElement("tr")

                    var elem2=document.getElementById("td2")
                    elem2.appendChild(tr2)

                    tr2.appendChild(pN21)
                    tr2.appendChild(pN22)
                    tr2.appendChild(pN23)   

                    if(bal>=1000){
                        document.getElementById("div0").style.backgroundColor='rgb(55, 140, 28,0.7)';
                    }
                    else{
                        document.getElementById("div0").style.backgroundColor='rgb(194, 75, 54,0.7)';
                    }

                }
                else{
                    alert("Transaction failed. No Negative values are allowed.")
                }
            }
            else{
                alert("Transaction failed due to Insufficient Balance.")
            }
        }

    }

    else{
        alert("Some Error occured. Please try again in some time")
    }

}