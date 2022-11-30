import {validacionFormulario} from './validacionFormularioMedico.js'


//creamos una funcion que nos permita recibir los datos del fomurlario 
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistroprofesional,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedicos=etiquetaEspecialidad.value
    let registroMedico=etiquetaRegistroprofesional.value
    let correoMedico=etiquetaCorreo.value
    let sedeMedico=etiquetaSede.value
    let horarioMedico=etiquetaHorario.value
    let descripcion=etiquetaDescripcion.value
    let foto=etiquetaFoto.value

    //debemos almacenar todos los valores del formulario 
    //en una SOLA VARIABLE 
    //OBJETO=ALMACENAR VARIOS DATOS EN 1 SOLO ESPACIO DE MEMORIA
    let datosFormularioMedico={
        nombre:nombresMedico,
        documento:documentoMedico,
        especialidad:especialidadMedicos,
        registro:registroMedico,
        correo:correoMedico,
        sede:sedeMedico,
        horario:horarioMedico,
        descripcion:descripcion,
        foto:foto
    }
    console.log(datosFormularioMedico)
}