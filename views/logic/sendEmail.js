function sendEmail() {
var name = document.getElementById("name").value;
var senderEmail = document.getElementById("email").value;
var comments = document.getElementById("comments").value;
var link = constructLink(name, senderEmail, comments);
window.location.href = link;
}

function constructLink (name, senderEmail, comments){
return "mailto:aprimit2202@gmail.com&senderContact="+sendEmail+"&senderName="+name+"&body="+comments
}