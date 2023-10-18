for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    })
}

function makeSound(key){
    switch(key){
        case "Suona":
            var audio1 = new Audio("sounds/suona.m4a");
            audio1.play();
        break;
       
        case "Dizi":
            var audio2 = new Audio("sounds/DiZi.mp3");
            audio2.play();
        break;
        
        case "Erhu":
            var audio3 = new Audio("sounds/erhump3.mp3");
            audio3.play();
        break;
        
        case "Pipa":
            var audio4 = new Audio("sounds/pipa.mp3");
            audio4.play();
        break;
       
        case "Zhongruan":
            var audio5 = new Audio("sounds/zhongruan.m4a")
            audio5.play();
        break; 
        
        case "Guzheng":
            var audio6 = new Audio("sounds/guzheng.mp3");
            audio6.play();
        break;
        
        case "Cello":
            var audio7 = new Audio("sounds/cello.m4a")
            audio7.play()
        break;

        case "Percussion":
            var audio8 = new Audio("sounds/percussion.mp3");
            audio8.play();
        break;

        case "Hulusi":
            var audio9 = new Audio("sounds/hulusi.mp3");
            audio9.play();
        break;
    }

}
