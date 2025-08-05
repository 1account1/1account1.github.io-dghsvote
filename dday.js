const today = new Date();
const day = today.getDate();
let dday = 28 - day;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('dday').innerText = "D - " + dday;
})