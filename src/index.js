'use strict';

function MyArray(...args){
    this.length = 0;
    for(let i = 0; i < args.length; i++){
        this[this.length] = args[i]
        this.length++
    }
}

MyArray.prototype.ReduceRight = function (callback, sValue){
    let res;
    let sIndex;
    if(sValue !== undefined){
        res = sValue;
        sIndex = this.length - 1;

        for(let i = sIndex; i >= 0; i--){
            res = callback(res, this[i], i, this[i]);
        }
    }else {
        res = this[this.length - 1];
        sIndex = this.length - 2;

        for(let i = sIndex; i >= 0; i--){
            res = callback(res, this[i], i, this[i]);
        }
    }

    return res;
}

const firstArr = new MyArray(1, 2, 3, 4, 5, 6);

console.log(firstArr.ReduceRight((accu, curr) => {return accu + curr}, 0));