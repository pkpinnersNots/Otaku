// pages/news/news.js
Page({
    // 
    /**
     * 页面的初始数据
     */
    data: {
        news:null,
        list:[],
        userInfo: {},
        curNav: 1,
        list:[
            { name: "娱乐"},
            { name: "军事" },
            { name: "汽车" },
            { name: "财经" },
            { name: "笑话" },
            { name: "体育" },
            { name: "科技" },
            { name: "感情" },
            { name: "头条"}
        ],
        nowlist:'',
    },
    switchRightTab: function (e) {
        var that = this
        let id = e.target.dataset.id;
        if (id == this.data.curNav) {
            return;
        }
        let lists = '';
        // console.log(id);
        that.setData({
            curNav: id
        })
        wx.request({
            url: "http://api.dagoogle.cn/news/nlist?cid=" + this.data.curNav,
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {
                // console.log(res.data.data.list)
                that.setData({
                    nowlist: res.data.data.list
                });
                // console.log(e.target.dataset.id, that.data.nowlist)
            }
        });
        
    },
    clicks(event){
        var index = event.currentTarget.dataset.index;
        var item = this.data.nowlist[index];//data中的数据
        var id = item.aid
        console.log(id);
        wx.navigateTo({
            url: '../../pages/newsDetails/newsDetails?aid=' + JSON.stringify(id)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.request({
            url: "http://api.dagoogle.cn/news/nlist?cid=" + that.data.curNav,
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {
                that.setData({
                    nowlist: res.data.data.list
                });
            }
        });

        // const value = wx.getStorageSync('news')
        // if(!value){
        //     console.log('没有')
        //     wx.request({
        //         url: "http://api.dagoogle.cn/news/nlist?cid=4",
        //         header: {
        //             'content-type': 'application/json' // 默认值
        //         },
        //         method: 'GET',
        //         sucscess: function (res) {
        //             console.log(res.data.data)
        //             wx.setStorage({
        //                 key: 'news',
        //                 data: res.data
        //             })
        //         }
        //     })
        //     console.log('缓存', value)
        // }else{
        //     console.log('缓存',value)
        // }
       
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