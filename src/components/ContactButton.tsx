"use client";

import React, { useState } from 'react';

interface ContactButtonProps {
  children: React.ReactNode;
  formTexts: {
    title: string;
    name: string;
    emailField: string;
    message: string;
    send: string;
    cancel: string;
    success: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

export default function ContactButton({ children, formTexts, className, style }: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setIsSubmitted(false), 300); // Reset after modal closes
    }, 4000);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className} style={{ ...style, cursor: 'pointer', border: 'none' }}>
        {children}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '500px',
            background: 'var(--bg-secondary)',
            position: 'relative',
            animation: 'fadeInUp 0.3s forwards'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '2rem',
                cursor: 'pointer',
                lineHeight: 1
              }}
            >
              &times;
            </button>
            
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', color: '#00d0ff' }}>✓</div>
                <h3 style={{ color: '#00d0ff', lineHeight: 1.5 }}>{formTexts.success}</h3>
              </div>
            ) : (
              <>
                <h3 style={{ marginBottom: '1.5rem', color: '#00d0ff' }}>{formTexts.title}</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <input 
                      type="text" 
                      placeholder={formTexts.name}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'inherit',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder={formTexts.emailField}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'inherit',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder={formTexts.message}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                    <button 
                      type="button" 
                      onClick={() => setIsOpen(false)}
                      className="btn" 
                      style={{ 
                        background: 'transparent', 
                        border: '1px solid var(--text-secondary)',
                        color: 'var(--text-secondary)',
                        padding: '0.6rem 1.5rem',
                      }}
                    >
                      {formTexts.cancel}
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ 
                        background: '#00d0ff',
                        padding: '0.6rem 1.5rem',
                        border: 'none'
                      }}
                    >
                      {formTexts.send}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
