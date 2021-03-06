// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()


// 云函数入口函数
exports.main = async(event, context) => {
  console.log(event)
  console.log(context)
  return await db.collection('users')
    .where({
      _openid: event.userInfo.openId,
    })
    .limit(1)
    .get()
}