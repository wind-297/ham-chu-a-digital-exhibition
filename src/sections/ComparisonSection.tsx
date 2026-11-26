import React from 'react';
import { shelterComparisons } from '../data/comparison';
import { ArrowRightLeft } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="so-sanh" className="py-16 sm:py-24 border-b border-archive-border bg-archive-paper scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            CHƯƠNG 07 • HISTORICAL COMPARISON
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            HẦM CHỮ A TRONG HỆ THỐNG CÔNG TRÌNH PHÒNG TRÁNH
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Phân định khoa học giữa hầm chữ A, hố cá nhân, hầm tập thể, giao thông hào và đại công trình địa đạo.
          </p>
        </div>

        {/* Comparison Matrix Table for Desktop & Tablet */}
        <div className="hidden md:block bg-archive-parchment rounded-lg border-2 border-archive-border shadow-archive archival-border overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-sans border-collapse">
              <thead>
                <tr className="bg-archive-ivory border-b border-archive-border text-left font-serif font-bold text-archive-charcoal text-[13px]">
                  <th className="p-4 w-1/5">Loại hình công trình</th>
                  <th className="p-4 w-1/5">Quy mô sức chứa</th>
                  <th className="p-4 w-1/4">Đặc điểm hình thái</th>
                  <th className="p-4 w-1/6">Thời gian sử dụng</th>
                  <th className="p-4">Khác biệt với Hầm chữ A</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-archive-border/60">
                {shelterComparisons.map((item) => {
                  const isCurrent = item.id === 'ham-chu-a';
                  return (
                    <tr 
                      key={item.id} 
                      className={`transition-colors ${
                        isCurrent 
                          ? 'bg-archive-olive/10 font-medium' 
                          : 'hover:bg-archive-ivory/50'
                      }`}
                    >
                      <td className="p-4 font-serif font-bold text-archive-charcoal">
                        <div className="flex items-center gap-2">
                          {isCurrent && <span className="w-2 h-2 rounded-full bg-archive-terracotta"></span>}
                          {item.name}
                        </div>
                        <span className="text-[10px] font-mono text-archive-stone block mt-0.5">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 text-archive-charcoal/90">
                        {item.capacity}
                      </td>
                      <td className="p-4 text-archive-charcoal/90 leading-relaxed">
                        {item.morphology}
                      </td>
                      <td className="p-4 text-archive-umber font-mono text-[11px]">
                        {item.duration}
                      </td>
                      <td className="p-4 text-archive-olive text-[11.5px] leading-relaxed">
                        {item.distinctionFromAFrame}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View: Cards Selector with Detailed Panel */}
        <div className="md:hidden space-y-4 mb-8">
          {shelterComparisons.map((item) => (
            <div 
              key={item.id}
              className={`p-4 rounded-lg border ${
                item.id === 'ham-chu-a' 
                  ? 'bg-archive-ivory border-archive-olive' 
                  : 'bg-archive-parchment border-archive-border'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif font-bold text-sm text-archive-charcoal">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono uppercase text-archive-stone">
                  {item.category}
                </span>
              </div>
              <div className="text-xs space-y-1 text-archive-charcoal/90">
                <p><strong>Sức chứa:</strong> {item.capacity}</p>
                <p><strong>Hình thái:</strong> {item.morphology}</p>
                <p className="text-archive-olive pt-1 border-t border-archive-border/40">
                  <strong>Phân biệt:</strong> {item.distinctionFromAFrame}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Editorial Insight Callout */}
        <div className="p-5 sm:p-6 bg-archive-ivory rounded-lg border border-archive-border flex items-start gap-3">
          <ArrowRightLeft className="w-5 h-5 text-archive-terracotta shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed text-archive-charcoal">
            <strong className="text-archive-charcoal font-bold block mb-1">
              Tính liên kết hữu cơ trong thế trận phòng không nhân dân:
            </strong>
            <p className="text-archive-umber">
              Các loại hình trú ẩn trên không tồn tại biệt lập mà bổ trợ hoàn hảo cho nhau: người đi đường kịp nhảy vào <em>hố cá nhân</em>; 
              gia đình và học sinh trú ngụ trong <em>hầm chữ A</em>; ca kíp công nhân vận hành trong <em>hầm tập thể</em>; 
              toàn bộ được kết nối xuyên suốt qua mạng lưới <em>giao thông hào</em> và phát triển đỉnh cao thành <em>địa đạo trường kỳ</em> tại những tọa độ lửa khốc liệt như Vĩnh Linh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
