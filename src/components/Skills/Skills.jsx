import React, { useState } from 'react';
import styles from './Skills.module.css';

const Skills = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    onChange(data.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className={styles.skills}>
      <h3>Навыки</h3>
      
      <div className={styles.skillInput}>
        <input
          type="text"
          placeholder="Добавить навык"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.input}
        />
        <button onClick={addSkill} className={styles.addButton}>
          Добавить
        </button>
      </div>

      <div className={styles.skillsList}>
        {data.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <span>{skill}</span>
            <button 
              onClick={() => removeSkill(skill)}
              className={styles.removeButton}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <p className={styles.placeholder}>Навыки еще не добавлены</p>
      )}
    </div>
  );
};

export default Skills;