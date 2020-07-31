// pages/find/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldSchoolFriend:[
      { headImg: "../../img/head.jpg",name:'汪怡',classgrade:'2015届高三1班',date:'和你就读同一所大学',type:1},
      { headImg: "../../img/head1.jpg",name:'刘子杭',classgrade:'2016届轨道交通2班',date:'在同一家公司工作过',type:1},
      { headImg: "../../img/head2.jpg",name:'王小丽',classgrade:'2014届数媒艺术1班',date:'和你同一届毕业',type:1}],
    oldSchoolFriendForArea:[
      { headImg: "../../img/head3.jpg", name: '汪怡', classgrade: '2015届高三1班', date: '阿里巴巴', type: 2 },
      { headImg: "../../img/head4.jpg", name: '刘子杭', classgrade: '2016届轨道交通2班', date: '杭州地铁', type: 2 },
      { headImg: "../../img/head1.jpg", name: '王小丽', classgrade: '2014届数媒艺术1班', date: '字节跳动', type: 2 },
      { headImg: "../../img/head5.jpg", name: '张智勇', classgrade: '2014届数媒艺术1班', date: '字节跳动', type: 2 },
    ],
    inputShowed: false,
    inputVal: ""    
                      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
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
  },
   showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})