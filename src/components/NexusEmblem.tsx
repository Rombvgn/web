import React from 'react';

interface NexusEmblemProps {
  className?: string;
  size?: number;
  interactive?: boolean;
  activeNode?: string | null;
  onSelectNode?: (nodeKey: string) => void;
}

export const NexusEmblem: React.FC<NexusEmblemProps> = ({
  className = '',
  size = 48,
  interactive = false,
  activeNode = null,
  onSelectNode,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Nexus Cloud Emblem"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="arcGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gradients matching user emblem */}
        <linearGradient id="hexOuterGrad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="hexInnerGrad" x1="40" y1="30" x2="160" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#021526" />
        </linearGradient>

        <linearGradient id="cloudGrad" x1="60" y1="60" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        <linearGradient id="arcGrad" x1="30" y1="120" x2="180" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="30%" stopColor="#fbbf24" />
          <stop offset="70%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        <linearGradient id="cubeGrad" x1="85" y1="85" x2="115" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* Outer Hexagon Bevel */}
      <polygon
        points="100,14 174,56 174,144 100,186 26,144 26,56"
        fill="url(#hexOuterGrad)"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeOpacity="0.8"
      />

      {/* Inner Recessed Hexagon Field */}
      <polygon
        points="100,24 164,61 164,139 100,176 36,139 36,61"
        fill="url(#hexInnerGrad)"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />

      {/* Central Cloud Silhouette with Glowing Border */}
      <path
        d="M68,118 C58,118 52,109 54,99 C55,90 62,84 71,84 C73,72 85,63 98,64 C109,65 119,73 121,83 C129,83 136,88 138,96 C140,105 134,118 123,118 Z"
        fill="#041226"
        stroke="#38bdf8"
        strokeWidth="3.5"
        filter="url(#coreGlow)"
      />

      {/* Circuit Traces inside Cloud */}
      <path
        d="M72,108 L86,108 L94,100"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="72" cy="108" r="3" fill="#38bdf8" />
      <circle cx="94" cy="100" r="3" fill="#67e8f9" />

      <path
        d="M128,108 L114,108 L106,100"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="128" cy="108" r="3" fill="#38bdf8" />
      <circle cx="106" cy="100" r="3" fill="#67e8f9" />

      <path
        d="M100,74 L100,86"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="100" cy="74" r="3" fill="#67e8f9" />

      {/* Central Geometric Hexagonal Crystal Cube */}
      <polygon
        points="100,88 116,97 116,115 100,124 84,115 84,97"
        fill="url(#cubeGrad)"
        stroke="#e0f2fe"
        strokeWidth="2"
      />
      {/* Cube Facets */}
      <line x1="100" y1="88" x2="100" y2="106" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="100" y1="106" x2="84" y2="115" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="100" y1="106" x2="116" y2="115" stroke="#082f49" strokeWidth="1.5" strokeOpacity="0.8" />
      
      {/* Cube Corner Nodes */}
      <circle cx="100" cy="88" r="2.5" fill="#ffffff" />
      <circle cx="116" cy="97" r="2.5" fill="#ffffff" />
      <circle cx="116" cy="115" r="2.5" fill="#ffffff" />
      <circle cx="100" cy="124" r="2.5" fill="#ffffff" />
      <circle cx="84" cy="115" r="2.5" fill="#ffffff" />
      <circle cx="84" cy="97" r="2.5" fill="#ffffff" />

      {/* Dynamic Golden / Amber Orbital Builder Arc Swoosh */}
      <path
        d="M42,126 C40,90 60,65 110,65 C150,65 178,85 168,118 C158,145 118,152 92,142 C72,134 50,138 42,126 Z"
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#arcGlow)"
      />

      {/* Secondary Tapered Golden Ribbon Trail */}
      <path
        d="M48,128 C52,110 70,88 120,78 C160,70 174,90 162,112 C152,130 120,138 98,134"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Interactive Micro Nodes (when in topology mode) */}
      {interactive && (
        <g className="cursor-pointer">
          <circle
            cx="100"
            cy="106"
            r="16"
            fill="transparent"
            onClick={() => onSelectNode && onSelectNode('core')}
          />
        </g>
      )}
    </svg>
  );
};
