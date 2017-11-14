montageDefine("518be11","src/lib/utils/is-function",{dependencies:[],factory:function(require,exports,module){export default function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

}})