// pages/schoolTree/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tree: [{
      id: 1,
      name: '2019届',
      children: [{
        id: 2,
        name: '数字媒体专业部',
        url: ''
      },
      {
        id: 3,
        name: '计算机专业部',
        url: ''
      },
      {
        id: 4,
        name: '电子信息专业部',
        children: [{
          id: 5,
          name: '计算机1班',
          children: [{
            id: 6,
            name: '王小丽',
            url: '/pages/Follow/index',
            srcUrl:'../../img/head.jpg',
            school:'杭州艺术学院'
          },
          {
            id: 7,
            name: '成申瓶',
            url: '/pages/Follow/index',
            srcUrl: '../../img/head.jpg',
            school: '浙江科技学院',
            
          }
          ]
        },
        {
          id: 8,
          name: '计算机2班',
          url: '/pages/tree/jump'
        }
        ]
      }
      ]
    },{
        id: 22,
        name: '2018届'

    },{
        id: 33,
        name: '2017届'
    },{
        id: 44,
        name: '2016届'

    }]
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
  }
})