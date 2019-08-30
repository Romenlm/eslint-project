const ff = {
  componentType: 'shortcut-menu',
  columns: [
    {
      list: [
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136285000_80785',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '我的信用卡'
          },
          rules: [],
          model: 'ImageText_1563955072000_48467',
          type: 'ImageText',
          key: '1563955072000_48467'
        },
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136292000_80189',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '转账'
          },
          rules: [],
          model: 'ImageText_1563955072000_71254',
          type: 'ImageText',
          key: '1563955072000_71254'
        }
      ],
      span: 24
    },
    {
      list: [
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136287000_7578',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '他行转入'
          },
          rules: [],
          model: 'ImageText_1563955072000_2931',
          type: 'ImageText',
          key: '1563955072000_2931'
        },
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136294000_16805',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '我的贷款'
          },
          rules: [],
          model: 'ImageText_1563955072000_83462',
          type: 'ImageText',
          key: '1563955072000_83462'
        }
      ],
      span: 24
    },
    {
      list: [
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136289000_61484',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '借钱'
          },
          rules: [],
          model: 'ImageText_1563955072000_78629',
          type: 'ImageText',
          key: '1563955072000_78629'
        },
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136295000_75313',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '我的缴费'
          },
          rules: [],
          model: 'ImageText_1563955072000_72184',
          type: 'ImageText',
          key: '1563955072000_72184'
        }
      ],
      span: 24
    },
    {
      list: [
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136290000_94383',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,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',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '热门活动'
          },
          rules: [],
          model: 'ImageText_1563955072000_63714',
          type: 'ImageText',
          key: '1563955072000_63714'
        },
        {
          componentType: 'ImageText',
          name: '图片-文本',
          icon: 'image',
          options: {
            preview: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':widget.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': widget.options.style.paddingTop+\'px\',                \'padding-bottom\': widget.options.style.paddingBottom+\'px\',                \'flex-direction\': widget.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':widget.options.style.img.imageHeight+\'px\',                 \'width\':widget.options.style.img.imageWidth+\'px\',                 \'border-radius\':widget.options.style.img.borderRadius+\'px\' }"                  :src="widget.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'padding-left\': widget.options.style.span.paddingLeft+\'px\',                \'height\':widget.options.style.span.textHeight+\'px\',                 \'font-size\':widget.options.style.span.fontSize + \'px\',                 \'color\':widget.options.style.span.fontColor,                 \'line-height\':widget.options.style.span.textHeight+\'px\'}">                 {{widget.options.content}} </span></div>',
              watch: {
                dataModel: {
                  deep: true,
                  user: true
                }
              },
              props: {
                preview: {
                  type: ''
                },
                widget: {
                  type: ''
                }
              }
            },
            remoteFunc: 'func_1562136296000_35847',
            path: '',
            component: {
              template: '<div                 :style="{\'display\': \'flex\',                \'justify-content\':element.options.style.justifyContent,                \'align-items\': \'center\',                \'padding-top\': element.options.style.paddingTop+\'px\',                \'padding-bottom\': element.options.style.paddingBottom+\'px\',                \'flex-direction\': element.options.style.flexDirection}"                @click="$bridge.toZipPage(widget.options.path)">                <img :style="{ \'display\':\'block\',                 \'border\':\'0px solid #dedede\',                 \'height\':element.options.style.img.imageHeight+\'px\',                 \'width\':element.options.style.img.imageWidth+\'px\',                 \'border-radius\':element.options.style.img.borderRadius+\'px\' }"                  :src="element.options.imageUrl">                <span :style="{                 \'display\':\'block\',                \'height\':element.options.style.span.textHeight+\'px\',                 \'font-size\':element.options.style.span.fontSize + \'px\',                 \'color\':element.options.style.span.fontColor,                 \'padding-left\': element.options.style.span.paddingLeft+\'px\',                \'line-height\':element.options.style.span.textHeight+\'px\'}">                 {{element.options.content}} </span></div>',
              props: {
                element: {
                  type: null
                }
              },
              _Ctor: {}
            },
            imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAQM0lEQVR4Xu1deZCcRRX/vW92N1n2mG8SQi5jIEbEg0QojBgyM5AioCCHcqmAZUmBUhVJOFRAQAFBEAkJiorIHyp4kRDQAoo7MxtRjgIjlQJiEk0CIYnJzsze13zP6pmdze7O9R3d3/fN7PSfM93vvX79+153v379mlArE1oDNKF7X+s8agCY4CCoAaAGgOrUACfiUQRwChjHwcBRAHQwN0BDAEwBgDXQMP6ZAZAB4jQMpEE0ACABDW8D/BoMepZCkVg1aqoqLAB3vrwURv+5MHACCPMANCsZLOYugLZB47/BCKyl0JIXlfBxkWhFAoC7Y8dggG4BYRHA0zDyKbuoOcGKwSDeB6ZXUc/XU3P0TZclcMyuYgDAHJ+JDuN2MJ0NkO6450oIcAKM9dAHryc6ea8SFpKJ+h4AnNh4JWCsAGGu5L6rJcfYgTpaRS3he9UyckbdlwBgZkIifjsIy0GkZj53pjcLrbkTRPdQMPJ9C41cq+orADA/OQmdzT+Fga8CmOSaFtxgxNwPDQ+iNbKSiAbdYGmGh28AkDH1mnEnGPVmBK/gOgNg7VoKLbnHD33wHADcE1+Efl4Poll+UIh7MvAu1OMsaoq+4R7PfE6eAYB5UxM6Uo/C4FO82sV5qfgMb+GAInoSweD5RAu7vZDHEwBkvHTETwNUXfO87RHkfjCd6oW30XUAcCL2awCXTNivvhhIhDXQtFUUDF9tG0c2GroGAOa2EFLGJoDm2JBz4jQhbEFr/yKiZSk3Ou0KALhjwxlgbd0EWOHLGrMBgM8gPfqMLILF6CgHACfiK0HwxZZHtTKl0hdTQkC7mlrDq6TSHUdMKQA4FfsBmHzpAVOpVKm0iW+jYPQGqTRHEVMGAO7YcD8M7TJVgk8ousT3UTC6XEWflQCAk/E/ArhAhcATlibjIQpFLpbdf+kA4GT8TgDfkS1ojZ7QAN1NevgambqQCgDubLsCaWMNarGmMsdoFC0GOHCVzHMEaQDgnvg56Oe1NQePorHPkRW7AyPwJZq65E8yOEkBAHdsCMOgmGehWTI0UVE0mMF0kgzXsWMADHv49gJU7ce4PoMIDyI4fSrRUZ1OBHMOgGRsZ82962QIHLQlbKFg5CMOKDhbrdX2+k5UL6kt8RoKRlfapWbbAnBi40lA+oXaos+u6iW1E4vCSfUn0CGLX7JD0RYAMrF7qWZxWlU7z7ejdfltehGsm0q0uNcqaXsASMY3AIhaZea7+ukuYPAAkO4GeOigeIEmINAM1E+pnLUt4TkKRpZZ1bFlAPDAi8ehR3u1op09fTuB/ncBTpfXV8N0YPIHAW1y+bpe1hBTQT0WWL2dZB0Aqfh7YFRmAKf44rvfAow+60MlQDDZ73dTaCfpYUtCWgIAd7RdBoPvt649H7QY2Av0bjP31RcTV1iDxiP8PS0EeDm1RO8zq3HTAGDmAFJtPQAazBL3TT0x+D1b5IhTPxVo+pgcWmqo9CMYbiIiE/ObhYk8E8xJdIkamRVSFWa/61/Ovvzx4k2aBTR+SKHQDklbiB8wbwGScZE0ofLcvZ2vZ1f5skvz0UCdTy8pG+ijKZFGM102BYCKDe2SafrHa7MuCDQvMKNjj+rwdaRH7yjH3BwAErEkiILliPnuf1Vff66jLcdk/QX+LO2kR6aWE60sADi18UKw8VA5Qr77X2z1Ol5VK1bjPGDSbLU8nFAP8DnUEn20FAkTAIi/A8aRTuTwpK1K85/rkO+nAbxDekQkyCpaSgIg4/NPNvVV5IGP8Pb17VCLPWH+xTTg1yKSn+ldk4lO6y8mYmkApNruBvNVrvdv6ACwdx1gDJ9tNB0JNM4HGj9sXpRyABhKAEMpwBjeIfSXSekjVvyBSdmVv4h9qT8sK4seNi+TNzV/THrku/YAkIy9D9AM1+Xe/wTQ/lQ+W60xu/I+9DSgrsz6ZjwAxID3/gcYSgKD/5PTpfppQHCRdXDK4W6OCvNuCkWLLlSKWgDmV+YgJbToQUm+COxbV5qxsAaHnQNM+kDhekL0ns1A/26ge8vBL11Vd+qmZMEZPL64TKp4l6MbHJhRLGtZcQCk2n4P5i+Xo63s/+03AuKrLVdaPw0cdi4grEOuiClEAEh4AL0oYmcQWpoFxGi5vJBF8CT8hoKRrxViXxwAydg+gKZ5JTPMWIGccELJh54OCO/c/ieBjpc9E3sMYyGXAKcAqaeF95AenWkaAJk0bcm44enqX5zX7yjryPJUraaZi+lh5sXWFrGmiZuoKDLRhCIFP/aCP/rG+bNFyX1IExpTVEU/MWupvJgWGnAuHRLJW1gVBkAi/hgIZylSg3myW6+xF7xhnoP7NcX6YM5KL0DwCOmR88d3uDAA2mPvQ/Ng+zdeul2rgd6t7g+Sao5iSph9mdu7hXdJj+Sl5ylmAYZACKjWQ1n61QoA0XExDcy7xUVLwEOkR/OO8/MAkMnfl0p1lR0c1RWSG4D2F4ChdtWcvKPv9nQQDDaPz0eYD4DOtvOQ5j97pxUAe37nn62cakU0LchOB26Ueu0salryl9Gs8gHglf8/J9VEGvxcn2ddCjQvdAMCeecCBQAQfxaMk92QJo9H77+BXWs8Ye0pU7EoPPw69esBwtMUjHy2tAVIxLcNv7vjvk7E4AsQTMQy5XNZH4HKwthGocj8MlNA/AAYU1TKUZC2Fdev68K5wFDsCubfpZgRHyA9emhpACTjIuGAu4FuYsUvjoBz5/+K1eBb8jMuAlqPVyged5IebS0HAHFvSs2tXzHAwsefK52bsid21bzVszKcTUcDs79hpYXFutxHenRMuHj+IjARV+ME6vgHsKfyYkstath59SN/5pxGUQr5zqB8AIhTQAs3hkxL6/RgR3wdueAPsV6wc8HTtLAeVpyzQt2poUgtFYpo5aYAEUootzjd3jXMzm6TcqVYyJhcqb2hpng3QPrYY+FCFkA+AMTcv/Xb9hU6fm6sZgC0LgJmiEfT1BQzAPDnFDDaW7ZvLSB2DtVYRPSzOC5WUphJj5aZAhKxIZB4XVtykXGyJwJBxX6526NYP8kqKUhOJQCIhyg49kSw0BSgZhtYzWZbJjBUAgCmtoGxLhA1yexThlbXJmD3A9LJVh1BtQAw4QhKKXIFO10IVt1IF+mQUgAYB0g/sYwrOBHfDsIRSvS957dAxytKSFcNUaUA4K2kR8fcr8tfA3TEn4eBpUoU6tQfoEQonxFV6QcwdRyciq0B0xXK1CJjN6BMOB8QVhockv/iSL4FaI99BRo9rEwV4trW9tpDYkX1K46EVd0bKHA3wJug0NqWsPD4qz4NNBMUKiTjRDwNwhiPkXSL8N79QPeb0slWNEGV5p+RplCkbrx+itwLiO0B0XSlyhTbwp2rgYH3lLKpGOJ1IWDererEJeymYCQvT0ARAGxYD9LOVifNMOUaCA6qWHk0ECxcDRMvgA1grXIACAY1EADjj7tVKF4zzqTWE/9qagrIrANUBYYU6pwAwb5HJq6TSGUQSFbfBumRggd8xRNEJGK7QFQk/4oKiAKWkkIoEsF1suLKuEgiobIwdlAocnghFiVSxMR/DsblKuUqSFsEjYrz/mq8FTy+w26YfsGT+F4KRldYAwA/Nx2phj2uAyDHUMT9ZULFbTzu4JnQFhnPvdaFK+IMBKe3FntfsHSeQC+mgdE6FGsDcUO4GoNAFYd+jaixhPnPGIdSmOX22I+g0bUWcS2/ejUCYd7N5XMdytAk4RYKRor63k2kim3uc/a8pIxeDNMQ6wNxmFTp04Jqp89BlTOCXY22U8VmtoOp2BYwWcjRKnHAC5GqhoBQN1b+Gd3x26RHP1pqRMpnC+/eeCYGjccVD6t58tUQWqZ+35/VZxHnz2hllwVABkfJ2H6Ayj4+YH4UHdSshqASpde/RnS7n/RI2USf5gCQ2HglyFjlYNjkNa10ACgN+Rql5gC+RS2RshcNTQEgYwUSsW4QHSJvJG1SqnQAqAz5GlEp9ZAeNhXZbR4AftkSVjoAVJ755wBQZutneQ2Qa8BeJI8YbyjsAEBsu8SDj6Kke53HIIh3hMVN5ZaF2Zu8VramKkO+siv/btKjphN8mLYAGdJ+SCFnBwDFzG4uYYV4QXzgQOk5qWFqFkTiRfHxj1VYCXFTvQA08VCUbQswvCN4C6CSDxHZnN3NNbMDANVmVwBJvG9QzkGl2gHE2EyhyCfMKTJby5IFyC4Gn58L1P/XeksrYpWoaxUAwlzP/4kk5iXImLECaheAjODkuUSLdlnprGUAZK1AXGQSPc8KI2l1rQLALaeLGSug0hIxP0yh6EVW9WwPAJkHJdoSILj/mqiVhyTUx9mN1Xc5L6UqMDI6KBSxNRa2AJCxAv2vfBy9fSKu2zYNq2gdqS8STolFm7AGhQJHxFwromzcSb86thuF7j+KaUikf1MS+cOMxsajadKizXb06WjwOLXhJrB2sx3GUtuMTj8ntmeqbtaYFVpYqVzOw0K7BrN0zNTT6GpqDdv20joCQHZRGHsDRJ80I2utjmwN8GukRz/lhKpzAPBLjUgOHgCRqffqnQhbaztGA70IhoNENOhEL44BkLECXW0LMcSviwNIJ8LU2prUAMNAPR1LzeFNJlsUrSYFABkQiLiBAeNxD5aETnVQWe1FEj/iU0mPPiNDcGkAyICgM/5NpPELGYLVaBTRQACXU0vkl7L0IxUAWRBsvAVp40ZZAtbojNJAQLuVWpbcJFMn0gEwvDN4CEQXyhR0wtMq8f6vE90oAUAGBKnYajAVvI3iROAJ2Zb4NgpGb1DRd2UAyFqC+EqA7/H0DWIVWnOLJjNQR6ZCu+yKpBQAGRAc2HgBAuk/oIYCa2PEYNTRBdQSfsRaQ2u1lQMgA4Ke+CL084aas8jk4DB3owFhaoq+YbKF7WquACADAvEiaTL1EggLbEs7ERqy8U/oPceXus0jUw2uASAnNLfH7gLhmtqMMG4YhYOnTv42rxxYXAdA1lfw8lKk+54AaHI5ASfG/9wHQ1tGU8Ib3e6vJwAYmRI6kuthYNmEtQZila/R02it+wLR4l63B1/w8wwAI1OCWCAO8KMA5aUw80IhrvFkfhf12udlHOg4kdlzAIwAIXv97A4ADU465P+2PAhNW06t4V/5QVbfACA7LXA9OtrWgPnrAKl5vNIrrTP3Q8ODaI2sdHqGL7MLvgLA6I5xKvZDGFgBItO3XGQqRh4t7kQgsFr2IY4s+XwLgDFTA4wVIMyV1WlX6DB2oI5WUUv4Xlf42WTiewCMAIHjM5Gk26Dx2WCEbPZXcTNOgLXHoPP3iCLvK2YmhXzFAGDM9NAdOwYDdCuIFwPkLRgI7TDwd9TzddQcrbj05xUJgDFg4GeDSDVcCqIvgnkBoODFsxGGDDC6odEmEK1Dy7QHiuXfk/J5ukCk4gFQSEecip8OaMeC0+Ki5DwwZgHUDOYGaAiAxcOYrI04oIRDBmSAOA0DaRANiFBXEIlc9ttB2mbUBV6jps885cKYuMqiKgHgqgYrnFkNABU+gE7FrwHAqQYrvH0NABU+gE7F/z/MzkjMbGMv3gAAAABJRU5ErkJggg==',
            style: {
              img: {
                imageWidth: 28,
                borderRadius: 0,
                imageHeight: 28
              },
              paddingBottom: 10,
              flexDirection: 'column',
              paddingTop: 10,
              justifyContent: 'center',
              span: {
                textHeight: 28,
                fontSize: 12,
                paddingLeft: 0,
                fontColor: ''
              }
            },
            content: '理财产品'
          },
          rules: [],
          model: 'ImageText_1563955072000_34360',
          type: 'ImageText',
          key: '1563955072000_34360'
        }
      ],
      span: 24
    }
  ],
  name: '快捷菜单',
  icon: 'bars',
  options: {
    marginRight: 0,
    gutter: 0,
    paddingBottom: 0,
    backgroundImage: '',
    paddingRight: 0,
    marginBottom: 0,
    paddingTop: 0,
    align: 'top',
    paddingLeft: 0,
    marginTop: 0,
    marginLeft: 0
  },
  rules: [],
  type: 'grid'
}
