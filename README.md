# HITsz Linux User Group 周报

这里存放 HITsz LUG 周报的源码。

周报内容主要是群内群聊，新闻速递，奇奇怪怪的 Bug 记录等，风格偏向活泼幽默。

如无特殊说明，该仓库内的文档以 CC BY-NC-SA 4.0 发布到公有领域。

## 参与建设

`git clone`后在工作区执行：

```shell
git submodule init
git submodule update
```

以初始化子模块。

**注意**：子模块已更换，请执行 `git submodule sync --recursive` 。

使用 `hugo new article/xxx.md` 创建新的周报。

我们希望 Wiki 的内容有正确的格式，所以我们强制要求提交的内容通过 AutoCorrect 检查。

使用方法：

1. 安装 vscode 插件。已写入工作区建议。
2. 安装 [AutoCorrect](https://github.com/huacnlee/autocorrect) 并在提交前执行 `autocorrect --fix ./` 。

## 本地预览

```shell
hugo server
```

或者加上 `--buildDrafts` 使草稿也被预览。
