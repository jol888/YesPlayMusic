// 当在 Web 环境打包时，代理掉 Electron 的 IPC 模块，防止报缺失二进制文件错误
module.exports = {
  ipcRenderer: {
    on: () => {},
    send: () => {},
    invoke: () => Promise.resolve(),
    removeAllListeners: () => {},
  },
  remote: {},
  shell: {},
};
