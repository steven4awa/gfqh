// https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList

const div = document.createElement("div");
div.className = "foo";

// 初始状态：<div class="foo"></div>
console.log(div.outerHTML);

// 使用 classList API 移除、添加类值
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// 如果 visible 类值已存在，则移除它，否则添加它
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

console.log(div.classList.contains("foo"));

// 添加或移除多个类值
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// 使用展开语法添加或移除多个类值
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// 将类值 "foo" 替换成 "bar"
div.classList.replace("foo", "bar");