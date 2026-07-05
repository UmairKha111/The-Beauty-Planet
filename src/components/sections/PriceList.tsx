import React, { useState } from 'react';
import { Download, FileText, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
 
const PDF_URL = '/pricelist.pdf';
const PDF_FILENAME = 'Beautyy-Planet-Price-List.pdf';
 
export const PriceList: React.FC = () => {
  const [showViewer, setShowViewer] = useState(false);
 
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 
  return (
    <div className="min-h-screen bg-black">
 
      {/* Hero */}
      <div className="bg-[#0d0d0d] border-b border-white/10 text-center py-16 px-4">
        <span className="text-[10px] uppercase font-bold text-yellow-500 tracking-[0.3em] block mb-3">
          The Beautyy Planet
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Our Price List
        </h1>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Complete pricing for all services — Makeup, Hair, Nails, Waxing & more.
        </p>
      </div>
 
      {/* Action Cards */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
 
        {/* View Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center">
              <Eye size={28} className="text-pink-400" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-bold text-lg text-white mb-1">View Price List</h2>
              <p className="text-xs text-gray-400">Browse all services and prices directly on this page.</p>
            </div>
            <button
              onClick={() => setShowViewer(true)}
              className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
            >
              <Eye size={14} />
              View PDF
            </button>
          </div>
        </div>
 
        {/* Download Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <Download size={28} className="text-emerald-400" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-bold text-lg text-white mb-1">Download Price List</h2>
              <p className="text-xs text-gray-400">Save the PDF on your device to view anytime, even offline.</p>
            </div>
            <button
              onClick={handleDownload}
              className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
            >
              <Download size={14} />
              Download PDF
            </button>
          </div>
        </div>
 
        <p className="text-center text-[11px] text-gray-600">
          Last updated · 2025 · All prices are inclusive of applicable taxes.
        </p>
      </div>
 
      {/* PDF Viewer Modal */}
      {showViewer && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
 
          {/* Modal Header */}
          <div className="bg-[#111] border-b border-white/10 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-yellow-500" />
              <span className="text-xs text-white font-semibold">Beautyy Planet — Price List</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded text-xs font-bold transition"
              >
                <Download size={13} />
                Download
              </button>
              <button
                onClick={() => setShowViewer(false)}
                className="p-1.5 rounded hover:bg-white/10 text-white transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>
 
          {/* ✅ PDF embed — works better than iframe */}
          <div className="flex-1 overflow-hidden">
            <object
              data={PDF_URL}
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback if object tag doesn't work */}
              <div className="flex flex-col items-center justify-center h-full text-center px-4 gap-6">
                <FileText size={48} className="text-yellow-500" />
                <div>
                  <p className="text-white font-bold text-lg mb-2">PDF Preview Not Supported</p>
                  <p className="text-gray-400 text-sm mb-6">
                    Aapka browser inline PDF preview support nahi karta.<br />
                    Neeche se download karo aur dekho.
                  </p>
                </div>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition"
                >
                  <Download size={16} />
                  Download Price List PDF
                </button>
              </div>
            </object>
          </div>
 
        </div>
      )}
    </div>
  );
};