// components/weuicomment/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tree: {
      type: Array,
      value: []
    }
  },
  ready: function () {
    this.setData({
      treeData: this.properties.tree,
      userInfo: wx.getStorageSync("user")
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    treeData: [],
    userInfo:null
  },
  observers:{
    'tree':function(newVal,oldVal){
      this.setData({
        treeData: newVal
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _send:function(e){
      console.log(e)
      //将参数传出去，这样在getInput函数中可以通过e去获得必要的参数
      this.triggerEvent("myevent", e.currentTarget.dataset);
    }
  }
})
