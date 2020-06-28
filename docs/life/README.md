# Life

## H5+css3
### html5和html的区别
1. html5新增了语义化标签：footer 、nav、section…
2. html5完全支持css3
3. 支持本地离线存储
4. 新增了canvas标签
5. 新增视频和音频标签
HTML5离线存储

localStorage 长期存储数据，浏览器关闭后数据不丢失；
sessionStorage 数据在浏览器关闭后自动删除。

### 对语义化标签的理解
1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构

2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

4. 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

### 浏览器的内核
IE浏览器的内核Trident、Mozilla的Gecko、Chrome的Blink（WebKit的分支）、Opera内核原为Presto，现为Blink；

浏览器内核的理解

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS引擎则：解析和执行javascript来实现网页的动态效果。

### 前端页面有哪三层构成，分别是什么？作用是什么
1. 结构层：由 HTML 或 XHTML 之类的标记语言负责创建，仅负责语义的表达。解决了页面“内容是什么”的问题。

2. 表示层：由CSS负责创建，解决了页面“如何显示内容”的问题。

3. 行为层：由脚本负责。解决了页面上“内容应该如何对事件作出反应”的问题。

### Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

声明位于文档中的最前面，处于 标签之前。告知浏览器以何种模式来渲染文档。
严格模式的排版和 JS 运作模式是，以该浏览器支持的最高标准运行。

在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

### 你知道多少种Doctype文档类型
标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。

### HTML与XHTML——二者有什么区别
1. XHTML 元素必须被正确地嵌套。

2. XHTML 元素必须被关闭。

3. 标签名必须用小写字母。

4. XHTML 文档必须拥有根元素。

### 输入完网址按下回车，到看到网页这个过程中发生了什么
1. 域名解析

2. 发起TCP的3次握手

3. 建立TCP连接后发起http请求

4. 服务器端响应http请求，浏览器得到html代码

5. 浏览器解析html代码，并请求html代码中的资源

6. 浏览器对页面进行渲染呈现给用户
### 网站重构的理解
重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。
1. 使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)

2. 对于移动平台的优化，针对于SEO进行优化

3. 减少代码间的耦合，让代码保持弹性

4. 压缩或合并JS、CSS、image等前端资源

### 优化大图（多图）显示，提高用户体验
1. 图片懒加载，滚动到相应位置才加载图片。

2. 图片预加载，如果为幻灯片、相册等，将当前展示图片的前一张和后一张优先下载。

3. 使用CSSsprite，SVGsprite，Iconfont、Base64等技术，如果图片为css图片的话。

4. 如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。

### iframe的优缺点

优点：

1. 解决加载缓慢的第三方内容如图标和广告等的加载问题

2. iframe无刷新文件上传

3. iframe跨域通信

缺点：

1. iframe会阻塞主页面的Onload事件

2. 无法被一些搜索引擎索引到

3. 页面会增加服务器的http请求

4. 会产生很多页面，不容易管理。
### 请阐述table的缺点
1. 太深的嵌套，比如table>tr>td>h3，会导致搜索引擎读取困难，而且，最直接的损失就是大大增加了冗余代码量。

2. 灵活性差，比如要将tr设置border等属性，是不行的，得通过td

3. 代码臃肿，当在table中套用table的时候，阅读代码会显得异常混乱

4. 混乱的colspan与rowspan，用来布局时，频繁使用他们会造成整个文档顺序混乱。

5. table需要多次计算才能确定好其在渲染树中节点的属性，通常要花3倍于同等元素的时间。

6. 不够语义

### 行内元素和块级元素有哪些
行内元素：a b br i span input select strong

块级元素：div p h1—h6 from ul ol li

### 行内元素和块级元素的区别

行内元素：会在水平方向排列，不能包含块级元素，设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效。

块级元素：各占据一行，垂直方向排列。从新行开始结束接着一个断行。

### 清除浮动的方式
（1）父级div定义height。

（2）结尾处加空div标签clear:both。

（3）父级div定义伪类:after和zoom。

（4）父级div定义overflow:hidden。

（5）父级div定义overflow:auto。

（6）父级div也浮动，需要定义宽度。

（7）父级div定义display:table。

（8）结尾处加br标签clear:both。
### 引入css样式的方式
1. 行内式：直接在style属性中设定css样式

2. 嵌入式：写在标签里

3. 导入式：

4. 链接式：
### link和@import有什么区别
（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;

（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题。
### css的三大特性
1. 继承性

css中可继承的样式：

Font-size font-family color text-indent

不可继承的样式：

border padding margin width height ;

2. 成叠性

3. 优先级

  *   优先级就近原则，同权重情况下样式定义最近者为准;
  *   载入样式以最后载入的定位为准;

  优先级为:
  	同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
  	!important >  id > class > tag
  	important 比 内联优先级高


### css的选择符
1. 标签选择器

2. ID选择器

3. 类选择器

4. 相邻选择器

5. 子选择器

6. 后代选择器

7. 通配符选择器

8. 属性选择器

9. 伪类选择器

### 标签上title与alt属性的区别
title：为该属性提供信息

alt：当图片不显示时，用文字代替
### src 与 href 的区别
src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系。

src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。
### 让文字在垂直和水平方向上重叠的两个属性
垂直方向：line-height

水平方向：letter-spacing

关于 letter-spacing 的妙用知道有哪些么？

答案:可以用于消除 inline-block 元素间的换行符空格间隙问题。
### display:none 与 visibility:hidden 的区别
display : 隐藏对应的元素但不挤占该元素原来的空间。

visibility: 隐藏对应的元素并且挤占该元素原来的空间。
### CSS的盒子模型？低版本IE的盒子模型有什么不同
  （1）有两种， IE 盒子模型、W3C 盒子模型；
  （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
  （3）区  别： IE的content部分把 border 和 padding计算了进去;
### BFC 是什么?（Block Formatting Context）
BFC（块级格式化上下文），一个创建了新的 BFC 的盒子是独立布局的，盒子内元素的布局不会影响盒子外面的元素。

在同一个 BFC 中的两个相邻的盒子在垂直方向发生 margin 重叠的问题

BFC 是指浏览器中创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外元素的布局，这个渲染区域只对块级元素起作用
### CSS3新特性
CSS3实现圆角（border-radius），阴影（box-shadow），

对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）

transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜

增加了更多的CSS选择器 多背景 rgba

在CSS3中唯一引入的伪元素是 ::selection.

媒体查询，多栏布局

border-image
### display的值
block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。

none 缺省值。象行内元素类型一样显示。

inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。

inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。

list-item 象块类型元素一样显示，并添加样式列表标记。

table 此元素会作为块级表格来显示。

inherit 规定应该从父元素继承display 属性的值。
### position 的值
absolute：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

fixed： （老 IE 不支持） 生成绝对定位的元素，相对于浏览器窗口进行定位。

relative ：生成相对定位的元素，相对于其正常位置进行定位。

static ：默认值。没有定位，元素出现在正常的流中

* （忽略 top, bottom, left, right z-index 声明）。

* inherit 规定从父元素继承 position 属性的值。
### 浏览器标准模式和怪异模式
1）在严格模式中 ：width是内容宽度 ，元素真正的宽度 = margin-left + border-left-width + padding-left + width + padding-right + border-right- width + margin-right;

在怪癖模式中 ：width则是元素的实际宽度 ，内容宽度 = width - ( padding-left + padding-right + border-left-width + border-right-width)

2）可以设置行内元素的高宽

在Standards模式下，给span等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。

3）可设置百分比的高度

在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度是无效的。

4）用margin:0 auto设置水平居中在IE下会失效

使用margin:0 auto在standards模式下可以使元素水平居中，但在quirks模式下却会失效,quirk模式下的解决办法，用text-align属性:

body{text-align:center};#content{text-align:left}

5）quirk模式下设置图片的padding会失效

6）quirk模式下Table中的字体属性不能继承上层的设置

7）quirk模式下white-space:pre会失效

8）盒模型解释不同
### 一次 js 请求一般情况下有哪些地方会有缓存处理
dns 缓存，cdn 缓存，浏览器缓存，服务器缓存。
### 为什么利用多个域名来存储网站资源会更有效
CDN 缓存更方便 突破浏览器并发限制

节约 cookie 带宽

节约主域名的连接数，优化页面响应速度

防止不必要的安全问题
### 伪类和伪元素
CSS伪类：用于向某些选择器添加特殊的效果。

CSS伪元素：用于将特殊的效果添加到某些选择器。

伪类
| 代码   | 说明   |
|--------|--------|
| :hover | 将样式添加到鼠标悬浮的元素 |
| :active | 将样式添加到被激活的元素 |
|:focus |将样式添加到获得焦点的元素|
|:link|将样式添加到未被访问过的链接|


伪元素
| 代码   | 说明   |
|--------|--------|
| p:first-of-type | 选择属于其父元素的首个元素的每个元素 |
| p:last-of-type | 选择属于其父元素的最后元素的每个元素 |
|p:only-of-type |选择属于其父元素唯一的元素的每个元素。|
|p:only-child|选择属于其父元素唯一的子元素的每个元素。|

### html5布局的方式
1.浮动

2.定位

3.分栏布局

4.弹性布局

5.响应式布局
### 弹性布局的优点
1 适应性强，在做不同屏幕分辨率的界面时非常实用

2 可以随意按照宽度、比例划分元素的宽高

3 可以轻松改变元素的显示顺序

4 弹性布局实现快捷，易维护
### content-box和border-box，为什么看起来content-box更合理，但还是经常使用border-box
content-box是W3C的标准盒模型 元素宽度+padding+border

border-box 是ie的怪异盒模型，他的元素宽度等于内容宽度 内容宽度包含了padding和border

比如有时候在元素基础上添加内边距padding或border会将布局撑破 但是使用border-box就可以轻松完成
### 实现三个DIV等分排在一行（考察border-box)
1.设置border-box width 33.33%

2.flexbox flex:1
### 怎么实现一个DIV左上角到右下角的移动
改变left值为window宽度-div宽度 top值为window高度=div高度

jquery的animate方法

css3的transition

### rem 和 em的区别
em相对于父元素，rem相对于根元素

### 渐进增强和优雅降级
渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
### HTTP和HTTPS
HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。

默认HTTP的端口号为80，HTTPS的端口号为443。

### 为什么HTTPS安全

因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，
密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，
流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性

### 性能优化问题
代码层面：避免使用css表达式，避免使用高级选择器，通配选择器。

缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等

请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。

请求带宽：压缩文件，开启GZIP，
### 减少页面加载时间
1. 优化图片
2. 图像格式的选择
3. 优化CSS
4. 网址后加斜杠
5. 标明高度和宽度
6. 减少http请求（合并文件，合并图片）。

### 什么是FOUC？你如何来避免FOUC
由于css引入使用了@import 或者存在多个style标签以及css文件在页面底部引入使得css文件加载在html之后导致页面闪烁、花屏

用link加载css文件，放在head标签里面

### 代码层面的优化

用hash-table来优化查找

少用全局变量

用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能

用setTimeout来避免页面失去响应

缓存DOM节点查找的结果

避免使用CSS Expression

避免全局查询

避免使用with(with会创建自己的作用域，会增加作用域链长度)

多个变量声明合并

避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率

尽量避免写在HTML标签中写Style属性

### 移动端性能优化

尽量使用css3动画，开启硬件加速。

适当使用touch事件代替click事件。

避免使用css3渐变阴影效果。

可以用transform: translateZ(0)来开启硬件加速。

不滥用Float。Float在渲染时计算量比较大，尽量减少使用

不滥用Web字体。Web字体需要下载，解析，重绘当前页面，尽量减少使用。

合理使用requestAnimationFrame动画代替setTimeout

CSS中的属性（CSS3 transitions、CSS3 3D transforms、Opacity、Canvas、WebGL、Video）会触发GPU渲染，请合理使用。过渡使用会引发手机过耗电增加

PC端的在移动端同样适用




## js

### 介绍js有哪些常用内置对象
1. String(字符串),
2. Number,
3. Boolean（布尔对象）,
4. Function(函数对象),
5. Array(数组),
6. Math,
7. Object,
8. RegExp（正则表达式对象）,
9. Date(日期对象)，
10. Error(异常对象)

### bom对象
1. window(核心)
2. document对象
3. location对象（当前页面地址）
4. navigation对象（浏览器本身相关信息）
5. screen对象（屏幕相关）
6. history对象（浏览器历史相关）

### JavaScrip的一些编写原则
1. 不要在同一行声明多个变量
2. 使用===或!==来比较
3. 使用字面量的方式来创建对象、数组，替代new Array这种形式
4. switch语句必须要带default分支
5. fon-in循环中的变量，用var关键字说明作用域，防止变量污染
6. 三元表达式可以替代if语句
7. 比较数据类型以下6中情况是false，其他都是true------false、""、0、null、undefined、NaN
8. 数据类型检测用typeof，对象类型检测用instanceof 9、异步加载第三方的内容 10、单行注释//，多行注释/**/

### dom对象与jQuery对象转换
dom转jQuery dom对象如下：
var $dom = $(dom);

jQuery对象转dom对象
var dom = $dom[0];
var dom = $dom.get(0);

### 正则相关[i不区分大小写，g匹配全部数据]
```
var str = "Hello word!  I think word is good.";
替换str中的word为‘javascript’
str = str.replace(/word/ig, “javascript”);
判断str中是否包含word
/word/ig.test(str)
获取str中的所有word
str.match(/weaver/ig)
```
### js选择器
```
选择select的值【假定select的id为slt】
$("#weaver option:selected").val()获取value $("#weaver
option:selected").text()//获取文本值

选择id为test的元素的文本内容
$("#test").val(); // jQuery("#test").val();
docunment.getElementById("test)
```

### jq的$(function(){})与window.onload的区别
```
$(function(){})不会被覆盖，而window.onload会被覆盖（页面资源全部加载完毕后执行）
$(function(){})在window.onload执行前执行的
```
### DOM文档加载步骤

1. 解析HTML结构
2. 加载外部的脚本和样式文件
3. 解析并执行脚本代码
4. 构造HTML DOM模型//执行ready
5. 加载图片等二进制资源
6. 页面加载完毕，执行window.onload

### 作用域链
内部环境可以通过作用域链来访问外部环境的属性和方法，但是外部环境不能访问内部环境的任何属性和方法，只能通过定义函数来延长作用域链条


### 闭包
闭包就是能够读取其他函数内部变量的函数。由于在javascript语言中，只有函数内部的子函数才能读取局部变量，
因此可以把闭包简单的理解成“定义在一个函数内部的函数”。他的最大用处有两个，可以读取函数内部变量；让这些
变量的值始终保持在内存中

```
for (var j = 0; j < 2; j++) { 
		function f(){
			console.log(j)
		};
		f();
		setTimeout(()=>{
			console.log(j);
		}, j); 
	}

	0 1 2 2
```
```
	var weaver = "to cc百川？？？";
	var obj = {
		weaver:"to cc百川！！！",
		fnobj:function(){ 
			fnobj1 = () => {
				console.log(this.weaver);
				fnobj2();
			}
			fnobj1();
			function fnobj2() {
				console.log(this.weaver)
			}
		}
	} 
	obj.fnobj();
	//结果： 
	to cc百川！！！
	to cc百川？？？
```
上面的代码在不使用箭头函数的情况下，this的指向是window所以是"to cc百川？？？"，
### cookie 和session 的区别
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

考虑到安全应当使用session。

3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能

考虑到减轻服务器性能方面，应当使用COOKIE。

4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

### 给数组去重
```
var arrays = [1,2,3,2,4,6,5,7]
function unique (arrray) {
    var result=[]
    //请编程实现数组去重
    return result;
}	
//1.利用es6的set对象
result = [...new Set(array)];/[...new  Set (array)]
//2.利用对象属性的唯一性
let obj = {};
for (let i of array) {
    if (!obj[i]) {
        result.push(i);
        obj[i]=1;
    }
}
//3.利用sort方法排序去重
var newarray = array.sort();
result = [newarray[0]];
var length = newarray.length;
for( var i = 1 ;i<length; i++) {
    newarray[i] !== newarray[i-1] && result.push(newarray[i]);
}	
//4.利用for...of+includes()循环
for(var i of array) {
    !result.includes(i) && result.push(i);
}
//5.用filter结合indexOf
result = array;
return result.filter((item, index)=> {
    return result.indexOf(item) === index
})
//6.利用双层for循环（6分）类似
var length = array.length;
for(var i =0; i<length; i++) {
var only = true;
for(var j =i+1; j<length; j++){
    if(!only) continue;
    if(array[i] == array[j])  only = false; 
}
if(only) result.push(array[i]);
}

```
### 统计字符串中字母个数
```
var str = "I think javascript is good";
	//解：方法不唯一        
	str = str.toLowerCase();
    var result = {};
    for(var i in str) {
        if(str[i] in result) { 
            result[str[i]]++;
        } else { 
            result[str[i]] = 1;;
        }
    }
```
### js数据交互
原生数据交互，post方法【可能用到方法或对象XMLHttpRequest、ActiveXObject、onreadystatechange、setRequestHeader】
```
var xhr = null;
        try{
            xhr=new XMLHttpRequest();
        }catch(e){
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        } 
         xhr.open("post", url, true);
        //POST提交设置的协议头（GET方式省略）
        //这里需要通过服务器设置响应头解决跨域问题
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    console.log("success!!");
                }else{
                    console.log("error code "+xhr.status)
                }
            }
        }
	   	//发送请求，post设置请求参数，get方式直接调用方法无需参数
        xhr.send("username="+name+"&age="+age);
```

Ajax
```
$.ajax({
	type:'POST', // 规定请求的类型（GET 或 POST）
	url:uploadV, // 请求的url地址
	dataType:'json', //预期的服务器响应的数据类型 
	data:{},//规定要发送到服务器的数据
	beforeSend:function(){ //发送请求前运行的函数（发送之前就会进入这个函数）
	},
	success: function(result){ // 当请求成功时运行的函数
	},
	error:function(result){ //失败的函数
	},
	complete:function(){ //请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后，不管成功还是失败 都会进这个函数）
	}
});
```
fetch调用fetch函数，传入接口url，然后返回一个promise（response）
```
fetch('https://www.baidu.com')
  	.then(function(res) {
   		成功
  	},function(){
		失败
	});
```

### es6新特性

1. 块级作用域变量let，const
2. 新增基本数据类型Symbol
3. 结构赋值
4. 给形参设置默认值&箭头函数
5. 对象或者数组的展开符 …
6. String的include方法
7. Array新增API：isArray/from/of 和新增方法：entries()/kes()/values()等
8. 增加class语法糖
9. 新增模块化（import/export）
10. 新增Map，Set数据结构
11. 模板字符串
12. for…of 和 for…in

### react或vue常用生命周期方法
```
react：
		render()
		constructor()
		componentWillMount() 
		componentDidMount()
		shoudComponentUpdate()
		conponentWillReceiveProps()
		componentWillUpdate()
		componentDidUpdate ()
		componentWillUnmount ()
	vue（钩子函数）:
		beforeCreate()
		create()
		
		beforeMount()
		mountend()
		
		beforeUpdate()
		update()
		
		beforDestroy()
		destroy()
```

### 原型链
原型：所有的函数都有一个特殊的属性prototype(原型)，prototype属性是一个指针，指向的是一个对象（原型对象），
原型对象中的方法和属性都可以被函数的实例所共享。所谓的函数的实例是指一个函数作为构造函数创建的对象，这些
对象实例都可以共享构造函数的原型的方法

原型链：原型链是用于查找引用类型（对象）的属性，查找属性会沿着原型链依次进行，如果找到该属性会停止搜索并作
相应的操作，否则会沿着原型链依次查找结尾。常见应用是用在创建对象和继承上。

## 浏览器兼容性
（一）html部分
1.H5新标签在IE9以下的浏览器识别 
```
<!--[if lt IE 9]>
 <script type="text/javascript" src="js/html5shiv.js"></script>
<![endif]-->
```
 html5shiv.js下载地址
https://github.com/aFarkas/html5shiv/releases

2.ul标签内外边距问题ul标签在IE6\IE7中，有个默认的外边距，但是在IE8以上及其他浏览器中有个默认的内边距。
解决方法：统一设置ul的内外边距为0

（二）CSS样式的兼容性      

1.css的hack问题：主要针对IE的不同版本，不同的浏览器的写法不同       
 IE的条件注释hack：  
 ```     
 <!--[if IE 6]>此处内容只有IE6.0可见<![endif]-->          
 <!--[if IE 7]>此处内容只有IE7.0可见<![endif]-->
```
2.IE6双边距问题：IE6在浮动后，又有横向的margin，此时，该元素的外边距是其值的2倍       
 解决办法：display:block;

3.IE6下图片的下方有空隙      
 解决方法：给img设置display:block;

4.IE6下两个float之间会有个3px的bug       
 解决办法：给右边的元素也设置float:left;

5.IE6下没有min-width的概念，其默认的width就是min-width

6.IE6下在使用margin:0 auto;无法使其居中       
 解决办法：为其父容器设置text-align:center;

7.被点击过后的超链接不再具有hover和active属性       
 解决办法:按lvha的顺序书写css样式，
 ":link": a标签还未被访问的状态；
 ":visited": a标签已被访问过的状态；
 ":hover": 鼠标悬停在a标签上的状态；
 ":active": a标签被鼠标按着时的状态；

8.在使用绝对定位或者相对定位后，IE中设置z-index失效，原因是因为其元素依赖于父元素的z-index，但是父元素默认为0， 子高父低，所以不会改变显示的顺序

9.IE6下无法设置1px的行高，原因是由其默认行高引起的       
 解决办法：为期设置overflow:hidden;或者line-height:1px;

（三）JavaScript的兼容性

1.标准的事件绑定方法函数为addEventListener，但IE下是attachEvent；

2.事件的捕获方式不一致，标准浏览器是由外至内，而IE是由内到外，但是最后的结果是将IE的标准定为标准

3.window.event获取的。并且获取目标元素的方法也不同，标准浏览器是event.target，而IE下是event.srcElement

4.在低版本的IE中获取的日期处理函数的值不是与1900的差值，但是在高版本的IE中和标准浏览器保持了一致，获取的值也是与1900的差值。          
 比如：var year= new Date().getYear();

5.ajax的实现方式不同，这个我所理解的是获取XMLHttpRequest的不同，IE下是activeXObject

6.IE中不能操作tr的innerHtml7.获得DOM节点的父节点、子节点的方式不同
其他浏览器：parentNode  parentNode.childNodes       
IE：parentElement parentElement.children


## webpack

### webpack与grunt、gulp的不同
三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

所以总结一下：

从构建思路来说
gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工

对于知识背景来说
gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路

### 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack
同样是基于入口的打包工具还有以下几个主流的：

> webpack
> rollup
> parcel

从应用场景上来看：

webpack适用于大型复杂的前端站点构建
rollup适用于基础库的打包，如vue、react
parcel适用于简单的实验性项目，他可以满足低门槛的快速看到效果
由于parcel在打包过程中给出的调试信息十分有限，所以一旦打包出错难以调试，所以不建议复杂的项目使用parcel

### 有哪些常见的Loader？他们是解决什么问题的

1. file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
2. url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
3. source-map-loader：加载额外的 Source Map 文件，以方便断点调试
4. image-loader：加载并且压缩图片文件
5. babel-loader：把 ES6 转换成 ES5
6. css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
7. style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
8. eslint-loader：通过 ESLint 检查 JavaScript 代码

### 有哪些常见的Plugin？他们是解决什么问题的？
1. define-plugin：定义环境变量
2. commons-chunk-plugin：提取公共代码
3. uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码

### Loader和Plugin的不同
不同的作用

Loader直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件
也打包的话，就会用到loader。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。

Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命
周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
不同的用法

Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个Object，
里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）
Plugin在plugins中单独配置。 类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。
### 是否写过Loader和Plugin？描述一下编写loader或plugin的思路
Loader像一个"翻译官"把读到的源文件内容转义成新的文件内容，并且每个Loader通过链式操作，
将源文件一步步翻译成想要的样子。

编写Loader时要遵循单一原则，每个Loader只做一种"转义"工作。 每个Loader的拿到的是源文件内容（source），
可以通过返回值的方式将处理后的内容输出，也可以调用this.callback()方法，将内容返回给webpack。 
还可以通过 this.async()生成一个callback函数，再用这个callback将处理后的内容输出出去。
 此外webpack还为开发者准备了开发loader的工具函数集——loader-utils。

相对于Loader而言，Plugin的编写就灵活了许多。 webpack在运行的生命周期中会广播出许多事件，Plugin
 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。


### webpack的构建流程是什么
Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件；
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直
到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文
件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，
并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

### webpack的热更新是如何做到的？说明其原理？
webpack的热更新又称热替换（Hot Module Replacement），缩写为HMR。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
原理：
![webpack的热更新](/webpack_ms01.jpeg)


首先要知道server端和client端都做了处理工作

1. 第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，
根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。
2. 第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 
webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。
3. 第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。
当我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静
态文件的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。
4. 第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）
在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，
同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然
服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。
5. webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了
 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server
  的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。
6. HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 
JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的
模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。
而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。

### 如何利用webpack来优化前端性能？（提高性能和体验）
用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。

1. 压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩JS文件， 利用cssnano（css-loader?minimize）来压缩css
2. 利用CDN加速。在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用webpack对于output参数和各loader的publicPath参数来修改资源路径
3. 删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数--optimize-minimize来实现
4. 提取公共代码。

### 如何提高webpack的构建速度？
1. 多入口情况下，使用CommonsChunkPlugin来提取公共代码
2. 通过externals配置来提取常用库
3. 利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。
4. 使用Happypack 实现多线程加速编译
5. 使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。 原理上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度
6. 使用Tree-shaking和Scope Hoisting来剔除多余代码

### 怎么配置单页应用？怎么配置多页应用

单页应用可以理解为webpack的标准模式，直接在entry中指定单页应用的入口即可，这里不再赘述

多页应用的话，可以使用webpack的 AutoWebPlugin来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范。 多页应用中要注意的是：

每个页面都有公共的代码，可以将这些代码抽离出来，避免重复的加载。比如，每个页面都引用了同一套css样式表
随着业务的不断扩展，页面可能会不断的追加，所以一定要让入口的配置足够灵活，避免每次添加新页面还需要修改构建配置

### npm打包时需要注意哪些？如何利用webpack来更好的构建
Npm是目前最大的 JavaScript 模块仓库，里面有来自全世界开发者上传的可复用模块。你可能只是JS模块的使用者，但是有些情况你也会去选择上传自己开发的模块。 关于NPM模块上传的方法可以去官网上进行学习，这里只讲解如何利用webpack来构建。

NPM模块需要注意以下问题：

1. 要支持CommonJS模块化规范，所以要求打包后的最后结果也遵守该规则。
2. Npm模块使用者的环境是不确定的，很有可能并不支持ES6，所以打包的最后结果应该是采用ES5编写的。并且如果ES5是经过转换的，请最好连同SourceMap一同上传。
3. Npm包大小应该是尽量小（有些仓库会限制包大小）
4. 发布的模块不能将依赖的模块也一同打包，应该让用户选择性的去自行安装。这样可以避免模块应用者再次打包时出现底层模块被重复打包的情况。
5. UI组件类的模块应该将依赖的其它资源文件，例如.css文件也需要包含在发布的模块里。

基于以上需要注意的问题，我们可以对于webpack配置做以下扩展和优化：

1. CommonJS模块化规范的解决方案： 设置output.libraryTarget='commonjs2'使输出的代码符合CommonJS2 模块化规范，以供给其它模块导入使用
2. 输出ES5代码的解决方案：使用babel-loader把 ES6 代码转换成 ES5 的代码。再通过开启devtool: 'source-map'输出SourceMap以发布调试。
3. Npm包大小尽量小的解决方案：Babel 在把 ES6 代码转换成 ES5 代码时会注入一些辅助函数，最终导致每个输出的文件中都包含这段辅助函数的代码，造成了代码的冗余。解决方法是修改.babelrc文件，为其加入transform-runtime插件
4. 不能将依赖模块打包到NPM模块中的解决方案：使用externals配置项来告诉webpack哪些模块不需要打包。
5. 对于依赖的资源文件打包的解决方案：通过css-loader和extract-text-webpack-plugin来实现，配置如下：
![webpack的热更新](/webpack_ms02.jpeg)

### 如何在vue项目中实现按需加载

Vue UI组件库的按需加载 为了快速开发前端项目，经常会引入现成的UI组件库如ElementUI、iView等，但是他们的体积和他们所提供的功能一样，是很庞大的。 而通常情况下，我们仅仅需要少量的几个组件就足够了，但是我们却将庞大的组件库打包到我们的源码中，造成了不必要的开销。

不过很多组件库已经提供了现成的解决方案，如Element出品的babel-plugin-component和AntDesign出品的babel-plugin-import 安装以上插件后，在.babelrc配置中或babel-loader的参数中进行设置，即可实现组件按需加载了。
![webpack的热更新](/webpack_ms03.png)
单页应用的按需加载 现在很多前端项目都是通过单页应用的方式开发的，但是随着业务的不断扩展，会面临一个严峻的问题——首次加载的代码量会越来越多，影响用户的体验。

通过import(*)语句来控制加载时机，webpack内置了对于import(*)的解析，会将import(*)中引入的模块作为一个新的入口在生成一个chunk。 当代码执行到import(*)语句时，会去加载Chunk对应生成的文件。import()会返回一个Promise对象，所以为了让浏览器支持，需要事先注入Promise polyfill

## vue常见面试题汇总
### vue.js的两个核心是什么
答：数据驱动、组件系统
### 谈谈你对MVVM开发模式的理解
MVVM分为Model、View、ViewModel三者。
* Model：代表数据模型，数据和业务逻辑都在Model层中定义；
* View：代表UI视图，负责数据的展示；
* ViewModel：负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；

Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着
双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。

这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。
### Vue 有哪些指令？
```vue
    1.文本插值：{{}} Mustache
        <div id='app'>
            {{message}}
        </div>
    2.DOM属性绑定：v-bind
        <div id='app-2'>
            <span v-bind:title='message'>
                鼠标悬停几秒钟查看此处动态绑定的提示信息
            </span>
        </div>
    3.指令绑定一个事件监听器：v-on
        <div id='app-5'>
            <p>{{message}}</p>
            <button v-on:click='reverseMessage'>逆转消息</button>
        </div>
    4.实现表单输入和应用状态之间的双向绑定：v-model
        <div id='app-6'>
            <p>{{message}}</p>
            <input v-model='message'>
        </div>
    5.控制切换一个元素的显示：v-if和v-else
        <div id='app-3'>
            <p v-if='seen'>现在你看到我了</p>
        </div>
    6.列表渲染:v-for
        <div id='app-4'>
            <ol>
                <li v-for='todo in todos'>
                    {{todo.text}}
                </li>
            </ol>


```
### 列举Http请求中常见的请求方式
    get
        向特定的路径资源发出请求，数据暴露在url中
    post
        向指定路径资源提交数据进行处理请求，数据包含在请求体中
    options
        返回服务器针对特定资源所支持的http请求方法，允许客户端查看，测试服务器性能
    head
        向服务器与get请求相一致的响应，响应体不会返回，可以不必传输整个响应内容
    put
        从客户端向服务器端传送的数据取代指定的文档的内容
    delete
        请求服务器删除指定的页面
    trace
        回显服务器收到的请求，主要用于测试或者诊断
    connect
        http/1.1协议中预留给能够将连接改为管道方式的代理服务
### Vue的生命周期
1.什么是vue生命周期？

答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、
更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。

2.vue生命周期的作用是什么？

答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

3.vue生命周期总共有几个阶段？

答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。

4.第一次页面加载会触发哪几个钩子？

答：会触发 下面这几个beforeCreate, created, beforeMount, mounted 。

5.DOM 渲染在 哪个周期中就已经完成？

答：DOM 渲染在 mounted 中就已经完成了。

6.简述每个周期具体适合哪些场景

答：
beforeCreate：在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。
在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法

create：data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作

beforeMount：执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的

mounted：执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。
 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行

beforeUpdate： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步

updated：页面显示的数据和data中的数据已经保持同步了，都是最新的

beforeDestory：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。
还没有真正被销毁

destroyed： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。



### v-if 和 v-show 有什么区别？

v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而v-if会控制这个 DOM 节
点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；当只需要一次显示或隐藏时，使用v-if更加合理。
### 简述Vue的响应式原理

当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为getter/setter并且
在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的watcher程序实例，它会在组件
渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。
![vue响应原理](/vueyl.jpg)
### Vue中如何在组件内部实现一个双向数据绑定？

原理：采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty（）来劫持各个属性的setter
，getter，在数据变动时发布消息给订阅者，触发相应监听回调。

       假设有一个输入框组件，用户输入时，同步父组件页面中的数据。

具体思路：父组件通过props传值给子组件，子组件通过 $emit 来通知父组件修改相应的props值，具体实现如下：


```vue
 import Vue from 'vue'
  const component = {
    props: ['value'],
    template: `
      <div>
        <input type="text" @input="handleInput" :value="value">
      </div>
    `,
    data () {
      return {
      }
    },
    methods: {
      handleInput (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
  new Vue({
    components: {
      CompOne: component
    },
    el: '#root',
    template: `
      <div>
        <comp-one :value1="value" @input="value = arguments[0]"></comp-one>
      </div>
    `,
    data () {
      return {
        value: '123'
      }
    }
  })

```
  我们在父组件中做了两件事，一是给子组件传入props，二是监听input事件并同步自己的value属性。那么这两步
  操作能否再精简一下呢？答案是可以的，你只需要修改父组件：
```vue
 template: `
      <div>
        <!--<comp-one :value1="value" @input="value = arguments[0]"></comp-one>-->
        <comp-one v-model="value"></comp-one>
      </div>
    `
```
 v-model 实际上会帮我们完成上面的两步操作。

### Vue组件间的参数传递

1.父组件与子组件传值
　　　　父组件传给子组件：子组件通过props方法接受数据;
　　　　子组件传给父组件：$emit方法传递参数
　　2.非父子组件间的数据传递，兄弟组件传值
　　　　eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，
用这个比较合适。（虽然也有不少人推荐直接用VUEX，具体来说看需求咯。技术只是手段，目的达到才是王道。）

### Vue的路由实现：hash模式 和 history模式

hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，
hash不会重加载页面。
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，
即使没有做到对路由的全覆盖，也不会返回 404 错误。

history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）
可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。
后端如果缺少对 /items/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，
还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，
则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”

### vue中 key 值的作用
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，
Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已
被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。

### vue路由的钩子函数

首页可以控制导航跳转，beforeEach，afterEach等，一般用于页面title的修改。一些需要登录才能调整页面的重定向功能。

　　beforeEach主要有3个参数to，from，next：

　　to：route即将进入的目标路由对象，

　　from：route当前导航正要离开的路由

　　next：function一定要调用该方法resolve这个钩子。执行效果依赖next方法的调用参数。可以控制网页的跳转。

### 对keep-alive 的了解
```vue
keep-alive是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
在vue 2.1.0 版本之后，keep-alive新加入了两个属性: include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于include) 。

使用方法

<keep-alive include='include_components' exclude='exclude_components'>
  <component>
    <!-- 该组件是否缓存取决于include和exclude属性 -->
  </component>
</keep-alive>

参数解释
include - 字符串或正则表达式，只有名称匹配的组件会被缓存
exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存
include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、正则表达式、数组。当使用正则或者是数组时，
要记得使用v-bind 。

使用示例

<!-- 逗号分隔字符串，只有组件a与b被缓存。 -->
<keep-alive include="a,b">
  <component></component>
</keep-alive>

<!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) -->
<keep-alive :include="/a|b/">
  <component></component>
</keep-alive>

<!-- Array (需要使用 v-bind，被包含的都会被缓存) -->
<keep-alive :include="['a', 'b']">
  <component></component>
</keep-alive>
```

### 怎么定义 vue-router 的动态路由? 怎么获取传过来的值
答：在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。

### vue-router实现路由懒加载（ 动态加载路由 ）
第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .
但是,这种情况下一个组件生成一个js文件。

第二种：路由懒加载(使用import)。

第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实
现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

### vue-router 有哪几种导航钩子

答：三种，
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子
第三种：单独路由独享组件

### $route 和 $router 的区别
答：$router是VueRouter的实例，在script标签中想要导航到不同的URL,使用$router.push方法。返回上一个历史
history用$router.to(-1)
$route为当前router跳转对象。里面可以获取当前路由的name,path,query,parmas等。

### vue常用的修饰符
答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素
的时候会触发；.capture: 事件侦听，事件发生的时候会调用
 ###  Vue中如何监控某个属性值的变化？

  比如现在需要监控data中， obj.a 的变化。Vue中监控对象属性的变化你可以这样：
```vue
  watch: {
        obj: {
        handler (newValue, oldValue) {
          console.log('obj changed')
        },
        deep: true
      }
    }
```
deep属性表示深层遍历，但是这么写会监控obj的所有属性变化，并不是我们想要的效果，所以做点修改：
```vue
  watch: {
     'obj.a': {
        handler (newName, oldName) {
           console.log('obj.a changed')
        }
     }
    }
```
还有一种方法，可以通过computed 来实现，只需要：
```vue
computed: {
      a1 () {
        return this.obj.a
      }
  }
```
利用计算属性的特性来实现，当依赖改变时，便会重新计算一个新值。

### vuex的作用
vuex是一个专门为vue.js应用程序开发的状态管理模式
    vuex可以帮助我们管理共享状态，也就是管理全局变量
    vuex的几个核心概念：
```
        vuex使用一个store对象管理应用的状态，一个store包括：state,getter，mutation,action四个属性
        state:state意为'状态'，是vuex状态管理的数据源
        getter:getter的作用与filters有一些相似，可以将state进行过滤后输出
        mutation:mutation是vuex中改变state的唯一途径，并且只能同步操作
        action:一些对state的异步操作可以放在action中，并通过在action提交mutaion变更状态
        module:当store对象过于庞大时，可以根据具体的业务需求分为多个module
```
    我们可以在组件中触发 Action，Action 则会提交 Mutation，Mutaion 会对 State 进行修改，组件再根据 State 、Getter 渲染页面
### Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？
答：如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。
如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用。

### vue中的路由拦截器的作用
 路由拦截，权限设置
    例如：当用户没有登录权限的时候就会跳转到登录页面，用到的字段requireAuth:true
### vue中的ajax，用于向后台发起请求
    特点：
        从浏览器中创建XMLHttpRequests
        从node.js创建http请求
        支持Promise API
        拦截请求和响应
        转换请求数据和响应数据
        取消请求
        自动转换json数据
        客户端支持防御XSRF
    promise：
        一个对象用来传递异步操作的信息
        promise的出现主要是解决地狱回调的问题，无需多次嵌套
        本质：分离异步数据获取和业务
    拦截器分为请求拦截器和响应拦截器
```vue
import Vue from 'vue'
import { Loading } from 'element-ui'
import qs from 'qs'
import ElementUI from 'element-ui';
import md5 from 'js-md5';
import store from "@/vuex/store";
import data_axios from "@/vuex/data";
import axios from 'axios'
axios.defaults.withCredentials = true; //让ajax携带cookie
Vue.prototype.$axios = axios;
const service = axios.create({
    timeout: 30000 //请求超时时间zz
});
// 添加请求拦截器

service.interceptors.request.use((config) => {
    if (store.state.Loading) {
        showFullScreenLoading()
    }
    return config
}, error => {
    ElementUI.Message.error('错误，请重新操作...')
    Promise.reject(error)
});
// 添加响应拦截器

service.interceptors.response.use(response => {
    // debugger
    if (store.state.Loading) {
        tryHideFullScreenLoading()
    }
    if (response.data) {
        if (response.data.resp) {
            if (response.data.resp.resp_code == data_axios.login_menager) {
                return response.data
            } else {
                ElementUI.Message.error(response.data.resp.resp_msg); //弹出错误消息
            }
        }
        return response

    } else {
        ElementUI.Message.error('数据错误，请重试...')
    }
},

    error => {
        // debugger
        let text = ''
        // tryHideFullScreenLoading()
        if (typeof (error.response) == "undefined") {
            text = '请检查网络，连接服务器失败,请退出重试!'
            ElementUI.Message.error(text)
        } else {
            /* 判断error的status代码，并将对应的信息告知用户 */

            // let err = JSON.parse(JSON.stringify(error))
            if (error.response.status) {
                switch (error.response.status) {
                    case 400:
                        text = '请求错误(400)，请重新申请'
                        break
                    case 401:
                        text = '登录错误(401)，请重新登录'
                        return this.$router.replace('/')
                    case 403:
                        text = '拒绝访问(403)'
                        break
                    case 404:
                        text = '请求出错(404)'
                        break
                    case 408:
                        text = '请求超时(408)'
                        break
                    case 500:
                        text = '服务器请求不到数据(500)，请另外发起请求或重新登录！'
                        break
                    case 501:
                        text = '服务未实现(501)'
                        break
                    case 502:
                        text = '网络错误(502)'
                        break
                    case 503:
                        text = '服务不可用(503)'
                        break
                    case 504:
                        text = '网络超时(504)'
                        break
                    case 505:
                        text = 'HTTP版本不受支持(505)'
                        break
                    default:
                        text = '网络连接出错'
                }
            } else {
                text = '连接服务器失败,请退出重试!'
            }
            ElementUI.Message.error(text)
            return Promise.reject(error.response)
        }


    }
);
//--------------------------------------------------------
let needLoadingRequestCount = 0

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}
let loading

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: '#fff'
    })
}

function endLoading() {
    loading.close()
}
//------------------------------------------------------

export function get(url, params, loading) {
    store.state.Loading = loading;
    // params.t = new Date().getTime(); // get方法加一个时间参数,解决ie下可能缓存问题.
    const dateString = String(Date.parse(new Date()));
    const dataString = JSON.stringify(params);
    var x_sign = '';
    if (dataString == '{}') {
        x_sign = dateString + data_axios.X_Sign_debug
    } else {
        x_sign = dateString + dataString + data_axios.X_Sign_debug
        // console.log(x_sign)
    }
    // console.log(store.state.user_session)
    return service({
        url: url,
        method: 'get',
        headers: {
            'X-TimeStamp': dateString,
            'X-Sign': md5(x_sign).toUpperCase(),
            // "Content-Type":"multipart/form-data;text/html; charset=utf-8"
        },
        // credentials: true,
        params
    })
}

export function post_file(url, data, loading) {
    // console.log(data.getAll('files'));
    var objData = {};
    data.forEach((value, key) => objData[key] = value);
    console.log(objData)
    for (var k in objData) {
        if (k == 'files') {
            delete objData['files'];
        }
    }
    const dataString = JSON.stringify(objData)
    store.state.Loading = loading;
    const dateString = String(Date.parse(new Date()));
    var x_sign = dateString + data_axios.X_Sign_debug
    if (dataString == '{}') {
        x_sign = dateString + data_axios.X_Sign_debug
    } else {
        x_sign = dateString + dataString + data_axios.X_Sign_debug
    }
    let sendObject = {
        url: url,
        method: 'post',
        headers: {
            'X-TimeStamp': dateString,
            'X-Sign': md5(x_sign).toUpperCase(),
            'session': store.state.user_session,
            "Content-Type": "multipart/form-data"
        },
        data
    };
    return service(sendObject)
}

// 封装post请求
export function post(url, data = {}, loading) {
    // 默认配置
    store.state.Loading = loading;
    const dateString = String(Date.parse(new Date()));
    const dataString = JSON.stringify(data);
    var x_sign = '';
    if (dataString == '{}') {
        x_sign = dateString + data_axios.X_Sign_debug
    } else {
        x_sign = dateString + dataString + data_axios.X_Sign_debug
    }
    let sendObject = {
        url: url,
        method: 'post',
        headers: {
            'X-TimeStamp': dateString,
            'X-Sign': md5(x_sign).toUpperCase(),
            'session': store.state.user_session,
        },
        data: qs.stringify(data),
    };
    return service(sendObject)
}
/* 将写好的axios实例暴露出去 */
export default service

```
### vue跨域
跨域指浏览器不允许当前页面的所在的源去请求另一个源的数据。源指协议，端口，域名。只要这个3个中有一个不同就是跨域
```
# 协议跨域
http://a.baidu.com访问https://a.baidu.com；
# 端口跨域
http://a.baidu.com:8080访问http://a.baidu.com:80；
# 域名跨域
http://a.baidu.com访问http://b.baidu.com；

```
第一种，服务端（后端）更改header
```
res.header("Access-Control-Allow-Origin", "*"); // 允许的域名
res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); // 允许的请求方法
```
第二种：代理
原因就是因为客户端请求服务端的数据是存在跨域问题的，而服务器和服务器之间可以相互请求数据，是没有跨域的概念（如果服务器没有设置禁止跨域的权限问题），也就是说，可以配置一个代理的服务器可以请求另一个服务器中的数据，然后把请求出来的数据返回到代理服务器中，代理服务器再返回数据给客户端，这样就可以实现跨域访问数据。

打开config/index.js,在proxyTable中添写如下代码:
```
proxyTable: {
      '/mall': {
        target: 'http://www.abcd.com',
        changeOrigin: true
      }
    },
```
第三种：jquery jsonp
```
$.ajax({
      url: '地址',
      type: 'GET',
      dataType: 'JSONP',
      success: function (res) {
        self.data = res.data.slice(0, 3)
        self.opencode = res.data[0].opencode.split(',')
      }
    })
```


###  Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？

示例：
```vue
<template>
    <div>
      <ul>
        <li v-for="value in obj" :key="value">
          {{value}}
        </li>
      </ul>
      <button @click="addObjB">添加obj.b</button>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        obj: {
          a: 'obj.a'
        }
      }
    },
    methods: {
        addObjB () {
        this.obj.b = 'obj.b'
        console.log(this.obj)
      }
    }
  }
  </script>
  <style></style> 

```
点击button会发现， obj.b 已经成功添加,控制台可以打印出两个数据，但是视图并未刷新：

原因在于在Vue实例创建时， obj.b 并未声明，因此就没有被Vue转换为响应式的属性，自然就不
会触发视图的更新，这时就需要使用Vue的全局api—— $set()：
```vue

        // this.obj.b = 'obj.b'
        this.$set(this.obj, 'b', 'obj.b')
        console.log(this.obj)
```
 $set() 方法相当于手动的去把 obj.b 处理成一个响应式的属性，此时视图也会跟着改变了
###  delete和Vue.delete删除数组的区别

    delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。

    Vue.delete 直接删除了数组 改变了数组的键值。
```vue
  var a=[1,2,3,4]
    var b=[1,2,3,4]
    delete a[1]
    console.log(a)
    this.$delete(b,1)
    console.log(b)
```
![vue](/vue-ms8.png)

### 如何优化SPA应用的首屏加载速度慢的问题？

* 将公用的JS库通过script标签外部引入，减小 app.bundel 的大小，让浏览器并行下载资源文件，提高下载速度；
* 在配置 路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件；
* 加一个首屏loading图，提升用户体验；

###  前端如何优化网站性能？
1、减少 HTTP 请求数量

在浏览器与服务器进行通信时，主要是通过 HTTP 进行通信。浏览器与服务器需要经过三次握手，每次握手需要花费大量时间。
而且不同浏览器对资源文件并发请求数量有限（不同浏览器允许并发数），一旦 HTTP 请求数量达到一定数量，资源请求就存
在等待状态，这是很致命的，因此减少 HTTP 的 请求数量可以很大程度上对网站性能进行优化。

 

CSS Sprites

国内俗称CSS精灵，这是将多张图片合并成一张图片达到减少HTTP请求的一种解决方案，可以通过CSS的background属性
来访问图片内容。这种方案同时还可以减少图片总字节数。

 

合并 CSS 和 JS 文件

现在前端有很多工程化打包工具，如：grunt、gulp、webpack等。为了减少 HTTP 请求数量，可以通过这些工具再发布前将多个CSS或者多个JS合并成一个文件。

 

采用 lazyLoad

俗称懒加载，可以控制网页上的内容在一开始无需加载，不需要发请求，等到用户操作真正需要的时候立即加载出内容。这样就控制了网页资源一次性请求数量。

 

2、控制资源文件加载优先级

浏览器在加载HTML内容时，是将HTML内容从上至下依次解析，解析到link或者script标签就会加载href或者src对应链接内容，为了第一时间展示页面给用户，就需要将CSS提前加载，不要受 JS 加载影响。

一般情况下都是CSS在头部，JS在底部。

 

3、利用浏览器缓存

浏览器缓存是将网络资源存储在本地，等待下次请求该资源时，如果资源已经存在就不需要到服务器重新请求该资源，直接在本地读取该资源。

 

4、减少重排（Reflow）

基本原理：重排是DOM的变化影响到了元素的几何属性（宽和高），浏览器会重新计算元素的几何属性，会使渲染树中受到影响的部分失效，浏览器会验证 DOM 树上的所有其它结点的visibility属性，这也是Reflow低效的原因。如果Reflow的过于频繁，CPU使用率就会急剧上升。

减少Reflow，如果需要在DOM操作时添加样式，尽量使用 增加class属性，而不是通过style操作样式。

 

5、减少 DOM 操作6、图标使用 IconFont 替换
### 网页从输入网址到渲染完成经历了哪些过程？

大致可以分为如下7步：

输入网址；
发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
与web服务器建立TCP连接；
浏览器向web服务器发送http请求；
web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
浏览器下载web服务器返回的数据及解析html源文件；
生成DOM树，解析css和js，渲染页面，直至显示完成；


## ES6 常用功能
### let / const
es6 以前，都是用 var 关键字来标识，这样有个变量提升的坑。在 es6 中，添加了 let 
和 const 两个关键字，let 定义变量，const 定义常量，并且添加了块级作用域

var的变量提升：

```javascript
console.log(a); // undefined
var a = 100
```

### 多行字符串 / 模板变量
在 es6 之前，字符串的拼接是这样的：
```javascript
var name = "李四"
var age = 18
var myIntro = ''
myIntro += 'my name is ' + name + ', '
myIntro += 'my age is ' + age

```
在 es6 中，可以使用模板字符串 `` 和模板变量 ${ } ：
```javascript
const name = "李四"
const age = 18
const myIntro = `my name is ${name}, 
                 my age is ${age}
```
### 解构赋值
顾名思义，就是先解构，再赋值！
比如先定义一个对象和数组：

```javascript
var obj = {
    a: 1,
    b: 2,
    c: 3
}
var arr = [1,2,3]

```
在 es6 以前，这样获取属性的值：
```javascript
obj.a
obj.b
arr[i]
```
在 es6 中：
```javascript
const {a,c} = obj
const [x,y,z] = arr
```
使用 const {a,c} = obj 这种方式获取对象的属性的方法时，大括号中的变量对象对象的
属性，使用 const [x,y,z] = arr 这种方式获取数组的元素，中括号中的变量的索引对应
真正数组的索引，即：x 是第一个，对应 arr 数组中的第一个，z 是数组的第三个，对应 arr 数组的第三个。

### 块级作用域
在 es6 以前：
```javascript
var obj = {
    a: 1,
    b: 2,
    c: 3
}
for (var item in obj) {
    console.log(item);
}
console.log(item);
```
变量 item 其实是在循环外部，咱们预想是访问不到的，但是实际是可以访问到的，
以上写法相当于将 var item 提到最前面，就好理解了，这样子的话变量 item 相当
于是在全局都可以访问的，这与我们的预期是相违背的。

再来看看 es6 中：
```javascript
const obj = {
    a: 1,
    b: 2,
    c: 3
}
for (let key in obj) {
    console.log(key);
}
console.log(key);
```
因为有块级作用域的概念，所以循环中的 key 变量只在循环中能使用,循环里面的
 key 和 外面的 key 不是同一个东西

### 函数默认参数

首先来设定一个场景：有一个函数 test ，可能给它传一个参数，也可能传两个，
传一个参数时，第二个参数给个默认值，在 es6 以前这样判断：

```javascript
function test (a, b) {
    if (b == null) {
        b = 0
    }
}
```
但是在 es6 中写法非常简单：
```javascript
function test (a, b = 0) {
    // ...
}
```
es6的写法也就是在内部做了一个判断：如果参数的个数大于1，并且第二个参数不是undefined，
那么就将第二个参数赋值给 b，否则b = 0。这个跟上面的 es6 之前的判断是一致的，这种写法特别简单、易读！

### 箭头函数

用 map 遍历数组
es6 以前：
```javascript
var arr = [100, 200, 300]
arr.map(function (item) {
    return item + 1
})
```
es6 写法：
```javascript
const arr = [100, 200, 300]
arr.map(item => item + 1)
```

当函数只有一个参数，并且函数体中只有一行代码时，可以简写成上面的形式，参数有多个，函数体中超过一行这样写：
```javascript
arr.map((item,index) => {
    console.log(index, item);
    return item + 1
})
```
this 指向：
```javascript
function test () {
    console.log('test', this);
    var arr = [1,2,3]
    arr.map(function (item) {
        console.log(item, this);
    })
}
test.call({a: 100})

```
![this指向](/thiszx01.png)

很明显，map 中的 this 是 window 对象。这是 js 的一个大坑，在这个情况下，通过
 call 绑定了一个 this 是 { a: 100 } 这个对象，但是 map 中的 this 却是 window 。
 这是因为 this 的取值是在其调用时决定的，而 map 中的函数相当于调用一个普通函数，
 而普通函数的作用域在全局，其 this 就指向了 window 。而箭头函数很好的解决了这个问题，
 箭头函数中的 this 与其上一个作用域的 this ，在此处中，map 中的 上一级作用域是 test
  函数，而 test 函数的 this 是 { a: 100 } 对象。

```javascript
function test () {
    console.log('test', this);
    var arr = [1,2,3]
    arr.map( item => {
        console.log(item, this);
    })
}
test.call({a: 100})

```
![this指向](/thiszx02.png)

### 模块化
在现在多个人开发同一个项目很常见，每个人负责不同的模块，还有可能会几个人使用
同一个模块，在这种情况下，模块化就很重要！其实使用起来也很简单，比如说有模块
A、B、C三个 js 文件，各自在其中定义好自己的代码，使用 export 关键字导出自己
的东西，别人使用时用 import 关键字引用即可，模块化的处理工具有 webpack、rollup
 等。如果你有兴趣，详情可以看看[ES6 模块化](https://blog.csdn.net/wwwqiaoling/article/details/104375012)
 如何使用，开发环境如何打包，欢迎指正。

### class
标题是 class， 但是实际上应该说是构造函数：
es6以前，js 构造函数：
```javascript
function MathPlus (x, y) {
    this.x = x
    this.y = y
}
MathPlus.prototype.getAddResult = function () {
    return this.x + this.y
}
var testAdd = new MathPlus(1,2)
console.log(testAdd.getAddResult()); // 3

```
es6 中 class 写法：
```javascript
class MathPlus {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getAddResult() {
        return this.x + this.y
    }
}
const testAddEs6 = new MathPlus(3,4)
console.log(testAddEs6.getAddResult()); // 7

```

js 定义构造函数和 es6 中的 class 的所实现目的一样的，但是 class 就看起来更加清晰、
易懂！在 js 的构造函数中，在其原型上定义方法从而实现，而 class 中直接在 { } 中写
函数就可以直接实现这个类中有这个函数了。

本质：
其实 class 的本质其实是一个语法糖：
理解起来就是，二者实现的东西是一样的，只是有个的写法更简洁、易读、易懂。对应一下，
其实 class 所实现的东西和 js 的构造函数是一样的，class 的实现原理和 js 构造函数是一样的，都是通过原型实现的。

```javascript
console.log(typeof MathPlus); // function
console.log( MathPlus.prototype === testAddEs6.__proto__ ); // true
console.log( MathPlus === MathPlus.prototype.constructor ); // true

```
以上的结果和 js 的构造函数是一致的，MathPlus 这个 class 的本质是一个function ，
其实例 testAddEs6 有一个隐式原型 __proto__ ，并且和 MathPlus 的 prototype 三等。

关于继承：
js 实现继承：
```javascript
function Math (x, y) {
    this.x = x
    this.y = y
}
Math.prototype.getSubResult = function () {
    return this.x - this.y
}

// 通过绑定原型，实现继承
MathPlus.prototype = new Math()

var testAdd = new MathPlus(1,2)
// console.log(testAdd.getAddResult());
console.log(testAdd.getSubResult()); // -1

```
class 继承：
```javascript
class Math {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getSubResult() {
        return this.x - this.y
    }
}
class MathPlus extends Math {
    constructor(x, y) {
        super(x, y) // 重点！！！自动实现父类的 constructor
        this.x = x
        this.y = y
    }
    getAddResult() {
        return this.x + this.y
    }
}
const testAddEs6 = new MathPlus(3,4)
console.log(testAddEs6.getAddResult()); // 7
console.log(testAddEs6.getSubResult()); // -1
console.log(testAddEs6.__proto__ === MathPlus.prototype); // true
console.log(MathPlus.prototype.__proto__ === Math.prototype); // true
```
看到结果其实就更能体现 class 实际上是通过原型实现的！

### promise
在项目中涉及到网络请求资源时，就要调用后端提供的接口，常用的jQuery、axios、fetch等，
用的最多的就是 axios 调用接口之后就有回调函数，成功与否都有相应的回调函数，这个是异步的，
但是当请求比较复杂时，会出现回调地狱（callback hell），比如说：根据接口1 获取 data1 ，
在其中调用接口2 获取data 3…，用 promise 就很简单，至少看起来不会那么复杂。
首先我们先封装一个根据接口 URL 获取数据的通用方法 getData ：
```javascript
function getData(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: (data) => {
                resolve(data)
            },
            error: (data) => {
                reject(data)
            }
        })
    })
}

```
getData 函数中，返回了一个 promise 实例，resolve 表示成功时调用的回调函数，
reject 表示失败时调用的回调函数。那么，对于上面比较复杂的情况就可以写成：

```javascript
getData(url1).then(data1 => {
    console.log(data1);
    return getData(url2)
}).then(data2 => {
    console.log(data2);
    return getData(url3)
}).catch(err => {
    console.log(err);
})

```

## Node
### node有哪些特征，与其他服务器端对比

特征：单线程、事件驱动、非阻塞I/O

　　node 无法直接渲染静态页面，提供静态服务

　　node 没有根目录的概念

　　node 必须通过路由程序指定文件才能渲染文件

　　node 比其他服务端性能更好，速度更快
### CommonJS中require/exports和ES6中import/export区别
CommonJS模块的重要特性是加载时执行，及脚本代码在require的时候，就会全部执行。
一旦出现某个模块被“循环加载”就只输出已经执行的部分，还没有执行的部分是不输出的

ES6模块是动态引用，如果使用import从一个模块加载变量，那些变量不会缓存，而是成为
一个指向被加载模块的引用,impor/export最终都是编译为require/exports来执行的

### 使用npm有哪些好处
通过NPM，你可以安装和管理项目的依赖，并且能够指明依赖项的具体版本号，可以通过package.json
文件来管理项目信息，配置脚本

### AMD CMD规范的区别

CommonJS和AMD都是JavaScript模块化规范

CMD依赖就近，而AMD依赖前置

CMD是延迟执行的，而AMD是提前执行的

AMD的API默认是一个当多个用，CMD的API严格区分，推崇职责单一

### 如何判断当前脚本运行在浏览器还是node环境中

通过判断 Global 对象是否为 window ，如果不为window ，当前脚本没有运行在浏览器中

### 简述同步和异步的区别，如何避免回调地狱
同步方法调用一旦开始，调用者必须等到方法调用返回后，才能继续后续的行为

异步方法调用一旦开始，方法调用就会立即返回，调用者就可以继续后续的操作。而异步方法通常会在另外一个线程中，整个过程，不会阻碍调用者的工作

避免回调地狱：

1）Promise

2）async/await

3）generator

4）事件发布/监听模式

### 几种常见模块化规范的简介

CommonJS规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的

AMD规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，AMD规范开发成本高，代码的阅读和书写比较困难

CMD规范与AMD规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在Node.js中运行（依赖SPM 打包，模块的加载逻辑偏重）

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案

### app.use和app.get区别
app.use(path,callback)中的callback既可以是router(路由)对象又可以是函数

app.get(path,callback)中的callback只能是函数

### 说一下事件循环eventloop

1）所有同步任务都在主线程上执行，形成一个执行栈

2）当主线程中的执行栈为空时，检查事件队列是否为空，如果为空，则继续检查；如不为空，则执行3

3）取出任务队列的首部，加入执行栈

4）执行任务

5）检查执行栈，如果执行栈为空，则跳回第 2 步；如不为空，则继续检查

### node怎么跟MongoDB建立连接
1）引入mongoose

2）使用mongoose.connect()方法连接到MongoDB数据库

3）监听连接是否成功

4）然后通过node，书写接口，对数据库进行增删改查

### node 和 前端项目怎么解决跨域的
通过在node服务器端设置
```
//解决跨域问题
        app.use(async(ctx, next) => {
            
            //指定服务器端允许进行跨域资源访问的来源域。可以用通配符*表示允许任何域的JavaScript访问资源，但是在响应一个携带身份信息(Credential)的HTTP请求时，必需指定具体的域，不能用通配符
            ctx.set("Access-Control-Allow-Origin", "*");

            //可选。它的值是一个布尔值，表示是否允许客户端跨域请求时携带身份信息(Cookie或者HTTP认证信息)。默认情况下，Cookie不包括在CORS请求之中。当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";如果没有设置这个值，浏览器会忽略此次响应。
            ctx.set("Access-Control-Allow-Credentials", true);
            
            //指定服务器允许进行跨域资源访问的请求方法列表，一般用在响应预检请求上
            ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
            
            //必需。指定服务器允许进行跨域资源访问的请求头列表，一般用在响应预检请求上
            ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
            // ctx.set("X-Powered-By", ' 3.2.1');
            
            //告诉客户端返回数据的MIME的类型，这只是一个标识信息,并不是真正的数据文件的一部分
            ctx.set("Content-Type", "application/json;charset=utf-8");
            
            //如果不设置mode，直接设置content-type为application/json，则fetch会默认这是跨域模式（mode:'cors'），在跨域POST之前，客户端会先发一条OPTIONS请求来”探探路”，如果服务器允许，再继续POST数据。对于这种OPTIONS请求，需要在服务器配置允许接受OPTIONS请求，这样写就是直接允许了所有的OPTIONS请求，也可以按照需求来判断OPTIONS请求中更详细的信息
            if (ctx.request.method == "OPTIONS") {
                ctx.response.status = 200
            }
            await next();
        });
```



