# 接口清单 — `tf-course`

## 1. 融合后台接口（前缀 `/admin/api/fusion`，只用 GET / POST）

| Method | Path | 说明 |
|---|---|---|
| `GET` | `/admin/api/fusion/schema/:resource` | 拉取资源的字段、分组、筛选和审核动作定义 |
| `GET` | `/admin/api/fusion/:resource?page=1&size=20&q=&status=` | 分页查列表 |
| `GET` | `/admin/api/fusion/:resource/:id` | 查单条详情 |
| `POST` | `/admin/api/fusion/:resource/create` | 新建 |
| `POST` | `/admin/api/fusion/:resource/:id/update` | 更新（必带 `expectedRevision`） |
| `POST` | `/admin/api/fusion/:resource/:id/delete` | 软归档（资金/交易/管理员表不开放） |
| `POST` | `/admin/api/fusion/:resource/:id/action` | 执行 `approve / reject / repay / close / run` |
| `GET/POST` | `/admin/api/fusion/users` · `/users/create` · `/users/batch` | 查用户、建户（写资金流水）、批量改类型或过实名 |

## 2. 移动端接口（按服务端 Session 隔离）

| Method | Path | 说明 |
|---|---|---|
| `GET` | `/user/position/list.do` · `/user/orderList.do` | 持仓分页（`type=3` 透传旧大宗服务） |
| `GET` | `/user/aiQuant/positionList.do` | 量化持仓分页 |
| `GET` | `/user/position/findBySn.do` | 按单号查持仓（自动区分 `FP/F` 和 `DZ`） |
| `POST` | `/user/sell.do` · `/user/cancelOrder.do` | 融合单平仓与撤单 |
| `GET` | `/user/recharge/list.do` · `/user/withdraw/list.do` · `/user/cash/list.do` | 充提与资金流水（银行卡脱敏显示） |
