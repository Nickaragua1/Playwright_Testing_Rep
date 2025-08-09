import { Page, Locator } from '@playwright/test';

interface Elements {
  locator: (page: Page) => Locator;
  name: String;
  text?: String;
  attribute?: {
    type: String;
    value: String;
  };
}

class MainPage {
  readonly page: Page;
  readonly elements: Elements[];

  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page): Locator =>
          page.getByRole('link', { name: 'Playwright logo Playwright' }),
        name: 'Playwright logo link',
        text: 'Playwright',
        attribute: {
          type: 'href',
          value: '/',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Docs' }),
        name: 'Docs link',
        text: 'Docs',
        attribute: {
          type: 'href',
          value: '/docs/intro',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'API' }),
        name: 'API link',
        text: 'API',
        attribute: {
          type: 'href',
          value: '/docs/api/class-playwright',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('button', { name: 'Node.js' }),
        name: 'Node.js button',
        text: 'Node.js',
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Community' }),
        name: 'Community link',
        text: 'Community',
        attribute: {
          type: 'href',
          value: '/community/welcome',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'GitHub repository' }),
        name: 'GitHub repository link',
        attribute: {
          type: 'href',
          value: 'https://github.com/microsoft/playwright',
        },
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Discord server' }),
        name: 'Discord server link',
        attribute: {
          type: 'href',
          value: 'https://aka.ms/playwright/discord',
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole('button', { name: 'Switch between dark and light' }),
        name: 'Switch between dark and light button',
      },
      {
        locator: (page: Page): Locator => page.getByRole('button', { name: 'Search (Command+K)' }),
        name: 'Search (Command+K) button',
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole('heading', { name: 'Playwright enables reliable' }),
        name: 'Playwright enables reliable',
        text: 'Playwright enables reliable end-to-end testing for modern web apps.',
      },
      {
        locator: (page: Page): Locator => page.getByRole('link', { name: 'Get started' }),
        name: 'Get started',
        text: 'Get started',
        attribute: {
          type: 'href',
          value: '/docs/intro',
        },
      },
    ];
  }

  async openMyPage() {
    await page.goto('https://playwright.dev/');
  }
}
