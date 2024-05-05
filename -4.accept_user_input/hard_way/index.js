let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("inputText").value;
    document.getElementById("myH1").textContent = `Welcome, ${username}`
}