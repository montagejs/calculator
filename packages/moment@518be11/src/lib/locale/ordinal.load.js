montageDefine("518be11","src/lib/locale/ordinal",{dependencies:[],factory:function(require,exports,module){export var defaultOrdinal = '%d';
export var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

export function ordinal (number) {
    return this._ordinal.replace('%d', number);
}


}})