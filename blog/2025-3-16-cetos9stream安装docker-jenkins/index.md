---
slug: linux安装docker jenkins
title: linux安装docker jenkins
authors:
  name: 问问
  url: https://github.com/tysaner/blog-docusaurus
  image_url: /img/docusaurus.png
  tags: {
  
  }
---
## 1.安装

按照火山引擎文档centos安装docker

[火山引擎安装docker文档](https://www.volcengine.com/docs/6396/75300#%E5%AE%89%E8%A3%85%20Docker "火山引擎安装docker文档")

## 2.配置docker镜像源

````code
vim /etc/docker/daemon.json


{
    "runtimes": {
            "nvidia": {
	            "args": [],
	            "path": "nvidia-container-runtime"
	        }
        },
    "registry-mirrors": [
            "https://docker.registry.cyou",
        "https://docker-cf.registry.cyou",
        "https://dockercf.jsdelivr.fyi",
        "https://docker.jsdelivr.fyi",
        "https://dockertest.jsdelivr.fyi",
        "https://mirror.aliyuncs.com",
        "https://dockerproxy.com",
        "https://mirror.baidubce.com",
        "https://docker.m.daocloud.io",
        "https://docker.nju.edu.cn",
        "https://docker.mirrors.sjtug.sjtu.edu.cn",
        "https://docker.mirrors.ustc.edu.cn",
        "https://mirror.iscas.ac.cn",
        "https://docker.rainbond.cc"
    ]
}  

````

## 3.镜像源相关解决方案

[腾讯云](https://cloud.tencent.com/developer/article/2486234)
