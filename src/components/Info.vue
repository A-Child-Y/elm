<template>
  <div class="user-info">
    <div class="user border">
      <span class="name">头像</span>
      <img class="user-img" :src="userData.avatar | changeImg" alt>
      <img class="img" src="../assets/bbb-arrow.png" alt>
    </div>
    <div class="user">
      <span class="name">用户名</span>
      <span class="user-name">{{userData.username}}</span>
      <img class="img" src="../assets/bbb-arrow.png" alt>
    </div>
    <div class="msg">账号绑定</div>
    <div class="user">
      <img class="phone" src="../../static/phone.png" alt>
      <span class="name name-phone">手机</span>
      <span class="user-phone">{{userData.mobile | changePhone}}</span>
      <img class="img" src="../assets/bbb-arrow.png" alt>
    </div>
    <div class="msg">安全设置</div>
    <div class="user">
      <span class="name password">登录密码</span>
      <span class="user-password">未设置</span>
      <img class="img" src="../assets/bbb-arrow.png" alt>
    </div>
    <button @click="logOut()" class="logout">退出登录</button>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      userData: "getUserData",
      userId: "getUserId"
    })
  },
  methods: {
      ...mapMutations({
          setUserId:'setUserId'
      }),
    logOut: function() {
      let self = this;
      this.$axios
        .post(process.env.API_HOST + "/restapi/eus/login/logout", this.userData)
        .then(res => {
            self.setUserId('')
          self.$router.push({ name: "mine" });
        });
    }
  }
};
</script>


<style scoped>
html,
body {
  height: 100%;
}
.user-info {
  background-color: #f6f6f6;
  height: 100%;
}
.user {
  display: flex;
  position: relative;
  background-color: #fff;
  align-items: center;
  padding: 10px;
  height: 30px;
}
.user:nth-of-type(1) {
  height: 70px;
}
.img {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: calc((100% - 15px) / 2);
}
.name {
  margin: 0 10px;
  font-weight: 700;
  color: #333;
}
.name-phone {
  margin: 0 35px;
}
.border {
  border-bottom: 1px solid #ddd;
}
.password {
  font-weight: normal;
}
.msg {
  height: 20px;
  line-height: 20px;
  margin: 0 10px;
  padding: 10px;
  font-size: 12px;
  color: #999;
}
.phone {
  width: 18px;
  height: 18px;
  position: absolute;
  top: calc((100% - 16px) / 2);
  left: 20px;
}
.user-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  right: 30px;
  top: calc((100% - 60px) / 2);
}
.user-name {
  position: absolute;
  right: 30px;
  color: #666;
}
.user-phone {
  position: absolute;
  right: 30px;
  color: #666;
}
.user-password {
  position: absolute;
  right: 30px;
  color: #0097ff;
}
.logout {
  background-color: #fff;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #ff5339;
  font-weight: 700;
  margin-top: 30px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
}
</style>
