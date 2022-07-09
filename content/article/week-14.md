---
title: "Week 14"
date: 2022-07-08T15:51:21Z
draft: false
---

## 本周讲座

本周 Easton Man 举办了名为《稠密矩阵乘在单核上的性能优化》的讲座，现场展示了如何针对 CPU 对算法进行改进优化，并评估算法的性能，以及宣传了与 HPC 相关的竞赛。

讲座视频：<https://www.bilibili.com/video/BV17U4y1D7T8>

讲座幻灯片：<https://hitsz-hpc.github.io/2022-07-06-pre/1>

高表演计算入门！（大雾）

<!--more-->

## 本周群聊

### 10 小时精致工作

> 六点半到七点开始写，然后写到 12 点，然后开始摸一会鱼……或者蹭教学楼干干净净的厕所，或者早点回去洗澡。这样一天就至少有 10 小时工作时间。

某群友表示：“**我 自 裁**。”

> 少摸一会，再加上吃外卖或面包，再加上醒早睡晚，就能 12～13 小时……我已经保持这个作息两周了罢（）……我的评价是，我写代码我快乐。

> 写代码是积攒能量啊！只有放了假才有心情自律，自律的前提是自由。每天上课累死了，就无心情自律了。

おっす！

### 人力 TTY

> 目前最难用的一种 TTY。
> 同事或同学操作电脑配环境、写代码、控制 terminal 等，而你负责用聊天窗协助，把聊天窗口作为人力 TTY 使用。这个 TTY 不仅会敲错、违抗命令，还会闲聊问一大堆问题，是最难用的 TTY 之一。

### 机器学习本质论

> **CS 4620**
> 
> **Intelligent Systems**
> 
> Changing random stuff until your program works is 'hacky' and 'bad coding practice'.
> 
> But if you do it fast enough it is 'Machine Learning' and pays 4x your current salary.

应用统计学大胜利

参见：<https://twitter.com/__femb0t/status/1524791901110542336?s=20&t=GobNrn2wlbQ-Ql_zebGDjg>

### 最热门的 GTK 主题

在 GitHub 上搜索「GTK Theme」并按 star 降序排列，第一个主题就是 Mac 风格的。

呃呃。

另外某折纸酱倾情推荐一 GNOME 主题：[Nord-dotfiles](https://github.com/botsunny/nord_dotfiles)

### NIC 助管

网络与计算中心回复邮件了，内容大致如下：

> 您的简历我们已经收到，感谢您的投递。
> 
> 后续我们会通过电话联系您，还请留意。

> 小半个月，这就是深圳速度！

> ~~话说这是否说明 NIC 事实上节奏慢悠悠所以其实可以收钱不干活？~~

### TG 小游戏

在 Telegram 搜索 [@gamee](https://t.me/gamee)，将其拉入群聊即可与群友爽打小游戏！快来选出你们群里的游戏头子吧 (

> 摸鱼虽好，可不要贪杯哦

## 本周旧闻慢递

### 深圳市工信局加快培育鸿蒙欧拉生态

全面建设 HOMO 友好型城市。（大雾）

参见：<http://gxj.sz.gov.cn/xxgk/xxgkml/qt/tzgg/content/post_9924851.html>

### Lennart Poettering 从 Red Hat 跳槽到微软

Lennart Poettering 为 systemd 和 PulseAudio 的创建者和主要开发者。

参见：<https://www.phoronix.com/scan.php?page=news_item&px=Lennart-Poettering-Out-Red-Hat>

## 本周 Bug

### 校园网问题

鉴于你校校园网的**，某两群友在实验室开了台机子跑 OpenWRT 负责多拨 + 魔法，然后改自己机子的网关到那台机子上。某天，他们忽然发现校园网内网地址不能上了！

经过摇人检测 + 玄妙 Debug，两人终于确定了问题所在。当使用旁路由时，客户端的机子的路由表如下：

```
default via <旁路由IP地址> dev eno1 proto static metric 100 
10.249.8.0/21 dev eno1 proto kernel scope link src <本机IP> metric 100 
```

当访问内网地址时，默认走了第二条规则，也就是包发到学校网关去了。而因为在使用旁路由时要指定网关，两人的机子都是静态 IP，没有向学校网关发送 DHCP；而学校网关可能是根据 DHCP 表里的条目来判断机子是否 "合法" 的。由于两人的机子的 IP 并没有在学校网关的 DHCP 表内，因此发出去的包就被学校网关丢掉了，自然就访问不到其他内网服务了。

解决方法很简单，删除第二条路由表规则，让所有请求都向发到旁路由上再转发即可。

```
ip route del 10.249.8.0/21 dev eno1
```

## 本周看了啥

### 如何出版一本技术图书

编者写在《C++20 高级编程》出版之时的一篇文章。

参见：<https://netcan.github.io/2022/06/22/%E5%A6%82%E4%BD%95%E5%87%BA%E7%89%88%E4%B8%80%E6%9C%AC%E6%8A%80%E6%9C%AF%E5%9B%BE%E4%B9%A6-%E5%86%99%E5%9C%A8%E3%80%8AC-20%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B%E3%80%8B%E5%87%BA%E7%89%88%E4%B9%8B%E6%97%B6/>

### Floating-point arithmetic – all you need to know, explained interactively

参见：<https://matloka.com/blog/floating-point-101>

### A Brief, Incomplete, and Mostly Wrong History of Programming Languages

> A monad is a monoid in the category of endofunctors.

参见：<http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html>

### 总工程师 42 岁移民从工人做起，活出精彩人生 - 观后感

参见：<https://zwt.one/%E6%80%BB%E5%B7%A5%E7%A8%8B%E5%B8%88-42-%E5%B2%81%E7%A7%BB%E6%B0%91%E4%BB%8E%E5%B7%A5%E4%BA%BA%E5%81%9A%E8%B5%B7%E6%B4%BB%E5%87%BA%E7%B2%BE%E5%BD%A9%E4%BA%BA%E7%94%9F--%E8%A7%82%E5%90%8E%E6%84%9F>

## 本周音乐推荐

- 作品名：最終列車は 25 時
- 专辑：恋人へ
- 艺术家：Lamp (7)
- 制作人：永井祐介
- 发行时间：2004 年 2 月 11 日
- 专辑流派：混合爵士、日本流行
- 收听链接：<https://music.163.com/song?id=25723363>