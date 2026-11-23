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
