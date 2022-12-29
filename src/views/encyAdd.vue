<template>
  <el-scrollbar>
    <div class="encyA_body_all">
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <div class="encyA_btn">
          <el-page-header title="返回" content="添加百科" @back="goBack" />
<!--          <div class="encyA_title">请输入相关信息</div>-->
        </div>
        <div style="width: 40%; margin-top: 20px">
          <el-form ref="formRef" :model="form" label-width="120px">
            <el-form-item label="类别">
              <el-select v-model="form.category" placeholder="请选择类别">
                <el-option label="植物" value="植物"></el-option>
                <el-option label="水果" value="水果"></el-option>
                <el-option label="昆虫" value="昆虫"></el-option>
                <el-option label="病害" value="病害"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="中文名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="别称">
              <el-input v-model="form.Nickname"></el-input>
            </el-form-item>
            <el-form-item label="科">
              <el-input v-model="form.section"></el-input>
            </el-form-item>
            <el-form-item label="生长习性">
              <el-input v-model="form.habit" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="形态特征">
              <el-input v-model="form.features" type="textarea"></el-input>
            </el-form-item>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="true"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
            </el-upload>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">添加</el-button>
              <el-button @click="exit">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { reactive,getCurrentInstance } from "vue";
// import { ElMessage } from 'element-plus'
import { Plus } from "@element-plus/icons-vue";
// import {
//   UploadFile,
//   ElUploadProgressEvent,
//   ElFile,
// } from 'element-plus/es/components/upload/src/upload.type'
export default {
  name: "encyAdd",
  components: {
    Plus,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const form = reactive({
      name: "", //中文名
      Nickname: "", //别称
      section: "", //科
      habit: "", //习性
      category: "", //类别
      features: "", //特征
    });
    let imageUrl = reactive("");
    function goBack(){
      proxy.$router.go(-1);
    }
    function handleAvatarSuccess(res, file) {
      imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
    }
    function beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        proxy.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        proxy.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
    function onSubmit() {
      console.log(this.form);
    }
    function exit() {
      proxy.$router.go(-1);
    }
    return {
      form,
      imageUrl,
      goBack,
      handleAvatarSuccess,
      beforeAvatarUpload,
      onSubmit,
      exit,
    };
  },
};
</script>

<style>
.encyA_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.encyA_title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  margin: 20px 20px 10px 20px;
}
.encyA_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 120px;
  margin-bottom: 20px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
