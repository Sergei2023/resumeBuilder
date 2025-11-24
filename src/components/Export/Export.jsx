import React from 'react';
import html2pdf from 'html2pdf.js';
import styles from './Export.module.css';

const Export = ({ data, onImport }) => {
  const exportToPDF = () => {
    const element = document.querySelector('.preview-content');
    const opt = {
      margin: 10,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          if (onImport) {
            onImport(importedData);
          }
          alert('Данные успешно импортированы!');
        } catch {
          alert('Ошибка при чтении файла. Убедитесь, что файл корректный.');
        }
      };
      reader.readAsText(file);
    }
    event.target.value = '';
  };

  return (
    <div className={styles.export}>
      <h3>Экспорт резюме</h3>
      <div className={styles.buttons}>
        <button onClick={exportToPDF} className={styles.primaryButton}>
          Скачать PDF
        </button>
        <button onClick={exportToJSON} className={styles.secondaryButton}>
          Экспорт JSON
        </button>
        <label className={styles.importButton}>
          Импорт JSON
          <input
            type="file"
            accept=".json"
            onChange={importFromJSON}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Export;