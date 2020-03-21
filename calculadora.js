//INPUTS
const height = document.querySelector('input#height');
const weight = document.querySelector('input#weight');
const waist = document.querySelector('input#waist');
const neck = document.querySelector('input#neck');
const sex = document.querySelector('select#sex');

//OUTPUTS
const fatPercent = document.querySelector('input#fat')
const lightMass = document.querySelector('input#light-mass')
const heavyMass = document.querySelector('input#heavy-mass')

function allValuesInputed() {
    return height.value && weight.value && waist.value && neck.value && sex.value
}
function cleanOutputs() {
    fatPercent.value = ""
    lightMass.value = ""
    heavyMass.value = ""
}
function getFatPercent() {
    if (sex.value === "m") {
        return (495 / (1.0324 - 0.19077
            * (Math.log10(Number(waist.value) - Number(neck.value)))
            + 0.15456 * (Math.log10(Number(height.value)))) - 450)
    } else {
        return (495 / (1.29579 - 0.35004
            * (Math.log10(Number(waist.value) - Number(neck.value)))
            + 0.22100 * (Math.log10(Number(height.value)))) - 450)
    }
}
function getHeavyMass() {
    return Number(weight.value) * getFatPercent() / 100
}
function getLightMass() {
    return (Number(weight.value) - getHeavyMass())
}

function calculeValues() {
    if (allValuesInputed()) {
        fatPercent.value = getFatPercent().toFixed(2) + "%"
        heavyMass.value = getHeavyMass().toFixed(2)
        lightMass.value = getLightMass().toFixed(2)
    } else {
        cleanOutputs()
    }
}
