import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
// TODO: remove this plugin
// import alias from 'rollup-plugin-alias';
// import typescript from 'rollup-plugin-typescript';
import includePaths from "rollup-plugin-includepaths";

let includePathOptions = {
    include: {
        // 'app/': './src/app/',
        // 'environments/': './config/environments/',
        // 'environments/environment': 'src/environments/environment',
    },
    paths: ["src", "dist/client-aot/src"],
    external: [],
    extensions: [".js", ".json", ".html"]
};

export default {
    input: "dist/client-aot/src/main.js",
    output: {
        file: "dist/client-aot/build.js", // output a single application bundle
        format: "iife"
    },
    sourcemap: false,
    sourcemapFile: "dist/client-aot/src/build.js.map",
    onwarn: function (warning) {
        if (warning.code === "THIS_IS_UNDEFINED") {
            return;
        }
        console.warn(warning.message);
    },
    plugins: [
        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: [
                "node_modules/rxjs/**",
                "node_modules/c3/**",
                "node_modules/diagram-js/**",
                "node_modules/bpmn-js/**",
                "node_modules/tiny-svg/**",
                "node_modules/@soushians/authentication/**",
                "node_modules/@soushians/user/**",
                "node_modules/@soushians/form/**",
                "node_modules/@soushians/infra/**",
                "node_modules/@soushians/config/**",
                "node_modules/@soushians/source/**",
                "node_modules/@soushians/shared/**",
                "node_modules/@soushians/layout/**"
            ],
            namedExports: {
                "node_modules\\@soushians\\authentication\\lib\\index.js": ["NgsAuthenticationModule", "getUser"],
                "node_modules\\@soushians\\user\\lib\\index.js": [
                    "NgsUserModule",
                    "NgsUserRoutingModule",
                    "UserService",
                    "getUserInfo"
                ],
                "node_modules\\@soushians\\form\\lib\\index.js": ["NgsFormModule"],
                "node_modules\\@soushians\\infra\\lib\\index.js": [
                    "InfraModule",
                    "UtilityService",
                    "SocketService",
                    "stringTemplate"
                ],
                "node_modules\\@soushians\\config\\lib\\index.js": ["NgsConfigModule", "getAppConfig", "ConfigService"],
                "node_modules\\@soushians\\source\\lib\\index.js": ["SourceModule"],
                "node_modules\\@soushians\\shared\\lib\\index.js": [
                    "SharedModule",
                    "responseStatusTypes",
                    "HttpRequestBaseModel"
                ],
                "node_modules\\@soushians\\layout\\lib\\index.js": [
                    "NgsLayoutModule",
                    "getShowMainSidenav",
                    "getMainSideNavMode",
                    "getShowSecondSidebarStatus",
                    "getSecondSidebarMode",
                    "getLayoutMode",
                    "getLayout"
                ]
            }
        }),
        includePaths(includePathOptions),
        uglify()
    ]
};