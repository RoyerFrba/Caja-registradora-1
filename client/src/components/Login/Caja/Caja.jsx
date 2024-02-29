import React, { useEffect, useState } from 'react';
import style from "../Login.module.css"
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
export default function Caja(props) {

    const dispatch = useDispatch()
    const Vendedor = useSelector((state) => state.Vendedor)
    const [caja, setCaja] = useState([])



    useEffect(() => {

       
        axios("http://localhost:3001/tienda/caja").then(({ data }) => {
            console.log(data);
           setCaja(data)
        })

    }, [props.cajaAbierta])

    
    return (
        <div className={style.containerCaja}>
           {
            caja.map((c)=>{
                return(
                    <div key={c.id}>
                        <p>{c.id}</p>
                        <p>{moment(c.fechaApertura).format('DD/MM/YYYY HH:mm')}</p>
                        <p>{moment(c.fechaCierre).format('DD/MM/YYYY HH:mm')|| "Abierto"}</p>
                        <p>{c.precioInicial}</p>
                        <p>{c.precioFinalCaja || "Abierto"}</p>
                        <p>{c.precioFinal || "Abierto.."}</p>

                    </div>
                )
            })
           }
        </div>
    )

}