import * as React from "react";
import { FileText, Download, Eye, X, Sparkles } from "lucide-react";
 
interface PriceListButtonProps {
  onPageChange: (pageId: string) => void;
}
 
const PDF_URL = '/pricelist.pdf';
const PDF_FILENAME = 'Beautyy-Planet-Price-List.pdf';
 
export const PriceListButton: React.FC<PriceListButtonProps> = ({ onPageChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
 
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };
 
  const handleView = () => {
    onPageChange("pricelist");
    setIsOpen(false);
  };
 
  return (
    <>
      <style>{`
        @keyframes pricelistPulse {
          0%   { transform: scale(1);    box-shadow: 0 0 0 0   rgba(234,179,8,0.6); }
          50%  { transform: scale(1.13); box-shadow: 0 0 0 12px rgba(234,179,8,0);  }
          100% { transform: scale(1);    box-shadow: 0 0 0 0   rgba(234,179,8,0);   }
        }
        .pricelist-pulse {
          animation: pricelistPulse 2s ease-in-out infinite;
        }
      `}</style>
 
      <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3">
 
        {/* Popup Card */}
        {isOpen && (
          <div className="bg-[#111] border border-yellow-500/30 rounded-2xl shadow-2xl w-72 overflow-hidden">
 
            {/* Card Header */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-b border-yellow-500/20 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                  Price List
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition p-0.5"
              >
                <X size={14} />
              </button>
            </div>
 
            {/* Card Body */}
            <div className="p-4 space-y-3">
              <p className="text-gray-400 text-[11px] leading-relaxed">
                View complete pricing for Makeup, Hair, Nails, Waxing, Facials & more.
              </p>
 
              {/* View Button */}
              <button
                onClick={handleView}
                className="w-full flex items-center gap-3 px-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 group"
              >
                <Eye size={15} />
                <span className="flex-1 text-left">View Price List</span>
                <span className="text-[10px] opacity-60 group-hover:opacity-100">→</span>
              </button>
 
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/30 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200"
              >
                <Download size={15} className="text-yellow-400" />
                <span className="flex-1 text-left">Download PDF</span>
                <span className="text-[10px] text-gray-500">Free</span>
              </button>
            </div>
 
            {/* Card Footer */}
            <div className="px-4 pb-3 text-center">
              <span className="text-[10px] text-gray-600">
                Updated 2025 · All services included
              </span>
            </div>
          </div>
        )}
 
        {/* Floating Trigger Button — continuously pulses when popup is closed */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 ${
            isOpen
              ? 'bg-white text-black'
              : 'bg-yellow-500 text-black pricelist-pulse'
          }`}
          aria-label="Price List"
        >
          {isOpen ? <X size={20} /> : <FileText size={22} />}
        </button>
 
        {/* Label below button */}
        {!isOpen && (
          <span className="text-[9px] text-yellow-500 uppercase tracking-widest font-bold text-center w-14">
            Prices
          </span>
        )}
 
      </div>
    </>
  );
};