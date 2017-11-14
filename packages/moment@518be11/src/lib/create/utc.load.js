montageDefine("518be11","src/lib/create/utc",{dependencies:[],factory:function(require,exports,module){import { createLocalOrUTC } from './from-anything';

export function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

}})