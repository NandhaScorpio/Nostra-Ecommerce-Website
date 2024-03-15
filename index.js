var xmark = document.getElementById("xmark")
var deleteTag = document.querySelector(".delete-tag")

xmark.addEventListener("click", function () {
    deleteTag.style.display = "none"
})

var i1 = document.querySelector(".i1")
var i2 = document.querySelector(".i2")
var i3 = document.querySelector(".i3")

var likebuttons = document.querySelectorAll(".imagepng")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/redheart.png"
        }
        else{
            e.target.src="img/blackheart.png"
        }
    })
})