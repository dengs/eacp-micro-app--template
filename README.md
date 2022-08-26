# eacp-micro-app

> 翰智EACP平台 — 微应用开发模板项目

## 项目配置

### @安装依赖

```bash
# used yarn
yarn --registry=http://microdev.realty.hanzhigroup.cn:9072/repository/npm-group/
# use npm 
npm i --registry=http://microdev.realty.hanzhigroup.cn:9072/repository/npm-group/
```

### @启动项目

* 启动EACP平台基座

  > 默认端口：9527
  >
  > 访问地址：http://localhost:9527/eacp
  >
  > _调整配置：`eacp-admin.config.js`_

  ```bash
  # used yarn
  yarn admin
  # used npm
  npm run admin
  ```

* 启动微应用（当前项目）

  默认端口：9001

  访问地址：http://localhost:9001/micro-app 

  （注：微应用不直接访问，需要将当前应用在【微应用管理】进行注册）

  _调整配置：`vue.config.js`_

  ```bash
  # used yarn
  yarn dev
  # used npm
  npm run dev
  ```

* 便捷启动（推荐，EACP平台基座 + 微应用）

  ```bash
  # used yarn
  yarn dev:admin
  # used npm
  npm run dev:admin
  ```

### @微应用项目构建

* 测试环境构建

  > 配置文件：`.env.test`

  ```bash
  # used yarn
  yarn build:test
  # used npm
  npm run build:test
  ```

* 用户验收环境构建

  > 配置文件：`.env.uat`

  ```bash
  # used yarn
  yarn build:uat
  # used npm
  npm run build:uat
  ```

* 生产环境构建

  > 配置文件：`.env.prod`

  ```bash
  # used yarn
  yarn build:prod
  # used npm
  npm run build:prod
  ```

### Lints and fixes files

```bash
# used yarn
yarn lint
# used npm
npm run lint
```
