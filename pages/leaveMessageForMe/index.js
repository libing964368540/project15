// pages/leaveMessageForMe/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tree:[
        {
          id:1,
          nickname:'汪怡',
          headsrc:'../../img/head.jpg',
          content:'李老师有个问题，想请教一下，什么时候能见个面',
          time:'今天',
          leaveword:[]

        },
        {
          id: 2,
          nickname: '刘子航',
          headsrc: '../../img/head1.jpg',
          content: '学校什么时候搞个班级聚会啊',
          time: '昨天',
          leaveword: []

        },
        {
          id: 3,
          nickname: '王小丽',
          headsrc: '../../img/head2.jpg',
          content: '好久不见',
          time: '2019.07.22',
          leaveword: []

        },
        {
          id: 4,
          nickname: '张智勇',
          headsrc: '../../img/head3.jpg',
          content: '最近我们这里缺工程师，你是否考虑',
          time: '2019.03.12',
          leaveword: []

        },
        {
          id: 5,
          nickname: '王丽',
          headsrc: '../../img/head4.jpg',
          content: '我们居然一个单位',
          time: '2019.02.22',
          leaveword: []

        }
      ],
      message:'',
      index:-100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //在onReady生命周期函数中，先获取prompt实例
onReady:function(){
    this.prompt = this.selectComponent("#prompt");
    this.prompt_send = this.selectComponent("#prompt_send");
},
//显示prompt
showPrompt:function(){
    this.prompt.showPrompt();
},
//将输入的value保存起来
getInput: function (e) {
    this.setData({
      value: e.detail.value
    })
},
confirm: function () {
   let _cost = this.data.value;
   if (_cost == '') {
     console.log('你还未输入');
     return;
   }
   else{
      
   }
 },
 cancel: function () {
   this.prompt.hidePrompt();
 },
 //点击回复
  bindReply:function(e){
     console.log(e);
    this.prompt_send.hidePrompt();
    this.setData({
        index: e.detail.index
    })
  },
  //点击发送
  bindsend:function(e){
    if (!e.detail.value){
      wx.showToast({
        title: '内容不能为空',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }
     const arr=this.data.tree;
     const index = this.data.index;
     const user = wx.getStorageSync("user");
     const obj = {
       id: new Date(),
       headsrc: user.avatarUrl,
       nickname: user.nickName,
       time: '今天',
       content: e.detail.value,
       leaveword: []
     }
     console.log(arr);
     console.log(index);
    console.log(arr[index]);
    arr[index].leaveword.push(obj);  
    this.setData({
      tree: arr,
      message:''
    })
    this.prompt_send.clear();  
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