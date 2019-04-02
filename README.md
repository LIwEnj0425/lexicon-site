# lexicon  网站

[![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

## 设置

1. 确保你已经安装了 [node 和 npm](https://nodejs.org/en/download/) ：

```sh
node -v && npm -v
```

2. 安装全局依赖：

```sh
[sudo] npm i -g electric-cli@alpha
```

3. 安装本地依赖：

```sh
npm i
```

## 用法

* 构建网站，在本地运行服务，并观察任何变化：

```
electric run
```

* 部署到生成环境（发送构建文件到 `wedeploy-lexicon2` 分支）：

```
electric deploy
```
