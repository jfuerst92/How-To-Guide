var base = "http://api.brewerydb.com/v2"


document.addEventListener('DOMContentLoaded', bind); //DOM must load first before binding buttons.

function bind(){
    var el = document.getElementById('beerSub');
    el.addEventListener('click', function(event){
        var beerName = document.getElementById('br').value;
        var bts = beerName.split(' ').join('_');
        var type = "&type=beer";
        var key = "&key=d9e3c76540e2267dd4f9e09ede879957";
        var search = "/search?q=";
        var fullUrl = base + search + bts + type + key; //construct a custom url based on the user's input
        var req = new XMLHttpRequest(); //create the request with the new url
        req.open("GET", fullUrl, true);
        //req.setRequestHeader("Access-Control-Allow-Origin", "*");
        //req.setRequestHeader('Access-Control-Allow-Methods', 'GET');
        req.send(null);
       req.addEventListener('load', function(){
           //console.log("Request Recieved" + req.responseText);
            var response = JSON.parse(req.responseText); //parse the response text
            console.log(response);
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