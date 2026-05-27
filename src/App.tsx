/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Check,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Shield,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active FAQ state (holds the expanded FAQ index, or null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const portfolio = [
    {
      title: "아파트 빌라 욕실 하수구 막힘",
      desc: "고압세척과 내시경 진단으로 원인을 정확하게 파악 후 하수 배수 흐름을 정상화했습니다.",
      tag: "하수구 막힘",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "빌라 누수 탐지 및 배관 수리",
      desc: "벽면 내부 누수를 철저하게 탐지하여 누수 부품을 교체하고 최소한의 타일 철거로 깔끔히 복구했습니다.",
      tag: "누수 탐지",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "상가 악취 및 배수 문제 해결",
      desc: "노후 배관 내부의 음식물 잔여물과 모래를 초고압 제트로 세정 완료하여 오염과 악취를 완전히 박멸했습니다.",
      tag: "고압 세척",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const faq = [
    {
      q: "출장 견적은 무료인가요?",
      a: "기초적인 현장 상태 검토 및 긴급 유선 진단은 전면 무료로 제공해 드리고 있습니다. 다만 특수 장비 투입이나 정밀 동파/누수 전용 탐지기 전개가 필요한 전문적인 세부 진단은 사전에 고객님께 비용 안내를 마친 뒤 동의 하에만 청구되니 안심하셔도 좋습니다.",
    },
    {
      q: "누수 원인을 정확히 찾을 수 있나요?",
      a: "네, 당사는 디지털 초음파 누수 탐지기, 열화상 적외선 진단 장비, 배관 전용 첨단 고화질 내시경 등 고가의 특수 장비를 상시 가동하고 있어 눈에 보이지 않는 바닥벽면 속 미세 크랙 누수까지 99% 이상 신속하게 포착해 냅니다.",
    },
    {
      q: "작업 시간은 얼마나 걸리나요?",
      a: "일반 변기나 싱크대막힘, 욕실 배수구 통수 작업 등은 내시경 진단을 동반하더라도 평균 1시간~2시간 내외면 깔끔히 정리됩니다. 다만 벽면 내부나 마루 밑 심층 배관 교체가 수반되는 중합 누수 수리는 가옥 상태에 따라 수 시간에서 2주정도 정도 소요될 수 있습니다.",
    },
    {
      q: "A/S 및 기술 보증 기간은 어떻게 되나요?",
      a: "작업이 종료된 시점 이후에도 동일 사후 부위에 보수가 필요한 경우를 대비해 확실한 책임 감리를 약속드립니다. 시공 부분에 대해서는 기간별 무상 보증 수리를 지원해 신뢰를 더해 드립니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Wrench className="w-5 h-5 text-shadow" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">좋은설비</h1>
              <span className="text-[9px] text-blue-600 font-extrabold uppercase tracking-widest leading-none block mt-1">
                건축기사 국가자격증 보유
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">회사소개</a>
            <a href="#process" className="hover:text-blue-600 transition-colors duration-200">작업과정</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors duration-200">해결사례</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors duration-200">자주묻는질문</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">상담문의</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-right mr-2">
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-1">24시간 긴급출동 문의</p>
              <a href="tel:010-3016-8897" className="text-sm font-extrabold text-slate-900 italic hover:text-blue-600 transition-colors">
                010-3016-8897
              </a>
            </div>
            
            <a
              href="tel:010-3016-8897"
              className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-200 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              전화 연결하기
            </a>

            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 md:hidden"
          >
            <div className="p-6 flex flex-col gap-4 font-semibold text-slate-700">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-slate-100 flex items-center justify-between text-base"
              >
                <span>회사소개</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-slate-100 flex items-center justify-between text-base"
              >
                <span>작업과정</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-slate-100 flex items-center justify-between text-base"
              >
                <span>해결사례</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-slate-100 flex items-center justify-between text-base"
              >
                <span>자주묻는질문</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 flex items-center justify-between text-base text-blue-600"
              >
                <span>상담문의</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-blue-600" />
              </a>

              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a
                  href="tel:010-3016-8897"
                  className="w-full bg-blue-600 text-white text-center py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  문의 전화 : 010-3016-8897
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1974&auto=format&fit=crop"
            alt="설비 배경"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/70 to-slate-900/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2.5 md:px-8 md:py-3 bg-blue-500/15 border border-blue-500/30 text-blue-200 rounded-full text-xs sm:text-sm md:text-base font-extrabold tracking-wide mb-8 shadow-lg shadow-blue-500/5"
          >
            24시간 하수구막힘 / 변기막힘 / 싱크대막힘 / 누수탐지 출동 대기 서비스
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            막힌 곳은 시원하게 뚫고!<br />
            <span className="text-blue-400 italic">새는 곳은 확실하게 보수!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            배관 초소형 내시경 장비와 고압세척기로 보이지 않는 원인까지 완벽하게 진단합니다.
            과잉 부풀림 청구 없는 정직하고 투명한 요금 원칙을 지킵니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="sms:01030168897?body=안녕하세요 좋은설비 상담 문의드립니다.(주소와 문제사항을 알려주시면 빠른 상담이 가능합니다)"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              바로 문자 전송
            </a>

            <a
              href="https://open.kakao.com/o/snl8pCfi"
              target="_blank"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-bold shadow-xl shadow-amber-500/10 transition-all flex items-center justify-center gap-2"
              rel="noreferrer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              카카오톡 바로 문의
            </a>
          </motion.div>
        </div>

        {/* Elegant design client trust bar */}
        <div className="absolute bottom-6 left-0 w-full z-20 hidden md:block">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-10 p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl text-white shadow-2xl border border-slate-800">
              <div className="flex-1">
                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Customer Satisfaction</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  이미 수많은 가정과 사업장이 <span className="text-white font-semibold">좋은설비</span>의 첨단 진단을 경험했습니다.<br />믿음과 신뢰로 보답하겠습니다.
                </p>
              </div>
              <div className="flex gap-6 shrink-0">
                <div className="text-center">
                  <p className="text-2xl font-black text-blue-400">100점</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">고객만족점수</p>
                </div>
                <div className="w-[1px] bg-slate-800 h-10 align-middle self-center"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">해결확률</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">찾아주신 고객님께 !</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
              고객이 가장 걱정하는<br />
              <span className="text-blue-600">비용과 신뢰</span> 문제부터 <br />해결합니다.
            </h3>

            <div className="grid grid-cols-1 gap-4 mt-8">
              {[
                {
                  title: "합리적이고 일관된 투명 견적",
                  desc: "임의의 부풀림 요금 청구는 절대 없습니다.\n배관 내부 정밀 진단 결과를 고화질 내시경 화면으로 직접 대조해 드린 후, 승인받은 비용으로만 책임 시공합니다.",
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "첨단 누수 탐지 설비",
                  desc: "마구잡이 타일 철거나 바닥 분쇄는 옛말입니다.\n초음파 음향 탐지기와 복합 열화상 카메라를 고수하여 보이지 않는 부위를 정확히 찾아 최소한의 철거로 메웁니다.",
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "안심 시공 품질 책임 약정 보증",
                  desc: "혹시 모를 대형 관로 역류나 하자에 적극 대비하여 시공 이후에도 안심하고 쓰실 수 있도록 수리 표준 무상 사후 지원 보증서를 약속해 드립니다.",
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-blue-200/80 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 to-sky-400/20 rounded-[2.5rem] blur-xl opacity-40" />
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1887&auto=format&fit=crop"
              alt="설비 정밀 작업"
              className="relative rounded-[2rem] shadow-2xl object-cover h-[450px] md:h-[580px] w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-3">
            <span className="text-xs font-bold text-blue-600">SERVICE SYSTEM</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-16 tracking-tight text-slate-900">
            신속하고 원활한 4단계 진단 과정
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "긴급 문제 상황 상담 접수",
                desc: "하수구 막힘 / 누수 등 현황과 증상을 파악해 전문 수리 장비를 선별하고 급한 대처 방법을 유선 안내해 드립니다.",
              },
              {
                step: "02",
                title: "첨단 기기 무상 판독",
                desc: "고선명 관로 카메라인 내시경과 고감도 청음 장비를 투입하여 건물 내부 균열 요점을 정확히 잡습니다.",
              },
              {
                step: "03",
                title: "비파괴 최소 작업",
                desc: "바닥 부위 손상을 최소화하면서 고장이 난 메인 연결관만을 정밀 접합하거나 강력 세청을 완료합니다.",
              },
              {
                step: "04",
                title: "동행 배수 검증",
                desc: "수리 완료부와 물 흐름 배수 테스트를 즉석에서 화면으로 보여 드리며 마감 청결 후 완료 보증서를 교부합니다.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 text-left relative overflow-hidden group"
              >
                <div className="absolute top-2 right-4 text-7xl font-black text-slate-100 group-hover:text-blue-50/70 transition duration-300 select-none">
                  {item.step}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-5 relative z-10 font-mono">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-3 text-slate-900 relative z-10">{item.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Resolver Section */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-3">
                <span className="text-xs font-bold text-blue-600">RESOLVED CASES</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                최근 해결 포트폴리오
              </h3>
            </div>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed">
              설비 기사들이 자택과 가맹점 현장에서 최신형 내시경 분석과 정밀 청소를 동반해 해결 완료한 안심 배선 사례입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-60 bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">
                    {item.tag}
                  </span>
                </div>

                <div className="p-8">
                  <span className="text-xs text-blue-600 font-extrabold tracking-wider block mb-1">PRO CASE_0{index + 1}</span>
                  <h4 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 md:py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-3">
              <span className="text-xs font-bold text-blue-600">ASKED QUESTIONS</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"> 자주 묻는 질문</h3>
            <p className="text-slate-500 text-xs md:text-sm mt-3"> 고객님께서 많이 하시는 질문들을 정리했습니다.</p>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-[#F8FAFC] transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-100/50 transition duration-150"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-blue-600 font-bold font-mono">Q.</span>
                      <span className="text-sm md:text-base tracking-tight">{item.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 border-t border-slate-200 text-xs md:text-sm text-slate-600 leading-relaxed bg-white">
                          <p className="whitespace-pre-line">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clean Call to Action / Contact Center Section without the registration form */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-slate-950 text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop"
            alt="background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold rounded-full mb-3 tracking-wider">
            24 HOURS RAPID SERVICE
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">
            신속한 상담 및 수리 예약
          </h3>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl mx-auto mb-16">
            하수구 고장이나 급격한 누수 상황이 발생하셨나요? 주저없이 좋은설비 전문가에게 전화를 주시거나 카카오톡 및 문자를 남겨주시면 즉각적으로 확인해 드립니다.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left [&>*]:backdrop-blur">
            <div className="bg-white/[0.03] border border-white/10 rounded-[1.5rem] p-6 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">24시간 신속 기사배치</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    변기 및 하수구 막힘 접수시 접수자 기준 인근 30분 ~ 1시간 이내로 우선 투입 지령이 자동 배치됩니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[1.5rem] p-6 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">손상 부위 책임 지원</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    작업하는 도중이나 보수 수선 등 어떠한 트러블도 성실히 책임지고 기적 원상복구 해드립니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[1.5rem] p-6 hover:bg-white/[0.05] transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">다이렉트 무료 전화 연결</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-3">
                    지체될 시간이 없는 급박한 누수나 배관 막힘 발생 시 전면 무상 유/무선 상담이 가능합니다.
                  </p>
                  <a
                    href="tel:010-3016-8897"
                    className="inline-block text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    010-3016-8897로 전화하기 &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <a
              href="sms:01030168897?body=안녕하세요 좋은설비 상담 문의드립니다.(주소와 문제사항을 알려주시면 빠른 상담이 가능합니다)"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-sm font-bold transition duration-150 shadow-xl flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              문자 메시지로 빠른 상담
            </a>

            <a
              href="https://open.kakao.com/o/snl8pCfi"
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl py-4 text-sm font-bold transition duration-150 shadow-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current text-slate-950" />
              카카오톡 실시간 문자 대화
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="px-1.5 py-1 bg-blue-600 rounded">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">좋은설비</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Certified Professional Plumbing & Fluid Solution Contractor.<br />
              국가 배관보증 규격을 따르며 책임 지고 문제를 해결하겠습니다.
            </p>
          </div>

          <div className="text-xs space-y-2 text-slate-400">
            <p className="font-bold text-white uppercase tracking-wider text-[20px]">연락 및 면허 정보</p>
            <p>긴급 상담 전화 : <span className="text-white font-bold italic">010-3016-8897</span></p>
            <p>사업자등록번호: 495-20-02495 | 대표: 좋은설비</p>
            <p className="text-slate-500">Copyright © 2026 좋은설비 Inc. All rights reserved.</p>
          </div>

          <div className="flex gap-2 self-start md:self-center">
            <span className="text-[9px] bg-slate-800 border border-slate-700 px-2 py-1 rounded text-slate-300 font-bold uppercase tracking-tight">
              Certified Professional
            </span>
            <span className="text-[9px] bg-slate-800 border border-slate-700 px-2 py-1 rounded text-slate-300 font-bold uppercase tracking-tight">
              Insurance Guaranteed
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
