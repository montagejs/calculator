/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */

/* <copyright>
Copyright (c) 2012, Motorola Mobility LLC.
All Rights Reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of Motorola Mobility LLC nor the names of its
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
</copyright> */

var Component = require("montage/ui/component").Component,
	Expression = require("core/expression").Expression;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleCalcResult: {
        value: function(event) {
            if (event.detail.expression) {
                event.detail.expression.comment = "Calculator";
                this.templateObjects.tape.addTapeEntry(event.detail.expression);
            }
        }
    },

    // Once data is being saved/loaded the number of empty entries will change
    templateDidLoad: {
        value: function() {
            this.templateObjects.calculator.addEventListener("calcResult", this, false);

            var screenHeight = screen.height;
            var defaultTapeHeight = 73;
            var noOfTapeEntries = parseInt(screenHeight / defaultTapeHeight);
            var expression = new Expression();
            for(var i = 0; i < noOfTapeEntries; i++) {
                this.templateObjects.tape.addEmptyTapeEntry(expression);
            }

            // Fixes a CSS-Mask Bug in the Android Browser
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1;
            if(isAndroid) {
                this._element.classList.add("isAndroid");
            }
        }
    }
});
