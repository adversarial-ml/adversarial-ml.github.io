# Academic Project Page Template

这是一个用于学术项目展示的网页模板，可以轻松部署到GitHub Pages。

## 功能特性

- 📄 学术论文展示页面
- 🎨 现代化响应式设计
- 📱 移动端友好
- 🚀 一键部署到GitHub Pages
- 🔧 易于自定义

## 快速开始

### 1. 克隆或下载项目

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

```bash
npm start
```

这将启动一个本地服务器，通常在 `http://localhost:8080`

### 4. 自定义内容

编辑 `public/index.html` 文件，替换以下内容：
- 项目标题和作者信息
- 论文链接和代码链接
- 图片和视频
- 项目描述和摘要

### 5. 部署到GitHub Pages

```bash
npm run deploy
```

## 项目结构

```
.
├── public/            # 静态网站文件
│   ├── index.html    # 主页面
│   └── static/       # 静态资源
│       ├── css/      # 样式文件
│       ├── js/       # JavaScript文件
│       ├── images/   # 图片资源
│       ├── videos/   # 视频资源
│       └── pdfs/     # PDF文档
├── dist/             # 构建输出目录（自动生成）
├── package.json      # npm配置
├── .gitignore       # Git忽略文件
└── README.md        # 项目说明
```

## 部署说明

1. 确保你的GitHub仓库已经创建
2. 更新 `package.json` 中的仓库信息
3. 运行 `npm run deploy` 进行部署
4. 在GitHub仓库设置中启用GitHub Pages

## 自定义指南

### 更换图片
- 将你的图片放在 `public/static/images/` 目录下
- 在 `public/index.html` 中更新图片路径

### 更换视频
- 将视频文件放在 `public/static/videos/` 目录下
- 支持 MP4 格式

### 添加PDF文档
- 将PDF文件放在 `public/static/pdfs/` 目录下
- 在页面中添加下载链接

## 技术栈

- HTML5
- CSS3 (Bulma框架)
- JavaScript
- GitHub Pages
- npm

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request！ 