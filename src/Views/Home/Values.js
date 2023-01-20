import ImgValues from '../../Assets/img-values.png'
import ChecklistPurple from '../../Assets/checklist-purple.png'

const Values = () => {
  return (
    <section id="Values">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-5">
            <img src={ImgValues} classNam='img-fluid img-values' alt='img-values' />
          </div>
          <div className="col-lg-6 col-sm-12 my-auto">
            <p className="purple-color">You Deserve Better Career</p>
            <h3>The Profit You Get To Grow</h3>
            <div className='nav mt-4'>
              <img src={ChecklistPurple} className='icon-checklist-purple mr-2' alt='icon-checklist-purple' />
              <p>Unlimited access</p>
            </div>
            <div className='nav mt-1'>
              <img src={ChecklistPurple} className='icon-checklist-purple mr-2' alt='icon-checklist-purple' />
              <p>Free lesson updates</p>
            </div>
            <div className='nav mt-1'>
              <img src={ChecklistPurple} className='icon-checklist-purple mr-2' alt='icon-checklist-purple' />
              <p>Real-world project</p>
            </div>
            <div className='nav mt-1'>
              <img src={ChecklistPurple} className='icon-checklist-purple mr-2' alt='icon-checklist-purple' />
              <p>Private group disscussion</p>
            </div>
            <div className='nav mt-1'>
              <img src={ChecklistPurple} className='icon-checklist-purple mr-2' alt='icon-checklist-purple' />
              <p>etc ...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values