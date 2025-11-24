import React from 'react';
import styles from './Preview.module.css';

const Preview = ({ data }) => {
  const safeData = {
    personalInfo: data?.personalInfo || {
      fullName: '',
      position: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: data?.experience || [],
    education: data?.education || [],
    skills: data?.skills || []
  };

  const { personalInfo, experience, education, skills } = safeData;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
    } catch {
      return dateString;
    }
  };

  return (
    <div className={styles.preview}>
      <div className={styles.previewContent}>
        {/* Header */}
        <header className={styles.header}>
          <h1>{personalInfo.fullName || 'Иван Иванов'}</h1>
          <h2>{personalInfo.position || 'Frontend Developer'}</h2>
          <div className={styles.contacts}>
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {!personalInfo.email && !personalInfo.phone && !personalInfo.location && (
              <span>email@example.com • +7 (999) 999-99-99 • Москва</span>
            )}
          </div>
        </header>

        {/* Summary */}
        {personalInfo.summary && (
          <section className={styles.section}>
            <h3>О себе</h3>
            <p>{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className={styles.section}>
            <h3>Опыт работы</h3>
            {experience.map((exp, index) => (
              <div key={exp.id || index} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <strong>{exp.company || 'Название компании'}</strong>
                  <span className={styles.date}>
                    {formatDate(exp.startDate)} - {exp.current ? 'По настоящее время' : formatDate(exp.endDate)}
                  </span>
                </div>
                <div className={styles.position}>{exp.position || 'Должность'}</div>
                {exp.description && <p className={styles.description}>{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className={styles.section}>
            <h3>Образование</h3>
            {education.map((edu, index) => (
              <div key={edu.id || index} className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <strong>{edu.institution || 'Учебное заведение'}</strong>
                  <span className={styles.date}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                <div>{edu.degree} {edu.field && `| ${edu.field}`}</div>
                {edu.description && <p className={styles.description}>{edu.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section className={styles.section}>
            <h3>Навыки</h3>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </section>
        )}

        {/* Placeholder если нет данных */}
        {experience.length === 0 && education.length === 0 && skills.length === 0 && !personalInfo.summary && (
          <section className={styles.section}>
            <h3>Добро пожаловать в CV Builder!</h3>
            <p>Заполните информацию в левой колонке, чтобы увидеть ваше резюме здесь.</p>
            <div style={{ marginTop: '20px', color: '#666', fontStyle: 'italic' }}>
              <p>• Введите ваши личные данные</p>
              <p>• Добавьте опыт работы</p>
              <p>• Укажите образование</p>
              <p>• Перечислите ключевые навыки</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Preview;