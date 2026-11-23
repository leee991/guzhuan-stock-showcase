/**
 * 接口定义 — current/block-trades.mjs
 * 仅保留模块导出与接口签名。
 */

import { verifyPassword } from './accounts.mjs';

function marketPrefix(stock) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function isCloseTradingTime(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

const round = (value, digits = 2) => {
  // 内部业务实现略
  throw new Error("not implemented");
}

const page = (list, pageNum = 1, pageSize = 20) => {
  // 内部业务实现略
  throw new Error("not implemented");
}

export class BlockTradeService {
  constructor(db, stocks, { now = Date.now } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  balance(userId) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  setBalance(userId, amount) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  adjustBalance(userId, delta) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async stock(code) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  row(id) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  ticketShape(row, stock = null) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async publicList(data = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async create({ code, price, publishAt = '', listed = true }) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async update(id, { price, publishAt, listed }) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  adminList({ q = '', status = 'all', pageNum = 1, pageSize = 20 } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async buy(data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  parsePositionSn(value) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async close(data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async cancel(data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async orderShape(order) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async orderPage(data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async orders(data, user, { paged = false } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async findBySn(data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async api(route, data, user) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
