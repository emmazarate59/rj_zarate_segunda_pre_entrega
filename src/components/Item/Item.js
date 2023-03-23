import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({ item }) => {

    return (
        <Card style={{ width: '18rem' }} class="card shadow-sm"  >
            <img src={item.img} />
            <Card.Body>
                <h2 h2  > {item.name}</h2 >
                <Card.Text>
                    <p><small>{item.description}</small></p>
                    <p>Precio: ${item.price}</p>
                </Card.Text>
                <p><small>Categoría: {item.category}</small></p>
                <Link to={`/detail/${item.id}`} className='btn btn-primary'>Agregar al carrito</Link>
            </Card.Body>
        </Card>
    )
}

export default Item









