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
    this.ctx.strokeStyle = color || 'red';

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
    // 获取 Canvas 的实际位置（无论 fixed 还是 absolute，都使用实际位置）
    // getBoundingClientRect() 返回相对于视口的坐标，与 getClientRects() 的坐标系统一致
    const canvasRect = this.canvas.getBoundingClientRect();

    this.targetEle.forEach((ele) => {
      const eachELRects = [...ele.getClientRects()]
        .filter((rect) => {
          return rect.width || rect.height;
        })
        .map((rect) => {
          // 将元素的视口坐标转换为 Canvas 坐标
          // getClientRects() 和 getBoundingClientRect() 都返回相对于视口的坐标
          // 所以只需要减去 Canvas 的位置偏移即可
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
