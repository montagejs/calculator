montageDefine("518be11","src/lib/utils/is-array",{dependencies:[],factory:function(require,exports,module){export default function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

}})