// pages/MyCenter/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:'../../img/head.jpg'
  },
  // 上传图片
  chooseImage(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          images: tempFilePaths
        })
      }
    })
  },
  // 查看个人详情
  jump(){
    wx.navigateTo({
        url:'/pages/userInfo/index'
    })
  },
  // 查看关注人
  getFollowlist(e){
    wx.navigateTo({
      url: '../chatList/index?name=' + e.currentTarget.dataset.name,
    })
  },
  // 给关注用户留言
  LeaveWord: function () {
    wx.navigateTo({
      url: '/pages/leaveMessageForMe/index'
    })
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
  }
})