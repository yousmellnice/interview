const fs = require('fs');
const path = require('path');

class SimpleWatcher {
  constructor(dir) {
    this.watchers = new Map();
    this.fileCache = new Map(); // 缓存文件内容（可选）
    this.watch(dir);
  }

  watch(dir) {
    // 初始化时先读取文件内容到缓存
    this.readDirFiles(dir);

    const watcher = fs.watch(dir, async (eventType, filename) => {
      const filePath = path.join(dir, filename);
      
      try {
        // 获取文件最新内容
        const newContent = await fs.promises.readFile(filePath, 'utf-8');
        
        // 对比缓存内容（可选）
        const oldContent = this.fileCache.get(filePath) || '';
        if (newContent !== oldContent) {
          this.onChange(filePath, newContent, oldContent);
          this.fileCache.set(filePath, newContent); // 更新缓存
        }
      } catch (error) {
        console.error(`读取文件失败: ${filePath}`, error);
      }
    });
    
    this.watchers.set(dir, watcher);
  }

  // 初始化读取目录文件
  readDirFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isFile()) {
        this.fileCache.set(filePath, fs.readFileSync(filePath, 'utf-8'));
      }
    });
  }

  // 修改后的回调：包含新旧内容
  onChange(filePath, newContent, oldContent) {
    console.log(`文件变化: ${filePath}`);
    console.log('--- 旧内容 ---\n', oldContent.slice(0, 200) + '...'); // 截取前200字符
    console.log('--- 新内容 ---\n', newContent.slice(0, 200) + '...');
    
    // 这里可以触发类似 Webpack 的重新编译逻辑
    // this.recompile(filePath, newContent);
  }
}

// 使用示例
const watcher = new SimpleWatcher('./');