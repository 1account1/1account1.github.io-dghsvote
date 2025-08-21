const today = new Date();
const day = today.getDate();
let dday = 28 - day;document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('sideshowbar').innerHTML = '<div style="margin-bottom: 30px;"><span class="sbtn" style="display: inline-block; width: 150px;">선거 <span id="dday" style="font-weight: bolder;"></span></span></div><div style="margin-bottom: 30px;"><span class="sbtn" style="display: inline-block; width: 150px;">공식 선거 운동 기간</span></div><div style="margin-bottom: 30px;"><span class="sbtn" style="display: inline-block; width: 150px;"><a href="video.html">선거광고보기</a></span></div><div class="sbtn" style="display: none;"><canvas id="myChartt" width="100" height="150"></canvas>;'
  document.getElementById('dday').innerText = "D - " + dday;
})