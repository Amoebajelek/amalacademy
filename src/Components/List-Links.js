const LinkLists = (props) => {
  return (
    <div className='col-lg-3'>
      <h4>{props.title}</h4>
      <div className='list-item my-1'>
        <a href='/#' className='link'>{props.link1}</a>
      </div>
      <div className='list-item my-1'>
        <a href='/#' className='link'>{props.link2}</a>
      </div>
      <div className='list-item my-1'>
        <a href='/#' className='link'>{props.link3}</a>
      </div>
      <div className='list-item my-1'>
        <a href='/#' className='link'>{props.link4}</a>
      </div>
      <div className='list-item my-1'>
        <a href='/#' className='link'>{props.link5}</a>
      </div>
      <div className='list-item my-1'>
        <a href='/#' className='link'>{props.link6}</a>
      </div>
    </div>
  )
}

export default LinkLists