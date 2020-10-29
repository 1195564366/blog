<template>
  <div class="setting-wrap">
    <el-form
      ref="form"
      label-position="left"
      label-width="100px"
      class="setting-form"
      v-loading="loading"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="旧账号" prop="oldAccount">
        <el-input placeholder="输入旧账号" v-model="form.oldAccount" />
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input placeholder="输入旧密码" v-model="form.oldPassword" />
      </el-form-item>
      <el-form-item label="新账号" prop="account">
        <el-input placeholder="输入新账号" v-model="form.account" />
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input placeholder="输入新密码" v-model="form.password" />
      </el-form-item>
      <el-button size="medium" type="primary" style="width: 100%" @click="submit">确认修改账号</el-button>
    </el-form>
    <Confirm ref="confirm" />
  </div>
</template>

<script>
import { Axios } from "@utils";

export default {
  data() {
    return {
      loading: false,
      form: {
        oldAccount: null,
        oldPassword: null,
        account: null,
        password: null,
      },
      rules: {
        oldAccount: [
          {
            required: true,
            message: "输入旧账号",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        oldPassword: [
          {
            required: true,
            message: "输入旧账号",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        account: [
          {
            required: true,
            message: "输入新账号",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "输入新密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        this.$refs["confirm"].open({
          message: "是否修改账号密码",
          ok: async (cb) => {
            const result = await Axios.post(
              `/admin/setting/account`,
              this.form,
              {
                allData: true,
              }
            );
            cb();
            if (!result.success) return;
            this.$message.success("账号密码修改成功，请用新账号密码重新登录");
            this.$store.commit("admin/setToken", null);
            this.$router.push("/admin/login");
          },
        });
      });
    },
  },
};
</script>

<style lang="less">
</style>