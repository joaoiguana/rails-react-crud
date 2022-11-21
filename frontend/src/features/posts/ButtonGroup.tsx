import { destroyPostAsync } from './postSlice';

function ButtonGroup(props:any) {
  const handleClick = (e:any) => {
    const payload = {
      post: {
        post_id: props.post_id
      }
    }
    props.dispatch(destroyPostAsync(payload));
  }
  return (
    <div className='btn-group float-end'>
      <button className='btn btn-warning' onClick={(e) => props.toggleEditForm(e)}><i className="uil uil-edit"></i></button>
      <button className='btn btn-danger' onClick={(e) => handleClick(e)}><i className="uil uil-times-circle"></i></button>
    </div>
  )
}

export default ButtonGroup;
