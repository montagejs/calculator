montageDefine("518be11","src/lib/utils/is-number",{dependencies:[],factory:function(require,exports,module){export default function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

}})