const expect = require('chai').expect
const converter = require('../app/converter')

describe('Color Code Converter', function () {

    describe('RGB to Hex conversion', function () {
        it('converts an rgb color code to a hex color code', function () {
            // Act
            const redHex = converter.rgbToHex(255, 0, 0)
            const greenHex = converter.rgbToHex(0, 255, 0)
            const blueHex = converter.rgbToHex(0, 0, 255)

            // Assert
            expect(redHex).to.equal('#ff0000')
            expect(greenHex).to.equal('#00ff00')
            expect(blueHex).to.equal('#0000ff')
        })
    })

    describe('Hex to RGB conversion', function () {
        it('converts a hex color code to an rgb color code', function () {
            // Act
            const redRGB = converter.hexToRGB('ff0000')
            const greenRGB = converter.hexToRGB('00ff00')
            const blueRGB = converter.hexToRGB('0000ff')

            // Assert
            expect(redRGB).to.deep.equal([255, 0, 0])
            expect(greenRGB).to.deep.equal([0, 255, 0])
            expect(blueRGB).to.deep.equal([0, 0, 255])
        })
    })
})