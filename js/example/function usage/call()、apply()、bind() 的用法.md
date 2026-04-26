```js
var name = 'alice', age = 17
var obj = {
    name: 'bob',
    objAge: this.age,
    objFun: function(){
        console.log(this.name+'\'s'+' age'+ ' '+this.age)
    }
}
```

> obj.objAge; // 17
>
> obj.objFun() // bob's age undefined

```js
var fav = 'alice' 
function show(){
    console.log(this.fav)
}

show() // alice
```
比较一下这两者 this 的差别，第一个打印里面的 this 指向 obj，第二个全局声明的 shows() 函数 this 是 window ；

call()、apply()、bind() 都是用来重定义 this 这个对象的

```js
var name='小王', age=17;
var obj={
    name:'小张',
    objAge:this.age,
    myFun:function(){
        console,log(this.name+"年龄"+this.age);
    }
}
var db={
    name:'德玛',
    age:99
}

obj.myFun.call(db);  // 德玛年龄 99
obj.myFun.apply(db);  // 德玛年龄 99
obj.myFun.bind(db)(); // 德玛年龄 99
```