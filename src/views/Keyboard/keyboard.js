 const keyNumberEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
 const keyNumberRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
 const keyNumberUpRu = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43];
const keyNumberUpEn = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43];
const keyEngLow = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
 const keyRuLow = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079,
  1093, 1098, 92];
 const keyEngUp = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124];
const keyRuUp = [1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47];
 const keyEngLow1 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
 const keyEngUp1 = [65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34];
 const keyRuLow1 = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
 const keyRuUp1 = [1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069];
 const keyEngLow2 = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
 const keyEngUp2 = [90, 88, 67, 86, 66, 78, 77, 60, 62, 63];
 const keyRuLow2 = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
 const keyRuUp2 = [1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44];

  const textArea = document.querySelector('.searchMovie_input');
  const keyboard = document.querySelector('.keyboard');
  const keyboardBtn = document.getElementById('keyboard-btn');

  let out = [];

  const codes = ['Backquote', 'Backquote', 'Backquote', 'Backquote', 'Digit1', 'Digit1', 'Digit1', 'Digit1', 'Digit2', 'Digit2', 'Digit2', 'Digit2', 'Digit3', 'Digit3', 'Digit3', 'Digit3', 'Digit4', 'Digit4', 'Digit4', 'Digit4', 'Digit5', 'Digit5', 'Digit5', 'Digit5', 'Digit6', 'Digit6', 'Digit6', 'Digit6', 'Digit7', 'Digit7', 'Digit7', 'Digit7', 'Digit8', 'Digit8', 'Digit8', 'Digit8', 'Digit9', 'Digit9', 'Digit9', 'Digit9', 'Digit0', 'Digit0', 'Digit0', 'Digit0', 'Minus', 'Minus', 'Minus', 'Minus', 'Equal', 'Equal', 'Equal', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyQ', 'KeyQ', 'KeyQ', 'KeyW', 'KeyW', 'KeyW', 'KeyW', 'KeyE', 'KeyE', 'KeyE', 'KeyE', 'KeyR', 'KeyR', 'KeyR', 'KeyR', 'KeyT', 'KeyT', 'KeyT', 'KeyT', 'KeyY', 'KeyY', 'KeyY', 'KeyY', 'KeyU', 'KeyU', 'KeyU', 'KeyU', 'KeyI', 'KeyI', 'KeyI', 'KeyI',
    'KeyO', 'KeyO', 'KeyO', 'KeyO', 'KeyP', 'KeyP', 'KeyP', 'KeyP', 'BracketLeft', 'BracketLeft', 'BracketLeft', 'BracketLeft', 'BracketRight', 'BracketRight', 'BracketRight', 'BracketRight', 'Backslash', 'Backslash', 'Backslash', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyA', 'KeyA', 'KeyA', 'KeyS', 'KeyS', 'KeyS', 'KeyS', 'KeyD', 'KeyD', 'KeyD', 'KeyD', 'KeyF', 'KeyF', 'KeyF', 'KeyF', 'KeyG', 'KeyG', 'KeyG', 'KeyG', 'KeyH', 'KeyH', 'KeyH', 'KeyH', 'KeyJ', 'KeyJ', 'KeyJ', 'KeyJ', 'KeyK', 'KeyK', 'KeyK', 'KeyK', 'KeyL', 'KeyL', 'KeyL', 'KeyL', 'Semicolon', 'Semicolon', 'Semicolon', 'Semicolon', 'Quote', 'Quote', 'Quote', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyZ', 'KeyZ', 'KeyZ', 'KeyX', 'KeyX', 'KeyX', 'KeyX', 'KeyC', 'KeyC', 'KeyC', 'KeyC',
    'KeyV', 'KeyV', 'KeyV', 'KeyV', 'KeyB', 'KeyB', 'KeyB', 'KeyB', 'KeyN', 'KeyN', 'KeyN', 'KeyN', 'KeyM', 'KeyM', 'KeyM', 'KeyM', 'Comma', 'Comma', 'Comma', 'Comma', 'Period', 'Period', 'Period', 'Period', 'Slash', 'Slash', 'Slash', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

  // const lang = localStorage.getItem('ruBtns');

  for (let i = 0; i < keyNumberEn.length; i += 1) {
    out += `<div class="keyK act en keyDown" >${String.fromCharCode(keyNumberEn[i])}</div>`;
    out += `<div class="keyK en hidden keyUp" >${String.fromCharCode(keyNumberUpEn[i])}</div>`;
    out += `<div class="keyK hidden ru keyDown" >${String.fromCharCode(keyNumberRu[i])}</div>`;
    out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyNumberUpRu[i])}</div>`;
  }
  out += '<div class="keyK BackSpace act"> BackSpace </div>';
  out += '<div class="keyK Tab act "> Tab </div>';


  for (let i = 0; i < keyEngLow.length; i += 1) {
    out += `<div class="keyK act en keyDown">${String.fromCharCode(keyEngLow[i])}</div>`;
    out += `<div class="keyK en hidden keyUp">${String.fromCharCode(keyEngUp[i])}</div>`;
    out += `<div class="keyK hidden ru keyDown">${String.fromCharCode(keyRuLow[i])}</div>`;
    out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyRuUp[i])}</div>`;
  }
  out += '<div class="keyK Del act "> Del </div>';
  out += '<div class="keyK CapsLock act">CapsLock </div>';

  for (let i = 0; i < keyEngLow1.length; i += 1) {
    out += `<div class="keyK en keyDown act ">${String.fromCharCode(keyEngLow1[i])}</div>`;
    out += `<div class="keyK en hidden keyUp">${String.fromCharCode(keyEngUp1[i])}</div>`;
    out += `<div class="keyK hidden ru keyDown">${String.fromCharCode(keyRuLow1[i])}</div>`;
    out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyRuUp1[i])}</div>`;
  }

  out += '<div class="Enter keyK act"> Enter </div>';
  out += '<div class=" Shift ShiftLeft keyK act"> Shift </div>';

  for (let i = 0; i < keyEngLow2.length; i += 1) {
    out += `<div class="keyK act en keyDown">${String.fromCharCode(keyEngLow2[i])}</div>`;
    out += `<div class="keyK en hidden keyUp">${String.fromCharCode(keyEngUp2[i])}</div>`;
    out += `<div class="keyK hidden ru keyDown">${String.fromCharCode(keyRuLow2[i])}</div>`;
    out += `<div class="keyK hidden ru keyUp">${String.fromCharCode(keyRuUp2[i])}</div>`;
  }
  out += '<div class="keyK act ArrowUp"> ▲ </div>';
  out += '<div class="ShiftRight keyK act "> Shift </div>';
  out += '<div class="keyK CtrlLeft act">Ctrl</div>';
  out += '<div class="keyK Win act ">Win</div>';
  out += '<div class="keyK Alt act ">Alt</div>';
  out += '<div class="Space keyK act "> </div>';
  out += '<div class="keyK Alt act ">Alt</div>';
  out += '<div class="keyK ArrowLeft act ">◄</div>';
  out += '<div class="keyK ArrowDown act ">▼</div>';
  out += '<div class="keyK ArrowRight act ">►</div>';
  out += '<div class="keyK CtrlRight act">Ctrl</div>';
  out += '<div> Смена языка - "Win" </div>';

  document.querySelector('.keyboard').innerHTML = out;

  const keykey = document.querySelectorAll('.keyK');

  let isHighRegister = false;
  let isRuLang = false;
  let flag = true;
  let checkCtrl = false;

  keykey.forEach((el, i) => {
    el.classList.add(codes[i]);
  });

  // document.addEventListener('keyup', (event) => {
  //   if (codes) {
  //     document.querySelector(`.${event.code}.act`).classList.remove('active');
  //   }
  // });


  const caseDownRu = document.querySelectorAll('.keyK.ru.keyDown');
  const caseUPEn = document.querySelectorAll('.keyK.en.keyUp');
  const caseDownEn = document.querySelectorAll('.keyK.en.keyDown');
  const caseUPRu = document.querySelectorAll('.keyK.ru.keyUp');

  function input(letter) {
    textArea.focus();
    const arr = textArea.value.split('');
    const position = textArea.selectionStart;
    arr.splice(position, 0, letter);
    textArea.value = arr.join('');
    textArea.selectionStart = textArea.selectionEnd = position + 1;
  }

  function isCapslock() {
    if (isRuLang) {
      if (isHighRegister === false) {
        caseDownRu.forEach((e) => e.classList.add('hidden'));
        caseDownRu.forEach((e) => e.classList.remove('act'));
        caseUPRu.forEach((e) => e.classList.remove('hidden'));
        caseUPRu.forEach((e) => e.classList.add('act'));
        isHighRegister = true;
      } else {
        caseDownRu.forEach((e) => e.classList.remove('hidden'));
        caseDownRu.forEach((e) => e.classList.add('act'));
        caseUPRu.forEach((e) => e.classList.add('hidden'));
        caseUPRu.forEach((e) => e.classList.remove('act'));
        isHighRegister = false;
      }
    } else if (isHighRegister === false) {
      caseDownEn.forEach((e) => e.classList.add('hidden'));
      caseDownEn.forEach((e) => e.classList.remove('act'));
      caseUPEn.forEach((e) => e.classList.remove('hidden'));
      caseUPEn.forEach((e) => e.classList.add('act'));
      isHighRegister = true;
    } else {
      caseDownEn.forEach((e) => e.classList.remove('hidden'));
      caseDownEn.forEach((e) => e.classList.add('act'));
      caseUPEn.forEach((e) => e.classList.add('hidden'));
      caseUPEn.forEach((e) => e.classList.remove('act'));
      isHighRegister = false;
    }
  }

  function isShift() {
    isCapslock();
  }

  const ruBtns = document.querySelectorAll('.keyK.ru');
  const enBtns = document.querySelectorAll('.keyK.en');

  function change() {
    const language = JSON.parse(isRuLang);
    localStorage.setItem('isRuLang', language);
    localStorage.getItem('isRuLang');
  }

  function changeLang() {
    if (isRuLang === true) {
      ruBtns.forEach((e) => {
        e.classList.add('hidden');
      });
      enBtns.forEach((e) => {
        e.classList.remove('hidden');
      });

      isRuLang = false;
      if (isHighRegister) {
        caseDownEn.forEach((e) => e.classList.add('hidden'));
        caseDownEn.forEach((e) => e.classList.remove('act'));
        caseUPEn.forEach((e) => e.classList.remove('hidden'));
        caseUPEn.forEach((e) => e.classList.add('act'));

        isHighRegister = true;
      } else {
        caseDownEn.forEach((e) => e.classList.remove('hidden'));
        caseDownEn.forEach((e) => e.classList.add('act'));
        caseUPEn.forEach((e) => e.classList.add('hidden'));
        caseUPEn.forEach((e) => e.classList.remove('act'));
        isHighRegister = false;
      }
    } else {
      ruBtns.forEach((e) => {
        e.classList.remove('hidden');
      });
      enBtns.forEach((e) => {
        e.classList.add('hidden');
      });

      caseUPEn.forEach((e) => {
        e.classList.add('hidden');
        e.classList.remove('act');
      });
      caseDownEn.forEach((e) => {
        e.classList.add('hidden');
        e.classList.remove('act');
      });

      isRuLang = true;
      if (isHighRegister) {
        caseDownRu.forEach((e) => e.classList.add('hidden'));
        caseDownRu.forEach((e) => e.classList.remove('act'));
        caseUPRu.forEach((e) => e.classList.remove('hidden'));
        caseUPRu.forEach((e) => e.classList.add('act'));
        isHighRegister = true;
      } else {
        caseDownRu.forEach((e) => e.classList.remove('hidden'));
        caseDownRu.forEach((e) => e.classList.add('act'));
        caseUPRu.forEach((e) => e.classList.add('hidden'));
        caseUPRu.forEach((e) => e.classList.remove('act'));
        isHighRegister = false;
      }
    }
  }

  function isEnter(event) {
    textArea.focus();
  }

  function isTab() {
    textArea.focus();
    const arr = textArea.value.split('');
    const position = textArea.selectionStart;
    arr.splice(position, 0, '    ');
    textArea.value = arr.join('');
    textArea.selectionStart = textArea.selectionEnd = position + 4;
  }

  function isBackSpace() {
    textArea.focus();
    const arr = textArea.value.split('');
    const position = textArea.selectionStart;
    if (position === 0) return;
    arr.splice(position - 1, 1);
    textArea.value = arr.join('');
    textArea.selectionStart = textArea.selectionEnd = position - 1;
  }

  function isDel() {
    const arr = textArea.value.split('');
    const position = textArea.selectionStart;
    if (position === 0) return;
    arr.splice(position - 1, 1);
    textArea.value = arr.join('');
    textArea.selectionStart = textArea.selectionEnd = position;
  }

  function isArrowLeft() {
    textArea.focus();
    const arr = textArea.value.split('');
    const position = textArea.selectionStart;
    if (position === 0) return;
    textArea.selectionStart = textArea.selectionEnd = position - 1;
  }

  function isArrowRight() {
    textArea.focus();
    const arr = textArea.value.split('');
    const position = textArea.selectionStart;
    if (position === 0) return;
    textArea.selectionStart = textArea.selectionEnd = position + 1;
  }

  function isSpace() {
    input('');
  }

  keykey.forEach((e) => {
    e.addEventListener('click', (event) => {
      if (event.target.className.includes('keyK') && !event.target.className.includes('CapsLock')
    && !event.target.className.includes('Ctrl') && !event.target.className.includes('Alt')
    && !event.target.className.includes('BackSpace') && !event.target.className.includes('Win')
    && !event.target.className.includes('Enter') && !event.target.className.includes('Tab')
    && !event.target.className.includes('Shift') && !event.target.className.includes('Del')
    && !event.target.className.includes('ArrowLeft') && !event.target.className.includes('ArrowRight')
    && !event.target.className.includes('ArrowUp') && !event.target.className.includes('ArrowDown')) {
        const letter = event.target.textContent;
        input(letter);
      } else if (event.target.className.includes('CapsLock')) {
        isCapslock();
      } else if (event.target.className.includes('Backspace')) {
        isBackSpace();
      } else if (event.target.className.includes('Enter')) {
        document.getElementById('search_btn_movie').click();
        event.preventDefault();
      } else if (event.target.className.includes('Tab')) {
        isTab();
      } else if (event.target.className.includes('Shift')) {
        isShift();
      } else if (event.target.className.includes('Delete')) {
        isDel();
      } else if (event.target.className.includes('Win')) {
        changeLang();
      } else if (event.target.className.includes('ArrowLeft')) {
       isArrowLeft() ;
      }  else if (event.target.className.includes('ArrowDown')) {
        isArrowLeft() ;
      }  else if (event.target.className.includes('ArrowRight')) {
        isArrowRight() ;
      }  else if (event.target.className.includes('ArrowUp')) {
        isArrowRight() ;
      }
    });
  });

  keyboard.addEventListener('mousedown', (event) => {
    if (event.target.className.includes('keyK')) {
      event.target.classList.add('active');
    }
  });

  keyboard.addEventListener('mouseup', (event) => {
    event.target.classList.remove('active');
  });

  keyboard.addEventListener('mouseover', (event) => {
    if (event.target.className.includes('keyK')) {
      event.target.classList.add('actives');
    }
  });
  keyboard.addEventListener('mouseout', (event) => {
    if (event.target.className.includes('keyK')) {
      event.target.classList.remove('actives');
    }
  });

let hideKeyboard = () => {
    if (keyboard.style.opacity == 1) {
        keyboard.style.transition = "visibility 0s linear 0.33s, opacity 0.33s linear";
        keyboard.style.opacity = '0';
        keyboard.style.visibility = 'hidden';
    } else {
        keyboard.style.opacity = '1';
        keyboard.style.visibility = 'visible';
        keyboard.style.transitionDelay = "0s";
    }
}

keyboardBtn.onclick = () => {
    hideKeyboard();
}