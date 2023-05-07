function search_tables() {
    let input = document.getElementById('search-table').value
    input=input.toLowerCase();
    let x=document.getElementsByClassName('inner-table');

    for(let i=0;i<x.length;i++){
        if(x){
            let textValue=x[i].innerText.toLowerCase();
            if(textValue.indexOf(input)>-1){
                x[i].style.display="";
            }
            else{
                x[i].style.display='none';
            }
        }
    }

}

function search_menu() {
    let input = document.getElementById('search-menu').value
    input=input.toLowerCase();
    let x=document.querySelectorAll('.inner-menu > h3');
    let y=document.querySelectorAll('.inner-menu > pre');

    for(let i=0;i<x.length;i++){
        if(x){
            let textValue=x[i].innerText.toLowerCase();
            let courseValue=y[i].innerText.toLowerCase();
            if(textValue.indexOf(input)>-1 || courseValue.indexOf(input)>-1){
                document.getElementsByClassName("inner-menu")[i].style.display="";
            }
            else{
                document.getElementsByClassName("inner-menu")[i].style.display='none';
            }
        }
    }

}

function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}






let myId={
    'one':0,
    'two':1,
    'three':2,
    'four':3,
    'five':4,
    'six':5,
    'seventh':6,
    'eight':7
}

const Foods = [
    {
    id:'one',
    name: "Crusty Garlic Focaccia with Melted Cheese",
    price: 100,
    qty: 0
    },
    {
    id:'two',
    name: "French Fries",
    price: 120,
    qty: 0
    },
    {
    id:'three',
    name: "Home Country Fries with Herbs",
    price: 150,
    qty: 0
    },
    {
    id:'four',
    name: "French Fries with cheese",
    price: 135,
    qty: 0
    },
    {
    id:'five',
    name: "Vannila Icecream",
    price: 80,
    qty: 0
    },
    {
    id:'six',
    name: "Tutty Fruity",
    price: 60,
    qty: 0
    },
    {
    id:'seventh',
    name:"Kurkure",
    price: 10,
    qty:0
    },
    {
    id:'eight',
    name:"Potato Chips",
    price:20,
    qty:0
    }
];

const tableOne = [];
const tableTwo = [];
const tableThree=[];



function drop(ev){
    ev.preventDefault();
    var id=ev.dataTransfer.getData("text");

    console.log(id);
    console.log(ev.target.id);


    if(ev.target.id=='table1'){
        let i;
        for(i=0; i<tableOne.length;i++){
            if(tableOne[i].id===id){
                tableOne[i].qty++;
                break;
            }
        }
        if(i===tableOne.length){
            t1={};
            t1.id=Foods[myId[id]].id;
            t1.name=Foods[myId[id]].name;
            t1.price=Foods[myId[id]].price;
            t1.qty=Foods[myId[id]].qty;
            tableOne.push(t1);
            t1.qty+=1;
        }

    }

    else if(ev.target.id=='table2'){
        let i;
        for(i=0; i<tableTwo.length;i++){
            if(tableTwo[i].id===id){
                tableTwo[i].qty++;
                break;
            }
        }
        if(i===tableTwo.length){
            t1={};
            t1.id=Foods[myId[id]].id;
            t1.name=Foods[myId[id]].name;
            t1.price=Foods[myId[id]].price;
            t1.qty=Foods[myId[id]].qty;
            tableTwo.push(t1);
            t1.qty+=1;
        }

    }

    else if(ev.target.id=='table3'){
        let i;
        for(i=0; i<tableThree.length;i++){
            if(tableThree[i].id===id){
                tableThree[i].qty++;
                break;
            }
        }
        if(i===tableThree.length){
            t1={};
            t1.id=Foods[myId[id]].id;
            t1.name=Foods[myId[id]].name;
            t1.price=Foods[myId[id]].price;
            t1.qty=Foods[myId[id]].qty;
            tableThree.push(t1);
            t1.qty+=1;
        }

    }
    document.querySelectorAll('#table1 span')[0].innerHTML=totalCost(tableOne);
    document.querySelectorAll('#table1 span')[1].innerHTML=total_qty(tableOne);
    document.querySelectorAll('#table2 span')[0].innerHTML=totalCost(tableTwo);
    document.querySelectorAll('#table2 span')[1].innerHTML=total_qty(tableTwo);
    document.querySelectorAll('#table3 span')[0].innerHTML=totalCost(tableThree);
    document.querySelectorAll('#table3 span')[1].innerHTML=total_qty(tableThree);



}

function totalCost(table) {
    let total_cost=0;
    for(let i=0;i<table.length;i++){
        total_cost+=table[i].qty*table[i].price;
    }
    return total_cost;
}

function total_qty(table) {
    let total_qty=0;
    for(let i=0;i<table.length;i++){
        total_qty+=table[i].qty;

    }
    return total_qty;
}



function showTable(table,table_no){
    let con=document.getElementById('container');
    con.style.visibility='visible';
    con.style.backgroundColor='whitesmoke';
    let tu=`<h2>Table ${table_no} | Order Details</h2>
    <table id='tab' border='1'>
    <button type="button" onclick="toggle()" style="position: relative; left: 420px; bottom:50px">X</button>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Number of Servings</th>
        </tr>`;
    if(table===tableOne){
        t='1';
    }
    else if(table===tableTwo){
        t='2';
    }
    else{
        t='3';
    }
    let tl="";


    for(let i=0;i<table.length;i++){
        let r=i;
        tl+=`<tr>
            <td>${table[i].name}</td>
            <td>${table[i].price*table[i].qty}</td>
            <td><input type="number" value=${table[i].qty} min='0' class='inp' onchange="setQty(${t},${r})"></input></td>
            <td><button type="button"  onclick="clearRow(${t},${r})">Delete</button></td>

            </tr>`
    }

    document.getElementById("container").innerHTML=
    `
            ${tu}
            ${tl}

    </table>
    <h3>Total Price:<span>${totalCost(table)}</span></h3>
    <button type="button" id="clear" onclick="clearSession(${t})">Close Session (Generate Bill)</button>
    `;

    console.log(tl);
}


function clearSession(t){

    if(t==1){
        if(totalCost(tableOne)==0)
            alert('Please order something');
        else{
            alert(`Collect Rs.${totalCost(tableOne)} from Table 1`);
            tableOne.splice(0, tableOne.length);
            showTable(tableOne,1);
        }
    }
    else if(t==2){
        if(totalCost(tableTwo)==0)
            alert('Please order something');
        else{
            alert(`Collect Rs.${totalCost(tableTwo)} from Table 2`);
            tableTwo.splice(0, tableTwo.length);
            showTable(tableOne,1);
        }
    }
    else{
        if(totalCost(tableThree)==0)
            alert('Please order something');
        else{
            alert(`Collect Rs.${totalCost(tableThree)} from Table 3`);
            tableThree.splice(0, tableThree.length);
            showTable(tableOne,1);
        }
    }
    document.querySelectorAll('#table1 span')[0].innerHTML=totalCost(tableOne);
    document.querySelectorAll('#table1 span')[1].innerHTML=total_qty(tableOne);
    document.querySelectorAll('#table2 span')[0].innerHTML=totalCost(tableTwo);
    document.querySelectorAll('#table2 span')[1].innerHTML=total_qty(tableTwo);
    document.querySelectorAll('#table3 span')[0].innerHTML=totalCost(tableThree);
    document.querySelectorAll('#table3 span')[1].innerHTML=total_qty(tableThree);

}

function clearRow(t,r){

    if(t==1){
        tableOne.splice(r,1);
        showTable(tableOne,1);
    }
    else if(t==2){
        tableTwo.splice(r,1);
        showTable(tableTwo,2);
    }
    else{
        tableThree.splice(r, 1);
        showTable(tableThree,3);
    }
    document.querySelectorAll('#table1 span')[0].innerHTML=totalCost(tableOne);
    document.querySelectorAll('#table1 span')[1].innerHTML=total_qty(tableOne);
    document.querySelectorAll('#table2 span')[0].innerHTML=totalCost(tableTwo);
    document.querySelectorAll('#table2 span')[1].innerHTML=total_qty(tableTwo);
    document.querySelectorAll('#table3 span')[0].innerHTML=totalCost(tableThree);
    document.querySelectorAll('#table3 span')[1].innerHTML=total_qty(tableThree);

}



function setQty(t,r) {

    if(t==1){
        tableOne[r].qty=Number(document.getElementsByClassName("inp")[r].value);
        document.querySelectorAll('#tab td')[3*(r+1)-2].innerHTML=tableOne[r].qty*tableOne[r].price;
        document.querySelectorAll('#container span')[0].innerHTML=totalCost(tableOne);
    }
    else if(t==2){
        tableTwo[r].qty=Number(document.getElementsByClassName("inp")[r].value);
        document.querySelectorAll('#tab td')[3*(r+1)-2].innerHTML=tableTwo[r].qty*tableTwo[r].price;
        document.querySelectorAll('#container span')[0].innerHTML=totalCost(tableTwo);

    }
    else{
        tableThree[r].qty=Number(document.getElementsByClassName("inp")[r].value);
        document.querySelectorAll('#tab td')[3*(r+1)-2].innerHTML=tableThree[r].qty*tableThree[r].price;
        document.querySelectorAll('#container span')[0].innerHTML=totalCost(tableThree);


    }

    document.querySelectorAll('#table1 span')[0].innerHTML=totalCost(tableOne);
    document.querySelectorAll('#table1 span')[1].innerHTML=total_qty(tableOne);
    document.querySelectorAll('#table2 span')[0].innerHTML=totalCost(tableTwo);
    document.querySelectorAll('#table2 span')[1].innerHTML=total_qty(tableTwo);
    document.querySelectorAll('#table3 span')[0].innerHTML=totalCost(tableThree);
    document.querySelectorAll('#table3 span')[1].innerHTML=total_qty(tableThree);


}

function toggle() {
    document.getElementById('container').style.visibility='hidden';
}

