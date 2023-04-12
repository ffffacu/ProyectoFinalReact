

const CartWidget = () => {
    return(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <a className="active cardSubli"  href="#">
        <div>
          <div className="cartSubliCant">4</div>
          <div><i className="bi bi-cart cartSubli"></i></div>
        </div>
      </a>
      </div>
    )
}

export default CartWidget;