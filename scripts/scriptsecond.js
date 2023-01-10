var url = new URL(window.location.href);
var status = url.searchParams.get("selection");
var secondbuttonequal = document.querySelector(".secondbuttonequal");
var secondbuttonmultiply = document.querySelector(".secondbuttonmultiply");
var hamburgermenu = document.querySelector(".hamburgerdrop")
var html = document.querySelector(".htmlsecond")
var plan = document.querySelector(".plan")
var storage = document.querySelector(".storage")
var features = document.querySelector(".features")
var data = document.querySelector(".data")
var settings = document.querySelector(".settings")
var secondmainmain = document.querySelector(".mainmain")
 console.log("selection is:" + status)

function hamburger(){
  hamburgermenu.classList.add("seconddropdown");
  secondbuttonequal.classList.add("secondremove");
  html.classList.add("overflowuit")

}
function hamburgerterug(){
  hamburgermenu.classList.remove("seconddropdown");
  secondbuttonequal.classList.remove("secondremove");
  html.classList.remove("overflowuit")
}



function selectioncheck(){

  if (status == 1) {
    console.log("plan");
    plan.classList.remove("displaysection");
    document.title = "Your Plan";
    secondmainmain.classList.add("planmain");

  }
  else if (status == 2) {
    console.log("storage");
    storage.classList.remove("displaysection")
    document.title = "Your Storage";
    secondmainmain.classList.add("storagemain");
  }
  else if (status == 3) {
    console.log("features");
    features.classList.remove("displaysection");
    document.title = "iCloud+ Features";
    secondmainmain.classList.add("featuremain");
  }
  else if (status == 4) {
    console.log("data");
    data.classList.remove("displaysection");
    document.title = "Data Recovery";
    secondmainmain.classList.add("datamain");
  }
  else if (status == 0) {
    console.log("settings");
    settings.classList.remove("displaysettings");
    secondmainmain.classList.add("settingsmain");
  }
 }

window.onload = selectioncheck;
secondbuttonequal.addEventListener("click", hamburger);
secondbuttonmultiply.addEventListener("click", hamburgerterug)
