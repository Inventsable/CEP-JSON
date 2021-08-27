# CEP-JSON

Quick and dirty async function to evalScript [Douglas Crockford's json2.js](https://github.com/douglascrockford/JSON-js) for Adobe CEP panels and polyfill support for `JSON.stringify()` and `JSON.parse()` within Adobe scripting

```bash
# installation
npm i CEP-JSON
```

```js
import loadJSON from "CEP-JSON";

// Usage within async/await
await loadJSON();

// Usage as thenable
loadJSON().then(() => {
  console.log(
    "JSON is loaded, you can now invoke JSON.parse and JSON.stringify through any JSX/evalScript call."
  );
});
```

---

## NOTE:

- This package uses the `evalScript()` method from the `workaround` package, which may not work in a custom panel of your own when run from within `<iframe>` elements unless you follow the steps outlined in [workaround's README](https://github.com/Inventsable/workaround) (to use an event chain for bypassing CORS restrictions in newest versions of Adobe apps)
