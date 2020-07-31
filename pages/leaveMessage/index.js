// pages/leaveMessage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    message: '',
    message_id: [],
    tree:[]
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

  },
  //监测留言内容
  bindTextAreaChange:function(e){
    if (e.detail.value){
      this.setData({
        flag: true,
        message: e.detail.value
      })
    }else{
      this.setData({
        flag: false,
        message: e.detail.value
      })
    }
  },
  //提交留言
  submit:function(e){
    if(this.data.flag){
      const user = wx.getStorageSync("user");
      const arr = this.data.tree; 
      const obj={
        id: new Date(),
        headsrc: user.avatarUrl,
        nickname: user.nickName,
        time: '今天',
        content: this.data.message,
        leaveword: []
      }
      arr.push(obj)
      this.setData({
        tree: arr,
        flag:false,
        message:''
      })    
    }
  },
  //删除留言内容
  _del:function(e){
      
  }
})