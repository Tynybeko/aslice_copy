export function showAsliceModal({ text = '', title = '', buttonText = '', width ='auto', height }) {
  this.$modal.show({
    render(h) {
      return h('div', {
        attrs: {
          class: 'app-modal__container w-100 h-100',
          style: `
            min-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `
        }
      }, [
        h('img', {
          on: {
            click: () => { this.$emit('close') }
          },
          class: {
            'app-modal__close': true,
          },
          attrs: {
            src: require('../assets/images/close-groups-modal.svg'),
          },
        }),
        h('div', {
          class: 'app-modal__body'
        }, [
          h('div', {
            class: 'app-modal__title'
          }, `${title}`),
          h(
            'div',
            {
              class: 'app-modal__description'
            },
            `${text}`
          )
        ]),
        h('div', {
          class: 'app-modal__footer',
        }, [
          h('button', {
            on: {
              click: () => { this.$emit('close') }
            },
          }, `${buttonText}`)
        ])
      ])
    }
  }, {
    height,
    scrollable: true,
    adaptive: true
  },
  {
    width,
    maxWidth: width,
    height
  })
}