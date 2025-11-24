import React from 'react';
import styles from './PersonalInfo.module.css';

const PersonalInfo = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    // Создаем новый объект с обновленным полем
    const updatedData = {
      ...data,
      [field]: value
    };
    onChange(updatedData);
  };

  return (
    <div className={styles.personalInfo}>
      <h3>Личная информация</h3>
      <div className={styles.grid}>
        <input
          type="text"
          placeholder="ФИО"
          value={data.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Должность"
          value={data.position}
          onChange={(e) => handleChange('position', e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={styles.input}
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={data.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Город"
          value={data.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="О себе"
          value={data.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          className={styles.textarea}
          rows="3"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;