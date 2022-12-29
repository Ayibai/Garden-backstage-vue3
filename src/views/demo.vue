<template>
  <div>
    <div>小写</div>
    <el-input v-model="xiaoxie"></el-input>
    <div>大写</div>
    <el-input v-model="daxie"></el-input>
    <el-button type="primary" @click="change">转换</el-button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "demo",
  setup() {
    const xiaoxie = ref("");
    const daxie = ref("");
    function change() {
      let money = xiaoxie.value;
      let n;
      //汉字的数字
      const cnNums = [
        "零",
        "壹",
        "贰",
        "叁",
        "肆",
        "伍",
        "陆",
        "柒",
        "捌",
        "玖",
      ];
      //基本单位
      const cnIntRadice = ["", "拾", "佰", "仟"];
      //对应整数部分扩展单位
      const cnIntUnits = ["", "万", "亿", "兆"];
      //对应小数部分单位
      const cnDecUnits = ["角", "分", "毫", "厘"];
      //整数金额时后面跟的字符
      const cnInteger = "整";
      //整型完以后的单位
      const cnIntLast = "元";
      //最大处理的数字
      const maxNum = 999999999999999.9999;
      //金额整数部分
      let integerNum;
      //金额小数部分
      let decimalNum;
      //输出的中文金额字符串
      let chineseStr = "";
      //分离金额后用的数组，预定义
      let parts;
      if (money == "") {
        return "";
      }
      money = parseFloat(money);
      if (money >= maxNum) {
        //超出最大处理数字
        return "";
      }
      if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
      }
      //转换为字符串
      money = money.toString();
      if (money.indexOf(".") == -1) {
        integerNum = money;
        decimalNum = "";
      } else {
        parts = money.split(".");
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
      }
      //获取整型部分转换
      if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0;
        const IntLen = integerNum.length;
        for (let i = 0; i < IntLen; i++) {
          n = integerNum.substr(i, 1);
          const p = IntLen - i - 1;
          const q = p / 4;
          const m = p % 4;
          if (n == "0") {
            zeroCount++;
          } else {
            if (zeroCount > 0) {
              chineseStr += cnNums[0];
            }
            //归零
            zeroCount = 0;
            chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
          }
          if (m == 0 && zeroCount < 4) {
            chineseStr += cnIntUnits[q];
          }
        }
        chineseStr += cnIntLast;
      }
      //小数部分
      if (decimalNum != "") {
        const decLen = decimalNum.length;
        let i;
        for (i = 0; i < decLen; i++) {
          n = decimalNum.substr(i, 1);
          if (n !== "0") {
            chineseStr += cnNums[Number(n)] + cnDecUnits[i];
          }
        }
      }
      if (chineseStr == "") {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
      } else if (decimalNum == "") {
        chineseStr += cnInteger;
      }
      console.log(chineseStr);
      daxie.value = chineseStr;
      return chineseStr;
    }

    return {
      xiaoxie,
      daxie,
      change,
    };
  },
};
</script>

<style scoped></style>
