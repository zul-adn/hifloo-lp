import React from 'react';

interface Icon3DProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

export const SalesIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sales-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <filter id="sales-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="85" rx="30" ry="8" fill="#000" opacity="0.1"/>
      
      {/* Coin stack */}
      <g filter="url(#sales-shadow)">
        {/* Bottom coin */}
        <ellipse cx="50" cy="70" rx="25" ry="8" fill={color.accent}/>
        <ellipse cx="50" cy="68" rx="25" ry="8" fill={`url(#sales-grad-${variant})`}/>
        
        {/* Middle coin */}
        <ellipse cx="50" cy="55" rx="25" ry="8" fill={color.accent}/>
        <ellipse cx="50" cy="53" rx="25" ry="8" fill={`url(#sales-grad-${variant})`}/>
        
        {/* Top coin */}
        <ellipse cx="50" cy="40" rx="25" ry="8" fill={color.accent}/>
        <ellipse cx="50" cy="38" rx="25" ry="8" fill={`url(#sales-grad-${variant})`}/>
        
        {/* Dollar symbol */}
        <text x="50" y="45" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">$</text>
      </g>
      
      {/* Sparkle effects */}
      <circle cx="20" cy="25" r="3" fill={color.light} opacity="0.8"/>
      <circle cx="80" cy="30" r="2" fill={color.light} opacity="0.6"/>
      <circle cx="75" cy="50" r="2.5" fill={color.light} opacity="0.7"/>
    </svg>
  );
};

export const HRIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`hr-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <filter id="hr-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="85" rx="35" ry="8" fill="#000" opacity="0.1"/>
      
      <g filter="url(#hr-shadow)">
        {/* Main person - center */}
        <ellipse cx="50" cy="45" rx="12" ry="15" fill={`url(#hr-grad-${variant})`}/>
        <circle cx="50" cy="28" r="10" fill={`url(#hr-grad-${variant})`}/>
        <circle cx="50" cy="28" r="8" fill={color.light}/>
        
        {/* Left person */}
        <ellipse cx="30" cy="52" rx="10" ry="12" fill={color.accent} opacity="0.7"/>
        <circle cx="30" cy="38" r="8" fill={color.accent} opacity="0.7"/>
        <circle cx="30" cy="38" r="6" fill={color.light} opacity="0.7"/>
        
        {/* Right person */}
        <ellipse cx="70" cy="52" rx="10" ry="12" fill={color.accent} opacity="0.7"/>
        <circle cx="70" cy="38" r="8" fill={color.accent} opacity="0.7"/>
        <circle cx="70" cy="38" r="6" fill={color.light} opacity="0.7"/>
      </g>
      
      {/* Connection lines */}
      <path d="M 40 45 Q 45 40 50 40" stroke={color.light} strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M 60 45 Q 55 40 50 40" stroke={color.light} strokeWidth="2" fill="none" opacity="0.5"/>
    </svg>
  );
};

export const AccountingIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`acc-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <filter id="acc-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="85" rx="30" ry="8" fill="#000" opacity="0.1"/>
      
      <g filter="url(#acc-shadow)">
        {/* Chart bars - 3D effect */}
        {/* Bar 1 */}
        <rect x="25" y="55" width="12" height="25" fill={color.accent} rx="2"/>
        <rect x="25" y="53" width="12" height="25" fill={`url(#acc-grad-${variant})`} rx="2"/>
        <rect x="25" y="53" width="12" height="3" fill={color.light}/>
        
        {/* Bar 2 */}
        <rect x="44" y="40" width="12" height="40" fill={color.accent} rx="2"/>
        <rect x="44" y="38" width="12" height="40" fill={`url(#acc-grad-${variant})`} rx="2"/>
        <rect x="44" y="38" width="12" height="3" fill={color.light}/>
        
        {/* Bar 3 */}
        <rect x="63" y="48" width="12" height="32" fill={color.accent} rx="2"/>
        <rect x="63" y="46" width="12" height="32" fill={`url(#acc-grad-${variant})`} rx="2"/>
        <rect x="63" y="46" width="12" height="3" fill={color.light}/>
        
        {/* Arrow up */}
        <path d="M 80 35 L 85 40 L 83 40 L 83 50 L 77 50 L 77 40 L 75 40 Z" fill={color.light}/>
      </g>
      
      {/* Base line */}
      <line x1="20" y1="80" x2="80" y2="80" stroke={color.accent} strokeWidth="2" opacity="0.3"/>
    </svg>
  );
};

export const CRMIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`crm-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <filter id="crm-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="85" rx="35" ry="8" fill="#000" opacity="0.1"/>
      
      <g filter="url(#crm-shadow)">
        {/* Heart shape - 3D */}
        <path 
          d="M 50 70 C 50 70, 30 50, 30 40 C 30 30, 40 25, 45 30 C 47 32, 50 35, 50 35 C 50 35, 53 32, 55 30 C 60 25, 70 30, 70 40 C 70 50, 50 70, 50 70 Z"
          fill={color.accent}
        />
        <path 
          d="M 50 68 C 50 68, 30 48, 30 38 C 30 28, 40 23, 45 28 C 47 30, 50 33, 50 33 C 50 33, 53 30, 55 28 C 60 23, 70 28, 70 38 C 70 48, 50 68, 50 68 Z"
          fill={`url(#crm-grad-${variant})`}
        />
        
        {/* Shine effect */}
        <circle cx="42" cy="35" r="5" fill="#fff" opacity="0.4"/>
        <circle cx="45" cy="38" r="3" fill="#fff" opacity="0.3"/>
      </g>
      
      {/* Pulse rings */}
      <circle cx="50" cy="45" r="40" stroke={color.light} strokeWidth="2" fill="none" opacity="0.2"/>
      <circle cx="50" cy="45" r="48" stroke={color.light} strokeWidth="1.5" fill="none" opacity="0.1"/>
    </svg>
  );
};

export const SpeedIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'warning' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`speed-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
      </defs>
      
      <ellipse cx="50" cy="85" rx="35" ry="8" fill="#000" opacity="0.1"/>
      
      {/* Lightning bolt */}
      <path 
        d="M 55 20 L 40 50 L 50 50 L 45 75 L 65 45 L 55 45 Z"
        fill={`url(#speed-grad-${variant})`}
        stroke={color.accent}
        strokeWidth="2"
      />
      <circle cx="40" cy="30" r="2" fill={color.light}/>
      <circle cx="65" cy="35" r="1.5" fill={color.light}/>
    </svg>
  );
};

export const DataIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'success' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`data-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
      </defs>
      
      <ellipse cx="50" cy="85" rx="30" ry="8" fill="#000" opacity="0.1"/>
      
      {/* Database stack */}
      <ellipse cx="50" cy="30" rx="25" ry="10" fill={color.accent}/>
      <ellipse cx="50" cy="28" rx="25" ry="10" fill={`url(#data-grad-${variant})`}/>
      <rect x="25" y="28" width="50" height="15" fill={`url(#data-grad-${variant})`}/>
      <ellipse cx="50" cy="43" rx="25" ry="10" fill={color.accent}/>
      <rect x="25" y="43" width="50" height="15" fill={`url(#data-grad-${variant})`}/>
      <ellipse cx="50" cy="58" rx="25" ry="10" fill={color.accent}/>
      <ellipse cx="50" cy="56" rx="25" ry="10" fill={`url(#data-grad-${variant})`}/>
      
      {/* Checkmark */}
      <circle cx="70" cy="65" r="12" fill={color.light}/>
      <path d="M 65 65 L 68 68 L 75 60" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  );
};

export const IntegrationIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'secondary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`int-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
      </defs>
      
      <ellipse cx="50" cy="85" rx="35" ry="8" fill="#000" opacity="0.1"/>
      
      {/* Connected nodes */}
      <circle cx="30" cy="35" r="12" fill={`url(#int-grad-${variant})`}/>
      <circle cx="70" cy="35" r="12" fill={`url(#int-grad-${variant})`}/>
      <circle cx="50" cy="60" r="12" fill={`url(#int-grad-${variant})`}/>
      
      {/* Connection lines */}
      <line x1="38" y1="40" x2="46" y2="55" stroke={color.base} strokeWidth="3"/>
      <line x1="62" y1="40" x2="54" y2="55" stroke={color.base} strokeWidth="3"/>
      <line x1="42" y1="35" x2="58" y2="35" stroke={color.base} strokeWidth="3"/>
      
      {/* Inner circles */}
      <circle cx="30" cy="35" r="6" fill={color.light}/>
      <circle cx="70" cy="35" r="6" fill={color.light}/>
      <circle cx="50" cy="60" r="6" fill={color.light}/>
    </svg>
  );
};

export const ScaleIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`scale-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
      </defs>
      
      <ellipse cx="50" cy="85" rx="35" ry="8" fill="#000" opacity="0.1"/>
      
      {/* Trend arrow going up with boxes */}
      <rect x="25" y="60" width="15" height="15" fill={`url(#scale-grad-${variant})`} rx="2"/>
      <rect x="42" y="48" width="15" height="27" fill={`url(#scale-grad-${variant})`} rx="2"/>
      <rect x="59" y="35" width="15" height="40" fill={`url(#scale-grad-${variant})`} rx="2"/>
      
      {/* Arrow */}
      <path d="M 40 40 L 75 25 L 72 30 L 80 28 L 75 35 L 72 30" fill={color.light} stroke={color.accent} strokeWidth="2"/>
    </svg>
  );
};

export const RocketIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`rocket-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <filter id="rocket-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="88" rx="25" ry="6" fill="#000" opacity="0.15"/>
      
      <g filter="url(#rocket-shadow)">
        {/* Rocket body */}
        <ellipse cx="50" cy="40" rx="18" ry="25" fill={`url(#rocket-grad-${variant})`}/>
        
        {/* Rocket tip */}
        <path d="M 50 15 L 35 35 L 65 35 Z" fill={color.accent}/>
        
        {/* Window */}
        <circle cx="50" cy="38" r="7" fill={color.light}/>
        <circle cx="50" cy="38" r="5" fill="#fff" opacity="0.6"/>
        
        {/* Fins */}
        <path d="M 32 50 L 25 65 L 32 60 Z" fill={color.accent}/>
        <path d="M 68 50 L 75 65 L 68 60 Z" fill={color.accent}/>
        
        {/* Fire/Exhaust */}
        <ellipse cx="50" cy="68" rx="12" ry="8" fill="#ff6b6b" opacity="0.8"/>
        <ellipse cx="50" cy="72" rx="10" ry="6" fill="#feca57" opacity="0.9"/>
        <ellipse cx="50" cy="76" rx="7" ry="4" fill="#fff" opacity="0.7"/>
        
        {/* Sparkles */}
        <circle cx="40" cy="75" r="2" fill="#feca57" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="60" cy="78" r="2" fill="#feca57" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.2s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  );
};

export const LightbulbIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'warning' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bulb-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <radialGradient id={`bulb-glow-${variant}`}>
          <stop offset="0%" stopColor={color.light} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={color.light} stopOpacity="0"/>
        </radialGradient>
        <filter id="bulb-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="88" rx="20" ry="5" fill="#000" opacity="0.15"/>
      
      {/* Glow effect */}
      <circle cx="50" cy="38" r="35" fill={`url(#bulb-glow-${variant})`}>
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <g filter="url(#bulb-shadow)">
        {/* Bulb shape */}
        <circle cx="50" cy="35" r="20" fill={`url(#bulb-grad-${variant})`}/>
        <path d="M 35 48 Q 35 55, 40 58 L 40 65 Q 40 68, 43 68 L 57 68 Q 60 68, 60 65 L 60 58 Q 65 55, 65 48 L 35 48 Z" fill={color.base}/>
        
        {/* Base */}
        <rect x="43" y="68" width="14" height="6" rx="2" fill={color.accent}/>
        <rect x="43" y="74" width="14" height="4" rx="2" fill={color.accent} opacity="0.8"/>
        
        {/* Light reflection */}
        <circle cx="43" cy="30" r="6" fill="#fff" opacity="0.5"/>
        <circle cx="56" cy="38" r="4" fill="#fff" opacity="0.3"/>
        
        {/* Light rays */}
        <line x1="25" y1="25" x2="18" y2="18" stroke={color.light} strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
        <line x1="75" y1="25" x2="82" y2="18" stroke={color.light} strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
        <line x1="20" y1="40" x2="12" y2="40" stroke={color.light} strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
        <line x1="80" y1="40" x2="88" y2="40" stroke={color.light} strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      </g>
    </svg>
  );
};

export const MobileIcon3D: React.FC<Icon3DProps> = ({ className = '', variant = 'primary' }) => {
  const colors = {
    primary: { base: '#0984e3', light: '#74b9ff', accent: '#0770c7' },
    secondary: { base: '#6c5ce7', light: '#a29bfe', accent: '#5641e0' },
    success: { base: '#00b894', light: '#55efc4', accent: '#00a383' },
    warning: { base: '#fdcb6e', light: '#ffeaa7', accent: '#e6b928' },
  };
  const color = colors[variant];

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`mobile-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.light} />
          <stop offset="100%" stopColor={color.base} />
        </linearGradient>
        <filter id="mobile-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow */}
      <ellipse cx="50" cy="88" rx="22" ry="5" fill="#000" opacity="0.2"/>
      
      <g filter="url(#mobile-shadow)">
        {/* Phone body */}
        <rect x="32" y="15" width="36" height="65" rx="6" fill={`url(#mobile-grad-${variant})`}/>
        
        {/* Screen */}
        <rect x="36" y="22" width="28" height="48" rx="2" fill="#fff" opacity="0.95"/>
        
        {/* Notch */}
        <rect x="44" y="18" width="12" height="3" rx="1.5" fill={color.accent}/>
        
        {/* Screen content - app icons */}
        <rect x="40" y="26" width="6" height="6" rx="1" fill={color.base} opacity="0.3"/>
        <rect x="48" y="26" width="6" height="6" rx="1" fill={color.base} opacity="0.4"/>
        <rect x="56" y="26" width="6" height="6" rx="1" fill={color.base} opacity="0.35"/>
        
        <rect x="40" y="34" width="6" height="6" rx="1" fill={color.base} opacity="0.35"/>
        <rect x="48" y="34" width="6" height="6" rx="1" fill={color.base} opacity="0.4"/>
        <rect x="56" y="34" width="6" height="6" rx="1" fill={color.base} opacity="0.3"/>
        
        {/* Status bar */}
        <rect x="38" y="24" width="8" height="1" rx="0.5" fill={color.base} opacity="0.3"/>
        <rect x="58" y="24" width="4" height="1" rx="0.5" fill={color.base} opacity="0.3"/>
        
        {/* Bottom button */}
        <circle cx="50" cy="74" r="3" fill={color.accent}/>
        
        {/* Shine effect */}
        <rect x="34" y="17" width="3" height="25" rx="1.5" fill="#fff" opacity="0.2"/>
        
        {/* Cloud icons floating around */}
        <g opacity="0.6">
          <ellipse cx="25" cy="35" rx="4" ry="3" fill={color.light}>
            <animate attributeName="cy" values="35;32;35" dur="3s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="75" cy="45" rx="4" ry="3" fill={color.light}>
            <animate attributeName="cy" values="45;42;45" dur="3.5s" repeatCount="indefinite"/>
          </ellipse>
        </g>
      </g>
    </svg>
  );
};
