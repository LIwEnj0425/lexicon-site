---
title: "满盒"
description: "满盒的布局适应宽度始终为容器宽度的100％，占据网格的12列。"
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div> 

 此布局用于[数据集显示](../../patterns/dataset_display.html) 模版.


![layout full box 1440px width screen](../../../images/layoutfb01.jpg)

#### 反应行为

完整的盒子布局是流体容器，并且在不同容器的断点处占据容器宽度的100％。
但要注意的是，在容器的断点小于576像素的显示器上，横向空间将从布局中移除。

![layout full box responsive summary](../../../images/layoutfbsummary.jpg)

#### 属性

![layout full box metrics](../../../images/layoutfbmetrics01.jpg)

#### 示例

![layout full box example](../../../images/layoutfbmetricsexample.jpg)


### 卡片

卡片式布局的适应宽度为容器宽度的100％，将每张卡片的大小和每行卡片的数量调整为不同的视口大小。这是我们可以在[数据集显示](../../patterns/dataset_display.html)等模板中找到的布局。

#### 反应行为

![layout full box responsive summary](../../../images/layoutfbcardssummary.jpg)

#### 属性

![layout full box cards metrics](../../../images/layoutfbcardsmetrics.jpg)

#### 示例

![layout full box cards example](../../../images/layoutfbcardsexample.jpg)
