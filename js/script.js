// window.addEventListener('DOMContentLoaded', function(){
//     let box = document.querySelector('.box');

//     box.addEventListener("touchstart", function(e){
//         e.preventDefault();
//         console.log("Идёт нажатие на клавишу");
//         console.log(e.target);
//         console.log(e.touches[0].target);
//         console.log(e.changesTouches);
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', function(e){
//         e.preventDefault();
//         console.log("Зажатие клавиши");
//         console.log(e.touches[0].pageX);
//     });

//     box.addEventListener('touchend', function(e){
//         e.preventDefault();
//         console.log("Конец зажатия или нажатия");
//     });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt("Введите ваше имя сэр");
    // let reg = /i/ig;
    // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    // //i
    // //g
    // //m

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, "*"));
    // alert('20-55-55'.replace(/-/g, ':'));

    // let ans = prompt("Введите число");
    // let reg = /\d/g;
    
    // console.log(ans.match(reg))

//     let str = "My$ name is$ /R2D2";
//     console.log(str.match(/\w\d\w\d/i));
// });


// let timerId = setTimeout(sayHello, 2000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 2000);
// clearTimeout(timerId);

    // function sayHello(){
    //     console.log('Hello мир!');
    // };

// let timerId = setTimeout(function log(){
//     console.log("Hello");
//     setTimeout(log, 2000);
// });

let btn = document.querySelector(".btn"),
    elem = document.querySelector(".box");

function myAnimation(){
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame(){
        if (pos == 550){
            clearInterval(id);
        } else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);