export const format = {
  componentType: 'simpleDialog',
  name: '单例弹框',
  icon: 'minus-square',
  options: {
    btnTitle: '单例弹框',
    preview: {
      template: '<md-button @click="dialogBtn"  size="small">{{widget.options.btnTitle}}</md-button>',
      methodParams: [
        {
          methodValue: 'this.$dialog[this.widget.options.type]({title:this.widget.options.title,content: this.widget.options.content,cancelText:this.widget.options.cancelText,confirmText:this.widget.options.confirmText,cancelWarning:this.widget.options.cancelWarning,confirmWarning:this.widget.options.confirmWarning,className:"toastClass"})',
          methodName: 'dialogBtn'
        }
      ],
      watch: {
        dataModel: {
          deep: true,
          user: true
        }
      },
      methods: {},
      props: {
        preview: {
          type: ''
        },
        widget: {
          type: ''
        }
      }
    },
    cancelWarning: false,
    component: {
      template: '<md-button size="small" >{{element.options.btnTitle}}</md-button>',
      props: {
        element: {
          type: ''
        }
      },
      _Ctor: {}
    },
    cancelText: '取消',
    confirmText: '确认',
    type: 'confirm',
    title: '窗口标题',
    confirmWarning: false,
    content: '提示内容'
  },
  rules: [],
  type: 'simpleDialog'
}
