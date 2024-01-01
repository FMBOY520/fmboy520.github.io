/* -------------------- **** -------------------- */
let App = new Vue({
    el: '#App',
    data: {
        // 提供数据
        imgList: [
            { img: `url('./resources/image/Cat/001.jpg` },
            { img: `url('./resources/image/Cat/002.jpg` },
            { img: `url('./resources/image/Cat/003.jpg` },
            { img: `url('./resources/image/Cat/004.jpg` },
            { img: `url('./resources/image/Cat/005.jpg` },
            { img: `url('./resources/image/Cat/006.jpg` },
            { img: `url('./resources/image/Cat/007.jpg` },
            { img: `url('./resources/image/Cat/008.jpg` },
            { img: `url('./resources/image/Cat/009.jpg` },
        ],
        carouselList: [
            { url: 'https://fanyi.baidu.com/', text: '百度翻译' },
            { url: 'https://www.bilibili.com/', text: '哔哩哔哩' },
            { url: 'https://www.csdn.net/', text: 'CSDN' },
            { url: 'https://gitee.com/', text: 'Gitee' },
            { url: 'https://github.com/login', text: 'GitHub' },
            { url: 'https://chat18.aichatos.xyz/', text: 'AIcharOS' },
            { url: 'https://www.csdn.net/', text: 'CSDN' },
        ],
    },
    methods: {
        // 提供处理逻辑函数
    }
})

let ul = document.querySelector('.body-carousel-img ul')
// 克隆第一张图片
let clonefirstImg = ul.firstElementChild.cloneNode()
// 将第一张图片添加至图片列表的末尾
ul.appendChild(clonefirstImg)
// 图片索引 代表当前是第几张图片  index:0代表第一张图片
let index = 0
// 自动轮播
let lock = true;
setInterval(() => {
    if (!lock) return;
    index++;
    ul.style.left = index * -100 + "%";
    ul.style.transition = "0.5s ease";
    if (index === 9) {
        index = 0;
        setTimeout(() => {
            ul.style.left = 0;
            // 取消过渡 500毫秒之后切换第一张
            ul.style.transition = "none";
        }, 500);
    }
}, 2000);
/* -------------------- **** -------------------- */