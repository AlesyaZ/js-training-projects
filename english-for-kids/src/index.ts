import App from './core/app';

const app = new App();

app.run();

// let categories = [
//   {
//     image: "./assets/img/hug.jpg",
//     title: "Action (set A)",
//   },
//   {
//     image: "./assets/img/sing.jpg",
//     title: "Action (set B)",
//   },
//   {
//     image: "./assets/img/dog.jpg",
//     title: "Animal (set A)",
//   },
//   {
//     image: "./assets/img/lion.jpg",
//     title: "Animal (set B)",
//   },
//   {
//     image: "./assets/img/skirt.jpg",
//     title: "Clothes",
//   },
//   {
//     image: "./assets/img/smile.jpg",
//     title: "Emotions",
//   },
//   {
//     image: "./assets/img/doctor.png",
//     title: "Professions",
//   },
//   {
//     image: "./assets/img/rain.png",
//     title: "Weather",
//   },
// ];

// let statisticsCateg = [
//     "Category &#8661;",
//     "Word &#8661;",
//     "Translate &#8661;",
//     "Clicks &#8661;",
//     "Correct &#8661;",
//     "Wrong &#8661;",
//     "Wrong % &#8661;",
//   ],
//   statisticsBtn = ["Repeat difficult words", "Reset"];

// let cardsContainer = document.querySelector<HTMLElement>(".cards-container");
// let navigation = document.querySelectorAll<HTMLElement>(".navigation a");
// let nav = document.querySelector<HTMLElement>(".navigation");
// let btnGame = document.querySelector<HTMLElement>(".button");
// let modalWindow = document.querySelector<HTMLElement>(".modal");
// let statisticsTable = document.querySelector<HTMLElement>(".statistics");
// let starsContainer = document.querySelector<HTMLElement>(".stars-container");
// let switcher = document.querySelector<HTMLInputElement>(".switcher > input");
// let CardCard = document.querySelectorAll<HTMLElement>(".card");
// let CardC = document.querySelector<HTMLElement>(".card");
// let headerName = document.querySelector<HTMLElement>(".header__title");
// let input = document.querySelector<HTMLInputElement>("input");
// let switcherS = document.querySelector<HTMLElement>(".switcher");
// let headerHumburger = document.querySelector<HTMLElement>(".header__hamburger");
// let navContainer = document.querySelector<HTMLElement>(".navigation-container");
// let navCategories = document.querySelector<HTMLElement>(".navigation > ul");

// function menuTransition(
//   elem: card[],
//   category: string,
//   CardsReapetDifficult: boolean,
//   WordsReapetDifficult?: card[]
// ) {
//   if (
//     ((headerName.innerText = category),
//     navigation.forEach((el) => {
//       el.classList.remove("select");
//       el.innerHTML === category && el.classList.add("select");
//     }),
//     CardsReapetDifficult)
//   ) {
//     cards = WordsReapetDifficult;
//   } else {
//     let CategoryMenuClick = (<any>elem[0]).indexOf(category);
//     cards = elem[CategoryMenuClick + 1];
//   }

//   CardCard.forEach((elem: HTMLElement, i: number) => {
//     let wordCards = elem;
//     if (i < cards.length) {
//       (wordCards.querySelector<HTMLElement>(".front > .card__title").innerText =
//         cards[i].word),
//         (wordCards.querySelector<HTMLElement>(
//           ".back > .card__title"
//         ).innerText = cards[i].translation),
//         wordCards.querySelectorAll(".card__image").forEach((el) => {
//           el.setAttribute("src", cards[i].image);
//         });
//     } else {
//       wordCards.classList.add("display-none");
//     }
//     switcher.checked
//       ? wordCards.classList.add("play")
//       : wordCards.classList.add("train");
//   });

//   switcher.checked
//     ? btnGame.classList.remove("hidden")
//     : btnGame.classList.add("hidden");
// }

// const flip = (elem, translat) => {
//   translat.classList.add("translation");

//   let CardCardArray = Array.from(CardCard).indexOf(translat),
//     statisticsTableSave = JSON.parse(localStorage.getItem("statistics"));
//   (statisticsTableSave[elem[CardCardArray].word].СlicksСard += 1),
//     localStorage.setItem("statistics", JSON.stringify(statisticsTableSave));
// };

// const translCard = (el) => {
//   el.classList.contains("translation") && el.classList.remove("translation");
// };

// let words: any, startGame: any, game: any, activePlay: any;
// const playGame = function (e: any, translat: any, elem: any) {
//   input.checked
//     ? nav.classList.add("navigation__play")
//     : nav.classList.remove("navigation__play");
//   if (CardC.classList.contains("train") || CardC.classList.contains("play")) {
//     CardCard.forEach((el: any) => {
//       if (input.checked) {
//         el.classList.remove("train");
//         el.classList.add("play");
//         el.classList.add("ready-to-play");
//       } else {
//         el.classList.remove("play");
//         el.classList.remove("ready-to-play");
//         el.classList.remove("correct");
//         el.classList.add("train");
//       }
//     });
//     if (input.checked) {
//       btnGame.classList.remove("hidden");
//     } else {
//       cardsContainer.removeEventListener("click", translat);
//       btnGame.removeEventListener("click", elem);
//       starsContainer.innerHTML = "";
//       btnGame.innerText = "Start game";
//       btnGame.classList.remove("repeat");
//       btnGame.removeAttribute("style");
//       btnGame.classList.add("hidden");
//     }
//   } else {
//     CardCard.forEach((el: any) => {
//       input.checked
//         ? el.classList.add("ready-to-play")
//         : el.classList.remove("ready-to-play");
//     });
//   }
// };
// let playG: boolean = false;

// function playTrain(wordsSort: any[], Card: card[]) {
//   let avtivePlay = startGame.play();

//   let game = () => {
//     if (
//       event.target !== event.currentTarget &&
//       !(event.target as HTMLElement)
//         .closest(".card")
//         .classList.contains("correct")
//     )
//       if (
//         (event.target as HTMLElement)
//           .closest(".card")
//           .querySelector<HTMLElement>(".card__title").innerText ===
//         words[words.length - 1].word
//       ) {
//         let stat = JSON.parse(localStorage.getItem("statistics"));

//         if (
//           ((stat[words[words.length - 1].word].Guessed += 1),
//           localStorage.setItem("statistics", JSON.stringify(stat)),
//           (event.target as HTMLElement)
//             .closest(".card")
//             .classList.add("correct"),
//           document
//             .querySelector(".stars-container")
//             .insertAdjacentHTML("afterbegin", ""),
//           new Audio("./assets/audio/correct.mp3").play(),
//           words.pop(),
//           words.length !== 0)
//         ) {
//           startGame = new Audio(words[words.length - 1].audioSrc);
//           setTimeout(function () {
//             startGame.play();
//           }, 500);
//         } else {
//           if (
//             ((modalWindow.innerHTML = ""),
//             document.querySelectorAll(".mistake").length === 0)
//           ) {
//             modalWindow.insertAdjacentHTML("beforeend", "Win!");
//             modalWindow.insertAdjacentHTML("beforeend", "");
//             var soundSuccess = new Audio("./assets/audio/success.mp3");
//             setTimeout(function () {
//               soundSuccess.play();
//             }, 500);
//           } else {
//             modalWindow.insertAdjacentHTML(
//               "beforeend",
//               "".concat(
//                 document.querySelectorAll(".mistake").length.toString(),
//                 " Mistakes"
//               )
//             );
//             modalWindow.insertAdjacentHTML("beforeend", "");
//             var soundFailure = new Audio("./assets/audio/failure.mp3");
//             setTimeout(function () {
//               soundFailure.play();
//             }, 500);
//           }

//           if (
//             ((modalWindow.style.display = "flex"),
//             (headerName.innerText = "Main Page"),
//             navigation.forEach(function (el) {
//               el.classList.remove("select");
//               "Main Page" === el.innerHTML && el.classList.add("select");
//             }),
//             (document.body.style.overflow = "hidden"),
//             document
//               .querySelector<HTMLElement>(".button.repeat")
//               .removeEventListener("click", avtivePlay),
//             (btnGame.innerText = "Start game"),
//             btnGame.classList.remove("repeat"),
//             btnGame.removeAttribute("style"),
//             btnGame.classList.add("hidden"),
//             statisticsTable !== null)
//           ) {
//             let statistics = statisticsTable;
//             statistics.parentNode.removeChild(statistics);
//           }

//           CardCard.forEach(function (elem, arr) {
//             let cardTrain = elem;
//             cardTrain.classList.remove("play");
//             cardTrain.classList.remove("correct");
//             cardTrain.classList.remove("display-none");
//             cardTrain
//               .querySelector(".card__image")
//               .setAttribute("src", Card[arr].image);
//             cardTrain.querySelector<HTMLElement>(".card__title").innerText =
//               Card[arr].title;
//           });

//           document.querySelector(".stars-container").innerHTML = "";
//           setTimeout(function () {
//             modalWindow.style.display = "none";
//             document.body.style.overflow = "visible";
//           }, 3000);

//           playG = false;
//           cardsContainer.removeEventListener("click", game);
//         }
//       } else {
//         let statistics = JSON.parse(localStorage.getItem("statistics"));
//         statistics[words[words.length - 1].word].Mistakes += 1;
//         localStorage.setItem("statistics", JSON.stringify(statistics));
//         document
//           .querySelector(".stars-container")
//           .insertAdjacentHTML("afterbegin", "");
//         new Audio("./assets/audio/error.mp3").play();
//       }
//   };

//   switcherS.addEventListener("click", () => {
//     playG = false;
//   });

//   document
//     .querySelector<HTMLElement>(".navigation > ul")
//     .addEventListener("click", (el: any) => {
//       "A" === el.target.tagName && (playG = false);
//     });

//   if (!playG) {
//     playG = true;
//     words = wordsSort.slice(0).sort(function () {
//       return Math.random() - 0.5;
//     });
//     startGame = new Audio(words[words.length - 1].audioSrc);

//     setTimeout(() => {
//       startGame.play();
//     }, 500);

//     cardsContainer.addEventListener("click", game);
//     btnGame.innerText = "";
//     btnGame.classList.add("repeat");
//     btnGame.setAttribute(
//       "style",
//       "background-image: url(./assets/img/repeat.png)"
//     );

//     document
//       .querySelector<HTMLElement>(".button.repeat")
//       .addEventListener("click", avtivePlay);
//   }
// }

// let StatisticsS = function (el, t) {
//   let cardArray = Array.from(document.querySelectorAll(".card")).indexOf(t),
//     cardStatist = JSON.parse(localStorage.getItem("statistics"));
//   (cardStatist[el[cardArray].word].СlicksСard += 1),
//     localStorage.setItem("statistics", JSON.stringify(cardStatist)),
//     new Audio(el[cardArray].audioSrc).play();
// };

// function activeNavigation() {
//   headerHumburger.classList.toggle("navigation-active");
//   navContainer.classList.toggle("navigation-active");
// }

// function tableSort(value, tableS, arrow) {
//   let tableRow = document.querySelectorAll(".table__row");

//   tableRow.forEach(function (el, number) {
//     if (number !== 0) {
//       el.removeAttribute("style");
//     } else {
//       el.querySelectorAll(".row__cell:not(".concat(value, ")")).forEach(
//         function (element) {
//           element.innerHTML = "".concat(
//             element.innerHTML.match(/[a-zA-Z]+/g)[0],
//             " &#8661;"
//           );
//         }
//       );

//       let orderNum = el.querySelector(".row__cell".concat(value));
//       orderNum.innerHTML = "".concat(
//         orderNum.innerHTML.match(/[a-zA-Z]+/g)[0],
//         arrow ? " &#8657;" : " &#8659;"
//       );
//     }
//   });

//   let orderNum = Array.from(
//     document.querySelectorAll(".row__cell".concat(value))
//   ).slice(1);
//   if ("alphabet" === tableS) {
//     orderNum.sort(function (el, table) {
//       return el.innerHTML > table.innerHTML
//         ? 1
//         : el.innerHTML < table.innerHTML
//         ? -1
//         : 0;
//     });
//   } else {
//     "number" === tableS &&
//       orderNum.sort(function (el, table) {
//         return parseInt(table.innerHTML, 10) - parseInt(el.innerHTML, 10);
//       });
//   }

//   arrow && orderNum.reverse();
//   tableRow.forEach(function (val: any) {
//     if (0 !== val) {
//       val.style.order =
//         orderNum.indexOf(val.querySelector(".row__cell".concat(value))) + 1;
//     }
//   });
// }

// const statist = (words, DifficultWords, statisticsTabl) => {
//   const element = function newElement(div, name, val) {
//     !function (elementNew, el) {
//       if (!(elementNew instanceof el))
//         throw new TypeError("Cannot call a class as a function");
//     };
//     this, newElement;

//     let el = document.createElement(div);
//     return el.classList.add(name), void 0 !== val && (el.innerHTML = val), el;
//   };

//   headerName.innerText = "Statistics";

//   navigation.forEach(function (el) {
//     el.classList.remove("select");
//     "Statistics" === el.innerHTML && el.classList.add("select");
//   });

//   starsContainer.classList.add("display-none"),
//     cardsContainer.classList.add("display-none"),
//     btnGame.classList.add("display-none");

//   let elStatistics = document.createElement("div"),
//     elStatisticsTable = document.createElement("div"),
//     elStatisticsBtn = document.createElement("div"),
//     elStatisticsRow = document.createElement("div");

//   elStatistics.className = "statistics";
//   elStatisticsTable.className = "statistics__table";
//   elStatisticsBtn.className = "statistics__buttons";
//   elStatisticsRow.className = "table__row";

//   statisticsCateg.forEach(function (el: any) {
//     new element("div", "row_cell");
//     elStatisticsRow.appendChild(rowCell, el);
//   });

//   elStatisticsTable.appendChild(elStatisticsRow);
//   let localStatistics = JSON.parse(localStorage.getItem("statistics"));

//   Object.entries(localStatistics).forEach(function (el: any) {
//     var row = new element("div", "table__row");
//     row.appendChild(new element("div", "row__cell", "".concat(el[1].Category)));
//     row.appendChild(new element("div", "row__cell", "".concat(el[0])));
//     row.appendChild(
//       new element("div", "row__cell", "".concat(el[1].Translation))
//     );
//     row.appendChild(
//       new element("div", "row__cell", "".concat(el[1].СlicksСard))
//     );
//     row.appendChild(new element("div", "row__cell", "".concat(el[1].Guessed)));
//     row.appendChild(new element("div", "row__cell", "".concat(el[1].Mistakes)));

//     if (Number(el[1].Guessed) + Number(el[1].Mistakes) === 0) {
//       row.innerHTML = `
//       <div class="table__row>
//           <div class="row__cell">0%</div>
//       </div>
//   `;
//       // row.appendChild(new element("div", "row__cell", "0%"));
//     } else {
//       row.innerHTML = `
//       <div class="table__row>
//           <div class="row__cell">
//           </div>
//       </div>`;
//       // row.appendChild(
//       //   new element(
//       //     "div",
//       //     "row__cell",
//       //     "".concat(
//       //       Math.round(
//       //         (el[1].Mistakes / (el[1].Guessed + el[1].Mistakes)) * 100
//       //       ),
//       //       "%"
//       //     )
//       //   )
//       // );
//     }
//     elStatisticsTable.appendChild(row);
//   });

//   statisticsBtn.forEach(function (el) {
//     // elStatisticsBtn.appendChild("button", "stat-button", el);
//   });

//   elStatistics.appendChild(elStatisticsTable);
//   elStatistics.appendChild(elStatisticsBtn);
//   document.querySelector(".wrapper").appendChild(elStatistics);

//   if (switcher.checked) {
//     (document.querySelector<HTMLElement>(
//       ".table__row:first-child"
//     ).style.background =
//       "linear-gradient(90deg, #EE82EE, #FF6347, 100%,#fff 0,#fff)"),
//       document
//         .querySelectorAll(".stat-button")
//         .forEach(function (el: HTMLElement) {
//           el.style.background =
//             "linear-gradient(130deg, #EE82EE, #FF6347, 100%,#fff 0,#fff)";
//         });
//   } else {
//     (document.querySelector<HTMLElement>(
//       ".table__row:first-child"
//     ).style.background = "linear-gradient(130deg,#7B68EE 100%,#fff 0,#fff)"),
//       document
//         .querySelectorAll<HTMLElement>(".stat-button")
//         .forEach(function (el) {
//           el.style.background =
//             "linear-gradient(90deg,#7B68EE 100%,#fff 0,#fff)";
//         });
//   }

//   document
//     .querySelector(".stat-button:nth-child(1)")
//     .addEventListener("click", function () {
//       let arr = [];

//       if (
//         (Array.from(document.querySelectorAll(".row__cell:nth-child(7)"))
//           .slice(1)
//           .forEach(function (el: HTMLElement) {
//             0 !== parseInt(el.innerText, 10) && arr.push(el);
//           }),
//         0 !== arr.length)
//       ) {
//         arr.sort(function (el, element) {
//           return parseInt(el.innerText, 10) - parseInt(element.innerText, 10);
//         });

//         var wordsRepeat = arr.length < 8 ? [].concat(arr) : arr.slice(0, 8),
//           i = [];

//         wordsRepeat.forEach(function (el) {
//           words.forEach(function (value, cell) {
//             0 !== cell &&
//               value.forEach(function (val) {
//                 val.word ===
//                   el
//                     .closest(".table__row")
//                     .querySelector(".row__cell:nth-child(2)").innerText &&
//                   i.push(val);
//               });
//           });
//         });

//         DifficultWords(words, "Difficult Words", true, i);
//         starsContainer.classList.remove("display-none");
//         cardsContainer.classList.remove("display-none");
//         btnGame.classList.remove("display-none");
//         document.querySelector<HTMLElement>(".statistics").style.display =
//           "none";
//       } else {
//         DifficultWords(words, "Difficult Words", true, []);
//         starsContainer.classList.remove("display-none");
//         cardsContainer.classList.remove("display-none");
//         btnGame.classList.remove("display-none");
//         document.querySelector<HTMLElement>(".statistics").style.display =
//           "none";
//       }
//     });

//   document
//     .querySelector(".stat-button:nth-child(2)")
//     .addEventListener("click", () => {
//       localStorage.setItem("statistics", JSON.stringify(statisticsTabl));
//       let statistics = document.querySelector(".statistics");
//       statistics.parentNode.removeChild(statistics),
//         statist(words, DifficultWords, statisticsTabl);
//     });

//   document
//     .querySelector(".table__row:first-child")
//     .addEventListener("click", (event: any) => {
//       if (event.target.classList.contains("row__cell")) {
//         let tableRowArr = document.querySelectorAll(".table__row")[0],
//           array = Array.from(
//             tableRowArr.querySelectorAll(".row__cell")
//           ).indexOf(event.target);

//         switch (event.target.innerHTML) {
//           case "Category ⇕":
//           case "Word ⇕":
//           case "Translate ⇕":
//             tableSort(":nth-child(".concat(")"), "alphabet", false);
//             break;

//           case "Clicks ⇕":
//           case "Correct ⇕":
//           case "Wrong ⇕":
//           case "Wrong % ⇕":
//             tableSort(":nth-child(".concat(")"), "number", false);
//             break;

//           case "Category ⇓":
//           case "Word ⇓":
//           case "Translatie ⇓":
//             tableSort(":nth-child(".concat(")"), "alphabet", true);
//             break;

//           case "Clicks ⇓":
//           case "Correct ⇓":
//           case "Wrong ⇓":
//           case "Wrong % ⇓":
//             tableSort(":nth-child(".concat(")"), "number", true);
//             break;

//           default:
//             document
//               .querySelectorAll(".table__row")
//               .forEach(function (el, orderNumber) {
//                 if (0 !== orderNumber) {
//                   el.removeAttribute("style");
//                 } else {
//                   el.querySelectorAll(".row__cell").forEach(function (el) {
//                     let orderNumber = el;
//                     orderNumber.innerHTML = "".concat(
//                       orderNumber.innerHTML.match(/[a-zA-Z]+/g)[0],
//                       " &#8661;"
//                     );
//                   });
//                 }
//               });
//         }
//       }
//     });
// };

// null === localStorage.getItem("statistics") &&
//   localStorage.setItem("statistics", JSON.stringify(statisticsCard));

// cardsContainer.addEventListener("click", (el: any) => {
//   el.target.classList.contains("rotate") &&
//     el.target.closest(".card").classList.contains("train") &&
//     flip(cards, el.target.closest(".card"));
// });

// CardCard.forEach((el) => {
//   el.addEventListener("mouseleave", () => {
//     return translCard(el);
//   });
// });

// cardsContainer.addEventListener("click", (el: any) => {
//   el.target !== el.currentTarget &&
//     el.target.closest(".card").classList.contains("train") &&
//     (el.target.classList.contains("rotate") ||
//       StatisticsS(cards, el.target.closest(".card")));
// });

// cardsContainer.addEventListener("click", (el: any) => {
//   (el.target !== el.currentTarget &&
//     (el.target.closest(".card").classList.contains("train") ||
//       el.target.closest(".card").classList.contains("play"))) ||
//     menuTransition(
//       card,
//       el.target
//         .closest(".card")
//         .querySelector<HTMLElement>(".front > .card__title").innerText,
//       false
//     );
// });

// switcherS.addEventListener("click", (el: any) => {
//   return playGame(el.currentTarget, game, activePlay);
// });

// btnGame.addEventListener("click", (el: any) => {
//   el.currentTarget.classList.contains("hidden") ||
//     playG ||
//     (8 !== document.querySelectorAll(".card.display-none").length &&
//       playTrain(cards, categories));
// });

// headerHumburger.addEventListener("click", activeNavigation);

// navContainer.addEventListener("click", (el) => {
//   el.target === el.currentTarget && activeNavigation();
// });

// navCategories.addEventListener("click", handleCategoryClick);

// function handleCategoryClick(event) {
//   if (event.target.tagName === "A") {
//     resetGame();

//     if (document.querySelector(".statistics")) {
//       clearStatistics();
//     }

//     if (event.target.innerHTML === "Main Page") {
//       showMainPage(categories);
//     } else if (event.target.innerHTML === "Statistics") {
//       showStatistics(card, menuTransition, statisticsCard);
//     } else {
//       menuTransition(card, event.target.innerHTML, false);
//     }

//     activeNavigation();
//   }
// }

// function resetGame() {
//   cardsContainer.removeEventListener("click", handleCategoryClick);
//   btnGame.removeEventListener("click", handleCategoryClick);
//   starsContainer.innerHTML = "";
//   btnGame.innerText = "Start game";
//   btnGame.classList.remove("repeat");
//   btnGame.removeAttribute("style");
//   document.querySelectorAll(".correct").forEach((element) => {
//     element.classList.remove("correct");
//   });
// }

// function clearStatistics() {
//   let statisticsElement = document.querySelector(".statistics");
//   statisticsElement.parentNode.removeChild(statisticsElement);
//   starsContainer.classList.remove("display-none");
//   cardsContainer.classList.remove("display-none");
//   btnGame.classList.remove("display-none");
//   document.querySelectorAll(".card").forEach((element) => {
//     element.classList.remove("display-none");
//   });
// }

// function showMainPage(elements) {
//   document.querySelector<HTMLElement>(".header__title").innerText =
//     "English for kids";
//   document.querySelectorAll(".card").forEach((card, index) => {
//     card.classList.remove("play");
//     card.classList.remove("train");
//     card
//       .querySelector(".card__image")
//       .setAttribute("src", elements[index].image);
//     card.querySelector<HTMLElement>(".card__title").innerText =
//       elements[index].title;
//   });

//   btnGame.classList.add("hidden");
//   navigation.forEach((element) => {
//     element.classList.remove("select");
//     if (element.innerHTML === "English for kids") {
//       element.classList.add("select");
//     }
//   });
// }

// function showStatistics(card, menuTransition, statisticsCard) {
//   statist(card, menuTransition, statisticsCard);
// }
