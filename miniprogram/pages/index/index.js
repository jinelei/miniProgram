// miniprogram/pages/index/index.js
import {
  authRoute
} from '../../utils/routers/authRouter.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

    // 调用云函数
    wx.cloud.callFunction({
      name: 'checkAuth',
      data: {},
      success: res => {
        console.log('[云函数] [checkAuth] user openid: ', res)
        if (!res.result.data[0] || !res.result.data[0].auth) {
          wx.showToast({
            title: '游客登陆',
            icon: 'none',
          })
        } else {
          wx.showToast({
            title: '欢迎回来',
            icon: 'none',
          })
          authRoute(res.result.data[0].auth);
        }
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    })
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