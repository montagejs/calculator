montageDefine("518be11","src/lib/utils/abs-floor",{dependencies:[],factory:function(require,exports,module){export default function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

}})