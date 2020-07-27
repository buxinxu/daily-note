/**
 * 手写bind
 */
Function.prototype.bind=function(){
    var self=this;
    var context=Array.prototype.shift.call(arguments);
    var arg=Array.prototype.slice.call(arguments);
    return function(){
        self.apply(contentx, Array.prototype.concat.call(arg,Array.prototype.slice.call(arguments)))
    }
}
