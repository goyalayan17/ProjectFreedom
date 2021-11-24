// Array.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg;
//     for (var i = 0; i < this.length; i++) {
//         callback.call(thisArg, this[i], i, this);
//     }
// };




// [1,2,3].forEach((i, index, array)=> {
//     console.log(i);
//     console.log(index);
//     console.log(array);
// });

// Array.prototype.find = function(callback, thisArg) {
//     for(var i=0; i<this.length;i++){
//         if(callback.call(thisArg, this[i], i, this)) {
//             return this[i];
//         }
//     }
//     return undefined;
// };

// const s =[1,2,3].find(item =>{
//      return item===2
//     });

//     console.log(s);

// Array.prototype.filter= function(callback, thisArgs){
//     var arr=[];
//     for(var i=0; i<=this.length;i++) {
//         if(callback.call(thisArgs, this[i], i, this)){
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// };

// const d =[1,3,4,2,3].filter(item => item===3);

// console.log(d);

// Array.prototype.map = function(callback, thisArgs) {
//     var arr=[];
//     for(var i=0;i<this.length;i++) {
//        var item = callback.call(thisArgs, this[i], i , this);
//        arr.push(item);
//     }
//     return arr;
// };

// const dd =[1,2,3,4].map(item => `${item}_test`);

// console.log(dd);

// Array.prototype.findIndex = function(callback, thisArgs) {
//     var index=-1;
//     for(var i=0; i< this.length ; i++ ) {
//         if(callback.call(thisArgs, this[i], i, this)){
//             index=i;
//             return index;
//         }
//     }
//     return index;
// };

// const ff =[23,56,75,98,44].findIndex(item => item ===98);

// console.log(ff);

// Array.prototype.reduce = function(callback, initialValue) {
//     var currentValue = initialValue;
//     for(var i=0;i<this.length;i++) {
//         currentValue = callback.call(undefined, currentValue, this[i], i, this);
//     }
//     return currentValue;
// };
// const sum=(a,b) =>a+b; 
// const gg=[2,5,8,3,6].reduce(sum, 0);

// console.log(gg);

// const [FULFILLED, REJECTED, PENDING] = [true, false, void 0];
// const isThenable = (subject) => subject && subject.then == 'function';

// class Promise {
//     get value() {
//         return void 0;
//     };

//     get state() {
//         return PENDING;
//     };

//     get settled() {
//         return false;
//     };
//     constructor(executor) {
//         if (typeof executor != "function") {
//             throw ("executor should have function.");
//         }

//         Object.defineProperty(this, "observers", []);
//         const secret = [];
//         const resolve = (value, byPassKey) => {
//             if (this.settled && byPassKey != secret) {
//                 return;
//             }
//             const thenable = isThenable(value);

//             if (thenable && value.state === PENDING) {
//                 value.then(
//                     (v) => resolve(v, secret),
//                     (r) => reject(r, secret)
//                 );

//                 schedule(this.observers.map((observer)=>({
//                     handler: this.state === PENDING ?
//                         observer.onfulfill : 
//                         observer.onReject,
//                     value : this.value
//                 }))
//                 );
//             } else {

//                 Object.defineProperty(this, "value", { value: thenable ? value.value : value });
//                 Object.defineProperty(this, "state", { state: thenable ? value.state : FULFILLED });
//             }

//             Object.defineProperty(this, "settled", { settled: true });

//         };

//         const reject = (reason, byPassKey) => {
//             if (this.settled && byPassKey != secret) {
//                 return;
//             }
//             Object.defineProperty(this, "settled", { settled: true });
//             Object.defineProperty(this, "value", { value: reason });
//             Object.defineProperty(this, "state", { state: REJECTED });
//             schedule(this.observers.map((observer)=>({
//                 handler: 
//                     observer.onReject,
//                 value : value
//             }))
//             );
//         };
//         try {
//             executor(resolve, reject);
//         } catch (reject) {
//             reject(reject);
//         };

//     }

//     then(onfulfill, onReject) {
//         return this.constructor((resolve, reject) => {
//             internalFulfill = (value) => {
//                 try {
//                     resolve(typeof onfulfill == "function" ? onfulfill(resolve) : value);
//                 } catch (error) {
//                     reject(error);
//                 };

//             };

//             internalReject = (reason) => {
//                 try {
//                     resolve(typeof onReject == "function" ? resolve(onReject(reject)) : reject(reason));
//                 } catch (error) {
//                     reject(error);
//                 };

//             };
//             if(this.state === PENDING){
//                 this.observers.push({ onfulfill: internalFulfill, onReject: internalReject });
//             } else {
//                 schedule([{
//                     handler: this.state === FULFILLED ?
//                             internalFulfill :
//                             internalReject,
//                     value: this.value
//                 }]);
//             }

//         });
//     };
// };

// const schedule =()=>{
// };
const CUSTOM_PROMISE_STATE = { PENDING: "PENDING", FULFILLED: "FULFILLED", REJECTED: "REJECTED" };
class customPromise {
    constructor(executorfn) {
        this.CustomPromiseState = CUSTOM_PROMISE_STATE.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFns = [];
        this.promises = [];
        this.catchFn = null;
        this.resolvedData = null;
        executorfn(this.resolver, this.rejector);
    }

    resolver(resolverObj) {
        if (this.CustomPromiseState === CUSTOM_PROMISE_STATE.PENDING) {
            this.thenFn && this.thenFn(resolverObj);
        }
        this.CustomPromiseState = CUSTOM_PROMISE_STATE.FULFILLED;

        while (this.thenFns.length) {
            const thenFn = this.thenFns.shift();
            thenFn(this.resolvedData || resolverObj);
        }
    };


    rejector(rejectorObj) {
        if (this.CustomPromiseState === CUSTOM_PROMISE_STATE.PENDING) {
            this.catchFn && this.catchFn(rejectorObj);
        }
        this.CustomPromiseState = CUSTOM_PROMISE_STATE.REJECTED;
    };


    then(thenFn) {
        this.thenFns.push(thenFn);
        return this;
    };

    catch(catchfn) {
        this.catch = catchfn;
        return this;
    }

    finally(callback){
        const constructor = this.constructor;
        return this.then((value)=>{
            return this.resolver(callback()).then(()=>{return value;}),
            (reason)=>{
                return this.resolver(callback()).then(()=>{throw reason;});
            }
            
        });
    }

    static all(promises) {
        this.promises = promises;
        var responses = [];
        var errResponses = [];
        try {
            return new customPromise((resolve, reject)=>{
            if (this.promises.length > 0) {
                promises.forEach(async (promise, index) => {
                    const response = await promise;
                    responses.push(response);
                    if (index === promises.length - 1) {
                        if (errResponses.length > 0) {
                            reject(errResponses);
                        } else {
                            resolve(responses);
                        }
                    }
                });
               
            } else {
                throw new Error("Promise cannot be empty.");
            }
        });
        } catch (reason) {
            errResponses.push(reason);
            reject(errResponses);
        }
    };

};

// const getNumber = () => {
//     new customPromise((resolve, reject) => {
//         const randomNumber = parseInt(Math.random() * 100, 10);
//         setTimeout(() => {
//             if (randomNumber % 5 === 0) {
//                 reject(randomNumber);
//             } else {
//                 resolve(randomNumber);
//             }
//         });
//     }).then((response) => {
//         console.log(response);
//     }).then((val) => incrementBy(val, 10))
//         .then((val) => incrementBy(val, 20))
//         .then((val) => incrementBy(val, 30))
//         .catch((reason) => console.log('reason', reason));
// };
// const incrementBy = (originalVal, incrementBy = 1) => {
//     console.log(originalVal + incrementBy);
//     return originalVal + incrementBy;
// };
// getNumber();

// // numberPromise.then((val)=> incrementBy(val, 10))
// // .then((val)=> incrementBy(val, 20))
// // .then((val)=> incrementBy(val, 30));

// const promise1 =new customPromise((resolve, reject) => {
//     const randomNumber = parseInt(Math.random() * 100, 10);
//     setTimeout(() => {
//         if (randomNumber % 5 === 0) {
//             reject(randomNumber);
//         } else {
//             resolve(randomNumber);
//         }
//     });
// }).catch(error=>{
//     reject(error);
// });

// const promise2 =new customPromise((resolve, reject) => {
//     const randomNumber = parseInt(Math.random() * 100, 10);
//     setTimeout(() => {
//         if (randomNumber % 5 === 0) {
//             reject(randomNumber);
//         } else {
//             resolve(randomNumber);
//         }
//     });
// }).catch(error=>{
//     reject(error);
// });;

// customPromise.all([promise1, promise2]).then(responses=>{
//     console.log(responses);
// });

const promise1 =new customPromise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
        if (randomNumber % 5 === 0) {
            reject(randomNumber);
        } else {
            resolve(randomNumber);
        }
    });
}).catch(error=>{
    reject(error);
});

promise1.then((response)=>{
    console.log(response);
}).finally((final)=>{
    console.log(final);
});