import {useState} from 'react';

const AddIssue = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [filledField, setFilledField] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add an issue');
            return;
        }

        onAdd({ title, description, status });

        setTitle('');
        setDescription('');
        setStatus('open');
        setFilledField(false);
    }

    const handleLabel = (e) => {
        (e.target.value) ? setFilledField(true) : setFilledField(false);
    }

  return (
    <form className="form form-issue" onSubmit={onSubmit}>
        <div className="form-field">
            <input className="form-input" type="text" value={title} name="issueTitle" id="issueTitle" onChange={(e) => setTitle(e.target.value)} onBlur={handleLabel} />    
            <label className={`form-label ${filledField && 'active'}`} htmlFor="issueTitle">Title</label>
        </div> 
        <div className="form-field form-textarea">
            <textarea className="form-input" value={description} name="issueDescription" id="issueDescription" onChange={(e) => setDescription(e.target.value)} onBlur={handleLabel} />  
            <label className={`form-label ${filledField && 'active'}`} htmlFor="issueDescription">Description</label>
        </div> 

        <input className="form-btn btn btn-secondary" type="submit" value="Save Issue" />
    </form>
  )
}

export default AddIssue;
