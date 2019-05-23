// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        val:'',
        date:null,
        city:null,
        movie:null
    },
    listenerNewLabelInput: function (e) {
        this.data.val = e.detail.value;//监听到值并赋值给data
      console.log('that.data.val', that.data.val)  //that.data.val 是你当前的地理位置
    },
    getv(){
        var that = this
        if (that.data.val!==''){
          
            wx.request({
                url: "http://api.map.baidu.com/telematics/v3/movie?qt=hot_movie&location="+ that.data.val +"&ak=TueGDhCvwI6fOrQnLM0qmXxY9N0OkOiQ&output=json",
                header: {
                    'content-type': 'application/json' // 默认值
                },
                method: 'GET',
                success: function (res) {
                    console.log(res.data)
                    if (res.data.status === "Success"){
                        that.setData({
                            date: res.data.date,
                            city: res.data.result.cityname,
                            movie: res.data.result.movie
                        })
                    }
                }
            })
            // console.log(this.data.val)
        }else{
            return
        }


    },
    details(event){
        var index = event.currentTarget.dataset.index;
        // console.log(index)
        var item = this.data.movie[index];//data中的数据
        // console.log(item);
        wx.navigateTo({
            url: '../../pages/details/details?item=' + JSON.stringify(item)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: "http://api.map.baidu.com/telematics/v3/movie?qt=hot_movie&location=广州&ak=TueGDhCvwI6fOrQnLM0qmXxY9N0OkOiQ&output=json",
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {
                // console.log(res.data)
                that.setData({
                    date: res.data.date,
                    city: res.data.result.cityname,
                    movie: res.data.result.movie
                })
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