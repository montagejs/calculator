montageDefine("518be11","src/lib/utils/hooks",{dependencies:[],factory:function(require,exports,module){export { hooks, setHookCallback };

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

}})