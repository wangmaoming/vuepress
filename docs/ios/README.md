
# IOS
## 视图控制器
### 基本用法
```objectivec
   CGRect rect1 = CGRectMake(30, 50, 200, 200);//初始化一个矩形显示区域对象，
    UIView *view1 = [[UIView alloc] initWithFrame:rect1];//创建一个视图对象
    view1.backgroundColor=[UIColor brownColor];//颜色设置
    
    CGRect rect2 = CGRectMake(90, 120, 200, 200);//初始化一个矩形显示区域对象，
    UIView *view2 = [[UIView alloc] initWithFrame:rect2];//创建一个视图对象
    view2.backgroundColor=[UIColor purpleColor];//颜色设置
    
    [self.view addSubview:view1];//添加到视图控制器的根视图
    [self.view addSubview:view2];//添加到视图控制器的根视图
视图的层次（父子）

UIView *view1 = [[UIView alloc] initWithFrame:CGRectMake(20, 80, 280, 280)];
    view1.backgroundColor = [UIColor redColor];
    [self.view addSubview:view1];
    
    UIView *view2 = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 200, 200)];
    view2.bounds = CGRectMake(-40, -20, 200, 200);//设置视图本地坐标系统中的位置和大小，会影响子视图的位置和显示
    view2.backgroundColor = [UIColor yellowColor];
    [self.view addSubview:view2];//添加到视图控制器的根视图
    
    UIView *view3 = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
    view3.backgroundColor = [UIColor blueColor];
    [view2 addSubview:view3];
![alt 视图控制器01](/shitu01.png "视图控制器01")

视图的基本添加删除操作
   CGRect rect1 = CGRectMake(30, 50, 200, 200);//初始化一个矩形显示区域对象，
    UIView *view1 = [[UIView alloc] initWithFrame:rect1];//创建一个视图对象
    view1.backgroundColor=[UIColor brownColor];//颜色设置
    [self.view addSubview:view1];
    
    UIButton *btAdd = [[UIButton alloc] initWithFrame:CGRectMake(30, 350, 80, 30)];//设置一个按钮
    btAdd.backgroundColor =[UIColor grayColor];//添加一个按钮颜色
    [btAdd setTitle:@"Add" forState:UIControlStateNormal];//设置按钮正常状态下的标题，其他状态还包括按钮被按下等状态
    [btAdd addTarget:self action:@selector(addView) forControlEvents:UIControlEventTouchUpInside];//给按钮绑定点击事件，这样点击按钮时，将执行添加视图方法
    [self.view addSubview:btAdd];//将按钮添加到视图控制器的根视图
    //切换试图顺序
    UIButton *btBack = [[UIButton alloc] initWithFrame:CGRectMake(120, 350, 80, 30)];//设置一个按钮
    btBack.backgroundColor =[UIColor grayColor];//添加一个按钮颜色
    [btBack setTitle:@"Switch" forState:UIControlStateNormal];//设置按钮正常状态下的标题，其他状态还包括按钮被按下等状态
    [btBack addTarget:self action:@selector(bringViewBack) forControlEvents:UIControlEventTouchUpInside];//给按钮绑定点击事件，这样点击按钮时，将交换视图的层次
    [self.view addSubview:btBack];//将按钮添加到视图控制器的根视图
    
    UIButton *btRemove = [[UIButton alloc] initWithFrame:CGRectMake(210, 350, 80, 30)];//设置一个按钮
    btRemove.backgroundColor =[UIColor grayColor];//添加一个按钮颜色
    [btRemove setTitle:@"Remove" forState:UIControlStateNormal];//设置按钮正常状态下的标题，其他状态还包括按钮被按下等状态
    [btRemove addTarget:self action:@selector(removeView) forControlEvents:UIControlEventTouchUpInside];//给按钮绑定点击事件，这样点击按钮时，将交换视图的层次
    [self.view addSubview:btRemove];//将按钮添加到视图控制器的根视图
}
    
- (void) addView
{
    CGRect rect = CGRectMake(60, 90, 200, 200);//初始化一个矩形显示区域对象，
    UIView *view = [[UIView alloc] initWithFrame:rect];//创建一个视图对象
    view.backgroundColor=[UIColor purpleColor];//颜色设置
    view.tag=1;//给视图指定一个标志，可通过标志找到视图
    [self.view addSubview:view];//将按钮添加到视图控制器的根视图
}

- (void) bringViewBack
{
    UIView *view = [self.view viewWithTag:1];//通过刚刚设置的标志找到新添加的视图
    [self.view sendSubviewToBack:view];//将新添加的视图移到所有兄弟视图的后方
}

- (void) removeView
{
    UIView *view = [self.view viewWithTag:1];//通过刚刚设置的标志找到新添加的视图
    [view removeFromSuperview];//将新添加的视图从父视图中删除
    
}
```
视图编写相框
```objectivec
UIImage *image = [UIImage imageNamed:@"01"];//加载图片
    UIImageView *imageView = [[UIImageView alloc] initWithImage:image];//图片的容器
    imageView.frame = CGRectMake(24, 80, 272, 410);//初始化图像位置
    imageView.layer.borderWidth=10;//设置图像视图的图层边框宽度
    imageView.layer.borderColor= [UIColor lightGrayColor].CGColor;//通过访问视图图层属性设置相关属性
    [self.view addSubview:imageView];//将图层添加到视图控制器的根视图
![alt 视图控制器02](/shitu02.png "视图控制器02")
添加圆角效果
UIImage *image = [UIImage imageNamed:@"01"];//加载图片
        UIImageView *imageView = [[UIImageView alloc] initWithImage:image];//图片的容器
        imageView.frame = CGRectMake(24, 80, 300, 300);//初始化图像位置
        imageView.layer.cornerRadius=150;//设置圆角为一半
        imageView.layer.masksToBounds=true;//设置图像视图层的遮罩覆盖属性，进行边界裁切
        [self.view addSubview:imageView];//将图层添加到视图控制器的根视图
```
![alt 视图控制器03](/shitu03.png "视图控制器03")
图像阴影效果
```objectivec
UIImage *image = [UIImage imageNamed:@"01"];//加载图片
    UIImageView *imageView = [[UIImageView alloc] initWithImage:image];//图片的容器
    imageView.frame = CGRectMake(36, 80, 272,164);//初始化图像位置
    imageView.layer.shadowColor =[UIColor blackColor].CGColor;//阴影颜色为黑色
    imageView.layer.shadowOffset = CGSizeMake(10.0, 10.0);//设置横向和纵向偏移
    imageView.layer.shadowOpacity=0.45;//阴影透明度
    imageView.layer.shadowRadius=10;//阴影半径大小
    [self.view addSubview:imageView];
```
![alt 视图控制器04](/shitu04.png "视图控制器04")  
渐变填充
```
CGRect rect =CGRectMake(30, 60, 200, 200);
    UIView *view = [[UIView alloc] initWithFrame:rect];//创建一个视图对象
    CAGradientLayer *viewlayer =[CAGradientLayer layer];//新建一个渐变层
    viewlayer.frame = view.frame;//设置渐变层的位置和尺寸，与视图对象一致
    CGContextRef fromcolor = [UIColor yellowColor].CGColor;//渐变的开始颜色
    CGContextRef midcolor = [UIColor redColor].CGColor;//中间颜色
    CGContextRef tocolor = [UIColor purpleColor].CGColor;//结束颜色
    
    viewlayer.colors = [NSArray arrayWithObjects:(__bridge id)(fromcolor), midcolor,tocolor,nil];//将渐变层颜色数组属性，设置y为由三个颜色所构建的数组
    [view.layer addSublayer:viewlayer];//将配置好的渐变层添加到视图对象层
    [self.view addSubview:view];
```
![alt 视图控制器05](/shitu05.png "视图控制器05")    
## 基本语法
### import指令
1）以#开头，是一个预处理指令，预处理指令表示在编译之前执行
2）作用：是#include指令的增强版。用于包含文件。将文件的内容拷贝到写指令的地方。
3）增强：同一个文件无论#import多少次，只会包含一次该文件
如果#include指令执行多少次就会包含多少次，当然想要实现与#import一样的效果必须配合条件编译指		 令来实现。
4）简要原理：#import指令在包含文件的时候，底层会先判断这个文件是否被包含，如果被包含就会略过，否则会包含。 
### 框架
1）一个功能集  ——苹果或者第三方事先将一些程序在来发程序的时候经常要用到的功能事先写好。把这些功能封装在1个1个的类或者函数之中，这些函数和类的集合叫做框架。
2）Foundation框架
Foundation：基础，这个框架提供了一些最基础的功能 输入输出、一些数据类型
@autoreleasepool是自动释放池
### NSLog函数
1）作用：是printf函数的增强版，向控制台输出信息
2）语法：
                   NSLog(@"格式控制字符串",变量列表)
      最简单的语法：
                  NSLog(@"要输出的信息")   
3）增强：
       a.输出一些调试相关的信息    【时间、程序名称、进程编号：线程编号】NSLog输出的信息
       b.会自动换行
       c.OC新增了一些数据类型
### NSString
OC字符串常量必须使用1个@前缀符号，
NSString类型的指针变量，只能储存OC字符串的地址
NSString *str;指针变量前面要加一个星号
NSString *str=@"jack";
### 注意
OC字符串必须加@符号——NSLog(@"你好")
如果要使用占位符做字符串拼接要使用%@
NSLog(@"你好，我是%@",str)
NS前缀
 OC语言的发展：NextStep——》Cocoa——》Foundation框架之中
就是以NextStep命名的前缀
### @符号
1）将C字符串转换为OC字符串
"jack" =》 @"jack"
2）OC中的绝大部分关键字都是以@符号开头

1.OC程序的命令行-编译、连接、执行。
1）.在.m文件中写上符合OC语法规范的源代码
2）.使用编译器将源代码编译为目标文件
     cc  -c xx.m
     a.预处理
     b.检查语法
     c.编译
3）.链接
     cc  xx.o
     如果程序中使用到框架中的函数或者类，那么在链接的时候，必须告诉编译器去那个框架中找这个函数或者类。 
     cc  xx.o  -framework  框架名
     程序中用到那个框架中的功能，那么就在那个地方告诉编译器 
4）.链接成功以后，就会生成1个a.out可执行文件，执行就可以
2.OC程序和C程序各个阶段的后缀名对比
              源文件             目标文件         可执行文件
C                .c                        .o                    .out
OC             .m                        .o                    .out
3.OC中的数据类型
1）.OC中支持C语言中的所有数据类型。
a.基本数据类型
int 	double	float	 	char
b.构造类型
数组		结构体	枚举
c.指针类型
int  *p1
d.空类型
void
e.typedef自定义类型
给已有的数据类型去一个别名
2）.BOOL类型
1）可以存储YES或者NO中任意一个数据，要大写
2）.一般情况下BOOL类型的变量用来存储条件表达式的结果是否成立
3）.BOOL的本质
typedef  signed char BOOL
实际上BOOL类型的变量 是一个有符号的char变量

#define YES ((BOOL)1)     		
#define NO   ((BOOL)0)
 
YES   实际是1
NO     实际是0
3）.Boolean类型
a.可以存储true 或者flase
b.一般情况下Boolean类型的变量用来存储条件表达式的结果是否成立
c.本质
    typedef  unsigned char Boolean   是一个无符号的char类型
       define YES   1     		
define NO     0
4）.class类型、类
5）.id类型  万能指针
6）.nil与NULL差不多
7）.SEL方法选择器
8）.block代码段类型
面向过程与面向对象
其实是解决同一个问题的不同的两种思路。注重的过程或者对象
1）.面向过程
在遇到一个需求的时候，实现这个需求的每一个步骤都是自己写代码亲自一步一步的走
2）.面向对象
在遇到一个需求的时候，不用亲自去实现，而是找一个专门做这个事情的人来帮助我们完成
### 优缺点分析：
C语言是一门面向过程的语言
OC语言是一门面向对象的语言

面向过程的缺点：后期的维护和修改不方便
面向对象的优点：后期的维护和修改十分方便
面向对象的思维解决问题
当你遇到一个需求的时候，不要亲自去实现。
1）.先看看有没有现成的人专门做这件事情。例如框架。
2）.如果没有就自己造一个拥有这样功能的人。可以多次使用
### 类和对象
对象：是现实生活中一个具体存在，看得见、摸得着，拿过来就可以用
类：物以类聚  人以群分
是对一群具有相同特征或者行为的事物的统称
类和对象的关系：
类是模板，类的对象是根据这个模板创建出来的
类模板中有什么，对象中就有什么 绝不可能多 也绝不可能少
如何设计有一个类
类的作用：用来描述一群具有相同特征和行为的事物
设计类的三要素：
类的名字：要描述的这类事物叫什么名字
这类事物具有相同的特征。拥有什么
这类事物具有的共同的行为，做什么
如何找到类
名词提炼法：分析整个业务流程，分析出现哪些名词，这些名词就是类
先有类还是先有对象：
从现实的角度  一定是先有对象再有类
从现实的角度  一定是先有类在有对象
 定义类的语法
a.写在源文件之中 不要写在man函数中
b.类的定义分为两个部分
类的声明
```objectivec
@inteface 类名  ：NSObject
{
//这类事物具有相同的特征，将他们定义为变量
}
//功能就是一个方法，将方法的声明写在这儿
@end
```
类的实现
```objectivec
@implementation  类名
将方法的实现写在这里
@end
```
》几点注意：
a.类必须要有声明和实现，
b.类名用你描述的事物的名称来命名，不过名字必须是首字母大写
c.用来表示事物特征的变量（属性、成员变量、实例变量等叫法），要放在{}之中
d.为类定义属性的时候，定义的属性名一下划线开头，是一种开发规范
e.类是没法直接使用的，非要使用这个类的话，要先使用这个类中的一个具体存在，再使用这个	     			对象
》如何创建一个类的对象呢？
语法：类名 *对象名 = [类名 new]
在main里面写
Person *p1 = [Person new]
》如何使用对象
如何去访问对象里面的属性：
1）.默认情况下，不允许直接访问对象里面的属性
       如果允许对象的属性可以被外界访问，那么就在声明属性的时候加一个@public关键字
2）.访问对象的属性的方式
平时使用：
对象名->属性名=值；//赋值
对象名->属性名；//找到属性名的值
p1->_name=@"小王"
另外一种方法：
(*对象名).属性名=值；
(*p1)._name=@"小王"

### 类的声明
```objectivec
@interface Person :NSObject
{
@public			//允许对象访问属性
NSString *_name;
int _age;
float _height;
}
方法的声明写的位置
@end
类的实现
@implementation Person
方法的实现
@end
```
占位符：%@    %d
方法的声明实现调用
方法和函数都表示对象的一个功能，OC的行为我们用方法来表示
1）无参数的方法
声明：
位置：在@interface Person :NSObject{}之外
语法：- (返回值类型)方法名称
- (void)run   //该方法如果没有返回值没有返回值，则使用void
实现：
位置：在@implementation Person之中
语法：将方法的声明拷贝到@implementation之中，去掉分号，追加一个大括号，在大括号中写
- (void)run{
NSLog(@"我是人，我在跑")
}
调用：
a.方法是无法直接调用的，因为类是不能直接使用的，必须要先创建对象。那么这个对象中就有类中的属性和方法了  就可以调用对象的方法了
b.调用对象的方法：
[对象名 方法名]
Person *p1 = [Person new]//声明一个对象
[p1 run]//调用 
2）带一个参数的方法
声明：
位置：在@interface Person :NSObject{}之外
语法：- (返回值类型)方法名称:(参数的类型)形参的名称
- (void)eat:(NSString *) foodName  //NSString指针加*，定义了一个没有返回值的方法，方法的名字叫eat:,有一个参数，类型是NSString * 参数名foodName 
实现：
位置：在@implementation Person之中
语法：将方法的声明拷贝到@implementation之中，去掉分号，追加一个大括号，在大括号中写
```objectivec
- (void)eat:(NSString *) foodName{
 	NSLog(@"你给的%@好吃"，foodName)
}
```
调用：
a.方法是无法直接调用的，因为类是不能直接使用的，必须要先创建对象。那么这个对象中就有类中的属性和方法了  就可以调用对象的方法了
b.调用对象的方法：
[对象名 方法名：实参]
Person *p1 = [Person new]//声明一个对象
[p1 eat:@"红烧排骨"]//调用 
3)带多个参数的方法
声明：
位置：在@interface Person :NSObject{}之外
语法：- (返回值类型)方法名称:(参数的类型)形参名称1 :(参数的类型)形参名称2  :(参数的类型)形参名称3 
- (int)sum:(int) num1 :(int) num2 
表示声明了1个方法，这个方法的返回值类型是int类型的，方法名称叫做 sum: :
有两个参数 参数类型都是int类型 参数名称叫做num1 num2
实现：
位置：在@implementation Person之中
语法：将方法的声明拷贝到@implementation之中，去掉分号，追加一个大括号，在大括号中写
- (int)sum:(int) num1 :(int) num2 {
 	int num3=num1+num2;
return num3
}
调用：
a.方法是无法直接调用的，因为类是不能直接使用的，必须要先创建对象。那么这个对象中就有类中的属性和方法了  就可以调用对象的方法了
b.调用带多个参数的语法：
[对象名 方法名：实参1 ：实参2]
Person *p1 = [Person new]//声明一个对象
int sum = [p1 sum:10 :20]//调用 
NSLog(@"sum=%d",sum)
4)带参数的方法声明的规范：
1）如果方法只有一个参数，要求最好这个方法的名字叫做xxxWith:  或者xxxWithxxx
      这样写就会看起来像一条完整的语句，提高代码的阅读性
2)如果方法有多个参数，方法名最好是
      方法名With:(参数类型)参数名称1 and:(参数类型)参数名称2  and:(参数类型)参数名称3
      - (int)sumWith:(int) num1 and :(int) num2 
    更详细的写法：
  方法名With参数1:(参数类型)参数名称1 and参数2:(参数类型)参数名称2  
      - (int)sumWithNum1:(int) num1 andNum2 :(int) num2 
## 常用控件
### Button控件
```objectivec
    bt1.frame =  CGRectMake(130,80,40,40);//设置按钮位置
    UIButton *bt2 = [UIButton buttonWithType:UIButtonTypeRoundedRect];//设置一个普通的圆角按钮
    bt2.frame = CGRectMake(80, 180, 150, 44);
    bt2.backgroundColor = [UIColor purpleColor];//设置按钮的背景色
   bt2.tintColor = [UIColor yellowColor];//设置按钮的前景颜色
    [bt2 setTitle:@"按钮2" forState:UIControlStateNormal];//设置按钮的标题文字
    [bt2 addTarget:self action:@selector(buttontap:) forControlEvents:UIControlEventTouchUpInside];//给按钮绑定点击的动作
    UIButton *bt3 = [UIButton buttonWithType:UIButtonTypeRoundedRect];//设置一个普通的圆角按钮
    bt3.frame = CGRectMake(80, 280, 150, 44);
    bt3.backgroundColor = [UIColor brownColor];//设置按钮的背景色
    bt3.tintColor = [UIColor whiteColor];//设置按钮的前景颜色
    [bt2 setTitle:@"按钮3" forState:UIControlStateNormal];//设置按钮的标题文字
    bt3.layer.masksToBounds=YES;//给按钮添加边框效果
    bt3.layer.cornerRadius=10;//设置圆角半径
    bt3.layer.borderWidth=4;//宽度
    bt3.layer.borderColor=[UIColor lightGrayColor].CGColor;//设置按钮层边框的颜色浅灰

    [self.view addSubview:bt1];
    [self.view addSubview:bt2];
    [self.view addSubview:bt3];
--------------------------------------------
- (void) buttontap:(UIButton *)button
{
   UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"信息" message:@"警告！！！" preferredStyle:UIAlertControllerStyleAlert];//警告弹出窗口
   UIAlertAction *okaction =[UIAlertAction actionWithTitle:@"关闭" style:UIAlertActionStyleDefault handler:nil];//创建一个按钮，作为提示窗口的q确定按钮，当用户点击该按钮时，将关闭提示窗口
   [alert addAction:okaction];//添加到提示窗口
   [self presentViewController:alert  animated:YES completion:nil];//
}
```
### 图片按钮
```objectivec
    UIButton *bt2 = [UIButton buttonWithType:UIButtonTypeRoundedRect];//设置一个普通的圆角按钮
    bt2.frame = CGRectMake(31, 180, 150, 44);
    UIImage *image = [UIImage imageNamed:@"01"];
    [bt2 setBackgroundImage:image forState:UIControlStateNormal];//指定为正常状态下的背景图片
    [bt2 setTitle:@"按钮2" forState:UIControlStateNormal];//设置按钮的标题文字
    [bt2 setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];//标题颜色
    bt2.titleLabel.font = [UIFont fontWithName:@"Arail" size:24];//文字字体与大小
    [bt2 addTarget:self action:@selector(buttontap:) forControlEvents:UIControlEventTouchUpInside];//给按钮绑定点击的动作

    [self.view addSubview:bt2];

- (void) buttontap:(UIButton *)bt
{
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"信息" message:@"警告！！！" preferredStyle:UIAlertControllerStyleAlert];//警告弹出窗口
    UIAlertAction *okaction =[UIAlertAction actionWithTitle:@"关闭" style:UIAlertActionStyleDefault handler:nil];//创建一个按钮，作为提示窗口的q确定按钮，当用户点击该按钮时，将关闭提示窗口
    [alert addAction:okaction];//添加到提示窗口
    [self presentViewController:alert  animated:YES completion:nil];//
}
```
## 开发问题
### 解决UITableView中Cell重用
tableView的常规配置，当超出一屏的cell就会标上可重用的标识出列到可重用缓存池中，后面再根据可重用标识来到的可重的cell就会和前面显示同样内容。
```objectivec
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{

    // 定义唯一标识

    static NSString *CellIdentifier = @"Cell";

    // 通过唯一标识创建cell实例

    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];

    // 判断为空进行初始化  --（当拉动页面显示超过主页面内容的时候就会重用之前的cell，而不会再次初始化）

    if (!cell) {
cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier];

    }

    // 对cell 进行简单地数据配置

   cell.textLabel.text = @"text";

  cell.detailTextLabel.text = @"text";

  cell.imageView.image = [UIImage imageNamed:@"4.png"];

  return cell;

}
```
方法一： 取消cell的重用机制，通过indexPath来创建cell 将可以解决重复显示问题 不过这样做相对于大数据来说内存就比较吃紧了,通过不让它重用cell，来解决重复显示
```objectivec
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{

    // 定义唯一标识

    static NSString *CellIdentifier = @"Cell";

    // 通过indexPath创建cell实例 每一个cell都是单独的

    UITableViewCell *cell = [tableView cellForRowAtIndexPath:indexPath];

    // 判断为空进行初始化  --（当拉动页面显示超过主页面内容的时候就会重用之前的cell，而不会再次初始化）

    if (!cell) {
 cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier];

    }

    // 对cell 进行简单地数据配置

    cell.textLabel.text = @"text";

    cell.detailTextLabel.text = @"text";

    cell.imageView.image = [UIImage imageNamed:@"4.png"];

    return cell;

}
```
方法二： 让每个cell都拥有一个对应的标识 这样做也会让cell无法重用 所以也就不会是重复显示了 显示内容比较多时内存占用也是比较多的和方案一类似，同样通过不让它重用cell来解决重复显示，不同的每个cell对应一个重用标识
```objectivec
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath*)indexPath{
    // 定义cell标识  每个cell对应一个自己的标识
    NSString *CellIdentifier = [NSString stringWithFormat:@"cell%ld%ld",indexPath.section,indexPath.row];
    // 通过不同标识创建cell实例
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    // 判断为空进行初始化  --（当拉动页面显示超过主页面内容的时候就会重用之前的cell，而不会再次初始化）


if (!cell) {
cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier];
    }
    // 对cell 进行简单地数据配置
    cell.textLabel.text = @"text";
    cell.detailTextLabel.text = @"text";
    cell.imageView.image = [UIImage imageNamed:@"4.png"];
    return cell;

}
```


方法三： 只要最后一个显示的cell内容不为空，然后把它的子视图全部删除，等同于把这个cell单独出来了 然后跟新数据就可以解决重复显示，同样通过不让他重用cell来解决重复显示，不同的每个cell对应一个标识。
```objectivec
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{

    // 定义唯一标识

    static NSString *CellIdentifier = @"Cell";

    // 通过唯一标识创建cell实例

    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];

    // 判断为空进行初始化  --（当拉动页面显示超过主页面内容的时候就会重用之前的cell，而不会再次初始化）

    if (!cell) {
cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier];

    }else{

//当页面拉动的时候 当cell存在并且最后一个存在 把它进行删除就出来一个独特的cell我们在进行数据配置即可避免

while ([cell.contentView.subviews lastObject] != nil) {

 [(UIView *)[cell.contentView.subviews lastObject] removeFromSuperview];

}

}

// 对cell 进行简单地数据配置

cell.textLabel.text = @"text";

cell.detailTextLabel.text = @"text";

cell.imageView.image = [UIImage imageNamed:@"4.png"];    

return cell;

}
```
### AFNetworking V3.0+ 封装和使用

AFNetworking是一个非常方便的iOS网络请求库，可以轻松实现网络请求。这里只实现AFNetworking框架的一丁点功能，不过也够开发一个app了。可以实现的请求方式：POST / GET / PUT / PATCH / DELETE；也可以加载网络图片等。可回调成功和失败结果。封装类在github上的AFNetworkingDemo上，里面的代码可能随着AFNetworking更新而更新，可下载直接使用。

第一步：从github上面下载AFNetworking库，https://github.com/AFNetworking/AFNetworking 
第二步：将下面的文件导入自己搭建的工程里面! 
![alt AFNetworking01](/AFNetworking01.png "AFNetworking01")
第三步：要新建一个类，用来管理AFNetworking，这个类的代码在网上很多，可以自行查阅，我自己用的是，AFNetworking_RequestData.m和AFNetworking_RequestData.h，新建一个AFNetworking_RequestData文件夹将这两个文件导入。之后我们需要发送网络请求，调用接口的时候就#import "AFNetworking_RequestData.h"。 第四步：配置支持IOS9，Xcode7的http请求 找到Info.plist文件，右键Open As-Source Code。添加NSAppTransportSecurity项。代码如下：
```objectivec 
<key>NSAppTransportSecurity</key> <dict> <key>NSAllowsArbitraryLoads</key> <true/> </dict>  
```
![alt AFNetworking02](/AFNetworking02.png "AFNetworking02")
第五步：在需要进行网络请求的地方，#import "AFNetworking_RequestData.h" 举例：#import "AFNetworking_RequestData.h"

请求url -- #define Game_Timer @"http://live.3g.qq.com/g/s?aid=action_api&module=nba&action=schedule&md=&ds=5&sid=" ///--在点击事件中调用方法，这个方法里面执行下面几句话： [AFNetworking_RequestData requestMethodGetUrl:Game_Timer dic:nil Succed:^(id responseObject) { NSLog(@"%@",responseObject); } failure:^(NSError *error) { NSLog(@"%@",error); }];

#### AFNetWorking 请求头的配置用来完成HTTP Basic Auth的鉴权
AFNetWorking 请求头的配置用来完成HTTP Basic Auth的鉴权

前文中有关于使用AFNetWorking这个代码库来搭建项目的网络协议，但是缺少关于网络请求头方面的知识，现在将其完善。

AFNetWorking 3.0之前设置请求头：
```objectivec 

perationManager *manager = [AFHTTPRequestOperationManager manager];  
 
[manager.securityPolicy = [AFSecurityPolicy policyWithPinningMode:AFSSLPinningModeNone];  
 
[manager.requestSerializer = [AFJSONRequestSerializer serializer];  
 
[manager.responseSerializer = [AFJSONResponseSerializer serializer];  
 
[manager.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Accept"];  
 
[manager.requestSerializer setValue:@"application/json; charset=utf-8" forHTTPHeaderField:@"Content-Type"];

AFNetWorking 3.0之后设置请求头，更加详细，POST和GET都可以：

-(AFHTTPSessionManager*)defaultHTTPManager
{
    // 初始化对象
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    // 返回的格式 JSON
    manager.responseSerializer = [AFJSONResponseSerializer serializer];
    // 可接受的文本参数规格
    manager.responseSerializer.acceptableContentTypes =  [NSSet setWithObjects:@"application/json", @"text/html",@"text/json",@"text/javascript", nil];
    
    // 开始设置请求头
    [manager.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
    [manager.requestSerializer setValue:@"填写系统版本" forHTTPHeaderField:@"sysVersion"];
    [manager.requestSerializer setValue:@"填写设备" forHTTPHeaderField:@"deviceModel"];
    [manager.requestSerializer setValue:@"填写App版本" forHTTPHeaderField:@"appVersion"];
    
    // uid是每个用户对应的ID  cipherText是密码
    NSString * part1 = [NSString stringWithFormat:@"%lld:%@",uid,cipherText];
    // 通过 ID ：密码 的格式，用Basic 的方式拼接成字符串
    NSString * authorization = [NSString stringWithFormat:@"Basic %@",[part1 base64Encode]];
    // 设置Authorization的方法设置header
    [manager.requestSerializer setValue:authorization forHTTPHeaderField:@"Authorization"];
    // 或者直接调用AF的方法进行设置
//    - (void)setAuthorizationHeaderFieldWithUsername:(NSString *)username
//       password:(NSString *)password
//    {
//        NSData *basicAuthCredentials = [[NSString stringWithFormat:@"%@:%@", username, password] dataUsingEncoding:NSUTF8StringEncoding];
//        NSString *base64AuthCredentials = [basicAuthCredentials base64EncodedStringWithOptions:(NSDataBase64EncodingOptions)0];
//        [self setValue:[NSString stringWithFormat:@"Basic %@", base64AuthCredentials] forHTTPHeaderField:@"Authorization"];
//    }
    return manager;

}
```
其实最重要的注释中设置请求部分。

我们可以在前面关于使用AFNetWorking配置网络请求的文章中，AFNetworking_RequestData.m文件中设置头文件。
![alt AFNetworking03](/AFNetworking03.png "AFNetworking03")
此处只是写死的两个头请求。
### AFNetworking3.0带参数请求体以及带请求头
关于使用AFNetworking3.0带参数请求体以及带请求头的自己封装

在这里请允许我发句牢骚，真的难搞，不过我首先说好AFNetworking库应该是一个很好的库了。

首先最重要的一点是：parameters:dic 这句代码中请求体dic我们只需要传NSDictionary *paramDict = @{@"mobile":mobile,@"pwd":pwd};类似的对象就可以了，因为AFNetworking库会自动对其序列化。 我与服务器的约定是在新建两个请求头，一个头是当前时间戳，一个是当前时间戳+请求体+一个固定字符串 困扰我很久的其实是以下几点： 第一点：请求头中[manager.requestSerializer setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];应该是设置application/x-www-form-urlencoded"，而不是application/json" 第二点其实还是请求头，问题就是出在请求体中。NSDictionary *paramDict = @{@"mobile":mobile,@"pwd":pwd};这句话得到的是一个带有空格的对象，所以parameters:dic会是一个带空格的对象。 这里我们需要自己写一个方法将对象拼接成json字符串，

NSDictionary 转Json 去掉换行去掉空格

//系统自带
```objectivec 
NSError * error;
 NSData * jsonData = [NSJSONSerialization dataWithJSONObject:dictionary options:kNilOptions error:&error];
 NSString * jsonStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
 ```
这个会将对象转化成字符串，也就是序列化，但是还是有空格存在，所以是不可取的。

//自定义一个
```
NSString *jsonStr = @"{";
    NSArray * keys = [dictionary allKeys];
    for (NSString * key in keys) {
        jsonStr = [NSString stringWithFormat:@"%@\"%@\":\"%@\",",jsonStr,key,[dictionary objectForKey:key]];
    }
    jsonStr = [NSString stringWithFormat:@"%@%@",[jsonStr substringWithRange:NSMakeRange(0, jsonStr.length-1)],@"}"];
```
那么现在问题又来了，就是，NSDictionary allkeys或者allvalues取出来的数组是乱序的。 使用得到所有的key的数组后是一个无序的集合，如果我们需要正确的显示出它在此之前的顺序 ，可以通过检索来实现。
```objectivec 
NSArray * keys = [dic allKeys];
    NSArray *sortedKeys = [keys sortedArrayUsingSelector:@selector(caseInsensitiveCompare:)];
```
这样子我们就可以去做关于请求头的拼接


### Xcode 控制台打印Unicode字符串转换为中文
Xcode 控制台打印Unicode字符串转换为中文

当通过接口获取到服务器的值时，最恶心的事情发生在控制台。

在Xcode的控制台里直接打印一个数组或者字典,输出的都是一些Unicode的编码,不方便调试. 要想看到中文,则要去获取对应的key或者数组下标.得到具体某一个对象才能看到中文,给我们调试起来很不方便.

而现在可以使用LYLUnicode输出中文, 使用也方便.代码也简洁,就几行代码. 直接把LYLUnicode拖到工程里就能让Xcode支持中文的输出了.

就这么简单的一行输出,不需要任何更改.,使用之前Xcode控制台是打印的Unicode编码, 把LYLUnicode拖进来之后,不做任何操作,输出的内容就是我们想看到的中文了.

Github是个好东西---------- githud地址：https://github.com/allencelee/LYLUnicode 我们通过上面的地址进入，下载下来，我们只取LYLUnicode文件夹就够了，里面就一个.h与.m文件。然后拖到工程中，重新运行就够了，什么都不需要做。

说实话具体原理还是没看懂，如果有兴趣可以去看看这个作者的理解，虽然感觉也没听懂他说的是个什么。 https://www.cnblogs.com/allencelee/p/9400281.html

### 使用Xcode出现警告、错误的解决方法总结


使用Xcode出现警告、错误的解决方法总结

以下是网上总结的一些方法：

1，警告：“xoxoxoxo”  is deprecated 解决办法：查看xoxoxoxo的这个方法的文档，替换掉这个方法即可。

2，警告：Declaration of "struct sockaddr" will not be visible outside of this function 解决办法：在你的开源.m文件中添加 #import

3，警告：Implicit conversion from enumeration type 'UIInterfaceOrientation' to different enumeration type 'UIDeviceOrientation' 解决办法：类型不匹配。跳到出错的那一行，UIInterfaceOrientation强制转换为UIDeviceOrientation就行了。

4，警告：incompatible pointer types assigning to 'MyArrayList*'from 'NSMutableArray' 解决办法：加入强制转换(MyArrayList*)

5，警告：'&&' within '||' 问题出处：     if (exists && !isDirectory || !exists)………   解决办法： if ((exists && !isDirectory) || !exists)………

6，警告：Warning：The Copy Bundle Resources build phase contains this target's Info.plist file 解决办法：将Info.plist文件移到Resources目录下，而不要直接放在target下。

7，警告：在使用ASIHttp…第三方库的，运行报错。 解决办法：看你的项目中是否添加CFNetwork.framework、SystemConfiguration.framework, MobileCoreServices.framework, CoreGraphics.framework和libz.1.2.3.dylib，如果是sdk5.0以上，改添加libz.1.2.5.dylib

8，警告：xxxooo，missing required architecture i386 in file  解决办法：如果是错误信息的话：Target->Build Settings->Search Paths, 删除FrameworkSearch Paths 里面内容就可以了。 要只是一个警告的话，真机调试可以过。具体解决方法待大神出现。

9，警告： clang: error: no such file or directory: '/demo2/控件代码/13/Recorder/Recorder_Prefix.pch' clang: error: no input files Command /Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin/clang failed with exit code 1 解决办法： 在你的主工程文件 target搜素，pch ，找到Prefix Header    把它后面的值，都删除，再运行就解决了。

10，警告： “ARC forbids synthesizing a property of an Objective-C object with unspecified ownership or storage attribute 解决办法：如果定义了ARC有效，那么必须要有所有者属性的定义;所以代码改成下面这样 @property (nonatomic, strong, readonly) NSString *ss;

11，警告： io6一下的xib系统均没有自动选择Use Autolayout， Supporting iOS 5 and below with xib of iOS 6  解决办法：Just un-select “Use Autolayout” in the file inspector of the xib’s view and we are back to the familiar autosizing in size inspector and boom, it supports iOS 5 and below.

12，警告： Warning: Multiple build commands for output file xxx.png  解决办法：找到项目里xxx.png重复，删除重复的资源。

//以下是升级到 xcode 5.0.1 之后使用遇到的警告 13，警告：  “iOS 模拟器”未能安装此应用程序。 解决办法：删除模拟器上当前要运行那个APP，重新运行项目。就ok

14，警告： SpringBoard无法启动应用程序 错误:-3 解决办法：退出模拟器，重新运行这个项目。

15，警告： The server certificate failed to verify.    解决办法： 1、打开终端（实用工具 -->终端），在终端中输入如下命令： svn ls https://192.100.1.11?0/svn/xxxxxx（注意下面的url更换成你自己的url地址） 然后直接输入 “ p ”  确认，就可以重新连接了。

16，警告： Bitmasking for introspection of Objective-C object pointers is strongly discouraged.    解决办法： 某数字& 0x1的时候是代表要取最低位是否为1，改成了  if(JK_EXPECT_F(((NSUInteger)object)%2))即可。

17，警告： Implicit conversion loses integer precision: 'unsigned long' to 'CC_LONG' (aka 'unsigned int').    解决办法：     CC_MD5(str,strlen(str), r);，改成了     CC_MD5(str, (CC_LONG)strlen(str), r);即可。

18，警告： error: failed to launch '/private/var/mobile/Applications/xxxxx' -- failed to get the task for process 11140.   解决办法：     重启你的开发手机即可，还有一种可能是你的开发者证书与发布证书搞错了，检查在xcode中证书是否一直 。

遇到相关的警告，一般编译器都会提供解决方案，所以，作为新手，我们应该看懂编译器给我们的提示，这样我们解决问题就会事半功倍。

1，  错误信息：   "OBJC_CLASS$  xxxxx  ", referenced from:       objc-class-ref in ViewController.o ld: symbol(s) not found for architecture i386 clang: error: linker command failed with exit code 1 (use -v to see invocation) 解决方法：  查看工程，看是不是没有导入相关的框架。或者工程里添加的有相同".m",".h" 文件

2，  错误信息： Couldn't register dy.CKRiLiText with the bootstrap server. Error: unknown error code. This generally means that another instance of this process was already running or is hung in the debugger.Current language:  auto; currently objective-c 解决方法： 可能是电脑内存问题引起，重启电脑即可解决。如果重启解决不了问题，那就是你刚刚改动的代码引起的问题。

3 、 错误信息： ios 5是调试正常的，ios 6真机调试的时候,出现如下错误：ld: file is universal (3 slices) but does not contain a(n) armv7s slice: /Users/mac4/Desktop/my desktop/My app/MyApp name 20:09:12  /MyApp name/ZBarSDK/libzbar.a for architecture armv7serror: linker command failed with exit code 1 (use -v to see invocation) 解决方法：在Xcode里，点击相应的Target，然后点Build Settings，找到VALID_ARCHS，看里面的是不是arvm7s，如果不是改成arvm7s就可以了。

4 、 错误信息：  error: receiver type 'ViewController' for instance message does not declare a method with selector 'hideSearchBar:' [4] ViewController 中没有声明一个方法选择'hideSearchBar： 解决方法： 在ViewController .h 中声明一下这个方法 “ hideSearchBar ”  即可。

5、 错误信息：当json从服务端请求时得到的字符串，如果这样写的话，会报错，';' after top level declarator NSString *ss= @"{"recommend":"世界末日","dogname":"机器人"}";   解决方法： 就是，把   “   替换成  "  即可。NSString *ss= @"{ "recommend ": "世界末日 ", "dogname ": "机器人 "}";

6 、 错误信息：  error: Existing instance variable '_datasource' for property 'datasource' with  assign attribute must be __unsafe_unretained

解决方法：      id _datasource; 改为     __unsafe_unretained id _datasource:即可

31，警告：  warning: Semantic Issue: Incompatible integer to pointer conversion assigning to 'BOOL *' (aka 'signed char *') from 'BOOL' (aka 'signed char')

解决办法： 检查 BOOL ＊换为BOOL就可以了，检查是不是多写一个   ＊  号。

32:Jsonkit中的警告

Direct access to objective-c's isa is deprecated in favor of object_setClass() and object_getClass() object->isa 替换为 object_getClass(object) keyObject->isa 替换为 object_getClass(keyObject) (id)keys[idx]->isa 替换为 object_getClass((id)keys[idx])

format specifies type 'unsigned long' but the argument has type 'nsuinteger' (aka 'unsigned int') 给变量增加(unsigned long)进行类型转换

33：md5加密（iOS SDK中自带了CommonCrypto

Implicit declaration of function 'CC_MD5' is invalid in C99

[plain] view plaincopy

#define CC_MD5_DIGEST_LENGTH 16       +(NSString *)MD5HashForString:(NSString *)input {           const char *cStr = [input UTF8String];           unsigned char result[CC_MD5_DIGEST_LENGTH];           CC_MD5(cStr, strlen(cStr), result);           return [NSString stringWithFormat: @"xxxxxxxxxxxxxxxx",                   result[0], result[1], result[2], result[3],                   result[4], result[5], result[6], result[7],                   result[8], result[9], result[10], result[11],                   result[12], result[13], result[14], result[15]];       }

引入函数定义的头文件

#import

34:ASIDataDecompressor中的警告

format specifies type  'short' but the  argument has type 'int'

在+ (NSError *)deflateErrorWithCode:(int)code 和 +(NSError *)inflateErrorWithCode:(int)code中

［NSString stringWithFormat:@"Compression of data failed with code %hi",code] 中

将code改为 (short)code,类型转换

35：Reachability中警告

Using 'stringWithString:' with a literal is redundant

statusString = [NSString stringWithString: @"Not Reachable"];

改为：statusString = @"Not Reachable";

36.format specifies type 'id' but the argument has type 'const char *'

NSCAssert(NO, @"Unhandled error encountered during SAX parse. msg is %@", msg); 改为：NSCAssert(NO, @"Unhandled error encountered during SAX parse. msg is %@", [NSString stringWithUTF8String:msg]);

37 Using 'stringWithString:' with a literal is redundant 改为：self.locationInput.text = @"captured change";

38 在项目中设置控件的layer属性时，会发生错误, "Property 'c' cannot be found in forward class object 'CALayer *",

这时需要引入  #import 。

41,错误

Error launching remote program: failed to get the task for process

解决方法： 把真机上的软件，删除，然后，clean 一下，重新运行就可以了。

42,真机调试的时候，出现   [attachment=49364]   这正常，但是不识别机器的。

解决方法：

把 ， [attachment=49365] 设置为以上相对应的版本就可以了。

43,真机调试的时候，出现   ios Broken pipe

解决方法： :推出xcode :断开机器(iphone,ipad,ipod)链接 :重启iPhone在联接xcode，就可以了。

iOS真机调试中出现identity(The identity 'iPhone Developer)证书不匹配的问题

提示(null) error: could not read CFBundleIdentifier from Info.plist (null)

新建一个同名工程，拷贝其plist文件，将原工程中的plist文件替换掉即可。




