import { useRef, useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from 'axios'


//Imports para el calendario
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import es from 'date-fns/locale/es'


const URI = 'https://fwmback-production.up.railway.app/'
const URIEMAIL = 'http://127.0.0.1:3005/sendemail'

const CompFormWeb = () => {
    //#region UseStates

    //#useState de Hcaptcha 
    const onExpire = () => {
        setToken(null)
    }

    const captchaRef = useRef(null)
    const [ token, setToken ] = useState(null)


    const EnviarDatos = async () => {
        alert('Numero de consulta: 20023, pronto recibira un correo')
        const gcorreo = ``
        const res = await axios.post(URIEMAIL + '/' + gcorreo)
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
    //const [ lblPHNombFantacy, setlblPHNombFantacy ] = useState()
    const [ lblPHNombFantacyC, setlblPHNombFantacyC ] = useState()

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
    const [ invisibleAp1, setinvisibleAp1 ] = useState("d-block col-md-2")
    const [ invisibleAp2, setinvisibleAp2 ] = useState("d-block col-md-2")
    const [ invisibleAp1C, setinvisibleAp1C ] = useState("d-block col-md-2")
    const [ invisibleAp2C, setinvisibleAp2C ] = useState("d-block col-md-2")
    const [ classdivnomb, setclassdivnomb ] = useState("col-md-2")
    const [ classdivnombC, setclassdivnombC ] = useState("col-md-2")
    const [ classdivDNI, setclassdivDNI ] = useState("col-md-3")
    const [ classdivDNIC, setclassdivDNIC ] = useState("col-md-3")

    //useState para validar campos 
    const [ dehabilSubmit, setdehabilSubmit ] = useState(true)
    const [ lblinputName, setlblinputName ] = useState('Nombre')
    const [ fbNameA, setfbNameA ] = useState('Por favor, ingrese su nombre.')
    const [ fbNameC, setfbNameC ] = useState('Por favor, ingrese el nombre del comerciante.')
    const [ lblinputNameC, setlblinputNameC ] = useState('Nombre')
    const [ lblapell1A, setlblapell1A ] = useState('Primer Apellido')
    const [ fbApell1A, setfbapell1A ] = useState('Por favor, ingrese su primer apellido.')
    const [ fbApell1C, setfbapell1C ] = useState('Por favor, ingrese el primer apellido del comerciante.')
    const [ lblapell1C, setlblapell1C ] = useState('Primer Apellido')
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
        setselectNidA(val)
        const valor = val
        settdiA(tID)
        validarselectinputCed(valor)
        limpiardatosA()

        switch (valor) {
            case 1:
                setlblinputName("Nombre")
                setlblapell1A("Primer Apellido")
                setfbNameA('Por favor, ingrese su nombre.')
                setfbapell1A('Por favor, ingrese su primer apellido.')
                setclassdivnomb("col-md-2")
                setclassdivDNI("col-md-2")
                setinvisibleAp1("d-block col-md-2")
                setinvisibleAp2("d-block col-md-2")
                //setlblPHNombFantacy('')
                break

            case 2:
                setlblinputName("Nombre")
                setlblapell1A("Primer Apellido")
                setfbNameA('Por favor, ingrese su nombre.')
                setfbapell1A('Por favor, ingrese su primer apellido.')
                setinvisibleAp1("d-block col-md-2")
                setinvisibleAp2("d-block col-md-2")
                setclassdivnomb("col-md-2")
                setclassdivDNI("col-md-2")
                //setlblPHNombFantacy('')
                break

            case 3:
                setlblinputName('Nombre de Fantasía (Opcional)')
                setinvisibleAp1("d-none col-md-1")
                setinvisibleAp2("d-none col-md-1")
                setfbNameA('')
                setfbapell1A('')
                setapell1A("Desconocido")
                setapell2A("Desconocido")
                setclassdivnomb("col-md-5")
                setclassdivDNI("col-md-3")
                //setlblPHNombFantacy('Nota: digite solamente el nombre del comercio en el campo nombre de fantasía si no conoce la cédula juridica.')
                break

            case 4:
                setlblinputName("Nombre")
                setlblapell1A("Primer Apellido")
                setfbNameA('Por favor, ingrese su nombre.')
                setfbapell1A('Por favor, ingrese su primer apellido.')
                setinvisibleAp1("d-block col-md-2")
                setinvisibleAp2("d-block col-md-2")
                setclassdivnomb("col-md-2")
                setclassdivDNI("col-md-2")
                //setlblPHNombFantacy('')
                break
        }
    }

    const input_TIDCchange = (val, tID) => {
        setselectNidC(val)
        settdiA(tID)
        document.getElementById("errorCedC").innerHTML = ""
        const valor = val
        validarselectinputCed(valor)
        limpiardatosC()
        setdehabilndiC(false)
        setdehabilnombC(false)
        setdehabilapell1C(false)
        setdehabilapell2C(false)

        console.log(selectNidC)


        switch (valor) {
            case 1:
                setlblinputNameC("Nombre")
                setlblapell1C("Primer Apellido")
                setfbNameC('Por favor, ingrese su nombre.')
                setfbapell1C('Por favor, ingrese su primer apellido.')
                setclassdivnombC("col-md-2")
                setclassdivDNIC("col-md-2 d-block")
                setinvisibleAp1C("d-block col-md-2")
                setinvisibleAp2C("d-block col-md-2")
                setlblPHNombFantacyC('')
                break

            case 2:
                setlblinputNameC("Nombre")
                setlblapell1C("Primer Apellido")
                setfbNameC('Por favor, ingrese su nombre.')
                setfbapell1C('Por favor, ingrese su primer apellido.')
                setinvisibleAp1C("d-block col-md-2")
                setinvisibleAp2C("d-block col-md-2")
                setclassdivnombC("col-md-2")
                setclassdivDNIC("col-md-2 d-block")
                setlblPHNombFantacyC('')
                break

            case 3:
                setlblinputNameC('Nombre de Fantasía (Opcional)')
                setfbNameC('')
                setfbapell1C('')
                setinvisibleAp1C("d-none col-md-1")
                setinvisibleAp2C("d-none col-md-1")
                setapell1C("Desconocido")
                setapell2C("Desconocido")
                setclassdivnombC("col-md-5")
                setclassdivDNIC("col-md-3 d-block")
                setlblPHNombFantacyC('Nota: digite solamente el nombre del comercio en el campo nombre de fantasía si no conoce la cédula juridica.')
                break

            case 4:
                setlblinputNameC("Nombre")
                setlblapell1C("Primer Apellido")
                setfbNameC('Por favor, ingrese su nombre.')
                setfbapell1C('Por favor, ingrese su primer apellido.')
                setinvisibleAp1C("d-block col-md-2")
                setinvisibleAp2C("d-block col-md-2")
                setclassdivnombC("col-md-2")
                setclassdivDNIC("col-md-2 d-block")
                setlblPHNombFantacyC('')
                break

            case 5:
                setlblinputNameC("Nombre de Fantasía (Opcional)")
                setlblapell1C("")
                setfbNameC('')
                setfbapell1C('')
                setinvisibleAp1C("d-none col-md-2")
                setinvisibleAp2C("d-none col-md-2")
                setclassdivnombC("col-md-8")
                setclassdivDNIC("col-md-2 d-none")
                setlblPHNombFantacyC('')
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
        if (val.toString().length >= 1) {
            const resp = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valor))
            if (resp) {
                setemClValid('is-valid')
                document.getElementById("erroremail").innerHTML = "Correo valido"
                return false;
            } else {
                setemClValid('is-invalid')
                document.getElementById("erroremail").innerHTML = ""
                return true;
            }
        } else {
            setemClValid('is-invalid')
            document.getElementById("erroremail").innerHTML = ""
            return true;
        }
    }

    //Validacion del campo inputTel
    const ValidarinputTel = (val) => {
        const valor = val
        setTel(valor)
        const resp = (/^[0-9]{8}$/.test(valor))
        console.log(val, resp)
        if ((resp) && (valor.toString().length >= 8)) {
            settlClValid('is-valid')
            setdeshabProv(false)
            getProvs()
            let tele = val
            tele = tele.toString().slice(0, 4)+ "-" + tele.toString().slice(4)
            console.log(tele)
            setTel(tele)            
        } else {
            settlClValid('is-invalid')
        }
    }

    const validarFch = (val) => {
        setfchaHech(val)
        console.log(val)
        if (val != null) {
            setfhHValidC('is-valid')
        } else { setfhHValidC('is-invalid') }
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
        return (/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(val))
    }

    const validarTextEsp = (val) => {
        return (/^[\w\W ]+$/.test(val))
    }

    //Validacion campo nombre
    const ValidarinputNomb = (val, ced) => {
        const valor = val
        setnombA(valor)
        if (lblinputName == "Nombre") {
            const Ced = (ced == 1) ? ndiA : ced
            setnombA(valor)
            if (valor.toString().length >= 1) {
                if (ced == 1) {
                    const resp = validarText(valor)
                    if (resp) {
                        setnClValid('is-valid')
                    } else {
                        setnClValid('is-invalid')
                    }
                } else if (Ced.toString().length == 9) {
                    const resp = validarText(valor)
                    if (resp) {
                        setnClValid('is-valid')
                    } else {
                        setnClValid('is-invalid')
                    }
                } else if (Ced.toString().length == 10) {
                    const resp = validarTextEsp(valor)
                    if (resp) {
                        setnClValid('is-valid')
                    } else {
                        setnClValid('is-invalid')
                    }
                } else if ((Ced.toString().length == 12) || (selectNidA == 4)) {
                    const resp = validarText(valor)
                    if (resp) {
                        setnClValid('is-valid')
                    } else {
                        setnClValid('is-invalid')
                    }
                }
            } else {
                setnClValid('is-invalid')
            }
        } else if ((lblinputName == "Nombre de Empresa o institucion") || (lblinputName == "Nombre de Fantasía (Opcional)")) {
            const Ced = (ced == 1) ? ndiA : ced
            if (valor.toString().length >= 1) {
                if (Ced?.toString().length == 10) {
                    const resp = validarTextEsp(valor)
                    if (resp) {
                        setnClValid('is-valid')
                    } else {
                        setnClValid('is-invalid')
                    }
                }
            } else {
                setnClValid('is-invalid')
            }
        }
    }

    const ValidarinputApp1 = (val) => {
        const valor = val
        setapell1A(valor)
        if (lblapell1A != 'Nombre de Fantasía (Opcional)') {
            if (val.toString().length >= 1) {
                const resp = validarText(valor)
                if (resp) {
                    setpaClValid('is-valid')
                } else {
                    setpaClValid('is-invalid')
                }
            } else {
                setpaClValid('is-invalid')
            }
        }
    }

    const ValidarinputApp2 = (val) => {
        const valor = val
        console.log(val)
        setapell2A(valor)
        if (lblapell1A != 'Nombre de Fantasía (Opcional)') {
            if (val.toString().length >= 1) {
                const resp = validarText(valor.trimEnd())
                console.log(valor, resp)
                if (resp) {
                    setsaClValid('is-valid')
                } else {
                    setsaClValid('is-invalid')
                }
            } else {
                setsaClValid('is-invalid')
            }
        }
    }

    const ValidarinputNombC = (val, ced) => {
        if (lblinputNameC == "Nombre") {
            const valor = val
            const Ced = (ced == 2) ? ndiA : ced
            setnombC(valor)
            if (valor.toString().length >= 1) {
                if (ced == 2) {
                    const resp = validarText(valor)
                    if (resp) {
                        setnClValidC('is-valid')
                    } else {
                        setnClValidC('is-invalid')
                    }
                } else if (Ced.toString().length == 9) {
                    const resp = validarText(valor)
                    if (resp) {
                        setnClValidC('is-valid')
                    } else {
                        setnClValidC('is-invalid')
                    }
                } else if (Ced.toString().length == 10) {
                    const resp = validarTextEsp(valor)
                    if (resp) {
                        setnClValidC('is-valid')
                    } else {
                        setnClValidC('is-invalid')
                    }
                } else if ((Ced.toString().length == 12) || (selectNidC == 4)) {
                    const resp = validarTextEsp(valor)
                    if (resp) {
                        setnClValidC('is-valid')
                    } else {
                        setnClValidC('is-invalid')
                    }
                }
            } else {
                setnClValidC('is-invalid')
            }
        } else if ((lblinputNameC == "Nombre de Empresa o institucion") || (lblinputNameC == "Nombre de Fantasía (Opcional)")) {
            const valor = val
            const Ced = (ced == 2) ? ndiC : ced
            setnombC(valor)
            console.log(val, ced)
            if (valor.toString().length >= 1) {
                if (Ced.toString().length == 10) {
                    const resp = validarTextEsp(valor)
                    console.log(resp, 'en CJ 10')
                    if (resp) {
                        setnClValidC('is-valid')
                    } else {
                        setnClValidC('is-invalid')
                    }
                }
            } else {
                setnClValidC('is-invalid')
            }
        }
    }

    const ValidarinputApp1C = (val) => {
        const valor = val
        setapell1C(valor)
        console.log(valor)
        if (lblapell1C != 'Nombre de Fantasía (Opcional)') {
            if (val.toString().length >= 1) {
                const resp = validarText(val)
                if (resp) {
                    setpaClValidC('is-valid')
                } else {
                    setpaClValidC('is-invalid')
                }
            } else {
                setpaClValidC('is-invalid')
            }
        }
    }

    const ValidarinputApp2C = (val) => {
        const valor = val
        setapell2C(valor)
        if (val.toString().length >= 1) {
            const resp = validarText(valor.trimEnd())
            if (resp) {
                setsaClValidC('is-valid')
            } else {
                setsaClValidC('is-invalid')
            }
        } else {
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
            if (selectNidA === 1) {
                const resp = (/^[0-9]{9}$/.test(valor))
                if ((resp) && (valor.toString().length === 9)) {
                    setidClValid("is-valid")
                    cargarDatosP(val, ub)
                } else {
                    setidClValid("is-invalid")
                    setnClValid("")
                    setpaClValid("")
                    setsaClValid("")
                    setnombA('')
                    setapell1A('')
                    setapell2A('')
                    document.getElementById("errorCed").innerHTML = ""
                }
            } else if (selectNidA === 2) {
                const resp = (/^[a-zA-Z0-9]{9}$/.test(val))
                if ((resp) && (valor.toString().length === 9)) {
                    setidClValid("is-valid")
                } else {
                    setnombA('')
                    setapell1A('')
                    setapell2A('')
                    document.getElementById("errorCed").innerHTML = ""
                }
            } else if (selectNidA === 3) {
                const resp = (/^[a-zA-Z0-9]{10}$/.test(val))
                if ((resp) && (valor.toString().length === 10)) {
                    setidClValid("is-valid")
                    cargarDatosC(valor, 1)
                } else {
                    setidClValid("is-invalid")
                    setnClValid("is-invalid")
                    setsaClValid("is-invalid")
                    setnombA('')
                    setapell1A('')
                    setapell2A('')
                    document.getElementById("errorCed").innerHTML = ""
                }
            } else if (selectNidA === 4) {
                const resp = (/^[0-9]{12}$/.test(valor))
                if ((resp) && (valor.toString().length === 12)) {
                    setidClValid("is-valid")
                } else {
                    setidClValid("is-invalid")
                    setnombA('')
                    setapell1A('')
                    setapell2A('')
                    document.getElementById("errorCed").innerHTML = ""
                }
            }
        } else if (ub == 2) {
            cargarDatosC(val, ub)
        }
    }

    //Validacion del campo inputCed del comerciante
    const validarInputCedC = (val, ub) => {
        const valor = val
        setndiC(valor)
        if (ub == 2) {
            if (selectNidC === 1) {
                const resp = (/^[0-9]{9}$/.test(valor))
                if ((resp) && (valor.toString().length === 9)) {
                    setidClValidC("is-valid")
                    cargarDatosP(val, ub)
                } else {
                    setidClValidC("is-invalid")
                    setnClValidC("")
                    setpaClValidC("")
                    setsaClValidC("")
                    setnombC('')
                    setapell1C('')
                    setapell2C('')
                    document.getElementById("errorCedC").innerHTML = ""
                }
            } else if (selectNidC === 2) {
                const resp = (/^[a-zA-Z0-9]{9}$/.test(val))
                console.log(resp, val)
                if ((resp) && (valor.toString().length === 9)) {
                    setidClValidC("is-valid")
                } else {
                    /*setidClValidC("is-invalid")
                    setnClValidC("is-invalid")
                    setpaClValidC("is-invalid")
                    setsaClValidC("is-invalid")*/
                    setnombC('')
                    setapell1C('')
                    setapell2C('')
                    document.getElementById("errorCedC").innerHTML = ""
                }

            } else if (selectNidC === 3) {
                const resp = (/^[a-zA-Z0-9]{10}$/.test(val))
                if ((resp) && (valor.toString().length === 10)) {
                    setidClValidC("is-valid")
                    console.log("valor =", val, ub)
                    cargarDatosC(val, ub)
                    /*ValidarinputNombC()
                    ValidarinputApp1C()
                    ValidarinputApp2C()*/
                } else {
                    setidClValidC("is-invalid")
                    setnClValidC("is-invalid")
                    //setpaClValidC("is-invalid")
                    setsaClValidC("is-invalid")
                    setnombC('')
                    setapell1C('')
                    setapell2C('')
                    document.getElementById("errorCedC").innerHTML = ""
                }
            } else if (selectNidC === 4) {
                const resp = (/^[0-9]{12}$/.test(valor))
                if ((resp) && (valor.toString().length === 12)) {
                    setidClValidC("is-valid")
                } else {
                    setidClValidC("is-invalid")
                    /*setnClValidC("is-invalid")
                    setpaClValidC("is-invalid")
                    setsaClValidC("is-invalid")*/
                    setnombC('')
                    setapell1C('')
                    setapell2C('')
                    document.getElementById("errorCedC").innerHTML = ""
                }
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
            const p1 = 0
            if (lblapell1A == 'Nombre de Fantasía (Opcional)') {
                if ((idclValid == 'is-valid') &&
                    (nclValid == 'is-valid') &&
                    (tlclValid == 'is-valid') &&
                    (emclValid == 'is-valid') &&
                    (fhHValidC == 'is-valid') &&
                    (dhClValid == 'is-valid') &&
                    (idclValidC == 'is-valid') &&
                    (nclValidC == 'is-valid')
                ) { p1 = 1 }
            } else if (lblapell1C == 'Nombre de Fantasía (Opcional)') {
                if ((idclValid == 'is-valid') &&
                    (nclValid == 'is-valid') &&
                    (paclValid == 'is-valid') &&
                    (saclValid == 'is-valid') &&
                    (tlclValid == 'is-valid') &&
                    (emclValid == 'is-valid') &&
                    (idclValidC == 'is-valid')
                ) {
                    console.log('Todo es valido')
                    EnviarDatos()
                } else {
                    console.log('faltan datos')
                }
            } else if ((lblapell1A == 'Nombre de Fantasía (Opcional)') && (lblapell1C == 'Nombre de Fantasía (Opcional)')) {
                if ((idclValid == 'is-valid') &&
                    (nclValid == 'is-valid') &&
                    (saclValid == 'is-valid') &&
                    (tlclValid == 'is-valid') &&
                    (emclValid == 'is-valid') &&
                    (idclValidC == 'is-valid')
                ) {
                    console.log('Todo es valido')
                    EnviarDatos()
                } else {
                    console.log('faltan datos')
                }
            } else {
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
        if (v != null) {
            setdeshabCant(false)
            setdeshabDist(true)
            const val = v
            setidProv(val)
            const res = await axios.get(URI + 'cant/' + val)
            setCant(res.data)
            getDists()
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
        const Ub = ub
        console.log(val, Ub)
        await fetch(URI + 'pers/' + val)
            .then(resp => resp.json())
            .then((data) => {
                const Perso = data[ 0 ]
                setPers(Perso)
                console.log(Perso)
                if ((ub == 1) && (selectNidA == 1)) {
                    const nombre = Perso?.nombre
                    setnombA(nombre)
                    setapell1A(Perso?.first_last_name)
                    setapell2A(Perso?.second_last_name)
                    ValidarinputNomb(nombre, val)
                    ValidarinputApp1(Perso?.first_last_name)
                    ValidarinputApp2(Perso?.second_last_name.trimEnd())
                } else if ((ub == 2) && (selectNidC == 1)) {
                    const nombre = Perso?.nombre
                    setnombC(nombre)
                    setapell1C(Perso?.first_last_name)
                    setapell2C(Perso?.second_last_name)
                    ValidarinputNombC(nombre, val)
                    ValidarinputApp1C(Perso?.first_last_name)
                    ValidarinputApp2C(Perso?.second_last_name.trimEnd())
                } else if ((ub == 1) && (selectNidA == 3)) {
                    cargarDatosC(val, Ub)
                }
            })
    }

    const cargarDatosC = async (val, ub) => {
        console.log('En cargardatosC')
        await fetch(URI + 'comer/' + val)
            .then(resp => resp.json())
            .then((data) => {
                const Comer = data[ 0 ]
                setComer(Comer)
                console.log(ub)
                if ((ub == 1) && (selectNidA == 3)) {
                    if ((Comer?.fantasy_name == 'NULL') || (Comer?.fantasy_name == null) || (Comer?.fantasy_name == 'NA') || (Comer?.fantasy_name == 'N/A')) {
                        const nombreA = Comer?.business_name
                        setnombA(nombreA)
                        ValidarinputNomb(nombreA, val)
                        setlblinputName('Nombre de Empresa o institucion')
                    } else if ((Comer?.fantasy_name != 'NULL') || (Comer?.fantasy_name != null) || (Comer?.fantasy_name != 'NA') || (Comer?.fantasy_name != 'N/A')) {
                        const nombreE = Comer?.business_name
                        const nombreF = Comer?.fantasy_name
                        setinvisibleAp1("d-block col-md-4")
                        setlblinputName('Nombre de Empresa o institucion')
                        setlblapell1A('Nombre de Fantasía (Opcional)')
                        setnombA(nombreE)
                        setapell1A(nombreF)
                        //ValidarinputNomb(nombreF, ub)
                    } else if (((Comer?.fantasy_name == 'NULL') || (Comer?.fantasy_name == null) || (Comer?.fantasy_name == 'NA') || (Comer?.fantasy_name == 'N/A')) && (Comer?.business_name == null)) {
                        const nombreE = Comer?.business_name
                        const nombreF = Comer?.fantasy_name
                        setinvisibleAp1("d-block col-md-4")
                        setlblinputName('Nombre de Empresa o institucion')
                        setlblapell1A('Nombre de Fantasía (Opcional)')
                        setnombA(nombreE)
                        setapell1A(nombreF)
                        //ValidarinputNomb(nombreF, ub)
                    }
                } else if ((ub == 2) && (selectNidC == 3)) {
                    console.log('segundo if de comer')
                    if ((Comer?.fantasy_name == 'NULL') || (Comer?.fantasy_name == null) || (Comer?.fantasy_name == 'NA') || (Comer?.fantasy_name == 'N/A')) {
                        const nombreC = Comer?.business_name
                        setnombC(nombreC)
                        ValidarinputNombC(nombreC, val)
                        setlblinputNameC('Nombre de Empresa o institucion')
                        setinvisibleAp1C("d-block col-md-4")
                        setlblinputNameC('Nombre de Empresa o institucion')
                        setlblapell1C('Nombre de Fantasía (Opcional)')
                        setapell1C('')
                        console.log('si no hay nombre de fantasia')
                    } else if ((Comer?.fantasy_name != 'NULL') || (Comer?.fantasy_name != null) || (Comer?.fantasy_name != 'NA') || (Comer?.fantasy_name != 'N/A')) {
                        const nombreE = Comer?.business_name
                        const nombreF = Comer?.fantasy_name
                        setinvisibleAp1("d-block col-md-4")
                        setlblinputName('Nombre de Empresa o institucion')
                        setlblapell1A('Nombre de Fantasía (Opcional)')
                        setnombA(nombreE)
                        setapell1A(nombreF)
                        //ValidarinputNomb(nombreF, ub)
                    } else if (((Comer?.fantasy_name == 'NULL') || (Comer?.fantasy_name == null) || (Comer?.fantasy_name == 'NA') || (Comer?.fantasy_name == 'N/A')) && (Comer?.business_name == null)) {
                        const nombreE = Comer?.business_name
                        const nombreF = Comer?.fantasy_name
                        setinvisibleAp1C("d-block col-md-4")
                        setlblinputNameC('Nombre de Empresa o institucion')
                        setlblapell1C('Nombre de Fantasía (Opcional)')
                        setnombC(nombreE)
                        setapell1C(nombreF)
                        //ValidarinputNomb(nombreF, ub)
                    }
                } else if ((ub == 2) && (selectNidC == 1)) {
                    cargarDatosP(val, ub)
                }
            })
    }

    //#endregion


    return (
        <div className="container bg-white mx-4 my-4 fw-semibold mx-auto max-w-7x1 px-1 sm:px-6 lg:px-8">
            <form id="formulario" className="g-3 me-3 needs-validation" noValidate action='#' required>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3 className="clrTitle">Datos de persona afectada</h3>
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
                        <input name="nombre" type="text" className={`form-control ${nclValid}`} readOnly={onlyRnombA} id="inputName" value={nombA} onChange={(e) => ValidarinputNomb(e.target.value, "1")} disabled={dehabil} required />
                        <div className="invalid-feedback">
                            {fbNameA}
                        </div>
                    </div>
                    <div id="divinput1erAp" className={invisibleAp1}>
                        <label htmlFor="input1erAp" className="form-label">{lblapell1A}</label>
                        <input name="apell1" type="text" className={`form-control ${paclValid}`} readOnly={onlyRapell1A} id="input1erAp" value={apell1A} onChange={(e) => ValidarinputApp1(e.target.value)} disabled={dehabil} required />
                        <div className="invalid-feedback">
                            {fbApell1A}
                        </div>
                    </div>
                    <div id="divinput2doAp" className={invisibleAp2}>
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
                        <label htmlFor="inputTel" className="form-label">Telefono (1234 - 5678)</label>
                        <input name="tel" type="text" className={`form-control ${tlclValid}`} id="inputTel" value={tel} required disabled={dehabil} onChange={(e) => ValidarinputTel(e.target.value)} />
                        <div className="invalid-feedback">
                            Por favor, ingrese un numero de telefono valido.
                        </div>
                        <span id="errortel" className="fs-6"></span>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3 className="clrTitle">Ubicación Geográfica</h3>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputprov" className="form-label">Provincia</label>
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
                        <label htmlFor="inputcant" className="form-label">Cantón</label>
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
                        <h3 className="clrTitle">Datos de Comerciante</h3>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="input_TIDC" className="form-label">Tipo de identificación</label>
                        <select name="vtidc" id="input_TIDC" defaultValue={selectNidC} className="form-select" disabled={dehabil} onChange={(e) => input_TIDCchange(e.target.selectedIndex, e.target.value)} required>
                            <option defaultValue="DEFAULT" value="0" disabled >Seleccione...</option>
                            <option defaultValue="1">Cédula Nacional</option>
                            <option defaultValue="2">Pasaporte</option>
                            <option defaultValue="3">Cédula Jurídica</option>
                            <option defaultValue="4">DIMEX</option>
                            <option defaultValue="5">NO INDICA</option>
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
                            {fbNameC}
                        </div>
                        <div className="fs-6 fw-bold lh-1 text-danger">
                        </div>
                    </div>
                    <div id="divinput1erApC" className={invisibleAp1C}>
                        <label htmlFor="input1erApC" className="form-label">{lblapell1C}</label>
                        <input name="apell1c" type="text" className={`form-control ${paclValidC}`} readOnly={onlyRapell1C} id="input1erApC" value={apell1C} onChange={(e) => ValidarinputApp1C(e.target.value)} disabled={dehabilapell1C} required />
                        <div className="invalid-feedback">
                            {fbApell1C}
                        </div>
                    </div>
                    <div id="divinput2doApC" className={invisibleAp2C}>
                        <label htmlFor="input2doApC" className="form-label">Segundo Apellido</label>
                        <input name="apell2c" type="text" className={`form-control ${saclValidC}`} readOnly={onlyRapell2C} id="input2doApC" value={apell2C} onChange={(e) => ValidarinputApp2C(e.target.value)} disabled={dehabilapell2C} required />
                        <div className="invalid-feedback">
                            Por favor, ingrese el segundo apellido del comerciante.
                        </div>
                    </div>
                </div>
                <div className="row my-3 ms-1">
                    <div className="my-3">
                        <h3 className="clrTitle">Datos del Evento</h3>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="inputFComp" className="form-label">Fecha De Compra O Incumplimiento</label>
                        <div className="input-group date" id="datepicker">
                            <DatePicker
                                isClearable
                                locale={es}
                                selected={fchaHech}
                                onChange={(date) => validarFch(date)}
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
                        <select name="garant" id="input_PGar" defaultValue="" className={`form-select ${fgValidC}`} disabled={dehabil} onChange={(e) => validarFchHyGar(e.target.selectedIndex)} required>
                            <option defaultValue="DEFAULT" value="" disabled>Seleccione...</option>
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