// pages/tianqi/tianqi.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        title:null,
        display:'none',
        inputValue:null,//城市
        city:null,//城市
        forecast:null,//日期数组
        yesterday:null,//昨天
        ganmao:null,//描述
        wendu:null,//温度
        isShow:false
    },
    listenerNewLabelInput: function (e) {
        this.data.inputValue = e.detail.value;//监听到值并赋值给data
    },
   getv() {//搜素按钮
        let that = this
       wx.request({
           url: "https://www.apiopen.top/weatherApi?city=" + this.data.inputValue,
           header: {
               'content-type': 'application/json' // 默认值
           },
           method: 'GET',
           success: function (res) {
               console.log(res.data)//天气
               if (res.data.code == 200){
                   that.setData({
                       city: res.data.data.city,
                       forecast: res.data.data.forecast,
                       yesterday: res.data.data.yesterday,
                       ganmao: res.data.data.ganmao,
                       wendu: res.data.data.wendu,
                       isShow:true
                   })
               }else{
                   that.setData({
                       isShow:false           
                    })
                }
           }
        })
   },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        wx.request({
            url: "https://www.apiopen.top/weatherApi?city=广州",
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {
                console.log(res.data)//天气
                if (res.data.code == 200) {
                    that.setData({
                        city: res.data.data.city,
                        forecast: res.data.data.forecast,
                        yesterday: res.data.data.yesterday,
                        ganmao: res.data.data.ganmao,
                        wendu: res.data.data.wendu,
                        isShow: true
                    })
                } else {
                    that.setData({
                        isShow: false
                    })
                }
            }
        })
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