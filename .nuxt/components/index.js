export const BaseButton = () => import('../../components/base/BaseButton.vue' /* webpackChunkName: "components/base-button" */).then(c => wrapFunctional(c.default || c))
export const BaseDevider = () => import('../../components/base/BaseDevider.vue' /* webpackChunkName: "components/base-devider" */).then(c => wrapFunctional(c.default || c))
export const BaseIcon = () => import('../../components/base/BaseIcon.vue' /* webpackChunkName: "components/base-icon" */).then(c => wrapFunctional(c.default || c))
export const BaseModal = () => import('../../components/base/BaseModal.vue' /* webpackChunkName: "components/base-modal" */).then(c => wrapFunctional(c.default || c))
export const BaseMultiTimeTable = () => import('../../components/base/BaseMultiTimeTable.vue' /* webpackChunkName: "components/base-multi-time-table" */).then(c => wrapFunctional(c.default || c))
export const BaseSelect = () => import('../../components/base/BaseSelect.vue' /* webpackChunkName: "components/base-select" */).then(c => wrapFunctional(c.default || c))
export const BaseTextField = () => import('../../components/base/BaseTextField.vue' /* webpackChunkName: "components/base-text-field" */).then(c => wrapFunctional(c.default || c))
export const BaseTimetable = () => import('../../components/base/BaseTimetable.vue' /* webpackChunkName: "components/base-timetable" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
