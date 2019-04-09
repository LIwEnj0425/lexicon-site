---
title: "侧边栏+框"
description: "左侧边栏需要垂直导航时使用的特定布局。"
layout: "guide"
weight: 3
---

<div class="page-description">{$page.description}</div> 

按照侧边栏分为3列的类型，则内容分为9或8列（具体取决于类型分列）。 这将导致两种不同的配置：3 + 9列布局或3 + 8列布局。 下面将更详细地介绍这些配置。

### 3+9列布局
这是除表单之外的表、列表或其他内容结构的默认配置。

![layout sidebar and box, 1440px width screen](../../../images/layoutSidebar.jpg)

#### 反应行为

在视口大小等于或小于768px时，我们对布局进行了两项关键更改，以优化内容空间：

* 在[嵌套导航](../../patterns/Navigation/verticalNav.html)的布局情况下，垂直导航将更改为切换顶部导航。
* 改布局下，列表框从9列更改为12列。

![layout sidebar + box responsive summary](../../../images/layoutsidebarsummary.jpg)

#### 属性

![layout sidebar + box metrics](../../../images/layoutsidebarmetrics.jpg)

#### 示例

![layout sidebar + box example](../../../images/layoutsidebarexample.jpg)


### 3+8列布局（表单）

此配置用于表单。 当表单容器所需的空间少于默认布局提供的9列时，将表单的列数减少到8。

![layout sidebar and box 8 columns, 1440px width screen](../../../images/layoutSidebarBox8.jpg)

#### 反应行为

请注意，为了优化空间内容，在视口大小小于或等于992px时，布局会从8列更改为9列。

![layout sidebar + box 8 columns responsive summary](../../../images/layoutsidebarbox8summary.jpg)

#### 属性

![layout sidebar + box 8 columns metrics](../../../images/layoutsidebarbox8metrics.jpg)

#### 示例

![layout sidebar + box 8 columns example](../../../images/layoutsidebarbox8example.jpg)

### 例外

3+9列布局和3+8列布局涵盖了大多数Lexicon的接口。但是这些布局不包括一些边缘场景的配置：
* 场景1：3 + 9列配置变为2 + 10列配置。
* 场景2：3 + 8列配置变为2 + 9列配置。

只有当两列足以支持侧边栏的宽度时，才需要这些场景。如果以下几点适用于您的UI界面，您可能需要考虑这些配置:
* 您网站管理的所有语言都有简短的垂直导航标题。
* 主框中有更多的空间来容纳多列的表格。

如果您使用这些配置，请确保在所有应用程序部分中为侧边栏应用两列布局以保持一致性。
