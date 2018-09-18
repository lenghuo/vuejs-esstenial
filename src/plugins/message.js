import MessageComponent from '../components/Message'

export default {
  install: (Vue) => {
    const Message = Vue.extend(MessageComponent)
    const vm = new Message()
    const $el = vm.$mount().$el

    Vue.nextTick(() => {
      document.querySelector('#main-container').prepend($el)
    })

    vm.$on('update:show', (value) => {
      vm.show = value
    })

    const Message = {
      show(msg = '', type = 'success') {
        vm.msg = msg
        vm.type = type
        vm.show = false

        Vue.nextTick(() => {
          vm.show = true
        })
      }
    }
    Vue.prototype.$message = Message
  }
}
