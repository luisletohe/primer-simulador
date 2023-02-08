const IVA = 0.16

let monto, plazo, totalPagos, tasaAnual, fechaInicio, fechaPago, tasaMensual, mensualidad, intereses, impuestos,
    capital, insoluto, primerInteres, primerImpuesto, primerCapital, primerInsoluto, primerFechaPago, acumIntereses, acumImpuestos, acumCapital

const dinero = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
})

let establecerDatos = function () {
    primerInteres = 0, primerImpuesto = 0, primerCapital = 0, primerInsoluto = 0, primerFechaPago = true
    acumIntereses = 0, acumImpuestos = 0, acumCapital = 0

    monto = document.getElementById('monto').value
    periodo = document.getElementById('periodo').value
    plazo = document.getElementById('plazo').value
    tasaAnual = document.getElementById('interes').value
    fechaInicio = new Date(document.getElementById('fecha').value)
    fechaInicio.setDate(fechaInicio.getDate() + 1) // fecha actual

    let plazoMensual = document.getElementById('mensual').checked
    let plazoAnual = document.getElementById('anual').checked

    if (plazoMensual === true) {
        this.plazo = plazo
    } else if (plazoAnual === true) {
        this.plazo = plazo * 12
    } else {
        alert('No seleccionaste ningún tipo de plazo')
    }

    switch (periodo) {
        case 'semanal':
            let fechaFin = new Date(fechaInicio)
            fechaFin.setMonth(fechaFin.getMonth() + parseInt(plazo))
            let tiempo = fechaFin.getTime() - fechaInicio.getTime()
            let dias = Math.floor(tiempo / (1000 * 60 * 60 * 24))
            totalPagos = Math.ceil(dias / 7)
            break
        case 'quincenal':
            totalPagos = plazo * 2
            break
        case 'mensual':
            totalPagos = plazo
            break
        default:
            alert('No seleccionaste ningún periodo de pagos')
            break
    }}
    