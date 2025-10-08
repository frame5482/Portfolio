window.onload = pageLoad;

function pageLoad() {
    document.getElementById("start").onclick = startGame;
}

function startGame() {
    clearScreen(); 
    addBox();      
    timeStart();   
}

function timeStart() {
    var TIMER_TICK = 1000; 
    var min = 0.2; 
    var second = min * 60;
    var clock = document.getElementById('clock');
    clock.innerHTML = second; 

    var timer = setInterval(timeCount, TIMER_TICK);

    function timeCount() {
        var allbox = document.querySelectorAll("#layer div");
        second--;
        clock.innerHTML = second;

        
        if (allbox.length === 0 && second > 0) {
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        }

     
        if (second <= 0) {
            clearInterval(timer);
            alert("Game Over!");
            clearScreen();
            
        }
    }
}

function addBox() {
    var numbox = parseInt(document.getElementById("numbox").value);
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box" + i;
        tempbox.style.backgroundColor = colorDrop;
        tempbox.style.width = "50px";
        tempbox.style.height = "50px";
        tempbox.style.position = "absolute";
        tempbox.style.left = Math.random() * (500 - 50) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";

        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function () {
        this.parentNode.removeChild(this);
    };
}

function clearScreen() {
    var allbox = document.querySelectorAll("#layer div");
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
