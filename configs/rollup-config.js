import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
// TODO: remove this plugin
// import alias from 'rollup-plugin-alias';
// import typescript from 'rollup-plugin-typescript';
import includePaths from 'rollup-plugin-includepaths';

let includePathOptions = {
    include: {
        // 'app/': './src/app/',
        // 'environments/': './config/environments/',
        // 'environments/environment': 'src/environments/environment',
    },
    paths: ['src', 'dist/src'],
    external: [],
    extensions: ['.js', '.json', '.html']
};

export default {
    input: 'dist/src/main.js',
    output: {
        file: 'src/build.js', // output a single application bundle
        format: 'iife'
    },
    sourceMap: false,
    sourcemapFile: 'src/build.js.map',
    onwarn: function (warning) {
        if (warning.code === 'THIS_IS_UNDEFINED') { return; }
        console.warn(warning.message);
    },
    plugins: [
        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: [
                'node_modules/rxjs/**',
                'node_modules/c3/**',
            ],
            namedExports: {
            }
        }),
        includePaths(includePathOptions),
        uglify()
    ]
};