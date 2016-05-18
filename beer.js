/******************
 * beer.js
 * by: Joseph Fuerst
 * 5/8/2016
 ******************/


/******************************************
$(document).ready(function(){
    $("button").click(function(){
        $.get("http://api.brewerydb.com/v2/search?q=Two_Hearted_Ale&type=beer&key=d9e3c76540e2267dd4f9e09ede879957&format=xml", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
********************************************/

//var base = "http://api.brewerydb.com/v2"
var base = "http://jfuerst92.github.io/How-To-Guide/proxy.php"

document.addEventListener('DOMContentLoaded', bind); //DOM must load first before binding buttons.

function bind(){
    var el = document.getElementById('beerSub');
    el.addEventListener('click', function(event){
        var beerName = document.getElementById('br').value;
        var bts = beerName.split(' ').join('_');
        var type = "%26type%3dbeer";
        var key = "%26key%3dd9e3c76540e2267dd4f9e09ede879957";
        var route = "?route=%2fv2%2fsearch%3fq%3d";
        var fullUrl = base + route + bts + type + key; //construct a custom url based on the user's input
        var req = new XMLHttpRequest(); //create the request with the new url
        req.open("GET", fullUrl, true);
        //req.setRequestHeader("Access-Control-Allow-Origin", "*");
        //req.setRequestHeader('Access-Control-Allow-Methods', 'GET');
        req.send(null);
       req.addEventListener('load', function(){
            var response = JSON.parse(req.responseText); //parse the response text
            //console.log(response);
            document.getElementById("sb").textContent = response.data[0].name;          //output the relevant data
            document.getElementById("id").textContent = response.data[0].id;
            document.getElementById("try1").textContent = response.data[1].name;
            document.getElementById("try2").textContent = response.data[2].name;
            //more can be added, these are the minimum
             event.preventDefault();
        });
        
        //console.log(JSON.parse(req.responseText));
        event.preventDefault();
    });
}
    /*var el2 = document.getElementById('zipSub')
     el2.addEventListener('click', function(event){
     var text = {zipcode:null, cc:null}
     var appid = "&appid=fa7d80c48643dfadde2cced1b1be6ca1"
     text.zipcode = document.getElementById('zip').value; //store zip entered in text
     text.cc = document.getElementById('cc').value; //store country entered into text
     var zipUrl = url + "zip=" + text.zipcode + ',' + text.cc + appid; //construct new URL
     var req = new XMLHttpRequest(); //make new request
     req.open("GET", zipUrl, true)
     req.addEventListener('load', function(){
     if (req.status < 400)
     {
     var response = JSON.parse(req.responseText);
     document.getElementById("curCity").textContent = response.name;  //display selected returned values
     document.getElementById("tmp").textContent = response.main.temp +"K";
     document.getElementById("hmd").textContent = response.main.humidity+"%";

     }
     else
     {
     console.log("Error: "+request.statusText);
     }
     });
     req.send(null);
     //console.log(JSON.parse(req.responseText));
     event.preventDefault();
     });*/

//}
