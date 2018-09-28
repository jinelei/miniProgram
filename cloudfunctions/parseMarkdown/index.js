// 云函数入口文件
const cloud = require('wx-server-sdk')
const markdown = require('markdown').markdown;

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  console.log(event)
  console.log(context)

  let { userInfo, originMarkdown } = event

  originHtml = markdown.toHTML(originMarkdown);
  
  return originHtml;

}