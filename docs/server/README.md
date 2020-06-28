
# Server
## flask
### 路由
```python
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/article')
def read():
    return render_template('article-user.html')

@app.route('/user/reg',methods=['POST','GET'])
def register():
    return "good"
# 查询参数
@app.route('/test')
def test():
    username = request.args.get('username')
    password = request.args.get('password')
    return "你的用户名：%s,密码：%s"%(username,password)
# 路由参数地址,加一个int解决参数类型的限制
@app.route('/article/<int:articleid>-<page>')
def article(articleid,page):
    return f"你正在访问编号为：{articleid}的文章,目前是第{page}页"
# post请求正文参数
@app.route('/user/login')
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    if username=='wangmaoming' and password=='111':
        return "登陆成功！！！"
    else:
        return "登陆失败"

```
 ### RESTful风格规范

 | 接口功能   | 请求类型   | 接口定义   |备注   |
|--------|--------|--------|--------|
| 查询所有文章 | GET |/article |地址只能是/article，不能附加其他内容，例如，/article/all不是有效的RESTful |
| 查询一篇文章 | GET |/article/id |通过指定文章的id进行查询 |
| 新增一篇文章 | POST |/article |地仍然是/article，没有附加其他内容，非RESTful的地址风格很可能写成/article/add，这个地址没有正确描述资源 |
| 删除一篇文章 | DELETE |/article/id |指定删除哪一篇文章，请勿使用/article/delete/id |
| 修改一篇文章 | PUT |/article/id 对某个ID的文章进行更新，更新的数据由PUT请求的正文指定，请勿使用/article/update/id|

#### 满足RESTful风格的接口地址
```python

@app.route('/article',methods=['GET'])
def view():
    return "获取文章"

@app.route('/article',methods=['POST'])
def add():
    return "新增文章"

@app.route('/article/123',methods=['PUT'])
def get():
    return "读取文章"
@app.route('/article/123',methods=['DELETE'])
def delete():
    return "删除文章"
```

url重定向问题，是HTTP协议本身的功能，重定向302状态码，在响应头里面通过指定location字段告诉浏览器，跳转地址
url_for("系统里面的函数名") redirect(url_for('index')) 或者直接用redirect（'/'）

```python

@app.route('/red')
def red():
    return redirect('/')


@app.route('/redjs')
def redjs():
    html="感谢访问，2秒之后跳转到首页"
    html+="<script>"
    html+="setTimeout(function(){location.href='/';},2000);"
    html+="</script>"
    return html
```
### session 和cookie
 要处理session，必须为app实例设置SECRET_KEY配置参数(app.config['SECRET_KEY']= os.urandom(24))，配置随机数生成器（session id）,再使用session函数进行操作
 [配置参数](https://www.cnblogs.com/XLHIT/p/11171454.html)

 处理cookie，使用response对象来往http的响应中写入满足http协议的cookie要求信息（key,value,age）
 [response](https://www.cnblogs.com/zhuchunyu/p/10466509.html)
```python
@app.route('/sess')
def sess():
    session['username']='wangmaoming'
    session['nickname']='wonder'
    return "存储"
# 利用自定义响应的方式来往浏览器设置cookie
@app.route('/cook')
def cook():
    response=make_response()
    response.set_cookie('username','wangmaoming',max_age=30)
    response.set_cookie('password', '123', max_age=30)
    return response



@app.route('/sc/read')
def scread():
    # return "你当前名字是：%s"%session.get('username')
    return "你当前名字是：%s" % request.cookies.get('username')
```
### MVC模型
![alt 视图控制器02](/MVCmodel@2x.png "视图控制器02")

### 模块化与拦截器
使用Blueprint蓝图对路由进行模块化处理
1.入口文件注册蓝图
```python
# 注册蓝图
app.register_blueprint(demo)
```
2.模块话的文件里面使用蓝图
```python
from flask import Blueprint
demo=Blueprint('demo',__name__)

@demo.route('/demo')
def onedemo():
    return "蓝图设置模块化"
```
### python的代码主要分为三层
1.包（含有__init__.py的文件夹）
2.模块（包下面的.py的源代码/源文件）
3.类class ， 函数，全局变量

### 拦截器
对接口请求进行预先处理，然后交由控制器处理，说白了就是在客户端与服务器控制器中间加了一个拦截器用于审核。
#### 全局拦截器
应用于flask实例（app.py）中，对所有经过当前系统的请求进行拦截检查
a)全局拦截器，要设置好白名单，让无需检验的接口正常访问
b)全局拦截器，由于会检查每一个请求，所以会导致性能的下降，尽量少用
```python 
# 拦截器
@app.before_request
def before():
    url = request.path
    if url == '/sess':
        pass
    #     如果用户登陆session['islogin'] = 'true'，不拦截
    elif session.get('islogin') != 'true':
        return "没有登陆无法访问"
    else:
        pass
# 拦截器可以搞一个白名单，就是可以不用验证就通过
    pass_list=['/','/reg','/login','/vcode','/sess']
    suffix=url.endswith('.png')or url.endswith('.jpg'or url.endswith('.css')or url.endswith('.js'))
    if url in pass_list or suffix:
        pass
    else:
        return "开始实现拦截"
```
#### 控制器拦截器（模块拦截器）
只针对某个模块进行拦截，应用于blueprint模块
```python
from flask import Blueprint, request

demo=Blueprint('demo',__name__)
# 定义一个模块拦截器
@demo.before_request
def demo_before():
    url = request.path
    if url == '/demo1':
        return "无法访问"

@demo.route('/demo1')
def onedemo1():
    return "蓝图设置模块化1"

@demo.route('/demo2')
def onedemo2():
    return "蓝图设置模块化2"
```
### 模版引擎-Jinja2
[看这个就够了](https://blog.csdn.net/u011146423/article/details/84314335)

### pymysql
```python
import pymysql

# 所有的i/o操作：文件，数据库，网络等均有下面三步操作
# 1连接数据库.
conn=pymysql.connect(host='127.0.0.1',port=3306,user='root',password='wangmaoming218',charset='utf8',database='woniunote',autocommit=True)
# 2执行sql语句
# a.实例话一个游标对象，
cursor=conn.cursor()

# b.定义sql语句
# sql="select * from users"
# #c.通过游标执行
# cursor.execute(sql)
# # d.处理执行结果
# result=cursor.fetchall()
# for row in result:
#     print(row[6])
# print(result)
#   更新
sql="update users set qq='1072445948' where userid=2"
cursor.execute(sql)
# 提交修改 update,insert,delete
# conn.commit()
# 关闭数据库连接
cursor.close() #关闭游标
conn.close() #关闭数据库对象

```
### 魔术方法（__name__）
```python
class User:
    table_name='users'  #类属性

    def __init__(self):
        self.username='wangmaoming' #实例变量
        self.password = '123'
        self.email = '1072445948@qq.com'
    def method(self,value):
        print("hello %s" % value)
    #     链式操作
    def chain(self):
        print("通过返回当前类的实例进行连续的方法调用")
        return self
    def hello(self):
        print("hello in chain")
        return self
if __name__=='__main__':
    print(User.__dict__) #通过类名可以直接获取到类的属性和方法
    user=User() #实例化User类
    print(user.__class__) #通过实例可以获取到对应的类   <class '__main__.User'>
    print(user.__class__.__dict__)

#     通过__来区分哪些是自定义属性和方法，一般没有__的是自定义的
    for k, v in User.__dict__.items():
        if not k.startswith('__'):
            print(k,v)  #table_name users   method <function User.method at 0x7fdbec9aa050>

    print(User.__name__)  #User

    print(user.__dict__)  #获取实例变量或属性 {'username': 'wangmaoming', 'password': '123', 'email': '1072445948@qq.com'}

    # user.nickname='小王'
    # print(user.__dict__) #添加实例属性{'username': 'wangmaoming', 'password': '123', 'email': '1072445948@qq.com', 'nickname': '小王'}
    # __setattr__魔术方法
    user.__setattr__('nickname','小王')
    print(user.__dict__)  #加实例属性{'username': 'wangmaoming', 'password': '123', 'email': '1072445948@qq.com', 'nickname': '小王'}
    # 全局函数一样可以
    setattr(user,'nickname','小王')
    print(user.__dict__)

    print(user.__getattribute__('nickname')) #小王
    print(user.__getattribute__('method'))
    user.__getattribute__('method')('成都')   #hello 成都

    getattr(user,'method')('北京')  #hello 北京
    # 链式操作
    user.chain().chain().hello().chain()
```
### 自定义ORM框架
1. ORM(Object-Relational Mapping)对象-关系映射，把数据转换成python对象，与python无关，想Java，C都有。
这样就能实现对数据库的操作对象化，减少或者不用编写sql原生语句
2. 数据库重的表 -> python 的类
3. 表中的列 -> 类的属性
4. 表里面的行 ->类的实例，字典对象表述
5. 字典对象的key对应列，value对应值
6. 对增删改查进行封装，
