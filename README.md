# 每日免费节点

公开免费节点订阅，每天从 [free18/v2ray](https://github.com/free18/v2ray) 抓取一次。订阅内容来自第三方，节点数量不等于可用数量。

<!-- update:start -->
> 最近成功抓取：**2026-11-21（北京时间）** · 通用订阅包含 **525 条节点链接**（未验证可用性）
<!-- update:end -->

## 免费订阅

以下链接与参考图片中的来源一致。客户端订阅后，可按客户端自身的刷新设置获取上游更新；本仓库也会每天保存一份快照。

| 类型 | 订阅地址 | 本仓库快照 |
| --- | --- | --- |
| 通用订阅（v2rayN、v2rayNG 等） | [加速链接](https://ghfast.top/https://raw.githubusercontent.com/free18/v2ray/refs/heads/main/v.txt) | [v.txt](subscriptions/v.txt) |
| Clash Meta 订阅 | [加速链接](https://ghfast.top/https://raw.githubusercontent.com/free18/v2ray/refs/heads/main/c.yaml) | [c.yaml](subscriptions/c.yaml) |

复制用地址：

```text
https://ghfast.top/https://raw.githubusercontent.com/free18/v2ray/refs/heads/main/v.txt
https://ghfast.top/https://raw.githubusercontent.com/free18/v2ray/refs/heads/main/c.yaml
```

加速服务不可用时，可使用[通用订阅原始链接](https://raw.githubusercontent.com/free18/v2ray/refs/heads/main/v.txt)或 [Clash Meta 原始链接](https://raw.githubusercontent.com/free18/v2ray/refs/heads/main/c.yaml)。部分网络环境下，原始链接可能无法访问。更新失败时，本仓库保留上一次成功抓取的快照；上方状态显示的是最后一次成功抓取日期。

## 免费节点与极连云

| 对比项 | 公开免费节点 | 极连云 |
| --- | --- | --- |
| 来源 | 第三方公开聚合 | [极连云注册页面](https://haozevpn.jlyvipaff.com/#/?code=6aTAi9bW) |
| 费用 | 免费 | 套餐与优惠规则以注册页面为准；优惠码 `JLY888` |
| 更新与可用性 | 来源每天更新，可用性随时变化 | 服务详情可查看[极连云评测](https://clash-jichang.com/airport/jilianyun.html) |
| 安全性 | 无法保证节点运营者的行为 | 使用前请自行核对服务的隐私条款与实际体验 |

免费节点适合临时试用。公开节点的速度、稳定性和安全性都无法保证，请避免传输敏感信息或登录重要账户。

### 极连云

需要了解付费方案时，可从[极连云注册链接](https://haozevpn.jlyvipaff.com/#/?code=6aTAi9bW)查看当前套餐。结算时可尝试优惠码 **`JLY888`**；适用范围和最终价格以页面显示为准。更多信息见[极连云评测](https://clash-jichang.com/airport/jilianyun.html)。

## 更多内容

- [主站：clash-jichang.com](https://clash-jichang.com/)
- [Telegram：JLYCloud](https://t.me/JLYCloud)

## 更新方式

GitHub Actions 每天约北京时间 00:15 运行，也可在 Actions 页面手动触发。任务会抓取上游 `v.txt` 和 `c.yaml`，校验内容后更新 `subscriptions/` 快照及本页状态。GitHub 的定时任务可能延迟；推送到 GitHub 后请确认仓库的 Actions 写入权限已启用。运行失败时不会提交不完整的更新。

本仓库包含推广注册链接。节点和服务均来自第三方；请遵守所在地法律法规，并自行判断其可用性与风险。
