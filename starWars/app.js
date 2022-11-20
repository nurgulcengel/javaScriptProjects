const main = document.querySelector(".main")
const starcraft = document.querySelector(".starcraft")
const pscore = document.querySelector(".score p")
const modal = document.querySelector(".modal")
const startbutton = document.querySelector(".startgame")

//game variables

let move;
let score = 0;
let x, y;
let velocity = 1.01; //hız

//create stars

for (let a = 1; a <= 1000; a++) {
    const star = document.createElement("div");
    let x = Math.floor(Math.random() * window.innerWidth)
    let y = Math.floor(Math.random() * window.innerHeight)
    star.style.top = y + "px";
    star.style.left = x + "px";
    star.classList.add("star");
    let starsize = Math.floor(Math.random() * 3);
    star.style.height = starsize + "px"
    star.style.width = starsize + "px"
    star.style.background = starsize < 4 ? "lightgray" : "white";
    main.appendChild(star);

}

//mousemove

main.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    starcraft.style.left = x + "px";
    if (y > window.innerHeight / 2) {
        starcraft.style.top = y + "px";
    }

});

//mouseclclick-bullet-rock-bounding-explode
main.addEventListener("click", () => {
    velocity = velocity + 0.50;
    let bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.left = x + "px";
    bullet.style.top = y - 50 + "px";
    main.appendChild(bullet);

    setInterval(() => {

        let rocks = document.querySelectorAll(".rock")
        for (let i = 0; i < rocks.length; i++) {
            let rock = rocks[i]
            let rockbounds = rock.getBoundingClientRect()
            let bulletbounds = bullet.getBoundingClientRect()

            if (bulletbounds.left >= rockbounds.left && bulletbounds.right <= rockbounds.right && bulletbounds.top <= rockbounds.top && bulletbounds.bottom <= rockbounds.bottom) {
                main.removeChild(bullet);
                setTimeout(() => {
                    main.removeChild(rock);
                    score = score + 10;
                    pscore.textContent = score;
                }, 500);
                rock.classList.add("astroidexplode");
            }


        }
        let bullettop = parseInt(window.getComputedStyle(bullet).getPropertyValue("top"));
        bullet.style.top = bullettop - 5 + "px"
        if (bullettop < 0) {
            main.removeChild(bullet);
        }

    })

});

//rockmove

const rockmove = () => {
    move = setInterval(() => {

        let rock = document.createElement("div");
        rock.classList.add("rock");
        let left = Math.floor(Math.random() * window.innerWidth - 50);
        rock.style.left = left + "px";
        rock.style.top = -50 + "px";
        main.appendChild(rock);

        let rockcount = document.querySelectorAll(".rock");
        for (let i = 1; i <= rockcount.length; i++) {
            let rocktop = parseInt(window.getComputedStyle(rockcount[i - 1]).getPropertyValue("top"));
            let rockbottom = parseInt(window.getComputedStyle(rockcount[i - 1]).getPropertyValue("top"));
            rockcount[i - 1].style.top = rocktop + 20 + "px";

            let mainframe = main.getBoundingClientRect();
            if (rockbottom > mainframe.bottom - 50) {
                setTimeout(() => {
                    main.removeChild(rockcount[i - 1]);
                    modal.classList.remove("closemodal");
                }, 600);

                rockcount[i - 1].classList.add("astroidexplode");
                clearInterval(move);

            }

        }
        checkcraftcollition();
    }, 450 / velocity);
};


const checkcraftcollition = () => {
    let rocks = document.querySelectorAll(".rock")
    {
        for (let i = 0; i <= rocks.length; i++) {
            let rock = rocks[i]
            let rockbounds = rock.getBoundingClientRect();
            let craftbounds = starcraft.getBoundingClientRect();


            if (craftbounds.left <= rockbounds.left && craftbounds.right >= rockbounds.right && craftbounds.top <= rockbounds.top && craftbounds.bottom >= rockbounds.bottom) {
                setTimeout(() => {
                    modal.classList.remove("closemodal");
                    starcraft.classList.remove("starcraftexplode");
                }, 450);

                starcraft.classList.add("starcraftexplode");
                clearInterval(move);


            }

        }
    }

}




startbutton.addEventListener("click", () => {
    document.querySelectorAll(".rock").forEach(item => {
        main.removeChild(item)
    })

    starcraft.style.left = "50%"
    starcraft.style.bottom = "-30px"
    velocity = 1.01;
    modal.classList.add("closemodal")
    score = 0
    pscore.textContent = score
    rockmove();
})