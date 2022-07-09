# Steam Tracking

<div align="center">
  <img width="300" src="/public/images/logo/steam-128.png" />
  <br />
  <br />
</div>

This project using [Svelte boilerplate](https://github.com/davidnguyen179/web-extension-svelte-boilerplate) provides a skeleton to start developing cross-browser web extensions.

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
  
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/hiiamtrong/steam-tracking-extension/blob/master/LICENSE)

## Screenshots

<div style="display:flex; flex-wrap: wrap;" align="center">
  <img style="flex:1; margin:10px 10px;"src="https://i.ibb.co/0h86Z2x/about.gif" alt="about" border="0">
  <img style="flex:1;margin:10px 10px;" src="https://i.ibb.co/dQRDgx0/Screenshot-from-2022-07-01-14-54-29.png" alt="Screenshot-from-2022-07-01-14-54-29" border="0" >
  <img style="flex:1;margin:10px 10px;"src="https://i.ibb.co/bRbLgZZ/Screenshot-from-2022-07-01-14-56-42.png" alt="Screenshot-from-2022-07-01-14-56-42" border="0">
  <img  style="flex:1;margin:10px 10px;" src="https://i.ibb.co/FgWJ7vb/Screenshot-from-2022-07-01-14-56-14.png" alt="Screenshot-from-2022-07-01-14-56-14" border="0">
</div>

## Development

```bash
npm i
```

**Chrome**

```bash
npm run app:chrome-dev
```

**Edge**

```bash
npm run app:edge-dev
```

**Firefox**

```bash
npm run app:firefox-dev
```

## Production

```bash
npm i
```

```bash
npm run app:chrome
```

**Edge**

```bash
npm run app:edge
```

**Firefox**

```bash
npm run app:firefox
```

## Load package to browsers

**Chrome**

1. Go to the browser's URL address bar
2. Enter `chrome://extensions/`
3. Switch to "**Developer mode**"
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

Check here for more detail: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

**Edge**

1. Go to the browser's URL address bar
2. Enter `edge://extensions/`
3. Turn on `Developer mode`
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

**Firefox**

1. Go to the browser's URL address bar
2. Enter `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on...**
4. Browse to your `manifest.json` & click **Open**
5. Done!

Check here for more details: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Privacy Policy file

Web stores require you to describe what the extension is or if you collect data of users. You also need to describe why you do that.

Make sure you include this file when you publish an extension, the web store may ask you to upload it.

**Note:** If you don't know how to write a privacy policy file, you can look at the [existing one](https://github.com/davidnguyen179/web-extension-boilerplate/blob/main/PRIVACY_POLICY.txt) attached on this repository.

## Badges

You can add badges to your project to indicate the version or to show how many users use your extension here:

- [https://shields.io/](https://shields.io/)

## CI/CD with github action

You can modify the `.github/workflows` to show the CI/CD flow.

- [https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs)

## How to publish web extension

| Browsers       | Web store                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chrome         | [https://developer.chrome.com/webstore/publish](https://developer.chrome.com/webstore/publish)                                                                                                 |
| Microsoft Edge | [https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension) |
| Firefox        | [https://extensionworkshop.com/documentation/publish/submitting-an-add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on)                                           |

## References

- Develop your first Chrome extension & Chromium Edge: [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)
- Develop your first Firefox add-on: [https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- If you have any Chrome extension issues, you can post it here: [https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions)
- [Jack and Amy Dev youtube channel](https://www.youtube.com/channel/UCVj3dGw75v8aHFYD6CL1tFg), which explains some common mistakes made when developing Chrome extensions.

## Most important

Star this project on [Github](https://github.com/hiiamtrong/steam-tracking-extension)

Thanks!

## License

MIT

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
