import React, { useState } from 'react';
import style from './Venta.module.css'
import Articulo from './components/Articulo/Articulo';
import ListaArticulos from './components/ListaArticulos/ListaArticulos';
import Cliente from './components/Cliente/Cliente';
import Costo from './Costo';
import Condicion from './Condicion';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListaArticulosEncontrados from './components/ListaArticulos/ListaArticulosEncontrados';

export default function Navbar() {
    const [collapse, setCollapse] = useState("collapse")
    const fecha = new Date().toString()

    const productos = useSelector((state) => state.producto)
    const listProductos = useSelector((state) => state.listProductos)
    const productoLike = useSelector((state) => state.productoLike)


    const [productoProp, setProductoProp] = useState([])
    const [productoLikeProp, setproductoLikeProp] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (listProductos[id]) {
            setProductoProp(productos)
        }

        if (productoLike.data) {


            return setproductoLikeProp(productoLike.data)
        } setproductoLikeProp(productoLike)
    }, [id, productos, listProductos, productoLike])

    const generarRecibo = () => {
        console.log({
            productos,
            fecha,
            costoTotal: document.getElementById('costoTotal').textContent
        });
    }


    const handleClick = () => {
        collapse === "collapse" ? setCollapse("collapse.show") : setCollapse("collapse")
    }

    return (
        <div className={style.Home}>
            <span className="input-group-text">{fecha}</span>
            <div className={style.registrarCompra}>
                <div className={style.addArticulo}>
                    <h2>Ingrese un articulo</h2>
                    <Articulo />
                    <div className={style.cliente}>
                        <h2>Cliente</h2>
                        <Cliente />
                    </div>

                    <ListaArticulosEncontrados productos={productoLikeProp} />
                </div>
                <div className={style.ListArticulo}>
                    <div>


                        <ListaArticulos productos={productoProp} />
                        <div className={style.info}>
                            <Condicion />
                            <Costo />

                        </div>



                    </div>
                    <button type="button" className="btn btn-success" onClick={generarRecibo}>Generar recibo</button>
                </div>
            </div>
            <div >

            </div>
        </div>
    )
}