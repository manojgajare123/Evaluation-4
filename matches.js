var jobarr=JSON.parse(localStorage.getItem("schedule"));

displaydata(jobarr);


var filter=document.querySelector("#filterVenue")
filter.addEventListener("change",filtervenue)
function filtervenue(){
    var selected=document.querySelector("#filterVenue").value 
    var data=jobarr.filter(function(elem){
        return selected==elem.venue
    })
    displaydata(data)
}
var favourietarr=JSON.parse(localStorage.getItem("favourits"))|| [];
function displaydata(jobarr)
{
    document.querySelector("tbody").innerHTML=""
    jobarr.forEach (function(elem) {
    
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.innerText = elem.matchName;

            var td2 = document.createElement("td");
            td2.innerText = elem.teamA;

            var td3 = document.createElement("td");
            td3.innerText = elem.teamB;

            var td4 = document.createElement("td");
            td4.innerText = elem.date;

            var td5 = document.createElement("td");
            td5.innerText = elem.venue;

            var td6 = document.createElement("td");
            td6.innerText = "favourites";
            td6.style.color = "green";
            td6.style.cursor = "pointer";
            td6.addEventListener("click", function () {
                favouritefunction(elem);
            });

            tr.append(td1, td2, td3, td4, td5, td6);
            document.querySelector("tbody").append(tr);
        });
}
function favouritefunction(elem){
    favourietarr.push(elem);
    console.log(favourietarr);
    localStorage.setItem("favourites",JSON.stringify(favourietarr));
}