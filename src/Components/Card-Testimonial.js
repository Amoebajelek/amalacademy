const CardTestimonial = (props) => {
  return (
    <div className="card">
      <div className="card-body ms-3">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text testimonial">{props.testimonial}</p>
        <div className='nav'>
          <img src={props.image} className='img-profile' alt='img-profile' />
          <div className='row ms-2'>
            <p className="card-text name"><b>{props.name}</b></p>
            <p className="card-text occupation text-secondary">{props.occupation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardTestimonial