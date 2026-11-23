/**
 * 接口定义 — current/user-finance.mjs
 * 仅保留模块导出与接口签名。
 */

import { verifyPassword } from './accounts.mjs';
import { publicPaymentChannel } from './user-content.mjs';

function numericId(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function amount(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function currentUser(fusion, session, checkPassword = false) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function ownedRecord(fusion, resource, id, userId) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function mutate(fusion, route, data, session, operation) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function channels(fusion) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function rechargeChannel(fusion, data, value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function financingOptions(fusion) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function publicUserFinancial(fusion, resource, data, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function passwordMutation(fusion, route, data, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function handleUserFinance(fusion, route, data = {}, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}

const reject = (status, message) => {
  // 内部业务实现略
  throw new Error("not implemented");
}
