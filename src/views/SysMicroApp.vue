<template>
  <div class="page">
    <h-pro-combine-template
      ref="template"
      v-if="loadTemplateStatus === 'complete'"
      :query-model="queryModel"
      :edit-model="editModel"
      :tree-query="queryModel.treeQuery"
      :tree-edit="editModel.treeEdit"
    />
  </div>
</template>

<script>
import Mixins from "@/core/Mixins";
import microAppApi from "@/api/base-platform/base/microApp";

export default {
  name: "SysMicroApp",
  mixins: [Mixins.CombineTemplate],
  data() {
    return {};
  },
  methods: {
    getApi() {
      return microAppApi;
    },
    /**
     * 补全查询模板模型
     * 注：fetchDataProvider 必须提供
     */
    fillQueryModel(queryModel) {
      queryModel.fetchDataProvider = this.listFetchDataProvider;
      queryModel.fetchDetailDataProvider = this.listFetchDetailDataProvider;
      return queryModel;
    },
    /**
     * 补全编辑模板模型
     */
    fillEditModel(editModel) {
      editModel.saveData = this.saveData;
      editModel.deleteData = this.deleteData;
      editModel.refreshData = this.refreshData;
      return editModel;
    },
    /**
     * 列表查询数据服务（查询、刷新）
     */
    async listFetchDataProvider({ condition, pagination }) {
      let queryParams = this.buildQueryParams(
        condition,
        this.queryModel.conditionModel,
        pagination
      );
      if (pagination) {
        return await this.getApi().query(queryParams);
      } else {
        return await this.getApi().list(queryParams);
      }
    },
    /**
     * 列表详细数据查询服务
     */
    async listFetchDetailDataProvider({ row }) {
      return await this.getApi().get(row.id);
    },
    /**
     * 刷新数据
     */
    async refreshData({ data }) {
      return await this.getApi().get(data.id);
    },
    /**
     * 保存数据
     */
    async saveData({ data }) {
      return await this.getApi().save(data);
    },
    /**
     * 删除数据
     */
    async deleteData({ data }) {
      return await this.getApi().del(data);
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  height: 100%;
  background: #fff;
}
</style>
