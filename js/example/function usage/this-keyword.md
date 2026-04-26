# 函数引用和函数调用

函数引用（把函数当成包裹传走）和函数调用（把包裹拆开用掉）

```js
function sayHi() {
    console.log("你好！");
    return "打招呼完毕";
}

let greet = sayHi; 

console.log("此时控制台不会打印'你好'");
console.log(greet); // 打印出来的是函数代码体本身
```

加上括号立即执行
```js
// 加上括号 ()，函数立即运行
let result = sayHi(); 

// 控制台会立即打印："你好！"
console.log(result); // 打印的是返回值："打招呼完毕"
```

在事件监听中的应用

```js
function handleClick() {
    alert("你点了我！");
}

// ✅ 正确：引用传递
// 告诉浏览器：点击的时候，再去跑 handleClick
button.addEventListener('click', handleClick);

// ❌ 错误：立即调用
// 代码运行到这一行时，对话框会直接弹出来。
// 弹完后，addEventListener 接收到的是 undefined（因为函数没 return），
// 导致之后你真的点击按钮时，没有任何反应。
button.addEventListener('click', handleClick());
```

# Keyword `This` 
当一个函数被直接调用（不带任何前缀）时，this 默认指向全局对象。

```js
function show() {
    console.log(this);
}
show(); // 打印 window
```

当函数作为某个对象的方法被调用时，this 指向这个直接上级对象。

```js
const user = {
    name: "Gemini",
    greet: function() {
        console.log("你好，我是 " + this.name);
    }
};

user.greet(); // 打印：你好，我是 Gemini（this 指向 user）
```

如果你想强制把 this 拨到某个特定对象上，可以使用这三个方法。

- call / apply：立即执行函数，并指定 this。

- bind：返回一个新函数，永久绑定 this。

```js
const person1 = { name: "张三" };
const person2 = { name: "李四" };

function sayName() {
    console.log(this.name);
}

sayName.call(person1); // 打印：张三
sayName.call(person2); // 打印：李四
```

[click this for further more information](/js/example/function%20usage/call()、apply()、bind()%20的用法.md)

当你使用普通函数作为监听器时，浏览器会自动将 this 绑定到当前正在处理事件的 DOM 元素上。这在处理列表点击时非常方便。

```js
const buttons = document.querySelectorAll('.btn');

function highlight() {
    // 这里的 this 指向当前被点击的那个按钮
    this.style.backgroundColor = 'yellow';
    console.log("被点击的按钮文本是:", this.innerText);
}

buttons.forEach(btn => {
    btn.addEventListener('click', highlight);
});

```