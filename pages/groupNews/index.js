// pages/groupNews/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tree: [{
      id: 1,
      name: '杭州地铁',
      srcUrl: "../../img/upCar.jpg",
      total: "36名校友",
      children: [{
        id: 2,
        name: '汪怡',
        url: '/pages/tree/jump',
        srcUrl: '../../img/head.jpg',
        school: '2015届电子应用1班',
        workYear: "2018.6-现在"
      },
      {
        id: 3,
        name: '刘子航',
        url: '/pages/tree/jump',
        srcUrl: '../../img/head.jpg',
        school: '2016届轨道交通2班',
        workYear: "2018.6-现在"
      }, {
        id: 4,
        name: '王小丽',
        url: '/pages/tree/jump',
        srcUrl: '../../img/head.jpg',
        school: '2014届轨道交通1班',
        workYear: "2019.1-现在"
      }, {
        id: 5,
        name: '张智勇',
        url: '/pages/tree/jump',
        srcUrl: '../../img/head.jpg',
        school: '2010届轨道交通1班',
        workYear: "2019.1-现在"
      }, {
        id: 5,
        name: '王丽',
        url: '/pages/tree/jump',
        srcUrl: '../../img/head.jpg',
        school: '2014届轨道交通1班',
        workYear: "2015.2-2018.3"
      }]
    },
    {
      id: 22,
      name: "杭州网易",
      srcUrl: "../../img/net.jpg",
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const tree = this.isFolder(this.data.tree);
    console.log(tree);
    this.setData({
      tree
    })
  },
  isFolder: function (arr) {
    const that = this;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children && arr[i].children.length > 0) {
        arr[i].isFolder = true;
        that.isFolder(arr[i].children);
      } else {
        arr[i].isFolder = false;
      }
      arr[i].isOpen = false;
    }
    return arr;
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