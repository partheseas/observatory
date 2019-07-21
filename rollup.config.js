import babel from 'rollup-plugin-babel'
import babel_preset_react from 'babel-preset-react'
import minify from 'rollup-plugin-babel-minify'

export default [{
    input: 'electron/app.js',
    plugins: [ minify({ comments: false }) ],
    output: {
        file: 'target/app.js',
        format: 'cjs',
        sourcemap: true
    }
}, {
    input: 'client/ipc.js',
    plugins: [
        babel({
            presets: [ babel_preset_react ]
        }),
        minify({ comments: false })
    ],
    output: {
        file: 'target/client.js',
        format: 'cjs',
        sourcemap: true
    }
}]