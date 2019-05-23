// pages/get/get.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selectArray: [
            {"name": "auto", "text": "自动检测"},
            { "name": "zh", "text": "中文" },
            { "name": "en	", "text": "英语" },
            { "name": "yue", "text": "粤语" },
            { "name": "wyw", "text": "文言文" },
            { "name": "jp	", "text": "日语" },
            { "name": "kor", "text": "韩语" },
            { "name": "fra", "text": "法语" },
            { "name": "spa", "text": "西班牙" },
            { "name": "th", "text": "泰语" },
            { "name": "ara", "text": "阿拉伯语" },
            { "name": "ru", "text": "俄语" },
            { "name": "pt", "text": "葡萄牙语" },
            { "name": "de", "text": "德语" },
            { "name": "it", "text": "意大利语" },
            { "name": "el", "text": "希腊语" },
            { "name": "nl", "text": "荷兰语" },
            { "name": "pl", "text": "波兰语" },
            { "name": "bul", "text": "保加利亚语" },
            { "name": "est", "text": "爱沙尼亚语" },
            { "name": "dan", "text": "丹麦语" },
            { "name": "fin", "text": "芬兰语" },
            { "name": "cs", "text": "捷克语" },
            { "name": "rom", "text": "罗马尼亚语" },
            { "name": "slo", "text": "斯洛文尼亚语" },
            { "name": "swe", "text": "瑞典语" },
            { "name": "hu", "text": "匈尼亚语" },
            { "name": "cht", "text": "繁体中文" },
            { "name": "vie", "text": "越南语"},
            ],
        selectArray2: [
            { "name": "en	", "text": "英语" },
            { "name": "zh", "text": "中文" },
            { "name": "yue", "text": "粤语" },
            { "name": "wyw", "text": "文言文" },
            { "name": "jp	", "text": "日语" },
            { "name": "kor", "text": "韩语" },
            { "name": "fra", "text": "法语" },
            { "name": "spa", "text": "西班牙" },
            { "name": "th", "text": "泰语" },
            { "name": "ara", "text": "阿拉伯语" },
            { "name": "ru", "text": "俄语" },
            { "name": "pt", "text": "葡萄牙语" },
            { "name": "de", "text": "德语" },
            { "name": "it", "text": "意大利语" },
            { "name": "el", "text": "希腊语" },
            { "name": "nl", "text": "荷兰语" },
            { "name": "pl", "text": "波兰语" },
            { "name": "bul", "text": "保加利亚语" },
            { "name": "est", "text": "爱沙尼亚语" },
            { "name": "dan", "text": "丹麦语" },
            { "name": "fin", "text": "芬兰语" },
            { "name": "cs", "text": "捷克语" },
            { "name": "rom", "text": "罗马尼亚语" },
            { "name": "slo", "text": "斯洛文尼亚语" },
            { "name": "swe", "text": "瑞典语" },
            { "name": "hu", "text": "匈尼亚语" },
            { "name": "cht", "text": "繁体中文" },
            { "name": "vie", "text": "越南语" },
        ],
            text:'',//输入框的文本
            from:'auto',//默认中文
            to:'en',//英文
            content:"",//输入框的文本
            src:'',//请求成功后输入框的文本
            message:''//返回的文本
    },
    listenerNewLabelInput: function (e) {
        this.data.text = e.detail.value;//监听到值并赋值给data
    },
    getDate: function (e) {
        // console.log(e.detail)
        this.setData({
            from: e.detail.name//源语言
        })
    },
    setDate: function (e) {
        // console.log(e.detail)
        this.setData({
            to: e.detail.name//目标语言
        })
    },

    getEnglish(){//翻译
        var that = this
        if(that.data.text == ''){
            that.setData({
                src:''
            })
            return;
        }
        wx.request({
            url: "https://api.mlwei.com/fanyi/api/?text=" + that.data.text +"&from=" + that.data.from + "&to=" + that.data.to,
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            success: function (res) {

                let test = res.data.trans_result
                if (test != undefined){
                    that.setData({
                        message: test[0].dst,
                        src: test[0].src,
                        content:'',
                        text:''
                    })
                    //获取节点
                    // let query = wx.createSelectorQuery()
                    // let a = query.select('#mes')
                    // a.value = that.data.message
                    console.log(that.data.message)
                }else{
                    that.setData({
                        src: '后台调用紧张，点击翻译按钮重试'
                    })
                }         
            }
        })
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

    },
    
})