/**
 * 接口定义 — current/user-content.mjs
 * 仅保留模块导出与接口签名。
 */

import { settings as legacySettings } from './fixtures.mjs';
import sanitizeHtml from 'sanitize-html';

function paginate(rows, data) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function article(row, site) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function message(row) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function publicPaymentChannel(row) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function stockSettings(fusion) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function featureSettings(fusion) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function agreementHtml(source) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function siteSettings(fusion, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function handleUserContent(fusion, route, data = {}, session) {
  // 内部业务实现略
  throw new Error("not implemented");
}
