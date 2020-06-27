# Web
## Markdown
### 简介
Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。
Markdown 编写的文档后缀为 .md, .markdown。
### 标题
#### Markdown 标题有两种格式。

##### 使用 = 和 - 标记一级和二级标题
= 和 - 标记语法格式如下：
```
我展示的是一级标题
=================
我展示的是二级标题
-----------------
```

使用 # 号标记
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
### 段落
Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行是使用两个以上空格加上回车。
当然也可以在段落后面使用一个空行来表示重新开始一个段落。
#### 字体
Markdown 可以使用以下几种字体：
```javascript
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___

#### 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
```javascript
***

* * *

*****

- - -

----------
```
***

* * *

*****

- - -

----------

#### 删除线
如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 ~~ 即可，实例如下：
```javascript
RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
```

RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
#### 下划线
下划线可以通过 HTML 的 u 标签来实现：
```javascript
// <u>带下划线文本</u>
```
<u>带下划线文本</u>

#### 脚注
脚注是对文本的补充说明。
Markdown 脚注的格式如下:
```javascript
[^要注明的文本]
```
以下实例演示了脚注的用法：
```javascript
创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
```
创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
### 列表
Markdown 支持有序列表和无序列表。

无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记：
```javascript
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项
```
效果如下：
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

有序列表使用数字并加上 . 号来表示，如：
```javascript
1. 第一项
2. 第二项
3. 第三项
```
1. 第一项
2. 第二项
3. 第三项

#### 列表嵌套
列表嵌套只需在子列表中的选项添加四个空格即可：
```javascript
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素

### 区块
Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：
```javascript
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想
```
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

另外区块是可以嵌套的，一个 > 符号是最外层，两个 > 符号是第一层嵌套，以此类推：
```javascript
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```
> 最外层
> > 第一层嵌套
> > > 第二层嵌套

#### 区块中使用列表
区块中使用列表实例如下：
```javascript
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项
```
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项

#### 列表中使用区块
如果要在列表项目内放进区块，那么就需要在 > 前添加四个空格的缩进。

区块中使用列表实例如下：
```javascript
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项
```
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项

### 代码
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`），例如：
```javascript
// `printf()` 函数
```
`printf()` 函数
代码区块使用 4 个空格或者一个制表符（Tab 键）。
你也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）：

<!-- ```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
``` -->


### 链接
链接使用方法如下：
```
[链接名称](链接地址)

或者

<链接地址>
这是一个链接 [菜鸟教程](https://www.runoob.com)
```
这是一个链接 [菜鸟教程](https://www.runoob.com)

直接使用链接地址：

```
<https://www.runoob.com>
```
<https://www.runoob.com>

#### 高级链接
我们可以通过变量来设置一个链接，变量赋值在文档末尾进行：
```
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/
```
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/

### 图片
Markdown 图片语法格式如下：
```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```
开头一个感叹号 !
接着一个方括号，里面放上图片的替代文字
接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。
```
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")
```
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")

当然，你也可以像网址那样对图片网址使用变量:
```
这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾为变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png
```
这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾为变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png
Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。
```
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
```
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">

### 表格
Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。

语法格式如下：

```
| 表头   | 表头   |
|--------|--------|
| 单元格 | 单元格 |
| 单元格 | 单元格 |
```
| 表头   | 表头   |
|--------|--------|
| 单元格 | 单元格 |
| 单元格 | 单元格 |

对齐方式

我们可以设置表格的对齐方式：

-: 设置内容和标题栏居右对齐。
:- 设置内容和标题栏居左对齐。
:-: 设置内容和标题栏居中对齐。
```
| 左对齐 | 右对齐 | 居中对齐 |
|:-------|-------:|:--------:|
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |
```

| 左对齐 | 右对齐 | 居中对齐 |
|:-------|-------:|:--------:|
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

## Git
### tortoisegit(小乌龟)
这个的安装和使用教程个人推荐这个网站：
[小乌龟详解](https://www.cnblogs.com/xiuxingzhe/p/9312929.html)
### Git Bash
#### 安装配置
[傻瓜式安装](https://gitforwindows.org/)
#### 检查git是否安装OK
键盘Ctrl+r，然后在弹出框中出入cdm，弹出如下界面，输入git，回车,显示出git的信息则安装成功
#### 环境配置
1.git安装好去GitHub上注册一个账号，注册好后，点击桌面上的Git Bash快捷图标，我们要用账号进行环境配置
2.在Git Bash
```
# 配置用户名
git config --global user.name "username"    //（ "username"是自己的账户名，）
# 配置邮箱
git config --global user.email "username@email.com"     //("username@email.com"注册账号时用的邮箱)
```
3.生成ssh
完成上面的操作后，在命令框中输入以下命令，
```
ssh-keygen -t rsa
```

然后连敲三次回车键，结束后去系统盘目录下（一般在 C:\Users\你的用户名.ssh）(mac: /Users/用户/.ssh）查看是否有。ssh文件夹生成，此文件夹中以下两个文件
一般会生成，id_rsa和id_rsa.pub文件

将ssh文件夹中的公钥（ id_rsa.pub）里面的内容全部复制，添加到GitHub管理平台中，在GitHub的个人账户的设置中找到如下界面
![alt ssh](/ssh.png "ssh")
title随便起一个，将公钥（ id_rsa.pub）文件中内容复制粘贴到key中，然后点击Ass SSH key就好啦
4.测试一下配置是否成功，在Git Bush命令框（就是刚才配置账号和邮箱的命令框）中继续输入以下命令，回车
```
ssh -T git@github.com
```
### 命令
#### 获得Git仓库
```
git clone "github项目的ssh地址"
```
#### git status
通常提交前先检查下修改了什么内容，当前Git目录下各文件的状态。
```
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        Readme.md

nothing added to commit but untracked files present (use "git add" to track)
```
#### git add
git add可以添加文件或者目录，也可以使用通配符。比如：
```
git add Readme.md    # add file only
git add *.cpp        # add all cpp files
git add /home/code/  # add all files in /home/code
```
#### git diff
git diff可以查看当前目录的所有修改。
提交之前，还是单独确认下处于staged状态的文件有哪些，并保证修改正确。在实际应用中，可能还需要使用git diff导出PATCH做代码走读。
可以使用git diff --staged或git diff --cached查看staged与上次提交快照之间的区别。
#### git commit
提交前需慎重。直接调用git commit会弹出编辑器，输入提交日志（如果是多行日志，建议使用）。
针对单行日志提交的情况，可以使用如下命令：git commit -m "add readme"。
还有一种快捷的提交方式，直接跳过stage缓存区，直接提交当前目录下的所有修改git commit -a（使用这个命令前建议确认下当前目录的修改是否正确、必须）。
#### git rm
git rm会把文件从当前目录删除（不会保存删除的文件）。如果需要从Git仓库中删除，但保留在当前工作目录中，亦即从跟踪清单中删除，可以使用git rm --cached readme.md。
#### 远程仓库
可以使用git remote查看当前的远程库。
git remote -v可以显示对应的克隆地址。（对于多个远程仓库很有用）
##### 添加远程仓库
git remote add [short_name] [url]可以添加新的远程仓库。
##### 从远程仓库抓取数据
git fetch [remote-name]可以从远程仓库抓取数据到本地。
也可以使用git pull
##### 推送数据到远程仓库
git push [remote_name] [branch_name]
默认使用origin和master。
##### 查看远程仓库信息
git remote show origin
##### 远程仓库的删除和重命名
git remote rename [old_name] [new_name]
git remote rm [remote_name]
### Git分支
git分支是轻量级的，速度很快，仅记录索引信息。

#### 显示所有分支
使用git branch可显示当前所有分支。
可以使用--merged和--no-merged查看已经合并、未合并的分支。

#### 创建及切换分支
可以使用下面命令直接切换并创建分支
git checkout -b testing
等价于
```
$ git branch testing    # 创建testing 分支
$ git checkout testing  # 切换到testing分支
```
注意切换分支时请保持工作目录没有未提交的修改。Git鼓励使用分支，处理完问题之后合并分支即可。
#### 分支合并
将hotfix分支合并到master（主分支）上，需要通过下面命令：
```
$ git checkout master
$ git merge hotfix
```
合并之后可以使用git branch -d hotfix删除分支。
如果合并时存在冲突，需要手工修改。
## HTML
## CSS
## JS
### es6


## Vue基础
### Vue.js是什么
>  vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
### Vue实例
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
1、在文件中引入vue.js，下面两种方式选择其中一种
```
<script type="text/javascript" src="../vue.js"></script>
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
2、建立简单的vue实例对象
```
<div id="app">
	//调用vue中的数据
	<h1>{{message}}</h1>
	//下面的两种书写方式结果相同
	<button v-on:click="click()">click</button>
	<button @click="click()">click01</button>
</div>

<script>
		var ve=	new Vue({
				el:'#app',
				data:{
					message:'hello',
				},
				methods:{
					click:function(){
						alert("你好，世界");
					}
				}
			});
</script>

```
### vue常用指令
1、v-on：绑定事件监听器，事件的类型由参数决定
例如：v-on：事件名称
或者@事件名称
```vue
<button v-on:click="click()">点击</button>
<button @click="click()">点击</button>
```
2、v-if/v-else-if/v-else判断指令：根据表达式的值，进行渲染
```
<div id="app">
			//isshow为true时，标签内的内容显示到页面
			<h1 v-if="isshow">{{isshow}}ok</h1>
</div>

<script>
			new Vue({
				el:'#app',
				data:{
					message:'hello',
					isshow:true,
				},
				methods:{
					click:function(){
						alert("你好，世界");
					}
				}
			});
</script>

```
3、v-model：数据绑定指令（一般为表单输入绑定）
```
//v-model 指令在表单<input>、<textarea> 及 <select> 元素上创建双向数据绑定
<input type="text" v-model="message" />{{message}}
```
4、v-for：循环（可以多层嵌套显示和java中的for循环原理一致）
v-for格式：
```
<li v-for=“item in items”>{{item}} </ li>
```
其中：item是被迭代数组元素的别名
items是源数据数组
使用 item in items 的特殊格式语法
```
<div id="demo">
	<ul>
		<li v-for="item in items">{{item}}</li>
		<li v-for="item in arr1">{{item}}</li>
		<li v-for="item in arr1.a">{{item}}</li>
	</ul>
</div>
<script>
			new Vue({
				el:'#demo',
				data:{
					items:[23,23,344,45],
					arr1:{"a":[1,2,3],"b":[2,2,3]},
				},
				methods:{
				}
			});
</script>
```
5、v-bind：动态绑定属性
使用格式
v-bind:属性名=“data数据对象中的值”
简写
：属性名=“data数据对象中的值”
```
<styple>
.child{
	width: 50px;
	height: 50px;
	background-color: gray;
	color: black;
	}
</style>
<div id="app">
	<img v-bind:src="img" /> //动态绑定了imges属性，img改变了图片，那么img标签也会改变
	<div :class="{'child':isshow}">div6</div> //div区域的显示根据isshow的值来判定
	
</div>
<script>
	new Vue({
				el:'#app',
				data:{
				isshow:true,
				img:'111.png',
				}
			})	
</script>
```

### 生命周期函数|钩子函数
1、生命周期函数
```
beforeCreate

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

created

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

beforeMount

在挂载开始之前被调用：相关的 render 函数首次被调用。

mounted

el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

beforeUpdate

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

该钩子在服务器端渲染期间不被调用。

beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

destroyed

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
```
![alt 生命周期](/lifecycle.png "生命周期")

2、下面用一个生命周期函数演示的实例
```
<div id="demo">
			<h1>{{message}}</h1>
			<button @click="changemessage()">changemessage</button>
</div>
<script>
			var ve =new Vue({
					el:'#demo',
					data:{
						message:'vue生命周期',
						
					},
					beforeCreate:function(){
						console.group("------------beforecreate-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					created:function(){
						console.group("------------created-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					beforeMount:function(){
						console.group("------------beforemount-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					mounted:function(){
						console.group("------------mounted-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					beforeUpdate:function(){
						console.group("------------beforeupdate-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					updated:function(){
						console.group("------------updated-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					beforeDestroy:function(){
						console.group("------------destotry-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					destroyed:function(){
						console.group("------------destroyed-----------")
						console.log('el:'+this.$el)
						console.log('data:'+this.$data)
						console.log('message:'+this.message)
					},
					methods:{
						changemessage:function(){
							this.message='666'
						}
					}
				});
//销毁是在实例外面调用的
				ve.$destroy()
```
实际效果
![alt 生命周期实际效果](/lifecycleshow01.png "生命周期实际效果")
点击changemessage按钮
![alt 生命周期实际效果](/lifecycleshow02.png "生命周期实际效果")
### vue组件化应用构建
组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。仔细想想，几乎任意类型的应用界面都可以抽象为一个组件树：
![alt 组件化](/components.png.png "组件化")
1、为什么使用组件？
使用组件一方面可以不用去直接修改标签，另一方面也会优化页面显示
注意:组件在实例前面书写
2、组件注册（全局与局部）
##### 先看看全局组件的引用，就拿最常用的全局的暂无数据来举例，看看全局的是如何实现的。
（1）首先在components创建一个公共的目录，NoDatas目录里边包含index.vue和index.js,index.vue用来写公共的页面，index.js用来导出这个组件。
```
<template>
<!-- NoDataWords 可以灵活控制每个页面显示的内容  -->
<!-- NoDataHeight 可以灵活控制每个页面的高度  -->
<!-- 如果你的页面都是统一的字体，统一的样式,那就直接在这写死就好了 -->
    <div class="NoDataAtAll W100"
         :style="{height: NoDataHeight }">{{NoDataWords}}</div>
</template>
<script>
export default {
  // 就是基本的父子组件传值
  props: ["NoDataHeight", "NoDataWords"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.NoDataAtAll {
  font-size: 14px;
  color: #909399;
}
</style>
```
(2) 然后就是在index.js中注册该组件
```
import NoDataS from './index.vue'
const noDataLists = {
    install: function(Vue) {
        // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
        Vue.component('noDataLists', NoDataS)
    }
}
export default noDataLists
```
(3)在main.js中引入并使用该组件
```
import noDataLists from '@/components/NoDatas/index'
Vue.use(noDataLists);
```
##### 第二种 全局注册组件形式
![alt 全局注册组件](/allzuchezujian01.png "全局注册组件")
先在main.js里这样写。  然后在App.vue里面 的template模板里 直接使用  
```
<users></users>
```
加载使用即可
![alt 全局注册组件](/allzuchezujian02.png "全局注册组件")
局部组件引入方法 就是在App.vue里引入。
![alt 局部注册组件](/allzuchezujian03.png "局部注册组件")
2,.全局注册公共的函数
公共函数common.js
```
const obj={
    fun1(){
    },
    fun2(){
    },
    fun3(){
    }
}
export default obj
```
main.js中引入方法
```
import common from '.icommon.js'
Vue.prototype.common=comm
```
其它组件中调用该方法的时候

```
this.common.fun1();
```
#### 局部组件:局部组件放在实例中
父子组件可以嵌套使用
父子组件间作用域相互独立
子组件只能在父组件的模板中进行调用

子组件是父组件细化拆分的过程
父组件向子组件传值通过props进行

下面的示例中包含了父组件向子组件传值的功能

```
<div id="box">
	<test>
	</test>
</div>
<template id='box1'>
	<div>
	<input type="text" v-model="message" />
	<box1 num="1" txt='yi' :msg="message"></box1>
	<box1 num="2" txt='er' :msg="message"></box1>
	</div>
</template> 

<script>
var ve = new Vue({
		el:'#box',
		data:{
		},
		//父級
		components:{
			'test':{
				template:"#box1",
				data:function(){
					return{
						message:'aaa'
					}
				},
				//子级
				components:{
					'box1':{
						template:"#box2",
						//子级想将父级的一个值，作为自己的一个局部变量
						data:function(){
							return{
								mymsg:this.msg
							}
						},
						//计算属性
						computed:{
							mymsg1:function(){
								return this.msg+'!'
							}
						},
						props:[
							'num','txt','msg'
						]
						}
					}
				}
			}
		})
</script>
```
#### 自定义监听事件（子组件向父组件传值）
自定义监听事件： $emit()
传值的过程：
子组件设定了一个点击事件，点击事件中夹带着传递的值—》通过getval方法将拿到的值赋值给父组件的message—》父组件显示出message值
```
<div id="box">
			<parent></parent>
</div>
	<template id='par'>
		<div>
			<h1> 父组件:{{parentmsg}}||{{message}}</h1>
			<child @change="getval"></child>
		</div>
	</template>
	<template id='child'>
		<div @click="fn()">
			<h2>子组件:{{childmsg}}</h2>
		</div>
	</template>
<script>
	var vm = new Vue({
		el:"#box",
		components:{
			"parent":{
				template:'#par',
				data:function(){
					return {
						parentmsg:"父组件的信息",
						message:''
					}
				},
				methods:{
					getval:function(val){
						this.message = val
						console.log(val)
					}
				},
				components:{
					'child':{
						template:'#child',
						data:function(){
							return{
								childmsg:'子组件的信息'
							}
						},
						methods:{
							fn:function(){
								this.$emit('change',this.childmsg)
							}
						}
					}
				}
			}
		}
	})
</script>

```

### SLOT插槽
目的:其目的在于让组件的可扩展性更强,用来混合父组件的内容与子组件自己的模板.
分为匿名slot和具名slot
一、slot的作用
Q: 假如父组件需要在子组件内放一些DOM元素，那么这些DOM是显示呢还是不显示呢？

默认情况下是不会显示的，如下图所示，页面并没有显示父组件增加的<span>我是魔鬼</span>  元素内容。那么我执意要加DOM元素到子组件上该怎么实现呢？这就用到了slot插槽，使用slot这个标签可以将父组件放在子组件的内容，放到它想显示的地方
```
<div id="app">  
  <children>  
    <span>我是魔鬼</span>  
    <!--上面这行不会显示-->  
  </children>  
</div>  
<script>  
  var vm = new Vue({  
      el: '#app',  
      components: {  
         children: {   
         template: "<h1>我是子组件</h1>"  
       }  
     }  
  });  
</script>  
```
二、简单理解slot
通俗易懂的讲，slot具有“占坑”的作用，在子组件占好了位置，那父组件使用该子组件标签时，新添加的DOM元素就会自动填到这个坑里面

三、单个slot    
我们将上面的代码改一改 , 给child组件添加slot插槽，那么父组件的添加的DOM元素就填充到这个slot插槽里面了

注意：如果有多个DOM元素，会一起插入到
```
<slot></slot>
```
这个标签内
```
<div id="app">  
  <children>  
    <span>我是魔鬼</span>  
    <!--上面这行会显示在 “我是子组件” 数据后面-->  
  </children>  
</div>  
<script>  
  var vm = new Vue({  
      el: '#app',  
      components: {  
         children: {   
         template: "<h1>我是子组件</h1><slot></slot>"  
       }  
     }  
  });  
</script>  
```
四、具名插槽
现在我们需要将父组件添加的HTML标签放在子组件里的不同位置。具名插槽实现：先在子组件对应分发slot标签里，添加name=”name名” 属性，其次父组件在要分发的标签里添加 slot=”name名” 属性，然后就会将对应的标签放在对应的位置了。

简单理解就是：给子组件占的每一个坑取名，将父组件添加的HTML元素添加到指定名字的坑，就实现了分发内容在不同位置显示

【Child组件模板】
```
<template>
  <div>
    <slot name="header"></slot>
    <h1>我是子组件</h1>
    <slot name="footer"></slot>
  </div>
</template>
```
【父组件引用Child组件】
```
<Child>
  <span slot="header">我是header</span>
  <span slot="footer">我是footer</span>
</Child>
```
会显示成：

>我是header
>我是子组件
>我是footer
五、编辑作用域
父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译

【Child组件模板】
```
<template>
  <div>
    <slot name="header"></slot>
    <h1>{{msg}}</h1>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '我是子组件里面的内容'
    }
  }
}
</script>
```
【父组件引用Child组件】
```
<template>
  <Child>
    <span slot="header">我是header</span>
    <h1>{{msg}}</h1>
    <span slot="footer">我是footer</span>
  </Child>
</template>
<script>
export default {
  data() {
    return {
      msg: '我是父组件的内容'
    }
  }
}
</script>
```
六、解构slot-scope
在子组件中插槽中通过：data绑定了数据，父组件可以通过slot-scope="name"来取得子组件作用域插槽：
data绑定的数据，name的名称可以随便取，用来定义对象来代替取到的data数据。

【Child组件模板】
```
<template>
  <div>
    <slot :data="data"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: ['Neinei','Laoba','Demi','Feiyan']
    }
  }
}
</script>
```
【父组件引用Child组件】
```
  <template>
    <!-- 循环数据列表 -->
    <Child>
      <div slot-scope="msg">
        <span v-for="item in msg.data">{{item}} </span>
      </div>
    </Child>
 
    <!-- 直接显示数据 -->
    <Child>
      <div slot-scope="msg">
        <span>{{msg.data}} </span>
      </div>
    </Child>
 
    <!-- 不使用其提供的数据, 作用域插槽退变成匿名插槽 -->
    <Child>
      <div>我是插槽</div>
    </Child>
  </template>
```
显示为：
> Neinei Laoba Demi Feiyan
>  ['Neinei','Laoba','Demi','Feiyan']
> 我是插槽
### vue的路由设置
要引入vue-router.js库文件
作用：
根据url锚点的位置，在容器中加载不同的模块，本质是作为页面导航
完成SPA(Singal Page Application)的开发
一种特殊的web应用，它将所有活动局限于一个web页面中，仅web页面初始化时加载项应的html、JavaScript、css
一旦页面加载完成，SPA不会因为用户的操作而进行页面的重新加载或跳转，而是利用JavaScript动态的变换HTML（采用的是div切换显示或隐藏），从而实现ui与用户的交互
下面是一个简单地单页面示例
```
<div id="app">
	<ul>
		<li >
			<router-link to="/home">首页</router-link>
		</li>
		<li >
			<router-link to="/news">新闻</router-link>
		</li>
		<li >
			<router-link to="/hot">热点</router-link>
		</li>
	</ul>
	<div class="show">
		<router-view></router-view>
	</div>
	<button @click="back()">go back</button>
</div>
<script>
		const Home={template:'<h2>首页</h2>'}
		const News={template:'<h2>新闻</h2>'}
		const Hot={template:'<h2>热点</h2>'}
		//Vue.extend(template:'<h1>首页</h1>')
		//配置路径
		const routes=[
			{
				path:'/home',component:Home
			},
			{
				path:'/news',component:News
			},
			{
				path:'/hot',component:Hot
			}
		]
		
		//创建router
		const router = new VueRouter({
			routes
		})
		
		var vm = new Vue({
			el:'#app',
			router,
			beforeCreate:function(){
				this.$router.push('/home').catch(err=>{err})
			},
			methods:{
				back(){
					this.$router.go(-1);
				}
			}
		})
</script>
```
二级路由的配置是在一级路由的基础上，在某一个path下再分离出几个低级的path
示例
```
{
	//新闻模块下有将新闻进行分类：科技、军事等；其他步骤不影响
	path:'/news',component:News,
	children:[
		/* 二级路由，path分配，前面没有“ / ” */
		{
			path:'js',
			component:{
				template:'<p>军事类新闻</p>'
			}
		},
		{
			path:'kj',
			component:{
				template:'<p>科技类新闻</p>'
			}
		},
		{
			/* 默认页面可以直接用一个组件，也可以重定向 */
			path:'/',
			redirect:'js'
			// component:{
			// 	template:'<p>默认值</p>'
			// }
		}
	]
},

```

### axios的使用
axios的get方法使用
axios相关使用
一、axios安装
使用npm安装axios
```vue
	npm install axios
```
使用cnpm安装axios
```vue
	cnpm install axios
```
使用yarn安装axios
```vue
	yarn install axios
```
使用cdn链接axios
```vue
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
二、请求数据方法
* get请求：方式一：
```
axios({
		// 默认请求方式为get
		method: 'get',
		url: 'api',
		// 传递参数
		params: {
			key: value
		},
		// 设置请求头信息
		headers: {
			key: value
		}
		responseType: 'json'
	}).then(response => {
		// 请求成功
		let res = response.data;
		console.log(res);
	}).catch(error => {
		// 请求失败，
		console.log(error);
	});
```
* get请求：方式二
```
axios.get("api", {
		// 传递参数
		params: {
			key: value
		},
		// 设置请求头信息，可以传递空值
		headers: {
			key: value
		}
	}).then(response => {
		// 请求成功
		let res = response.data;
		console.log(res);
	}).catch(error => {
		// 请求失败，
		console.log(error);
	});
```
* post请求：方式一
```
// 注：post请求方法有的要求参数格式为formdata格式，此时需要借助 Qs.stringify()方法将对象转换为字符串
	let obj = qs.stringify({
		key: value
	});
	
	axios({
		method: 'post',
		url: 'api',
		// 传递参数
		data: obj,
		// 设置请求头信息
		headers: {
			key: value
		}
		responseType: 'json'
	}).then(response => {
		// 请求成功
		let res = response.data;
		console.log(res);
	}).catch(error => {
		// 请求失败，
		console.log(error);
	});
```
* post请求：方式二
```
let data = {
			key: value
		},
		headers = {
			USERID: "",
			TOKEN: ""
		};
	// 若无headers信息时，可传空对象占用参数位置
	axios.post("api", qs.stringify(data), {
		headers
	}
	}).then(response => {
		// 请求成功
		let res = response.data;
		console.log(res);
	}).catch(error => {
		// 请求失败，
		console.log(error);
	});
```
* Qs的使用
引用cdn或者使用npm、cnpm或者yarn进行插件安装
使用cdn时，默认全局变量为Qs
Qs基本方法使用
qs.stringify() 方法：将目标数据转换为string字符串
qs.parse() 方法：将对象字符串格式的数据转换为对象格式





## Vue技术点
### Vue导出json数据到Excel表格

一、安装依赖
```JavaScript
npm install file-saver --save
npm install xlsx --save
npm install script-loader --save-dev
```
二、下载两个所需要的js文件Blob.js和 Export2Excel.js。

文件地址

三、src目录下新建vendor文件夹，将Blob.js和 Export2Excel.js放进去。

四、更改webpack.base.conf.js配置

在resolve的alias：

'vendor': path.resolve(__dirname, '../src/vendor')
五、在.vue文件中 script部分：
```
data(){
  return{
    list:[
        {
          name:'韩版设计时尚风衣大',
          number:'MPM00112',
          salePrice:'￥999.00',
          stocknums:3423,
          salesnums:3423,
          sharenums:3423,
      },
      {
          name:'韩版设计时尚风衣大',
          number:'MPM00112',
          salePrice:'￥999.00',
          stocknums:3423,
          salesnums:3423,
          sharenums:3423,
      },
    ]
  }
 
methods:{
    formatJson(filterVal, jsonData) {
    　　　　return jsonData.map(v => filterVal.map(j => v[j]))
    　　},
    export2Excel() {
    　　　　require.ensure([], () => {
    　　　　　　const { export_json_to_excel } = require('../../../vendor/Export2Excel');
    　　　　　　const tHeader = ['商品名称','商品货号','售价','库存','销量','分享',];
    　　　　　　const filterVal = ['name', 'number', 'salePrice', 'stocknums', 'salesnums', 'sharenums', ];
    　　　　　　const list = this.list;
    　　　　　　const data = this.formatJson(filterVal, list);
    　　　　　　export_json_to_excel(tHeader, data, '商品管理列表');
    　　　　})
    　 }
}
template:

<button @click="export2Excel">导出</button>
```
这里说明一下：

export2Excel()中require的路径因个人项目结构不同可能需要单独调整，如果报module not found '../../Export2Excel.js'之类请自行修改路径。 tHeader是每一栏的名称，需手动输入。 filterVal是data中list的key值，也是要自己写的。 这里记得要与data里面的list名称对应

### Vue做文件上传
使用的是element-ui
```
<el-upload
ref="uploadMutiple"
:auto-upload="false"
action="Fake Action"
:on-success="allHandleSuccess"
:on-change="handleChange"
:file-list="fileList"
:http-request="allUpload"
:before-upload="beforeUpload"
multiple
>上传文件</el-upload>
```
```
handleChange(file, fileList) {
      this.fileList = fileList;
      console.log(this.fileList);
    },
    beforeUpload(file) {
      console.log(file);
    },
    allHandleSuccess() {},
    allUpload() {},
    addStockMateriel() {
      this.$refs.uploadMutiple.submit();
      let formData = new FormData();
      this.fileList.forEach(item => {
        console.log(item);
        formData.append("files", item.raw); //与后台约定的一样（files）
      });
      axios("up_photo", formData, false).then(res => {});
	},
```

后台python



