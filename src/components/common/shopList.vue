<template>
  <div class="shop-list" @click="$router.push({name:'details'})">
    <div v-for="(item, i) in shopList" :key="i">
      <div class="shop" v-for="(s, index) in shopList[i]" :key="index">
        <div class="shop-img">
          <img :src="s.restaurant.image_path | changeImg" alt>
        </div>
        <div class="shop-content">
          <div class="cont-name">
            <h4>{{s.restaurant.name}}</h4>
            <span>...</span>
          </div>
          <div>
            <star
              :score="s.restaurant.rating"
              :recentOrderNum="s.restaurant.recent_order_num"
              :text="s.restaurant.delivery_mode? s.restaurant.delivery_mode.text:''"
            ></star>
          </div>
          <div class="shop-price">
            <div>
              <span>￥{{s.restaurant.piecewise_agent_fee.rules[0].price}}起送</span>
              <span>配送费￥{{s.restaurant.piecewise_agent_fee.rules[0].fee}}</span>
            </div>
            <div>
              <span>{{s.restaurant.distance | changeRange }}</span>
              <span>{{s.restaurant.order_lead_time}}分钟</span>
            </div>
          </div>
          <div class="sort">
            <div>{{s.restaurant.support_tags[0].text}}</div>
            <div
              v-show="s.restaurant.support_tags[s.restaurant.support_tags.length - 1].text == '品质联盟'"
            >{{s.restaurant.support_tags[s.restaurant.support_tags.length - 1].text}}</div>
            <div v-show="s.restaurant.recommend.reason == '口碑人气好店'">
              <img :src="s.restaurant.recommend | changeImg" alt>
              <span>{{s.restaurant.recommend.reason}}</span>
            </div>
          </div>
          <div
            class="activities show"
            :class="s.restaurant.activities.length + s.restaurant.supports.length == 1 ? 'one':'' "
          >
            <div @click.stop="changeList($event)">
              <button
                class="number"
                v-show="s.restaurant.activities.length + s.restaurant.supports.length > 2"
              >
                {{s.restaurant.activities.length + s.restaurant.supports.length}}个活动
                <img
                  :src="upDown"
                  alt
                >
              </button>
            </div>
            <div v-for="(item, index) in s.restaurant.activities" :key="index">
              <span :style="'backgroundColor:#' + item.icon_color">{{item.icon_name}}</span>
              <span>{{item.description | strSub}}</span>
            </div>
            <div v-for="(item, index) in s.restaurant.supports" :key="index + 10">
              <span :style="'backgroundColor:#' + item.icon_color">{{item.icon_name}}</span>
              <span>{{item.description | strSub}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "./star";
export default {
  components: {
    star
  },
  data() {
    return {
      shopList: [],
      isClass: false,
      upDown: "../../../static/down.png"
    };
  },
  created() {
    this.shopPost();
    window.addEventListener("scroll", () => {
      this.shopScroll();
    });
  },
  methods: {
    changeList: function(e) {
      if (e.currentTarget.parentElement.classList[1] == "show") {
        e.currentTarget.parentElement.classList.remove("show");
        e.currentTarget.parentElement.children[0].children[0].children[0].src =
          "../../../static/up.png";
      } else {
        e.currentTarget.parentElement.classList.add("show");
        e.currentTarget.parentElement.children[0].children[0].children[0].src =
          "../../../static/down.png";
      }
    },
    shopPost: function() {
      let self = this;
      this.$axios.get(process.env.API_HOST + "/restapi/shopping/v3/restaurants?latitude=34.864261&longitude=113.60957&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5").then(res => {
        self.shopList.push(res.data.items);
      });
    },
    shopScroll: function() {
      let scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      let docH =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      let windowH =
        window.innerHeight ||
        document.body.clientHeight ||
        document.documentElement.clientHeight;
      if (scrollH + windowH >= docH) {
        this.shopPost();
      }
    }
  }
};
</script>


<style scoped>
.shop-list {
  margin-top: 30px;
}
.shop {
  background-color: #fff;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
  justify-content: space-between;
}
.shop-img {
  width: 70px;
  height: 70px;
  border: 1px solid #f6f6f6;
}
.shop-img img {
  width: 100%;
}
.shop-content {
  width: 75%;
}
.cont-name {
  display: flex;
  position: relative;
}
.cont-name span {
  display: block;
  color: #888;
  position: absolute;
  right: 5px;
  top: -8px;
}
.shop-price {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
.shop-price div {
  font-size: 10px;
}

.shop-price div span:nth-of-type(1) {
  border-right: 1px solid #ddd;
  padding-right: 5px;
  margin-right: 2px;
}
.shop-price div:nth-of-type(1) {
  color: #666;
}
.shop-price div:nth-of-type(2) {
  color: #888;
}
.sort {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.sort div:nth-of-type(1),
.sort div:nth-of-type(2) {
  border: 1px solid #ddd;
  font-size: 10px;
  color: #666;
}
.sort div:nth-of-type(1) {
  margin-left: 4px;
}
.sort div:nth-of-type(2) {
  margin-left: 55px;
}
.sort div:nth-of-type(3) {
  margin-left: 13px;
  position: relative;
  width: 30%;
}
.sort img {
  width: 10px;
  height: 10px;
  position: absolute;
  top: calc((100% - 10px) / 2);
}
.sort span {
  color: #e8470b;
  font-size: 10px;
  position: absolute;
  left: 15px;
  top: calc((100% - 15px) / 2);
}
.activities {
  margin-top: 15px;
  border-top: 1px solid #f6f6f6;
  position: relative;
}

.show {
  height: 55px;
  overflow: hidden;
}
.activities div {
  margin: 2px 0px 5px 5px;
}
.activities div span:nth-of-type(1) {
  color: #fff;
  font-size: 12px;
  width: 15px;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
}
.activities div span:nth-of-type(2) {
  font-size: 12px;
  color: #666;
  margin-left: 5px;
}
.number {
  position: absolute;
  right: 20px;
  font-size: 10px;
  top: 3px;
  color: #888;
  border: none;
  outline: none;
  background: none;
}
.number img {
  width: 10px;
  height: 10px;
  position: absolute;
  top: calc((100% - 10px) / 2);
  right: -8px;
}
.one {
  height: 35px;
}
</style>
