import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const Issue = ({ issue, onDelete, updateStatus }) => {
  const [isProceed, setIsProceed] = useState(false);

  const statusList = ['open', 'pending', 'closed'];
  const nextStatus = statusList[statusList.indexOf(issue.status) + 1];
  const toggleStatus = issue.status !== 'closed';

  const handleStatus = (e) => {
    updateStatus(issue.id, e.target.value);
    setIsProceed(false);
  }

  return (
    <div className={`issue ${issue.status}`}>
      <h3 className='issue-title'>{issue.title} 
      <FaTimes
      className='issue-icon__close icon icon-close'
      onClick={() => onDelete(issue.id)} 
      />
      </h3>
      <p className='issue-description'>{issue.description}</p>

      <div className="issue-status--wrap">
        <p className='issue-status'> 
          <span className={`issue-status__current ${issue.status}`}> {issue.status}</span>

          { toggleStatus && 
            <AiFillEdit 
            className='issue-icon__edit icon icon-edit'
            onClick={() => setIsProceed(!isProceed)}
           />        
          }
        </p>

        { isProceed && 
          <p className='issue-proceed'>
            Update to:       
            <label htmlFor="formNewStatus" className="form-checkmark form-checkbox">
              <input type="checkbox" id="formNewStatus" value={nextStatus} onChange={handleStatus} />
              <span className={`form-checkbox__label issue-status__current ${nextStatus}`}>{nextStatus}</span>
            </label>
          </p>    
      }
      </div>
    </div>
  )
}

export default Issue;
