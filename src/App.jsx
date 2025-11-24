import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Preview from './components/Preview/Preview';
import Export from './components/Export/Export';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    position: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  });

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  const [activeTab, setActiveTab] = useState('personal');

  const resumeData = {
    personalInfo,
    experience,
    education,
    skills
  };

  const tabs = [
    { id: 'personal', label: 'Личная информация', component: PersonalInfo },
    { id: 'experience', label: 'Опыт работы', component: Experience },
    { id: 'education', label: 'Образование', component: Education },
    { id: 'skills', label: 'Навыки', component: Skills }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  const updatePersonalInfo = (data) => {
    setPersonalInfo(data);
  };

  const updateExperience = (data) => {
    setExperience(data);
  };

  const updateEducation = (data) => {
    setEducation(data);
  };

  const updateSkills = (data) => {
    setSkills(data);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>resumeBuilder</h1>
        <p>Создайте профессиональное резюме за минуты</p>
      </header>

      <main className="app-main">
        <div className="app-grid">
          {/* Форма редактирования */}
          <section className="form-section">
            <div className="tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="form-content">
              {activeTab === 'personal' && (
                <PersonalInfo
                  data={personalInfo}
                  onChange={updatePersonalInfo}
                />
              )}
              {activeTab === 'experience' && (
                <Experience
                  data={experience}
                  onChange={updateExperience}
                />
              )}
              {activeTab === 'education' && (
                <Education
                  data={education}
                  onChange={updateEducation}
                />
              )}
              {activeTab === 'skills' && (
                <Skills
                  data={skills}
                  onChange={updateSkills}
                />
              )}
            </div>

            <Export data={resumeData} />
          </section>

          {/* Preview */}
          <section className="preview-section">
            <div className="preview-content">
              <Preview data={resumeData} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;