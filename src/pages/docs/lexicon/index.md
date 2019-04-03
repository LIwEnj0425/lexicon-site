---
title: "Get Started"
description: "User experience design language."
layout: "guide"
icon: "lexicon-site-about"
weight: 1
---


### 设计语言

Lexicon是一种为Liferay产品生态系统中的构建接口提供了通用框架的设计语言。它是Liferay产品的基础，组件，模式和用例的使用说明，可以为Liferay产品提供不同产品之间的一致性和同一个产品不同模块样式的一致性，并最终为其用户提供令人满意的统一的用户体验。

Lexicon是一个充满生命力的项目，随着时间的推移不断发展和适应新的技术，以满足人们的需求。

### 模块化方法

Lexicon采用模块化的方法进行界面设计。它是一个有凝聚力的系统，能够通过基本组件满足Liferay产品的各种需求。使用它进行产品界面设计的主要意义在于简化工作流程、缩短生产时间，最重要的是，Lexicon还向用户全面提供一致的用户体验。

为了实现这一目标，Lexicon使用Brad Frost的原子设计方法进行界面设计：这是一种基于模块化方法的界面设计，主要为界面设计系统的创建提供分层更加清晰和更加有组织的结构。这是一个非线性过程，分为五个阶段：原子，分子，生物，模板和页面。

### Lexicon网站

本网站为设计人员、开发人员和整体数字创造者解释Lexicon组件系统的设计规范和使用场景。虽然Lexicon主要面向Liferay社区，但Lexicon对于任何使用它的组件或为改进它做出贡献或提出建议的人都是开放的。

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/foundation.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>基础组件</h4>
        <p>基础组件是设计系统建立的原则，对基础组件原则的修改会影响组件的性能。 基础组件包括Liferay产品设计的基本元素，如颜色，网格和排版等。</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/component.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>核心组件</h4>
        <p>核心组件包含构建接口所必需的常用组件。 每个组件定义其规则和行为。 每个组件的外观和使用感受都基于上述基础组件的组合。 因此，对基础原则的更改会传播到整个系统。 在我们的例子中，这些组件由 [Clay](https://clayui.com/)实现。</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img  class="getstarted-img" src="../../../images/getstarted/satellite.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>卫星组件</h4>
        <p>卫星组件可满足特定产品或应用的需求。 卫星组件是由Lexicon的基础组件和核心组件构建所决定的的。 卫星组件属于创建卫星组件的产品或应用程序，而不是设计系统本身。</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/template.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>模版</h4>
        <p>模板提供预先构建的解决方案，以解决重复的界面挑战。 它们加快了设计过程，因为它们只需要进行少量修改即可适应您的使用案例并显示您的内容。</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/example.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>示例</h4>
        <p>本节展示了UX设计师的实际设计，演示了核心组件和卫星组件如何应用于创建解决特定场景的Lexicon界面。</p>
    </span>
</span>


此站点中的组件包括下面显示的标签，这些标签指示组件是链接到其实现您还是可以找到它们的产品。 这使您可以在实际应用程序和上下文中查看组件。

| 标签 | 应用场景 |
| ---- | ----- |
| <a class="label-link label label-warning" href="https://clayui.com/" target="_blank">VIEW IN CLAY</a> | 指向模式实现的链接 |
| <span class="label label-info">PRODUCT NAME</span> | 该图案用于具体产品或应用中 |
| <span class="label label-secondary">PENDING</span> | 该模式已经设计好，并且将在Clay或产品/应用中实现。 |

### Lexicon的实现

 Lexicon不是一种实现。 它是任何库可以实现的一组模式，规则和行为。 Liferay的Lexicon用户体验的语言网络实现是 [Clay](https://clayui.com/).
