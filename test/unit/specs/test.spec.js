import Vue from 'vue'
import landeScape from '@examples/src/pages/landscape-prompt'

describe('landeScape.vue in examples', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(landeScape)
    const vm = new Constructor().$mount()
    expect(vm.$el.innerHTML)
    .toEqual('请竖屏来试试看')
  })
})
