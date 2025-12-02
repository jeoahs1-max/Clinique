import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
export default function App(){
  const { t, i18n } = useTranslation();
  const [patients, setPatients] = useState([]);
  useEffect(()=> {
    fetch('/api/patients').then(r=>r.json()).then(setPatients).catch(()=>{});
  },[]);
  return (<div style={{fontFamily:'system-ui',padding:20}}>
    <header style={{display:'flex',justifyContent:'space-between'}}><h1>{t('app.title')}</h1>
    <select onChange={e=>i18n.changeLanguage(e.target.value)} defaultValue="fr"><option value="fr">FR</option><option value="en">EN</option><option value="ht">HT</option></select>
    </header>
    <main><h2>{t('dashboard.consultations_today')}</h2><p>Patients: {patients.length}</p><p><a href="/assets/prototype.html" target="_blank">Ouvrir prototype</a></p></main>
  </div>);
}
