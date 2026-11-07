// Validate every apps/*/manifest.json against the schema.
import { readFileSync, readdirSync } from "node:fs";
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(JSON.parse(readFileSync("schema/manifest.schema.json", "utf8")));

let failed = false;
for (const dir of readdirSync("apps")) {
  const file = `apps/${dir}/manifest.json`;
  const manifest = JSON.parse(readFileSync(file, "utf8"));
  if (validate(manifest) && manifest.id === dir) {
    console.log(`ok   ${file}`);
  } else {
    failed = true;
    console.log(`FAIL ${file}`, manifest.id !== dir ? `id must equal folder name "${dir}"` : validate.errors);
  }
}
process.exit(failed ? 1 : 0);
