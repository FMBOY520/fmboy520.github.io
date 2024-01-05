/* -------------------- **** -------------------- */
let App = new Vue({
    el: '#App',
    data: {
        // 提供数据
        imgList: [
            { img: './resources/image/Cat/001.jpg' },
            { img: './resources/image/Cat/002.jpg' },
            { img: './resources/image/Cat/003.jpg' },
            { img: './resources/image/Cat/004.jpg' },
        ],
        carouselList: [
            { url: 'https://fanyi.baidu.com/', text: '百度翻译' },
            { url: 'https://www.bilibili.com/', text: '哔哩哔哩' },
            { url: 'https://www.csdn.net/', text: 'CSDN' },
            { url: 'https://gitee.com/', text: 'Gitee' },
            { url: 'https://github.com/login', text: 'GitHub' },
            { url: 'https://chat18.aichatos.xyz/', text: 'AIcharOS' },
        ],
    },
    methods: {
        // 提供处理逻辑函数
    }
})

// 轮播图
let div = document.querySelector('.body-carousel-img div')
// 克隆第一张图片
let clonefirstImg = div.firstElementChild.cloneNode()
// 将第一张图片添加至图片列表的末尾
div.appendChild(clonefirstImg)

// 图片索引
let index = 0
// 自动轮播
setInterval(() => {
    index++;
    div.style.transition = ".8s";
    div.style.left = index * -100 + "%";
    if (index === App.imgList.length) {
        index = 0;
        setTimeout(() => {
            div.style.left = 0;
            // 取消过渡 800毫秒之后切换第一张
            div.style.transition = "none";
        }, 800);
    }
}, 2000);
/* -------------------- **** -------------------- */