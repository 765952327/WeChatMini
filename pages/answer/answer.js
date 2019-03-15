// pages/answer/answer.js
// var importData = require('../../data/answerData.js')
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
    commentNum: 0,
    answerPost: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var id = wx.getStorageSync('viewID');
    var userid = wx.getStorageSync('userID');
    var resData = {};
    wx: wx.request({
      url: 'http://127.0.0.1:8080/answerPost',
      data: {
        contentid: id,
        userid: userid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res)
        that.setData({
          answerPost: res.data[0]
        });
        // 关注状态初始化
        that.bindFollewView();
        //点赞、收藏、评论状态初始化
        that.initData();
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // console.log(this.data);


    console.log(this.data);
  },
  initData: function(e) {
    this.initFabulous();
    this.initCollection();
    this.initComment();
  },
  initFabulous: function(e) {
    console.log(this.data.answerPost)
    if (this.data.answerPost.fabulousFlag == true) {
      this.setData({
        fabulous: "../../images/heart1.png",
        fabulousNum: this.data.answerPost.fabulousNum
      });
    }
  },
  initCollection: function(e) {
    if (this.data.answerPost.collectionFlag == true) {
      this.setData({
        collection: "../../images/star1.png",
        collectionNum: this.data.answerPost.collectionNum
      });
    }
  },
  initComment: function(e) {
    if (this.data.answerPost.commentFlag == true) {
      this.setData({
        commentNum: this.data.answerPost.commentNum
      });
    }
  },
  doFabulous: function(e) {
    if (this.data.fabulousNum != "点赞") {
      this.setData({
        fabulousNum: "点赞",
        fabulous: "../../images/heart2.png",
        "answerPost.fabulousFlag": false,
        "answerPost.fabulousNum": this.data.answerPost.fabulousNum - 1
      })
    } else {
      this.setData({
        "answerPost.fabulousFlag": true,
        "answerPost.fabulousNum": this.data.answerPost.fabulousNum + 1
      })

    }
    this.doRequst("Fabulous");
    this.initFabulous();
  },
  doCollection: function(e) {
    if (this.data.collectionNum != "收藏") {
      this.setData({
        collectionNum: "收藏",
        collection: "../../images/star2.png",
        "answerPost.collectionFlag": false,
        "answerPost.collectionNum": this.data.answerPost.collectionNum - 1
      })
    } else {
      this.setData({
        "answerPost.collectionFlag": true,
        "answerPost.collectionNum": this.data.answerPost.collectionNum + 1
      })

    }
    this.doRequst("Collection");
    this.initCollection();
  },
  doComment: function(e) {
    console.log("跳转评论页面");
  },
  doRequst: function(tag) {
    wx: wx.request({
      url: 'http://127.0.0.1:8080/doOperation',
      data: {
        userid: wx.getStorageSync('userID'),
        contentid: wx.getStorageSync('viewID'),
        tag: tag
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
        wx.showToast({
          title: res.data + '成功',
          icon: 'success',
          duration: 2000 //持续的时间
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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
    if (this.data.answerPost.follew == true) {
      this.setData({
        "answerPost.follew": false
      });
    } else {
      this.setData({
        "answerPost.follew": true
      });
    }
    this.doRequst("Follew");
    this.bindFollewView();
    //TODO:将状态改变传入后端


  },
  bindFollewView: function(e) {
    if (this.data.answerPost.follew) {
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