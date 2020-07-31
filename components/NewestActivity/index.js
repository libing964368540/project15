// components/NewestActivity/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    news:{
        type: Array,
        value: []
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newest: []
  },
  ready: function () {
    this.setData({
      newest: this.data.news
    })
    console.log(this.data.news);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getFollow(e){
      wx.navigateTo({
        url:'/pages/Follow/index?name=' + e.currentTarget.dataset.name
      })
    }
  }
})
