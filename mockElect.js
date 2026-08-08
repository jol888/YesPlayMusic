const fs = require('fs');
const path = require('path');

const electronIndexPath = path.join(__dirname, '../node_modules/electron/index.js');

if (fs.existsSync(electronIndexPath)) {
  const mockContent = `
    module.exports = {
      ipcRenderer: { on: () => {}, send: () => {}, invoke: () => Promise.resolve(), removeAllListeners: () => {} },
      remote: {},
      shell: {}
    };
  `;
  fs.writeFileSync(electronIndexPath, mockContent, 'utf-8');
  console.log('Successfully mocked electron for web build.');
}
