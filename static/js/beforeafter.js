// 扩展两个方法  用于在某些方法执行前后进行相应处理
Function.prototype._before = function (fn) {
    var that = this;
    return function () {
        fn.apply(this, arguments);
        return that.apply(this, arguments);
    };
}

Function.prototype._after = function (fn) {
    var that = this;
    return function () {
        var r = that.apply(this, arguments);
        fn.apply(this, arguments);
        return r;
    };
}