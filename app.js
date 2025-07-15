
let pic = 0
function lup(){
    setTimeout(() => {
      if (pic == 0){
        document.getElementById('canpic').src = "테스트1.png";
        pic++;
      }else{
        document.getElementById('canpic').src = "테스트2.png";
        pic = 0;
      }
      lup();
    }, 3000);   
}
lup();