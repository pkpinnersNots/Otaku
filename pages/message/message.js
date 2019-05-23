// pages/message/message.js
Page({
    data: {
        list:[],
        video:[],
        imgs:[],
        ishow:false
    },
    // 图文
    imgclick: function (event) {
        var index = event.currentTarget.dataset.index;//拿到下标
        var item = this.data.imgs[index];//data中的数据
        // console.log(item);
        wx.navigateTo({
            url: '../../pages/imgdetalis/imgdetalis?item=' + JSON.stringify(item)
        })
    },
    // 视频
    videoclick: function (event){
        var index = event.currentTarget.dataset.index;
        var item = this.data.video[index];
        wx.navigateTo({
            url: '../../pages/videodetalis/videodetalis?item=' + JSON.stringify(item)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
      var that = this
      
        wx.request({
            url: "https://www.apiopen.top/satinApi?type=1&page=1",
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {
                // console.log(res.data)
                var a = [];
                var b = [];
                for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].type == 41){               
                        a.push(res.data.data[i]);
                    }                 
                }
                for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].type == 10) {
                        b.push(res.data.data[i]);
                    }
                }
                that.setData({
                    list:res.data.data ,
                    video:a,
                    imgs:b                
                })
                // console.log(res.data.data)
                // console.log(that.data.list)
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
        // console.log('懒加载')
        let that = this
        wx.request({
            url: "https://www.apiopen.top/satinApi?type=1&page=1",
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {
                var a = that.data.video;
                var b = that.data.imgs;
                for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].type == 41) {
                        a.push(res.data.data[i]);
                    }
                }
                for (var i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].type == 10) {
                        b.push(res.data.data[i]);
                    }
                }
                that.setData({
                    list: res.data.data,
                    video: a,
                    imgs: b
                })
            }
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})