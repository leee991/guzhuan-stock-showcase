/**
 * 接口定义 — current/content.mjs
 * 仅保留模块导出与接口签名。
 */

import crypto from 'node:crypto';
import sanitizeHtml from 'sanitize-html';
import { NewsService } from './news.mjs';

export function publicParams(input, fields=publicFields) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function encodeRequest(data) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function decrypt(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function decodeResponse(text) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function imageUrl(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function cleanContent(value, key='', depth=0) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function externalTarget(route, params) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function emptyData(route) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export class ContentService {
  constructor({fetcher=fetch,origins=ORIGINS,now=Date.now,discover=true}={}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async refreshOrigins() {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async request(url,options={}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async cached(key,ttl,loader) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async api(route,input) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async external(route,input) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
