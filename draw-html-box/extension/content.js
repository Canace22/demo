// Content Script - 在页面上注入绘制功能
(function() {
  'use strict';

  const CANVAS_ID = 'draw-html-box-canvas';
  let drawInstance = null;
  let isEnabled = false;

  // 创建 Canvas 覆盖层
  function createCanvas() {
    // 如果已存在，先移除
    const existingCanvas = document.getElementById(CANVAS_ID);
    if (existingCanvas) {
      existingCanvas.remove();
    }

    const canvas = document.createElement('canvas');
    canvas.id = CANVAS_ID;
    // 先设置基本样式，尺寸由 init 方法设置
    canvas.style.cssText = `
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999999;
      pointer-events: none;
    `;
    document.body.appendChild(canvas);
    return canvas;
  }

  // 更新 Canvas 尺寸（已废弃，init 方法会处理）
  // 保留此函数以防其他地方调用，但实际由 init 方法处理尺寸设置
  function updateCanvasSize(canvas) {
    // 尺寸设置由 DrawElementBounds.init() 方法处理
    // 这里不需要做任何操作
  }

  // 启用绘制
  function enableDrawing(color = 'red') {
    if (isEnabled) {
      return;
    }

    const canvas = createCanvas();

    drawInstance = new DrawElementBounds();
    drawInstance.init({
      ele: `#${CANVAS_ID}`,
      color: color
    });

    // 等待页面完全加载后再绘制
    if (document.readyState === 'complete') {
      drawInstance.draw();
    } else {
      window.addEventListener('load', () => {
        drawInstance.draw();
      });
    }

    // 监听窗口大小变化
    const resizeHandler = () => {
      if (isEnabled && drawInstance) {
        drawInstance.clear();
        drawInstance.init({
          ele: `#${CANVAS_ID}`,
          color: color
        });
        drawInstance.draw();
      }
    };
    window.addEventListener('resize', resizeHandler);

    // 监听滚动，重新绘制
    const scrollHandler = () => {
      if (isEnabled && drawInstance) {
        drawInstance.clear();
        drawInstance.draw();
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    isEnabled = true;
  }

  // 禁用绘制
  function disableDrawing() {
    if (!isEnabled) {
      return;
    }

    const canvas = document.getElementById(CANVAS_ID);
    if (canvas) {
      canvas.remove();
    }

    drawInstance = null;
    isEnabled = false;
  }

  // 切换绘制状态
  function toggleDrawing(color) {
    if (isEnabled) {
      disableDrawing();
    } else {
      enableDrawing(color);
    }
    return isEnabled;
  }

  // 监听来自 popup 的消息
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggle') {
      const enabled = toggleDrawing(request.color);
      sendResponse({ enabled: enabled });
    } else if (request.action === 'enable') {
      enableDrawing(request.color);
      sendResponse({ enabled: true });
    } else if (request.action === 'disable') {
      disableDrawing();
      sendResponse({ enabled: false });
    } else if (request.action === 'getStatus') {
      sendResponse({ enabled: isEnabled });
    }
    return true; // 保持消息通道开放
  });

  // 页面加载完成后，检查是否需要自动启用
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // 可以在这里添加自动启用的逻辑
    });
  }
})();
