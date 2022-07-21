const { promisify } = require("util");
const { exec: execSync } = require("child_process");
const rimraf = promisify(require("rimraf"));
const OpenAPI = require("openapi-typescript-codegen");

const exec = promisify(execSync);
const DEST_PATH = "./src";

(async () => {
  try {
    await rimraf(DEST_PATH);
    const input = require("./openapi.json");
    const generatedSource = await OpenAPI.generate({
      input,
      output: DEST_PATH,
      useOptions: true,
      useUnionTypes: true,
      exportModels: true,
      exportSchemas: true,
    });
  } catch (e) {
    console.log(e);
  }
})();
