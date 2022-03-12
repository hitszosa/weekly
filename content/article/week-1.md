---
title: "Week 1"
date: 2022-03-11T15:24:38+08:00
---

第一周周报

<!--more-->

## 本周群聊

### 群昵称怎么变 `*` 了？

由于腾讯不知名的审查要求判定我们近似于全空的群资料违规，所以群昵称被强制更改为了 `*`. 何时能恢复尚未确定，目前我们的其他交流频道有：

- Matrix: https://matrix.to/#/!bZaeSNGrzpDNCRUcCP:bcom.moe?via=bcom.moe
- Telegram: https://t.me/+uu88Y55rDks1NGY1

### 截图标注工具推荐

最后还是选择了 PowerPoint (闭源俱乐部实锤)。

### 令人迷惑的 Lua

Lua 的语言里只有一种数字类型，它有时候是 long 有时候是 double，成功迷惑了某群友。此外 Lua 那杂糅了数组与哈希表的 table 设计也令人难忍修改它的冲动。

### 新的开源潮流

某群友发现 "b 站开源" 正成潮流: b 站视频当 README 和文档，源码通过百度云分发。

### Firefox 无法复制 pixiv 的图片

某群友: "怎么还有这么离谱的 bug"

### 美好的回忆

在 LSP 当道的今日，有谁还记得曾经的 ctags 呢。

### 电工绘图

某群友起了用 Python 库 `schemdraw` 绘制电路图来写电工作业的歪心思。

### Ultra = Max * 2

胶水芯片恐成一代潮流。~~AMD: 喵喵喵？~~

### AI 潮流下的中文

每日迷思：如果 AI 的训练输入都是英文的，会不会加剧中文式弱？

现在这些根据描述写代码，根据描述写算法题的 AI，输入语言都是英文，长此以往，会不会真的导致 "英文编程"? 这对中文编程有何影响？

### 哪个 JRE 跑得快？

这个 [mcbbs 贴子](https://www.mcbbs.net/thread-1232993-1-1.html) 分析了各个 JRE 在运行 MC 时的效率。

JRE 是 Jave Runtime Environment 的缩写，可以视作运行 Java 程序的程序，不同的公司写了不同的程序，它们在性能上各有优劣。

TL;DR: Zulu JRE 一般就足够快了。

### 群友锐评重写老项目

> 事实上我觉得，重写不如补注释（  
> 重写只是把只有原作者能看懂的代码变成只有你能看懂的代码而已（

## 本周旧闻慢递

### 学校高性能计算集群公测 (?)

文档暂时托管在 [LUG wiki](https://wiki.hitsz.org/hpc-doc/main/). 公测期间四舍五入不要钱，而且机子有一摩尔 A100 跟 A30.

### LUG 贴纸仓库

我们的首席设计师/美工/高级前端 launchd 在 GitHub 上发布了系列 LUG 贴纸。 [仓库](https://github.com/hitszlug/hitsz-lug-stickers).

~~所以什么时候出流汗企鹅跟爆筋企鹅~~

### 腾讯云免费升级

> 腾讯云轻量服务器免费升级
> 2H4G8M 的轻量服务器机型，现在可在后台选择升级套餐至 4H4G8M，费用 0 元
> 赶快去升级吧~
> *无忧套餐不参加该活动

据某群友称有恶性竞价嫌疑，~~不过白嫖谁不喜欢呢~~.

### XMind 要求盗版网站上架其新版本以获得流量

呸。

### 拼多多利用 Android Shortcut 假冒卸载按钮

呸。

## 奇奇怪怪的 Bug

### 开启了 WSL2 的 Win11 使用 QQ 截图会导致窗口闪烁

迷惑叠叠乐 bug. 想来两边都有大锅。[详细描述 (V2EX)](https://www.v2ex.com/t/810392).

### Conda + 系统代理 == HTTP 错误

是透明代理跟 Fake DNS 的锅，可以开全局代理或者关闭 TLS 解决。

### 树莓派上 Debian 包管理的一个陷阱

> W: Skipping acquire of configured file 'ui/i18n/Translation-en' as repository '源地址 bullseye InRelease' doesn't have the component 'ui' (component misspelt in sources.list?)

应该是由于忘记添加 raspberrypi 源。
```sh
# 编辑 `/etc/apt/sources.list.d/raspi.list` 文件，删除原文件所有内容，用以下内容取代：
deb http://mirrors.tuna.tsinghua.edu.cn/raspberrypi/ bullseye main
```

> "怎么感觉树莓派官方推荐的系统都不靠谱"

