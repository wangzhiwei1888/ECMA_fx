
/* string 操作笔记 */
/**************** default ***************/

var str = "sdfsdf";	

console.log(typeof str);

var str1 = new String("sdfjsdfl");

console.log(typeof str1);


console.log(str1.valueOf());



var d = " 123123";

console.log(parseInt(d));//123123


/**************** charAt ***************/
var str = 'abcdef';

//alert(str.charAt(0));

//首字母大写
//charAt方法返回指定索引位置处的字符。如果超出有效范围的索引值返回空字符串。
var a = str.charAt(0).toUpperCase();

var str1 = str.replace(str.charAt(0),a);

alert(str1);


//var b = str.charAt(-2);


//alert(b);

//charCodeAt方法返回一个整数，代表指定位置字符的Unicode编码。
var str2 = str.charCodeAt(5);

alert(str2);

//fromCharCode方法从一些Unicode字符串中返回一个字符串
alert(String.fromCharCode(102));


/**************** concat ***************/

var str = 'aaa',str1='bbb',str2='ccc',str3='ddd';

var str4 = str.concat(str1,str2,str3);
console.log(str4);


/**************** indexOf ***************/

//indexOf方法放回String对象内第一次出现子字符串位置。如果没有找到子字符串，则返回-1。
var str = "sdlfjsldjfldsjf";

var index = str.indexOf('l');

console.log(index);//2

var url = window.navigator.userAgent;

console.log(url.indexOf('Chrome'));

//由90位置从左向右查找 
console.log(url.indexOf('Chrome',90));



/**************** lastIndexOf ***************/

//lastIndexOf方法返回String对象中字符串最后出现的位置。如果没有匹配到子字符串，则返回-1。 
var str = "sdlfjsldjfldsjf";
var index = str.lastIndexOf('l');
console.log(index);//10
var url = window.navigator.userAgent;
console.log(url.lastIndexOf('Chrome'));

/**************** match ***************/


var str = "cat,bat,mat,kat,oat";


//match方法返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null。返回数组还有index属性和input属性，分别表示匹配字符串开始的位置（从0开始）和原始字符串。

var arr = str.match("ca");
var arr1 = str.match("atr");
var arr2 = str.match("at");

console.log(arr);//["ca", index: 0, input: "cat,bat,mat,kat,oat"]
console.log(arr.index); //0

console.log(arr1);//null

console.log(arr2.index);//1

/*******************************************************************/

//如果是全局匹配，生成的数组不附带index input
var arr3 = str.match(/at/g);

console.log(arr3);// ["at", "at", "at", "at", "at"]


//匹配数字
var str2 = "sdjf12fsdf1dskfj12312Kkk888";

var arr4 = str2.match(/\d+/g);	

console.log(arr4);	//["12", "1", "12312", "888"]

/*******************************************************************/

//[abc,a,b,c](当match不加g的时候才可以获取到子项的集合)
var str = 'abc';
var re = /(A)(b)(c)/i;
console.log( str.match(re) );  //["abc", "a", "b", "c", index: 0, input: "abc"]



/**************** replace ***************/


var str = "abaaadkjafkaad";

/* 把a换成- */

var reg = /a/g;
var str1 = str.replace(reg,'-');
console.log(str1);	//-b---dkj-fk--d

/************************/


var reg = /a+/g;
var str1 = str.replace(reg,'-');
console.log(str1);	//-b-dkj-fk-d

/************************/


var str2 = '中国人民英雄纪念馆';

var reg=/中国|纪念/g;
var str3 = str2.replace(reg,function($0){

	var str = $0;
	console.log(str);//中国 //纪念
	var result = "";

	for(var i=0,len=str.length;i<len;i++){

		result +="*";
	}

	return result;
})

console.log(str3);//**人民英雄**馆


/************************/


var str4 = "2014-03-16";

var reg1 = /(\d+)(-)/g;

var str5 = str4.replace(reg1,function($0,$1,$2){


	//console.log($0)
	//console.log($1)
	//console.log($2)
	//console.log('----------');

	return $1+'.';

})

console.log(str5);//2014.03.16


var str6= str4.replace(/-/g,'.');
console.log(str6);//2014.03.16


/************************/


//html标签过滤

var str7 = "<h3>sldkjf</h3><span class='ko'>iii</span>";

var reg2 = /<[^>]+>/g;

var str8 = str7.replace(reg2,"");

console.log(str8);//sldkjfiii


/************************/


console.log('-------------');
//查找重复项最多的字符和此字符的个数

var str8 = "sdlkjflskjdfljsdfjsldkfjffffffffsdfsdlskjdflsjdfl";

var arr8 = str8.split("");

var str8_ = arr8.sort().join('');
console.log(str8_);

var reg8 = /(.)\1+/g;

var len = 0;
var value = '';
str8_.replace(reg8,function($0,$1){

	//console.log($0);
	//console.log($1);

	if(len<$0.length){

		len = $0.length;
		value = $1;
	}

})

console.log(value + '-----' + len);


/************************/

//字符串去重

var str9 = "aaaaabbbbbccccdddeeef";

var reg9 = /(.)\1+/g;

var str9_ = str9.replace(reg9,function($0,$1){
	
	return $1;

})

var str9_1 = str9.replace(reg9,"$1");

console.log(str9_);

console.log(str9_1);



/**************** search ***************/

//search方法返回与正则表达式查找内容匹配的第一个字符串的位置。

var str="sjflsjdflsdjffffflslkdfsssewer";

var reg = /ffff/i;

var index1 = str.search(reg);

console.log(index1);//12


var reg1 = /ffffk/i;

var index2 = str.search(reg1);

console.log(index2);//-1



var index3 = str.search("f");

console.log(index3);//2

//因为是匹配第一个字符串的位置。所以正则不用全局匹配。

/**************** slice ***************/

//slice方法返回字符串的片段
var str = "sdfjklsdjflksdf";
var str1 = str.slice(1,str.length);

console.log(str1);


var str2 = str.slice(-5);
var str3 = str.slice(-1);

console.log(str2);
console.log(str3);


//包含5对应的字符。
var str4 = str.slice(1,5);
console.log(str4);


var str5 = str.slice(3,-4);
console.log(str5);//结果为：jklsdjfl


/**************** split ***************/


//strObj.split([separator[,limit]]) 

//将一个字符串分割为子字符串，然后将结果作为字符串数组返回。

//separator字符串或 正则表达式 对象，它标识了分隔字符串时使用的是一个还是多个字符。如果忽略该选项，返回包含整个字符串的单一元素数组。limit该值用来限制返回数组中的元素个数。

var str = "sdfjksldjflsdjfljl";

var arr = str.split('');
var arr1 = str.split('',3);

console.log(arr);
console.log(arr1);


/**************** subStr ***************/

//substr方法返回一个从指定位置开始的指定长度的子字符串
var str = "sdfjklsdjflksdf";

var str1 = str.substr(1,str.length);

console.log(str1);

//索引不处理负数，如为负数返回空字符串。
var str2 = str.substr(-5);
var str3 = str.substr(-1);

console.log(str2);
console.log(str3);

//包含5对应的字符。
var str4 = str.substr(1,5);
console.log(str4);

//第二个参数不能为负数
var str5 = str.substr(3,-1);
console.log(str5);

/**************** substring ***************/

//substring方法返回位于String对象中指定位置的子字符串
var str = "sdfjklsdjflksdf";

var str1 = str.substring(1,str.length);

console.log(str1);

//索引不处理负数，如为负数返回空字符串。
var str2 = str.substring(-5);
var str3 = str.substring(-1);

console.log(str2);
console.log(str3);

//不包含5对应的字符。
var str4 = str.substring(1,5);
console.log(str4);

//第二个参数可以为负数
var str5 = str.substring(3,-4);
console.log(str5);//sdf


/**************** toLowerCase ***************/


var str = "sdlkjsldABCfjDDlsdFFjflkds";

//toLowerCase方法返回一个字符串，该字符串中的字母被转换成小写。
var str1 = str.toLowerCase();

//toUpperCase方法返回一个字符串，该字符串中的所有字母都被转换为大写字母。 
var str2 = str.toUpperCase();

console.log(str1);
console.log(str2);

/**************** trim ***************/

//ECMAScript 5内置trim字符串空格过滤方法

var str = '              sdf          '.trim();

console.log(str);

/**************** regTest ***************/

//正则字符串处理常用方法：
//test ：判断真假
var str = '121212wa';

var reg = /\D/;

if(reg.test(str)){

	console.log("不全是数字");
}
else{
	console.log("全是数字");
}

//任意字符
var reg1 = /[abc]/;
console.log(reg1.test(str));

//范围
var reg2 = /[a-z]/;
console.log(reg2.test(str));

//排除
var reg3 = /[^a]/g;

var str2 = str.replace(reg3,'_');
console.log(str2);

//以a开头的字符
var reg3_ = /^a/;
//test 的时候只匹配str的第一个字符。加不加全局匹配都一样
var str3 = 'a';

console.log('-----------------');
console.log(reg3_.test(str3));//true


var str4 = 'sdfa';
console.log(reg3_.test(str4));//false

//判断字符串是否一a字符结尾
var reg4 = /[^a]$/;
console.log(reg4.test(str3));//false
console.log(reg4.test(str4));//false


//判断字符串里面有没有字符 a
var reg5 = /a/;
console.log(reg5.test(str4));//true


//\1 : 重复的第一个子项
//\2 : 重复的第二个子项

var str5 = "abca";

var reg6 = /(a)(b)(c)\1/;

console.log(reg6.test(str5));//true
console.log(str5.match(reg6));//["abca", "a", "b", "c", index: 0, input: "abca"]

//应该是父项匹配成功后才会去匹配子项。
var reg7 = /(a)(b)(c)\2/;
console.log(reg7.test(str5));//false
console.log(str5.match(reg7));//null

var str6 = "uopiabcb";
var reg8 = /(a)(b)(c)\2/;

console.log(reg8.test(str6));//true
console.log(str6.match(reg8));//["abcb", "a", "b", "c", index: 4, input: "abcaabcb"]


var reg9 = /a{6}/
var str9 = 'weraaaaaaii';
console.log(reg9.test(str9));//true


var reg10 = /ab?/g

var str10 = "auioabcajkljab";

console.log(reg10.test(str10));//true
console.log(str10.match(reg10));//["a", "ab", "a", "ab"]


//ecma5 标准：http://image.tianji.com/tjs/all/ecma5.html

