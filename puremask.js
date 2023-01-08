/* ============================================
 * Pure Mask JS: puremask.js v1.0.3
 * https://romulobrasil.com
 * Copyright (c) 2016-2023 Rmulo Brasil
 * ============================================
 */ 
const PureMask = {
  logs: {
    element: 'PureMask.js: Please declare the element that will receive the mask.',
    mask: 'PureMask.js: data-mask was not declared on the following tag: ',
  },
  maskFunctions: {
    '#': (c) => /\d/.test(c),
    'A': (c) => /[a-z]/i.test(c),
    'N': (c) => /[a-z0-9]/i.test(c),
    'X': (c) => true,
  },
  format(element, placeholder){
    const els = document.getElementsByClassName(element);
    if(!els){
      console.log(this.logs['element']);
    } else {
      Array.from(els).forEach(el => {
        if(!el.dataset.mask) {
          console.log(this.logs['mask']);
          console.log(el);
        } else if(placeholder){
          el.placeholder = el.dataset.mask;
        }
        el.addEventListener('keydown', e => {
          if(e.keyCode != 8 && e.keyCode != 46) {
            this.applyMaskToValue(el, el.dataset.mask);
          }
        });
      });
    }
  },
  applyMaskToValue(el, mask){
    let formattedText = '';
    let currentChar, maskChar;

    for (let i = 0, isValid = true; isValid && i < mask.length - 1; ++i) {
      currentChar = el.value.charAt(i);
      maskChar = mask.charAt(i);

      if (this.maskFunctions[maskChar]) {
        if (this.maskFunctions[maskChar](currentChar)) {
          formattedText += currentChar;
        } else {
          isValid = false;
        }
      } else {
        formattedText += maskChar;
      }
    }
    el.value = formattedText;
  },
}