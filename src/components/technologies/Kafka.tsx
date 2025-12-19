export default function KafkaIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Apache Kafka"
    >
      {/* Main vertical line */}
      <line x1="128" y1="40" x2="128" y2="216" stroke="#000" strokeWidth="16" />

      {/* Left branches */}
      <line x1="128" y1="88" x2="72" y2="128" stroke="#000" strokeWidth="12" />
      <line x1="128" y1="168" x2="72" y2="128" stroke="#000" strokeWidth="12" />

      {/* Right branches */}
      <line x1="128" y1="88" x2="184" y2="128" stroke="#000" strokeWidth="12" />
      <line x1="128" y1="168" x2="184" y2="128" stroke="#000" strokeWidth="12" />

      {/* Nodes */}
      <circle cx="128" cy="40" r="14" fill="#000" />
      <circle cx="128" cy="128" r="16" fill="#000" />
      <circle cx="128" cy="216" r="14" fill="#000" />

      <circle cx="72" cy="128" r="14" fill="#000" />
      <circle cx="184" cy="128" r="14" fill="#000" />

      <circle cx="128" cy="88" r="12" fill="#000" />
      <circle cx="128" cy="168" r="12" fill="#000" />
    </svg>
  );
}
