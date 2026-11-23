/**
 * 接口定义 — current/server.mjs
 * 仅保留模块导出与接口签名。
 */


import { userPortfolio } from './user-portfolio.mjs';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { settings, user, stocks, indices, page } from './fixtures.mjs';
import { Accounts } from './accounts.mjs';
import { ContentService } from './content.mjs';
import { AdminWeb } from './admin-web.mjs';
import { StockService } from './stocks.mjs';
import { BlockTradeService } from './block-trades.mjs';
import { NewStockService } from './new-stocks.mjs';

function send(res, data, status = 200) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function readBody(req, url) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function requestToken(req) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function sensitiveAllowed(req) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function rateLimit(req, route) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function api(route, data, req) {
  // 内部业务实现略
  throw new Error("not implemented");
}

// Discovered route endpoints in this module (read-only contract summary):
//   - /admin/api/
//   - /admin/index.html
//   - /api/admin/getSiteSetting.do
//   - /api/index/queryHomeIndex.do
//   - /api/index/queryListIndex.do
//   - /api/site/getBannerByPlat.do
//   - /api/site/getInfo.do
//   - /api/site/heart-beat.do
//   - /api/stock/getMarket.do
//   - /api/stock/getSingleStock.do
//   - /api/stock/getStockSort.do
//   - /api/stock/getVipByCode.do
//   - /api/stock/getZdfNumber.do
//   - /api/user/findSpreadRateOne.do
//   - /api/user/login.do
//   - /api/user/logout.do
//   - /user/aiQuant/apply.do
//   - /user/aiQuant/close.do
//   - /user/auth.do
//   - /user/buy.do
//   - /user/cash/getMessagelist.do
//   - /user/cash/getUnreadCount.do
//   - /user/financeConfig.do
//   - /user/financeList.do
//   - /user/funds/fundsList.do
//   - /user/funds/getFundsSetting.do
//   - /user/funds/getFundsTypeList.do
//   - /user/funds/getUserApplyList.do
//   - /user/funds/getUserSubaccount.do
//   - /user/getHkExchangeRate.do
//   - /user/getUserInfo.do
//   - /user/msg/read
//   - /user/msg/read.do
//   - /user/option/list.do
//   - /user/recharge/inMoney.do
//   - /user/repayFinance.do
//   - /user/requestFinance.do
//   - /user/sell.do
//   - /user/submitSubscribe.do
//   - /user/updatePwd.do
