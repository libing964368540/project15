// components/UserFrom2/Userfrom2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    from2: {
      type: Object,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    array: [],
     sl_state:false,
     indexBefore:-1,
     indexAfter:-1
  },
  ready: function () {
    this.fillYear()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 填充年份
    fillYear() {
      var arr = [];
      for (var i = 1993; i < 2020; i++) {
        arr.push(i + '年')
      }
      this.setData({
        array: arr.reverse()
      })
    },
    // 改变时工作状态还是学生状态
    changeState(){
      this.setData({
        sl_state: !this.data.sl_state
      })
      if (this.data.sl_state){
          //请输入学校
        this.data.from2.show_2_title = '请输入学校'
        this.data.from2.type =3;
      }else{
          //请输入您从事的工作
        this.data.from2.show_2_title = '请输入您从事的工作'
        this.data.from2.type = 1;
      }
      this.search_data();
    },
    //担当的职务
    workPost(e){
      this.data.from2.post = e.detail.value; //担任的职位
      this.search_data();
    },
    //就职的公司
     workName(e){
       this.data.from2.company = e.detail.value; //就职的公司
       this.search_data();
     },
    //学校
     school(e){
       this.data.from2.schoolName2 = e.detail.value; //就读学校
       this.search_data();
     },
     //入学年份
    bindPickerChangeBefore(e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      console.log(this.data.from2)
      this.setData({
        indexBefore: e.detail.value
      })
      if (e.detail.value > -1) {
        this.data.from2.startTime = this.data.array[e.detail.value];//入学年份
        this.search_data();
      }
      this.search_data();
    },
    //毕业年份
    bindPickerChangeAfter(e) {
      this.setData({
        indexAfter: e.detail.value
      })
      if (e.detail.value > -1) {
        this.data.from2.entTime = this.data.array[e.detail.value]; //毕业年份
        this.search_data();
      }
      this.search_data();
    },
    // 更新父元素
    //判断每次填充结束后，必填项是否填充完毕
    search_data() {
       this.data.from2.show_2 = this.judge();
       this.triggerEvent('myevent', this.data.from2)
    },
    judge(){
      if (this.data.sl_state) {
        //请输入学校
        if (this.data.from2.schoolName2 && this.data.from2.startTime && this.data.from2.entTime){return true}
      } else {
        //请输入您从事的工作
        if (this.data.from2.post && this.data.from2.company){return true}
        
       }
       return false;
     }
  }
})
