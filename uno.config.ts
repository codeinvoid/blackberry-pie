import { defineConfig, presetUno } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetUno(),
        presetAnimations(),
        presetIcons()
    ]
})