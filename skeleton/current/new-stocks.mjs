/**
 * 接口定义 — current/new-stocks.mjs
 * 仅保留模块导出与接口签名。
 */



function marketPrefix(stock, code) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function priceValue(value, label = '申购价') {
  // 内部业务实现略
  throw new Error("not implemented");
}

const round = (value, digits = 2) => {
  // 内部业务实现略
  throw new Error("not implemented");
};

const page = (list, pageNum = 1, pageSize = 20) => {
  // 内部业务实现略
  throw new Error("not implemented");
};

export class NewStockService {
  setUserPaymentEnabled(provider) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  row(id) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  subscription(id) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async stock(code, name = '') {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  shape(row) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  recordShape(row) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async publish(data = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async update(id, data = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  list({ q = '', status = 'listed', pageNum = 1, pageSize = 20, includeFuture = true } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  userRecords(userId, { winning = false, pageNum = 1, pageSize = 20 } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async apply(data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  pay(id, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  review(id, decision, applyNumber = 0) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  subscriptionList({ q = '', status = 'all', pageNum = 1, pageSize = 20 } = {}, decryptPhone = value => value) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async api(route, data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /user/add.do
//   - /user/buyNewStockQc.do
//   - /user/getOneSubscribeByUserId.do
//   - /user/getzqjl.do
//   - /user/newStockList.do
//   - /user/newStockQc.do
//   - /user/submitSubscribe.do
