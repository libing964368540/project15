// components/prompt_send/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    releaseFocus:false,
    message:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hidePrompt: function () {
      this.setData({
        releaseFocus: true
      })
    },
    showPrompt() {
      this.setData({
        releaseFocus: false
      })
    },
    clear() {
      this.setData({
        message:''
      })
    },
    _send(e){
      this.triggerEvent("bindsend", e.currentTarget.dataset);
    },
    bindTextAreaChange: function (e) {
        this.setData({
          message: e.detail.value
        })
    },
  }
})
