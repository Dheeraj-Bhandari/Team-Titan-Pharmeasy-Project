// Narbar Login

var loginstatus = JSON.parse(localStorage.getItem("PhoneNumber")) || [];

//log out funnction
function logoutFunc(){
    localStorage.clear();
    alert("Log Out Succesfully ");
    window.location.href="Cart_Page.html";  
}

function ShopFunc(){

}

function carFunc(){

}

function OfferFunc(){

}

//  Login Page 

if(loginstatus.length>0){
    // document.getElementById("loginbtn").innerHTML=<i class="fa-solid fa-user"></i>;
    document.getElementById("loginbtn").innerText="Team Titan";
    // document.getElementById("LoginToViewOffer").innerText="Hurray ! Click Here To View Offers"
    var div = document.createElement("div");
        div.setAttribute("class" ,"dropdown");
        var span = document.createElement("span");
        span.innerText="See More";
       
        var div2= document.createElement("div");
        div2.setAttribute('class', "dropdown-content");
        var p = document.createElement("p");
        p.setAttribute("id","logoutNavBar");
        p.addEventListener("click", logoutFunc);
        p.innerText= "Log Out";

        var p2 = document.createElement("p");
        p2.addEventListener("click", ShopFunc);
        p2.innerText= "Shop";

        var p3 = document.createElement("p");
        p3.addEventListener("click", carFunc);
        p3.innerText= "Cart";

        var p4 = document.createElement("p");
        p4.addEventListener("click", OfferFunc);
        p4.innerText= "Offer";

        div2.append(p2,p3,p4,p);
        div.append(span ,div2);
        document.getElementById("navbarLogin").append(div);

  }

document.querySelector("#loginbtn").addEventListener("click", validateLogin)


function validateLogin(){
        console.log(loginstatus.length)
      if(loginstatus.length==0){
        showlogin();
      }
      
}

function showlogin() {
    document.querySelector("#loginpage").style.display = "block";
  
    document.querySelector("#loginpage").style.opacity = "1";

}
document.querySelector("#closebtn").addEventListener("click", hidelogin)

function hidelogin() {
    document.querySelector("#loginpage").style.display = "none";
    document.querySelector('body').style.opacity = "1";

}
// var phnnumber = loginform.loginphone.value;
document.querySelector("#loginform").addEventListener("submit", function () {
    event.preventDefault()
    var phnnumber = loginform.loginphone.value;
    // console.log('number:', typeof(phnnumber))
    if (phnnumber.length == 10) {
        document.querySelector("#loginbottom").innerHTML = "";
        var para = document.createElement("p")
        para.innerText = "Enter OTP sent to +91 " + phnnumber;
        var otpinput = document.createElement("input");
        otpinput.setAttribute("type", "number");
        otpinput.setAttribute('placeholder', "Enter OTP here")
        var btn = document.createElement("input");
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', "CONTINUE");
        btn.style.backgroundColor = "#10847e";
        btn.style.color = "white"
        var paralast = document.createElement('p');
        var error = document.createElement('p');
        error.style.color = "red"

        paralast.innerText = "By clicking continue, you agree with our Privacy Policy"
        btn.addEventListener('click', function () {
            otpconfirm(otpinput.value, error,phnnumber)
        })

        document.querySelector("#loginbottom").append(para, otpinput, error, btn, paralast);

    } else {
        document.querySelector("#errormsg").innerText = "Enter a 10 Digit Valid Mobile number"
        document.querySelector("#errormsg").style.color = "red";
    }


})
function otpconfirm(v, error, phnnumber) {
   
    if (v == "1234") {
        localStorage.setItem("PhoneNumber",JSON.stringify(phnnumber));
        document.querySelector("#loginpage").style.display = "none";
        document.querySelector("#loginbtn").innerText = "Team Titan"

        alert("Login Succesfully");
        
        window.location.href="Cart_Page.html";  
        

 
    } else {
        error.innerText = "The OTP entered is incorrect."
    }
    
}


//  Deals Of The Days

var DealsOftheDayOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/I40513/softovac-sf-constipation-powder-bottle-of-250-g-2-1654166050.jpg?dim=1280x0",
    name: "Softovac Sf Constipation Powder",
    mrp: "849.00",
    price: "619.77",
    off: "27%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/270551/revital-h-men-multivitamin-with-zinc-ginseng-for-immunity-strong-bones-energy-10-capsules-1-1654078581.jpg?dim=1280x0",
    name: "Revital H Men Multivitamin With Zinc",
    mrp: "599.00",
    price: "269.55",
    off: "55%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=1280x0",
    name: "Pharmeasy Multivitamin Multimineral - Immunit",
    mrp: "54.90",
    price: "52.16",
    off: "34%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/D47230/everyuth-naturals-body-lotion-sun-care-berries-100ml-2-1641795165.jpg?dim=1280x0",
    name: "Everyuth Naturals Body Lotion Sun Care Berries",
    mrp: "975.00",
    price: "750.00",
    off: "22%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1280x0",
    name: "Evion 400mg Strip Of 10 Capsules",
    mrp: "399.00",
    price: "199.50",
    off: "50%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/F38564/livogen-adult-tonic-200ml-2-1656661939.jpg?dim=1280x0",
    name: "Livogen Adult Tonic 200ml",
    mrp: "110.00",
    price: "93.50",
    off: "15%",
},
]

DealsOftheDayOBJ.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "DealsofTheDayImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "DealsofTheDayProdName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "DealsofTheDayMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");

    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "DealsofTheDayPrice");

    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("DealsofTheDay").append(div);

    img.addEventListener("click", function(){
        FecthDealsOftheDayProduct(index);
        
    });

})

// In the Spot Light
var InTheSpotLightOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=256x0",

    name: "Everherb Karela Jamun Juice - Helps",
    mrp: "399.00",
    price: "207.48",
    off: "48%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=256x0",
    name: "Liveasy Wellness Calcium, Magnesium,",
    mrp: "599.00",
    price: "329.45",
    off: "45%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=256x0",
    name: "Pharmeasy All-in -one Vaporizer",
    mrp: "599.00",
    price: "269.15",
    off: "55%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/B39499/pharmeasy-hot-water-bag-blue-2-1656420198.jpg?dim=256x0",
    name: "Pharmeasy Hot Water Bag - Relieves Pain -",
    mrp: "349.00",
    price: "244.30",
    off: "30%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-2-1656417512.jpg?dim=256x0",
    name: "Pharmeasy Calcium, Magnesium, Vitamin",
    mrp: "499.00",
    price: "299.40",
    off: "40%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=256x0",
    name: "Pharmeasy Multivitamin",
    mrp: "699.00",
    price: "419.40",
    off: "40%",
},
]

InTheSpotLightOBJ.map(function (ele , index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "InTheSpotLightImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "InTheSpotLightProName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "InTheSpotLightMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");

    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "InTheSpotLightPrice");

    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("InTheSpotLight").append(div);
    img.addEventListener("click", function(){
        FecthSpotLightProduct(index);
        
    });

})