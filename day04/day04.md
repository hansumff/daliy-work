- 第4天 (2019.04.20)
    - [html] [HTML5的文件离线储存怎么使用，工作原理是什么？](https://github.com/haizlin/fe-interview/issues/10)
      - 原理：HTML5的文件离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储下来。之后当网络处于离线状态下，浏览器会通过被离线存储的数据进行页面展示。
      - 如何使用：
        - 1. 页面头部像下面一样加入一个manifest的属性。
        - 2. 在cache.manifest文件上编写离线存储的资源。
        - 3. 在离线状态下，操作window.applicationCache进行需求的实现。
      - 浏览器如何管理和加载？
        - 在线情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果第一次访问，那么浏览器就会根据manifest文件的内容下载相应的资源进行离线存储。如果访问过并且资源已经离线存储了，那么浏览器就会使用离线存储资源，它会对比新旧的manifest文件，如果没有改变，就不做任何处理；如果改变了，那么就会重新下载相应的资源进行离线存储。
        - 离线情况下，浏览器直接使用离线存储的资源。
    - [css] [CSS选择器有哪些？哪些属性可以继承？](https://github.com/haizlin/fe-interview/issues/11)
      - 选择器
        - 通配符×
        - ID
        - CLASS
        - 标签
        - 后代
        - 子
        - 属性
        - 伪类
        - 伪元素
      - 可以继承的属性
        - 字体系列
          - font-size
          - font-family
          - font-style
        - 文字系列
          - text-align
          - text-indent
          - text-shadow
          - line-height
          - color
        - 其他
          - visibility
          - cursor
    - [js] [写一个方法把下划线命名转成大驼峰命名](https://github.com/haizlin/fe-interview/issues/12)
      - function transformStr (str) {}
        - if(str.split('_').length===1) return;
        - str.split('_').reduce((a,b)=>{});
          - return a+b.substr(0,1).toUpperCase+b.substr(1)