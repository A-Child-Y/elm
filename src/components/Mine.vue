<template>
  <div class="mine">
    <logbar :user='user' :address='address'></logbar>
    <money></money>
    <list></list>
    <a href="#" class="privacy">隐私政策</a>
    <footbar :selected="'mine'"></footbar>
  </div>
</template>

<script>
import footbar from "../components/common/footBar";
import logbar from "../components/common/logBar";
import money from "../components/common/money";
import list from "../components/common/list";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {
    footbar,
    logbar,
    money,
    list
  },
  data() {
    return {
      user: {
        isId: false,
        userImg: "",
        userName: "",
        userPhone: ""
      },
      address:'login'
    };
  },
  computed: {
    ...mapGetters({
      userId: "getUserId"
    })
  },
  methods:{
    ...mapMutations({
      setUserData:'setUserData'
    })
  },
  created() {
    let self = this;
    if (this.userId) {
      this.$axios
        .get(process.env.API_HOST + "/restapi/eus/v3/users/" + this.userId + "?")
        .then(res => {
          self.setUserData(res.data)
          self.user.userName = res.data.username;
          self.user.userImg = res.data.avatar;
          self.user.userPhone = res.data.mobile;
          self.user.isId = true;
          self.address = 'info'
        });
    } else {
      this.user.isId = false;
      this.address = 'login'
    }
  },
  
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.mine {
  background-color: #f6f6f6;
  height: 100%;
}
.privacy {
  display: block;
  font-size: 15px;
  color: #4da6f0;
  outline: none;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
