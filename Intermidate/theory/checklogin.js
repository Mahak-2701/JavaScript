let user = prompt("Who's there?", "");
if (user === 'Admin') {
    let pass = prompt("Enter password","");
    if (pass === "TheMaster") {
        alert("Welcome!!");
    }
    else if (pass = "" || pass == "Null") {
        alert("cancelled");
    }
    else {
        alert("wrong password");
    }
}
else if (user == "" || user == "null") {
    alert("cancelled");
}
else {
    alert("I don't you!");
}
