import { createLocalVue, mount } from '@vue/test-utils'
import {beforeAll} from "vitest";

import Vuetify from 'vuetify'
import Vue from 'vue'
import modelPanel from './rfCommonLayout.vue'
import Vuex from 'vuex'
import userStore from '../../Store/user'
import adminStore from '../../Store/admin'
import vueTestingHelper from '../../Tests/testHelper'


global.CSS = { supports: () => false };

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user: userStore,
    admin: adminStore,
  },
})
const localVue = createLocalVue()

const vuetify = new Vuetify()
const wrapper = mount(modelPanel, {
  vuetify,
  localVue,
  store,
})

const w = new vueTestingHelper(wrapper)

const commonLayout = [['filterLayout'], ['default']]

const layout = {
  install: {
    category: 'install',
    layout: [],
  },
}
w.dispatch('updateSettings', { property: 'layoutCollection', value: layout })
w.dispatch('updateSettings', {
  property: 'layoutCommonCollection',
  value: commonLayout,
})


describe('The layout generator of RF', () => {
  it('it creates the proper columns and row for the layout', async () => {
    w.commit('setEditCommonLayout', true)
    w.tick()
    w.click('add-common-column')
    w.click('add-common-row')
    w.tick()
    expect(wrapper.findAll('.row').length).toBe(2)
    expect(wrapper.findAll('.col').length).toBe(2)
  })
})
