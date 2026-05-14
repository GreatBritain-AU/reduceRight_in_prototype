'use strict';

function MyArray(ele1, ele2, ele3, ele4, ele5){
    this[0] = ele1;
    this[1] = ele2;
    this[2] = ele3;
    this[3] = ele4;
    this[4] = ele5;
    this.length = 5;
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

const firstArr = new MyArray(1, 2, 3, 4, 5);

console.log(firstArr.ReduceRight((accu, curr) => {return accu + curr}, 0));