// 把页面上所有盒子的轮廓画到一个 canvas 元素上
class DrawElementBounds {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.targetEle = [];
  }

  /*
  @params
  ele string - 选择器
  target string -  要绘制盒子的目标元素选择器
  color 颜色值 - 盒子的颜色
   */
  init({ ele, target, color }) {
    this.canvas = document.querySelector(ele);
    // 根据 Canvas 的定位方式设置尺寸
    const isFixed = window.getComputedStyle(this.canvas).position === 'fixed';
    const dpr = window.devicePixelRatio || 1;
    
    let width, height;
    if (isFixed) {
      // fixed 定位使用视口尺寸
      width = window.innerWidth;
      height = window.innerHeight;
    } else {
      // absolute 定位使用文档尺寸
      width = document.documentElement.offsetWidth;
      height = document.documentElement.offsetHeight;
    }
    
    // 考虑设备像素比，提高高 DPI 屏幕的清晰度
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    
    this.ctx = this.canvas.getContext('2d');
    // 缩放上下文以匹配设备像素比
    this.ctx.scale(dpr, dpr);
    this.ctx.strokeStyle = color || 'yellow';

    let targetEle = [];
    if (!target || !target.length) {
      targetEle = [...document.querySelectorAll('*')];
    } else {
      target.forEach((ele) => {
        targetEle = [...targetEle, ...document.querySelectorAll(ele)];
      });
    }

    this.targetEle = [...targetEle];
  }

  // 绘制元素盒子
  draw() {
    const rects = this.getAllRects();
    const ctx = this.ctx;
    let i = 0;

    window.requestAnimationFrame(_draw); //浏览器重绘前执行一下

    function _draw() {
      let { x, y, width, height } = rects[i++];

      ctx.strokeRect(x, y, width, height);
      if (i < rects.length) {
        window.requestAnimationFrame(_draw); //1s重绘60次
      } else {
        console.log('dom元素遍历完了');
      }
    }
  }

  // 获取盒子的 size 相关值
  getAllRects() {
    const rects = [];
    // 检查 Canvas 的定位方式
    const isFixed = window.getComputedStyle(this.canvas).position === 'fixed';
    
    // 对于 fixed 定位的 Canvas，直接使用视口坐标（因为 fixed 元素相对于视口定位）
    // 对于 absolute 定位的 Canvas，需要获取 Canvas 位置进行坐标转换
    const canvasRect = isFixed ? { left: 0, top: 0 } : this.canvas.getBoundingClientRect();

    this.targetEle.forEach((ele) => {
      const eachELRects = [...ele.getClientRects()]
        .filter((rect) => {
          return rect.width || rect.height;
        })
        .map((rect) => {
          // 将元素的视口坐标转换为 Canvas 坐标
          // 对于 fixed 定位的 Canvas，元素坐标已经是相对于视口的，Canvas 也在视口 (0,0)
          // 对于 absolute 定位的 Canvas，需要减去 Canvas 的位置偏移
          return {
            x: rect.x - canvasRect.left,
            y: rect.y - canvasRect.top,
            width: rect.width,
            height: rect.height,
          };
        });
      rects.push(...eachELRects);
    });

    return rects;
  }

  // 清除画布
  clear() {
    const dpr = window.devicePixelRatio || 1;
    const isFixed = window.getComputedStyle(this.canvas).position === 'fixed';
    const width = isFixed ? window.innerWidth : document.documentElement.offsetWidth;
    const height = isFixed ? window.innerHeight : document.documentElement.offsetHeight;
    this.ctx.clearRect(0, 0, width, height);
  }
}
