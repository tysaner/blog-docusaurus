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
````javascript title="cmd"
scoop install main/ngrok
````
## 2.ngrok配置Authoritarian
````javascript title="cmd"
ngrok config add-authtoken 2rziySiAmiUxlz4ruUPzPLs6Z09_5YEehFucL2Eju6nAPMBXs

````
:::info
替换成自己的token
:::

## 3.启动ngrok
````javascript title="cmd"
ngrok https http://localhost:7001
````