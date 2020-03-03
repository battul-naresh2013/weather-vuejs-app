/**
 * searchCityWidget.vue component needs to be refactored, so skipping UT for now.
 */
/* eslint-disable max-len */
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import searchCityWidget from '../../../../src/components/weather/searchCityWidget.vue';

describe('In search-city-widget Component', () => {
  let searchCityWidgetWrapper;
  let localVue;
  let mockStore;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: { },
      dispatch: jest.fn(),
    };
    searchCityWidgetWrapper = shallowMount(searchCityWidget, {
      mocks: {
        $store: mockStore,
      },
      localVue,
    });
  });

  it('it renders the correct markup', () => {
    const expected = '<b-form-input-stub';
    expect(searchCityWidgetWrapper.html()).toContain(expected);
  });

  it('it should have a <b-button-stub> element', () => {
    expect(searchCityWidgetWrapper.contains('b-button-stub')).toBe(true);
  });

  it('renders a input type text tag', () => {
    expect(searchCityWidgetWrapper.find('[type="text"]')).toBeTruthy();
  });

  it('It should have a button', () => {
    expect(searchCityWidgetWrapper.findAll('[type="button"]').length).toBe(1);
  });
});
