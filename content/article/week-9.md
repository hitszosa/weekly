---
title: "Week 9"
date: 2022-05-09T11:17:49Z
# draft: true # remove this line to post
---

## 本周群聊

本周进行了一个 Lisp 的吹。

<!--more-->

### Lisp 吹！

群友 A: lisp 比 scm 主要是

群友 A: 函数跟变量的标识符作用域不一样

群友 A: 多一个原子类型

群友 A: 加了很多杂七杂八的函数传参方式

群友 A: 更多的花里胡哨 continuation 相关函数

群友 A: 更多的花里胡哨宏相关

群友 A: 著名的 clos

群友 A: 还有状况系统

群友 A: 建议都去试试什么是真正的 repl 跟状况系统

群友 B: 萝佬有写过好几行全是）的代码吗

群友 A: 我当初都没深入试就感觉大脑升华力

群友 A: 代码还能这样跑

群友 A: 没有

群友 A: 怎么可能全是) 啊

群友 A: 全是) 你该拆函数了

群友 A: 松散大于紧凑

群友 A: 你其他语言全是 } 不也一样 (

群友 A: 而且一般的方言都可以用方括号的

群友 B: 我以前了解 lisp 的时候不知道哪里看到说最后一页全是）

群友 A: 知名梗了

群友 A: 苏联特工费劲全力偷到了 nasa 的关键 lisp 程序的后十页

群友 A: 发现全是)

群友 B: 乐

群友 B: 好像是的

群友 B: 乐

群友 A: 确实

群友 B: (图片)

![](https://user-images.githubusercontent.com/29816865/167436139-e3ad9b95-c0f4-45f1-80ef-84ce4b0e9aa9.jpg)

群友 A: 我也看过这文章

群友 A: 不过是在学了 lisp 之后看的

群友 A: "宗教般的赞美"是真的

群友 A: 想传教也是真的

群友 A: 传不动也是真的 (

群友 A: can confirm (

群友 A: "不用 lisp 也能使你成为更优秀的程序员"也多半是真的

群友 A: 至少我身边统计学支持这个结论

群友 B: 2333

群友 C: 这么难学

群友 B: 所以 lisp 最大的用处就是教你另一种思维方式？

群友 A: 很难说

群友 A: 不只是 oop/fp 那种思维方式

群友 A: 而是整个看待程序的方式

群友 A: 就跟文章里的 "对整个 cs 改观" 的感觉差不多

群友 A: 还有整个的写代码/调试的工作流

群友 A: 虽然这个工作流一般别的语言完全复刻不了

群友 A: 但是至少心里会知道是有能够那么顺畅跟自然的方式的

群友 A: 这么说吧

群友 A: 你能体会到上帝是怎么理解程序的

群友 A: 普通的语言让你体会到电脑是怎么理解程序的

群友 A: lisp 完全是 human based language

群友 A: 基本上没受到任何现代电脑体系的污染

群友 A: lisp 创造出来的时候计算机还不大存在呢 (

群友 A: 现在的任何语言你在理解的时候都或多或少需要理解电脑是怎么样的

群友 B: 真有那么神吗，连 A 都这么说

群友 B: 建议加入周报

群友 A: 所以说 "宗教般的赞美"是真的 (

群友 C: 额 那没计算机搞什么语言。。。 玩差分机吗

群友 A: 不是

群友 A: 跟任何物理结构都没关系

群友 A: 是帕拉图般纯洁的计算本身

群友 A: 你甚至可以把 lisp 当成数学语言的方言

群友 B: 已经被种草了，毕设能搞完的话就学

### 缩写 ++

群友 A: 你辣个啥时候出 talk

群友 B: 哪个？

群友 A: l^g

群友 A: 辣个

群友 B: ?

群友 B: 什么迷惑缩写

群友 B: 你群真不是缩写群吗

群友 A: lug 就是发辣个音啊

群友 A: 草

群友 A: 发乐个音

### `shell-session`

群友 A: 告诉我我不是唯一一个第一天知道的 (附件：两张图片)

![](https://user-images.githubusercontent.com/29816865/167434187-c5dd3875-3ba0-47e9-b0de-72175aa7181d.png)

![](https://user-images.githubusercontent.com/29816865/167434196-8099c2c1-473e-4a62-989a-f961218e7fb6.png)

群友 B: `shell-session` 是啥

群友 A: 一个特殊的 md 代码块语言标记

群友 A: 表示这是一个同时包含命令和输出的

### CTF 日常

群友 A: 二进制安全比后端还后端

群友 B: 查询你群 cs 专业占比

群友 C: 去打洞

群友 D: 草

群友 D: 比较邪道

群友 E: A 有兼职挖洞赚钱吗

群友 A: pwn 队友都能手写 elf

群友 A: 还有一堆要钱的工具

群友 A: 贵死了

群友 C: 自己动手啊

群友 A: 自己写出来的说不定就变成肉了

群友 A: 不大相信自己写的东西）

群友 C: 自己动手绕过验证（

群友 A: 开源好！

群友 C: 自己分析自己

群友 A: 乐

群友 E: ida 分析 ida

群友 A: 测试 ida 的时候就经常把 ida 自己拖进去

群友 A: 看看有多快

群友 E: ida 有盗版吗

群友 A: 老多了

群友 A: 出一个新版就有人泄露

群友 A: 然后就被人用老板的 ida patch 了

群友 A:「自举」

### 背诵量

群友 A: 不想学 elixir 乐，破大防

群友 B: 啥破防，看看

群友 A: 因为 elixir 是弱类型（大概）

群友 A: ide 经常毫无提示

群友 B: 要习惯，有高亮就不错力

群友 B: 函数式，特别是不带括号的函数式，都很难提示 (

群友 B: 你有语义高亮这已经很不错了啊

群友 D: 无提示的语言都坏，大工程很难搞的

群友 D: 难不成全靠背？

群友 B: 还有 spec

群友 B: 我写 scheme 还只有正则表达式高亮呢 (

群友 D: 之前用 clojure 就是被背诵量劝退的

群友 A: 还是 f# 好

群友 B: 其实习惯了就好

群友 B: 有词法补全就差不多了

群友 B: 前提是齐全的词法补全

群友 B: 难补全意味着自由

群友 B: 你就直接把语言改造成你喜欢的样子

群友 B: 然后就不用背了 (

群友 B: 母语就不用背 (

群友 D: 问题是 clojure 要背的太多了

### Savannah，程序员的玩具柜！

群友 A: 怎么 gnu 里啥都有啊，我看到跳一跳了

群友 B: 程序员的玩具柜

### 挂载？

群友 A: 挂载机械硬盘到/dev

群友 A: mount /dev/sda /dev

群友 A: 还有谁

### 有钱可以为所欲为

某群友：我有个 bot 号养了好久，一直在固定区域用手机登陆。有次被封了，充了个 svip 申诉解封回来了

### 三维软件坐标系光谱图

![-541d876f215484ec.jpg](https://user-images.githubusercontent.com/39949564/166707328-2d517a52-6dec-4bf7-a5d4-b70ab9ea69b9.jpg)

## 本周你问我答

### Git 改名

群友 A: git 要怎么样把 master 指向当前 HEAD

群友 A: 我现在 HEAD 在 antlr4 分支，master 在之前的分叉出的一个地方

群友 A: 我现在想直接把 master 改成指向当前 commit

群友 A: 不想合并

群友 B: push -f

群友 B: 哦，删了重新 checkout -b

群友 A: 我想通了

群友 A: 我直接改名字

群友 A: 我把 master 改成 antlr3

群友 A: 把 antlr4 改成 main

群友 C: 记得改 upstream

群友 C: 我调研和用过下面三种无需切换分支强制移动分支指向的方式：

![](https://user-images.githubusercontent.com/29816865/167434141-aa1a91ab-d26d-4e82-bd21-e760a975ad88.png)

![](https://user-images.githubusercontent.com/29816865/167434333-c94e3feb-faac-45eb-814d-b97fe0f9ac69.png)

### Git 的原理？

群友 A: 我一直没搞清楚 git 到底是什么原理（

群友 A: 简单地说我每次 commit 他都会对本地仓库做个修改集，通过这些修改集我可以快速的找回修改前的内容？

群友 A: 类似于暴力的每次我改了代码就把工作区打了个包，只是他显然比我暴力全部打包聪明，只保存了修改的部分？

群友 B: 是吧，我觉得还很有意思的是这里为啥他不是删除追踪，然后加入追踪的模式，而是 rename，是因为 图片和音频太大了不适合这样嘛

群友 C: 旧事增量更新啊

群友 D: 是这样的

群友 D: 每一次把文件加入暂存区都会直接把整个那个文件都压缩一遍存成一个 blob 对象

群友 D: 然后暂存区里保存一个 blob 对象列表

群友 D: 当 commit 时生成一个 commit 对象，那个对象里保存了一堆 blob 的指针跟上一个 commit 对象的指针

群友 D: 然后 branch 是带名字的 commit 的指针

群友 D: commit 的那个 hash 就是它的指针

群友 D: 我之前还写过 git 实现的文章

群友 D: 还是高三寒假写的（

群友 D: 只不过咕了就是了

> 文章链接: <https://blog.origami404.top/git-impl/2021-02-git-impl-content/>

### C++ 模板要怎么约束泛型参数？

群友 A: c++ 模板要怎么约束泛型参数

群友 B: 后者就是 C++ 那种实例化

群友 A: 来点 c++14 能用的

群友 B: 用模板 (

群友 B: 因为有一个五个字母的规则

> 后面证实是六个字母的规则，SFINAE

群友 B: 叫什么

群友 B: 展开失败不算编译错误规则

群友 B: 所以可以用一些特殊的模板

群友 B: 这些模板在不满足特定性质的时候没有定义

群友 A: 额，有没有什么有 ide 支持的

群友 B: 然后把这些特殊的模板塞进泛型参数里

群友 A: 你这属于是不让不符合的泛型参数过编译

群友 C: shiroki 怎么玩洗屁屁了 坏

群友 B: 这样不满足的情况就可以被略过了

群友 B: 这是 C++ 正统啊

群友 B: 标准库就是这样的

群友 B: 要不然你哪来的"特殊的模板："

群友 B: 或者你用 constexpr if

群友 B: 不过那个似乎是 C++17+

群友 B: https://zh.cppreference.com/w/cpp/header/type_traits

群友 B: 自取

群友 A: 草，还是先来点模板系统入门吧

群友 B: 或者你蹲 23 的 concept 呗 (

群友 B: 这就是 C++!

群友 B: 劝你早润 (

群友 B: 我母语 C++ 都润了

群友 A: 我还是先写完单个的再改模板吧

群友 E: 润啥好啊

群友 F: 母语笑死

群友 B: 群指定语言 py

群友 F: 润 riscv！

群友 G: 母语草

群友 C: C++: 要你命 3000++

### C++ 引用是怎么实现的？

群友 A: 万能的群友，我最近在学 c++，想问个 cpp 或者说编译原理问题，就是引用作为函数形参时，如图：

```cpp
void swap(int &a, int &b) {
    int p; p = a; a = b; b = p;
}
```

swap 直接操控 a 和 b 的值，而不是按值传递那样，那么底层的相关汇编（假设是 riscv 架构），在主函数（调用 swap 的函数）a 和 b 两个变量存储在 s0 和 s1 寄存器。那么调用 swap 时参数寄存器 a0 和 a1 是什么情况呢，存的是 a 和 b 的地址？或者说直接不按这个套路，swap 直接操控 s0 和 s1 两个寄存器，或者说其他的，我觉得可能是第二个

群友 B: 没加优化的情况下很可能就是第一种

群友 B: 引用一般都当非空常量指针处理

群友 B: 你开个 gcc -c 之类出个汇编不就知道了

群友 B: 我给你找个网站

群友 C: a 和 b 不会储存在寄存器里

群友 C: 储存在内存里

群友 A: 那这岂不是和指针没区别了不

群友 B: 非空常量指针

群友 B: 引用必须绑东西并且不能改绑着谁

群友 C: 你除非 inline

群友 B: 这是很关键的优化信息

群友 C: 不然你寄存器里换的话对程序其他部分不可见的

群友 A: 我自己编译一下看看

群友 D: https://godbolt.org/

群友 B: https://godbolt.org/

> 几乎同时发出

群友 D: 我超

群友 B: 知名编译器探索网站

群友 D: 是的

群友 B: 属于是不约而同了

群友 A: 多谢

群友 B: https://cppinsights.io/ 还有一个这个

群友 B: 可以探索 C++ 编译器对于 lambda 啊 auto 啊之类的目眩神迷的特性的实现

群友 B: https://www.youtube.com/watch?v=UztsWf7F_Sc 这个 CppCon 的视频还介绍了一些别的 C++ 相关的网站

群友 B: 包括上面这些编译相关的

群友 B: 还有在线 profile 的


### Java JAR 打包资源文件

若想把项目里的资源文件打包到 Jar 里一起发布，像下面这样是不行的：

![](https://user-images.githubusercontent.com/29816865/167434106-b73d9161-cc60-4bf5-bc07-11dd1fcf10ac.jpg)

这样做始终是会以 `java -jar` 的 `PWD` 为相对路径查找文件，而不会去 JAR 文件里找。正确的做法是使用 `ClassLoader`:

```java
    this.getClass().getClassLoader().getResourceAsStream("src/xxx.jpg")
```

这样就可以相对 JAR 根目录定位 JAR 文件内的资源文件了。

提问的群友还专门就此问题写了一篇博客: <http://www.sheniao.top/index.php/tech/52.html>

> 另外敦促该群友早日上 HTTPS

## 本周看了啥

### Rust Tutorial

群里的推荐：

- https://github.com/rust-lang/rustlings
- https://doc.rust-lang.org/rust-by-example/index.html
- https://course.rs
- https://kaisery.github.io/trpl-zh-cn/

### Python 类型标注

某群友写的博客，描述了 Python 里的类型标注，目前计划三篇，写了两篇：

- [Python 与 Type Annotations](https://blog.origami404.top/compiler-and-type-theory/2020-07-python-and-type-annotations/)
- [Python 类型标注之追本溯源](https://blog.origami404.top/compiler-and-type-theory/2022-05-py-annotation-2/)

### Web 3.0 相关文章

> 属于是两篇文章对冲了

- [捍卫自由的互联网，对 Web 3 说不](https://blog.skk.moe/post/keep-web-free-say-no-to-web3/)
- [互联网还会变好吗？极客精神与 Web 3](https://mp.weixin.qq.com/s?__biz=MzU3Mjk1OTQ0Ng==&mid=2247492429&idx=1&sn=5bca4865c8738c09e7ec2380780ac3db&chksm=fcca5cf4cbbdd5e285c54d02fecab6bd6e7f9d9e7bd0f127ea9666f48fad9b62c158be72fe32#rd)

### Web Feed 倡议书

<https://u.sb/lets-web-feed/>

### 手把手带你读论文

<https://github.com/papers-we-love/papers-we-love>

### 给研究生的学术建议

<https://psychelzh.github.io/phdrule/index.html>

### Python 源码剖析 (3.7.4)

<https://fasionchan.com/python-source/>

## 🎵 本周音乐推荐

- 作品名：四季
- 专辑：UTAU
- 作词、演唱：大貫妙子
- 作曲：坂本龍一、大貫妙子（据闻，无从考证）
- 演奏：坂本龍一
- 专辑流派：当代古典音乐（Contemporary Classical Music)
- 收听链接：<https://music.163.com/#/song?id=633083>