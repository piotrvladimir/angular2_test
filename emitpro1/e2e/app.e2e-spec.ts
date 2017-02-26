import { Emitpro1Page } from './app.po';

describe('emitpro1 App', () => {
  let page: Emitpro1Page;

  beforeEach(() => {
    page = new Emitpro1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
