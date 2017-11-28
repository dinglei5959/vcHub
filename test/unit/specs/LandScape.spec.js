import LandScape from '@/landscape-prompt/landscape-prompt.vue'
import { mount } from 'vue-test-utils'

describe('just test the landScape', () => {
  it('should show the right content in landscape mode', () => {
    let wrapper = mount(LandScape)
    expect(wrapper.html())
    .toEqual('<div class="vm-landscape-prompt"><div id="orientLayer" class="mod-orient-layer"><div class="mod-orient-layer__content"><i class="icon mod-orient-layer__icon-orient"></i> <div class="mod-orient-layer__desc">请在解锁模式下使用竖屏浏览</div></div></div></div>')
  })
})
