# visualAnalysis

#### Description
数据流可视化分析平台

#### Software Architecture
![输入图片说明](https://images.gitee.com/uploads/images/2018/1123/100828_73209334_2141312.jpeg "实验室时间序列可视化分析平台.jpg")

#### Sequence Diagram
![输入图片说明](https://images.gitee.com/uploads/images/2018/1229/151602_136bf791_2141312.png "workflow时序图.png")
#### Installation

1. [下载安装XAMPP服务器](http://note.youdao.com/noteshare?id=611a754774eb730c5f730cc3bcbadb32)
2. 将下载好的项目文件夹直接放到XAMPP安装目录下的/htdocs文件夹中。
3. 打开XAMPP控制面板，开启Apache服务，然后在浏览器(推荐谷歌浏览器)中输入网址[http://localhost/visualAnalysis/view/](http://localhost/visualAnalysis/view/)即可访问本平台。

#### 可视化部分开发指南
1. 在如图代码区域加入一个div元素，并赋予其一个唯一的id。
![输入图片说明](https://images.gitee.com/uploads/images/2018/1121/224151_e476a838_2141312.png "屏幕快照 2018-11-21 22.40.31.png")
2.可参照/public/custom/charts/charts.js内showGraph()函数自定义自己的函数。
![输入图片说明](https://images.gitee.com/uploads/images/2018/1113/164407_c7855f2e_2141312.png "屏幕快照 2018-11-13 16.42.22.png")

#### 数据访问
1. 如果节点状态为“运行结束时”，点击该节点则访问该节点对应的数据（即可进行可视化显示）。
![输入图片说明](https://images.gitee.com/uploads/images/2018/1119/200727_43ed3be3_2141312.png "屏幕快照 2018-11-19 20.06.25.png")

#### 合并代码
（如果没有修改同一个文件到话可以这么修改）
1. 在自己的分支上确保代码没问题
2. 切换到主分支：$git checkout master
3. 将分支代码与主代码合并：$git merge fql(分支名)
4. 将代码push到主分支上：$git push origin master
5. 合并完之后记得切换回自己到分支工作区再继续写哟～

#### 项目文档
详见[wiki](https://gitee.com/DSM_fudan/visualAnalysis/wikis/%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E?sort_id=1037802)。

未完待续。。。
