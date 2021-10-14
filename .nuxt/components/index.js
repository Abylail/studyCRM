export { default as BaseButton } from '../../components/base/BaseButton.vue'
export { default as BaseDevider } from '../../components/base/BaseDevider.vue'
export { default as BaseIcon } from '../../components/base/BaseIcon.vue'
export { default as BaseModal } from '../../components/base/BaseModal.vue'
export { default as BaseMultiTimeTable } from '../../components/base/BaseMultiTimeTable.vue'
export { default as BaseSelect } from '../../components/base/BaseSelect.vue'
export { default as BaseTextField } from '../../components/base/BaseTextField.vue'
export { default as BaseTimetable } from '../../components/base/BaseTimetable.vue'

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
