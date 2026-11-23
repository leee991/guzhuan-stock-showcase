/**
 * 接口定义 — current/stocks.mjs
 * 仅保留模块导出与接口签名。
 */


function normalizeCode(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function marketFor(code) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function marketName(market) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function parsePrice(value, scale = 2) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function parseQuotePrice(value, scale = 2) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function round(value, digits = 2) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function page(list, pageNum = 1, pageSize = 20) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function stockShape(row) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export class StockService {
  constructor(db, { fetcher = fetch, now = Date.now } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async request(url) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async eastmoney(path, params) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  quoteFromList(item) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  upsertQuote(quote, { listed = 1, preserveListed = false } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async syncAsharePage(pageNum = 1, pageSize = 500) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async syncAllA({ force = false } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async quote(code, preferredMarket) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  row(code) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  seed(defaults = []) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  list({ q = '', status = 'all', pageNum = 1, pageSize = 20, includeDelisted = false } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async refresh(code, { force = false } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async refreshListed({ force = false, limit = 50 } = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async add(code, name = '') {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  setListed(code, listed, expectedListed) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  setPrice(code, price) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async api(route, data = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
