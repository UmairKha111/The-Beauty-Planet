import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export const WhatsappButton = () => {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <MessageCircle
        size={30}
        className="text-white"
      />
    </a>
  );
};