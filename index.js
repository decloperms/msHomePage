window.onscroll = function() {myFunction()};



function myFunction() {
  console.log(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 363 ){
    document.querySelector("#pic1").classList.add("pic-big");
    document.querySelector("#pic2").classList.remove("pic-big");
    document.querySelector("#pic3").classList.remove("pic-big");
    document.querySelector("#pic4").classList.remove("pic-big");
    document.querySelector("#pic5").classList.remove("pic-big");
    document.querySelector("#text1").style.display="block"
    document.querySelector("#text2").style.display="none"
    document.querySelector("#text3").style.display="none"
    document.querySelector("#text4").style.display="none"
    document.querySelector("#text5").style.display="none"
    document.querySelector("#span1").classList.add("neon")
    document.querySelector("#span2").classList.add("flux")
    document.querySelector("#span3").classList.add("flux")
    document.querySelector("#span4").classList.add("flux")
    document.querySelector("#span5").classList.add("flux")
    document.querySelector("#span1").classList.remove("flux")
    document.querySelector("#span2").classList.remove("neon")
    document.querySelector("#span3").classList.remove("neon")
    document.querySelector("#span4").classList.remove("neon")
    document.querySelector("#span5").classList.remove("neon")
}
  if (document.documentElement.scrollTop > 364 && document.documentElement.scrollTop < 726 ){
    document.querySelector("#pic1").classList.remove("pic-big");
    document.querySelector("#pic2").classList.add("pic-big");
    document.querySelector("#pic3").classList.remove("pic-big");
    document.querySelector("#pic4").classList.remove("pic-big");
    document.querySelector("#pic5").classList.remove("pic-big");
    document.querySelector("#text1").style.display="none"
    document.querySelector("#text2").style.display="block"
    document.querySelector("#text3").style.display="none"
    document.querySelector("#text4").style.display="none"
    document.querySelector("#text5").style.display="none"
    document.querySelector("#span1").classList.add("flux")
    document.querySelector("#span2").classList.add("neon")
    document.querySelector("#span3").classList.add("flux")
    document.querySelector("#span4").classList.add("flux")
    document.querySelector("#span5").classList.add("flux")
    document.querySelector("#span1").classList.remove("neon")
    document.querySelector("#span2").classList.remove("flux")
    document.querySelector("#span3").classList.remove("neon")
    document.querySelector("#span4").classList.remove("neon")
    document.querySelector("#span5").classList.remove("neon")
}
if (document.documentElement.scrollTop > 727 && document.documentElement.scrollTop < 1089 ){
    document.querySelector("#pic1").classList.remove("pic-big");
    document.querySelector("#pic2").classList.remove("pic-big");
    document.querySelector("#pic3").classList.add("pic-big");
    document.querySelector("#pic4").classList.remove("pic-big");
    document.querySelector("#pic5").classList.remove("pic-big");
    document.querySelector("#text1").style.display="none"
    document.querySelector("#text2").style.display="none"
    document.querySelector("#text3").style.display="block"
    document.querySelector("#text4").style.display="none"
    document.querySelector("#text5").style.display="none"
    document.querySelector("#span1").classList.add("flux")
    document.querySelector("#span2").classList.add("flux")
    document.querySelector("#span3").classList.add("neon")
    document.querySelector("#span4").classList.add("flux")
    document.querySelector("#span5").classList.add("flux")
    document.querySelector("#span1").classList.remove("neon")
    document.querySelector("#span2").classList.remove("neon")
    document.querySelector("#span3").classList.remove("flux")
    document.querySelector("#span4").classList.remove("neon")
    document.querySelector("#span5").classList.remove("neon")
}
if (document.documentElement.scrollTop > 1090 && document.documentElement.scrollTop < 1452 ){
    document.querySelector("#pic1").classList.remove("pic-big");
    document.querySelector("#pic2").classList.remove("pic-big");
   document.querySelector("#pic3").classList.remove("pic-big");
    document.querySelector("#pic4").classList.add("pic-big");
    document.querySelector("#pic5").classList.remove("pic-big");
    document.querySelector("#text1").style.display="none"
    document.querySelector("#text2").style.display="none"
   document.querySelector("#text3").style.display="none"
    document.querySelector("#text4").style.display="block"
    document.querySelector("#text5").style.display="none"
    document.querySelector("#span1").classList.add("flux")
    document.querySelector("#span2").classList.add("flux")
    document.querySelector("#span3").classList.add("flux")
    document.querySelector("#span4").classList.add("neon")
    document.querySelector("#span5").classList.add("flux")
    document.querySelector("#span1").classList.remove("neon")
    document.querySelector("#span2").classList.remove("neon")
    document.querySelector("#span3").classList.remove("neon")
    document.querySelector("#span4").classList.remove("flux")
    document.querySelector("#span5").classList.remove("neon")
}
if (document.documentElement.scrollTop > 1453 && document.documentElement.scrollTop < 1811 ){
    document.querySelector("#pic1").classList.remove("pic-big");
    document.querySelector("#pic2").classList.remove("pic-big");
    document.querySelector("#pic3").classList.remove("pic-big");
    document.querySelector("#pic4").classList.remove("pic-big");
    document.querySelector("#pic5").classList.add("pic-big");
    document.querySelector("#text1").style.display="none"
    document.querySelector("#text2").style.display="none"
    document.querySelector("#text3").style.display="none"
    document.querySelector("#text4").style.display="none"
    document.querySelector("#text5").style.display="block"
    document.querySelector("#span1").classList.add("flux")
    document.querySelector("#span2").classList.add("flux")
    document.querySelector("#span3").classList.add("flux")
    document.querySelector("#span4").classList.add("flux")
    document.querySelector("#span5").classList.add("neon")
    document.querySelector("#span1").classList.remove("neon")
    document.querySelector("#span2").classList.remove("neon")
    document.querySelector("#span3").classList.remove("neon")
    document.querySelector("#span4").classList.remove("neon")
    document.querySelector("#span5").classList.remove("flux")
}
}

window.onload=function(){
  document.getElementById("span1").addEventListener("onclick", function(){
    window.scrollBy(0,364);
  });
}
