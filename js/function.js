// 页面DOM加载完成后执行代码的快捷写法
$(()=>{
    // get the four div
    // 返回一个 NodeList
    var items = document.querySelectorAll('.hot .info')
    // console.log(items)
    for(let item of items){
        let info = item.textContent.trim()
        let infoNum = parseFloat(info)
        // console.log(infoNum)
        if(infoNum<0){
            item.style.color = 'green'
        } else{
            item.style.color = 'red'
        }
    }

})



// 搜索页面
$(function(){
    // 点击页面其它区域时隐藏结果面板
    $('body').click(function(){
        $('div.result').hide();
    });

    // 点击/聚焦输入框时显示面板，并阻止事件冒泡
    $('.searchStrings').click(function(event){
        event.stopPropagation();
        // $('div.result').show();
        showContent.call(this) // 传递引用，不能加括号
    }).focus(function(event){
        event.stopPropagation();
        // $('div.result').show();
        showContent.call(this)
    }).keyup(function(){
        showContent.call(this)
    });
})

function showContent(){
    $('div.result').show();
    $('div.result').html(); // 拿到盒子的内容
    let val = $(this).val() // 获取输入的内容
    let context = '<ul>'
    let newArray = arrFundProducts.filter((item)=>{
        if(item.fundcode.indexOf(val) != -1 || item.fundname.indexOf(val) != -1){
            context = context + '<li>' + item.fundcode+'<br/>'+item.fundname+'</li>'
        }
    })
    context +=  '</ul>'
    $('div.result').html(context)
}


// 修改表格td颜色
$(()=>{
    let tds = document.querySelectorAll('tbody tr td:nth-child(6)')
    let infoNum = 0
    for(let td of tds){
        infoNum = parseFloat(td.textContent)
        console.log(infoNum)
        if(infoNum < 0){
            td.style.color = 'green'
        } else{
            td.style.color = 'red'
        }
    }
})

// 修改表头单击 （jQuery）
// $(()=>{
//     $('.product-nav li').click((evt)=>{
//         console.log('li was clicked')
//         // $(evt.Target).addClass('active').siblings().removeClass('active')
//         $(evt.currentTarget).addClass('active').siblings().removeClass('active')
//     })
// })
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.product-nav li');

  items.forEach(li => {
    li.addEventListener('click', (e) => {
    //   console.log('li was clicked');

      // 移除所有 active
      items.forEach(item => item.classList.remove('active'));

      // 给当前点击的加 active
      e.currentTarget.classList.add('active');
    });
  });
});

// 筛选
$(()=>{
    $('.product-nav li').click((e)=>{
        let table,tr,td,index
        index = $(e.currentTarget).index() // 获取 li 的各个索引
        console.log(index)

        // 获取表内容
        table = document.getElementsByTagName('tbody')
        // 获取 tr
        tr = table[0].getElementsByTagName('tr')
        // 遍历 tr
        for(let i = 0; i< tr.length; i++){
            // 获取第二个td ( <td>中风险（R2）</td> ) 
            td = tr[i].getElementsByTagName('td')[2]
            id = td.innerHTML.toUpperCase()
            if(td){
                if(index === 0 || index === 1 || index === 2 || index ===5 || index === 7){
                    tr[i].style.display = ''
                } else if(index === 3){
                    if(id.indexOf('R1') > -1){
                        tr[i].style.display = ''
                    } else{
                        tr[i].style.display = 'none'
                    }
                } else if(index === 4){
                     if(id.indexOf('R2') > -1){
                        tr[i].style.display = ''
                    } else{
                        tr[i].style.display = 'none'
                    }
                } else if(index === 6){
                      if(id.indexOf('R3') > -1){
                        tr[i].style.display = ''
                    } else{
                        tr[i].style.display = 'none'
                    }
                }
            }
        }
    })
})

// list item
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.content ul li');
    for(let item = 1; item < items.length; item++){
        // console.log(item)
        items[item].addEventListener('click', (e)=>{
            // console.log('li was clicked')
            // 移除所有 active
            items.forEach(item => item.classList.remove('actived'));
            // 给当前点击的加 active
            e.currentTarget.classList.add('actived');
        })
    }
})

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const buttons = document.querySelectorAll('.center-content button');
    console.log(buttons)
    buttons.forEach(button => {
        button.addEventListener('click', (e)=>{
            console.log('button was clicked')
            // 移除所有 active
            buttons.forEach(button => button.classList.remove('button-actived'));
            // 给当前点击的加 active
            e.currentTarget.classList.add('button-actived');
        })
    })


})