for (var i = 0; i <= 5; i++) {
    var div = document.createElement("div");//create a div 
    var h1 = document.createElement("h1"); //create h1 in div
    h1.innerHTML = "this is h1";
    div.appendChild(h1);//append h1 in  
    h1.style.color = "red";
    document.body.appendChild(div);
}