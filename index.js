var xmark = document.getElementById("xmark")
var deleteTag = document.querySelector(".delete-tag")

xmark.addEventListener("click", function () {
    deleteTag.style.display = "none"
})

var i1 = document.querySelector(".i1")
var i2 = document.querySelector(".i2")
var i3 = document.querySelector(".i3")

var sideNav = document.querySelector(".side-navbar")
var xMark = document.querySelector("#xMark")
var menuBar = document.getElementById("menubar")

menuBar.addEventListener("click", function () {
    sideNav.style.left = "0"
})

xMark.addEventListener("click", function () {
    sideNav.style.left = "-60%"
})

var likebuttons = document.querySelectorAll(".imagepng")

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {


        if (e.target.src.indexOf("blackheart") > 0) {
            console.log("jkjk");
            e.target.src = "img/redheart.png"
        }
        else {
            e.target.src = "img/blackheart.png"
        }
    })
})

var imageCont = document.getElementById("slide-bar-container")
function handleClick(direction) {
    imageCont.scrollLeft = direction === 'right' ? imageCont.scrollLeft + "100vw" : imageCont.scrollLeft - "100vw";
}

console.log(imageCont)