
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
      mouseDrag:false,
      loop:true,
      margin:2,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
  }); 
  
  $('.owl-prev').click(function() {
      $active = $('.owl-item .item.show');
      $('.owl-item .item.show').removeClass('show');
      $('.owl-item .item').removeClass('next');
      $('.owl-item .item').removeClass('prev');
      $active.addClass('next');
      if($active.is('.first')) {
          $('.owl-item .last').addClass('show');
          $('.first').addClass('next');
          $('.owl-item .last').parent().prev().children('.item').addClass('prev');
      }
      else {
          $active.parent().prev().children('.item').addClass('show');
          if($active.parent().prev().children('.item').is('.first')) {
              $('.owl-item .last').addClass('prev');
          }
          else {
              $('.owl-item .show').parent().prev().children('.item').addClass('prev');
          }
      }
  });
  
  $('.owl-next').click(function() {
      $active = $('.owl-item .item.show');
      $('.owl-item .item.show').removeClass('show');
      $('.owl-item .item').removeClass('next');
      $('.owl-item .item').removeClass('prev');
      $active.addClass('prev');
      if($active.is('.last')) {
          $('.owl-item .first').addClass('show');
          $('.owl-item .first').parent().next().children('.item').addClass('prev');
      }
      else {
          $active.parent().next().children('.item').addClass('show');
          if($active.parent().next().children('.item').is('.last')) {
              $('.owl-item .first').addClass('next');
          }
          else {
              $('.owl-item .show').parent().next().children('.item').addClass('next');
          }
      }
  });
  
  });



//testimonial




/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}



const navbarToggle = document.querySelector('.navbar-toggle');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', function() {
  this.classList.toggle('open');
  navbarCollapse.classList.toggle('open');
});



*/
//users start//

function show(){
  
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);

    var users = {
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      image: ""
    }; 

    for (let i = 0; i < myObj.users.length; i++) {
       
      users.id =myObj.users[i].id;
      users.firstName = myObj.users[i].firstName;
      users.lastName = myObj.users[i].lastName;
      users.age = myObj.users[i].age;
      users.gender = myObj.users[i].gender;
      users.email = myObj.users[i].email;
      users.phone = myObj.users[i].phone;
      users.image = myObj.users[i].image;

      


      var display = document.getElementById("table");
      var newrow = display.insertRow(-1); 
      var cell1 = newrow.insertCell(0);
      var cell2 = newrow.insertCell(1);
      var cell3 = newrow.insertCell(2);
      var cell4 = newrow.insertCell(3);
      var cell5 = newrow.insertCell(4); 
      var cell6 = newrow.insertCell(5);
      var cell7 = newrow.insertCell(6);
      var cell8 = newrow.insertCell(7);
      var cell9 = newrow.insertCell(8);

      cell1.innerHTML = users.id;
      cell2.innerHTML = users.firstName;
      cell3.innerHTML = users.lastName;
      cell4.innerHTML = users.age;
      cell5.innerHTML = users.gender;
      cell6.innerHTML = users.email;
      cell7.innerHTML = users.phone;
      cell8.innerHTML = "<td>"+"<img src=" + users.image + " height=100px width=100px id=usersimg></td>";
      cell9.innerHTML = `<button onclick= viewMore(${users.id})> View More </button>`
    }
  }

  xmlhttp.open("GET", "https://dummyjson.com/users");
  xmlhttp.send();
}


//modal box start//

function viewMore(usersid){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
 
  
 
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

    var url="https://dummyjson.com/users/"+usersid;

    const xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onload = function() {
  const myObj1 = JSON.parse(this.responseText); 


  var image =document.getElementById("image1");
  image.src = myObj1.image;

  var id = document.getElementById("Id");
  id.innerHTML=`Id :${myObj1.id}`;

  var fname = document.getElementById("firstname");
  fname.innerHTML=`FirstName :${myObj1.firstName}`;

  var lname = document.getElementById("lastname");
  lname.innerHTML=`LastName :${myObj1.lastName}`;

  var age = document.getElementById("age");
  age.innerHTML=`Age :  ${myObj1.age}`;

  var bank = document.getElementById("bank");
  bank.innerHTML=`CardExpire : ${myObj1.bank.cardExpire} <br>  CardExpire : ${myObj1.bank.cardNumber}<br>
   CardType : ${myObj1.bank.cardType}<br> Currency : ${myObj1.bank.currency }<br>Iban : 
  ${myObj1.bank.iban}` ; 

  var cmpany = document.getElementById("company");

  cmpany.innerHTML= `Address : ${myObj1.company.address.address} <br> City : ${myObj1.company.address.city} <br>
  Coordinates : Lat : ${myObj1.company.address.coordinates.lat} <br>Coordinates : Lng : ${myObj1.company.address.coordinates.lng}
  <br>PostalCode :  ${myObj1.company.address.postalCode} <br> PostalCode :  ${myObj1.company.address.state} `;
   
  
  // alert(myObj1.id+myObj1.age+myObj1.gender);
}
xmlhttp1.open("GET", url);
xmlhttp1.send();

}


//Product//

//function category

function showLIST(){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function()  {
  const myObj = JSON.parse(this.responseText);
  //var category = "";
   var result =document.getElementById("cata");
  for(let i=0;i<myObj.length;i++)
  {
   
  var category =  document.createElement("option");
  
  category.value = myObj[i];
  category.text = myObj[i];
  //alert(category.value);
  result.options.add(category);
  
  }
  
  }
  
  xmlhttp.open("GET", "https://dummyjson.com/products/categories");
  xmlhttp.send();
  }





//category display

/*function catadisplay(){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function()  {
  const myObj = JSON.parse(this.responseText);

alert(document.getElementById("cata").options[0].selectedItem)


}
xmlhttp.open("GET", "https://dummyjson.com/products/categories");
xmlhttp.send();
}
*/

/*category display*/

function catadisplay() {
  const xmlhttp = new XMLHttpRequest();  
  var item;
  const selectElement = document.getElementById("cata");
  const idx = selectElement.selectedIndex;
  item = selectElement.options[idx].value;
  var apistr="https://dummyjson.com/products/category/"+item ;
  
  let output = "";

  xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);

  let result = document.getElementById("count");

  result.innerHTML = "TOTAL PRODUCTS      : "+ myObj.products.length;

 
  for (let i = 0; i < myObj.products.length; i++) {
  
    output += "<div class="+"card>"+
  
        "<img src=" +myObj.products[i].thumbnail+ " id="+"proimg>"+
        "<h5 id=card-head>"
        +myObj.products[i].title+"<br>"+
       
        "<p  id=card-text>"
         
        
        
       
          +myObj.products[i].description+"</p>"+
          "<div id=price>"+"₹"+ myObj.products[i].price+"</div>"+
          " <button type=submit onclick='display("+myObj.products[i].id+")' id=btn bg-primary >" +"Read More"+ "</button>"+
          
          "</div>" ;
  
  
          document.getElementById("cards1").innerHTML = output;
  

  }
}


  
  
xmlhttp.open("GET", apistr);
xmlhttp.send();

}


    //    document.getElementById("cards1").innerHTML = output;

///alert(hai);


  
    /*for (let i = 0; i < options.length; i++) {
      const optionValue = options[1].value;
     // optionValue;
    
    }*/
  

  //}

  
    
  //}
/*alert("https://dummyjson.com/products/categories"+options);
    xmlhttp.open("GET", "https://dummyjson.com/products/categories"+options);
    xmlhttp.send();

  };

 */



/*response cards*/

/** 
let cards = [];
let imgDiv = [];
let img = [];
let heading =[];


let names = ["","Detective","cowboy","hacker"];

let images = ["","micky.png","micky.png","micky.png"];

for(let i=1; i<=3;i++){
  cards[i] =document.createElement('div');
  cards[i].setAttribute('class','card');
  cards[i].setAttribute('id',`card-${i}`);


imgDiv[i] = document.createElement('div');
imgDiv[i].setAttribute('id',`img-${i}`);

img[i] = document.createElement('img');
img[i].src = images[i];

heading[i] = document.createElement('h1');
heading[i].setAttribute('id',`head-${i}`);
heading[i].innerHTML = names[i];




imgDiv[i].appendChild(img[i]);



cards[i].appendChild(imgDiv[i]);


 
cards[i].appendChild(heading[i]);


cardsContainer.appendChild(cards[i]);




}**/

//end of card


//api card
/**function show5(){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);

let result = document.getElementById("count");
result.innerHTML = "Total products      : "+ myObj.products.length;


/*var cardsContainer =  document.createElement("cardsContainer");*/
/**var cardsContainer =  document.getElementById("cardsContainer")


for(let i=0; i<myObj.products.length;i++){

 

  let card =document.createElement('div');
  card.setAttribute('class','card');
  /*card.setAttribute('id',`card`);*/


 /**let imgDiv = document.createElement('div');
/*imgDiv.setAttribute('id',`img`);*/

 /**let img = document.createElement('img');
img.src = myObj.products[i].thumbnail;

 let title = document.createElement('h3');
/*title.setAttribute('id',`title`);*/
/**title.innerHTML = myObj.products[i].title;

let description = document.createElement('h4');
/*description.setAttribute('id',`description`);*/
/**description.innerHTML = myObj.products[i].description;

let price = document.createElement('h5');
/*description.setAttribute('id',`description`);*/
/**price.innerHTML = myObj.products[i].price;

let button =document.createElement('button');
button.setAttribute('class','btn btn-dark');
/*button.setAttribute('id',`btn`);*/
/**button.innerHTML = "Add to Cart";




imgDiv.appendChild(img);

card.appendChild(imgDiv);

card.appendChild(title);

card.appendChild(description);

card.appendChild(price);

card.appendChild(button);

cardsContainer.appendChild(card);


}

/*let container = document.getElementById("cardsContainer");
container.appendChild(cardsContainer);
*/

/**  }


xmlhttp.open("GET", "https://dummyjson.com/products");
  xmlhttp.send();
  }
*/
//card

function show5(){
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);

let result = document.getElementById("count");

result.innerHTML = "Total products      : "+ myObj.products.length;

  let output = "";
  for (let i = 0; i < myObj.products.length; i++) {
  
    output += "<div class="+"card>"+
  
        "<img src=" +myObj.products[i].thumbnail+ " id="+"proimg>"+
        "<h5 id=card-head>"
        +myObj.products[i].title+"<br>"+
       
        "<p  id=card-text>"
         
        
        
       
          +myObj.products[i].description+"</p>"+
          "<div id=price>"+"₹"+ myObj.products[i].price+"</div>"+
          " <button type=submit onclick='display("+myObj.products[i].id+")' id=btn bg-primary >" +"Read More"+ "</button>"+
          
          "</div>" ;
         
      
          document.getElementById("cards1").innerHTML = output;
  
  
  }
  
  }
  
  xmlhttp.open("GET", "https://dummyjson.com/products");
  xmlhttp.send();
  }



  function loadFunctions() {
    show();
    show5();
    showLIST();
    
  }