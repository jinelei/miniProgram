// components/markdownEditor.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _markdownEditorInputFunc(e) {
      // console.log('markdownEditorInputFunc')
      this.triggerEvent("markdownEditorInputFunc", e.detail.value)      
    },

    _markdownEditorConfirmFunc(e) {
      // console.log('markdownEditorConfirmFunc')
      this.triggerEvent("markdownEditorConfirmFunc", e.detail.value)
    }
  }
})