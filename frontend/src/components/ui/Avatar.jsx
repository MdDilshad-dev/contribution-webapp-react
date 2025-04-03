export const Avatar = ({ src, alt, size = "40px" }) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-full border overflow-hidden bg-gray-200"
      style={{ width: size, height: size }}
    >
      {src ? <AvatarImage src={src} alt={alt} /> : <AvatarFallback alt={alt} />}
    </div>
  );
};

export const AvatarImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "User Avatar"}
      className="w-full h-full object-cover"
    />
  );
};

export const AvatarFallback = ({ alt }) => {
  const initials = alt ? alt.charAt(0).toUpperCase() : "U";
  return (
    <div className="flex items-center justify-center w-full h-full text-gray-600 text-lg font-semibold">
      {initials}
    </div>
  );
};
