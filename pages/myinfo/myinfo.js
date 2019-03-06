// pages/myinfo/myinfo.js
var userData = require('../../data/userData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldSchool:"请输入学校  （如：黑龙江大学）",
    oldInstitute:"请输入学院 （如：数据科学与技术学院）",
    oldMajor:"请输入专业  （如：网络工程）",
    oldGrade:"请输入年级  （如：2016）",
    oldSign:"请输入签名",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      oldSchool: userData.userInfo.oldSchool,
      oldInstitute: userData.userInfo.oldInstitute,
      oldMajor: userData.userInfo.oldMajor,
      oldGrade: userData.userInfo.oldGrade,
      oldSign: userData.userInfo.oldSign,
    });

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