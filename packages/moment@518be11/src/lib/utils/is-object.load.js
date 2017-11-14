montageDefine("518be11","src/lib/utils/is-object",{dependencies:[],factory:function(require,exports,module){export default function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

}})