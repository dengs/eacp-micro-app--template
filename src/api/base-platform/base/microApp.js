/**
 * @description: 微应用管理接口定义
 * @author: fsk <fsk@hanzhisoft.com>
 * @date: 2022-08-22
 * @copyright: 翰智软件
 */
import { BaseApi } from "@/core";
const { _get, _post, _list, _page, _save, _batchSave, _del } = BaseApi;

const baseUrl = "/api-bp/base/microApp";
const exportUrl = baseUrl + "/export";

export const get = (params = {}, isPost = false) => (isPost ? _post(`${baseUrl}/get`, params) : _get(`${baseUrl}/get?pkId=${params}`));
export const getCols = (cols = [], params = {}) => _post(`${baseUrl}/getCols`, { cols, params });
export const list = (params = {}) => _list(`${baseUrl}/list`, params);
export const query = (params = {}) => _page(`${baseUrl}/query`, params);
export const save = (params = {}) => _save(`${baseUrl}/save`, params);
export const tempSave = (params = {}) => _save(`${baseUrl}/tempSave`, params);
export const batchSave = (params = []) => _batchSave(`${baseUrl}/batchSave`, params);
export const del = (params = {}) => _del(`${baseUrl}/delete`, params);

export default {
  baseUrl,
  exportUrl,
  get,
  getCols,
  list,
  query,
  save,
  tempSave,
  batchSave,
  del
};
