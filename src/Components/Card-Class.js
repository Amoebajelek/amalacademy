import NotifGreen from '../Assets/notif-green.png'

const CardClass = (props) => {
  return (
    <div className="card">
      <img src="https://picsum.photos/300/200" className="card-img-top mx-auto my-3" alt="card-img-top" />
      <div className="card-body ms-3">
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text text-secondary">{props.qcourse} courses • {props.qtime} hours</p> */}
        <div className='nav'>
          <p className="card-text sprice red-color"><s>{props.sprice}</s></p>
          <p className="card-text dprice">{props.dprice}</p>
          <img src={NotifGreen} className='notification' alt='green-notification' width='24px' height='24px' />
        </div>
      </div>
    </div>
  )
}

export default CardClass