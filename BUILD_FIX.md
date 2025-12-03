# Linux 服务器构建错误修复指南

## 错误描述
```
error TS2307: Cannot find module '@mermaid-js/layout-elk' or its corresponding type declarations.
```

## 解决步骤

### 1. 清理所有依赖和构建缓存
```bash
# 在项目根目录执行
yarn clean

# 或者手动清理
rm -rf node_modules
rm -rf packages/*/node_modules
rm -rf packages/*/lib
rm -rf website/node_modules
rm -rf website/.docusaurus
rm -rf website/build
```

### 2. 重新安装依赖
```bash
# 在项目根目录执行
yarn install
```

### 3. 构建项目
```bash
yarn build
```

### 4. 如果上述步骤还有问题，尝试 Bootstrap
```bash
# 清理后重新 bootstrap
yarn clear
yarn install
yarn bootstrap  # 如果有这个命令的话
yarn build
```

## 快速修复（一行命令）

```bash
# 清理并重新构建
rm -rf node_modules packages/*/node_modules website/node_modules && yarn install && yarn build
```

## 其他可能的问题

### Node 版本问题
确保使用正确的 Node 版本（建议 18.x 或 20.x）：
```bash
node --version
```

### Yarn 版本问题
```bash
yarn --version
```

### 权限问题
如果是权限问题，可能需要：
```bash
sudo chown -R $USER:$USER .
```

## 仅构建 website（如果只需要网站）

如果你只需要构建网站部分，可以跳过构建所有包：

```bash
cd website
yarn install
yarn build
```
