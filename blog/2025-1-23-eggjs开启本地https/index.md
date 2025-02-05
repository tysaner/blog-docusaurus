---
slug: eggjs开启本地https
title: eggjs开启本地https
authors:
  name: 问问
  url: https://github.com/tysaner/blog-docusaurus
  image_url: /img/docusaurus.png
  tags: {
  
  }
---
## 1.scoop安装ngrok

````javascript
scoop install main/ngrok
````

## 2.ngrok配置Authoritarian

````javascript
ngrok config add-authtoken <token>

````

:::info
替换成自己的token
:::

## 3.启动ngrok

````javascript
ngrok https http://localhost:7001
````
