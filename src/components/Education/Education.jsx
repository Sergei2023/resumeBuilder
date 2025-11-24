import React from 'react';
import styles from './Education.module.css';

const Education = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id, field, value) => {
    const updated = data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onChange(updated);
  };

  const removeEducation = (id) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  return (
    <div className={styles.education}>
      <div className={styles.header}>
        <h3>Образование</h3>
        <button onClick={addEducation} className={styles.addButton}>
          + Добавить образование
        </button>
      </div>

      {data.map((edu, index) => (
        <div key={edu.id} className={styles.educationItem}>
          <div className={styles.itemHeader}>
            <span>Образование #{index + 1}</span>
            <button 
              onClick={() => removeEducation(edu.id)}
              className={styles.removeButton}
            >
              ×
            </button>
          </div>

          <div className={styles.grid}>
            <input
              type="text"
              placeholder="Учебное заведение"
              value={edu.institution}
              onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Степень"
              value={edu.degree}
              onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Специальность"
              value={edu.field}
              onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
              className={styles.input}
            />
            <input
              type="month"
              placeholder="Начало"
              value={edu.startDate}
              onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
              className={styles.input}
            />
            <input
              type="month"
              placeholder="Окончание"
              value={edu.endDate}
              onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
              className={styles.input}
            />
          </div>

          <textarea
            placeholder="Дополнительная информация"
            value={edu.description}
            onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
            className={styles.textarea}
            rows="2"
          />
        </div>
      ))}
    </div>
  );
};

export default Education;