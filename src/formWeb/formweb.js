import { useEffect, useRef, useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from 'axios'


//Imports para el calendario
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import es from 'date-fns/locale/es'


const URI = 'https://fwmback-production.up.railway.app/'

const CompFormWeb = () => {
    //#region UseStates

    //#useState de Hcaptcha 
    const onExpire = () => {
        setToken(null)
    }

    const captchaRef = useRef(null)
    const [ token, setToken ] = useState(null)


    const EnviarDatos = () => {
        const texto = ('_______________________________________________________', +
            'Estimado Afectado',
            'la siguiente es la informacion que no acaba de enviar:', +
            'Datos del Afectado:', +
            'Tipo de identificacion: ' + tdiA, +
            'Numero de identificaion: ' + ndiA, +
            'Nombre completo: ' + nombA + ' ' + apell1A + ' ' + apell2A, +
            ' ', +
            'Correo: ' + email + ' Telefono: ' + tel, +
            'Ubicacion Geografica',
            'Provincia: ' + prov + ' Canton: ' + cant + ' Distrito: ' + dist, +
            '_________________________________________________ ', +
            ' ', +
            'Datos del Comerciante', +
            'Nombre: ' + nombC + ' ' + apell1C + ' ' + apell2C, +
            'Tipo de identificacion: ' + tdiA, +
            'Numero de identificaion: ' + ndiA, +
            '__________________________________________________', +
            'Datos del Evento:', +
            'Fecha del suceso: ' + fchaHech + ' Garantia: ' + fchaGar, +
            'Descripción de lo sucedido:', +
            +descH, +
            '___________________________________________________', +
            'Numero de consulta: 20023')

        alert('Numero de consulta: 20023, pronto recibira un correo')
    }

    
    //#region useStates de los select
    //useState de datos
    const [ prov, setProv ] = useState([])
    const [ cant, setCant ] = useState([])
    const [ dist, setDist ] = useState()

    //#endregion useStates de los select

    //#region useState de carga de Datos Personas y Comerciante
    const [ pers, setPers ] = useState([])
    const [ comer, setComer ] = useState([])
    const [ idprov, setidProv ] = useState()
    const [ idcant, setidCant ] = useState()
    const [ idDist, setidDist ] = useState()

    //#endregion useState Basicos

    //#region UseState de Imputs
    //useState del afectado
    const [ tdiA, settdiA ] = useState('')
    const [ ndiA, setndiA ] = useState('')
    const [ nombA, setnombA ] = useState('')
    const [ apell1A, setapell1A ] = useState('')
    const [ apell2A, setapell2A ] = useState('')
    const [ tel, setTel ] = useState()
    const [ email, setEmail ] = useState()
    const [ fchaHech, setfchaHech ] = useState()
    const [ fchaGar, setfchaGar ] = useState()
    const [ descH, setdescH ] = useState()
    const [ ubProv, setubProv ] = useState()
    const [ ubCant, setubCant ] = useState()
    const [ ubDist, setubDist ] = useState()

    //inputs del comerciante
    const [ tdiC, settdiC ] = useState()
    const [ ndiC, setndiC ] = useState()
    const [ nombC, setnombC ] = useState()
    const [ apell1C, setapell1C ] = useState()
    const [ apell2C, setapell2C ] = useState()

    //useState para los Select
    const [ selectNidA, setselectNidA ] = useState(0)
    const [ selectNidC, setselectNidC ] = useState(0)

    //useState para modificar inputs
    const [ dehabil, setdehabil ] = useState(true)
    const [ deshabProv, setdeshabProv ] = useState(true)
    const [ deshabCant, setdeshabCant ] = useState(true)
    const [ deshabDist, setdeshabDist ] = useState(true)
    const [ dehabilndiC, setdehabilndiC ] = useState(true)
    const [ dehabilnombC, setdehabilnombC ] = useState(true)
    const [ dehabilapell1C, setdehabilapell1C ] = useState(true)
    const [ dehabilapell2C, setdehabilapell2C ] = useState(true)

    //useState para modificar Class en los imputs
    const [ classndiA, setclassndiA ] = useState(false)
    const [ classndiC, setclassndiC ] = useState(false)

    //useState para solo lectura
    const [ onlyRnombA, setonlyRnombA ] = useState(false)
    const [ onlyRapell1A, setonlyRapell1A ] = useState(false)
    const [ onlyRapell2A, setonlyRapell2A ] = useState(false)
    const [ onlyRnombC, setonlyRnombC ] = useState(false)
    const [ onlyRapell1C, setonlyRapell1C ] = useState(false)
    const [ onlyRapell2C, setonlyRapell2C ] = useState(false)

    //useStaret para ocultar campos
    const [ invisibleAp, setinvisibleAp ] = useState("visible col-md-2")
    const [ invisibleApC, setinvisibleApC ] = useState("visible col-md-2")
    const [ classdivnomb, setclassdivnomb ] = useState("col-md-2")
    const [ classdivnombC, setclassdivnombC ] = useState("col-md-2")
    const [ classdivDNI, setclassdivDNI ] = useState("col-md-3")
    const [ classdivDNIC, setclassdivDNIC ] = useState("col-md-3")

    //useState para validar campos
    const [ dehabilSubmit, setdehabilSubmit ] = useState(true)
    const [ lblinputName, setlblinputName ] = useState('Nombre')
    const [ lblinputNameC, setlblinputNameC ] = useState('Nombre')
    const [ idclValid, setidClValid ] = useState('')
    const [ nclValid, setnClValid ] = useState('')
    const [ nclValidC, setnClValidC ] = useState('')
    const [ paclValid, setpaClValid ] = useState('')
    const [ saclValid, setsaClValid ] = useState('')
    const [ paclValidC, setpaClValidC ] = useState('')
    const [ saclValidC, setsaClValidC ] = useState('')
    const [ emclValid, setemClValid ] = useState('')
    const [ tlclValid, settlClValid ] = useState('')
    const [ idclValidC, setidClValidC ] = useState('')
    const [ fhHValidC, setfhHValidC ] = useState('')
    const [ fgValidC, setfgValidC ] = useState('')
    const [ dhClValid, setdhClValid ] = useState('')
    //#endregion UseState de Imputs
    //#endregion

    //#region Validacion de inputs
    //Validacion del selector de tipo de cedula del afectado
    const validarselectinputCed = (val) => {
        if (val == !null || val >= 0) {
            setdehabil(false)
        }
    }

    function limpiardatosA() {
        setndiA('')
        setnombA('')
        setapell1A('')
        setapell2A('')
        setidClValid('')
        setnClValid('')
        setpaClValid('')
        setsaClValid('')
    }

    function limpiardatosC() {
        setndiC('')
        setnombC("")
        setapell1C("")
        setapell2C("")
        setidClValidC('')
        setnClValidC('')
        setpaClValidC('')
        setsaClValidC('')
    }

    const input_TIDchange = (val, tID) => {
        const valor = val
        setselectNidA(valor)
        settdiA(tID)
        validarselectinputCed(valor)


        switch (valor) {
            case 1:

                setlblinputName("Nombre")
                setonlyRnombA(true)
                setonlyRapell1A(true)
                setonlyRapell2A(true)
                setclassdivnomb("col-md-2")
                setclassdivDNI("col-md-2")
                setinvisibleAp("visible col-md-2")
                break

            case 2:
                setlblinputName("Nombre")
                setonlyRnombA(false)
                setonlyRapell1A(false)
                setonlyRapell2A(false)
                setinvisibleAp("visible col-md-2")
                setclassdivnomb("col-md-2")
                setclassdivDNI("col-md-2")
                break

            case 3:
                setlblinputName("Nombre de Fantacia")
                setonlyRnombA(true)
                setonlyRapell1A(true)
                setonlyRapell2A(true)
                setinvisibleAp("invisible col-md-1")
                setapell1A("Desconocido")
                setapell2A("Desconocido")
                setclassdivnomb("col-md-5")
                setclassdivDNI("col-md-3")
                break

            case 4:
                setlblinputName("Nombre")
                setonlyRnombA(false)
                setonlyRapell1A(false)
                setonlyRapell2A(false)
                setinvisibleAp("visible col-md-2")
                setclassdivnomb("col-md-2")
                setclassdivDNI("col-md-2")
                break
        }
    }

    const input_TIDCchange = (val) => {
        setselectNidC(val)
        document.getElementById("errorCedC").innerHTML = ""
        const valor = val
        setselectNidA(valor)
        validarselectinputCed(valor)
        limpiardatosC()
        setdehabilndiC(false)
        setdehabilnombC(false)
        setdehabilapell1C(false)
        setdehabilapell2C(false)

        console.log(selectNidC)


        switch (valor) {
            case 1:
                setlblinputName("Nombre")
                setonlyRnombC(true)
                setonlyRapell1C(true)
                setonlyRapell2C(true)
                setclassdivnombC("col-md-2")
                setclassdivDNIC("col-md-2")
                setinvisibleApC("visible col-md-2")
                break

            case 2:
                setlblinputName("Nombre")
                setonlyRnombC(false)
                setonlyRapell1C(false)
                setonlyRapell2C(false)
                setinvisibleApC("visible col-md-2")
                setclassdivnombC("col-md-2")
                setclassdivDNIC("col-md-2")
                break

            case 3:
                setlblinputNameC("Nombre de Fantacia")
                setonlyRnombC(true)
                setonlyRapell1C(true)
                setonlyRapell2C(true)
                setinvisibleApC("invisible col-md-1")
                setapell1C("Desconocido")
                setapell2C("Desconocido")
                setclassdivnombC("col-md-5")
                setclassdivDNIC("col-md-3")
                break

            case 4:
                setlblinputName("Nombre")
                setonlyRnombC(false)
                setonlyRapell1C(false)
                setonlyRapell2C(false)
                setinvisibleApC("visible col-md-2")
                setclassdivnombC("col-md-2")
                setclassdivDNIC("col-md-2")
                break
        }
    }

    const validar_txt = (val) => {

        if (val == "" || val == null) {
            //inputNameC.setAttribute(isInvalid)
        }
        /*inputCedC.value = "";
        inputNameC.value = "";
        input1erApC.value = "";
        input2doApC.value = "";*/
    }
    //#endregion
    //Deshabilita el envío del formulario si hay campos no válidos
    function validarFormulario() {
        'use strict'
        // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
        let forms = document.querySelectorAll('.needs-validation')
        const lleno = () => {
            // Bucle sobre ellos y evitar el envío
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        }
        console.log('hay campos vacios, lleno es ' + lleno)
    }

    //#region Validaciones de input

    //Validacion del campo inputEmail
    const validarInputEmail = (val) => {
        const valor = val
        setEmail(valor)
        const resp = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valor))
        if (resp) {
            console.log(resp)
            setemClValid('is-valid')
            document.getElementById("erroremail").innerHTML = "Correo valido"
            return false;
        } else {
            console.log(resp)
            setemClValid('is-invalid')
            document.getElementById("erroremail").innerHTML = ""
            return true;
        }
    }

    //Validacion del campo inputTel
    const ValidarinputTel = (val) => {
        console.log(val)
        const valor = val
        setTel(valor)
        const resp = (/^[0-9]{8}$/.test(valor))
        if ((resp) && (valor.toString().length >= 8)) {
            console.log(resp)
            settlClValid('is-valid')

            setdeshabProv(false)
            getProvs()
        } else {
            console.log(resp)
            settlClValid('is-invalid')
        }
    }

    const validarFchHyGar = (val) => {
        console.log(val)
        setfchaGar(val)

        if (fchaGar.length != 0) {
            setfgValidC('is-valid')
        } else { setfgValidC('is-invalid') }

        if (fchaHech != '') {
            setfhHValidC('is-valid')
        } else { setfhHValidC('is-invalid') }

    }

    const validarText = (val) => {
        return (/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(val))
    }

    //Validacion campo nombre
    const ValidarinputNomb = (val) => {
        const valor = val
        setnombA(valor)
        console.log(nombA)
        const resp = validarText(valor)
        if (resp) {
            console.log(resp)
            setnClValid('is-valid')
        } else {
            console.log(resp)
            setnClValid('is-invalid')
        }
    }

    const ValidarinputApp1 = (val) => {
        const valor = val
        setapell1A(valor)
        console.log(apell1A)
        const resp = validarText(valor)
        if (resp) {
            console.log(resp)
            setpaClValid('is-valid')
        } else {
            console.log(resp)
            setpaClValid('is-invalid')
        }
    }

    const ValidarinputApp2 = (val) => {
        const valor = val
        setapell2A(valor)
        console.log(apell2A)
        const resp = validarText(valor)
        if (resp) {
            console.log(resp)
            setsaClValid('is-valid')
        } else {
            console.log(resp)
            setsaClValid('is-invalid')
        }
    }

    const ValidarinputNombC = (val) => {
        const valor = val
        setnombC(valor)
        console.log(valor)
        const resp = validarText(val)
        if (resp) {
            console.log(resp)
            setnClValidC('is-valid')
        } else {
            console.log(resp)
            setnClValidC('is-invalid')
        }
    }

    const ValidarinputApp1C = (val) => {
        const valor = val
        setapell1C(valor)
        console.log(valor)
        const resp = validarText(val)
        if (resp) {
            console.log(resp)
            setpaClValidC('is-valid')
        } else {
            console.log(resp)
            setpaClValidC('is-invalid')
        }
    }

    const ValidarinputApp2C = (val) => {
        const valor = val
        setapell2C(valor)
        console.log(valor)
        const resp = validarText(valor)
        if (resp) {
            console.log(resp)
            setsaClValidC('is-valid')
        } else {
            console.log(resp)
            setsaClValidC('is-invalid')
        }
    }

    const ValidarinputHecho = (val) => {
        const valor = val
        setdescH(valor)
        console.log(valor)

        if (val.toString().length >= 0) {
            setdhClValid('is-valid')
            setdehabilSubmit(false)
        } else {
            setdhClValid('is-invalid')
        }
    }

    //Validacion del campo inputCed del afectado
    const validarInputCedA = (val, ub) => {
        const valor = val
        setndiA(valor)
        if (ub == 1) {
            const resp = (/^[0-9]{1,30}$/.test(valor))
            if ((resp) && (valor.toString().length >= 9)) {
                setidClValid("is-valid")
                cargarDatosP(val, ub)
                ValidarinputNomb()
                ValidarinputApp1()
                ValidarinputApp2()
            } else {
                setidClValid("is-invalid")
                document.getElementById("errorCed").innerHTML = ""
            }
        } else if (ub == 2) {
            cargarDatosC(val, ub)
        }
    }

    //Validacion del campo inputCed del comerciante
    const validarInputCedC = (val, ub) => {
        console.log('Estamos en validarInputCedC')
        const valor = val
        setndiC(valor)
        ValidarinputNombC()
        ValidarinputApp1C()
        ValidarinputApp2C()
        if (ub == 2) {
            const resp = (/^[0-9]{6,30}$/.test(valor))
            if ((resp) && (valor.toString().length >= 6)) {
                setidClValidC("is-valid")
                cargaDatosComer(val, ub)
                document.getElementById("errorCed").innerHTML = "Numero de identificacion valido"
            } else {
                setidClValidC("is-invalid")
                document.getElementById("errorCed").innerHTML = ""
            }
        } else if (ub == 1) {
            validarInputCedA(val, ub)
        }
    }

    //Validacion del campo inputCed del comerciante
    const validarbtnSubmit = (e) => {
        e.preventDefault()
        if (token != null) {
            console.log('si hay token')
            if ((idclValid == 'is-valid') &&
                (nclValid == 'is-valid') &&
                (paclValid == 'is-valid') &&
                (saclValid == 'is-valid') &&
                (tlclValid == 'is-valid') &&
                (emclValid == 'is-valid') &&


                (idclValidC == 'is-valid') &&
                (nclValidC == 'is-valid') &&
                (paclValidC == 'is-valid') &&
                (saclValidC == 'is-valid')

            ) {
                console.log('Todo es valido')
                EnviarDatos()
            } else {
                console.log('faltan datos')
            }
        } else { alert('Por favor, confirme que es humano...') }
    }
    //#endregion

    //#region Funciones para carga de Datos

    //#region Carga de datos Ubicacion Geografica

    //Mostrar todas las provincias
    const getProvs = async () => {

        const res = await axios.get(URI + 'prov/')
        setProv(res.data)

        getCants()
        //setidCant(0)
        //
        console.log(prov || 0)
    }

    //Mostrar los cantones por provincia
    const getCants = async (v) => {
        console.log('en getCant 1 ' + v)
        if (v != null) {
            setdeshabCant(false)
            setdeshabDist(true)
            const val = v
            console.log(URI + 'cant/' + val)
            setidProv(val)
            const res = await axios.get(URI + 'cant/' + val)
            setCant(res.data)
            getDists()
            console.log('en getCant 2 ' + v)
        } getDists(0)
    }

    //Mostrar los distritos por canton
    const getDists = async (v) => {
        console.log('en getDists 1 ' + v)
        if (v != null) {
            (v == 0) ? setdeshabDist(true) : setdeshabDist(false)
            const val = v
            console.log(URI + 'dist/' + val)
            setidCant(val)
            const res = await axios.get(URI + 'dist/' + val)
            setDist(res.data)
            console.log('en getDists 2 ' + v)
        }
    }
    //#endregion

    //Solicitud a DB
    const cargarDatosP = async (val, ub) => {
        await fetch(URI + 'pers/' + val)
            .then(resp => resp.json())
            .then((data) => {
                const Perso = data[ 0 ]
                setPers(Perso)

                if ((ub == 1) && (selectNidA == 1)) {
                    setnombA(Perso?.nombre)
                    setapell1A(Perso?.first_last_name)
                    setapell2A(Perso?.second_last_name)
                } else if ((ub == 2) && (selectNidC == 1)) {
                    setnombC(Perso?.nombre)
                    setapell1C(Perso?.first_last_name)
                    setapell2C(Perso?.second_last_name)
                } else if ((ub == 1) && (selectNidA == 3)) {
                    cargarDatosC(val, ub)
                }
            })
    }

    const cargarDatosC = async (val, ub) => {

        await fetch(URI + 'comer/' + val)
            .then(resp => resp.json())
            .then((data) => {
                const Comer = data[ 0 ]
                setComer(Comer)

                if ((ub == 1) && (selectNidA == 3)) {
                    if ((Comer?.fantasy_name == null) || (Comer?.fantasy_name == 'NA') || (Comer?.fantasy_name == 'N/A')) {
                        setnombA(Comer?.business_name)
                        setlblinputName('Nombre de Empresa o institucion')
                    } else {
                        setnombA("")
                        setnombA(Comer?.fantasy_name)
                    }
                } else if ((ub == 2) && (selectNidC == 3)) {
                    if ((Comer?.fantasy_name == null) || (Comer?.fantasy_name == 'NA') || (Comer?.fantasy_name == 'N/A')) {
                        setnombC(Comer?.business_name)
                        setlblinputNameC('Nombre de Empresa o institucion')
                    } else {
                        setnombC(Comer?.fantasy_name)
                    }
                } else if ((ub == 2) && (selectNidC == 1)) {
                    cargarDatosP(val, ub)
                }
            })
    }

    //Mostrar datos de persona
    const cargaDatosPer = (v) => {
        const val = v
        const ub = 1
        if ((val != undefined)) {
            if ((selectNidA == 3) && (val.toString().length >= 6)) {
                console.log("Comer en list Persona")
                setndiC(val)
                cargarDatosC(val, ub)
            }
            if ((selectNidA == 1) && (val.toString().length >= 9)) {
                console.log("Persona en list Persona")
                setndiA(val)
                cargarDatosP(val, ub)
            }
        }
    }

    //Mostrar Datos del Comerciante
    const cargaDatosComer = (v) => {
        const val = v
        const ub = 2

        if ((val != undefined) && (val.toString().length >= 6)) {
            console.log('Valor de ub = ' + ub + ' val es = ' + val)
            if (selectNidC == 1) {
                console.log("Persona en list Comer")
                setndiA(val)
                cargarDatosP(val, ub)
            } if (selectNidC == 3) {
                console.log("Comer en list Comer")
                setndiC(val)
                cargarDatosC(val, ub)
            }
        }
    }
    //#endregion


    return (
        <div className="container bg-white mx-4 my-4 fw-semibold mx-auto max-w-7x1 px-1 sm:px-6 lg:px-8">
            <form id="formulario" className="g-3 me-3 needs-validation" noValidate action='#' required>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3>Datos de persona afectada</h3>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="input_TID" className="form-label">Tipo de identificación</label>
                        <select id="input_TID" defaultValue={selectNidA} className="form-select" name="tid" onChange={(e) => input_TIDchange(e.target.selectedIndex, e.target.value)} onClick={limpiardatosA} required>
                            <option defaultValue="DEFAULT" value="0" disabled >Seleccione...</option>
                            <option defaultValue="1">Cédula Nacional</option>
                            <option defaultValue="2">Pasaporte</option>
                            <option defaultValue="3">Cédula Jurídica</option>
                            <option defaultValue="4">DIMEX</option>
                        </select>
                    </div>
                    <div id="divinputCed" className={classdivDNI}>
                        <label htmlFor="inputCed" className="form-label">Identificación</label>
                        <input name='nid' type="text" className={`form-control ${idclValid}`} id="inputCed" value={ndiA} onChange={(e) => { validarInputCedA(e.target.value, '1') }} required disabled={dehabil} />
                        <div className="invalid-feedback">
                            Por favor, ingrese su numero de indentificación.
                        </div>
                        <span id="errorCed" className="fs-6"></span>
                    </div>
                    <div id="divinputName" className={classdivnomb}>
                        <label htmlFor="inputName" className="form-label" id="lblinputName">{lblinputName}</label>
                        <input name="nombre" type="text" className={`form-control ${nclValid}`} readOnly={onlyRnombA} id="inputName" value={nombA} onChange={(e) => ValidarinputNomb(e.target.value, "2")} disabled={dehabil} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese su nombre.
                        </div>
                    </div>
                    <div id="divinput1erAp" className={invisibleAp}>
                        <label htmlFor="input1erAp" className="form-label">Primer Apellido</label>
                        <input name="apell1" type="text" className={`form-control ${invisibleAp} ${paclValid}`} readOnly={onlyRapell1A} id="input1erAp" value={apell1A} onChange={(e) => ValidarinputApp1(e.target.value)} disabled={dehabil} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese su primer apellido.
                        </div>
                    </div>
                    <div id="divinput2doAp" className={invisibleAp}>
                        <label htmlFor="input2doAp" className="form-label" >Segundo Apellido</label>
                        <input name="apell2" type="text" className={`form-control ${saclValid}`} readOnly={onlyRapell2A} id="input2doAp" value={apell2A} onChange={(e) => ValidarinputApp2(e.target.value)} disabled={dehabil} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese su segundo apellido.
                        </div>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="col-md-4">
                        <label htmlFor="inputEmail" className="form-label">Correo electronico</label>
                        <input name="email" type="email" className={`form-control ${emclValid}`} id="inputEmail" valor={email} required disabled={dehabil} onChange={(e) => validarInputEmail(e.target.value)} />
                        <div className="invalid-feedback">
                            Por favor, ingrese un correo electronico valido.
                        </div>
                        <span id="erroremail" className="fs-6"></span>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputTel" className="form-label">Telefono (sin guiones)</label>
                        <input name="tel" type="text" className={`form-control ${tlclValid}`} id="inputTel" value={tel} required disabled={dehabil} onChange={(e) => ValidarinputTel(e.target.value)} />
                        <div className="invalid-feedback">
                            Por favor, ingrese un numero de telefono valido.
                        </div>
                        <span id="errortel" className="fs-6"></span>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3>Ubicación Geográfica</h3>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputprov" className="form-label">Provicia</label>
                        <select name="prov" id="inputprov" className="form-select" disabled={deshabProv} value={ubProv} onChange={(e) => getCants(e.target.value)} required>
                            <option defaultValue="DEFAULT" value="0">Seleccione...</option>
                            {prov?.map((prov) => (
                                <option key={prov.id_provincia} value={prov.id_provincia}> {prov.name_provincia} </option>
                            )
                            )}
                        </select>
                        <div className="invalid-feedback">
                            Por favor, selecione una provincia.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputcant" className="form-label">Canton</label>
                        <select name="cant" id="inputcant" className="form-select" disabled={deshabCant} value={ubCant} onChange={(e) => getDists(e.target.value)} required>
                            <option defaultValue="DEFAULT" value="0">Seleccione...</option>
                            {
                                idprov > 0 &&
                                (cant?.map((cant) => (
                                    <option key={cant.ident} value={cant.ident}> {cant.name_canton} </option>
                                ))
                                )}
                        </select>
                        <div className="invalid-feedback">
                            Por favor, selecione un canton.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputdist" className="form-label">Distrito</label>
                        <select name="dist" id="inputdist" className="form-select" disabled={deshabDist} onChange={(e) => setidDist(e.target.value)} value={ubDist} required>
                            <option defaultValue="DEFAULT" value="0">Seleccione...</option>
                            {
                                idcant > 0 &&
                                (dist?.map((dist) => (
                                    <option key={dist.id_distrito} value={dist.id_distrito}> {dist.name_distrito} </option>
                                ))
                                )}
                        </select>
                        <div className="invalid-feedback">
                            Por favor, selecione un distrito.
                        </div>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3>Datos de Comerciante</h3>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="input_TIDC" className="form-label">Tipo de identificación</label>
                        <select name="vtidc" id="input_TIDC" className="form-select" disabled={dehabil} onChange={(e) => input_TIDCchange(e.target.selectedIndex)} required>
                            <option defaultValue="">Seleccione...</option>
                            <option defaultValue="1">Cédula Nacional</option>
                            <option defaultValue="2">Pasaporte</option>
                            <option defaultValue="3">Cédula Jurídica</option>
                            <option defaultValue="4">DIMEX</option>
                        </select>
                        <div className="invalid-feedback">
                            Por favor, selecione una opcion.
                        </div>
                    </div>
                    <div id="divinputCedC" className={classdivDNIC}>
                        <label htmlFor="inputCedC" className="form-label">Identificación</label>
                        <input name="nidc" type="text" className={`form-control ${idclValidC}`} id='inputCedC' value={ndiC} onChange={(e) => validarInputCedC(e.target.value, '2')} disabled={dehabilndiC} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese el numero de identificación del comerciante.
                        </div>
                        <span id="errorCedC" className="fs-6"></span>
                    </div>
                    <div id="divinputNameC" className={classdivnombC}>
                        <label htmlFor="inputNameC" className="form-label" id="lblinputNameC">{lblinputNameC}</label>
                        <input name="nombrec" type="text" className={`form-control ${nclValidC}`} readOnly={onlyRnombC} id="inputNameC" value={nombC} onChange={(e) => ValidarinputNombC(e.target.value, "2")} disabled={dehabilnombC} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese el nombre del comerciante.
                        </div>
                    </div>
                    <div id="divinput1erApC" className={invisibleApC}>
                        <label htmlFor="input1erApC" className="form-label">Primer Apellido</label>
                        <input name="apell1c" type="text" className={`form-control ${invisibleApC} ${paclValidC}`} readOnly={onlyRapell1C} id="input1erApC" value={apell1C} onChange={(e) => ValidarinputApp1C(e.target.value)} disabled={dehabilapell1C} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese el primer apellido del comerciante.
                        </div>
                    </div>
                    <div id="divinput2doApC" className={invisibleApC}>
                        <label htmlFor="input2doApC" className="form-label">Segundo Apellido</label>
                        <input name="apell2c" type="text" className={`form-control ${invisibleApC} ${saclValidC}`} readOnly={onlyRapell2C} id="input2doApC" value={apell2C} onChange={(e) => ValidarinputApp2C(e.target.value)} disabled={dehabilapell2C} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese el segundo apellido del comerciante.
                        </div>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3>Datos del Evento</h3>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="inputFComp" className="form-label">Fecha De Compra O Incumplimiento</label>
                        <div className="input-group date" id="datepicker">
                            <DatePicker
                                isClearable
                                locale={es}
                                selected={fchaHech}
                                onChange={(date) => setfchaHech(date)}
                                dateFormat="dd/MM/yyyy"
                                name="fcompincu" type="text" className={`form-control ${fhHValidC}`}
                                id="inputFComp" disabled={dehabil} required
                            />
                        </div>
                        <div className="invalid-feedback">
                            Por favor, ingrese la fecha de compra o Incumplimiento.
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="input_PGar" className="form-label">Plazo De Garantía</label>
                        <select name="garant" id="input_PGar" className={`form-select ${fgValidC}`} disabled={dehabil} onChange={(e) => validarFchHyGar(e.target.selectedIndex)} required>
                            <option defaultValue="">Seleccione...</option>
                            <option defaultValue="1">No Aplica</option>
                            <option defaultValue="2">30 dias</option>
                            <option defaultValue="3">6 meses</option>
                            <option defaultValue="4">1 ano</option>
                            <option defaultValue="5">mas de un ano</option>
                        </select>
                        <div className="invalid-feedback">
                            Por favor, Seleccione el plazo de Garantía.
                        </div>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="mx-1 my-1">
                        <label htmlFor="inputHecho" className="form-label">Descripción De Los Hechos</label>
                        <textarea name="descrip" className={`form-control ${dhClValid}`} id='inputHecho' value={descH} rows="10" onChange={(e) => ValidarinputHecho(e.target.value)} disabled={dehabil}
                            required></textarea>
                        <div className="invalid-feedback">
                            Por favor, describa lo sucedido.
                        </div>
                    </div>
                </div>
                <div className="row my-3 ms-1 text-center">
                    <div className="col-md-6 p-3">
                        <HCaptcha
                            sitekey="85b72493-0682-42c5-b61c-cd740363b530"
                            onExpire={onExpire}
                            onVerify={setToken}
                            ref={captchaRef}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="p-3">
                            <button id="btnenviar" type="submit" className="p-3 m-3 btn btn-primary fw-bolder"
                                onClick={(e) => validarbtnSubmit(e)} disabled={dehabilSubmit} >Enviar Solicitud</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CompFormWeb