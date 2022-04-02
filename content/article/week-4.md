---
title: "Week 4"
date: 2022-04-02T02:50:01Z
---

## 本周大事记

### 更名

考虑到 LUG (Linux User Group) 成员的实际情况，我们决定将在一周内正式更名为 WUG (Windows User Group)，正式通知将在一周内发布于主页。

![WUG](https://user-images.githubusercontent.com/73573254/161370211-4715a905-aaba-4ace-9144-c3c2939f16e6.png)

<!--more-->

### 镜像站迁移

LUG 镜像站换用第四代融盐核动力堆，目前已稳定运行一周。新镜像站采用了量子储存技术，目前空间富足，有需求的同学可申请新镜像。

### LUG 下属组织筹备建立

镜像站测试阶段的压力测试中，由于负载过大意外产生了可控的核聚变，我们决定成立下属组织 FRG (Fusion Research Group) 研究此现象。该组织目前仍处于筹备阶段，具体事项将延期至 LUG 正式更名之后。

### happy April fool yesterday！

以上消息全是真的。

## 本周群聊

### Windows 虚拟机体验

本周某群友重装了系统，决定使用虚拟机封印所有国产毒瘤软件，下面是他的体验：

我使用了 Hyper-V 作为虚拟化平台，开了一台 Windows 10 LTSC 2021 的虚拟机。经过测试发现在双开微信和 TIM 的情况下，2c4g 的配置就够用了。

使用方面主要是用 RDP 连接虚拟机。网络的话配了一个 Bridge，在上游路由器里设定了固定 IP，这样连远程桌面就方便很多。Windows 的远程桌面可以链接音频，麦克风，打印机，物理摄像头跟 USB 设备，所以在虚拟机里跑腾讯会议也是可行的。文件交互方面直接复制粘贴就可以了，剪切板也是共享的，要在宿主机截图的话直接 Win+Shift+S 截好然后进虚拟机 Ctrl+V 就可以了。

可以直接开一个虚拟桌面，然后启动远程桌面开全屏，并且在 RDP 设置里将所有的 Windows 快捷键都传给本机，这样就可以通过 <kbd>Ctrl</kbd>+<kbd>Win</kbd>+<kbd>Left</kbd>/<kbd>Right</kbd> 快速切换虚拟桌面来实现 "快速在宿主机/虚拟机桌面之间切换". 

目前遇到的主要问题是，OBS 的 VirtualCam 不能被 RDP 传进虚拟机里，所以很难将宿主机的屏幕共享给虚拟机。正在尝试 OBS 推流然后虚拟机收流的方案。



### 群友锐评安卓 Chrome

某群友：这 Chrome 怎么是老年人字体啊？

> 而且安卓 Chrome 目前版本还没办法把地址栏挪到下面 (`chrome://flags` 里的 `Chrome Home` 选项现在不见了 :( )

> 咕噜咕噜的老年人字体应该是所有基于 Chromium 的浏览器的通病，Bromite 也是这样的 

> 然而英文字体是 Firefox 大，中文字体是 Chromium 大，就很离谱

### 你群经典缩写举例

- 润时: runtime
- 咕噜咕噜: Google
- 鸡: VPS/云服务器
- 大盘鸡：硬盘很大的鸡

### Windows 编码

某群友：给我所有的 ipynb 最前面都加了一条 `!chcp 65001` (流汗黄豆.jpg)

### 瞬间变脸

> 群友 A(18:04:30): https://www.slax.org/starting.php  
> 群友 A(18:04:33): 哇这个东西  
> 群友 A(18:04:34): 好  
> 群友 A(18:09:55): 靠  
> 群友 A(18:09:58): 好没用啊 

其实不是瞬间，花了 5 分钟才变脸。

### 10 年前的电脑

据说是 Intel atom N455，现在拿来装 Linux 了。

![](https://user-images.githubusercontent.com/29816865/161366106-fb5199cc-f705-41dc-9558-310f281e5e70.jpg)

### 如何学习 VIM

某群友: “当你觉得某个操作要很久而且很烦的时候，去咕噜咕噜搜一下看看别人怎么做” / "当你认为某个操作应该可以更简单的时候，通常都是确实可以"

> ~~VIM MODE 在哪里都很好用，除了原生 VIM~~

某群友: VIM 人不是人均精通三位数加减法？

我: 5j 5j 5j 5j ...

### 毕昇杯没人权

对于毕昇杯没人来，而龙芯杯/OS 比赛却爆满的情况，某群友表示十分不解。

~~可能是因为毕昇不加学分绩吧~~

群友：~~龙芯杯和 OS 也不加呜呜呜~~

> 某群友：写编译器难道不是十亿程序员的编程梦想吗 (其他群友：难道不是 ai 老婆吗（）)

> 某群友：真正的程序员要用自己写的 cpu 跑自己写的 os，用自己写的编辑器写代码然后用自己写的编译器编译

### antlr4 的反向更新

Antlr4 砍掉了 Antlr3 里的树重写和 tree grammar，某群友表示这波反向更新完全不能理解。

### Python 里的相对引用

本周某新入 Python 的群友彻底被 Python 里包的相对路径引用搞懵了，也许 LUG 会出一篇 Wiki 来讲解这个问题。

~~你群 Wiki 恐变文集~~


### 配服务器有害身心健康

> 群友 A(13:04:52): 配服务器有害身心健康  
> 群友 B(13:05:30): 确实，运维干的活太牛马了  
> 群友 A(13:06:29): 我折腾了一早上感觉人都没有了  
> 群友 A(13:06:39): 满肚子气没地方撒  
> 群友 A(13:06:43): 干啥啥不行  
> 群友 A(13:06:47): 配啥啥不会

珍爱生命，远离运维。

### 写代码高刷好还是高分好？

群内大 论 战，~~有钱就不用想了~~。

### 谁是二次元？

> 听说 LUG 里每三个人就会有一个二次元

什么二刺螈，我不是我没有，哪里有二刺螈？??

## 本周旧闻慢递

### 安卓内核与 Linux 内核开发关系

> 真·旧闻慢递

> 在 2019 年之前，Android 通用内核是通过克隆最新声明的 LTS 内核并添加 Android 专用补丁程序来构建的。2019 年，这一过程变成了从 android-mainline 中分支出新的 Android 通用内核。这种新模型以递增的方式构建内核，从而避免进行大量的向前移植和测试 Android 补丁程序的工作。android-mainline 会经过大量持续不断的测试，因此该模型可保证内核自发布之日起就具有很高的质量

> Ref: https://source.android.com/devices/architecture/kernel/android-common

据群友说法，19 年之前都是 Fork 一份过来自己玩，导致修掉的 Bug 很难提交到上游，上游修好的 Bug 也很难合并进 Android 内核，所以后来变成定期向 Linux 主线提供补丁了。

### 微软电脑管家正式推出官网

官网地址：[https://www.bing.com/guanjia?mkt=zh-CN](https://www.bing.com/guanjia?mkt=zh-CN)

### Linux 5.18 弃用了 ReiserFS 的支持

因为开发者 Hans Reiser 因为谋杀指控不再开发，而目前的维护者也很少提供代码了。

> 我: ???

### 给国内厂商提供域名拦截的服务商

> 某群友：好家伙，原来国内厂商的域名拦截是这个服务商提供的：http://check.uomg.com/qq_check.html

我们的 `weekly.hitsz.org` 被拦截了，但是 `lug.pub` 没有。

> 群友直呼 n*** s* 腾讯

### 芯动科技：风华 1 号 GPU 与统信 UOS 操作系统成功适配，标准评测跑分第一

原文网址: https://www.ithome.com/0/609/725.htm

### 网传 Spring Core 出现未知 REC 0day

~~目前还没证实。~~

已证实：[微信文章链接](https://mp.weixin.qq.com/s?__biz=MzI5ODk3OTM1Ng==&mid=2247500244&idx=1&sn=6aa6dcb9e4ee7bf9d5b033a6f1606c63&chksm=ec9f18a7dbe891b18e27dfb7ffe6908140a80fac2203b4932d1a9a7bd135285b9887da0fd3e8&mpshare=1&scene=23&srcid=0401W1r4X5hIntvWjoj6Xb6Z&sharer_sharetime=1648867902228&sharer_shareid=0a0e2d69b70573b99ce3daf5804d0427#rd)

> fastjson 养活了一代安全人，log4j 和 spring 会养活下一代（

![](https://user-images.githubusercontent.com/29816865/161366104-88b3c9d7-19fa-4d6b-a4d5-01d559307556.jpg)

### 华为云桌面

> 通过华为 HDP 高清传输协议（HUAWEI Delivery Protocol)，华为云桌面能够为用户带来高清视觉享受下的流畅办公体验，保障 YUV444 真彩无损显示、专业 10bit 色深柔滑细腻、4K / 60 帧高动态场景流畅

表示非常怀疑

Ref: [IT 之家](https://www.ithome.com/0/610/895.htm)

### 满佬学会直播了！

直播做计算方法作业！(然而实际在写 CPU) (说明学计算方法要从 CPU 造起)

## 本周奇怪 Bug

### 去年奇怪 Bug

去年 (20 年) 数据结构实验课，给的数据混用 GB2312 跟 UTF-8 编码。

话说今年 (21 年) 的 C 语言实验扩展题里的数据还给了带 BOM 的 UTF-8 的编码导致大量同学代码出错，你校人均不在意编码实锤。

~~(19 年 C 语言实验就这样了)~~

### Cadence 干掉了我的 GPG!

按照电路实验课老师的教程在 Windows 下安装了 Cadence 软件，之后发现 git、GnuPG 等的工作目录被定位到 Cadence 根目录下 `SPB_Data` 文件夹。网络上搜索多份 workaround 且修改了疑似被 Cadence “污染”的环境变量无果后，遂生“重新安装 GnuPG”一计。安装后重启，发现工作目录恢复原样，重设 git 的 `gpgprogram` 配置项后也能正常 commit。

**反思：** 虽然问题得以解决，但过程中进行了多个比较关键的操作（包括但不限于修改环境变量、重装软件、重启），难以断定何因素导致和解决了这一问题。另外以前一直对 GNU 系程序如何在 Windows 下实现不够了解，尝试 workaround 时走了不少弯路。

**参考：**
- <https://superuser.com/questions/1153101/why-does-git-complain-that-no-gpg-agent-is-running>
- <https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key>

### Firefox 的奇妙渲染问题

Firefox Nightly for Windows 100.0a1 (2022-03-28) (64-bit) 无法正确显示 GitHub 的部分元素，包括但不限于 [github-readme-stats](https://github-readme-stats.vercel.app) 生成的 GitHub Top Languages 图片和贡献块状图的横纵轴标识（如图所示）。更换 Google Chrome Canary 和 Firefox Nightly 100.0a1 (2022-03-29) 则能正常显示。这种异常情况与网页显示比例和字体无直接关联。

![3](https://user-images.githubusercontent.com/30514318/160634854-041a58f5-51b4-4662-bdc8-fa05afdb877b.PNG)
![2](https://user-images.githubusercontent.com/30514318/160634901-0924451f-7bc9-479d-a09b-01054cde49e0.PNG)

~~(什么？Stable？我超勇的，从来不用 Stable)~~

### Conda 跟 Windows 系统代理 (2)

> 前情提要：[第一周周报](https://weekly.hitsz.org/article/week-1/#conda--%E7%B3%BB%E7%BB%9F%E4%BB%A3%E7%90%86--http-%E9%94%99%E8%AF%AF)

conda or pip  + 系统代理 == http 错误 ？
接第一周的讨论。最终证明是 win + python 特有 bug。详见此 [issue](https://github.com/Fndroid/clash_for_windows_pkg/issues/1787) 与此[文章](https://note.bobo.moe/2021/02/clash-for-windows-pip-proxyerror.html)

## 本周看了啥

### 儿童 DE

> DE: Desktop Environment

据说是专门针对儿童设计的桌面环境，[官网](https://spins.fedoraproject.org/soas/).

### 被 Google 屏蔽的广告屏蔽插件

AdNauseam，只能去 GitHub 下，被 Chrome Extension Store ban 了。~~封禁认证！~~

这个插件甚至能假装点击广告。

### 论负面信息在微博上的传播

真的是"论". 论文链接：

- https://www.sciencedirect.com/science/article/abs/pii/S0020025522001621
- https://dl.acm.org/doi/abs/10.1145/2817946.2817962

### 英语进阶指南

[GitHub](https://github.com/byoungd/English-level-up-tips) 上的一个关于如何学习英语的指南，已有 23.5k stars.

### 追求神乎其技的程式設計之道 — 2022 重編版

一名台湾工程师的学习道路分析，从 2008 开始写了三年，如今 2022 重新整理。[Medium 链接](https://vgod.medium.com/%E8%BF%BD%E6%B1%82%E7%A5%9E%E4%B9%8E%E5%85%B6%E6%8A%80%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88%E4%B9%8B%E9%81%93-2022%E9%87%8D%E7%B7%A8%E7%89%88-7cccc3c68f1e)

### 北大附中教师：我在中国最好的中学当老师，见证了素质教育如何「败」给应试压力

[微信链接](https://mp.weixin.qq.com/s/Yd7WgD5NnZs14FBElUcRoQ)

### 一篇讲得很好的 Vim 入门文章

[Learn Vim For the Last Time: A Tutorial and Primer](https://danielmiessler.com/study/vim/)