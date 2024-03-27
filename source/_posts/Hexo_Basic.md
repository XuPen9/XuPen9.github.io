---
title: Hexo_Basic
toc: true
date: 2024-03-10 20:08:37
tags: Hexo
categories: Hexo
---

***
> **前言：**
>
> 使用 GitHub Pages 搭建 Hexo 静态博客，服务稳定，无需刻意维护且完全免费。但搭建繁琐、各种报错及访问限制等问题，导致大家对其的看法褒贬不一……
>
> **本文将详细地介绍如何使用 Hexo + GitHub 搭建个人博客**
>
> *为了照顾小白（第一次使用 GitHub 和 Hexo），本文将尽可能详细地将部署过程中可能遇到的情况进行表述，**且为了提高页面加载速度，尽可能地不使用图片素材**  ~~部署过程中，某些内容如果已经会的可以选择性跳过了~~ ，上述文字使得本文看起来些许复杂，但认真跟着流程走，不会有太多问题的。o(*￣▽￣*)ブ*

***

## 简介

### GitHub Pages 是什么?
> [GitHub Pages是由 GitHub 官方提供的一种免费的静态站点托管服务，让我们可以在 GitHub 仓库里托管和发布自己的静态网站页面。](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

### Hexo 是什么?
> [Hexo是一个快速、简洁且高效的静态博客框架，它基于 Node.js 运行，可以将我们撰写的 Markdown 文档解析渲染成静态的 HTML 网页。](https://hexo.io/zh-cn/docs/)

***

## 环境搭建

- 尽可能将 **中文输入法** 切换为 **英文输入法** ，避免因各类符号或其他原因而造成错误。
- 将文中的  **用户名 和 邮箱** 替换为 **自己的 GitHub 账户名和邮箱**。
- 使用 **`Git Bash`** 进行操作
- **小白请严格按步操作，不要跳！**

***

### 下载并安装Nodejs

- 下载 [Nodejs](https://nodejs.org/en) 程序并安装，**一路 `下一步` 按默认配置完成安装（注意：可以修改安装位置）**。

- 安装完成后，**`Win + R`** 输入 **`cmd`** 并打开，输入 **`node -v`** 、**`npm -v`**并查看是否正确输出版本号，若正常输出则安装完成。

***

### 下载并安装Git

- 下载 [Git](https://git-scm.com/downloads) 程序并安装，**一路 `下一步` 按默认配置完成安装（注意：可以修改安装位置）**。

- 安装完成后，**`Win + R`** 输入 **`cmd`** 并打开，输入 **`git --version`** 并查看是否正确输出版本号，若正常输出则安装完成。

***

### 连接 Github
- 在 [GitHub](https://github.com/) 注册账号，并完成邮箱验证，**确保账号可以正常使用**。

- 在你想要的位置 **新建一个英文命名的文件夹，例如 [HEXO_BLOG] 文件夹** ，进入文件夹后**右键**鼠标，在打开的选项栏中选择 **`Git Bash Here`** 。

**设置用户名和邮箱：**

```C
git config --global user.name "你的 Github 用户名"
git config --global user.email "你的 GitHub 邮箱"
```

**创建 SSH 密匙：**

- 输入 **`ssh-keygen -t rsa -C "你的 GitHub 邮箱"`**，**然后一路回车**。

**添加密匙：**

- 进入 **`C:\Users\.ssh 文件夹`**（**这一步需要勾选显示 “隐藏的项目”** ），用记事本打开公钥 **`id_rsa.pub`** 文件并完全复制里面的内容。

- 登陆 GitHub ，进入 **`Settings`** 页面，选择左边栏的 **`SSH and GPG keys`** ，点击 **`New SSH key`** 。

- Title 随便取个名字，**粘贴复制的 `id_rsa.pub` 内容到 `Key` 中，点击 `Add SSH key` 完成添加**。

**验证连接：**

-  **重新打开 `Git Bash`** ，输入 **`ssh -T git@github.com`** ，出现 **Are you sure……** ， **输入 yes 回车确认** 。

-  当显示 **Hi xxx! You've successfully……** 即连接成功。

***

### 创建 Github Pages

GitHub 主页 **右上角加号** **`New repository`**：

-  **Repository name** 中输入 **`用户名.github.io`** ， **这里不要填错了，填错了后面不会有反应。**
-  **Description** 可填可不填
-  **勾选** Public
-  **勾选** “Initialize this repository with a README”

填好后点击 **Create repository**。

**创建后默认自动启用 HTTPS，博客地址为：`https://用户名.github.io` ，这个时候你就可以在网页中输入博客地址查看专属于你的博客啦！**

***

### 安装 Hexo

- 打开创建的 **[HEXO_BLOG]文件夹** ，右键 **`Git Bash Here`**。
- 使用 Hexo 一键部署命令：**`npm install hexo-cli -g`**
- Mac 用户需要管理员权限，运行这条命令：**`sudo npm install -g hexo-cli`**
- *注意！！！安装过程视网络环境而定（有可能很快，也可能很慢……），在此过程中，界面也不会有任何反应， **耐心等待** ……*

***

### 初始化 & 本地预览

**初始化并安装所需组件：**

```c
hexo init      # 初始化
npm install    # 安装组件
```

完成后依次输入下面命令，**启动本地服务器进行预览**：

```c
hexo g   # 生成页面
hexo s   # 启动预览
```

访问 **`localhost:4000`** ，出现 Hexo 默认页面，本地博客安装成功！

*Tips：如果出现页面加载不出来，可能是端口被占用了。**Ctrl+C** 关闭服务器，运行  **`hexo server -p 5000`**  更改端口号后重试。*

***

### 部署 Hexo 到 GitHub Pages

本地博客测试成功后，将博客上传至 GitHub 使其能够在网络上访问。

首先安装 **`hexo-deployer-git`**：

```text
npm install hexo-deployer-git --save
```

然后修改 **`_config.yml`** 文件末尾的 **`Deployment`** 部分，修改成如下：

```text
deploy:
  type: git
  repository: git@github.com:用户名/用户名.github.io.git
  branch: main
```

完成后运行 **`hexo d`** 将网站上传部署到 **GitHub Pages**。

完成！这时访问我们的 GitHub 域名 **`https://用户名.github.io`** 就可以看到自己的博客页面了。

****

### 绑定域名（可选）

- 此时我们可以使用 **`https://用户名.github.io`** 来访问我们的博客，但是这样一串子域名有点啰嗦且不便于他人访问，因此我们可以使用自己的域名来替换。

- ***域名可以在域名注册商进行购买，这里就不打广告了***。购买域名后，按域名注册商的教程注册并解析域名，在 **`DNS`** 设置中删除自带的解析记录，然后添加 **`CNAME`** 记录将 **`www 域名解析`** 指向 **`https://用户名.github.io`** 。

- 进入 **[HEXO_BLOG]文件夹** 文件夹的 **[source]文件夹** ，右键 **新建一个文本文档** ，在里面输入 **`自己购买的域名`** (例如 xxxx.com)，保存名称为 **`CNAME`**，格式为 **`所有文件`** **（无 .txt 后缀）**。

- 清除缓存等文件并重新发布网站：

  ```text
  hexo clean   # 清除缓存文件等
  hexo g       # 生成页面
  hexo s       # 启动预览
  ```

- 现在就可以使用自己的域名访问 Hexo 博客啦。

***
### 开启 HTTPS

- 配置自己的域名后，需要我们手动开启 **`HTTPS`**。打开博客所在 GitHub 仓库，**`Settings`** 下拉找到 **`GitHub Pages`** 勾选 **`Enforce HTTPS`**。

- HTTPS 证书部署成功需要一定时间，等大概几分钟再访问域名，就可以看到域名前面的小绿锁了，HTTPS 配置完成！

***

**至此，Hexo的部署完成，且博客可以正常使用了。**

***

## 参考资料

> - [Git](https://git-scm.com/downloads) 
> - [Github](https://github.com/)
> - [GitHub Pages](https://docs.github.com/en/pages)
> - [Hexo](https://hexo.io/zh-cn/)
> - [Node.js](https://nodejs.org/en)