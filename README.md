# Yiyang Tan · Research & Notes

网站：<https://tanngent2005.github.io/>

一份简洁的学术个人主页，以及用 Markdown 维护的 Writing / Notes。首页使用独立 HTML、CSS 和少量 JavaScript；文章页由 MkDocs Material 构建。提交到 `main` 后，现有 GitHub Actions 会自动发布到 GitHub Pages。

## 设计与内容

- 浅色纸面、墨蓝文字、细分隔线；首页和阅读页都有深色模式。
- 首页：个人介绍 → 近期动态 → 研究工作 → 教育 / 教学 / 获奖 → 博客与笔记入口。
- 论文配图是原创概念示意图，不是论文原图或实验数据。
- Writing 和 Notes 目前没有发布文章，页面保留真实的空状态，方便之后添加。
- 首页不依赖第三方字体、动画服务或远程图片。论文链接和 MathJax 公式加载需要网络。

## 修改位置

| 要修改的内容 | 文件 / 搜索位置 |
| --- | --- |
| 姓名、介绍、邮箱 | `docs/index.html`：`INTRO` |
| 近期动态 | `docs/index.html`：`NEWS` |
| 论文、作者、链接 | `docs/index.html`：`RESEARCH`，每项是 `article.paper` |
| 教育、助教、获奖 | `docs/index.html`：`EXPERIENCE` |
| 主页颜色 | `docs/assets/css/home.css`：开头 `:root` 和深色变量 |
| 字号、间距、手机布局 | `docs/assets/css/home.css` |
| 深色模式按钮 | `docs/assets/js/home.js` |
| 论文概念插图 | `docs/assets/images/*-concept.svg` |
| 博客列表 | `docs/blog/index.md` |
| 笔记分类和列表 | `docs/notes/index.md` |
| 详细个人介绍 | `docs/about.md` |
| 文章页样式 | `docs/assets/css/writing.css` |
| 网站导航 | `mkdocs.yml`：`nav` |

修改姓名、研究介绍或联系方式时，同时检查 `docs/index.html` 与 `docs/about.md`，让内容保持一致。

### 增加个人照片（可选）

当前首页右侧是一张研究兴趣便笺，无需照片也可以完整展示。如果以后想使用个人照：

1. 上传照片到 `docs/assets/images/portrait.jpg`。
2. 把首页的 `<aside class="research-note">...</aside>` 替换为你的照片容器。
3. 用 `width:100%`、`aspect-ratio:4/5`、`object-fit:cover` 控制照片裁剪；补上准确的 `alt`。
4. 手机宽度下检查新容器的排列。当前研究便笺在 800px 以下隐藏，可按需要调整。

## 在 Windows 本地预览

先安装 Python 和 Git，克隆仓库后在 PowerShell 运行：

```powershell
git clone https://github.com/Tanngent2005/Tanngent2005.github.io.git
cd Tanngent2005.github.io
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

打开终端显示的地址，通常为 `http://127.0.0.1:8000/`。直接调用虚拟环境中的 Python，无需改变 PowerShell 执行策略。

## 写第一篇文章

1. 复制 `templates/post-template.md` 为 `docs/blog/my-first-post.md`。
2. 用 Markdown 填写标题、日期、内容。
3. 删除 `docs/blog/index.md` 里 `<div class="empty-journal">...</div>` 这段空状态，添加实际文章链接，例如：

```markdown
## 2026

- **Sep 30** · [我的第一篇文章](my-first-post.md) — 一句话简介。
```

4. 在 `mkdocs.yml` 的 Writing 导航下加入：

```yaml
  - Writing:
      - Journal: blog/index.md
      - 我的第一篇文章: blog/my-first-post.md
```

5. 预览并运行 `python -m mkdocs build --strict` 检查后提交。

图片放在 `docs/assets/images/`，文章中使用 `![说明](../assets/images/figure.png)`。行内公式用 `$...$`，独立公式用 `$$...$$`。公式支持由 MathJax 提供；代码块用三个反引号开始和结束。

新增笔记的流程相同：文件放进 `docs/notes/`，然后更新笔记目录和 `mkdocs.yml`。PDF 也可以放在这里并用相对链接引用。

## 发布与恢复

```powershell
git add docs mkdocs.yml README.md templates requirements.txt
git commit -m "Update website"
git push origin main
```

在仓库 **Actions** 中查看 `Build and deploy website` 是否成功。Pages 发布有时需要等待缓存更新。自动发布配置保存在 `.github/workflows/deploy.yml`，无需为了日常写作而修改。

- `main` 保存源码；`site/` 是生成目录，已经忽略，不用提交。
- 修改前先运行 `git pull`，避免覆盖网页端的修改。
- Git 历史保留了原设计，可以用 `git revert <commit>` 撤销某次改版。
- 更早的 Hexo 网站保存在 `archive/hexo-2025` 分支。

## 设计参考

参考了以下站点的信息组织与学术展示方式；本网站的布局、配色、样式和概念插画重新编写：

- <https://kkzsocute.github.io/>
- <https://bearthesilly.github.io/>
- <https://wangzh12023.github.io/>

### 检查不同屏幕宽度

打开 `/layout-preview.html` 可以在同一个页面选择 390px、768px 和 1120px 预览框，检查实际响应式排版。它用 iframe 显示本站，未放入公开导航，并设置了 `noindex`。手机实机仍可直接打开网站进行检查。
