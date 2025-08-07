interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ size = 'medium' }: LogoProps) {
  // Size mapping
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className={`bg-[#ffde00] rounded-full p-3 ${sizeClasses[size]} flex items-center justify-center`}>
      <span className="font-bold text-xl text-[#4a0d2d]">PIE</span>
    </div>
  );
}
