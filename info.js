var data = {
    "apartments": [
        {
        	"name": "The Pavilion on Berry",
        	"image": "image-1.jpg",
        	"price": 512,
        	"popularity": 4,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":1
        },
        {        	
        	"name": "Radius @15th",
        	"image": "image-2.jpg",
        	"price": 492,
        	"popularity": 5,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":2
        },
        {

        	"name": "416 Lofts",
        	"image": "image-3.jpg",
        	"price": 460,
        	"popularity": 3,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":3
        },
        {

        	"name": "Edge on Oak",
        	"image": "image-4.jpg",
        	"price": 332,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":4
        },
        {

        	"name": "Woodland Hills",
        	"image": "image-5.jpg",
        	"price": 522,
        	"popularity": 1,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":5
        },
        {

        	"name": "Westwood House",
        	"image": "image-6.jpg",
        	"price": 511,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":6
        },
        {

        	"name": "Green Room",
        	"image": "image-7.jpg",
        	"price": 352,
        	"popularity": 6,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":7
        },
        {

        	"name": "Mint Room",
        	"image": "image-8.jpg",
        	"price": 432,
        	"popularity": 2,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":8
        }
        ,
        {

        	"name": "Purple Room",
        	"image": "image-9.jpg",
        	"price": 572,
        	"popularity": 10,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":9
        },
        {

        	"name": "Blue Room",
        	"image": "image-10.jpg",
        	"price": 482,
        	"popularity": 12,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":10
        },
        {

        	"name": "Roomy Room",
        	"image": "image-11.jpg",
        	"price": 578,
        	"popularity": 11,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":11
        },
        {

        	"name": "Angle Room",
        	"image": "image-12.jpg",
        	"price": 611,
        	"popularity": 9,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN",
            "index":12
        }
    ]
};
var name ="name";
var price="price";
var address="address"
var img="img";
var tab ="tab";
//modal
var inname ="inname";
var inprice="inprice";
var inaddress="inaddress"
var inimg="inimg";

//initial
for (var i=1;i<=5;i++){    
    init(i,1);
}

function init(i,n){
    var a = document.getElementById(name+i);
    a.attributes["value"].nodeValue = data.apartments[n+i-2].index;
    document.getElementById(name+i).innerHTML=data.apartments[n+i-2].name;
    document.getElementById(price+i).innerHTML=data.apartments[n+i-2].price;
    document.getElementById(address+i).innerHTML=data.apartments[n+i-2].description;
    document.getElementById(img+i).src=data.apartments[n+i-2].image;
    document.getElementById(tab+i).style.visibility="initial";
}

//btn1
function changeApt1(){
    n=1
    for (var i=1;i<=5;i++){
        init(i,n); }   
}
//btn2
function changeApt2(){
    n=6
    for (var i=1;i<=5;i++){
        init(i,n);}    
}

//btn3
function changeApt3(){
    n=11;
    for (var i=1;i<=data.apartments.length-n+1;i++){
        init(i,n);}
    for (var i=5;i>data.apartments.length%5;i--){
    document.getElementById(tab+i).style.visibility="hidden";
    }
}

//sort pop and price
function sortprice(a,b){  
    return a.price-b.price; 
} 
function sortpop(a,b){  
    return a.popularity-b.popularity; 
}
function btnSort1(){
    data.apartments.sort(sortprice);
    for(var i=0;i< data.apartments.length;i++){
        data.apartments[i].index=i+1;
    }
    changeApt1();
}

function hello() {
  console.log('Hello world');
}

function btnSort2(){
data.apartments.sort(sortpop);
    for(var i=0;i< data.apartments.length;i++){
        data.apartments[i].index=i+1;
    }
    changeApt1();
}

function detialView(obj){
    var num = obj.getAttribute('value');
    document.getElementById(inname).innerHTML=data.apartments[num-1].name;
    document.getElementById(inprice).innerHTML=data.apartments[num-1].price;
    document.getElementById(inaddress).innerHTML=data.apartments[num-1].description;
    document.getElementById(inimg).src=data.apartments[num-1].image;
}

