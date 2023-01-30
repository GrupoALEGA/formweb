import { useEffect, useState } from "react"
import axios from 'axios'
//import {Link} from 'react-router-dom'

const URI = 'http://localhost:4000/prov/'

const CompShowProv = () => {
    const [provs, setProv] = useState([])
    useEffect(() => {
        getProvs()
    }, [])

    //Mostrar todos
    const getProvs = async () => {
        const res = await axios.get(URI)
        setProv(res.data)
    }

    //Mostrar uno
   /* const getProvs = async (id) => {

    }

    //Crear uno
    const postProvs = async (id) => {

    }

    //Actualizar uno
    const putProvs = async (id) => {

    }*/


    //Eliminar uno
    const deleteProvs = async (id) => {
        axios.delete('${URI}${id}')
        getProvs()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table caption-top">
                        <caption>List of Provs</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contry</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provs.map((blog) => (
                                    <tr key={blog.id}>
                                        <th scope="row">1</th>
                                        <td>{blog.id_provincia}</td>
                                        <td>{blog.name_provincia}</td>
                                        <td>{blog.id_contry}</td>
                                        <td>
                                            {/*<Link to={'/edit/${provs.id_provincia}'} className='btn btn-info'>Editar</Link>*/}
                                            <button onClick={()=>deleteProvs(provs.id_provincia)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowProv