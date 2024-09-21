export default function IconButton({ children, style, onclick }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onclick();
      }}
      style={{
        backgroundColor: "transparent",
        border: "none",
        paddingRight: "10px",
        paddingLeft: "10px",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "red",
        },
        ...style,
      }}
    >
      {children}
    </button>
  );
}
