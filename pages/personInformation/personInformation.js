
  Page({

    /**
     * 页面的初始数据
     */
    data: {
      userName: "点击完善信息",
      headPic: "",
      userDes: "",
      userID:""
    },
    bindToMyInfo: function(e) {
      wx.navigateTo({
        url: '../myinfo/myinfo',
      })
    },
    bindToMyFollow: function(e) {
      wx.navigateTo({
        url: '../myfollow/myfollow',
      })
    },
    bindToMyCollection: function(e) {
      wx.navigateTo({
        url: '../mycollection/mycollection',
      })
    },
    bindToMyCoin: function(e) {
      wx.navigateTo({
        url: '../mycoin/mycoin',
      })
    },
    bindToMyRecently: function(e) {
      wx.navigateTo({
        url: '../myrecently/myrecently',
      })
    },
    doLogin: function(e) {
      var that = this;
      console.log(this.data.userID)
      wx: wx.getUserInfo({
        withCredentials: true,
        lang: '',
        success: function(res) {
          wx:wx.request({
            url: 'http://127.0.0.1:8080/userinfo',
            data: {
              nickName:res.userInfo.nickName,
              sex: res.userInfo.gender,
              headPic: res.userInfo.avatarUrl,
              city: res.userInfo.city,
              userid: that.data.userID
            },
            header: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
              console.log(res);
            },
            fail: function(res) {},
            complete: function(res) {},
          })
          wx.setStorage({
            key: "userName",
            data: res.userInfo.nickName
          })
          wx.setStorage({
            key: "headPic",
            data: res.userInfo.avatarUrl
          })
          
        },
        fail: function(res) {},
        complete: function(res) {},
      })
      
      var userName = wx.getStorageSync('userName');
      var headPic = wx.getStorageSync('headPic');
      this.setData({
        userName:userName,
        headPic:headPic
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      this.setData({
        userID: wx.getStorageSync('userID')
      })
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
