<template>
  <div class="blog-setting-wrap">
    <el-tabs type="border-card">
      <el-tab-pane label="网站设置">
        <BlogSetting />
      </el-tab-pane>
      <el-tab-pane label="云存储(cos)设置">
        <CosSetting />
      </el-tab-pane>
      <el-tab-pane label="账号设置">
        <AccountSetting />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BlogSetting from "./component/blogSetting";
import CosSetting from "./component/cosSetting";
import AccountSetting from "./component/accountSetting";
export default {
  layout: "admin",
  head() {
    return {
      title: "博客管理系统-设置中心",
    };
  },
  components: {
    BlogSetting,
    CosSetting,
    AccountSetting,
  },
};
</script>

<style lang="less">
.setting {
  &-wrap {
  }
  &-form {
    width: 500px;
    margin: 0 auto;
  }
}
</style>