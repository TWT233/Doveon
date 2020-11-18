<div align="center">
<img src="https://github.com/TWT233/Doveon/raw/master/public/img/icons/android-chrome-192x192.png">
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

模拟战斗

## Short Term RoadMap

1. SPD 计数器需不需要重新设计
2. 填光环、填卡片技能

## 设计：

参与战斗的角色，无论是 PC 还是 NPC，在进入战斗时都统筹为 Mob：

Mob 进入战斗需要两类信息：面板状态 status + 技能列表 skill（主动、被动是不是可以分开列）
PC/NPC->Mob，两类信息来源：(打[]的说明是静态数据)

|     |      status       |      skill       |
| :-: | :---------------: | :--------------: |
| PC  |   suit+pts+aura   | suit+[card]+aura |
| NPC | [type]+lvl+p+aura |   [type]+aura    |

不过不管怎么样，能拿到 status+skill 就行

PC->Mob 可以给 build 加接口，build 里啥都有，不过还需要考虑一下 PVP 中，对方 PC 怎么变成 Mob

参考一下 C++计算器：从游戏里拿面板，所以需要加一个.in->Mob 的接口。
不过这有几个问题：1.需不需要一个中间层 2.光环怎么拿（光环里的技能为主，只影响面板的光环不需要，因为可以直接拿到面板）

中间层先搁置不谈，光环基本没有数据来源，所以我认为也是需要手动设置

NPC->Mob 就需要新添东西了，不过之前也没有实现过相关的东西，正好加点

### P2

接下来还有怎么表示 status 和 skill 的问题，但是先放一下，先想一下怎么描述战斗

首先定义 Action，用以表示一次出手，battleLog 就是一个 Array<\Action>

一次出手需要保存什么信息：出手前的双方状态，出手后的双方状态，双方在这一动里做了什么动作（主被动）

出手前状态：before:stauts，出手后状态：after:status，做了什么动作：Array<\skill>，需要确保可复盘

因为做了动作，总会上点 flag 或者 buff，这个初步设计存在 status 里

### P3

所以战斗设计叫 Battle：

```typescript
Battle:{
  a:Mob;
  b:Mob;
  log:Array<Action>
}

Mob:{
  status:DynStatus;
  skills:Array<Skill>
}

Action:{
  a:Mob;
  b:Mob;
  before:battleFrame;
  after:batlleFrame
}

battleFrame:{
  a:DynStatus;
  b:DynStatus;
  e:battleStatus;
}

battleStatus:{
  spd:number
}

DynStatus:{
  // Status...
  buffs:Array<{name:string,val:number}>
}

Skill:{
  name:string
  type:string
  handler:(before:battleFrame,doer:'a'|'b'|'0',ge:'a'|'b'|'0')=>battleFrame
}
```

### P4

最近实现模拟的时候一直在头疼机制问题，然后开始看 b 大写的 C++版计算器

定位到 `calcBattle()`，记录一下，目标是梳理出各类加成的公式形式，流程如下：

1. 应用光环、卡片、武器神秘的被动面板加成
   1. 这里也会进行暴击率、技能率的抵消，要注意一下顺序
2. 速度计数器结算、判断出手方、轮次计算器刷新
3. 判定是否暴击、魔爆、技能
4. 被动技能结算：
   1. 神秘匕首 AI
   2. MENG 叠技能
   3. 沸血加攻
   4. 神秘刺杀弓
5. 暴击结算
   1. 飓风
   2. 神秘刃
6. 主动技能
7. 魔爆
   1. 神秘手环
8. 伤害结算前
   1. 默被动
   2. 薇被动
9. **伤害结算**
   1. 薇被动
   2. 吸血
   3. 默被动
10. 反伤 + 反伤吸血
11. **回合判定，回血回盾**
12. 伤害、吸血、回血结算进血盾
13. 判定战斗是否结束（一方倒下 / 100 回合）

所以可以把技能分成下面几类：

1. 被动 beforeCrit
2. 暴击触发 onCrit
3. 主动技能 active
4. 魔爆触发 onMC
5. 伤害前（最外围加伤/减伤）beforeATK
6. 伤害后 afterATK

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
- [x] UI 优化
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

v0.3.0

新增：

- 光环
  - 复合护盾(DUN)

调整：

- 换了 logo，来源于 IconFont 公开资源

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
