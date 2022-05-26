---
title: "Week 11"
date: 2022-05-24T12:34:57Z
---

## 本周群聊

本周无事发生。

<!--more-->

"本周报具有超级牛力"

### 周报工作流

> 上下文：群友 B 是周报主要负责人

群友 A: 我觉得周报工作流有大问题，我前几天才知道周报是一条一条筛，实在无法想象

群友 B: 但是，不一条条筛质量无保证

群友 A: 那你这机器人不会自动识别热点吗

群友 B: 而且筛出对话之后，还需要做凝练。比如简短对话合并，多线程对话重排，关联词补充，上下文补充，杂音消除之类的

群友 B:（怎么感觉变编译器优化了

群友 B: 做周报是沉淀，要有方法论，打通群聊 Hugo 工作流，以聊天记录为抓手，打造信息闭环 (

群友 A: 你不会 automation？

群友 B: 我没看到有简单的自动化方法，从聊天记录里找到有趣/有用的并且做成适合集中阅读的东西本身对人都是足够难的问题（

群友 A: 这拿来做毕设挺好的，一种舆论热点的识别方法

群友 B: 机器人跟其他工具类的自动化本身优化到的地方其实不是性能损耗大头

群友 B: 我觉得我再多做十周左右，就可以总结出一定的简单规律，至少多线程对话重排跟简短对话合并跟朴素的杂音消除（如乐，空对话，表情包，#等）可以做

群友 C: 周报写作过程是怎样的？素材自己翻聊天记录吗，还是平时整理？

群友 B: 到周末了，群里吼一声有无人做，然后开始玩游戏。玩爽了发现没人回我，就 `cd weekly` `git pull checkout-b week-n` `hugo new`. 然后开始翻聊天记录，从上周日开始到本周日。发现有可能成为周报的素材就直接在 QQ 的历史记录里复制过去，复制完之后会大概有万字左右的原始素材，跑个我写的小脚本转换一下格式。然后做一些跟聊天记录相关的优化，其中有可能对某些点稍微做一点深度展开或者是别的搜索。然后插入这周看了啥和图片，图片是翻聊天记录的时候顺手保存的。然后整理顺序并开 PR，等有强迫症的人来改拼写 + lint，没有就等一天然后就 merge. 

群友 C: 这工作量太大了吧

群友 F: 建议状态机

群友 E: 多线程聊天筛选器是什么玩意

群友 B: "多线程聊天"是指群聊里，各聊各，每个人进度不太一样的情况。直接粘贴到周报里不太合适，一般可以通过合理调整信息顺序使其符合逻辑顺序以方便阅读，然后再做一次连续信息合并，水分多的记录删除并创建 abstract，空信息 (一般是表情包或者单字) 删除。

群友 E: 这 nlp 做出来挺 nb 哄哄的

群友 B: 周报周报，一周来报

群友 C: B 这工作量太大了，不考虑优化流程吗

群友 B: 怎么优化

群友 C: 好问题... 比如……改成投稿制？

群友 B: 周报其实具有天然的并行性。找两个人就可以 1/2，找七个人就可以 1/7，因为可以按天分配，然而目前还是 1/1，**建议反思**

### 实验室通宵注意点

T2 的公共实验室晚上一般是会赶人的，但是如果是那种刷卡才能进的实验室就有可能不会被赶。但是中央空调晚上 12 点就会关，所以如果要通宵的话建议自带电风扇。

> 群友怎么什么奇奇怪怪的经验都有

### 戴森球合集

#### 挖矿？

群友 A: 挂戴森球爬科技，感觉像挖矿，用算力拿数字（

#### 工业化的力量

群友 A: 玩戴森球学到最大的体会就是，有产线就不用在意数量了，数量不重要，重要的是流量

#### 戴森球与周报

群友 A: 如果周报咕咕咕了，都是戴森球的错

群友 B: 懂了，我去玩戴森球，A 来写码

### 血肉苦弱合集版

#### 硬件加速器？

群友 A: 推荐造泡面

群友 B: 泡面不够快

群友 A: 舍友可以帮你泡，流水线（

群友 C: 硬件加速器是吧（

群友 C: 有没有自动打碎食物送进胃里的硬件加速器

#### FPGA?

群友 A: 之前看到一个研究，人体会给植入设备自动生成自适应驱动，具体有点忘了

群友 B: 人脑还挺 FPGA 的

群友 C: 人工耳蜗就是这个原理，直接接到神经上

群友 B: 在线重编程的 FPGA

#### 网络层？

群友 A: 什么，网络层（

群友 C: 心脏起搏器都能被黑

群友 A: 什么防火墙

群友 A:《三层免疫系统》

群友 C: 之前美国不是有个人研究出来黑心脏起搏器的方法了，然后在他公布的前一天被暗杀了

群友 D: 黑个心脏起搏器不比直接人麻烦

群友 A: 起搏器本来就很脆（

群友 C: 没有防火墙你第二层免疫系统分分钟被 DDoS

群友 C: 第三层免疫系统是无差别攻击的，杀敌一千自损三百

群友 D: 问题来了，你为啥要连接公网


### Android 开发

群友：我都不知道我上辈子犯了什么滔天大罪，竟然用写 android 这种方式折磨我

### 关于工厂

群里针对工厂模式吵了一小会，最后发现大家说的两个东西 ("静态工厂方法" vs "Dart 的 factory 方法") 其实是同一个玩意...

```dart
// https://dart.dev/guides/language/language-tour#factory-constructors
class Logger {
  final String name;
  bool mute = false;

  // _cache is library-private, thanks to
  // the _ in front of its name.
  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  // dart 的 factory 方法
  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}


var logger = Logger('UI');
logger.log('Button clicked');

var logMap = {'name': 'UI'};
var loggerJson = Logger.fromJson(logMap);
```

```java
class Logger {
    final String name;
    boolean mute = false;

    static final Map<String, Logger> _cache = new HashMap<>();

    // 静态工厂方法
    static public fromName(String name) {
        return _cache.putIfAbsent(name, new Logger(name));
    }

    static public fromJson(Map<String, Object> json) {
        return Logger.fromName(json.get("name").toString());
    }

    public log(String msg) {
        if (!mute) System.out.println(msg);
    }

    private Logger(String name) {
        this.name = name;
    }
}



var logger = Logger.fromName("UI");
logger.log("Button clicked");

var logMap = Map.of("name", "UI");
var loggerJson = Logger.fromJson(logMap);
```

最后达成共识：传统工厂坏。

### 容器使用过程中的破防时刻

群友 A: 

> *** , rustpad 的 docker image 直接 FROM scratch，我拿个头 debug
> 
> rust 坏，go 也坏，这俩语言编译产物老喜欢 static
> 
> from 个 alpine 我忍了，from scratch 改个 ** 啊
> 
> from scratch 简直运维噩梦，完全不可能进容器 debug. 好歹 from 个 alpine 啊，我差你这 6mb 吗
> 
> 我现在还得 cp 出来改掉再 cp 进去，或者盲做一个新 image，我现在甚至都不知道它 image 里的文件都是啥样的
> 
> from scratch 了还不出日志，我真的，气死力

### 网络调试小技巧

本周一位群友又 (?) 在折腾网络上花掉了整整一个晚上...关键是还没调出来 (

调试过程一角：

> 群友 A: 这下无了
> 
> 群友 B: 你把啥扬了？
> 
> 群友 A: 手一抖，取消了主路由 lan 跟 eth0 的桥接
> 
> 群友 A: 现在四舍五入是我主路由已经被开除 lan 籍
> 
> 群友 A: 令人呃呃

事后总结了一下调试网络的小技巧到了 [wiki](https://wiki.hitsz.org/linux-tricks/network-tricks/).


## 本周你问我答

### Git 的 autocrlf 

群友 A: git 的 autocrlf 有没有办法排除某个文件

群友 B: 可以吧，应该也可以细化到文件

群友 B: 应该是点 gitattribude

群友 C: LF 好 CR LF 坏

群友 B: https://git-scm.com/docs/gitattributes#_effects

群友 B: 官方甚至拿 crlf 来当 gitattributes 的示例

### Typora 自定义 LaTeX 宏

群友 A: typora 用的 mathjax，可以在某个 js 文件里自定义宏

群友 A: 比如我之前就给 typora 加了一个 `\rm` 的宏

群友 A: 详情可以看此 issue: https://github.com/typora/typora-issues/issues/100

## 本周旧闻慢递

> 这都上周旧闻慢递了吧喂！

### 中国电信首发“天翼量子高清密话”

<https://www.ithome.com/0/618/497.htm>

国内宣传隐私岂不是...

### jsDelivr 炸了！

为了下载 jsDelivr 中某个包的所有文件，群友写了个 py 小脚本：

```python
import requests as req
import re
import os

base_url = 'https://cdn.jsdelivr.net'
link_pattern = re.compile(r'<a rel="nofollow" href="(.*?)">')

def get_page(surl):
    real_url = base_url + surl
    print(f"DEBUG: {real_url}")
    return req.get(real_url).text

def get_sublinks(surl):
    page = get_page(surl)
    return link_pattern.findall(page)

def local_path(surl):
    return '.' + surl

def write_to_local(surl):
    with open(local_path(surl), 'w') as f:
        f.write(get_page(surl))

def rev_download(surl):
    if surl[-1] != '/':
        write_to_local(surl)
        return

    os.makedirs(local_path(surl), exist_ok=True)
    for sublink in get_sublinks(surl):
        rev_download(sublink)


if __name__ == '__main__':
    import sys
    _, base_sublink = sys.argv
    rev_download(base_sublink)
```

用法：

```shell-session
$ python get-jsdelivr-all.py '/npm/monaco-editor@0.28.1/min/vs/'
$ tree -L 5 .
.
├── get-jsdelivr-all.py
└── npm
    └── monaco-editor@0.28.1
        └── min
            └── vs
                ├── base
                ├── basic-languages
                ├── editor
                ├── language
                └── loader.js

8 directories, 2 files
```

### Gitea 公开仓库先审后开

中国特色开源

## 本周奇怪 Bug

### Dav

群友 A: 我 linux 的 dav 炸了

群友 A: 命令行可以正常使用，但是用 gui(文件管理器) 开 dav 挂载的文件夹，就会卡死

群友 A: 而且一旦卡了命令行也不能用了

群友 A: 这个 gui 包括任何软件打开文件夹时出来的那个系统选文件夹的 gui

群友 A: 但是我把文件管理器 kill 了之后就可以了

### `pack(1)`

群友 B:

```cpp
#pragma pack(1)
struct oplog_common_t
{
    uint8_t op : 2;
    uint8_t emd : 2;
    uint32_t ver : 20;
    uint64_t key : 64;
}
```

上面的代码里 VSC 计算的的 sizeof 是 13，而 GCC 编译之后出来的 sizeof 是 11. 这是不是有歧义啊？

群友 A: msvc 的跟 gcc (对于 `pack(1)` 的处理) 是不一样的

群友 A: 

<https://releases.llvm.org/3.4/tools/clang/docs/UsersManual.html#microsoft-extensions>

<https://gcc.gnu.org/onlinedocs/gcc-4.4.4/gcc/Structure_002dPacking-Pragmas.html>
 
<https://stackoverflow.com/questions/60627612/byte-layout-of-structure-pragma-pack-behavior-different-on-msvc-vs-clang-gcc>

群友 B: 所以 C 没有原生支持对齐的指令？

群友 A: 对齐本来就是底层细节 (

群友 A: 不可能有标准方法指定的

#### 后续

群友 A: 为什么不用两个 u64 然后掩码

群友 A: 我觉得用位域只会更麻烦，位域搭配 C++ 迷幻类型，还不如掩码

群友 A: 万一做运算的时候给你编译出个什么不知名加减乘除的，de 都 de 不出来

群友 A: 而且 pack(1) 你这直接性能爆炸吧 (

... 几天之后 ...

群友 B: 这还真成性能瓶颈了

## 本周看了啥

### 如何阻止 Kotlin 的 `internal` 被翻译成 Java 的 `public`

<https://ice1000.org/2017/11-12-KtInternalJavaTranslation.html>

### 控制结构三次元版

![](https://user-images.githubusercontent.com/29816865/170418161-17a516fe-eb9d-432b-bdb0-65cd510859c8.jpg)

> 结论: Option 好

### The Modern JavaScript Tutorial

https://javascript.info/

### 编程之道

https://github.com/yikeke/tao-of-programming

### Readme 用的 widget 合集

<https://github.com/rzashakeri/beautify-github-profile>

### 关于我大学毕业后去当富士康流水线工人的经历

<https://www.v2ex.com/t/852933>

### 为什么学术中老是用“我们”来做观点的主语？ 

> 省流：因为比较神圣 (?)

<https://www.zhihu.com/question/54063300/answer/137780323>

### The Niche Programmer

Niche 是法语中的小众的意思，这里指使用小众技术栈的程序员。本篇文章讲述了作者，一位原本的主流技术栈程序员，在小众技术栈公司工作一段时间后再去找工作的经历。

作者写道：


> And while doing the interviews I discovered that because of the low number of applicants, leetcode is fairly rare. Most of the interviews I've been a part of have focused mostly on questions around tool use, clean code practices, and asking me what I built in my previous jobs. And unlike mainstream language companies, they check my GitHub projects and for the most part never even give me a technical test job.
> 
> This was an amazing revelation to me because I had gotten used to the interview process being something similar to a prostitution ring where nobody cares about my open-source projects and most of the time nobody even actually read my CV.


<https://ano.ee/blog/the-niche-programmer>
