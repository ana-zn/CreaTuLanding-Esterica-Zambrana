import { useEffect, useState } from 'react';
import Item from '../item/Item';
import fetchData from '../../fetchData';
import Loader from '../Loader/Loader'; 
// import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoria } = useParams();
  const [todosLosProductos, setTodosLosProductos] = useState([]);
  const [misProductos, setMisProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (todosLosProductos.length === 0) {
      fetchData()
        .then(response => {
          setTodosLosProductos(response);
          if (categoria) {
            const productosFiltrados = response.filter(el => el.categoria === categoria);
            setMisProductos(productosFiltrados);
          } else {
            setMisProductos(response);
          }
          setLoading(false);
        })
        .catch(err => console.error(err));
    } else {
      if (categoria) {
        const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
        setMisProductos(productosFiltrados);
      } else {
        setMisProductos(todosLosProductos);
      }
    }
  }, [categoria, todosLosProductos]);

  return (
    <>
      <section className='ItemListContainer'>
        {loading ? (
          <Loader />
        ) : (
          misProductos.map((el, index) => (
            <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} img={el.img}/>
          ))
        )}
      </section>
    </>
  );
}

export default ItemListContainer;
