/* ========================================================================
 * Pure Mask JS: puremask.js v0.3.1
 * https://romulobrasil.com
 * Copyright (c) 2016 Rômulo Brasil
 * ========================================================================
 */
 
'use strict';
var PureMask = function() {
    return {
        format : function(element, placeholder) {            
            var el = document.querySelector(element);
            var maskForm = '';
            
            if (el === undefined || el === null) {
                console.log('PureMask.js: class não foi declarada corretamente: ' + element + '.');
                return null;
            }
            
            if (el.dataset.mask === undefined || el.dataset.mask === null) {
                console.log('PureMask.js: data-mask não foi declarada na Tag com a class: ' + el.className + '.');
            } else {
                maskForm = el.dataset.mask;
                el.maxLength = maskForm.length;
            }
            
            if (placeholder === true) {
                el.placeholder = maskForm;
            }
            
            var e = el.value.length;
            
            el.addEventListener('keypress', function (e){
                if (e.keyCode !== 8 || e.keyCode !== 46) {   
                    formato(maskForm);
                }
            });
            
            function formato(mask) {
                var text = '';
                var data = el.value;
                var c, m, i, x;

                for (i = 0, x = 1; x && i < mask.length; ++i) {
                    c = data.charAt(i);
                    m = mask.charAt(i);

                    switch (mask.charAt(i)) {
                        case '#' : 
                            if (/\d/.test(c)) {
                                text += c;
                            } else {
                                x = 0;
                            } 
                            break;

                        case 'A' : 
                            if (/[a-z]/i.test(c)) {
                                text += c;
                            } else {
                                x = 0;

                            } 
                            break;

                        case 'N' : 
                            if (/[a-z0-9]/i.test(c)) {
                                text += c;
                            } else {
                                x = 0;
                            } 
                            break;

                        case 'X' : 
                            text += c; 
                            break;

                        default  : 
                            text += m; 
                            break;
                    }
                }
                el.value = text;                
            }
        }
    };
}();