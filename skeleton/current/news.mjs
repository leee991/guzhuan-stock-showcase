/**
 * 接口定义 — current/news.mjs
 * 仅保留模块导出与接口签名。
 */


import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export class NewsService {
  save(){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async feed(type){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async api(route,input={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/index/queryIndexNews.do
//   - /api/news/getDetail.do
//   - /api/news/getNewsList.do
