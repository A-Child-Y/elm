import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isShow:false,
        token:'',
        userId:'',
        userData:{}
    },
    getters:{
        getIsShow:function(state){
            return state.isShow
        },
        getToken:function(state){
            return state.token
        },
        getUserId: function(state){
            return state.userId
        },
        getUserData: function(state){
            return state.userData
        }
    },
    mutations:{
        setIsShow:function(state, value){
            state.isShow = value
        },
        setToken:function(state, value){
            state.token = value
        },
        setUserId:function(state, value){
            state.userId = value
        },
        setUserData:function (state, value) {
            state.userData = value
        }
    }
})
