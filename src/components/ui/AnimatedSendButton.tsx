"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from "@/contexts/ThemeContext";

interface AnimatedSendButtonProps {
  onSubmit?: (formData: {name: string, email: string, description: string}) => Promise<void>;
  disabled?: boolean;
  isSubmitting?: boolean;
  formData?: {name: string, email: string, description: string};
  submitStatus?: 'idle' | 'success' | 'error';
  onResetStatus?: () => void;
}

const AnimatedSendButton: React.FC<AnimatedSendButtonProps> = ({ 
  onSubmit, 
  disabled = false, 
  isSubmitting = false,
  formData,
  submitStatus = 'idle',
  onResetStatus
}) => {
  const { theme } = useTheme();
  const [isClicked, setIsClicked] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!disabled && !isSubmitting && formData && onSubmit) {
      // If we're showing a result, reset status for new submission
      if (submitStatus !== 'idle' && onResetStatus) {
        onResetStatus();
        setIsClicked(false);
        setShowResult(false);
        return;
      }
      
      // Check if form is filled
      if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
        return; // Don't submit if form is not filled
      }
      
      setIsClicked(true);
      setShowResult(false);
      await onSubmit(formData);
    }
  };

  // Show result state after submission completes
  useEffect(() => {
    if (!isSubmitting && isClicked && (submitStatus === 'success' || submitStatus === 'error')) {
      setShowResult(true);
      // Reset to normal state after showing result
      const timer = setTimeout(() => {
        setIsClicked(false);
        setShowResult(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitting, isClicked, submitStatus]);

  // Determine button state
  const showSentState = showResult && (submitStatus === 'success' || submitStatus === 'error');
  const hasError = submitStatus === 'error';

  return (
    <div className="animated-send-button">
      <button 
        className={`button ${showSentState || isClicked ? 'clicked' : ''} ${disabled || isSubmitting ? 'disabled' : ''} ${hasError ? 'error' : ''}`}
        onClick={handleClick}
        disabled={disabled || isSubmitting}
        type="submit"
      >
        <div className="outline" />
        <div className="state state--default">
          <div className="icon">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g style={{filter: 'url(#shadow)'}}>
                <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="currentColor" />
                <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="currentColor" />
              </g>
              <defs>
                <filter id="shadow">
                  <feDropShadow dx={0} dy={1} stdDeviation="0.6" floodOpacity="0.5" />
                </filter>
              </defs>
            </svg>
          </div>
          <p>
            <span style={{'--i': 0} as React.CSSProperties}>S</span>
            <span style={{'--i': 1} as React.CSSProperties}>e</span>
            <span style={{'--i': 2} as React.CSSProperties}>n</span>
            <span style={{'--i': 3} as React.CSSProperties}>d</span>
            <span style={{'--i': 4} as React.CSSProperties}>&nbsp;</span>
            <span style={{'--i': 5} as React.CSSProperties}>M</span>
            <span style={{'--i': 6} as React.CSSProperties}>e</span>
            <span style={{'--i': 7} as React.CSSProperties}>s</span>
            <span style={{'--i': 8} as React.CSSProperties}>s</span>
            <span style={{'--i': 9} as React.CSSProperties}>a</span>
            <span style={{'--i': 10} as React.CSSProperties}>g</span>
            <span style={{'--i': 11} as React.CSSProperties}>e</span>
          </p>
        </div>
        <div className="state state--sent">
          <div className="icon">
            {hasError ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" width="1em" strokeWidth="0.5px" stroke="currentColor">
                <g style={{filter: 'url(#shadow)'}}>
                  <path fill="currentColor" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
                  <path fill="currentColor" d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" />
                  <path fill="currentColor" d="M12 17.25C11.59 17.25 11.25 16.91 11.25 16.5C11.25 16.09 11.59 15.75 12 15.75C12.41 15.75 12.75 16.09 12.75 16.5C12.75 16.91 12.41 17.25 12 17.25Z" />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" width="1em" strokeWidth="0.5px" stroke="currentColor">
                <g style={{filter: 'url(#shadow)'}}>
                  <path fill="currentColor" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
                  <path fill="currentColor" d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" />
                </g>
              </svg>
            )}
          </div>
          <p>
            {hasError ? (
              <>
                <span style={{'--i': 5} as React.CSSProperties}>E</span>
                <span style={{'--i': 6} as React.CSSProperties}>r</span>
                <span style={{'--i': 7} as React.CSSProperties}>r</span>
                <span style={{'--i': 8} as React.CSSProperties}>o</span>
                <span style={{'--i': 9} as React.CSSProperties}>r</span>
              </>
            ) : (
              <>
                <span style={{'--i': 5} as React.CSSProperties}>S</span>
                <span style={{'--i': 6} as React.CSSProperties}>e</span>
                <span style={{'--i': 7} as React.CSSProperties}>n</span>
                <span style={{'--i': 8} as React.CSSProperties}>t</span>
              </>
            )}
          </p>
        </div>
      </button>

      <style jsx>{`
        .animated-send-button .button {
          --primary: ${theme === 'dark' ? '#3b82f6' : '#2563eb'};
          --error-color: ${theme === 'dark' ? '#ef4444' : '#dc2626'};
          --neutral-1: ${theme === 'dark' ? '#1e293b' : '#f7f8f7'};
          --neutral-2: ${theme === 'dark' ? '#334155' : '#e7e7e7'};
          --text-color: ${theme === 'dark' ? '#ffffff' : '#000000'};
          --radius: 14px;

          cursor: pointer;
          border-radius: var(--radius);
          border: none;
          background: linear-gradient(var(--neutral-1), var(--neutral-2));
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
          min-width: 200px;
          padding: 20px;
          height: 68px;
          font-family: "Inter", "Segoe UI", system-ui, sans-serif;
          font-style: normal;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-color);
        }

        .animated-send-button .button.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .animated-send-button .button.error .state .icon {
          color: var(--error-color);
        }

        .animated-send-button .button:hover:not(.disabled) {
          transform: scale(1.05);
        }

        .animated-send-button .button:active:not(.disabled) {
          transform: scale(0.98);
        }

        .animated-send-button .button:after {
          display: none;
        }

        .animated-send-button .button::before {
          display: none;
        }

        .animated-send-button .state p {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-send-button .state .icon {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          transform: scale(1.25);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .animated-send-button .state .icon svg {
          overflow: visible;
        }

        /* Outline - REMOVED SHIMMER */
        .animated-send-button .outline {
          display: none;
        }

        /* Letters */
        .animated-send-button .state p span {
          display: block;
          opacity: 0;
          animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
        }

        .animated-send-button .button:hover:not(.disabled) p span {
          opacity: 1;
          animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
        }

        .animated-send-button .button.clicked p span {
          opacity: 1;
          animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
        }

        @keyframes wave {
          30% {
            opacity: 1;
            transform: translateY(4px) translateX(0) rotate(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px) translateX(0) rotate(0);
            color: var(--primary);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) rotate(0);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px) translateX(5px) rotate(-90deg);
            color: var(--primary);
            filter: blur(5px);
          }
          30% {
            opacity: 1;
            transform: translateY(4px) translateX(0) rotate(0);
            filter: blur(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px) translateX(0) rotate(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) rotate(0);
          }
        }

        @keyframes disapear {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: translateX(5px) translateY(20px);
            color: var(--primary);
            filter: blur(5px);
          }
        }

        /* Plane */
        .animated-send-button .state--default .icon svg {
          animation: land 0.6s ease forwards;
        }

        .animated-send-button .button:hover:not(.disabled) .state--default .icon {
          transform: rotate(45deg) scale(1.25);
        }

        .animated-send-button .button.clicked .state--default svg {
          animation: takeOff 0.8s linear forwards;
        }

        .animated-send-button .button.clicked .state--default .icon {
          transform: rotate(0) scale(1.25);
        }

        @keyframes takeOff {
          0% {
            opacity: 1;
          }
          60% {
            opacity: 1;
            transform: translateX(70px) rotate(45deg) scale(2);
          }
          100% {
            opacity: 0;
            transform: translateX(160px) rotate(45deg) scale(0);
          }
        }

        @keyframes land {
          0% {
            transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
            opacity: 0;
            filter: blur(3px);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0);
            opacity: 1;
            filter: blur(0);
          }
        }

        /* Contrail */
        .animated-send-button .state--default .icon:before {
          content: "";
          position: absolute;
          top: 50%;
          height: 2px;
          width: 0;
          left: -5px;
          background: linear-gradient(to right, transparent, var(--primary));
        }

        .animated-send-button .button.clicked .state--default .icon:before {
          animation: contrail 0.8s linear forwards;
        }

        @keyframes contrail {
          0% {
            width: 0;
            opacity: 1;
          }
          8% {
            width: 15px;
          }
          60% {
            opacity: 0.7;
            width: 80px;
          }
          100% {
            opacity: 0;
            width: 160px;
          }
        }

        /* States */
        .animated-send-button .state {
          padding-left: 29px;
          z-index: 2;
          display: flex;
          position: relative;
        }

        .animated-send-button .state--default span:nth-child(4) {
          margin-right: 5px;
        }

        .animated-send-button .state--sent {
          display: none;
        }

        .animated-send-button .state--sent svg {
          transform: scale(1.25);
          margin-right: 8px;
          color: #10b981;
        }

        .animated-send-button .button.error .state--sent svg {
          color: var(--error-color);
        }

        .animated-send-button .button.clicked .state--default {
          position: absolute;
        }

        .animated-send-button .button.clicked .state--sent {
          display: flex;
        }

        .animated-send-button .button.clicked .state--sent span {
          opacity: 0;
          animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
        }

        .animated-send-button .button.clicked .state--sent .icon svg {
          opacity: 0;
          animation: appear 1.2s ease forwards 0.8s;
        }

        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale(4) rotate(-40deg);
            color: #10b981;
            filter: blur(4px);
          }
          30% {
            opacity: 1;
            transform: scale(0.6);
            filter: blur(1px);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSendButton;
