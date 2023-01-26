import Issue from './Issue';

const Issues = ({issues, onDelete, updateStatus}) => {
  
  return (
    <div className='tracker-list'>
      {issues.map((issue) => 
      (<Issue key={issue.id} issue={issue} onDelete={onDelete} updateStatus={updateStatus} />))
      }
    </div>
  )
}

export default Issues;
