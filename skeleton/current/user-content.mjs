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

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/getIndexSetting.do
//   - /api/admin/getProductSetting.do
//   - /api/admin/getSetting.do
//   - /api/admin/getSiteSetting.do
//   - /api/art/detail.do
//   - /api/art/list.do
//   - /api/news/getDetail.do
//   - /api/news/getNewsList.do
//   - /api/site/getBannerByPlat.do
//   - /api/site/getInfo.do
//   - /api/site/getPayInfo.do
//   - /api/site/getPayInfoById.do
//   - /api/user/findSpreadRateOne.do
//   - /api/user/reg.do
//   - /user/cash/getMessagelist.do
//   - /user/cash/getUnreadCount.do
//   - /user/msg/list
//   - /user/msg/list.do
//   - /user/msg/read
//   - /user/msg/read.do
