let statuss = document.querySelector("h5");


var add = document.querySelector("#add");

var remove = document.querySelector('#remove');
var removes = document.querySelector('.remove');

let adds = document.querySelector(".add");

let card = document.querySelector('.btnContainer');


let images = document.querySelector("img");








let arr = [ 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D',
    

    // 'https://images.unsplash.com/photo-1518131901452-29ef2e026182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D'
]


// let arr2 = 
//     'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D';


let name = document.querySelector('h1')





add.addEventListener("click", () => {
    statuss.innerText = "Friends";
    statuss.style.color = "green";
    adds.classList.add("adds");
    removes.innerText = "Remove Friend";
    removes.style.width = "80%";
});


remove.addEventListener("click", () => {
    statuss.innerText = "Smart";
    statuss.style.color = "red";
    adds.classList.remove("adds");
    remove.style.width = "45%";
    remove.innerText = 'Remove';
    card.style.display = "flex";
    card.style.alignItem = "center";
    card.style.justifyContent = 'center';
    name.innerText = "Zehan";


    leftArrow.classList.remove("leftHide");
    iconDiv.style.justifyContent = "space-between";

    // images.src = 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D';




    for(let val of arr) {


        images.src = val;



        
    }


    // let check = true;

    // if(check === true) {
    //     images.src = arr;
    //     check = false;
    // }else{
    //     images.src = arr2;

    //     check = true;
    // }
});


let leftArrow = document.querySelector('.leftArrow');


let rightArrow = document.querySelector(".rightArrow");


let iconDiv = document.querySelector(".iconDiv");


rightArrow.addEventListener("click", () => {


    leftArrow.classList.remove("leftHide");
    iconDiv.style.justifyContent = "space-between";



    statuss.innerText = "Smart";
    statuss.style.color = "red";
    adds.classList.remove("adds");
    remove.style.width = "45%";
    remove.innerText = 'Remove';
    card.style.display = "flex";
    card.style.alignItem = "center";
    card.style.justifyContent = 'center';
    name.innerText = "Zehan"

    // images.src = 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D';




    for(let val of arr) {


        images.src = val;



        
    }
});



leftArrow.addEventListener("click", () => {
    statuss.innerText = "Strainger";
    statuss.style.color = "red";
    adds.classList.remove("adds");
    remove.style.width = "45%";
    remove.innerText = 'Remove';
    card.style.display = "flex";
    card.style.alignItem = "center";
    card.style.justifyContent = 'center';
    name.innerText = "Angel Priya";

    images.src = "https://media.istockphoto.com/id/2150687052/photo/fashionable-woman-in-stylish-t-shirt-against-mountain-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=hcRjKtcCxhcPm5mi3KsWCLnPdSyxl4OpYwkC_TXJz04="

    leftArrow.classList.add("leftHide");
    iconDiv.style.justifyContent = "end";
})




