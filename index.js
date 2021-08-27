import { evalScript } from "workaround";
const MANIFEST = require("./data.json");

export default function (DEBUG = true) {
  console.log();
  evalScript(MANIFEST.json_polyfill)
    .then((res) => {
      if (DEBUG) console.log("JSON loaded successfully");
      return Promise.resolve(true);
    })
    .catch((err) => {
      console.error("Error while loading JSON:", err);
      return Promise.reject(err);
    });
}
