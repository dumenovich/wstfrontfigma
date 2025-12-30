import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { LogoVariant2 } from "./LogoVariants";

interface LoginProps {
  onBack?: () => void;
}

export default function Login({ onBack }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password, rememberMe });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#1A3333]">
      {/* Nature silhouette background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#8B9FA8] via-[#6B8690] to-[#4A6670]" />
      
      {/* Top silhouette layer - trees and animals */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top tree silhouettes */}
        <div className="absolute top-0 left-0 w-full h-[40%]">
          {/* Left tree cluster */}
          <svg viewBox="0 0 200 150" className="absolute top-0 left-0 w-[35%] h-full" preserveAspectRatio="none">
            <path d="M 0,80 Q 20,60 40,50 Q 60,40 80,35 Q 100,30 120,40 Q 140,50 160,70 Q 180,90 200,120 L 200,150 L 0,150 Z" fill="#0A1F1F" opacity="0.9" />
          </svg>
          
          {/* Right tree cluster */}
          <svg viewBox="0 0 200 150" className="absolute top-0 right-0 w-[35%] h-full" preserveAspectRatio="none">
            <path d="M 0,70 Q 20,50 40,45 Q 60,40 80,50 Q 100,60 120,55 Q 140,50 160,60 Q 180,70 200,90 L 200,150 L 0,150 Z" fill="#0A1F1F" opacity="0.9" />
          </svg>
        </div>

        {/* Bottom silhouette layer - ground and animals */}
        <div className="absolute bottom-0 left-0 w-full h-[35%]">
          {/* Ground with trees */}
          <svg viewBox="0 0 400 150" className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
            {/* Left tree/bush */}
            <path d="M 0,80 Q 20,70 35,65 Q 50,60 65,70 Q 80,80 90,90 L 90,150 L 0,150 Z" fill="#0D2626" opacity="0.95" />
            
            {/* Right tree with branches */}
            <path d="M 310,70 Q 320,60 330,55 Q 340,50 350,60 Q 360,70 370,80 Q 380,90 390,100 L 390,150 L 300,150 Z" fill="#0D2626" opacity="0.95" />
            
            {/* Ground line */}
            <path d="M 0,120 Q 100,115 200,120 Q 300,125 400,120 L 400,150 L 0,150 Z" fill="#0A1F1F" opacity="0.85" />
          </svg>

          {/* Left animal silhouette (antelope/gazelle) */}
          <div className="absolute bottom-[25%] left-[8%] w-24 h-24 opacity-90">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Body */}
              <ellipse cx="50" cy="65" rx="25" ry="18" fill="#0A1F1F" />
              {/* Head and neck */}
              <path d="M 60,60 Q 65,50 68,45 L 72,40 Q 73,35 74,32" stroke="#0A1F1F" strokeWidth="5" fill="none" />
              {/* Horns - curved */}
              <path d="M 70,32 Q 68,25 66,20 Q 65,15 64,12" stroke="#0A1F1F" strokeWidth="2" fill="none" />
              <path d="M 74,32 Q 76,25 78,20 Q 79,15 80,12" stroke="#0A1F1F" strokeWidth="2" fill="none" />
              {/* Legs */}
              <line x1="35" y1="75" x2="32" y2="95" stroke="#0A1F1F" strokeWidth="3" />
              <line x1="45" y1="78" x2="43" y2="95" stroke="#0A1F1F" strokeWidth="3" />
              <line x1="55" y1="78" x2="57" y2="95" stroke="#0A1F1F" strokeWidth="3" />
              <line x1="65" y1="75" x2="68" y2="95" stroke="#0A1F1F" strokeWidth="3" />
            </svg>
          </div>

          {/* Right animal silhouette (deer) */}
          <div className="absolute bottom-[25%] right-[12%] w-28 h-28 opacity-90">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Body */}
              <ellipse cx="45" cy="68" rx="22" ry="16" fill="#0A1F1F" />
              {/* Neck */}
              <path d="M 55,63 L 62,50" stroke="#0A1F1F" strokeWidth="6" fill="none" />
              {/* Head */}
              <ellipse cx="65" cy="45" rx="8" ry="10" fill="#0A1F1F" />
              {/* Antlers - branched */}
              <path d="M 63,40 L 60,30 M 60,30 L 55,28 M 60,30 L 58,25" stroke="#0A1F1F" strokeWidth="2" fill="none" />
              <path d="M 67,40 L 70,28 M 70,28 L 75,26 M 70,28 L 72,23" stroke="#0A1F1F" strokeWidth="2" fill="none" />
              {/* Legs */}
              <line x1="30" y1="78" x2="28" y2="95" stroke="#0A1F1F" strokeWidth="3" />
              <line x1="40" y1="80" x2="38" y2="95" stroke="#0A1F1F" strokeWidth="3" />
              <line x1="50" y1="80" x2="52" y2="95" stroke="#0A1F1F" strokeWidth="3" />
              <line x1="60" y1="78" x2="62" y2="95" stroke="#0A1F1F" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Flying birds */}
        <div className="absolute top-[15%] left-[20%] opacity-70">
          <svg width="40" height="20" viewBox="0 0 40 20">
            <path d="M 5,10 Q 10,5 15,8 Q 20,11 25,8 Q 30,5 35,10" stroke="#0A1F1F" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[20%] left-[25%] opacity-60">
          <svg width="30" height="15" viewBox="0 0 30 15">
            <path d="M 3,7 Q 7,3 11,6 Q 15,9 19,6 Q 23,3 27,7" stroke="#0A1F1F" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
        <div className="absolute top-[12%] right-[30%] opacity-65">
          <svg width="35" height="18" viewBox="0 0 35 18">
            <path d="M 4,9 Q 9,4 14,7 Q 18,10 23,7 Q 28,4 33,9" stroke="#0A1F1F" strokeWidth="1.3" fill="none" />
          </svg>
        </div>
      </div>

      {/* Mountain layers in background */}
      <div className="fixed inset-0 pointer-events-none">
        <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Far mountains */}
          <path d="M 0,400 Q 200,320 400,360 Q 600,320 800,380 Q 1000,340 1200,400 L 1200,800 L 0,800 Z" fill="#5A7A84" opacity="0.3" />
          {/* Mid mountains */}
          <path d="M 0,450 Q 300,380 500,420 Q 700,380 900,440 Q 1100,400 1200,460 L 1200,800 L 0,800 Z" fill="#4A6A74" opacity="0.4" />
        </svg>
      </div>

      {/* Login Form */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Back button */}
          {onBack && (
            <button
              onClick={onBack}
              className="mb-6 text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Назад
            </button>
          )}

          {/* Glassmorphic card */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Logo/Title pill at top */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full border border-white/30 shadow-lg">
              <div className="flex items-center gap-2">
                <LogoVariant2 className="w-5 h-5" />
                <span className="text-[#0A1F1F] font-medium">Login</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              {/* Username input */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-white/5 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/20 h-14 rounded-full pl-5 pr-12 backdrop-blur-sm"
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              </div>

              {/* Password input */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/5 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/20 h-14 rounded-full pl-5 pr-24 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white/60 hover:text-white/80 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  <Lock className="w-5 h-5 text-white/60" />
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-white/40 data-[state=checked]:bg-[#4D9999] data-[state=checked]:border-[#4D9999]"
                  />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login button */}
              <Button
                type="submit"
                className="w-full bg-white/85 hover:bg-white text-[#0A1F1F] border-0 h-14 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
              >
                Login
              </Button>

              {/* Register link */}
              <div className="text-center text-white/80">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-white hover:text-[#66B2B2] transition-colors font-medium"
                >
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
