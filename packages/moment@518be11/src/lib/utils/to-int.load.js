montageDefine("518be11","src/lib/utils/to-int",{dependencies:[],factory:function(require,exports,module){import absFloor from './abs-floor';

export default function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

}})