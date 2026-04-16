"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';


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
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => setIsSubmitted(false), 300);
      }, 4000);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Υπήρξε κάποιο πρόβλημα. Παρακαλώ δοκιμάστε ξανά.');
    } finally {
      setIsSending(false);
    }
  };

  const modalContent = isOpen && (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '1rem',
      willChange: 'opacity'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '500px',
        background: '#0f0f0f',
        position: 'relative',
        animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        border: '1px solid rgba(0, 208, 255, 0.2)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        willChange: 'transform, opacity'
      }}>
        <button 
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '2rem',
            cursor: 'pointer',
            lineHeight: 1,
            zIndex: 10
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
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={formTexts.name}
                  required
                  disabled={isSending}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
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
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={formTexts.emailField}
                  required
                  disabled={isSending}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={formTexts.message}
                  required
                  disabled={isSending}
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              
              {error && (
                <div style={{ color: '#ff4444', fontSize: '0.9rem', textAlign: 'center' }}>
                  {error}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="btn" 
                  disabled={isSending}
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
                  disabled={isSending}
                  style={{ 
                    background: isSending ? '#333' : '#00d0ff',
                    padding: '0.6rem 1.5rem',
                    border: 'none',
                    color: '#000',
                    transition: 'opacity 0.3s'
                  }}
                >
                  {isSending ? 'Αποστολή...' : formTexts.send}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className} style={{ ...style, cursor: 'pointer', border: 'none' }}>
        {children}
      </button>

      {mounted && isOpen && createPortal(modalContent, document.body)}

    </>
  );
}
