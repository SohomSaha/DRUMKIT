var i;
for(i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var key =this.innerHTML;
    makesound(key);
    buttonanimation(key);
  });
}
  document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
  });
  function makesound(key)
  {
    switch(key)
    {
      case 'w':
      var p1=new Audio("sounds/crash.mp3");
      p1.play();
      break;
      case 'a':
      var p2=new Audio("sounds/kick-bass.mp3");
      p2.play();
      break;
      case 's':
      var p3=new Audio("sounds/snare.mp3");
      p3.play();
      break;
      case 'd':
      var p4=new Audio("sounds/tom-1.mp3");
      p4.play();
      break;
      case 'j':
      var p5=new Audio("sounds/tom-2.mp3");
      p5.play();
      break;
      case 'k':
      var p6=new Audio("sounds/tom-3.mp3");
      p6.play();
      break;
      case 'l':
      var p7=new Audio("sounds/tom-4.mp3");
      p7.play();
      break;
      default:
    }
  }
  function buttonanimation(key)
  {
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+key).classList.remove("pressed");
    },100);
  }
