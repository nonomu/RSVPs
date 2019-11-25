
class Renderer {
    _renderWheather(allCityData) {
        let source = $('#guests-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $('.guests-container').empty().append(newHTML)
    }
    renderData(allCityData) {
        allCityData.forEach(c => {c.temperature = Math.round(c.temperature)});
        this._renderWheather(allCityData)
    }
}

