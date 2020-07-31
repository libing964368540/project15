// components/UserFrom4/Userfrom4.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    from4: {
      type: Object,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    images: wx.getStorageSync("user").avatarUrl
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
            that.data.from4.header = tempFilePaths;
            that.search_data();
          }
        })
    },
    //手机号
    phone(e){
      this.data.from4.cellPhone = e.detail.value;
      this.search_data();
    },
    //电子邮箱
    email(e){
      this.data.from4.email = e.detail.value;
      this.search_data();
    },
    search_data() {
      this.triggerEvent('myevent', this.data.from4)
    },
  }
})
