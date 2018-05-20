var clicks9 = 0;
var dropmenu = document.querySelector('#menu ul');

window.onload = function () {
        document.getElementById("heart1").addEventListener("click", function(event){
            event.preventDefault();
            clicks9 += 1;
            document.getElementById("krum").innerHTML = clicks9;
        });

        document.querySelector('.drop-button').addEventListener("click", function(event){
            event.preventDefault();
            dropmenu.classList.toggle('active');
        });
    };
