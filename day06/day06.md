- 第6天 (2019.04.22)
    - [html] [label都有哪些作用？并举相应的例子说明](https://github.com/haizlin/fe-interview/issues/16)
      - 通常用来关联一个表单控件
        1. 利用 label “模拟” button 来解决不同浏览器原生button样式不同的问题
        2. 结合checkbox 表单元素实现纯css状态控制，比如控制css动画播放和停止。
        3. input 的 focus 事件会出发锚点定位，我们可以利用 label 当触发器实现选项卡切换效果。
    - [css] [用css创建一个三角形，并简述原理](https://github.com/haizlin/fe-interview/issues/17)
      - 设置一个宽高为0的正方形，通过border-width，border-color来画出三角形，如果要某一个边框设为透明，可以把颜色设为transparent
      - 盒子套盒子，外层盒子设置属性overflow:hidden，让超出部分隐藏
      - 内层盒子可以通过旋转rotate，position定位来显示出三角形
    - [js] [写一个去除制表符和换行符的方法](https://github.com/haizlin/fe-interview/issues/18)
      - const removeSymbol = (str) => st.replace(/\t|\n|\r/g, '');
