import { HostMapWebPage } from './app.po';

describe('host-map-web App', () => {
  let page: HostMapWebPage;

  beforeEach(() => {
    page = new HostMapWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
