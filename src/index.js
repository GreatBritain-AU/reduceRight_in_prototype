'use strict';

function MyArray(...args){
    this.length = 0;
    for(let i = 0; i < args.length; i++){
        this[this.length] = args[i]
        this.length++
    }
}

function MyArrayProto(){
    this.push = function(){
            for(let i = 0; i < arguments.length; i++){
                this[this.length++] = arguments[i];
            }
        return this.length;
    }

    this.reduceRight = function(callback, sValue){
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

    this.flat = function(depth = 1){
        let res = new MyArray();

        const arrFlatten = (arr, curDep) => {
            for(let i = 0; i < arr.length; i++){
                if((arr[i] instanceof MyArray || Array.isArray(arr[i])) && curDep < depth){
                    arrFlatten(arr[i], curDep + 1)
                } else {
                    res.push(arr[i])
                }
            }
        }

        arrFlatten(this, 0);

        return res;
    }
}

MyArray.prototype = new MyArrayProto();

const firstArr = new MyArray(1, 2, 3, 4, 5, 6);

const secondArr = new MyArray(1, 2, [3, 4, [5, 6]]);

console.log(firstArr.reduceRight((accu, curr) => {return accu + curr}, 0));

console.log(secondArr.flat(1));