<div align="center">
<img src="https://raw.githubusercontent.com/TWT233/Doveon/master/src/assets/icon.png">
</div>
<h1 align="center">
Doveon
</h1>
<div align="center">
<a href='https://bbs.fygal.com/index.php'> 咕咕镇</a>计算器
</div>

# 项目介绍

作为一条不想手写配置文件的懒狗，来写个 UI 版计算器

logo 随手画的，摇了我 8（有巨巨帮我画一个更好乌乌

# 从源代码运行/调试

```shell
git clone https://github.com/TWT233/Doveon.git
cd doveon
yarn install
yarn build
yarn serve
```

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
- [ ] 存储装备
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

## 更新日志

v0.1.0

- 完成了基础的面板数值计算功能
- 完成了导出配装到 .in 的功能
- 完成了保存配装到当前浏览器的功能
