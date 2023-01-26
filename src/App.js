import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Issues from "./components/Issues";
import AddIssue from "./components/AddIssue";
import Footer from "./components/Footer";

// import './App.css';
import './style/index.scss';

function App() {
  const [showAddIssue, setShowAddIssue] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const getIssues = async () => {
      const issuesFromServer = await fetchIssues();
      setIssues(issuesFromServer);
    }

    getIssues();
  }, []);

  //Fetch issues 
  const fetchIssues = async () => {
    const res = await fetch('http://localhost:5000/issues');
    const data = await res.json();

    console.log(data);
    return data;
  }

  //Fetch issue
  const fetchIssue = async (id) => {
    const res = await fetch(`http://localhost:5000/issues/${id}`);
    const data = await res.json();
  
    console.log(data);
    return data;
  }
  

  // Delete issue
  const deleteIssue = async (id) => {
    await fetch(`http://localhost:5000/issues/${id}`, {
      method: 'DELETE',
    })

    setIssues(issues.filter((issue) => issue.id !== id));
  }

  // Add issue
  const addIssue = async (issue) => {
    const res = await fetch('http://localhost:5000/issues', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(issue)
    });

    const data = await res.json();
    setIssues([...issues, data]);
  }

  // Update Status
  const updateStatus = async (id, val) => {
    const issueToUpdate = await fetchIssue(id);
    const updIssue = { ...issueToUpdate, 
    status: val };

    const res = await fetch(`http://localhost:5000/issues/${id}`, {
      method: 'PUT',
      headers: {
        'COntent-type': 'application/json'
      },
      body: JSON.stringify(updIssue)
    });

    const data = await res.json();

    setIssues(issues.map((issue) => 
    issue.id === id ? { ...issue, status: data.status } : issue
    ))
  }
  
  return (
    <section className="tracker">
      <div className="container">
        <Header onAdd={() => setShowAddIssue(!showAddIssue)}  showAdd={showAddIssue} />
        {showAddIssue && <AddIssue onAdd={addIssue} />}
        { issues.length > 0 
        ?
        (<Issues issues={issues} onDelete={deleteIssue} updateStatus={updateStatus} />)
        :
        ('Add your first issue')
        }
        <Footer />
      </div>
    </section>
  );
}

export default App;
