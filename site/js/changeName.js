var object;

function change (obj) {
   document.getElementById('bg').style.display = "block";
   document.getElementById('confirm').style.display = "flex";
   document.getElementById('confirm-text').value = obj.innerHTML;
   object = obj;
}

document.getElementById('cancel').onclick = function() {
   document.getElementById('bg').style.display = "none";
   document.getElementById('confirm').style.display = "none";
}

document.getElementById('apply').onclick = function() {
   document.getElementById('bg').style.display = "none";
   document.getElementById('confirm').style.display = "none";
   object.innerHTML = document.getElementById('confirm-text').value;
}
