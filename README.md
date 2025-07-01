# wechat-crm

> 🎯 一个用于练手全栈技能的 WeChat 风格 CRM 系统，由前端开发者 Maggie Zhou 亲自设计与实现，目标是实现从前端转型为全栈开发的能力闭环。

## 📌 项目简介

本项目模拟一个轻量级的客户管理系统（CRM），包含登录、客户信息管理、数据增删改查、分页筛选等基本功能。后续计划集成真实数据库、JWT 登录鉴权、部署上线等完整链路，作为全栈转型能力展示项目。

## 🛠 技术栈

| 模块   | 技术                                           |
| ------ | ---------------------------------------------- |
| 前端   | React 18 + TypeScript + Vite + TailwindCSS     |
| 后端   | NestJS + TypeScript + Prisma ORM               |
| 数据库 | PostgreSQL（开发阶段使用 SQLite）              |
| 部署   | Railway (后端) + Vercel (前端)                 |
| 其他   | pnpm、ESLint、Prettier、GitHub Actions（可选） |

## 📆 学习与开发计划（4 周）

| 周次    | 目标                                      |
| ------- | ----------------------------------------- |
| 第 1 周 | 完成项目结构搭建、登录页面原型与静态 UI   |
| 第 2 周 | 搭建 NestJS API、数据库结构、实现登录注册 |
| 第 3 周 | 前后端联调、状态管理（Auth）、CRUD 功能   |
| 第 4 周 | 部署上线、优化体验、补文档与总结日志      |

## 🗂 项目结构

```
wechat-crm/
├── client/     # React 前端代码
├── server/     # NestJS 后端代码
├── README.md   # 项目说明文档
└── .gitignore
```

## 🔧 启动方式（本地开发）

```bash
# 前端
cd client
pnpm install
pnpm dev

# 后端
cd ../server
pnpm install
pnpm start:dev
```

## ✨ 项目亮点（开发过程中补充）

- [ ] 完整的全栈架构设计
- [ ] Token 登录认证与前端持久化
- [ ] 自研通用表格组件（分页、搜索）
- [ ] GitHub 每日日志记录（docs/daily-log/）

## 📖 进度记录

| 日期       | 内容                                  |
| ---------- | ------------------------------------- |
| 2025/07/01 | 初始化项目结构，完成 Nest + Vite 创建 |
| 2025/07/02 | ...                                   |
| 2025/07/03 | ...                                   |

---

## 🧑‍💻 作者信息

**Maggie Zhou（周玥）**  
前端转型全栈中，擅长 React / Vue / React Native，熟悉组件架构、性能优化和团队协作。  
目标岗位：全栈开发、资深前端、技术负责人。

GitHub: [@Maggie5821](https://github.com/Maggie5821)

## 📄 License

MIT
