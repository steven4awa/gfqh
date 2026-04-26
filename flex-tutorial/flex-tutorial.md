> from: https://www.bilibili.com/video/BV1cbCuBqE7L


flex 轴：
![](../upload/picture/flex-intro.png)

下面用一个例子讲解：
```html
 <style>
    .container{
        display: flex;
        flex-direction: row; /*default main axis direction*/;
        border: 3px solid rgb(5, 188, 255);
    }
    .item{
        background-color: aqua;
        border: 1px solid black;
        width: 50px;
        height: 50px;
    }
</style>

<body class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</body>
```

这个例子确定了主轴方向（主轴默认方向是row）
![](https://pic1.imgdb.cn/item/69d25705441d16110110abca.png)
让元素如何在主轴上排列需要用到属性`justify-content`，给container添加后

```css
.container{
    justify-content: space-around; /*main axis alignment*/;
}
```

![](https://pic1.imgdb.cn/item/69d25877441d16110110ac95.png)

使用`align-items`在**cross axis**上对其元素
```css
 .container{
    display: flex;
    align-items: center; /*cross axis alignment*/;
    height: 200px;
}
```
![](https://pic1.imgdb.cn/item/69d2598f441d16110110ad24.png)

下面解释如何常用的让元素在父元素内居中的效果
```css
justify-content: center; /*main axis alignment*/;
align-items: center; /*cross axis alignment*/;
```

![](https://pic1.imgdb.cn/item/69d259f7441d16110110ad73.png)

如果**收缩**父亲*container*默认里面的元素也会收缩，如果需要换行，可以添加 `flex-warp: warp` 属性

![](https://pic1.imgdb.cn/item/69d25d2d441d16110110e432.png)

当元素换行后，换行的元素会各自拥有一个主轴和交叉轴，类似这样

![](https://pic1.imgdb.cn/item/69d25e13441d16110110e4a3.png)
现在 align-items只会控制项目在各自所在行的交叉轴上的对齐。

现在用align-content来控制所有行作为一个**整体**的对齐。它的默认值为stretch（尝试拉伸每一行，使其填满cross-axis的所有可用空间，默认就是上面这个效果）

改为center，现在所有元素也成为一个整体在页面对其了。
```css
align-content: center; /*align wrapped lines in the container*/;
```

![](https://pic1.imgdb.cn/item/69d25f34441d16110110e526.png)