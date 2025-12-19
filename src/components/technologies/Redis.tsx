export default function RedisIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Redis"
    >
      {/* Bottom layer */}
      <path
        d="M32 176l96 48 96-48-96-48-96 48z"
        fill="#9B1C16"
      />
      <path
        d="M32 176v32l96 48v-32l-96-48z"
        fill="#7A1410"
      />
      <path
        d="M224 176v32l-96 48v-32l96-48z"
        fill="#B22A22"
      />

      {/* Middle layer */}
      <path
        d="M32 112l96 48 96-48-96-48-96 48z"
        fill="#C6302B"
      />
      <path
        d="M32 112v32l96 48v-32l-96-48z"
        fill="#9F2320"
      />
      <path
        d="M224 112v32l-96 48v-32l96-48z"
        fill="#E0443E"
      />

      {/* Top layer */}
      <path
        d="M32 48l96 48 96-48-96-48-96 48z"
        fill="#DC382D"
      />
      <path
        d="M32 48v32l96 48v-32L32 48z"
        fill="#B52A23"
      />
      <path
        d="M224 48v32l-96 48v-32l96-48z"
        fill="#F14F44"
      />

      {/* Redis star symbol */}
      <path
        d="M128 74l6 12 14 2-10 9 2 14-12-6-12 6 2-14-10-9 14-2 6-12z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
