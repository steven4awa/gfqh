https://www.itbaima.cn/

除了简单监听事件之外，我们还可以使用event对象，每次事件触发，浏览器都会自动传入一个事件对象，除了在标签属性上无法使用外，其他地方都可以直接作为参数使用：

```js
//直接修改onclick可以使用
btn.onclick = event => console.log(event)

//事件监听器可以使用
btn.addEventListener('click', (event) => {
    console.log(event)
})
```

类型：
```js
event.target        // 真正触发事件的元素
event.currentTarget // 当前绑定事件的元素（至于为什么要分两个，下面接着介绍）
event.type          // 事件类型
event.clientX       // 鼠标X坐标
event.clientY       // 鼠标Y坐标
```

# 事件流

事件流是事件章节最重要的核心知识，实际上浏览器在处理事件时，并不是简单的“点谁就执行谁”。想象一下，你点击了页面上的一个按钮，你不仅点击了按钮本身，同时也点击了它的父容器、甚至整个页面。

为了解决“到底谁先响应”的问题，浏览器采用了三阶段的流动模型。根据 W3C 标准，一个事件的生命周期按顺序分为以下三个阶段：

1. 捕获阶段 (Capture Phase)

事件从最顶层的窗体对象（Window）开始，逐级向下传播，直到到达触发事件的具体元素。

- 目的： 在事件到达目标之前拦截它。
- 顺序： Window -> Document -> `<html>` -> `<body>` -> ... -> 目标元素的父级。

2. 目标阶段 (Target Phase)

事件终于到达了真正触发它的那个元素（即 event.target）。

- 在这个阶段，事件被触发并执行绑定的监听函数。

3. 冒泡阶段 (Bubbling Phase)

事件从目标元素开始，逐级向上传播，直到回到最顶层的 Window 对象。

- 意义： 这是最常用的阶段，也是 JavaScript 默认监听的阶段。
- 顺序： 目标元素 -> 父级 -> ... -> <body> -> <html> -> Document -> Window。

![](https://pic1.imgdb.cn/item/69d5f5c1fe07599d0e208124.png)

事件会从整个文档DOM树的最底层逐步传播到目标元素上，当找到目标元素时，开始按照冒泡顺序依次触发事件：

```html
<body onclick="console.log('3')">
  <div>我是页面上的一段普通内容</div>
  <div onclick="console.log('2')">
    <button onclick="console.log('1')">我是一个大按钮</button>
  </div>
</body>
```

![](https://files.seeusercontent.com/2026/02/24/w5Ab/image-20260224175023351.png)

有时候，我们可能希望点击子元素后不触发父元素的任何逻辑，这时你需要手动“截断”流，也就是阻止事件继续向后传播或是冒泡。我们可以使用stopPropagation方法：

[查看示例1](./javaScript-event-propagation.html)
[查看示例2](./prevent-progagation.html)