import './style.css'

let baseSize = 18
let num = 5
let den = 3
const container = document.getElementById('pic-scale-container')
document.getElementById('pic-scale-input-container')?.addEventListener('input', item => {
    updateScale((item.target as HTMLInputElement).name, (item.target as HTMLInputElement).value)
})
const updateScale = function (name: string, value: string) {
    if (!container) {
        return
    }
    baseSize = parseFloat(window.getComputedStyle(container).lineHeight)
    if (name === 'size') {
        container.style.fontSize = value + 'px'
    } else if (name === 'lineHeight') {
        container.style.lineHeight = value + 'em'
    } else if (name === 'numerator') {
        num = parseInt(value)
    } else if (name === 'denominator') {
        den = parseInt(value)
    }
    const block = document.getElementById('block')
    if (!block) {
        return
    }
    block.innerHTML = ''
    for (let i = 4; i > 1; i--) {
        const example = document.createElement('div')
        block.appendChild(example)
        for (let j = 1; j < 15; j++) {
            const subBlock = document.createElement('div')
            subBlock.style.height = `${baseSize * (i * num) / den}px`
            example.appendChild(subBlock)
        }
    }
    const example = document.createElement('div')
    block.appendChild(example)
    for (let j = 1; j < 15; j++) {
        const subBlock = document.createElement('div')
        subBlock.style.height = `${baseSize}px`
        example.appendChild(subBlock)
    }
    for (let i = 1; i < 5; i++) {
        const example = document.createElement('div')
        block.appendChild(example)
        for (let j = 1; j < 35; j++) {
            const subBlock = document.createElement('div')
            subBlock.style.height = `${baseSize * num / (i * den)}px`
            example.appendChild(subBlock)
        }
    }
}






