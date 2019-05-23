// pages/urse/urse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      use:null,
      img:null,
      name:null,
      nowuser:null
  },
//   微信授权
   onGotUserInfo(e) {
        // console.log(e.detail.errMsg)
        // console.log(e.detail.userInfo)
        // console.log(e.detail.rawData)
        this.setData({
            img: e.detail.userInfo.avatarUrl,
            name: e.detail.userInfo.nickName,
            nowuser: e.detail.userInfo
        })
    },
    nowuser(){
        if (this.data.nowuser!=null){
            wx.navigateTo({
                url: '../../pages/contact/contact?nowuser=' + JSON.stringify(this.data.nowuser)
            })  
        }

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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