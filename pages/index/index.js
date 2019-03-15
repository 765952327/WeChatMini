{
  // 引用indexData.js里头的数据
  // var importData = require('../../data/indexData.js')
  //在require引用数据时只可以用相对路径，不可以用绝对路径
  var searchKeyWords = null;
  Page({
    data: {
      mainKey: [

      ]
    },

    upper: function() {
      wx.showNavigationBarLoading();

      wx.stopPullDownRefresh()
    },

    onLoad: function(options) {
      var that = this;
      wx.login({
        success: function (res) {
          //获取微信临时凭证
          console.log(res);
          var code = res.code;
          //调用后端获取Session_key 和 secret
          wx: wx.request({
            url: 'http://127.0.0.1:8080/wxLogin?code=' + code,
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
              console.log(res.data.userid);
              wx.setStorage({
                key: "userID",
                data: res.data.userid
              })
              // this.global.data = res.data.userid;
          
            },
            fail: function (res) { },
            complete: function (res) { },
          })
          
        }
      })

    },

    bindCommunityTap: function(e) {
      // console.log(e);
      wx.setStorage({
        key: "communityID",
        data: e.currentTarget.dataset.communityid
      }),
        wx.navigateTo({
          url: '../subjectPlate/subjectPlate',
        })
    },
    bindContentTap: function(e) {
      console.log(e);
      wx.setStorage({
          key: "viewID",
          data: e.currentTarget.dataset.id
        }),
        wx.navigateTo({
          url: '../answer/answer',
        })
    },
    bindTextTap: function() {
      wx.navigateTo({
        url: '../richEditor/richEditor',
      })
    },
    upper: function() {
      wx.showNavigationBarLoading()
      this.refresh();
      // console.log("upper");
      setTimeout(function() {
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }, 2000);
    },
    bindSearch: function(e) {
      var key = searchKeyWords;
      console.log("搜索内容:" + key);

      //TODO:将关键词提交后端；

      //TODO:重新设置页面数据；
    },
    //获取搜索关键词
    getKeyWords: function(e) {
      var val = e.detail.value;
      searchKeyWords = val;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
      var that = this;
      wx: wx.request({
        url: 'http://127.0.0.1:8080/index',
        data: '',
        header: {},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          console.log(res);
          that.setData({
            mainKey: res.data
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
  })
}