import { shallowMount, createLocalVue } from '@vue/test-utils';
import app from '../../src/app.vue';
import dashboard from '../../src/views/dashboard.vue';

describe('In App Component', () => {
  let appWrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    appWrapper = shallowMount(app, {
      localVue,
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes('id')).toBe('app');
  });

  describe('it should load dashboard component', () => {
    it('it should load the dashboard', () => {
      expect(dashboard).toBeTruthy();
    });

    it('it should have a <dashboard-stub></dashboard-stub>', () => {
      expect(appWrapper.html()).toContain('<dashboard-stub></dashboard-stub>');
    });
  });
});
