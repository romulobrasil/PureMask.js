/* ========================================================================
 * Pure Mask JS: puremask.js v0.1
 * http://romulobrasil.com
 * Copyright (c) 2014 Rômulo Brasil
 * ========================================================================
 */
 
'use strict';
var PureMask = function() {
    var el = document.querySelector(".puremask");

    var maskForm = el.dataset.mask;
    el.maxLength = maskForm.length;

    var e = el.value.length;
        
        return {
               init : function() {

                   el.addEventListener('keydown', function (e){

                    if (e.keyCode === 8 || e.keyCode === 46) {
                            
                        } else {
                            formatar(maskForm);
                        }

                    });

                    function formatar(mask){
                        var element = document.querySelector(".puremask");;

                        var i = element.value.length;

                        var saida = mask.substring(0,1);
                        var texto = mask.substring(i)


                        if (texto.substring(0,1) != saida) {
                            element.value += texto.substring(0,1);
                        }
                    }
               }
        };
}();
PureMask.init();
