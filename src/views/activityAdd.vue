<template>
  <el-scrollbar>
    <div class="activeA_body_all">
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <div class="activeA_btn">
          <el-page-header title="返回" content="添加活动" @back="goBack" />
        </div>
        <div style="width: 80%; margin-top: 20px">
          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-width="120px"
          >
            <el-form-item label="活动标题" required prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动介绍" required prop="introduce">
              <el-input v-model="form.introduce"></el-input>
            </el-form-item>
            <el-form-item label="活动封面">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
              </el-upload>
            </el-form-item>
            <div style="display: flex; align-items: center">
              <el-form-item label="开始时间" required>
                <el-col :span="50">
                  <el-form-item prop="startTime">
                    <el-date-picker
                      v-model="form.startTime"
                      type="date"
                      placeholder="选择时间"
                      style="width: 100%"
                      value-format="YYYY-MM-DD"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="结束时间" required>
                <el-col :span="50">
                  <el-form-item prop="endTime">
                    <el-date-picker
                      v-model="form.endTime"
                      type="date"
                      placeholder="选择时间"
                      style="width: 100%"
                      value-format="YYYY-MM-DD"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
            </div>
            <el-form-item>
              <QuillEditor theme="snow" style="width: 100%;height: 200px"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit(formRef)"
                >添加</el-button
              >
              <el-button @click="exit">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import { reactive, getCurrentInstance, ref, onMounted } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  name: "activityAdd",
  components: {
    Plus,
    QuillEditor,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const formRef = ref([]);
    const form = reactive({
      name: "", //中文名
      introduce: "", //别称
      startTime: "", //开始时间
      endTime: "", //结束时间
      imageUrl: "", //图片
    });
    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入活动标题",
          trigger: "blur",
        },
        {
          min: 3,
          max: 5,
          message: "长度在 3 到 5 个字符",
          trigger: "blur",
        },
      ],
      introduce: [
        {
          required: true,
          message: "请输入活动介绍",
          trigger: "change",
        },
      ],
      startTime: [
        {
          type: "date",
          required: true,
          message: "请选择日期",
          trigger: "change",
        },
      ],
      endTime: [
        {
          type: "date",
          required: true,
          message: "请选择日期",
          trigger: "change",
        },
      ],
    });
    function goBack() {
      proxy.$router.go(-1);
    }
    function handleAvatarSuccess(res, file) {
      form.imageUrl = URL.createObjectURL(file.raw);
      console.log(form.imageUrl);
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
    function onSubmit(formEl) {
      console.log(form);
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    }
    function exit() {
      proxy.$router.go(-1);
    }
    onMounted(() => {});
    return {
      form,
      goBack,
      handleAvatarSuccess,
      beforeAvatarUpload,
      onSubmit,
      exit,
      rules,
      formRef,
    };
  },
};
</script>

<style>
.activeA_body_all {
  background-color: white;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.activeA_btn {
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
.ql-snow{
  width: 100%;
}
</style>
