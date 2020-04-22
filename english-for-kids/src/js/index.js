import {Cards} from './cards.js.js'

//localStorage.clear();
let cards, card= [
    ["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Professions","Weather"],
    [
        {
        word:"cry",
        translation:"плакать",
        image:"./assets/img/cry.jpg",
        audioSrc:"./assets/audio/cry.mp3"
    },
    {
        word:"dance",
        translation:"танцевать",
        image:"./assets/img/dance.jpg",
        audioSrc:"./assets/audio/dance.mp3"
    },
    {
        word:"dive",
        translation:"нырять",
        image:"./assets/img/dive.jpg",
        audioSrc:"./assets/audio/dive.mp3"
    },
    {
        word:"draw",
        translation:"рисовать",
        image:"./assets/img/draw.jpg",
        audioSrc:"./assets/audio/draw.mp3"
    },
    {
        word:"fish",
        translation:"ловить рыбу",
        image:"./assets/img/fish.jpg",
        audioSrc:"./assets/audio/fish.mp3"
    },
    {
        word:"fly",
        translation:"летать",
        image:"./assets/img/fly.jpg",
        audioSrc:"./assets/audio/fly.mp3"
    },
    {
        word:"hug",
        translation:"обнимать",
        image:"./assets/img/hug.jpg",
        audioSrc:"./assets/audio/hug.mp3"
    },
    {
        word:"jump",
        translation:"прыгать",
        image:"./assets/img/jump.jpg",
        audioSrc:"./assets/audio/jump.mp3"
    }
    ],
    [
    {
        word:"open",
        translation:"открывать",
        image:"./assets/img/open.jpg",
        audioSrc:"./assets/audio/open.mp3"
    },
    {   
        word:"play",
        translation:"играть",
        image:"./assets/img/play.jpg",
        audioSrc:"./assets/audio/play.mp3"
    },
    {
        word:"point",
        translation:"указывать",
        image:"./assets/img/point.jpg",
        audioSrc:"./assets/audio/point.mp3"
    },
    {
        word:"ride",
        translation:"ездить",
        image:"./assets/img/ride.jpg",
        audioSrc:"./assets/audio/ride.mp3"
    },
    {
        word:"run",
        translation:"бегать",
        image:"./assets/img/run.jpg",
        audioSrc:"./assets/audio/run.mp3"
    },
    {
        word:"sing",
        translation:"петь",
        image:"./assets/img/sing.jpg",
        audioSrc:"./assets/audio/sing.mp3"
    },
    {
        word:"skip",
        translation:"прыгать",
        image:"./assets/img/skip.jpg",
        audioSrc:"./assets/audio/skip.mp3"
    },
    {
        word:"swim",
        translation:"плавать",
        image:"./assets/img/swim.jpg",
        audioSrc:"./assets/audio/swim.mp3"
    }
],
[
    {
        word:"cat",
        translation:"кот",
        image:"./assets/img/cat.jpg",
        audioSrc:"./assets/audio/cat.mp3"
    },
    {
        word:"chick",
        translation:"цыплёнок",
        image:"./assets/img/chick.jpg",
        audioSrc:"./assets/audio/chick.mp3"
    },
    {
        word:"chicken",
        translation:"курица",
        image:"./assets/img/chicken.jpg",
        audioSrc:"./assets/audio/chicken.mp3"
    },
    {
        word:"dog",
        translation:"собака",
        image:"./assets/img/dog.jpg",
        audioSrc:"./assets/audio/dog.mp3"
    },
    {
        word:"horse",
        translation:"лошадь",
        image:"./assets/img/horse.jpg",
        audioSrc:"./assets/audio/horse.mp3"
    },
    {
        word:"pig",
        translation:"свинья",
        image:"./assets/img/pig.jpg",
        audioSrc:"./assets/audio/pig.mp3"
    },
    {
        word:"rabbit",
        translation:"кролик",
        image:"./assets/img/rabbit.jpg",
        audioSrc:"./assets/audio/rabbit.mp3"
    },
    {
        word:"sheep",
        translation:"овца",
        image:"./assets/img/sheep.jpg",
        audioSrc:"./assets/audio/sheep.mp3"
    }
],
[
    {
        word:"bird",
        translation:"птица",
        image:"./assets/img/bird.jpg",
        audioSrc:"./assets/audio/bird.mp3"
    },
    {
         word:"fish",
        translation:"рыба",
        image:"./assets/img/fish1.jpg",
        audioSrc:"./assets/audio/fish.mp3"
    },
    {
        word:"frog",
        translation:"жаба",
        image:"./assets/img/frog.jpg",
        audioSrc:"./assets/audio/frog.mp3"
    },
    {
        word:"giraffe",
        translation:"жираф",
        image:"./assets/img/giraffe.jpg",
        audioSrc:"./assets/audio/giraffe.mp3"
    },
    {
        word:"lion",
        translation:"лев",
        image:"./assets/img/lion.jpg",
        audioSrc:"./assets/audio/lion.mp3"
    },
    {
        word:"mouse",
        translation:"мышь",
        image:"./assets/img/mouse.jpg",
        audioSrc:"./assets/audio/mouse.mp3"
    },
    {
        word:"turtle",
        translation:"черепаха",
        image:"./assets/img/turtle.jpg",
        audioSrc:"./assets/audio/turtle.mp3"
    },
    {
        word:"dolphin",
        translation:"дельфин",
        image:"./assets/img/dolphin.jpg",
        audioSrc:"./assets/audio/dolphin.mp3"
    }
],
[
    {
        word:"skirt",
        translation:"юбка",
        image:"./assets/img/skirt.jpg",
        audioSrc:"./assets/audio/skirt.mp3"
    },
    {
        word:"pants",
        translation:"брюки",
        image:"./assets/img/pants.jpg",
        audioSrc:"./assets/audio/pants.mp3"
    },
    {
        word:"blouse",
        translation:"блузка",
        image:"./assets/img/blouse.jpg",
        audioSrc:"./assets/audio/blouse.mp3"
    },
    {
        word:"dress",
        translation:"платье",
        image:"./assets/img/dress.jpg",
        audioSrc:"./assets/audio/dress.mp3"
    },
    {
        word:"boot",
        translation:"ботинок",
        image:"./assets/img/boot.jpg",
        audioSrc:"./assets/audio/boot.mp3"
    },
    {
        word:"shirt",
        translation:"рубашка",
        image:"./assets/img/shirt.jpg",
        audioSrc:"./assets/audio/shirt.mp3"
    },
    {
        word:"coat",
        translation:"пальто",
        image:"./assets/img/coat.jpg",
        audioSrc:"./assets/audio/coat.mp3"
    },
    {
        word:"shoe",
        translation:"туфли",
        image:"./assets/img/shoe.jpg",
        audioSrc:"./assets/audio/shoe.mp3"
    }
],
[
    {
        word:"sad",
        translation:"грустный",
        image:"./assets/img/sad.jpg",
        audioSrc:"./assets/audio/sad.mp3"
    },
    {
        word:"angry",
        translation:"сердитый",
        image:"./assets/img/angry.jpg",
        audioSrc:"./assets/audio/angry.mp3"
    },
    {
        word:"happy",
        translation:"счастливый",
        image:"./assets/img/happy.jpg",
        audioSrc:"./assets/audio/happy.mp3"
    },
    {
        word:"tired",
        translation:"уставший",
        image:"./assets/img/tired.jpg",
        audioSrc:"./assets/audio/tired.mp3"
    },
    {
        word:"surprised",
        translation:"удивлённый",
        image:"./assets/img/surprised.jpg",
        audioSrc:"./assets/audio/surprised.mp3"
    },
    {
        word:"scared",
        translation:"испуганный",
        image:"./assets/img/scared.jpg",
        audioSrc:"./assets/audio/scared.mp3"
    },
    {
        word:"smile",
        translation:"улыбка",
        image:"./assets/img/smile.jpg",
        audioSrc:"./assets/audio/smile.mp3"
    },
    {
        word:"laugh",
        translation:"смех",
        image:"./assets/img/laugh.jpg",
        audioSrc:"./assets/audio/laugh.mp3"
    }
],
[
    {
        word:"doctor",
        translation:"врач",
        image:"./assets/img/doctor.png",
        audioSrc:"./assets/audio/doctor.mp3"
    },
    {
        word:"teacher",
        translation:"учитель",
        image:"./assets/img/teacher.jpg",
        audioSrc:"./assets/audio/teacher.mp3"
    },
    {
        word:"artist",
        translation:"художник",
        image:"./assets/img/artist.jpg",
        audioSrc:"./assets/audio/artist.mp3"
    },
    {
        word:"cook",
        translation:"повар",
        image:"./assets/img/cook.jpg",
        audioSrc:"./assets/audio/cook.mp3"
    },
    {
        word:"programmer",
        translation:"программист",
        image:"./assets/img/programmer.jpg",
        audioSrc:"./assets/audio/programmer.mp3"
    },
    {
        word:"lawyer",
        translation:"юрист",
        image:"./assets/img/lawyer.jpg",
        audioSrc:"./assets/audio/lawyer.mp3"
    },
    {
        word:"engineer",
        translation:"инженер",
        image:"./assets/img/engineer.jpg",
        audioSrc:"./assets/audio/engineer.mp3"
    },
    {
        word:"driver",
        translation:"водитель",
        image:"./assets/img/driver.jpg"
        ,audioSrc:"./assets/audio/driver.mp3"
    }
],
[
    {
        word:"rain",
        translation:"дождь",
        image:"./assets/img/rain.png",
        audioSrc:"./assets/audio/rain.mp3"
    },
    {
        word:"sunny",
        translation:"солнечно",
        image:"./assets/img/sunny.jpg",
        audioSrc:"./assets/audio/sunny.mp3"
    },
    {
        word:"snow",
        translation:"снег",
        image:"./assets/img/snow.jpg",
        audioSrc:"./assets/audio/snow.mp3"
    },
    {
        word:"rainbow",
        translation:"радуга",
        image:"./assets/img/rainbow.jpg",
        audioSrc:"./assets/audio/rainbow.mp3"
    },
    {
        word:"overcast",
        translation:"облачность",
        image:"./assets/img/overcast.jpg",
        audioSrc:"./assets/audio/overcast.mp3"
    },
    {
        word:"hail",
        translation:"град",
        image:"./assets/img/hail.jpg",
        audioSrc:"./assets/audio/hail.mp3"
    },
    {
        word:"lightning",
        translation:"молния",
        image:"./assets/img/lightning.jpg",
        audioSrc:"./assets/audio/lightning.mp3"
    },
    {
        word:"hoarfrost",
        translation:"Иней, изморозь",
        image:"./assets/img/hoarfrost.jpg",
        audioSrc:"./assets/audio/hoarfrost.mp3"
    }
]
],

categories =[
    {
        image:"./assets/img/hug.jpg",title:"Action (set A)"
    },
    {
        image:"./assets/img/sing.jpg",title:"Action (set B)"
    },
    {
        image:"./assets/img/dog.jpg",title:"Animal (set A)"
    },
    {
        image:"./assets/img/lion.jpg",title:"Animal (set B)"
    },
    {
        image:"./assets/img/skirt.jpg",title:"Clothes"
    },
    {
        image:"./assets/img/smile.jpg",title:"Emotions"
    },
    {
        image:"./assets/img/doctor.png",title:"Professions"
    },
    {
        image:"./assets/img/rain.png",title:"Weather"
    }
],

statisticsCard = {    
    cry:{
        Category:"Action (set A)",Translation:"плакать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    dance:{
        Category:"Action (set A)",Translation:"танцевать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    dive:{
        Category:"Action (set A)",Translation:"нырять",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    draw:{
        Category:"Action (set A)",Translation:"рисовать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    fish:{
        Category:"Action (set A)",Translation:"ловить рыбу",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    fly:{
        Category:"Action (set A)",Translation:"летать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    hug:{
        Category:"Action (set A)",Translation:"обнимать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    jump:{
        Category:"Action (set A)",Translation:"прыгать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    open:{
        Category:"Action (set B)",Translation:"открывать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    play:{
        Category:"Action (set B)",Translation:"играть",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    point:{
        Category:"Action (set B)",Translation:"указывать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    ride:{
        Category:"Action (set B)",Translation:"ездить",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    run:{
        Category:"Action (set B)",Translation:"бегать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    sing:{
        Category:"Action (set B)",Translation:"петь",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    skip:{
        Category:"Action (set B)",Translation:"прыгать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    swim:{
        Category:"Action (set B)",Translation:"плавать",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    cat:{
        Category:"Animal (set A)",Translation:"кот",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    chick:{
        Category:"Animal (set A)",Translation:"цыплёнок",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    chicken:{
        Category:"Animal (set A)",Translation:"курица",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    dog:{
        Category:"Animal (set A)",Translation:"собака",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    horse:{
        Category:"Animal (set A)",Translation:"лошадь",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    pig:{
        Category:"Animal (set A)",Translation:"свинья",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    rabbit:{
        Category:"Animal (set A)",Translation:"кролик",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    sheep:{
        Category:"Animal (set A)", Translation:"овца",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    bird:{
        Category:"Animal (set B)",Translation:"птица",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    fish:{
        Category:"Animal (set B)",Translation:"рыба",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    frog:{
        Category:"Animal (set B)",Translation:"жаба",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    giraffe:{
        Category:"Animal (set B)",Translation:"жираф",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    lion:{
        Category:"Animal (set B)",Translation:"лев",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    mouse:{
        Category:"Animal (set B)",Translation:"мышь",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    turtle:{
        Category:"Animal (set B)",Translation:"черепаха",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    dolphin:{
        Category:"Animal (set B)",Translation:"дельфин",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    skirt:{
        Category:"Clothes",Translation:"юбка",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    pants:{
        Category:"Clothes",Translation:"брюки",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    blouse:{
        Category:"Clothes",Translation:"блузка",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    dress:{
        Category:"Clothes",Translation:"платье",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    boot:{
        Category:"Clothes",Translation:"ботинок",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    shirt:{
        Category:"Clothes",Translation:"рубашка",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    coat:{
        Category:"Clothes",Translation:"пальто",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    shoe:{
        Category:"Clothes",Translation:"туфли",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    sad:{
        Category:"Emotions",Translation:"грустный",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    angry:{
        Category:"Emotions",Translation:"сердитый",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    happy:{
        Category:"Emotions",Translation:"счастливый",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    tired:{
        Category:"Emotions",Translation:"уставший",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    surprised:{
        Category:"Emotions",Translation:"удивлённый",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    scared:{
        Category:"Emotions",Translation:"испуганный",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    smile:{
        Category:"Emotions",Translation:"улыбка",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    laugh:{
        Category:"Emotions",Translation:"смех",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    doctor:{
        Category:"Professions",Translation:"доктор",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    teacher:{
        Category:"Professions",Translation:"учитель",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    artist:{
        Category:"Professions",Translation:"художник",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    cook:{
        Category:"Professions",Translation:"повар",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    programmer:{
        Category:"Professions",Translation:"программист",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    lawyer:{
        Category:"Professions",Translation:"юрист",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    engineer:{
        Category:"Professions",Translation:"инженер",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    driver:{
        Category:"Professions",Translation:"водитель",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    rain:{
        Category:"Weather",Translation:"дождь",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    sunny:{
        Category:"Weather",Translation:"солнечно",ClicksInTrainingMode:0,Guessed:0,Mistakes:0}
        ,
    snow:{
        Category:"Weather",Translation:"снег",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    rainbow:{
        Category:"Weather",Translation:"радуга",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    overcast:{
        Category:"Weather",Translation:"облачность",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    hail:{
        Category:"Weather",Translation:"град",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    lightning:{
        Category:"Weather",Translation:"молния",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    },
    hoarfrost:{
        Category:"Weather",Translation:"иней, изморозь",ClicksInTrainingMode:0,Guessed:0,Mistakes:0
    }
};

let statisticsCateg=["Category &#8661;","Word &#8661;","Translate &#8661;","Clicks &#8661;","Correct &#8661;","Wrong &#8661;","Wrong % &#8661;"],
statisticsBtn=["Repeat difficult words","Reset"];

let wrapper = document.querySelector(".wrapper");
let cardsContainer = document.querySelector(".cards-container");
let navigation = document.querySelectorAll(".navigation a");
let nav = document.querySelector(".navigation");
let btnGame = document.querySelector(".button");
let modalWindow = document.querySelector(".modal-window");
let statisticsTable = document.querySelector(".statistics");
let starsContainer = document.querySelector(".stars-container");
let switcher = document.querySelector(".switcher > input");
let CardCard = document.querySelectorAll(".card");
let CardC = document.querySelector(".card");
let headerName = document.querySelector(".header__section-name");
let input = document.querySelector("input");
let switcherS = document.querySelector(".switcher");
let headerHumburger = document.querySelector(".header__hamburger");
let navContainer = document.querySelector(".navigation-container");
let navCategories = document.querySelector(".navigation > ul");

function menuTransition(e, category ,s,i){
    
    if(headerName.innerText=category,
        navigation.forEach(el => {
            el.classList.remove("selected");
            el.innerHTML === category && el.classList.add("selected")
        }), s)
        cards = i;
    else {
        let n=e[0].indexOf(category);
        cards =e[n+1]}CardCard.forEach((function(e,t){
            var s=e;
        t < cards.length ?(s.querySelector(".front > .card__title").innerText=cards[t].word,
        s.querySelector(".back > .card__title").innerText=cards[t].translation,
        s.querySelectorAll(".card__image").forEach(e =>{
            e.setAttribute("src",cards[t].image)
        })):s.classList.add("display-none"),
            switcher.checked ? s.classList.add("play") : s.classList.add("train")
        })),
    switcher.checked?document.querySelector(".button").classList.remove("hidden"):document.querySelector(".button").classList.add("hidden");
};

const flip = (e, t) => {
    t.classList.add("translation");

    var s=Array.from(CardCard).indexOf(t),
    a=JSON.parse(localStorage.getItem("statistics"));
    a[e[s].word].ClicksInTrainingMode+=1,
    localStorage.setItem("statistics",JSON.stringify(a))
};

const translCard = (el) => {
    el.classList.contains("translation")&&el.classList.remove("translation")
};


let d, u, g, m, playMusic = function(e, t, s){
    input.checked ? nav.classList.add("playNav") : nav.classList.remove("playNav");
    
    if (CardC.classList.contains("train")||CardC.classList.contains("play")) {
        CardCard.forEach(el => {
            if (input.checked){
                el.classList.remove("train");
                el.classList.add("play");
                el.classList.add("ready-to-play");
            } else {
                el.classList.remove("play");
                el.classList.remove("ready-to-play");
                el.classList.remove("correct");
                el.classList.add("train")
            }
        });
            
        if (input.checked) {
            btnGame.classList.remove("hidden");
        } else {
            document.querySelector(".cards-container").removeEventListener("click", t);
            btnGame.removeEventListener("click", s);
            starsContainer.innerHTML="";
            btnGame.innerText="Start game";
            btnGame.classList.remove("repeat");
            btnGame.removeAttribute("style");
            btnGame.classList.add("hidden");
        }
    
    } else {
        CardCard.forEach(el => {
            input.checked ? el.classList.add("ready-to-play") : el.classList.remove("ready-to-play");
        });
    };
}, y = false;

function sound (e,t){
    m = function() {
        u.play()
    };
    
    g=function() {
        if (event.target !== event.currentTarget && !event.target.closest(".card").classList.contains("correct"));
        
        if(event.target.closest(".card").querySelector(".card__title").innerText === d[d.length-1].word) {
            let stat = JSON.parse(localStorage.getItem("statistics"));

            if(stat[d[d.length-1].word].Guessed+=1,
            localStorage.setItem("statistics",JSON.stringify(stat)),
            event.target.closest(".card").classList.add("correct"),
            document.querySelector(".stars-container").insertAdjacentHTML("afterbegin",'<span style="background-image: url(./assets/img/star-win.svg)" class="star"></span>'),
            new Audio("./assets/audio/correct.mp3").play(),
            d.pop(), 0 !== d.length) {
        
                u = new Audio(d[d.length-1].audioSrc),
                setTimeout((function(){
                    u.play()
                }) ,500);
            } else {
                if(modalWindow.innerHTML="", 0 === document.querySelectorAll(".mistake").length) {
                    modalWindow.insertAdjacentHTML("beforeend","<div>Win!</div>");
                    modalWindow.insertAdjacentHTML("beforeend",'<img src="./assets/img/success.jpg">');
                    var soundSuccess = new Audio("./assets/audio/success.mp3");
                    setTimeout(function(){
                        soundSuccess.play()
                    },500);
                } else {
                    modalWindow.insertAdjacentHTML("beforeend","<div>".concat(document.querySelectorAll(".mistake").length," Mistakes</div>")),
                    modalWindow.insertAdjacentHTML("beforeend",'<img src="./assets/img/failure.jpg">');
                    var soundFailure = new Audio("./assets/audio/failure.mp3"); 
                    setTimeout(function(){
                        soundFailure.play()
                    },500);
                }

                if (modalWindow.style.display="flex",
                    headerName.innerText="Main Page",
                    navigation.forEach(function(el){
                        el.classList.remove("selected"),"Main Page"===el.innerHTML&&el.classList.add("selected")
                    }),
                    document.body.style.overflow="hidden",
                    document.querySelector(".button.repeat").removeEventListener("click",m),
                    btnGame.innerText="Start game",
                    btnGame.classList.remove("repeat"),
                    btnGame.removeAttribute("style"),
                    btnGame.classList.add("hidden"),
                    null !== statisticsTable) {

                    let i=statisticsTable;
                    i.parentNode.removeChild(i)
                } 
            
                CardCard.forEach(function(el,arr){
                    let a=el;
                    a.classList.remove("play"),a.classList.remove("correct"),
                        a.classList.remove("display-none"),
                        a.querySelector(".card__image").setAttribute("src", t[arr].image),
                        a.querySelector(".card__title").innerText = t[arr].title
                    });
                    
                    document.querySelector(".stars-container").innerHTML="",
                setTimeout((function(){
                    modalWindow.style.display="none",document.body.style.overflow="visible"
                }), 3e3 ), y=false,
                
                cardsContainer.removeEventListener("click",g)
            };
        } else {
            let i = JSON.parse(localStorage.getItem("statistics"));
            i[d[d.length-1].word].Mistakes+=1,
            localStorage.setItem("statistics",JSON.stringify(i)),
            document.querySelector(".stars-container").insertAdjacentHTML("afterbegin",'<span style="background-image: url(./assets/img/star.svg)" class="star mistake"></span>'),
            new Audio("./assets/audio/error.mp3").play()
        };
    };

    switcherS.addEventListener("click",(function(){
        y=!1;
    }));
    
    document.querySelector(".navigation > ul").addEventListener("click", (el) => {
        "A"===el.target.tagName && (y=!1)
    });

    y || (y=true, d = (d= e.slice(0)).sort(function(){
            return Math.random()-.5
        }),

        u=new Audio(d[d.length-1].audioSrc),
        setTimeout(function(){
            u.play()
        },500),
        
        cardsContainer.addEventListener("click",g),
        btnGame.innerText="",
        btnGame.classList.add("repeat"),
        btnGame.setAttribute("style","background-image: url(./assets/img/repeat.png)"),
        document.querySelector(".button.repeat").addEventListener("click",m))
};
                                            
var StatisticsS =function(e,t){
    var s=Array.from(document.querySelectorAll(".card")).indexOf(t),
    a=JSON.parse(localStorage.getItem("statistics"));
    a[e[s].word].ClicksInTrainingMode+=1,
    localStorage.setItem("statistics",JSON.stringify(a)),
    new Audio(e[s].audioSrc).play()
};                                       
function activeNavigation(){
    headerHumburger.classList.toggle("active");
    navContainer.classList.toggle("active");
};

function tableSort (value, tableS, arrow){
    let tableRow = document.querySelectorAll(".table__row");

    tableRow.forEach(function(el, number){
        if( number !== 0 ) {
            el.removeAttribute("style");
        } else {
            el.querySelectorAll(".row__cell:not(".concat(value,")")).forEach(function(element) {
                element.innerHTML="".concat(element.innerHTML.match(/[a-zA-Z]+/g)[0]," &#8661;");
            });

                let orderNum = el.querySelector(".row__cell".concat(value));
                orderNum.innerHTML = "".concat(orderNum.innerHTML.match(/[a-zA-Z]+/g)[0], arrow ? " &#8657;" :" &#8659;");
        }
    });
                
    let orderNum = Array.from(document.querySelectorAll(".row__cell".concat(value))).slice(1);
        if ("alphabet"=== tableS) {
            orderNum.sort(function(el,table) {
                return el.innerHTML > table.innerHTML ? 1 : el.innerHTML < table.innerHTML ? -1 : 0;
            }); 
        } else {
            "number"=== tableS && orderNum.sort(function(el,table) {
                return parseInt(table.innerHTML, 10) - parseInt(el.innerHTML, 10);
            });
        };
            
    arrow && orderNum.reverse();
    tableRow.forEach(function(val) {
        if(0 !== val) {
            val.style.order=orderNum.indexOf(val.querySelector(".row__cell".concat(value)))+1;
        };
    });
};
             
const statist = (words, DifficultWords, statisticsTabl) => {

    const element = function newElement (div, name, val)  {
        !function(elementNew, el){
            if(!(elementNew instanceof el));
            throw new TypeError("Cannot call a class as a function");
        };
    (this, newElement);

        let el = document.createElement(div);
        return el.classList.add(name), void 0 !== val && (el.innerHTML = val), el;
    };
            
    headerName.innerText="Statistics";
    
    navigation.forEach(function(el){
        el.classList.remove("selected");
        "Statistics"===el.innerHTML && el.classList.add("selected")
    });
    
    starsContainer.classList.add("display-none"),
    cardsContainer.classList.add("display-none"),
    btnGame.classList.add("display-none");
    
    let elStatistics = new element("div","statistics"),
        elStatisticsTable = new element("div","statistics__table"),
        elStatisticsBtn = new element("div","statistics__buttons"),
        elStatisticsRow=new element("div","table__row");

    statisticsCateg.forEach(function(el){
        elStatisticsRow.appendChild(new element("div","row__cell",el))
    });
    
    elStatisticsTable.appendChild(elStatisticsRow);
    let localStatistics = JSON.parse(localStorage.getItem("statistics"));
                                
    Object.entries(localStatistics).forEach(function(el) {
         let row =new element("div","table__row");
        row.appendChild(new element("div","row__cell","".concat(el[1].Category)));
        row.appendChild(new element("div","row__cell","".concat(el[0])));
        row.appendChild(new element("div","row__cell","".concat(el[1].Translation)));
        row.appendChild(new element("div","row__cell","".concat(el[1].ClicksInTrainingMode)));
        row.appendChild(new element("div","row__cell","".concat(el[1].Guessed)));
        row.appendChild(new element("div","row__cell","".concat(el[1].Mistakes)));
             
        if (Number(el[1].Guessed)+Number(el[1].Mistakes)===0) {
            row.appendChild(new element("div","row__cell","0%"));
        } else {
            row.appendChild(new element("div","row__cell","".concat(Math.round(el[1].Mistakes/(el[1].Guessed+el[1].Mistakes)*100),"%")));
        } 
        elStatisticsTable.appendChild(row);
    });

    
    statisticsBtn.forEach(function(el){
        elStatisticsBtn.appendChild(new element("button","stat-button",el))
    });
    
    elStatistics.appendChild(elStatisticsTable);
    elStatistics.appendChild(elStatisticsBtn);
    document.querySelector(".wrapper").appendChild(elStatistics);

    if (switcher.checked) {
        (document.querySelector(".table__row:first-child").style.background="linear-gradient(90deg, #EE82EE, #FF6347, 100%,#fff 0,#fff)",
        document.querySelectorAll(".stat-button").forEach(function(el){
            el.style.background="linear-gradient(130deg, #EE82EE, #FF6347, 100%,#fff 0,#fff)"
        }));
            
    } else {
        document.querySelector(".table__row:first-child").style.background="linear-gradient(130deg,#7B68EE 100%,#fff 0,#fff)",
        document.querySelectorAll(".stat-button").forEach(function(el){
            el.style.background="linear-gradient(90deg,#7B68EE 100%,#fff 0,#fff)"
        });
    };

    document.querySelector(".stat-button:nth-child(1)").addEventListener("click", (function(){
        let arr = []; 
        
        if (Array.from(document.querySelectorAll(".row__cell:nth-child(7)")).slice(1).forEach(function(el){
            0 !== parseInt(el.innerText,10) && arr.push(el)
        }), 0 !== arr.length){
            arr.sort(function(el, element){
                return parseInt(el.innerText, 10) - parseInt(element.innerText, 10);
            });
            
            var wordsRepeat = arr.length < 8 ? [].concat(arr) : arr.slice(0,8),
                i=[];

            wordsRepeat.forEach(function(el){
                    words.forEach(function(value,cell){
                        0 !== cell && value.forEach(function(val){
                            val.word===el.closest(".table__row").querySelector(".row__cell:nth-child(2)").innerText&&i.push(val);
                        });
                    });   
            });
            
            DifficultWords (words,"Difficult Words", true, i);
            starsContainer.classList.remove("display-none");
            cardsContainer.classList.remove("display-none");
            btnGame.classList.remove("display-none");
            document.querySelector(".statistics").style.display="none"
        } else {
            DifficultWords(words,"Difficult Words",true,[]);
            starsContainer.classList.remove("display-none");
            cardsContainer.classList.remove("display-none");
            btnGame.classList.remove("display-none");
            document.querySelector(".statistics").style.display="none"
        }
    }));

    document.querySelector(".stat-button:nth-child(2)").addEventListener("click",(function(){
        localStorage.setItem("statistics", JSON.stringify(statisticsTabl));
        let statistics = document.querySelector(".statistics");
        statistics.parentNode.removeChild(statistics),
        statist (words, DifficultWords, statisticsTabl);
    }));

    document.querySelector(".table__row:first-child").addEventListener("click",(function(event){
        if (event.target.classList.contains("row__cell")) {
        let tableRowArr=document.querySelectorAll(".table__row")[0],
        array = Array.from(tableRowArr.querySelectorAll(".row__cell")).indexOf(event.target);
        
            switch (event.target.innerHTML) {
                case "Category ⇕":
                case "Word ⇕":
                case "Translate ⇕": 
                    tableSort(":nth-child(".concat(array + 1,")"),"alphabet",false);
                break;
                
                case "Clicks ⇕":
                case "Correct ⇕": 
                case"Wrong ⇕": 
                case"Wrong % ⇕": 
                    tableSort(":nth-child(".concat(array + 1,")"),"number",false);
                break;
                
                case"Category ⇓":
                case"Word ⇓":
                case"Translatie ⇓":
                    tableSort(":nth-child(".concat(array + 1,")"),"alphabet",true);
                break;

                case"Clicks ⇓":
                case"Correct ⇓":
                case"Wrong ⇓":
                case"Wrong % ⇓":
                    tableSort(":nth-child(".concat(array + 1,")"),"number",true);
                break;
                
                default: document.querySelectorAll(".table__row").forEach(function(el, orderNumber){
                    if (0 !== orderNumber) {
                        el.removeAttribute("style")
                    } else {
                        el.querySelectorAll(".row__cell").forEach(function(el) {
                            let orderNumber = el;
                            orderNumber.innerHTML="".concat(orderNumber.innerHTML.match(/[a-zA-Z]+/g)[0]," &#8661;")
                        });
                    };
                });
            };
        };
    }));
};

null === localStorage.getItem("statistics") && localStorage.setItem("statistics",JSON.stringify(statisticsCard));

cardsContainer.addEventListener("click", (el) => {
    el.target.classList.contains("rotate") && el.target.closest(".card").classList.contains("train") && flip(cards,el.target.closest(".card"));
});
        
CardCard.forEach(el => {
    el.addEventListener("mouseleave", function () {
        return translCard(el);
    });
});
        
cardsContainer.addEventListener("click", (el) => {
    el.target!==el.currentTarget&&el.target.closest(".card").classList.contains("train")&&(el.target.classList.contains("rotate")||StatisticsS(cards,el.target.closest(".card")))
});
        
cardsContainer.addEventListener("click", (el) => {
    el.target!==el.currentTarget&&(el.target.closest(".card").classList.contains("train")||el.target.closest(".card").classList.contains("play")||menuTransition(card,el.target.closest(".card").querySelector(".front > .card__title").innerText,!1))
});
        
switcherS.addEventListener("click", (el) => {
    return playMusic(el.currentTarget, g, m);
});

btnGame.addEventListener("click", (el) =>{
    el.currentTarget.classList.contains("hidden") || (y || 8 !== document.querySelectorAll(".card.display-none").length && sound(cards, categories));
});

headerHumburger.addEventListener("click", activeNavigation);

navContainer.addEventListener("click", (el) => {
    el.target===el.currentTarget && activeNavigation();
});
       
navCategories.addEventListener("click",(el) => {      
    if("A" === el.target.tagName){
        if(function(el){
            cardsContainer.removeEventListener("click", el),
            btnGame.removeEventListener("click", el),
            starsContainer.innerHTML="",
            btnGame.innerText="Start game",
            btnGame.classList.remove("repeat"),
            btnGame.removeAttribute("style"),
            document.querySelectorAll(".correct").forEach((function(e){
                e.classList.remove("correct")}))
            }(g,m), 
            null !== document.querySelector(".statistics")
            ){
            let t=document.querySelector(".statistics");
            t.parentNode.removeChild(t),
            starsContainer.classList.remove("display-none"),
            cardsContainer.classList.remove("display-none"),
            btnGame.classList.remove("display-none"),
            document.querySelectorAll(".card").forEach(function(e){
                e.classList.remove("display-none")
            })  
        };

        "Main Page"===el.target.innerHTML?function(e){
            document.querySelector(".header__section-name").innerText="Main Page",
            document.querySelectorAll(".card").forEach(function(a,s){
            a.classList.remove("play"),
                a.classList.remove("train"),
                a.querySelector(".card__image").setAttribute("src",e[s].image),
                a.querySelector(".card__title").innerText=e[s].title
            }),
            btnGame.classList.add("hidden"),
            navigation.forEach(function(el){
                el.classList.remove("selected"),"Main Page"===e.innerHTML&&e.classList.add("selected")
            })
        }

        (categories):"Statistics"===el.target.innerHTML?statist(card,menuTransition ,statisticsCard):menuTransition(card,el.target.innerHTML,false),
        activeNavigation();
    }
});