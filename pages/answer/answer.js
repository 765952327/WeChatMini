// pages/answer/answer.js
var importData = require('../../data/answerData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    follew: "+关注",
    fabulous: "../../images/heart2.png",
    collection: "../../images/star2.png",
    comment: "../../images/comment2.png",
    fabulousNum: "点赞",
    collectionNum: "收藏",
    commentNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var id = wx.getStorageSync('viewID');
    this.setData({
      answerPost: importData.exportList
    });
    console.log(id);
    console.log(this.data.answerPost[0].id);
    // 关注状态初始化
    this.bindFollewView();
    //点赞、收藏、评论状态初始化
    this.initData();
  },
  initData: function(e) {
    this.initFabulous();
    this.initCollection();
    this.initComment();
    
    
    console.log(this.data);
  },
  initFabulous: function (e){
    if (this.data.answerPost[0].fabulousFlag == true) {
      this.setData({
        fabulous: "../../images/heart1.png",
        fabulousNum: this.data.answerPost[0].fabulousNum
      });
    }
  },
  initCollection: function (e) {
    if (this.data.answerPost[0].collectionFlag == true) {
      this.setData({
        collection: "../../images/star1.png",
        collectionNum: this.data.answerPost[0].collectionNum
      });
    }
  },
  initComment: function (e) {
    if (this.data.answerPost[0].commentFlag == true) {
      this.setData({
        commentNum: this.data.answerPost[0].commentNum
      });
    }
  },
  doFabulous: function(e) {
    if (this.data.fabulousNum!="点赞"){
      this.setData({
        fabulousNum:"点赞",
        fabulous:"../../images/heart2.png",
        "answerPost[0].fabulousFlag":false
      })
    }else{
      this.setData({
        "answerPost[0].fabulousFlag": true
      })
      this.initFabulous();
    }
  },
  doCollection: function(e) {
    if (this.data.collectionNum != "收藏") {
      this.setData({
        collectionNum: "收藏",
        collection: "../../images/star2.png",
        "answerPost[0].collectionFlag": false
      })
    }else{
      this.setData({
        "answerPost[0].collectionFlag": true
      })
      this.initCollection();
    }
  },
  doComment: function(e) {
   console.log("跳转评论页面");
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
    this.onLoad();
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

  },
  bindFollew: function(e) {
    //改变follew状态
    if (this.data.answerPost[0].follew == true) {
      this.setData({
        "answerPost[0].follew": false
      });
    } else {
      this.setData({
        "answerPost[0].follew": true
      });
    }
    this.bindFollewView();
    //TODO:将状态改变传入后端


  },
  bindFollewView: function(e) {
    if (this.data.answerPost[0].follew) {
      this.setData({
        follew: "已关注"
      });
    } else {
      this.setData({
        follew: "+关注"
      });
    }
  }
})