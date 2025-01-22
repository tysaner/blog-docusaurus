---
title: windows环境开发react-native
sidebar_label: 1.配置Expo环境
sideber_position: 1
---
## Expo

介绍：**Expo** 是一个用于构建跨平台移动应用（iOS 和 Android）的开发框架和工具链。它基于 React Native，提供了一套开箱即用的工具和服务，简化了移动应用的开发、测试和发布流程。Expo 的目标是让开发者能够更快速、更轻松地构建高质量的移动应用，而无需深入掌握原生开发（如 Swift、Objective-C 或 Java）。

:::info
就是说用react的语法开发移动应用，并且不需要进行太多的配置，很多小伙伴在配置环境这一块就已经脑壳大了，要安装Android Studio、Xcode、Java、Node.js等等，真的很麻烦。 Expo 就是为了解决这个问题，它提供了一套开箱即用的工具和服务和脚手架，让我们可以进行少量开发前的准备工作，然后就可以开始开发应用了。注意！并不是完全不需要配置环境噢！`node`、`npm`或者其他任意的包管理工具以及装载设备。
:::

官网链接🚀️:[Expo中文网](https://expo.nodejs.cn/)、[react-native中文网](https://reactnative.cn/)；

## 开发环境(个人)
- 系统：Windows 10
- 开发工具：Visual Studio Code
- 开发环境：Node.js v18.20.5
- 手机：Android模拟器（Pixel 4）
- 手机：iphone 11
:::info
大家可以任意搭配自己的开发环境，只要安装了node16以上的版本，就可以进行开发了。(推荐使用node18LTS噢)
:::

## 使用脚手架初始化项目
````javascript title="终端命令"
npx create-expo-app@latest
````
创建的时候会有选项，选择最基础的模板就好，然后等待项目初始化完成。
:::info
运行项目之前需要在手机上安装`Expo go`这个客户端
:::
## 运行项目
````javascript title="终端命令"
cd my-app
npm start
````

运行项目成功之后会出现一个QR码，打开手机摄像头对准QR码，会提示在`Expo go`中打开，点击打开就可以在手机上看到运行的项目了。

