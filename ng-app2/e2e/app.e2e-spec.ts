import { NgApp2Page } from './app.po';

describe('ng-app2 App', () => {
  let page: NgApp2Page;

  beforeEach(() => {
    page = new NgApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
