/**
 * 接口定义 — current/user-trading.mjs
 * 仅保留模块导出与接口签名。
 */



function reject(status, msg) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function productList(fusion) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function buy(fusion, route, data, session, quant) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function closeQuant(fusion, data, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function handleUserTrading(fusion, route, data, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}

const stockCode = (fusion, data) => {
  // 内部业务实现略
  throw new Error("not implemented");
};

// Discovered route endpoints in this module (read-only contract summary):
//   - /user/aiQuant/apply.do
//   - /user/aiQuant/close.do
//   - /user/aiQuant/positionList.do
//   - /user/aiQuant/stockList.do
//   - /user/buy.do
//   - /user/sell.do
