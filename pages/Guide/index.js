import api from '../../api/req'
import { create } from '../../api/create.js' // 链接注意填写正确 
Page({
  data: {
    current:0,
    show_1_content:{  //加入班级
     show_1: false,
     graduateTime:'',   //毕业年份
     majorName:'',  //专业部
     classgradeName:'',// 班级
     sex:'', //性别
     name:''  //姓名
    },
    show_2_content:{//加入公司
      show_2_title:"请输入您从事的工作",
      type:1,
      show_2: false,
      schoolName2:'',  //就读学校
      startTime:'',  //入学年份
      entTime:'',   //毕业年份
      post:'',    //担任职位
      company:''  //就职公司
    },
    show_3_content:{//请输入您的地区
      show_3:false,
      stateName:'',  //国家名称
      provinceName:'', //省份名称
      cityName:'',  //城市名称
      areaName:''  //地址
    },
    show_4_content:{//输入个人信息
       cellPhone:'',
       email:'',
      header:''
    }
  },
  onLoad(){
    var user = wx.getStorageSync("userInfo");
      console.log('user'+user)
    if (user){
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
  start() {
    const params = {};
    params.username = wx.getStorageSync("user").nickName
    const page1 = this.data.show_1_content;
    const page2 = this.data.show_2_content
    const page3 = this.data.show_3_content
    const page4 = this.data.show_4_content      
    //page1
    for (var i in page1){
      if (i != 'show_1'){
        params[i] = page1[i];
      }
    }
    //page2
    if (page2.type==3){
      params.schoolName2 = page2.schoolName2  //就读学校
      params.startTime = page2.startTime  //入学年份
      params.entTime = page2.entTime  //毕业年份
     }else{
      params.post=page2.post  //担任职位
      params.company = page2.company  //就职公司
     }
    //page3
    for (var i in page3) {
      if (page3.show_3 && i !='show_3') {
          params[i] = page3[i];
      }
    }
    //page4
    for (var i in page4) {
      if (page4[i]) {
        params[i] = page4[i];
      }
    }
    console.log(params);
    api.post(create, {
      data: params
    }).then(res => {
      if (res) {
        wx.setStorageSync("userInfo", 1)
        wx.switchTab({
          url: '/pages/index/index'
        })
       }
    }).catch(err => {
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
    })
  },
  catchTouchMove(){
    return false;
  },
  onGetCode: function (e) {
    this.setData({
      show_1_content: e.detail
    })
    console.log(e)
  },
  onGetCode2: function (e) {
    this.setData({
      show_2_content: e.detail
    })
    console.log(e)
  },
  onGetCode3: function (e){
    this.setData({
      show_3_content: e.detail
    })
  },
  onGetCode4:function(e){
    this.setData({
      show_4_content: e.detail
    })
  },
  next(e) {
    this.setData({
      current: this.data.current + 1
    })
  },
  next1(e){
    var that = this;
        if (that.data.show_1_content['show_1']) {
          that.setData({
            current: that.data.current + 1
          })
        }    
  },
  next2(e) {
    if (this.data.show_2_content.show_2) {
      this.setData({
        current: this.data.current + 1
      })
    }
  },
  next3(e){
    if (this.data.show_3_content.show_3) {
      this.setData({
        current: this.data.current + 1
      })
    }
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log("来自页面内转发按钮");
      console.log(res.target);
    }
    else {
      console.log("来自右上角转发菜单")
    }
    return {
      title: '校友',
      path: '/pages/index/index',
      imageUrl: "",
      success: (res) => {
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '转发失败',
          icon: 'success',
          duration: 2000
        })
      }

    }
  }

})