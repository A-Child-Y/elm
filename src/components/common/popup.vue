<template>
  <div class="popup">
    <mt-popup v-model="isShow" popup-transition="popup-fade" class="captchas">
      <div class="cap">
        <h3>请填写图形验证码</h3>
        <div>
          <input type="text" v-model="imgVal">
          <img :src="img" alt @click="captcha()">
        </div>
        <span class="cap-out">
          <span v-show="isWarning == true">
            <img src="../../assets/warning.png" alt>
            <span>验证码错误，请重新填写</span>
          </span>
        </span>
        <div>
          <button @click="send($event)">取消</button>
          <button @click="send($event)">确定</button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["phoneNumber", "isShow"],
  data() {
    return {
      popupVisible: true,
      imgVal: "",
      img: "",
      hash: "",
      isWarning: false
    };
  },
  watch: {
    phoneNumber: function() {
      this.captcha();
    }
  },
  methods: {
    ...mapMutations({
      setIsShow: "setIsShow",
      setToken:'setToken'
    }),
    send: function(e) {
      let self = this;
      if (e.target.innerHTML == "确定") {
        this.$axios
          .post("/api/restapi/eus/login/mobile_send_code", {
            captcha_hash: self.hash,
            captcha_value: self.imgVal,
            mobile: this.phoneNumber,
            scf: "ms"
          })
          .then(
            res => {
              self.setIsShow(false);
              self.setToken(res.data.validate_token);
            },
            err => {
              self.isWarning = true;
            }
          );
      } else {
        self.setIsShow(false);
      }
    },
    captcha() {
      let self = this;
      this.$axios
        .post("/api/restapi/eus/v3/captchas", { captcha_str: self.phoneNumber })
        .then(res => {
          self.img = res.data.captcha_image;
          self.hash = res.data.captcha_hash;
        });
    }
  }
};
</script>


<style scoped>
.captchas {
  width: 80%;
  height: 190px;
  border-radius: 10px;
  background-color: #f6f6f6;
  text-align: center;
}
.cap h3 {
  margin: 20px 0;
  font-size: 20px;
}
.cap > div:nth-of-type(1) {
  height: 24px;
  background-color: #fff;
  padding: 10px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
}
input {
  display: block;
  height: 30px;
  width: 70%;
  border: none;
  outline: none;
}
.cap-out {
  margin-top: 2px;
  display: block;
  padding: 5px;
  height: 20px;
  text-align: start;
  position: relative;
}
.cap-out > span {
  display: block;
  font-size: 14px;
  color: #ff6000;
}
.cap-out img {
  width: 15px;
  height: 15px;
  position: absolute;
  top: calc((100% - 15px) / 2);
  left: 10px;
}
.cap-out > span span {
  position: absolute;
  left: 30px;
  top: calc((100% - 19px) / 2);
}
.cap > div:nth-of-type(1) img {
  height: 33px;
  display: block;
  margin-left: 2px;
}
.cap > div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;

  justify-content: center;
}
.cap > div:nth-of-type(2) button {
  border: none;
  outline: none;
  height: 40px;
  width: 50%;
  line-height: 40px;
  border-top: 1px solid #ddd;
  font-size: 17px;
  background-color: #f6f6f6;
}
.cap > div:nth-of-type(2) button:nth-of-type(1) {
  border-radius: 0px 0px 0px 10px;
  color: #666;
  border-right: 1px solid #ddd;
}
.cap > div:nth-of-type(2) button:nth-of-type(2) {
  border-radius: 0px 0px 10px 0px;
  color: #3190e8;
  font-weight: 700;
}
</style>
