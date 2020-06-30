
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

```python
import pymysql
from pymysql.cursors import DictCursor


class MySQL:
    # 实例话，创建与数据库之间的连接
    def __init__(self):
        conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='wangmaoming218',
                               charset='utf8', database='woniunote', autocommit=True)
        self.cursor = conn.cursor(DictCursor)

    # 查询
    def query(self, sql):
        self.cursor.execute(sql)
        result = self.cursor.fetchall()
        return result

    def execute(self, sql):
        try:
            self.cursor.execute(sql)
            return 'ok'
        except:
            return 'fail'


class Model:
    # 构造方法，传字典参数作为insert的key,value
    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            self.__setattr__(k, v)
#     通过链式操作指定查询哪些列
    def field(self,columns):
        self.columns =columns #动态增加类实例属性
        return self
    # 带列名查询条件
    def select(self, **where):
        table=self.__class__.__getattribute__(self,'table_name')
        if hasattr(self,'columns'):
            sql = "select %s from %s " % (self.columns,table)
        else:
            sql = "select * from %s " %  table
        if where is not None:
            sql += "where"
            for k, v in where.items():
                sql += " %s='%s' and" % (k, v)
            sql += ' 1=1'
        print(sql)
        result = MySQL().query(sql)
        return result
#     封装新增：insert into table(c1,c2) values(v1,v2)
    def insert(self):
        keys=[]
        values=[]
        for k ,v in self.__dict__.items():
            keys.append(k)
            values.append(str(v))
        sql = "insert into %s(%s) value ('%s')" %(self.table_name,','.join(keys),"','".join(values))
        print(sql)
        result = MySQL().query(sql)
        print(result)

class User(Model):
    table_name='users'
#     调用父类的构造方法
    def __init__(self,**kwargs):
        super().__init__(**kwargs)
class Article(Model):
    table_name='article'
#     调用父类的构造方法
    def __init__(self,**kwargs):
        super().__init__(**kwargs)

user =User()
result=user.field('userid,username').select(userid=1)
print(result)

# class User:
#     table_name = 'users'  # 定义表名
#
#     # 构造方法，传字典参数作为insert的key,value
#     def __init__(self, **kwargs):
#         for k, v in kwargs.items():
#             self.__setattr__(k, v)
#
#     #  **字典参数
#     def select(self, **where):
#         sql = "select * from %s " % self.table_name
#         if where is not None:
#             sql += "where"
#             for k, v in where.items():
#                 sql += " %s='%s' and" % (k, v)
#             sql += ' 1=1'
#         print(sql)
#         result = MySQL().query(sql)
#         return result
#
# #     封装新增：insert into table(c1,c2) values(v1,v2)
#     def insert(self):
#         keys=[]
#         values=[]
#         for k ,v in self.__dict__.items():
#             keys.append(k)
#             values.append(str(v))
#         sql = "insert into %s(%s) value ('%s')" %(self.table_name,','.join(keys),"','".join(values))
#         print(sql)
#         result = MySQL().query(sql)
#         print(result)

# if __name__ == '__main__':
#     # user = User()
#     # result = user.select(userid=2, nickname='sad')
#     # print(result)
#     user =User(username='wmm',password='123',role='user',credit='50')
#     user.insert()

```
### SQLAlchemy
数据库连接以及通过代码创建一个userx表。如果数据库已经创建好了没必要又写在代码中。
```python
# 建立与mysql的连接
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, session, scoped_session

engine =create_engine('mysql+pymysql://root:wangmaoming218@localhost/woniunote')

# 定义模型类继承的父类及数据连接会话
DBsession=sessionmaker(bind=engine)
dbsession=scoped_session(DBsession)  #线程安全的scoped_session
Base=declarative_base()

#定义模型类
class Users(Base):
    __tablename__ ="userx"
#     假如数据库没有去创建表，我们可以在这里通过代码创建，如果需要在SQLAlchemy里面直接创建表结构，则详细定义列
    userid =Column(Integer,primary_key=True)
    username=Column(String(50))
    password = Column(String(32))
    nickname = Column(String(30))
    qq = Column(String(15))
    role = Column(String(10))
    credit = Column(Integer)
    createtime = Column(DateTime)
    updatetime = Column(DateTime)

# 创建表
Users.metadata.create_all(engine)

```

独立的SQLAlchemy数据库操作

```python
# 建立与mysql的连接
from sqlalchemy import create_engine, Column, Integer, String, DateTime, MetaData, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, session, scoped_session

engine = create_engine('mysql+pymysql://root:wangmaoming218@localhost/woniunote')

# 定义模型类继承的父类及数据连接会话
DBsession = sessionmaker(bind=engine)
dbsession = scoped_session(DBsession)  # 线程安全的scoped_session
Base = declarative_base()
md = MetaData(bind=engine)


# 定义模型类
# class Users(Base):
#     __tablename__ ="userx"
# #     假如数据库没有去创建表，我们可以在这里通过代码创建，如果需要在SQLAlchemy里面直接创建表结构，则详细定义列
#     userid =Column(Integer,primary_key=True)
#     username=Column(String(50))
#     password = Column(String(32))
#     nickname = Column(String(30))
#     qq = Column(String(15))
#     role = Column(String(10))
#     credit = Column(Integer)
#     createtime = Column(DateTime)
#     updatetime = Column(DateTime)
#
# # 创建表
# Users.metadata.create_all(engine)

class Users(Base):
    __table__ = Table('users', md, autoload=True)

class Article(Base):
    __table__ = Table('article', md, autoload=True)

if __name__ == '__main__':
    # result=dbsession.query(Users).filter(Users.userid>2).all()
    result = dbsession.query(Users).filter_by(userid=2).all()
    for row in result:
        print(row.userid)

    row =dbsession.query(Users).filter(Users.userid<5).first()
    print(row)
    print(row.userid,row.username)

    row = dbsession.query(Users.userid,Users.username).filter(Users.userid < 5).first()
    print(row)

#     新增
#     user =Users(username='wmm1',password='123',role='user',credit='50')
#     dbsession.add(user)
#     dbsession.commit()   #手动提交

#     更新，需要查询出来要修改的行，再进行修改
#     row=dbsession.query(Users).filter_by(userid=4).first()
#     row.username='daskdas'
#     dbsession.commit()

    row=dbsession.query(Users).filter_by(userid=4).delete()
    dbsession.commit()

```

### flask_sqlalchemy(flask集成SQLAlchemy)

第一步在main.py文件连接数据库并实例话db对象

```python
from flask import Flask, render_template, request, url_for, redirect, session, make_response
import os

from flask_sqlalchemy import SQLAlchemy
import pymysql
pymysql.install_as_MySQLdb()


app = Flask(__name__, template_folder='template', static_url_path='/', static_folder='resource', )
app.config['SECRET_KEY'] = os.urandom(24)
# 使用集成方式处理SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:wangmaoming218@localhost/woniunote?charset=utf8'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
# 实例话db对象
db=SQLAlchemy(app)


if __name__ == '__main__':
    # 局部引用demo.py，因为只有在当__name__ == '__main__'
    # 注册蓝图
    from controller.demo import *
    app.register_blueprint(demo)

    from controller.user import *
    app.register_blueprint(user)

    app.run(debug=True)
```

第二步，在module下建一个users.py文件，导入db构建模型类，以及数据库操作方法
```python
from sqlalchemy import Table, MetaData

from main import db

class Users(db.Model):
    __table__ = Table('users', MetaData(bind=db.engine), autoload=True)

    def find_user_by_id(self,userid):
        row =db.session.query(Users).filter(Users.userid==userid).first()
        return row
```

第三步，生成一个接口，向这个接口输出我们需要的信息
```python
from module.users import  Users

from  flask import Blueprint
user=Blueprint('user',__name__)

@user.route('/user')
def user_demo():
    users=Users()
    row=users.find_user_by_id(1)
    return row.username

```
### SQLAlchemy基础查询
Flask框架本身是最小化Web服务内核，表与表之间的关系，不一定要定义在数据库中，心中有关系就行。
（数据库为了维护主外键关系，会增加额外消耗）。
删除数据时，尽量使用软删除（设置标识），而不是直接硬删除（Delete From）
```python
.first()  直接返回一行数据对象
.all() 直接返回包含多条数据对象的列表
.filter_by(a=b,x=y)只适用于等值查询，其参数为字典参数的传值方式
.filter()适用于复杂查询条件的对比，其参数为条件运算
查询过程中，可以使用db.session的方式进行查询（支持多表），也可以使用Model.query的方式进行查询（不支持多表），所以优先使用db.session
 def find_user_by_id(self,userid):
        row =db.session.query(Users).filter(Users.userid==userid).first()
        return row
```
基础查询语句
```python
result=dbsession.query(Users).all()
result = dbsession.query(Users.userid,Users.username).all()
result = dbsession.query(Users).filter_by(userid=1,qq='11111111').all()
result = dbsession.query(Users).filter(or_(Users.userid==1, Users.qq=='00')).all()
# select *from users limit 3
result = dbsession.query(Users).limit(3).all()
#     select *from users limit 3,1 表示从3开始1条数据
result = dbsession.query(Users).limit(1).offset(3).all()
count=dbsession.query(Users).filter(Users.userid<4).count()
# 去重复 select distinct(qq) from users
result =dbsession.query(Users.qq).distinct(Users.qq).all()
# 倒序
result = dbsession.query(Users).order_by(Users.userid.desc()).all()
# 模糊查询
result = dbsession.query(Users).filter(Users.username.like('%w%')).all()
# 分组,也可以去重 group by
# result = dbsession.query(Users).group_by(Users.role).all()
# result = dbsession.query(Users).group_by(Users.role).having(Users.userid>2).all()
# 聚合函数 min,max,avg,sum
result = dbsession.query(func.sum(Users.credit)).first()
# > < == != in not

print(count)
print(result)
# print(result[0].username)   #[<__main__.Users object at 0x7fb934b9e0d0>]

```

