window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);
        showdata(jsondata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showdata(people){
    console.log(Object.keys(people).length);
    var showdiv = document.querySelectorAll("#layer div");
    var keys = Object.keys(people);
    for(var i =0; i< keys.length;i++){
        
        var temp = document.createElement("p");
        var picimport = document.createElement("img");
        temp.innerHTML = people[keys[i]].brandname + " " + people[keys[i]].price;
        picimport.src = people[keys[i]].pic;
        showdiv[i].appendChild(temp);
        showdiv[i].appendChild(picimport);
    }
}

