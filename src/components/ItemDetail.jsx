function ItemDetail({ product }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Categoría: {product.category}</p>
          <p>Precio: ${product.price}</p>
          <button className="btn btn-primary">Añadir al carrito</button>

          <div className="mt-3">
            <p><i className="bi bi-credit-card"></i> Hasta 3 cuotas sin interés</p>
            <p><i className="bi bi-currency-exchange"></i> 10% off abonando por transferencia bancaria</p>
          </div>

          <div className="mt-4">
            <p>Selecciona tu talle:</p>
            <div className="btn-group">
              <button type="button" className="btn btn-outline-secondary">35</button>
              <button type="button" className="btn btn-outline-secondary">36</button>
              <button type="button" className="btn btn-outline-secondary">37</button>
              <button type="button" className="btn btn-outline-secondary">38</button>
              <button type="button" className="btn btn-outline-secondary">39</button>
              <button type="button" className="btn btn-outline-secondary">40</button>
            </div>
          </div>

          <div className="mt-4">
            <h4>Para cambios o devoluciones:</h4>
            <p>Si no te gustó o no te convenció el producto, podés cambiarlo o devolverlo (siempre y cuando no tenga uso). El costo de envío es de $2000 a través de OCA.</p>
          </div>

          <div className="mt-4">
            <h4>Comprá y cancelá cuando quieras.</h4>
            <p>Tu compra está protegida. Si no te convence el producto, podés devolverlo abonando el envío.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;





