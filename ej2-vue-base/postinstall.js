var fs = require("fs");
var glob = require("glob");

if (fs.existsSync("./src/component-base.d.ts")) {
  var sourceFile = fs.readFileSync("./src/component-base.d.ts", "utf8");
  fs.writeFileSync(
    "./src/component-base.d.ts",
    sourceFile
      .replace(`import Vue from 'vue';`, ``)
      .replace(
        `export declare const aVue: any;`,
        `import Vue from 'vue';\n export declare const aVue: any;`
      )
      .replace(`extends vueImport`, `extends Vue`)
      .replace(`constructor();`, `// constructor();`),
    "utf8"
  );
}

if (fs.existsSync("../../vue/package.json")) {
  var packJson = JSON.parse(fs.readFileSync("../../vue/package.json", "utf8"));
  var version = parseInt(packJson.version.split(".")[0]);
  console.log("Vue version ---" + version);
  var files = glob.sync("../ej2-vue-**/src/**/*.{component,directive}.js");
  if (version === 3) {
    fileL = files.concat(glob.sync('./src/**.js'));
    for (var i = 0; i < fileL.length; i++){
      var source = fs.readFileSync(fileL[i], "utf8");
      var vuehead = (source.indexOf(`import Vue from 'vue';`) === -1) ? `import Vue from "vue"` : `import Vue from 'vue'`;
      fs.writeFileSync(fileL[i], source.replace(vuehead, `import * as Vue from 'vue'`), "utf8");
    }
  }
  if (version != 3) {
    files.push('./src/component-base.js');
    var file;
    for (var i = 0; i < files.length; i++) {
      file = fs.readFileSync(files[i], "utf8");
      file = file
        .replace(`import { Options } from 'vue-class-component';`, "")
        .replace(
          `,Options({
            props: props,
            watch: watch,
            emits: emitProbs
        })`,
          ""
        )
        .replace(
          `,
        Options({
            props: props,
            watch: watch,
            emits: emitProbs
        })`,
          ""
        )
        .replace(
          `,Options({
            props: props,
            watch: watch,
            emits: emitProbs,
            provide: function provide() {
                return {
                    custom: this.custom
                };
            }
        })`,
          ""
        )
        .replace(
          `,Options({
            inject: {
                custom: {
                    default: null
                }
            }
        })`,
          ""
        )
        .replace(`import * as Vue3 from 'vue-class-component';`,"")
        .replace(`vueImport = Vue3.Vue;`,'vueImport = Vue;');
      fs.writeFileSync(files[i], file, "utf8");
    }
  }

  if (fs.existsSync("./src/template.js") && version === 3) {
    var sourceFile = fs.readFileSync("./src/template.js", "utf8");
    fs.writeFileSync(
      "./src/template.js",
      sourceFile
        .replace(`templateFunction = Vue.extend(templateFunction);`,
        `// templateFunction = Vue.extend(templateFunction);`),
      "utf8"
    );
  }
}
