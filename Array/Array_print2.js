


/* Array 操作笔记 */

//参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//参考：http://msdn.microsoft.com/zh-cn/library/ie/ff679975(v=vs.94).aspx
//参考：http://www.javascripture.com/Array#Constructors
//参考：http://image.tianji.com/tjs/all/ecma5.html

/********************************* ECMAScript 5 以前 ****************************************/

/******************default*********************/

var arr = new Array(5);

console.log(arr.length)//5

console.log(arr[0]);//undefined


console.log(Array.isArray(arr));//true

var arr1 = [1,2,3,45];

//数组原型对象不包含它自身的 valueOf 属性；然而，它从标准内置 Object 原型对象继承 valueOf 属性。
console.log(arr1.valueOf());//[1, 2, 3, 45]
console.log(arr1 === arr1.valueOf());//true


var str = 'sdfljsdlfjsdlf';

console.log(str.valueOf());


console.log(Array.prototype.constructor);

console.log(arr1.toString());

var json ={a:1,b:2};

console.log(json.toString());


/********************concat*********************/

	
var arr = [1,2,3];
var arr1 = [4,5,6];

var arr2 = arr.concat(arr1);
var arr3 = arr + arr1;

console.log(arr2);//[1, 2, 3, 4, 5, 6]

console.log(arr3);//1,2,34,5,6

console.log(arr.concat.length)// 1


/********************join*********************/

var arr = [1,3,4,5,6,7];

console.log(arr.join('-'));



/********************pop*********************/


var arr = [1,2,4,5,67];

var num = 0;
while((num = arr.pop()) != undefined){

	console.log(num);
	console.log(arr);

}




/*
console.log(arr.pop());

console.log(arr.pop());
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.pop());
console.log(arr);
*/
/********************push*********************/


var arr = [];

for(var i=0;i<=10;i++)
{
	arr.push(i);
}

arr.length = 5;

console.log(arr);


var arr1 = new Array(5);

for(var i=0;i<5;i++)
{
	//arr1[i] = i;

	arr1.push(i);
}



console.log(arr1[0]);


console.log('-------------------------------');

var arr2 = [];

arr2.push(1,2,3);
arr2.push(4,5,6);

console.log(arr2);


var number = arr2.pop();

while(number !==undefined){

	console.log(number);
	number = arr2.pop();
}


/********************reverse*********************/

var arr = [1,23,4,5,6,7,33,123];

console.log(arr.reverse());	// [123, 33, 7, 6, 5, 4, 23, 1];
console.log(arr);// [123, 33, 7, 6, 5, 4, 23, 1]


/********************shift*********************/

	
var arr = [12,4,5,6,7,2];

arr.shift();
arr.shift();
arr.shift();
arr.shift();
arr.shift();
arr.shift();
arr.shift();

console.log(arr);


/********************sort*********************/


var str = "sldkfjklsdjfasjdflsjf";

var str1 = "1231210912088509500";

var arr = str.split('').sort();

console.log(arr);


var arr1 = str1.split('').sort(function(a,b){

	return b-a;
})

console.log(arr1);



/********************splice*********************/


var arr = [1,2,3,4,5,67];


console.log(arr.splice(1,4));//[2, 3, 4, 5]

console.log(arr);//[1, 67]

console.log(arr.splice(-1));//[67]

console.log(arr);//[1]
	

console.log('---------------------------------------------');

var arr1 = new Array('4','11','2','10','3','1');

arr1.splice(2,2,'21','31');

console.log(arr1);//["4", "11", "21", "31", "3", "1"]


/********************toLocaleString*********************/

var arr = [1,2,3,4,5];

console.log(arr.toLocaleString());//1,2,3,4,5
console.log(arr);//[1,2,3,4,5]
console.log(arr.toString());//1,2,3,4,5

console.log(new Date().toLocaleString());//2014/12/3 上午10:35:08

console.log(new Date().toString());//Wed Dec 03 2014 10:35:08 GMT+0800 (CST)

/********************unshift*********************/


var arr = [12,4,5,6,7,2];

arr.unshift(999);
arr.unshift(9991);

console.log(arr);


/********************************* ECMAScript 5 ****************************************/

/********************every*********************/

//Array.prototype.every ( callbackfn [ , thisArg ] )
// callbackfn 应该是个函数，它接受三个参数并返回一个可转换为布尔值 true 和 false 的值。every 按照索引的升序，对数组里存在的每个元素调用一次 callbackfn，直到他找到一个使 callbackfn 返回 false 的元素。如果找到这样的元素，every 马上返回 false，否则如果对所有元素 callbackfn 都返回 true，every 将返回 true。callbackfn 只被数组里实际存在的元素调用；它不会被缺少的元素调用。

//调用 callbackfn 时将传入三个参数：元素的值，元素的索引，和遍历的对象

var arr = [12,34,22,77];

var arr1 = arr.every(function(a,b,c){

	console.log(a)
	console.log("index:"+b)
	console.log("遍历对象"+c)

	return a>2;
})
console.log(arr);
console.log(arr1);

/*
结果：
12
index:0
遍历对象12,34,22,77
34
index:1
遍历对象12,34,22,77
22
index:2
遍历对象12,34,22,77
77
index:3
遍历对象12,34,22,77


[12, 34, 22, 77]
true

*/

console.log("------------------------------");

var arr2 = arr.every(function(a,b,c){

	console.log(a)
	console.log("index:"+b)
	console.log("遍历对象"+c)

	return a>12;
})
console.log(arr);
console.log(arr2);

/*
结果：
12
index:0
遍历对象12,34,22,77
[12, 34, 22, 77]
false

*/


console.log("------------------------------");
// every 处理的元素范围是在首次调用 callbackfn 之前设定的。在 every 调用开始后追加到数组里的元素们不会被 callbackfn 访问。如果更改以存在数组元素，every 访问这些元素时的值会传给 callbackfn；在 every 调用开始后删除的和之前被访问过的元素们是不访问的。every 的行为就像数学量词“所有（for all）”。

//特别的，对一个空数组，它返回 true。
var arr3 = [];

var arr4 = arr3.every(function(a,b,c){
	console.log(a)
	return a>10
})

console.log(arr4);//true


console.log('----------------------------------------------------------------')
var numbers = [2,4,5,6,8];

function CheckIfEven(value,index,ar){

	console.log(value + " ");

	if(value%2==0){
		
		return true;
	}
	else
	{
		return false;
	}
}

if(numbers.every(CheckIfEven))
{
	console.log('all are even');
}else{
	console.log('some are not even');
}



console.log('----------------------------------------------------------------')

var nums = [10,15,19];

var checkNumericRange = function(value){

	if(typeof value !== 'number'){

		return false;
	}
	else{

		if(value >= this.min && value <= this.max){

			return true;
		}
	}

}

var obj = {min:10,max:20};

var bool = nums.every(checkNumericRange,obj)

if(bool){

	console.log("All are within range.");
}
else{
	console.log("Some are not within range.");
}



if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list 
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}


/********************filter*********************/


//Array.prototype.filter ( callbackfn [ , thisArg ] )	
//callbackfn 应该是个函数，它接受三个参数并返回一个可转换为布尔值 true 和 false 的值。filter 按照索引的升序，对数组里存在的每个元素调用一次 callbackfn，并用使 callbackfn 返回 true 的所有值构造一个新数组。callbackfn 只被实际存在的数组元素调用；它不会被缺少的数组元素调用。

var arr = [1,212,112,44,11,1123,999];

var arr1 = arr.filter(function(a,b,c){

	return a>20;
	//console.log(a);

})

console.log(arr1);


//适用于筛选


var filterNames = Object.getOwnPropertyNames(window).filter(function(value){

	var firstChar = value.substr(0,3);

	if(firstChar.toLowerCase() == "css"){

		return true;
	}
	else
	{
		return false;
	}
})

console.log(filterNames);

//["CSSViewportRule", "CSSValueList", "CSSValue", "CSSUnknownRule", "CSSStyleSheet", "CSSStyleRule", "CSSStyleDeclaration", "CSSRuleList", "CSSRule", "CSSPrimitiveValue", "CSSPageRule", "CSSMediaRule", "CSSKeyframesRule", "CSSKeyframeRule", "CSSImportRule", "CSSFontFaceRule", "CSSCharsetRule", "CSS"]


//下面的示例阐释 thisArg 参数的用法，该参数指定对其引用 this 关键字的对象。


var numbers = [6, 12, "15", 16, "the", -12];

var obj = {min:10,max:20};

var result = numbers.filter(function(value){

	console.log(this);//Object {min: 10, max: 20}	打印六次

	if(typeof value !== 'number'){

		return false;
	}
	else{

		return value >= this.min && value <= this.max;
	}

},obj)


console.log(result);//[12,16]


//filter 方法可应用于字符串而不是数组。 下面的示例演示如何执行此操作。
//取句子中每个单词的第一个字母。
var sentence = "The quick brown fox jumps over the lazy dog.";
var subset = [].filter.call(sentence,function(value,index,ar){

	if(index ==0){

		return true;
	}
	else{
		return ar[index-1] === " ";
	}
})

console.log(subset);//["T", "q", "b", "f", "j", "o", "t", "l", "d"]



if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}

/********************forEach*********************/


//Array.prototype.forEach ( callbackfn [ , thisArg ] )
// callbackfn 应该是个函数，它接受三个参数。forEach 按照索引的升序，对数组里存在的每个元素调用一次 callbackfn。callbackfn 只被实际存在的数组元素调用；它不会被缺少的数组元素调用。


var arr = [11,22,33,44,55,66];

var arr1 = [];

arr.forEach(function(a,b,c){

	if(a>50){

		arr1.push(a);
	}


})

console.log(arr1);//[55,66]
console.log(arr);//[11,22,33,44,55,66]


var arr2 = arr.forEach(function(a,b,c){

	if(a>50){

		return a;
	}


})

console.log(arr2);//undefined


//适用于处理数组中得每个元素。


if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}

/********************indexOf*********************/


/***************indexOf****************/
//新实现的方法。不兼容 
//Array.prototype.indexOf ( searchElement [ , fromIndex ] )
//indexOf 按照索引的升序比较 searchElement 和数组里的元素们，它使用内部的严格相等比较算法 (11.9.6)，如果找到一个或更多这样的位置，返回这些位置中第一个索引；否则返回 -1

var arr = [1,20,30,40,5,6,30];

console.log(arr.indexOf(3));//-1
console.log(arr.indexOf(30,4));//6

var ar = ["ab", "cd", "ef", "ab", "cd"];

console.log(ar.indexOf("ab",-2));//3


if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

/********************isArray*********************/


// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype); 

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });



if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/********************lastIndexOf*********************/


/***************lastIndexOf****************/
//新实现的方法。不兼容 
//Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
// lastIndexOf 按照索引的降序比较 searchElement 和数组里的元素们，它使用内部的严格相等比较算法 (11.9.6)，如果找到一个或更多这样的位置，返回这些位置中最后一个索引；否则返回 -1。

//可选的第二个参数 fromIndex 默认是数组的长度减一（即搜索整个数组）。如果它大于或等于数组长度，将会搜索整个数组。如果它是负的，就把它当作从数组末尾到计算后的 fromIndex 的偏移量。如果计算后的索引小于 0，返回 -1。


var arr = [1,20,30,40,5,6,30];

console.log(arr.lastIndexOf(3));//-1
console.log(arr.lastIndexOf(30));//6

console.log(arr.lastIndexOf(30,6));//6
console.log(arr.lastIndexOf(30,5));//2
console.log(arr.lastIndexOf(30,-1));//6
console.log(arr.lastIndexOf(30,-2));//2



if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}

/********************map*********************/


//Array.prototype.map ( callbackfn [ , thisArg ] )

// callbackfn 应该是个函数，它接受三个参数。map 按照索引的升序，对数组里存在的每个元素调用一次 callbackfn，并用结果构造一个新数组。callbackfn 只被实际存在的数组元素调用；它不会被缺少的数组元素调用。


var arr = [54,21,31,123,4123,551,90];

var arr1 =  arr.map(function(a,b,c){

	return a+10;

})

console.log(arr);
console.log(arr1);

//适用于处理数组中得每个元素



console.log("***********************************************");

var obj = {

	divisor:10,
	remainder:function(value){

		return value % this.divisor;
	}
}

var numbers = [6,12,25,30];

var results = numbers.map(obj.remainder,obj)

console.log(results);//[6,2,5,0]


console.log("***********************************************");

var nums = [9,16];

var newNums = nums.map(Math.sqrt);

console.log(newNums);//[3,4]


console.log("***********************************************");

function threeChar(value,index,str){

	return str.substring(index-1,index+2);
}

var word = 'Thursday';

var result = [].map.call(word,threeChar)

console.log(result);//["Th", "Thu", "hur", "urs", "rsd", "sda", "day", "ay"]

if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}


/********************reduce*********************/


//Array.prototype.reduce ( callbackfn [ , initialValue ] )
// callbackfn 应该是个函数，它需要四个参数。reduce 按照索引的升序，对数组里存在的每个元素 , 将 callbackfn 作为回调函数调用一次。

// 调用 callbackfn 时将传入四个参数：previousValue（initialValue 的值或上次调用 callbackfn 的返回值），currentValue（当前元素值），currentIndex，和遍历的对象。第一次调用回调函数时，previousValue 和 currentValue 的取值可以是下面两种情况之一。如果为 reduce 调用提供了一个 initialValue，则 previousValue 将等于 initialValue 并且 currentValue 将等于数组的首个元素值。如果没提供 initialValue，则 previousValue 将等于数组的首个元素值并且 currentValue 将等于数组的第二个元素值。如果数组里没有元素并且没有提供 initialValue，则抛出一个 TypeError 异常。



//对数组中的所有元素调用指定的回调函数。 该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。


//下面的示例将数组值连接成字符串，各个值用“::”分隔开。 由于未向 reduce 方法提供初始值，第一次调用回调函数时会将“12”作为 previousValue 参数并将“11”作为 currentValue 参数

var arr = [12,11,44,51,99,123];
var result = arr.reduce(function(a,b,c,d){

	console.log(a);
	console.log(b);
	console.log(c);
	return a+"::"+b;

})
console.log(result);
/*
reduce.html:26 12
reduce.html:27 11
reduce.html:28 1
reduce.html:26 12::11
reduce.html:27 44
reduce.html:28 2
reduce.html:26 12::11::44
reduce.html:27 51
reduce.html:28 3
reduce.html:26 12::11::44::51
reduce.html:27 99
reduce.html:28 4
reduce.html:26 12::11::44::51::99
reduce.html:27 123
reduce.html:28 5
reduce.html:32 12::11::44::51::99::123
*/


console.log('------------------------------------------------------------------------')




var numbers = [10.3,10.6,11.1,11.9];


var result1 = numbers.reduce(function(a,b){

	console.log(a);
	console.log(b);
	console.log('---------------');

	return a + Math.round(b);

},0)

console.log(result1);


console.log('------------------------------------------------------------------------')

var digits = [4,1,2,5];


var result2 = digits.reduce(function(a,b,c,d){

	var exponent = (d.length-1)-c;

	var value = b * Math.pow(10,exponent);
	console.log(exponent);
	console.log(value);
	console.log('-------------------------');
	return a+ value;

},0)

console.log(result2);//4125


console.log('------------------------------------------------------------------------')


var nums = [20, 1, -5, 6, 50, 3];

var rArray = nums.reduce(function(a,b){

	var nextArray;

	if(b>=1 && b<=10){

		nextArray = a.concat(b);
	}
	else{
		nextArray = a;
	}
	return nextArray;

},[]);

console.log(rArray);


if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback /*, initialValue*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && ! k in t) {
        k++; 
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}

/********************reduceRight*********************/


var elements = ["abc","def",123,456];

var appendCurrent = function(pv,cv){

	console.log(pv);
	console.log(cv);

	return pv+"::"+cv;
}

var result = elements.reduceRight(appendCurrent);

console.log(result);


/*
reduceRight.html:15 456
reduceRight.html:16 123
reduceRight.html:15 456::123
reduceRight.html:16 def
reduceRight.html:15 456::123::def
reduceRight.html:16 abc
reduceRight.html:23 456::123::def::abc
*/


console.log('----------------------------------------------');

var numbers = [3,4,5];

var sumOfSquares = numbers.reduceRight(function(pv,cv,index,ar){

	var nextValue = pv + (cv*cv);

	return nextValue;

},0);


console.log(sumOfSquares);//50

console.log('----------------------------------------------');

var nums = [20, 1, -5, 6, 50, 3];

var Process2 = function(pv,cv){

	var nextArray;

	if(cv>=1 && cv<=10){
		nextArray = pv.concat(cv);
	}
	else{

		nextArray = pv;
	}

	return nextArray;
}

var resultArray = nums.reduceRight(Process2,[])


console.log(resultArray)//[3, 6, 1]

console.log('----------------------------------------------');

var word = 'retupmoc';

var appendToArray = function(pv,cv){

	return pv + cv;
}

var resultStr = [].reduceRight.call(word,appendToArray,'The ');

console.log(resultStr);//The computer


if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined' );
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !k in t) {
        k--;
      }
      if (k < 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}



/********************************* ECMAScript 6 ****************************************/

/********************copyWithin*********************/

//arr.copyWithin(target, start[, end = this.length])
//ECMAScript 6
//The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}


/********************entries*********************/


//arr.entries()
//ECMAScript 6
//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']




/********************fill*********************/


//The fill() method fills all the elements of an array from a start index to an end index with a static value.

//arr.fill(value[, start = 0[, end = this.length]])
//ECMAScript 6	


console.log([1, 2, 3].fill(4));//[4,4,4]
console.log([1, 2, 3].fill(4,1));//[1,4,4]

console.log([1, 2, 3].fill(4, -3, -2))// [4, 2, 3]

console.log([1, 2, 3].fill(4, NaN, NaN))//[1,2,3]

console.log([].fill.call({ length: 3 }, 4))//{0: 4, 1: 4, 2: 4, length: 3}


if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}


/********************find*********************/


//ECMAScript 6
//The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.

//arr.find(callback[, thisArg])

console.log([4,5,6,7].find(function(e){return e>5}));//6

console.log([4,5,6,7].find(function(e){return e>30}))//undefined



if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}


/********************findIndex*********************/


//ECMAScript 6

//The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.

//arr.findIndex(callback[, thisArg])

console.log([4,5,6,7].findIndex(function(e){return e>6})) //3

console.log([4,5,6,7].findIndex(function(e){return e>3})) //0

console.log([4,5,6,7].findIndex(function(e){return e>30})) //-1



if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}
/********************from*********************/


//Array.from
//ECMAScript 6	
//Array.from(arrayLike[, mapFn[, thisArg]])

function f(){

	return Array.from(arguments);
}
console.log(f(1,2,3));//[1, 2, 3]

console.log('-------------------------------');

function set(){};
var s = new Set(["foo", window]);
console.log(Array.from(s));   // ["foo", window]

console.log('-------------------------------');

console.log(Array.from("foo")); //["f", "o", "o"]


console.log(Array.from([1, 2, 3], x => x + x));// [2, 4, 6]

console.log(Array.from({length: 5}, (v, k) => k))// [0, 1, 2, 3, 4]


if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else      
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}



console.log(Array.from("foo")); //["f", "o", "o"]


function f(){

	return Array.from(arguments);
}
console.log(f(1,2,3));//[1, 2, 3]


/********************keys*********************/

	
var arr = ['a','b','c'];

var eArr = arr.keys();

console.log(eArr.next().value);//0
console.log(eArr.next().value);//1
console.log(eArr.next().value);//2



/********************of*********************/


//ECMAScript 6	
//Array.of(element0[, element1[, ...[, elementN]]])


if(!Array.of){

	Array.of = function(){

		return Array.prototype.slice.call(arguments);
	}
}


console.log(Array.of(1,2,4));


/********************slice*********************/


var arr = [1,2,3,4,5,67];

var a = arr.slice(2,4);

console.log(a);//[3,4]
console.log(arr);//[1,2,3,4,5,67];


/**
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 * (technically, since host objects have been implementation-dependent,
 * at least before ES6, IE hasn't needed to work this way).
 * Also works on strings, fixes IE < 9 to allow an explicit undefined
 * for the 2nd argument (as in Firefox), and prevents errors when
 * called on other DOM objects.
 */
(function () {
  'use strict';
  var _slice = Array.prototype.slice;

  try {
    // Can't be used with DOM elements in IE < 9
    _slice.call(document.documentElement);
  } catch (e) { // Fails in IE < 9
    // This will work for genuine arrays, array-like objects, 
    // NamedNodeMap (attributes, entities, notations),
    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
    Array.prototype.slice = function(begin, end) {
      // IE < 9 gets unhappy with an undefined end argument
      end = (typeof end !== 'undefined') ? end : this.length;

      // For native Array objects, we use the native slice function
      if (Object.prototype.toString.call(this) === '[object Array]'){
        return _slice.call(this, begin, end); 
      }

      // For array like object we handle it ourselves.
      var i, cloned = [],
        size, len = this.length;

      // Handle negative value for "begin"
      var start = begin || 0;
      start = (start >= 0) ? start: len + start;

      // Handle negative value for "end"
      var upTo = (end) ? end : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Actual expected size of the slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
}());

/********************some*********************/


//Array.prototype.some ( callbackfn [ , thisArg ] )
//此方法和 every 相对应。
var arr = [23,45,2,1,55,99];

// callbackfn 应该是个函数，它接受三个参数并返回一个可转换为布尔值 true 和 false 的值。some 按照索引的升序，对数组里存在的每个元素调用一次 callbackfn，直到他找到一个使 callbackfn 返回 true 的元素。如果找到这样的元素，some 马上返回 true，否则，some 返回 false。callbackfn 只被实际存在的数组元素调用；它不会被缺少的数组元素调用。

var arr1 = arr.some(function(a,b,c){

	return a>20;

})

console.log(arr1);//true



if (!Array.prototype.some) {
  Array.prototype.some = function(fun /*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}








