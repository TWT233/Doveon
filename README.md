<div align="center">
<img src="https://github.com/TWT233/Doveon/raw/master/public/img/icons/android-chrome-512x512.png">
</div>
<h1 align="center">
Doveon
</h1>
<div align="center">
<a href='https://bbs.fygal.com/index.php'> 咕咕镇</a>计算器
</div>

# 项目介绍

作为一条不想手写配置文件的懒狗，来写个 UI 版计算器

~~logo 随手画的，摇了我 8（有巨巨帮我画一个更好乌乌~~

在 Iconfont 上找到一个可爱的鸽子当 logo，作者主页：https://www.iconfont.cn/user/detail?spm=a313x.7781069.1998910419.34

# 从源代码运行/调试

```shell
git clone https://github.com/TWT233/Doveon.git
cd doveon
yarn install
yarn build
yarn serve
```

# Current Working on

模拟 PVE

# Current Stage TODO:

- [ ] 编辑进攻方、防守方
- [ ] 读取当前配装导出成可处理的角色
- [ ] 处理工作循环

# TODO：

- [x] 装备
- [x] 加点
- [x] 计算面板
- [x] 存储配置
- [x] UI 优化
- [x] 翻译(可后推)
- [ ] 存储多套配装
- [x] 导出配置到现有计算器
- [x] 光环
- [x] 卡片选择
- [ ] 技能
- [x] 存储装备
- [ ] UI 优化
- [ ] 模拟 PVE
- [ ] 模拟 PVP
- [ ] UI 优化
- [ ] 计算加点方案
- [ ] 嵌入游戏/从游戏中解数据(可能是新坑)

# 开发规范

## 代码规范

Prettier + Default Settings

## Git Commit Message

首先 Commit Message 最好用英文写

header 格式: [tag] + abstract

e.g. [add] BuildRatingTest.ts: unit test on `Build Rating`

Tag List:_非 Commitizen 标准_

- add : 添加功能 / UI
- mod : 修改功能
- fix : 修 Bug，需在 abstract 中标明关联 issue
- rm : 移除功能
- doc : 改文档
- lint : linter 改的东西
- typo : 修正 typo
- 有其他需要可添加

message body 没有什么要求，容易理解即可

## release 规范

提交一个 commit，内容为：

- 对 README.md（本文件）的修改：
  - 在[更新日志](https://github.com/TWT233/Doveon#%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97)节添加 log
- 对 package.json 的修改：
  - 修改版本号

然后对该 commit 打一个 tag，tag name 为版本号

将 commit 和 tag push 即可，之后可以在 github 上写一下 release abstract

# 更新日志

v0.2.5

新增：

- 武器
  - 光辉法杖(WAND)
- 光环
  - 忍无可忍(REN)
- 简单的战斗模拟
  - 目前还是雏形，近期将快速更新

修复：

- 修复多处错误、添加边界检查
- 大量逻辑代码重构
  - 提升了代码可读性、稳定性、复用性
  - 如果大家想来 contribute 的话应该会比以前方便很多（吧
- 界面布局重构
  - 欢迎大家继续提 UI 意见！（因为我真的不擅长写 UI
- 交互优化
  - 也欢迎大家来提 UX 意见！（因为我交互设计也只在入门阶段

v0.2.0

新增功能：

- 选择卡片、编辑卡片
- 导出 .in 文件时导出卡片信息
- 装备库功能

修复：

- HP 计算公式中的问题
- 缺失翻译
- 探险者手套的处理函数错误
- 装备库加载函数的逻辑错误
- Gear 类构造函数中的错误

调整：

- UI 调整
- 界面布局调整
  - 欢迎提 UI 意见！（因为我真的不擅长写 UI
- 内部功能调整

v0.1.0

- 完成了基础的面板数值计算功能
- 完成了导出配装到 .in 的功能
- 完成了保存配装到当前浏览器的功能
