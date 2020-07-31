// pages/work_history/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workHistory: [
      { id: 1, date: '2018 至 现在', address: '浙江.杭州.余杭', education: '数据挖掘工程师', company: '阿里巴巴', post: '天猫事业部' },
      { id: 2, date: '2012.9至2014.8', address: '浙江.杭州.余杭', education: '软件开发实行生', company: '蚂蚁金服', post: '支付部门' }
    ]
  },
  add: function () {
    wx.navigateTo({
      url: '../AddWorkHistory/index'
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
  onShareAppMessage: function () {

  }
})