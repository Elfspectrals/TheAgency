import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * @param {boolean}   open     - état d’ouverture
 * @param {Function}  onClose  - callback fermeture
 * @param {ReactNode} children - contenu
 */
const Modal = ({ open, onClose, children }) => {
  // Ferme avec Esc
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__close" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
