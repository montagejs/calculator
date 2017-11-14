montageDefine("518be11","src/lib/duration/duration",{dependencies:[],factory:function(require,exports,module){// Side effect imports
import './prototype';

import { createDuration } from './create';
import { isDuration } from './constructor';
import {
    getSetRelativeTimeRounding,
    getSetRelativeTimeThreshold
} from './humanize';

export {
    createDuration,
    isDuration,
    getSetRelativeTimeRounding,
    getSetRelativeTimeThreshold
};

}})