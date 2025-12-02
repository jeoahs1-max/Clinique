/**
 * device_wrapper.js
 * Exemple simple Node.js pour communiquer avec un bridge local de dispositifs (ex: http://localhost:6000)
 *
 * Usage:
 *   node device_wrapper.js
 */

const fetch = require('node-fetch');

const BRIDGE_URL = process.env.BRIDGE_URL || 'http://localhost:6000';

async function listDevices(){
  const res = await fetch(`${BRIDGE_URL}/devices`);
  if(!res.ok) throw new Error('Erreur bridge: ' + res.status);
  return res.json();
}

async function startCapture(deviceId, patientId){
  const res = await fetch(`${BRIDGE_URL}/devices/${deviceId}/capture`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({patientId})
  });
  if(!res.ok) throw new Error('Erreur démarrage capture');
  return res.json();
}

async function stopCapture(sessionId){
  const res = await fetch(`${BRIDGE_URL}/capture/${sessionId}/stop`, { method: 'POST' });
  if(!res.ok) throw new Error('Erreur stop capture');
  return res.json();
}

async function main(){
  try{
    console.log('Listing devices from bridge...');
    const devices = await listDevices();
    console.log('Devices:', devices);

    if(devices.length === 0){
      console.log('Aucun device trouvé sur le bridge.');
      return;
    }
    const deviceId = devices[0].id;
    console.log('Starting capture on', deviceId);
    const capture = await startCapture(deviceId, 'patient-123');
    console.log('Capture started:', capture);
    // simulate 5s capture
    await new Promise(r=>setTimeout(r, 5000));
    const stop = await stopCapture(capture.sessionId);
    console.log('Stopped:', stop);
  }catch(e){
    console.error(e);
  }
}

if(require.main === module) main();
