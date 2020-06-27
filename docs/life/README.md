# Life
## vue常见面试题汇总
### vue.js的两个核心是什么
答：数据驱动、组件系统
### 谈谈你对MVVM开发模式的理解
MVVM分为Model、View、ViewModel三者。
* Model：代表数据模型，数据和业务逻辑都在Model层中定义；
* View：代表UI视图，负责数据的展示；
* ViewModel：负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；

Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。

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

答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。

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
beforeCreate：在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法

create：data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作

beforeMount：执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的

mounted：执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行

beforeUpdate： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步

updated：页面显示的数据和data中的数据已经保持同步了，都是最新的

beforeDestory：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁

destroyed： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。



### v-if 和 v-show 有什么区别？

       v-show 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；而v-if会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；当只需要一次显示或隐藏时，使用v-if更加合理。
### 简述Vue的响应式原理

       当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。
![vue响应原理](/vueyl.jpg)
### Vue中如何在组件内部实现一个双向数据绑定？

原理：采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。

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
  我们在父组件中做了两件事，一是给子组件传入props，二是监听input事件并同步自己的value属性。那么这两步操作能否再精简一下呢？答案是可以的，你只需要修改父组件：
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
　　　　eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。（虽然也有不少人推荐直接用VUEX，具体来说看需求咯。技术只是手段，目的达到才是王道。）

### Vue的路由实现：hash模式 和 history模式

hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
　　　　特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
　　　　　　hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。

history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”

### vue中 key 值的作用
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。

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
include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、正则表达式、数组。当使用正则或者是数组时，要记得使用v-bind 。

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
第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。

第二种：路由懒加载(使用import)。

第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

### vue-router 有哪几种导航钩子

答：三种，
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子
第三种：单独路由独享组件

### $route 和 $router 的区别
答：$router是VueRouter的实例，在script标签中想要导航到不同的URL,使用$router.push方法。返回上一个历史history用$router.to(-1)
$route为当前router跳转对象。里面可以获取当前路由的name,path,query,parmas等。

### vue常用的修饰符
答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听，事件发生的时候会调用
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

原因在于在Vue实例创建时， obj.b 并未声明，因此就没有被Vue转换为响应式的属性，自然就不会触发视图的更新，这时就需要使用Vue的全局api—— $set()：
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

在浏览器与服务器进行通信时，主要是通过 HTTP 进行通信。浏览器与服务器需要经过三次握手，每次握手需要花费大量时间。而且不同浏览器对资源文件并发请求数量有限（不同浏览器允许并发数），一旦 HTTP 请求数量达到一定数量，资源请求就存在等待状态，这是很致命的，因此减少 HTTP 的 请求数量可以很大程度上对网站性能进行优化。

 

CSS Sprites

      国内俗称CSS精灵，这是将多张图片合并成一张图片达到减少HTTP请求的一种解决方案，可以通过CSS的background属性来访问图片内容。这种方案同时还可以减少图片总字节数。

 

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
es6 以前，都是用 var 关键字来标识，这样有个变量提升的坑。在 es6 中，添加了 let 和 const 两个关键字，let 定义变量，const 定义常量，并且添加了块级作用域

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
使用 const {a,c} = obj 这种方式获取对象的属性的方法时，大括号中的变量对象对象的属性，使用 const [x,y,z] = arr 这种方式获取数组的元素，中括号中的变量的索引对应真正数组的索引，即：x 是第一个，对应 arr 数组中的第一个，z 是数组的第三个，对应 arr 数组的第三个。

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
变量 item 其实是在循环外部，咱们预想是访问不到的，但是实际是可以访问到的，以上写法相当于将 var item 提到最前面，就好理解了，这样子的话变量 item 相当于是在全局都可以访问的，这与我们的预期是相违背的。

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
因为有块级作用域的概念，所以循环中的 key 变量只在循环中能使用,循环里面的 key 和 外面的 key 不是同一个东西

### 函数默认参数

首先来设定一个场景：有一个函数 test ，可能给它传一个参数，也可能传两个，传一个参数时，第二个参数给个默认值，在 es6 以前这样判断：

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
es6的写法也就是在内部做了一个判断：如果参数的个数大于1，并且第二个参数不是undefined，那么就将第二个参数赋值给 b，否则b = 0。这个跟上面的 es6 之前的判断是一致的，这种写法特别简单、易读！

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

很明显，map 中的 this 是 window 对象。这是 js 的一个大坑，在这个情况下，通过 call 绑定了一个 this 是 { a: 100 } 这个对象，但是 map 中的 this 却是 window 。这是因为 this 的取值是在其调用时决定的，而 map 中的函数相当于调用一个普通函数，而普通函数的作用域在全局，其 this 就指向了 window 。而箭头函数很好的解决了这个问题，箭头函数中的 this 与其上一个作用域的 this ，在此处中，map 中的 上一级作用域是 test 函数，而 test 函数的 this 是 { a: 100 } 对象。

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
在现在多个人开发同一个项目很常见，每个人负责不同的模块，还有可能会几个人使用同一个模块，在这种情况下，模块化就很重要！其实使用起来也很简单，比如说有模块A、B、C三个 js 文件，各自在其中定义好自己的代码，使用 export 关键字导出自己的东西，别人使用时用 import 关键字引用即可，模块化的处理工具有 webpack、rollup 等。如果你有兴趣，详情可以看看[ES6 模块化](https://blog.csdn.net/wwwqiaoling/article/details/104375012)如何使用，开发环境如何打包，欢迎指正。

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

js 定义构造函数和 es6 中的 class 的所实现目的一样的，但是 class 就看起来更加清晰、易懂！在 js 的构造函数中，在其原型上定义方法从而实现，而 class 中直接在 { } 中写函数就可以直接实现这个类中有这个函数了。
本质：
其实 class 的本质其实是一个语法糖：
理解起来就是，二者实现的东西是一样的，只是有个的写法更简洁、易读、易懂。对应一下，其实 class 所实现的东西和 js 的构造函数是一样的，class 的实现原理和 js 构造函数是一样的，都是通过原型实现的。

```javascript
console.log(typeof MathPlus); // function
console.log( MathPlus.prototype === testAddEs6.__proto__ ); // true
console.log( MathPlus === MathPlus.prototype.constructor ); // true

```
以上的结果和 js 的构造函数是一致的，MathPlus 这个 class 的本质是一个function ，其实例 testAddEs6 有一个隐式原型 __proto__ ，并且和 MathPlus 的 prototype 三等。

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
在项目中涉及到网络请求资源时，就要调用后端提供的接口，常用的jQuery、axios、fetch等，用的最多的就是 axios 调用接口之后就有回调函数，成功与否都有相应的回调函数，这个是异步的，但是当请求比较复杂时，会出现回调地狱（callback hell），比如说：根据接口1 获取 data1 ，在其中调用接口2 获取data 3…，用 promise 就很简单，至少看起来不会那么复杂。
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
getData 函数中，返回了一个 promise 实例，resolve 表示成功时调用的回调函数，reject 表示失败时调用的回调函数。那么，对于上面比较复杂的情况就可以写成：

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








