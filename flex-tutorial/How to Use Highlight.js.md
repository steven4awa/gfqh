# 在html中嵌入 code block
inspired from: 

>https://github.com/highlightjs/highlight.js
>https://highlightjs.org/

how to use?

first, link css in the `head tag`:
```html
<link rel="stylesheet"     href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
```

then in css:
```html

<!-- 引入 highlight.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

<!-- 启用高亮 -->
<script>
  hljs.highlightAll();
</script>

```

现在笔记里
```html
<pre><code class="language-javascript">
</code></pre>
```
包裹的代码就可以正常显示了，通过类名来指定语言