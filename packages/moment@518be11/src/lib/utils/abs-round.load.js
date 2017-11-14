montageDefine("518be11","src/lib/utils/abs-round",{dependencies:[],factory:function(require,exports,module){export default function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

}})