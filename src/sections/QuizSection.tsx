import React, { useState } from 'react';
import { quizQuestions } from '../data/quiz';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (showResults) return; // Prevent changing after submission
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isAllAnswered = answeredCount === quizQuestions.length;

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <section id="kiem-tra-kien-thuc" className="quiz-section py-16 sm:py-24 border-b border-archive-border bg-archive-parchment scroll-mt-16 paper-grain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-archive-terracotta font-semibold mb-2">
            <span className="w-6 h-px bg-archive-terracotta"></span>
            KNOWLEDGE CHECK • KIỂM TRA HIỂU BIẾT
            <span className="w-6 h-px bg-archive-terracotta"></span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-archive-charcoal leading-tight">
            TRẢI NGHIỆM TÌM HIỂU HIỆN VẬT
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-archive-umber mt-2">
            Củng cố kiến thức lịch sử về hầm trú ẩn chữ A thông qua 5 câu hỏi trắc nghiệm giáo dục được trích xuất từ tư liệu bảo tàng.
          </p>
        </div>

        {/* Questions Container */}
        <div className="space-y-8">
          {quizQuestions.map((q, qIndex) => {
            const chosen = selectedAnswers[q.id];
            const isAnswered = chosen !== undefined;
            const isCorrect = isAnswered && chosen === q.correctIndex;

            return (
              <div 
                key={q.id}
                className="p-6 bg-archive-paper rounded-lg border-2 border-archive-border shadow-archive archival-border"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-archive-ivory border border-archive-border text-archive-olive">
                    CÂU {qIndex + 1} / {quizQuestions.length}
                  </span>
                  {showResults && (
                    <span className={`text-xs font-mono font-bold flex items-center gap-1 ${
                      isCorrect ? 'text-green-700' : 'text-archive-terracotta'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {isCorrect ? 'Chính xác' : 'Chưa chính xác'}
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-archive-charcoal mb-4 leading-snug">
                  {q.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2.5">
                  {q.options.map((option, optIdx) => {
                    const isSelected = chosen === optIdx;
                    let optionStyle = 'bg-archive-parchment border-archive-border hover:bg-archive-ivory text-archive-charcoal';

                    if (showResults) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'bg-green-50 border-green-600 text-green-950 font-medium ring-1 ring-green-600';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-red-50 border-archive-terracotta text-red-950';
                      } else {
                        optionStyle = 'bg-archive-parchment/50 border-archive-border/40 text-archive-stone opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-archive-olive text-archive-paper border-archive-olive font-medium shadow-2xs';
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`p-3 sm:p-3.5 rounded border text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-3 ${optionStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-full border text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                          isSelected && !showResults 
                            ? 'bg-archive-paper text-archive-olive border-archive-paper' 
                            : 'border-archive-border text-archive-stone'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-relaxed">{option}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation upon result reveal */}
                {showResults && (
                  <div className="mt-4 p-4 bg-archive-parchment rounded border-l-4 border-l-archive-olive border border-archive-border/80 text-xs text-archive-charcoal leading-relaxed animate-in fade-in duration-200">
                    <strong className="text-archive-olive block mb-1 font-mono uppercase tracking-wider text-[11px]">
                      Giải thích lịch sử:
                    </strong>
                    <p>{q.explanation}</p>
                    <div className="mt-2 text-[10px] font-mono text-archive-stone">
                      Nguồn dẫn chiếu: {q.sourceReference}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Controls & Result Score Card */}
        <div className="mt-10 p-6 bg-archive-paper rounded-lg border-2 border-archive-border shadow-archive archival-border text-center">
          {!showResults ? (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-archive-umber">
                Bạn đã hoàn thành <strong className="text-archive-charcoal font-bold">{answeredCount}</strong> trên tổng số <strong className="text-archive-charcoal font-bold">{quizQuestions.length}</strong> câu hỏi.
              </p>
              <button
                disabled={!isAllAnswered}
                onClick={() => setShowResults(true)}
                className={`px-6 py-3 rounded font-medium text-xs sm:text-sm font-mono uppercase tracking-wider transition-all shadow-sm ${
                  isAllAnswered 
                    ? 'bg-archive-olive text-archive-paper hover:bg-archive-olive/90 cursor-pointer' 
                    : 'bg-archive-border text-archive-stone cursor-not-allowed'
                }`}
              >
                {isAllAnswered ? 'Xem kết quả & Lời giải thích' : 'Vui lòng hoàn thành đủ 5 câu hỏi'}
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-200">
              <Award className="w-10 h-10 mx-auto text-archive-terracotta" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-archive-charcoal">
                  Kết Quả: {score} / {quizQuestions.length} Câu Trả Lời Đúng
                </h3>
                <p className="text-xs sm:text-sm text-archive-umber mt-1">
                  {score === 5 
                    ? 'Xuất sắc! Bạn đã nắm vững toàn diện nguồn gốc, bối cảnh và ý nghĩa lịch sử của hầm chữ A.'
                    : 'Rất tốt! Bạn đã tiếp thu được các kiến thức cốt lõi về công tác phòng không nhân dân.'
                  }
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-archive-olive text-archive-paper hover:bg-archive-olive/90 text-xs font-mono uppercase transition-colors shadow-2xs"
                >
                  <RotateCcw className="w-4 h-4" />
                  Làm lại bài kiểm tra
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
