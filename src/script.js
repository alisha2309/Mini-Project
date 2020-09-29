var img=null;
var imgred=null;
var imggreen=null;
var imgblue=null;
var imgyellow=null;
var imgrainbow=null;
var imgblur=null;
var imggrey=null;
var imgreset=null;
var canvas;

function upload()
{
  var imgup=document.getElementById("img");
  img=new SimpleImage(imgup);
  imgred=new SimpleImage(imgup);
  imggreen=new SimpleImage(imgup);
  imgblue=new SimpleImage(imgup);
  imgyellow=new SimpleImage(imgup);
  imgrainbow=new SimpleImage(imgup);
  imgblur=new SimpleImage(imgup);
  imggrey=new SimpleImage(imgup);
  imgreset=new SimpleImage(imgup);
  canvas=document.getElementById("imgcan");
  img.drawTo(canvas);
  return;
}

function doRed(){
  alert("changing to RED !!");
  for(var pixel of imgred.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(avg<128)
        {
          pixel.setRed(avg*2);
          pixel.setGreen(0);
      pixel.setBlue(0);
        }
      else
        {
           pixel.setRed(255);
      pixel.setGreen(avg * 2);
      pixel.setBlue(avg * 2);
}
    }
  canvas = document.getElementById("imgcan");
  imgred.drawTo(canvas);
  return;
}


function doGreen() {
  alert("Changing to Green ");
  for (var pixel of imggreen.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(avg * 2);
      pixel.setBlue(0);
    } else {
      pixel.setRed(avg * 2);
      pixel.setGreen(255);
      pixel.setBlue(avg * 2);
    }
  }
  canvas = document.getElementById("imgcan");
  imggreen.drawTo(canvas);
  return;
}

function doBlue() {
  alert("Changing to blue !! ");
  for (var pixel of imgblue.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(avg * 2);
    } else {
      pixel.setRed(avg * 2);
      pixel.setGreen(avg * 2);
      pixel.setBlue(255);
    }
  }
  canvas = document.getElementById("imgcan");
  imgblue.drawTo(canvas);
  return;
}
function doGrey(){
  alert("Changing to grey !! ");
  imageGreyMod(imggrey);
  var canvas = document.getElementById("imgcan");
  imggrey.drawTo(canvas);
}
function imageGreyMod() {
  for (var pixel of imggrey.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  return imggrey;
}


function doClear() {
  var imgTemp = document.getElementById("imgcan");
  var clearImg = imgTemp.getContext("2d");
  clearImg.clearRect(0, 0, imgTemp.width, imgTemp.height);
  return;
}
function doReset() {
  var canvas = document.getElementById("imgcan");
  img.drawTo(canvas);
  return;
}