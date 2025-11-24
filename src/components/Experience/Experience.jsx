import React from 'react';
import styles from './Experience.module.css';

const Experience = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      current: false
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id, field, value) => {
    const updated = data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onChange(updated);
  };

  const removeExperience = (id) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  return (
    <div className={styles.experience}>
      <div className={styles.header}>
        <h3>Опыт работы</h3>
        <button onClick={addExperience} className={styles.addButton}>
          + Добавить место работы
        </button>
      </div>

      {data.map((exp, index) => (
        <div key={exp.id} className={styles.experienceItem}>
          <div className={styles.itemHeader}>
            <span>Место работы #{index + 1}</span>
            <button 
              onClick={() => removeExperience(exp.id)}
              className={styles.removeButton}
            >
              ×
            </button>
          </div>

          <div className={styles.grid}>
            <input
              type="text"
              placeholder="Компания"
              value={exp.company}
              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Должность"
              value={exp.position}
              onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
              className={styles.input}
            />
            <input
              type="month"
              placeholder="Начало работы"
              value={exp.startDate}
              onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
              className={styles.input}
            />
            <input
              type="month"
              placeholder="Окончание"
              value={exp.endDate}
              onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
              className={styles.input}
              disabled={exp.current}
            />
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
              />
              По настоящее время
            </label>
          </div>

          <textarea
            placeholder="Обязанности и достижения"
            value={exp.description}
            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
            className={styles.textarea}
            rows="3"
          />
        </div>
      ))}
    </div>
  );
};

export default Experience;