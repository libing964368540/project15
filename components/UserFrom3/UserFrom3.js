// components/UserFrom3/Userfrom3.js
var address = require('../../utils/address.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    from3: {
      type: Object,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    addressData: [],
    cityData: [],
    areaData: [],
    index: -1,
    cityIndex: -1,
    areaIndex: -1
  },
  ready: function () {
    var arr = address.address.map((x) => {
      return x.name
    })
    this.setData({
      addressData: arr
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange_sheng(e) {
      this.setData({
        index: e.detail.value,
        cityIndex: -1,
        areaIndex: -1
      })
      this.cityInit();
      this.areaInit();
      this.data.from3.provinceName = this.data.addressData[e.detail.value]; //省份
      this.search_data();
    },
    bindPickerChange_city(e) {
      this.setData({
        cityIndex: e.detail.value,
        areaIndex: -1
      })
      this.areaInit();
      this.data.from3.cityName = this.data.cityData[e.detail.value];  //市区
      this.search_data();
    },
    bindPickerChange_area(e) {
      this.setData({
        areaIndex: e.detail.value
      })
      this.data.from3.areaName = this.data.areaData[e.detail.value];   //区
      this.search_data();
    },
    //市的初始化
    cityInit() {
      if (address.address[this.data.index]){
        var arr = address.address[this.data.index].childs.map((x) => {
          return x.name
        })
        this.setData({
          cityData: arr
        })
      }
      this.data.from3.cityName = '';
    },
    areaInit() {
      if (address.address[this.data.index].childs[this.data.cityIndex]) {
        var arr = address.address[this.data.index].childs[this.data.cityIndex].childs.map((x) => {
          return x.name
        })
        this.setData({
          areaData: arr
        })
      }
      this.data.from3.areaName = '';
    },
    //判断每次填充结束后，必填项是否填充完毕
    search_data() {
      this.data.from3.stateName = '中国'  //国家
      this.data.from3.show_3 = this.judge();
      this.triggerEvent('myevent', this.data.from3)
    },
    judge() {
      for (var i in this.data.from3) {
        if (i != 'show_3') {
          if (!this.data.from3[i]) {
            return false;
          }
        }
      }
      return true;
    }
  }
})
