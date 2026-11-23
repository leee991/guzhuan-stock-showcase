/**
 * 接口定义 — current/admin-web.mjs
 * 仅保留模块导出与接口签名。
 */

import crypto from 'node:crypto';
import { hashPassword, verifyPassword } from './accounts.mjs';
import { AdminFusion } from './admin-fusion.mjs';
import { AdminMedia } from './admin-media.mjs';

function reject(status, message) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function json(res, data, status = 200) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function body(req, maximum = 8192) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function reason(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function fundAmount(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export class AdminWeb {
  constructor(accounts, stocks = null, blockTrades = null, newStocks = null) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async create(username, password) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  audit(admin, userId, action, detail) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  transaction(fn) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  rate(key, limit = 10) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  token(req) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  session(token) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  csrf(token) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  secure(req) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  allowed(req) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  cookie(res, value, secure, maxAge = 7200) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async reauthenticate(admin, password) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  summary(row) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  version(row) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  detail(id, reveal = false) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  users(url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async stockList(url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  blockTradeList(url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  newStockList(url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  newStockSubscriptionList(url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async handle(req, res, url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
