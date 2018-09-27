const authRoute = authValue => {
  console.log(authValue)
  wx.redirectTo({
    url: '../../pages/deployFunctions/deployFunctions',
  })
}


module.exports = {
  authRoute: authRoute
}