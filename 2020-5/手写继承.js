/**
 * 手写实现继承的多种方式
 */
function Father(){}
function Child(){}
/*
原型继承
*/
Chidld.prototype=new Father();
/**
 * 构造继承
 */
function Child(name){
    Father.call(this,name);
}
/**
 * 组合继承
 */
function Child(name){
    Father.call(this, name);
}
Child.prototype=new Father();

/**
 * 寄生继承
 */
function cloneObj(o){
    var clone=Object.create(o);
    clone.sayName=function(){};
    return clone;

}
/**
 * 寄生组合继承
 */

/**
 * ES6 class extend继承
 */