    const proportion = 10;
let squre1;
    let height = 40;
    let width = 60;
    let diameter = 40;
    let resValue = document.getElementsByClassName("resValue")[0];
    let ball = document.getElementsByClassName("ball")[0];

    ball.style.left = (width - diameter) / 2 + "px";

    let form = document.getElementsByTagName("form")[0];
    document.getElementById("save").addEventListener("click", resize);

    document.getElementById("refresh").addEventListener("click", () => {
        document.getElementsByClassName("result")[0].innerHTML = ""; 
        resValue.innerHTML = 0;});

    for (let thimble of document.getElementsByClassName("thimble")) {
        thimble.addEventListener("click", guess);
        thimble.addEventListener("click", function () {
            document.getElementsByClassName("game")[0].style.pointerEvents = "none";
            this.style.transform = `translateY(-${height/2}px)`;
            setTimeout(() => {
                this.style.transform = "";
                document.getElementsByClassName("game")[0].style.pointerEvents = "auto";
            }, 2000);
        });
    }
  document.getElementById("squre").addEventListener("click", squre)
  function squre()
  {
    height = form.height.value;
        width = form.width.value;
    squre1=width*height;
  }

    function resize() {
        height = form.height.value*proportion;
        width = form.width.value*proportion*1.5;
        diameter = form.diameter.value*proportion;
        for (let thimble of document.getElementsByClassName("thimble")) {
            thimble.style.height = height + "px";
            thimble.style.width = width + "px";
        }
        ball.style.height = diameter + "px";
        ball.style.width = diameter + "px";
    }

    let rand = 0;

    function swap() {
        rand = Math.floor(Math.random() * 3 + 1);
    }

    function guess(e) {
        swap();
        let click = e.srcElement.getAttribute("value");
        if (rand == click) {
            document.getElementsByClassName("result")[0].innerHTML = "Верно";
            resValue.innerHTML = +resValue.innerHTML + 1;
        } else {
            document.getElementsByClassName("result")[0].innerHTML = "Не верно";
            resValue.innerHTML = +resValue.innerHTML - 1;
        }
        console.log(e.srcElement.getAttribute("value"));
        let thimble = document.getElementsByClassName("thimble")[rand-1];
        ball.style.left = thimble.offsetLeft + ((width - diameter) / 2) + "px";
    }
