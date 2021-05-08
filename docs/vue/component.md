
# 组件间通信

## props传参

- 父传子`props`
- 子传父 `$emit`

## 非props传参

- 父传子`$attrs`
- 子传父`$listeners`（<a href="https://v3.cn.vuejs.org/guide/migration/listeners-removed.html#%E6%A6%82%E8%A7%88">`vue3`已废弃</a>）

## 获取组件实例

- `$parent`
- `$children`
- `$root`
- `$refs`

## 深入穿透

- `provide/inject`

（`provide` 和 `inject` 绑定并不是可响应的。如果传入的是一个可监听的对象，那么其对象的 `property` 还是可响应的。）（<a href="https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html" >`vue3` 是响应式的</a>）

## vuex

五大核心

- state
- mutation
- action
- getter
- mudule

## [插槽](./slot.md)

