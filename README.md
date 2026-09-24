# Yiyang Tan · Personal website

个人主页 + Markdown Blog/笔记，使用 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 生成，由 GitHub Pages 发布到 <https://tanngent2005.github.io/>。

## 最常修改的文件

| 你要修改什么 | 文件 |
| --- | --- |
| 首页姓名、研究方向、项目卡片、按钮 | `docs/index.html` |
| 首页颜色、排版、手机适配 | `docs/assets/css/home.css` |
| About 页面和公开联系方式 | `docs/about.md` |
| Blog 列表 | `docs/blog/index.md` |
| 笔记列表及 PDF 链接 | `docs/notes/index.md` |
| Blog 和 Notes 的菜单顺序 | `mkdocs.yml` 中的 `nav:` |
| Blog 阅读页配色 | `docs/assets/css/writing.css` |

**先改首页：**在 `docs/index.html` 中搜索 `Hi, I’m`、`research`、`work`、`contact` 即可定位对应区域。研究项目卡片里目前放了少量起始内容；按你的最终信息修改或删除。当前没有发布你的个人邮箱或 CV。

## 在 Windows 本地预览

电脑需要已安装 Python 和 Git。在 PowerShell 中，进入本仓库目录运行：

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

打开终端输出的本地地址（通常是 `http://127.0.0.1:8000/`）。修改文件并保存，浏览器会自动刷新。这里直接调用虚拟环境的 Python，无需更改 PowerShell 执行策略。

## 新增一篇 Blog

1. 复制 `templates/post-template.md`，保存为 `docs/blog/你的英文文件名.md`。用 Markdown 写文章。
2. 在 `mkdocs.yml` 的 `nav:` → `Writing:` 下加一项，例如 `- 我的论文阅读: blog/paper-reading.md`。
3. 在 `docs/blog/index.md` 的 `## Posts` 下加一行，例如 `- [我的论文阅读](paper-reading.md) · Paper reading`。
4. 本地运行 `python -m mkdocs serve` 检查链接，再提交到 GitHub。

文章里的图片放到 `docs/assets/images/`，引用格式为 `![图片说明](../assets/images/figure.png)`。数学公式可以写 `$E=mc^2$` 或 `$$...$$`。PDF 可放到 `docs/notes/` 并从 `docs/notes/index.md` 链接，例如 `[课程总结](summary.pdf)`。

写好第一篇后，把 `docs/blog/index.md` 里的 “The first article is on its way.” 换成真实文章链接。

## 发布

修改源文件后提交并推送到 `main`。GitHub Actions 会自动构建并发布网站。可在仓库的 **Actions** 标签查看构建结果。

```powershell
git add .
git commit -m "Update website content"
git push origin main
```

网站使用 **Settings → Pages → Build and deployment → Source: GitHub Actions**。构建脚本在 `.github/workflows/deploy.yml`，一般无需手动运行。

请在 `main` 修改源码。旧 Hexo 网站保存在 `archive/hexo-2025` 分支，方便查看和恢复。

## 文件组织

`docs/index.html` 是自定义首页，`docs/blog/*.md` 和 `docs/notes/*.md` 由 MkDocs 生成；`site/` 是本地构建结果，已经加入 `.gitignore`。
