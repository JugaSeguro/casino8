/**
 * Componente principal de la aplicación
 * Gestiona la estructura principal y los estilos globales
 */

import React, { useState } from 'react';
import './styles/main.css';
import './styles/popup.css';
import { useLandingPhone } from '@shared/useLandingPhone';

function App() {
  const { phoneData, loading } = useLandingPhone(2);
  const [showPopup, setShowPopup] = useState(false);

  // Mostrar loading mientras se cargan los enlaces
  if (loading) {
    return (
      <main className="main-content">
        <div className="loading-container">
          <p>Cargando...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Fondo animado */}
      <div className="background-container">
        <div className="scrolling-background"></div>
        <div className="dark-overlay"></div>
      </div>
      
      <main className="main-content">
        <div className="logo-container">
          <img src="/img/logo-new.webp" alt="Picante Sports Logo" className="site-logo" width="850" height="810" />
        </div>
        
        <div className="bonus-title">
          <h1>{phoneData.title}</h1>
        </div>
        
        <div className="promo-text">
          <p>Crea tu cuenta rápido y seguro ✨</p>
          <p>Regístrate totalmente gratis en la plataforma más segura de Argentina. Contamos con más de 12000 Slots, la mejor deportiva y el mejor casino en vivo.</p>
          <p>✅ ¡Nosotros no tenemos límites de apuestas!</p>
          <p>✅ ¡Retira sin límite!</p>
          <button id="bonus-button" className="bonus-highlight bonus-button" onClick={() => setShowPopup(true)}>
            REGISTRATE GRATIS Y OBTENE UN <span className="bonus-amount">MEGABONUS</span> CON TU PRIMER RECARGA
          </button>
        </div>
        

        
        {/* Popup Modal */}
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
              <h2>¡Elige tu forma de registro!</h2>
              <div className="popup-options">
                <div className="popup-option telegram-option" onClick={() => {
                  window.open('https://t.me/casino1xclub_bot', '_blank');
                  setShowPopup(false);
                }}>
                  <div className="option-icon">📱</div>
                  <h3>Telegram VIP</h3>
                  <p>✨ MÁS BENEFICIOS ✨</p>
                  <p>✨ MÁS BONOS SIEMPRE ✨</p>
                  <ul>
                    <li>🎁 Bonos exclusivos diarios</li>
                    <li>🚀 Promociones especiales</li>
                    <li>⚡ Soporte 24/7 prioritario</li>
                    <li>💎 Acceso VIP a torneos</li>
                  </ul>
                  <button className="option-button telegram-btn">Registrarme por Telegram</button>
                </div>
                
                <div className="popup-option whatsapp-option" onClick={() => {
                  window.open(phoneData.whatsapp_link, '_blank');
                  setShowPopup(false);
                }}>
                  <div className="option-icon">💬</div>
                  <h3>WhatsApp</h3>
                  <p>Registro tradicional</p>
                  <ul>
                    <li>📞 Atención personalizada</li>
                    <li>💰 Bonos de bienvenida</li>
                    <li>🎯 Soporte directo</li>
                  </ul>
                  <button className="option-button whatsapp-btn">Registrarme por WhatsApp</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;

