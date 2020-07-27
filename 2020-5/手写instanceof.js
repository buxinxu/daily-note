/**
 * 手写instanceof
 */
function InstanceOF(l,r){
    var R=r.prototype;
    while(l.__proto__){
        if(l.__proto__===R){
            return true;
        }

    }
    return false;
}