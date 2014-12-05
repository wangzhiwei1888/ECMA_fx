

//js其他操作

/******************************************* Boolean ********************************************/

console.log(Boolean(''));//false
console.log(Boolean('0'));//true
console.log(Boolean(0));//false
console.log(Boolean(1));//true
console.log(Boolean([]));//true
console.log(Boolean(undefined));//false
console.log(!!undefined);//false

var literal = true;
var boxed = new Boolean(true);

console.log(literal === true);	//true
console.log(boxed === true);	//false
console.log(boxed.valueOf() === true);	//true


// Literals cannot hold other properties but boxes can
literal.foo = 'bar';
boxed.foo = 'bar';
console.log(literal.foo); //undefined
console.log(boxed.foo);	//bar


console.log(true.toString()); //"true"
console.log(false.toString()); //"false"



/******************************************* error ********************************************/


var divide = function(x, y) {
  if (y === 0) {
    throw new Error('divide by zero');
  }
  return x / y;
};

try {
  console.log(divide(10, 0)); 
}
catch (error) {
  console.log(error.name);//Error
  console.log(error.message);//divide by zero
}



try {
  foo; 
}
catch (error) {
  console.log(error.message);//foo is not defined
  console.log(error.name);//ReferenceError
}




/********************基本对象**************************/

//new Object( [ value ] )
//Object*生成器以给定的值产生一个对象封装。如果给定值是null或undefined，它生成并返回一个空对象，否则，它将返回一个与给定值对应类型的对象。

//Function
//new Function ([arg1[, arg2[, ...argN]],] functionBody)
//使用Function构造器生成的Function对象是在函数创建时被解析的。这比你使用函数声明(function)并在你的代码中调用低效，因为使用函数语句声明的function是跟其他语句一起解析的。


//Boolean
//Boolean对象是一个包装了布尔值的对象.
//new Boolean(value)
//如果Boolean构造函数的参数不是一个布尔值,则该参数会被转换成一个布尔值.如果参数是 0, -0, null, false, NaN, undefined, 或者空字符串 (""),生成的Boolean对象的值为false. 其他任何值,包括任何对象或者字符串"false", 都会创建一个值为true的Boolean对象.


//任何值为 undefined 或者 null的对象, 包括值为false的Boolean对象, 在条件语句中,其值都将作为true来判断.例如,下面的条件语句中,if就将对象x看作是true:


var x = new Boolean(false);

//console.log(x.toString())
var a = x.toString();
if(a){
	console.log('new Boolean(false).toString()的类型：'+typeof a)
}



console.log('----------------error ----------------------');
/**************js 里面的错误类型 ****************/
//Error

//概述
//创建一个error对象。
//new Error([message[, fileName[,lineNumber]]])

//当代码运行时的发生错误，会创建新的Error对象，并将其抛出。

//除了通用的Error构造函数外，JavaScript还有6个其他类型的错误构造函数。用于处理客户端的各种异常，如: Exception Handling Statements。

/**

EvalError
创建一个error实例，表示错误的原因：与eval()有关。
RangeError
创建一个error实例，表示错误的原因：数值变量或参数超出其有效的范围
ReferenceError
创建一个error实例，表示错误的原因：无效引用
//demo console.log(a);
SyntaxError
创建一个error实例，表示错误的原因：语法错误
//demo console.log(1.a); console.log(eval('));
TypeError
创建一个error实例，表示错误的原因：变量或参数不属于有效类型。
//var a='str'; a.sort();
URIError
创建一个error实例，表示错误的原因：给 encodeURI() 或 decodeURI() 传递的参数无效

*/

//自定义Error的类型
//利用Error对象，可以在自己的项目中扩展一个新的Error类型。

function myError(message){

	this.name = 'myError';
	this.message=message || "Default Message";


}

myError.prototype = new Error();

myError.prototype.constractor = myError;

try{

	throw new myError('test message');
}
catch(e){

	console.log(e.name);
	console.log(e.message);
}

//抛出一个通用 error
try{

	throw new Error('Whoops');

}catch(e){

	console.log(e.name+": "+e.message);//Error: Whoops

}

//处理一个特定 error

try{

	foo.bar()

}catch(e){

	if(e instanceof EvalError){

		console.log(e.name+": "+e.message);
	}else if(e instanceof RangeError){

		console.log(e.name+": "+e.message);
	}else if(e instanceof ReferenceError){

		console.log('ReferenceError')
	}
}



//全局作用域下的内置对象

/********************常量属性**************************/
//表示一个简单的值的全局属性。

//Infinity	
console.log(Infinity);//Infinity
console.log(1/0);//Infinity

//NaN
console.log(NaN);
console.log(0/0);
console.log(Math.sqrt(-1));
console.log([111]/0);

//undefined

var x ={}
console.log(x.foo)//undefined
var noReturn = function(){}

console.log(noReturn());//undefined

//null

//值 null 是一个 JavaScript 字面量，表示空值（null or an "empty" value），即没有对象被呈现（no object value is present）。它是 JavaScript 原始值 之一。
//null 是一个字面量（而不是全局对象的一个属性，undefined 是）。在 APIs 中，null 常被放在期望一个对象，但是不引用任何对象的参数位置。当检测 null 或 undefined 时，注意相等（==）与全等（===）两个操作符的区别 （前者会执行类型转换）。

//null 与 undefined 的不同点：
console.log('----')
console.log(typeof null);//object
console.log(typeof undefined)//undefined
console.log(null === undefined)//false
console.log(null == undefined)//true






/********************方法属性**************************/

//encodeURI
console.log(encodeURI('http://www.baidu.com/ssdf sdf'));
//decodeURI
console.log(decodeURI('http://www.baidu.com/ssdf%20sdf'));

//encodeURIComponent
console.log(encodeURIComponent('http://www.baidu.com/ssdf sdf'));

//decodeURIComponent
console.log(decodeURIComponent('http%3A%2F%2Fwww.baidu.com%2Fssdf%20sdf'));

//eval

console.log(eval('1+1'))//2

console.log(eval(new String('2+2')));
//String {0: "2", 1: "+", 2: "2", length: 3, [[PrimitiveValue]]: "2+2"}

console.log(eval(new String('2+2').toString()));//4


var x = 2;
var y = 4;

console.log(eval('x+y'));//6

//isFinite
//该全局 isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。
//isFinite(testValue)
//testValue 用于检测有限性（finiteness）的值

console.log(isFinite(Infinity))//false

console.log(isFinite(NaN))//false

console.log(isFinite(-Infinity))//false

console.log(isFinite(0))//true
console.log(isFinite(2e26))//true
console.log(isFinite("0"))//true


//isNaN()
//isNaN(testValue)
//与 JavaScript 中其他的值不同，不能依赖相等操作符（== 和 ===）来判断一个值是否为 NaN，因为 NaN == NaN 和 NaN === NaN 都为 false。 于是，isNaN 就有必要了。

//当进行算术运算时，如果结果为 undefined 或无法表示的（unrepresentable）值，就会产生 NaN。这些值不一定表示超出了限制。NaN 也可能产生于强制将非数值转换数值时。
console.log('-------------------isNaN()---------------------');
var a = parseInt([]);
console.log(isNaN(a))//true
console.log(isNaN(undefined))//true
console.log(isNaN({}))//true
console.log(isNaN('sdjf'))//true;"blabla" is converted to a number. 
console.log(isNaN(new Date().toString()))//true


console.log(isNaN([]))//false
console.log(isNaN(true))//false
console.log(isNaN(false))//false
console.log(isNaN(null))//false
console.log(isNaN(37))//false
console.log(isNaN(new Date()))//false
console.log(isNaN(" "))//false
console.log(isNaN(""))//false
console.log(isNaN("123"))//false


console.log('-------------------parseFloat()---------------------');
//都返回3.14
console.log(parseFloat("3.14"));
console.log(parseFloat("314e-2"));
console.log(parseFloat("0.0314E+2"));
console.log(parseFloat("3.14more non-digit characters"));


console.log(parseFloat("FF2"));//NaN



console.log('-------------------parseInt()---------------------');

//parseInt(string, radix);
//The parseInt 函数将第一个参数（字符串）解析并试图返回一个整数特定基数的整数。例如：基数10 将会转换成十进制数，8 对应八进制，16 对应十六进制，等等。基数大于 10 时，用字母表中的字母来表示大于 9 的数字。例如十六进制中，使用 A 到 F。


/*******************************************RegExp**************************************************/

//exec
//exec() 方法为指定的一段字符串执行搜索匹配操作。它的返回值是一个数组或者 null。
//如果你仅仅是为了知道是否匹配，可以使用 RegExp.test() 方法，或者 String.search() 方法。


//regexObj.exec(str)
/*

返回值

如果成功匹配，exec 方法返回一个数组，并且更新正则表达式对象的属性。返回的数组包括匹配的字符串作为第一个元素，紧接着一个元素对应一个成功匹配被捕获的字符串的捕获括号（capturing parenthesis）。（one item for each capturing parenthesis that matched containing the text that was captured.）

如果匹配失败，exec 方法将返回 null。


*/

var re = /d(b+)(d)/ig;
var result = re.exec("cdbBdbbsdbbdz");//["dbBd", "bB", "d", index: 1, input: "cdbBdbbsdbbdz"]

console.log(result);



var myRe = /ab*/g;

var str = 'abbcdefabha';

var myArray;

while((myArray = myRe.exec(str)) !== null){

	var msg = "Found: "+ myArray[0]+". ";
	msg +="Next match starts at: "+myRe.lastIndex;

	//myRe.lastIndex = 10;//会死循环
	console.log(msg);

}


var matches = /(hello \S+)/.exec('This is a hello world');

console.log(matches);//["hello world", "hello world", index: 10, input: "This is a hello world"]
//因为他会先全局匹配，然后再去匹配子项，所以会出现两个



/*************************************Function*************************************************/


// The following result in equivalent behavior, but the first
// should be used unless the body changes at run time.
var x = function(x, y) { return x + y; };

var y = Function('x', 'y','return x + y;');
var z = Function('x, y', 'return x + y;');


var w = new Function('x', 'y', 'return x + y;');



console.log(x(1,2));//3
console.log(y(1,2));//3
console.log(z(1,2));//3
console.log(w(1,2));//3


console.log(x.length);//length 指的是参数的长度 2。


//apply

//apply() 方法可以在使用一个指定的 this 值和一个参数数组（或类数组对象）的前提下调用某个函数或方法。
//注:该方法的作用和 call() 方法类似，只有一个区别就是，call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组（或类数组对象）。

//fun.apply(thisArg[, argsArray])
//thisArg 在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。

//argsArray 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。
//根据 ES5 规范，argsArray 参数可以是一个数组或者任意类数组对象


/*
在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

apply 与 call() 非常相似，不同在于所提供的参数类型。apply 使用参数数组而不是一组参数列表（原文：a named set of parameters）。使用 apply, 可以使用数组字面量（array literal）形式，例如，fun.apply(this, ['eat', 'bananas']),，或者数组对象形式， 例如， fun.apply(this, new Array('eat', 'bananas'))。

你也可以使用 arguments  对象作为 argsArray 参数。 arguments 是一个函数的局部变量。 It can be used for all unspecified arguments of the called object. Thus, you do not have to know the arguments of the called object when you use the apply method. You can use arguments to pass all the arguments to the called object. The called object is then responsible for handling the arguments.

从 ECMAScript 第5版开始，可以使用任何种类的类数组对象，就是说只要有一个 length 属性和[0...length) 范围的整数属性。例如现在可以使用 NodeList 或一个自己定义的类似 {'length': 2, '0': 'eat', '1': 'bananas'} 形式的对象。
*/

/*
var whatsThis = function() { console.log(this); }
whatsThis.apply('hello');//String {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", length: 5, [[PrimitiveValue]]: "hello"}


var numbers = [3, 20, 1, 45];
console.log(Math.max.apply(undefined, numbers));//45
console.log(Math.max.apply(null, numbers));//45
*/


Function.prototype.construct = function (aArgs) {

	console.log(this);
    var fConstructor = this, 
    	fNewConstr = function () { fConstructor.apply(this, aArgs); };

    	fNewConstr.prototype = fConstructor.prototype;
    	
    	return new fNewConstr();
};

function MyConstructor () {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

alert(myInstance.property1); // alerts "Hello world!"
alert(myInstance instanceof MyConstructor); // alerts "true"
alert(myInstance.constructor); // alerts "MyConstructor"



var nums = [5,6,2,3,7];

var max = Math.max.apply(null,nums);
var min = Math.min.apply(null,nums);

console.log(max);
console.log(min);



//bind方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入bind方法的第一个参数作为this,传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.


var Button = function(content){

	this.content = content;
}

Button.prototype.click = function(){

	console.log(this.content + ' clicked!');
}

var myBtn = new Button('ok');

myBtn.click();

var lookBtn = myBtn.click;

lookBtn();

var bindClick = myBtn.click.bind(myBtn);

bindClick();


var sum = function(a,b){

	return a+b;
}

var add5 = sum.bind(null,5);

console.log(add5(10));




var x = 9;
var module = {

	x:81,
	getX:function (){

		return this.x;
	}
}	

console.log(module.getX());//81

var globalX = module.getX;

console.log(globalX());//9


var bindX = module.getX.bind(module);

console.log(bindX())//81


console.log('-----------------------------------------------------------');


function list(){

	return Array.prototype.slice.call(arguments);
}

var list = list(1,2,3);

//console.log(list);

var whatsThis = function() { console.log(this); }
whatsThis.call('hello');

console.log(Math.max.call(undefined,3,20,1,45));
