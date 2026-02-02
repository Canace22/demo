// Popup Script - 控制插件的开启/关闭
(function() {
  'use strict';

  const toggleBtn = document.getElementById('toggleBtn');
  const colorPicker = document.getElementById('colorPicker');
  const colorInput = document.getElementById('colorInput');
  const status = document.getElementById('status');
  let isEnabled = false;

  // 同步颜色输入框和颜色选择器
  function syncColorInputs() {
    colorInput.value = colorPicker.value;
  }

  function syncColorPicker() {
    const color = colorInput.value;
    if (/^#[0-9A-F]{6}$/i.test(color)) {
      colorPicker.value = color;
    }
  }

  colorPicker.addEventListener('input', syncColorInputs);
  colorInput.addEventListener('input', syncColorPicker);

  // 获取当前标签页
  async function getCurrentTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
  }

  // 获取当前状态
  async function getStatus() {
    try {
      const tab = await getCurrentTab();
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'getStatus' });
      return response?.enabled || false;
    } catch (error) {
      console.error('获取状态失败:', error);
      return false;
    }
  }

  // 更新 UI 状态
  function updateUI(enabled) {
    isEnabled = enabled;
    toggleBtn.textContent = enabled ? '禁用绘制' : '启用绘制';
    toggleBtn.classList.toggle('disabled', false);
    status.textContent = enabled ? '已启用' : '未启用';
    status.classList.toggle('active', enabled);
  }

  // 切换绘制状态
  async function toggleDrawing() {
    try {
      const tab = await getCurrentTab();
      const color = colorPicker.value;
      
      toggleBtn.classList.add('disabled');
      toggleBtn.textContent = '处理中...';

      const response = await chrome.tabs.sendMessage(tab.id, {
        action: 'toggle',
        color: color
      });

      updateUI(response?.enabled || false);
    } catch (error) {
      console.error('切换失败:', error);
      alert('无法在当前页面使用此功能。请刷新页面后重试。');
      updateUI(false);
    }
  }

  // 初始化
  async function init() {
    const enabled = await getStatus();
    updateUI(enabled);
  }

  toggleBtn.addEventListener('click', toggleDrawing);
  
  // 页面加载时初始化
  init();
})();
