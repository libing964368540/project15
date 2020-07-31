// components/UserFrom1/UserFrom1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      from1:{
        type: Object,
        value:''
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    array: [],
    group_arr:[
      { name: '计算机专业部', child: [{ name: '计算机1班' }, { name: '计算机2班' }]},
      { name: '数字媒体专业部', child: [{ name: '数字媒体1班' }, { name: '数字媒体2班' }] },
      { name: '电子信息专业部', child: [{ name: '电子信息1班' }, { name: '电子信息2班' }] }
    ],
    sex_arr:['男','女'],
    index:-1,
    group_index:-1,
    classgrade_index:-1,
    sex_index:-1

  },
  ready: function () {
    this.fillYear()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 填充年份
    fillYear(){
      var arr = [];
      for (var i = 1993; i < 2020; i++) {
        arr.push(i + '届')
      }
      this.setData({
        array: arr.reverse()
      })
    },
    // 添加年限
    bindPickerChange_year(e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      console.log(this.data.from1)
      this.setData({
        index: e.detail.value
      })
      if (e.detail.value > -1) {
        this.data.from1.graduateTime = this.data.array[e.detail.value]; //改变年份
        this.search_data();
      }
    },
    //添加专业部
    bindPickerChange_group(e){
      this.setData({
        group_index: e.detail.value
      })
      if (e.detail.value>-1){
        this.data.from1.majorName = this.data.group_arr[e.detail.value].name; //改变专业部
        this.search_data();
      }
    },
    //添加班级
    bindPickerChange_classgrade(e){
      this.setData({
        classgrade_index: e.detail.value
      })
      if (e.detail.value > -1) {
        this.data.from1.classgradeName = this.data.group_arr[this.data.group_index].child[e.detail.value].name;  //改变班级
        this.search_data();
      }
    },
    //添加姓名
    fillname(e){
       console.log(e)
        this.data.from1.name = e.detail.value //添加姓名
        this.search_data();
    },
    //添加性别
    bindPickerChange_sex(e){
      this.setData({
        sex_index: e.detail.value
      })
      if (e.detail.value > -1) {
        this.data.from1.sex = this.data.sex_arr[e.detail.value]; //改变性别
        this.search_data();
      }
    },
    //判断每次填充结束后，必填项是否填充完毕
    search_data(){
      this.data.from1.show_1 = this.judge();
      this.triggerEvent('myevent', this.data.from1)  
    },
    judge(){
      for (var i in this.data.from1){
        if(i!='show_1'){
          if (!this.data.from1[i]){
              return false;
           }
        }
      }
      return true;
    }
  }
  
})
