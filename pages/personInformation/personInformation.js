{
  Page({

    /**
     * 页面的初始数据
     */
    data: {
      userName: "点击完善信息",
      headPic: "",
      userDes: ""
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
      var onickName = "";
      var oheadPic = "";
      var ouserDes = "";
      var osex = null;
      wx: wx.getUserInfo({
        withCredentials: true,
        lang: '',
        success: function(res) {
          console.log(res);
          onickName = res.userInfo.nickName;
          console.log(onickName);
          oheadPic = res.userInfo.avatarUrl;
          osex = res.userInfo.gender;
        },
        fail: function(res) {},
        complete: function(res) {},
      })
      this.setData({
        userName: onickName,
        headPic:oheadPic,
      })
      console.log(this.data.userName);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
}