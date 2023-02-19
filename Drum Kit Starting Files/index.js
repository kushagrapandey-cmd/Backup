for(var i = 0 ; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var innerhtml = this.innerHTML;
        makesound(innerhtml);
        buttonanimation(innerhtml);
    });
}
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonanimation(event.key);
})

function makesound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var t2 = new Audio('sounds/tom-2.mp3');
            t2.play();
            break;
        case "s":
            var t3 = new Audio('sounds/tom-3.mp3');
            t3.play();
            break;
        case "d":
            var t4 = new Audio('sounds/tom-4.mp3');
            t4.play();
            break;
        case "j":
            var cr = new Audio('sounds/crash.mp3');
            cr.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default: console.log(innerhtml);
    }
}

function buttonanimation(currentkey){
    var activekey = document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function(){ activekey.classList.remove("pressed");},100);
}