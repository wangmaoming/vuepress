
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

