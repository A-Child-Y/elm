<template>
  <div class="login">
    <div class="img">
      <img src="../assets/logo.png" alt>
    </div>
    <div class="form">
     
        <section>
          <input v-model="val" maxlength="11" type="text" placeholder="手机号" @input="changeInput()">
          <button
            :class="isColor == true ? 'change-color' : ''"
            @click="isColor == true ? changeClick(): ''"
          >{{isCode}}</button>
        </section>
        <input maxlength="6" type="text" placeholder="验证码" v-model="code">
        <div class="mine-server">
          <span>新用户登录即自动注册，并表示已同意</span>
          <a href="#">《用户服务协议》</a>
        </div>
        <popup :phoneNumber="phoneNumber" :isShow="isShow"></popup>
        <button class="log-in" @click="logIn()" >登录</button>
        <a href="#" class="about-we">关于我们</a>
     
    </div>
    <div :class="!msg == '' ? 'msg':''">{{msg}}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import popup from "./common/popup";
export default {
  components: {
    popup
  },
  data() {
    return {
      phoneNumber: "",
      val: "",
      isColor: false,
      code: "",
      isCode: "获取验证码",
      msg: "",
      phone: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    };
  },
  computed: {
    ...mapGetters({
      isShow: "getIsShow",
      token: "getToken",
      userId: "getUserId"
    })
  },
  methods: {
    ...mapMutations({
      setIsShow: "setIsShow",
      setToken: "setToken",
      setUserId: "setUserId"
    }),
    changeInput: function() {
      if (this.phone.test(this.val)) {
        this.isColor = true;
      } else {
        this.isColor = false;
      }
    },
    changeClick: function() {
      let self = this;
      let time = 30;
      let timer = setInterval(function() {
        if (time == -1) {
          self.isCode = "重新获取";
          self.isColor = true;
          clearInterval(timer);
        } else {
          self.isCode = "已发送(" + time + "s)";
          self.isColor = false;
          --time;
        }
      }, 1000);
      this.$axios
        .post("/api/restapi/eus/login/mobile_send_code", {
          captcha_hash: "",
          captcha_value: "",
          mobile: this.val,
          scf: "ms"
        })
        .then(
          function(res) {
            self.setToken(res.data.validate_token);
          },
          function(err) {
            self.setIsShow(true);
            self.phoneNumber = self.val;
          }
        );
    },
    logIn: function() {
      let self = this;
      if (!this.phone.test(this.val)) {
        this.msg = "请输入合法手机号";
      } else {
        this.$axios
          .post("/api/restapi/eus/login/login_by_mobile", {
            mobile: this.val,
            scf: "ms",
            validate_code: this.code,
            validate_token: this.token
          })
          .then(
            function(res) {
              self.setUserId(res.data.user_id);
              self.$router.push({ name: "mine" });
            },
            function(err) {
              self.msg = "验证码错误";
            }
          );
      }
    }
  }
};
</script>


<style scoped>
.login {
  text-align: center;
}
.img img {
  width: 35%;
  margin-top: 45px;
  margin-bottom: 15px;
}
input {
  height: 25px;
  width: 75%;
  margin: 8px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
input:focus {
  border: 1px solid #2395ff;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #8c8c8c;
}
section {
  position: relative;
}
section button {
  position: absolute;
  width: 90px;
  font-size: 14px;
  right: 40px;
  border: none;
  background: none;
  top: calc((100% - 21px) / 2);
  outline: none;
  color: #ccc;
}
.change-color {
  color: #2395ff;
}
.mine-server {
  color: #999;
  font-size: 14px;
  width: 80%;
  margin: 8px auto 0 auto;
  text-align: start;
}
.mine-server a {
  color: #2395ff;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.log-in {
  background-color: #56d176;
  color: #fff;
  border: none;
  height: 40px;
  width: 80%;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
  margin-top: 30px;
}
.about-we {
  display: block;
  color: #999;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 10px;
  margin-top: 18px;
}
.msg {
  font-size: 14px;
  background-color: #555;
  width: 140px;
  height: 35px;
  margin: 120px auto 0 auto;
  color: #fff;
  border-radius: 50px;
  line-height: 35px;
  -webkit-animation: msg 3s ease;
  -moz-animation: msg 3s ease;
  animation: msg 3s ease;
  animation-fill-mode: forwards;
}
@keyframes msg {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
