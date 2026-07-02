import { motion } from "motion/react";
import * as React from "react";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  variant = "gold",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 rounded-none overflow-hidden cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    gold: "bg-gold-400 text-black hover:bg-white hover:text-black border border-gold-400 font-semibold shadow-lg shadow-gold-500/10 hover:shadow-white/10",
    outline: "bg-transparent text-gold-400 border border-gold-500/50 hover:border-gold-400 hover:text-white hover:bg-gold-400/5",
    dark: "bg-luxury-gray text-white border border-white/10 hover:border-gold-400 hover:text-gold-400",
    ghost: "bg-transparent text-white hover:text-gold-400 border border-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-xs sm:text-sm",
    lg: "px-8 py-4.5 text-sm sm:text-base tracking-widest",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${fullWidth ? "w-full" : "w-auto"} 
        ${className}
      `}
      {...props}
    >
      {/* Glare/Shine Effect on Hover */}
      {variant === "gold" && (
        <motion.span
          className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-100%]"
          animate={{
            translateX: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 4,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && <span className="flex items-center">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="flex items-center">{icon}</span>}
      </span>
    </motion.button>
  );
};
