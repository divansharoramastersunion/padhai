/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  GraduationCap, 
  Sparkles, 
  FileText, 
  Trophy, 
  MessageSquare, 
  LayoutDashboard, 
  BookOpen, 
  Zap,
  Star,
  Github,
  Linkedin,
  Home
} from 'lucide-react';

// --- Utility Components ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Navbar = ({ onStart }: { onStart: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
          <GraduationCap className="text-primary size-8" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">PadhAI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/70 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            onClick={onStart}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[72px] glass z-40 md:hidden flex flex-col p-8 gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { onStart(); setMobileMenuOpen(false); }}
              className="bg-primary text-white py-4 rounded-xl font-bold mt-4 shadow-xl"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onStart }: { onStart: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 blur-[128px] rounded-full" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/20 blur-[128px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Study <span className="text-primary italic">smarter</span>,<br /> 
              not harder.
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-lg">
              AI-powered flashcards, mock tests, and a personal tutor that actually explains things. 
              Paste your notes, and PadhAI does the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStart}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
              >
                Start Studying
              </button>
              <button className="border-2 border-white/10 hover:border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
                See How It Works
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Animated Illustration */}
        <div className="relative flex justify-center items-center lg:justify-end">
          <motion.div 
            className="animate-float relative"
          >
            {/* Brain Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-24 bg-accent/20 rounded-full flex items-center justify-center animate-pulse-glow backdrop-blur-md border border-accent/30">
              <Sparkles className="text-accent size-12" />
            </div>
            
            {/* Book Shape */}
            <div className="w-[300px] h-[380px] bg-gradient-to-br from-primary/40 to-secondary rounded-[40px] border-4 border-white/10 relative shadow-[0_0_100px_rgba(108,92,231,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
              {/* Fake Lines */}
              <div className="mt-24 px-8 space-y-4">
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                <div className="h-2 w-1/2 bg-white/10 rounded-full pt-8" />
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Smart Flashcards",
      desc: "Paste your notes, get instant flashcards. Flip, rate, repeat.",
      icon: "📚",
      color: "bg-blue-500/20"
    },
    {
      title: "Mock Quizzes",
      desc: "AI generates MCQs from your material. Timed. Scored. No mercy.",
      icon: "⚡",
      color: "bg-yellow-500/20"
    },
    {
      title: "AI Tutor Chat",
      desc: "Ask anything. Get explanations in plain language. Powered by Gemini.",
      icon: "🤖",
      color: "bg-purple-500/20"
    },
    {
      title: "Progress Dashboard",
      desc: "Track streaks, see weak areas, know exactly where you stand.",
      icon: "📊",
      color: "bg-emerald-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Unfair study advantage.</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              We took the best learning science and automated it with state-of-the-art AI.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card p-8 rounded-[32px] h-full flex flex-col items-start gap-4 hover:-translate-y-2">
                <span className={`text-4xl p-4 rounded-2xl ${f.color}`}>{f.icon}</span>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Paste Your Notes", desc: "Upload PDFs, paste text, or link articles.", icon: "📄" },
    { title: "AI Creates Material", desc: "Complex concepts are broken down instantly.", icon: "✨" },
    { title: "Revise and Ace It", desc: "Active recall and spaced repetition magic.", icon: "🏆" }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">How PadhAI works</h2>
        </FadeIn>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-1 border-t-2 border-dashed border-white/10 -z-10" />

          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="text-center space-y-6">
                <div className="size-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center text-4xl border-4 border-navy-dark ring-4 ring-primary/10">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold">Step {i + 1}: {step.title}</h3>
                <p className="text-white/50 max-w-xs mx-auto">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      name: "Priya",
      role: "2nd Year Student",
      quote: "Used PadhAI for my economics midterm. Made 50 flashcards in 2 minutes. Saved me so much time!",
      rating: 5
    },
    {
      name: "Arjun",
      role: "Engineering",
      quote: "The AI tutor explained derivatives better than my professor. No cap. Truly life changing.",
      rating: 5
    },
    {
      name: "Sneha",
      role: "BBA",
      quote: "I went from C's to A's. The quiz feature forces you to actually test yourself before the real exam.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-navy-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Results speak for themselves.</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass p-10 rounded-[32px] space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 grayscale">
                  <Star className="text-yellow-400 size-20 fill-yellow-400" />
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic text-white/80 leading-relaxed font-medium">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <FadeIn>
        <div className="max-w-5xl mx-auto gradient-purple-cyan rounded-[48px] p-12 md:p-20 text-center space-y-8 shadow-[0_0_80px_rgba(108,92,231,0.4)]">
          <h2 className="text-4xl md:text-6xl font-black text-white">Your next exam is closer than you think.</h2>
          <p className="text-xl text-white/90 font-medium">Start studying smarter today.</p>
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Launch PadhAI Now
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 text-xl font-bold">
          <GraduationCap className="text-primary" />
          <span>PadhAI</span>
        </div>
        
        <p className="text-white/40">Built by your favorite agent. &copy; {year} PadhAI.</p>

        <div className="flex gap-4">
          <a href="#" className="p-2 glass rounded-lg hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="#" className="p-2 glass rounded-lg hover:text-primary transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showApp, setShowApp] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'flashcards' | 'quiz' | 'tutor' | 'profile'>('home');

  // Flashcard States
  const [pastedText, setPastedText] = useState('');
  const [subject, setSubject] = useState('General');
  const [cardCount, setCardCount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [decks, setDecks] = useState<any[]>([]);
  const [currentDeck, setCurrentDeck] = useState<any>(null);
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studySummary, setStudySummary] = useState<any>(null);

  // Quiz States
  const [quizState, setQuizState] = useState<'home' | 'config' | 'active' | 'results'>('home');
  const [selectedQuizDeck, setSelectedQuizDeck] = useState<any>(null);
  const [quizConfig, setQuizConfig] = useState({
    numQuestions: 10,
    timePerQuestion: 30, // seconds
    difficulty: 'All',
    shuffle: true,
    instantFeedback: true
  });
  const [activeQuiz, setActiveQuiz] = useState<any>({
    questions: [],
    currentIndex: 0,
    score: 0,
    results: [],
    startTime: 0,
    totalTime: 0
  });
  const [quizHistory, setQuizHistory] = useState<any[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizFeedback, setQuizFeedback] = useState<{ isVisible: boolean; isCorrect: boolean; selectedOption: string | null }>({
    isVisible: false,
    isCorrect: false,
    selectedOption: null
  });

  // AI Tutor / Chat States
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isGuruTyping, setIsGuruTyping] = useState(false);
  const [isKeyValid, setIsKeyValid] = useState<boolean | null>(null);
  const [isTestingKey, setIsTestingKey] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Profile States
  const [userName, setUserName] = useState('Student');
  const [geminiKey, setGeminiKey] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);

  // Stats
  const [stats, setStats] = useState({
    decksCreated: 0,
    cardsStudied: 0,
    streak: 0
  });

  // Stats & Dashboard Data
  const dashboardData = useMemo(() => {
    const today = new Date().setHours(0,0,0,0);
    const oneWeekAgo = new Date(today - 7 * 24 * 60 * 60 * 1000);
    
    // 1. Daily Stats
    const cardsStudiedToday = decks.reduce((acc, deck) => {
      return acc + deck.cards.filter((c: any) => c.lastReviewed && new Date(c.lastReviewed).setHours(0,0,0,0) === today).length;
    }, 0);

    const quizzesToday = quizHistory.filter(q => new Date(q.date).setHours(0,0,0,0) === today).length;
    
    const avgMastery = decks.length > 0 
      ? Math.round(decks.reduce((acc, d) => acc + (d.masteryPercent || 0), 0) / decks.length)
      : 0;

    // 2. Weekly Activity Chart
    const weeklyActivity = Array(7).fill(0).map((_, i) => {
      const day = new Date(today - (6 - i) * 24 * 60 * 60 * 1000);
      const dayStart = day.setHours(0,0,0,0);
      
      const cardsCount = decks.reduce((acc, deck) => {
        return acc + deck.cards.filter((c: any) => c.lastReviewed && new Date(c.lastReviewed).setHours(0,0,0,0) === dayStart).length;
      }, 0);
      
      const quizQuestionsCount = quizHistory
        .filter(q => new Date(q.date).setHours(0,0,0,0) === dayStart)
        .reduce((acc, q) => acc + q.total, 0);
        
      return cardsCount + quizQuestionsCount;
    });

    // 3. Deck Progress (sorted by lowest mastery)
    const deckProgress = [...decks].sort((a, b) => (a.masteryPercent || 0) - (b.masteryPercent || 0));

    // 4. Heatmap (last 30 days)
    const heatmap = Array(30).fill(0).map((_, i) => {
      const day = new Date(today - (29 - i) * 24 * 60 * 60 * 1000);
      const dayStart = day.setHours(0,0,0,0);
      
      const cards = decks.reduce((acc, deck) => {
        return acc + deck.cards.filter((c: any) => c.lastReviewed && new Date(c.lastReviewed).setHours(0,0,0,0) === dayStart).length;
      }, 0);
      
      const quizzes = quizHistory.filter(q => new Date(q.date).setHours(0,0,0,0) === dayStart).length;
      
      return { date: day, cards, quizzes, intensity: cards + quizzes * 5 };
    });

    // 5. Recent Activity
    const activityFeed: any[] = [];
    decks.forEach(d => {
      activityFeed.push({ type: 'deck_created', name: d.name, date: d.createdAt, count: d.cards.length });
      d.cards.forEach((c: any) => {
        if (c.lastReviewed) {
           activityFeed.push({ type: 'card_studied', name: d.name, date: c.lastReviewed, cardId: c.id });
        }
      });
    });
    quizHistory.forEach(q => {
      activityFeed.push({ type: 'quiz_taken', name: q.deckName, date: q.date, score: q.percentage });
    });
    
    const sortedFeed = activityFeed
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 8);

    // 6. Insights
    const insights: string[] = [];
    if (quizzesToday > 0) insights.push(`Great job! You completed ${quizzesToday} quiz${quizzesToday > 1 ? 'zes' : ''} today.`);
    if (avgMastery > 80) insights.push("You're a master! Your average mastery is over 80%.");
    const hardCardsCount = decks.reduce((acc, d) => acc + d.cards.filter((c: any) => c.difficulty === 'hard').length, 0);
    if (hardCardsCount > 5) insights.push(`You have ${hardCardsCount} cards marked as 'Hard'. Try a Smart Study session!`);
    if (stats.streak > 0) insights.push(`You've studied ${stats.streak} days in a row! Keep the momentum.`);
    if (decks.length === 0) insights.push("Welcome to PadhAI! Start by creating flashcard decks from your notes.");

    return {
      cardsStudiedToday,
      quizzesToday,
      avgMastery,
      weeklyActivity,
      deckProgress,
      heatmap,
      sortedFeed,
      insights: insights.slice(0, 3)
    };
  }, [decks, quizHistory, stats, userName]);

  useEffect(() => {
    const savedDecks = localStorage.getItem('flashcardDecks');
    if (savedDecks) {
      const parsed = JSON.parse(savedDecks);
      setDecks(parsed);
      setStats(prev => ({ ...prev, decksCreated: parsed.length }));
    }

    const savedHistory = localStorage.getItem('quizHistory');
    if (savedHistory) {
      setQuizHistory(JSON.parse(savedHistory));
    }

    const savedChat = localStorage.getItem('chatHistory');
    if (savedChat) {
      setChatHistory(JSON.parse(savedChat));
    }

    const savedProfile = localStorage.getItem('padhaiProfile');
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setUserName(parsed.name || 'Student');
      setGeminiKey(parsed.geminiKey || '');
      setDarkMode(parsed.darkMode || false);
      setSoundEffects(parsed.soundEffects ?? true);
      
      // Calculate Streak
      const activityDates = new Set<number>();
      (JSON.parse(savedDecks || '[]')).forEach((d: any) => d.cards.forEach((c: any) => {
        if (c.lastReviewed) activityDates.add(new Date(c.lastReviewed).setHours(0,0,0,0));
      }));
      (JSON.parse(savedHistory || '[]')).forEach((q: any) => activityDates.add(new Date(q.date).setHours(0,0,0,0)));

      let streak = 0;
      if (activityDates.size > 0) {
        const sortedDates = [...activityDates].sort((a,b) => b - a);
        const today = new Date().setHours(0,0,0,0);
        const yesterday = today - 86400000;

        if (sortedDates[0] >= yesterday) {
          let currentCheck = sortedDates[0];
          for (const d of sortedDates) {
            if (d === currentCheck) {
              streak++;
              currentCheck -= 86400000;
            } else if (d < currentCheck) {
              break;
            }
          }
        }
      }
      
      setStats(prev => ({ 
        ...prev, 
        cardsStudied: parsed.cardsStudied || 0, 
        streak 
      }));
    }
  }, []);

  const saveDecks = (newDecks: any[]) => {
    localStorage.setItem('flashcardDecks', JSON.stringify(newDecks));
    setDecks(newDecks);
    setStats(prev => ({ ...prev, decksCreated: newDecks.length }));
  };

  const handleGenerate = () => {
    if (!pastedText.trim()) return;
    setIsGenerating(true);

    // Simulated AI Processing (Rule-based as requested)
    setTimeout(() => {
      const sentences = pastedText.split(/[.!?]+/).filter(s => s.trim().length > 10);
      const newCards: any[] = [];

      sentences.forEach((sentence, index) => {
        const text = sentence.trim();
        let question = "";
        let answer = "";

        // Rule 1: Definitions (contains "is", "refers to", etc.)
        const defMatch = text.match(/(.+?)\s+(is|are|means|refers to)\s+(.+)/i);
        if (defMatch) {
          question = `What is ${defMatch[1].trim()}?`;
          answer = defMatch[3].trim();
        } 
        // Rule 2: Numbers/Stats
        else if (/\d+/.test(text)) {
          question = `Explain the fact mentioning numbers in: "${text.substring(0, 30)}..."`;
          answer = text;
        }
        // Rule 3: General statements (Cloze deletion style)
        else {
          const words = text.split(' ');
          if (words.length > 5) {
            const randomIndex = Math.floor(Math.random() * (words.length - 2)) + 1;
            const removed = words[randomIndex];
            words[randomIndex] = "______";
            question = words.join(' ');
            answer = removed;
          }
        }

        if (question && answer) {
          newCards.push({
            id: Date.now() + index,
            question,
            answer,
            difficulty: 'unrated',
            timesReviewed: 0,
            lastReviewed: null
          });
        }
      });

      const finalCards = newCards.slice(0, cardCount);
      const newDeck = {
        id: Date.now(),
        name: pastedText.substring(0, 30) + (pastedText.length > 30 ? "..." : ""),
        subject,
        cards: finalCards,
        createdAt: new Date().toISOString(),
        masteryPercent: 0
      };

      const updatedDecks = [newDeck, ...decks];
      saveDecks(updatedDecks);
      setPastedText('');
      setIsGenerating(false);
    }, 2000);
  };

  const deleteDeck = (id: number) => {
    const updated = decks.filter(d => d.id !== id);
    saveDecks(updated);
  };

  const startStudying = (deck: any) => {
    setCurrentDeck(deck);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setStudyMode(true);
    setStudySummary(null);
  };

  const startSmartStudy = () => {
    const allCards: any[] = [];
    decks.forEach(deck => {
      deck.cards.forEach((card: any) => {
        if (card.difficulty !== 'easy') {
          allCards.push({ ...card, sourceDeck: deck.name });
        }
      });
    });

    if (allCards.length === 0) {
      alert("No cards to study! All your cards are already marked 'Easy'.");
      return;
    }

    const shuffled = allCards.sort(() => Math.random() - 0.5);
    setCurrentDeck({ name: 'Smart Study', cards: shuffled });
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setStudyMode(true);
    setStudySummary(null);
  };

  const handleRating = (rating: 'easy' | 'medium' | 'hard') => {
    const updatedDeck = { ...currentDeck };
    const card = updatedDeck.cards[currentCardIndex];
    card.difficulty = rating;
    card.timesReviewed += 1;
    card.lastReviewed = new Date().toISOString();

    // Update global decks state
    if (updatedDeck.id) {
      const idx = decks.findIndex(d => d.id === updatedDeck.id);
      if (idx !== -1) {
        const newDecks = [...decks];
        const easyCount = updatedDeck.cards.filter((c: any) => c.difficulty === 'easy').length;
        updatedDeck.masteryPercent = Math.round((easyCount / updatedDeck.cards.length) * 100);
        newDecks[idx] = updatedDeck;
        saveDecks(newDecks);
      }
    }

    // Update user stats
    const newStats = { ...stats, cardsStudied: stats.cardsStudied + 1 };
    setStats(newStats);
    localStorage.setItem('padhaiProfile', JSON.stringify({
      name: userName,
      geminiKey,
      darkMode,
      soundEffects,
      cardsStudied: newStats.cardsStudied,
      streak: stats.streak
    }));

    // Advance or Finish
    if (currentCardIndex < updatedDeck.cards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentCardIndex(prev => prev + 1), 300);
    } else {
      const summary = {
        total: updatedDeck.cards.length,
        easy: updatedDeck.cards.filter((c: any) => c.difficulty === 'easy').length,
        medium: updatedDeck.cards.filter((c: any) => c.difficulty === 'medium').length,
        hard: updatedDeck.cards.filter((c: any) => c.difficulty === 'hard').length,
        mastery: Math.round((updatedDeck.cards.filter((c: any) => c.difficulty === 'easy').length / updatedDeck.cards.length) * 100)
      };
      setStudySummary(summary);
    }
  };

  const resetAllData = () => {
    if (confirm("Are you sure? This will delete all your decks and progress!")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Render Sub-Views
  // Quiz Logic
  useEffect(() => {
    let timer: any;
    if (activeTab === 'quiz' && quizState === 'active' && timeLeft > 0 && !quizFeedback.isVisible) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && quizState === 'active' && !quizFeedback.isVisible) {
      handleQuizAnswer(null); // Time out counts as wrong/skipped
    }
    return () => clearInterval(timer);
  }, [quizState, timeLeft, quizFeedback, activeTab]);

  const generateQuizQuestions = (deck: any, config: any) => {
    let filteredCards = [...deck.cards];
    if (config.difficulty !== 'All') {
      if (config.difficulty === 'Hard Only') {
        filteredCards = filteredCards.filter(c => c.difficulty === 'hard');
      } else if (config.difficulty === 'Medium + Hard') {
        filteredCards = filteredCards.filter(c => c.difficulty === 'hard' || c.difficulty === 'medium');
      }
    }

    if (config.shuffle) {
      filteredCards.sort(() => Math.random() - 0.5);
    }

    const numToTake = config.numQuestions === 'All' ? filteredCards.length : Math.min(config.numQuestions, filteredCards.length);
    const selected = filteredCards.slice(0, numToTake);

    return selected.map(card => {
      // Logic for distractors
      const distractors: string[] = [];
      const otherAnswers = deck.cards
        .filter((c: any) => c.id !== card.id)
        .map((c: any) => c.answer);
      
      // Try to get 3 random answers from other cards
      if (otherAnswers.length >= 3) {
        const shuffledOthers = otherAnswers.sort(() => Math.random() - 0.5);
        distractors.push(...shuffledOthers.slice(0, 3));
      } else {
        // Fallback for small decks: modify the correct answer
        distractors.push(card.answer + " (Incorrect variant A)");
        distractors.push(card.answer + " (Incorrect variant B)");
        distractors.push(card.answer + " (Incorrect variant C)");
      }

      const options = [card.answer, ...distractors].sort(() => Math.random() - 0.5);
      return {
        ...card,
        options,
        correctAnswer: card.answer
      };
    });
  };

  const startQuiz = () => {
    const questions = generateQuizQuestions(selectedQuizDeck, quizConfig);
    if (questions.length === 0) {
      alert("No cards match your filter criteria!");
      return;
    }
    setActiveQuiz({
      questions,
      currentIndex: 0,
      score: 0,
      results: [],
      startTime: Date.now(),
      totalTime: 0
    });
    setQuizState('active');
    setTimeLeft(quizConfig.timePerQuestion || 999);
    setQuizFeedback({ isVisible: false, isCorrect: false, selectedOption: null });
  };

  const handleQuizAnswer = (option: string | null) => {
    const currentQuestion = activeQuiz.questions[activeQuiz.currentIndex];
    const isCorrect = option === currentQuestion.correctAnswer;
    const timeSpent = (quizConfig.timePerQuestion || 30) - timeLeft;

    setQuizFeedback({
      isVisible: true,
      isCorrect,
      selectedOption: option
    });

    // Sound effects logic placeholder
    if (soundEffects && showApp) {
      // In a real app we'd play audio files here
    }

    setTimeout(() => {
      const newResults = [
        ...activeQuiz.results,
        {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.correctAnswer,
          userAnswer: option,
          timeSpent,
          isCorrect
        }
      ];

      const isLast = activeQuiz.currentIndex === activeQuiz.questions.length - 1;

      if (isLast) {
        const finalScore = activeQuiz.score + (isCorrect ? 1 : 0);
        const total = activeQuiz.questions.length;
        const percentage = Math.round((finalScore / total) * 100);
        const grade = percentage >= 90 ? 'A' : percentage >= 70 ? 'B' : percentage >= 50 ? 'C' : percentage >= 30 ? 'D' : 'F';
        const totalTimeTaken = Math.round((Date.now() - activeQuiz.startTime) / 1000);

        const summary = {
          id: Date.now(),
          deckId: selectedQuizDeck.id,
          deckName: selectedQuizDeck.name,
          questions: newResults,
          score: finalScore,
          total,
          percentage,
          grade,
          totalTime: totalTimeTaken,
          date: new Date().toISOString()
        };

        const newHistory = [summary, ...quizHistory];
        setQuizHistory(newHistory);
        localStorage.setItem('quizHistory', JSON.stringify(newHistory));
        
        setActiveQuiz(prev => ({ ...prev, results: newResults, score: finalScore, totalTime: totalTimeTaken }));
        setQuizState('results');
      } else {
        setActiveQuiz(prev => ({
          ...prev,
          currentIndex: prev.currentIndex + 1,
          score: prev.score + (isCorrect ? 1 : 0),
          results: newResults
        }));
        setTimeLeft(quizConfig.timePerQuestion || 999);
        setQuizFeedback({ isVisible: false, isCorrect: false, selectedOption: null });
      }
    }, quizConfig.instantFeedback ? 1500 : 0);
  };

  const renderQuizHome = () => (
    <div className="space-y-8 pb-32 pt-8 px-4 max-w-2xl mx-auto text-gray-900">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">Quiz Mode 🧠</h2>
        <div className="flex gap-2">
           <div className="bg-white p-3 rounded-2xl shadow-sm border border-black/5 text-center px-4">
             <div className="text-sm font-black text-primary">{quizHistory.length}</div>
             <div className="text-[8px] font-bold text-gray-400 uppercase">Quizzes</div>
           </div>
           <div className="bg-white p-3 rounded-2xl shadow-sm border border-black/5 text-center px-4">
             <div className="text-sm font-black text-green-500">
               {quizHistory.length > 0 ? Math.round(quizHistory.reduce((acc, q) => acc + q.percentage, 0) / quizHistory.length) : 0}%
             </div>
             <div className="text-[8px] font-bold text-gray-400 uppercase">Avg Score</div>
           </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select a deck to quiz</h3>
        {decks.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-gray-200 text-center space-y-4">
            <h3 className="text-xl font-bold">No decks yet.</h3>
            <button onClick={() => setActiveTab('flashcards')} className="bg-primary text-white px-6 py-3 rounded-xl font-bold">Create First Deck</button>
          </div>
        ) : (
          <div className="grid gap-3">
            {decks.map(deck => (
              <div 
                key={deck.id}
                onClick={() => { setSelectedQuizDeck(deck); setQuizState('config'); }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 flex justify-between items-center hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="space-y-1">
                  <h4 className="font-bold">{deck.name}</h4>
                  <div className="flex gap-2 items-center">
                    <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-bold uppercase">{deck.subject}</span>
                    <span className="text-[10px] text-gray-300 font-bold">{deck.cards.length} cards</span>
                  </div>
                </div>
                <button className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-bold text-sm">Start Quiz</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {quizHistory.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quiz History</h3>
          <div className="space-y-3">
            {quizHistory.map(h => (
              <div key={h.id} className="bg-white p-4 rounded-xl border border-black/5 flex justify-between items-center">
                 <div className="space-y-1">
                    <h5 className="font-bold text-sm">{h.deckName}</h5>
                    <p className="text-[10px] text-gray-400">{new Date(h.date).toLocaleDateString()}</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="text-right">
                       <div className="text-xs font-bold">{h.score}/{h.total}</div>
                       <div className="text-[8px] font-bold text-gray-300">{h.totalTime}s</div>
                    </div>
                    <div className={`size-10 rounded-full flex items-center justify-center text-xs font-black text-white ${h.percentage >= 80 ? 'bg-green-500' : h.percentage >= 50 ? 'bg-orange-500' : 'bg-red-500'}`}>
                      {h.percentage}%
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderQuizConfig = () => (
    <div className="space-y-8 pb-32 pt-8 px-4 max-w-2xl mx-auto text-gray-900">
      <div className="flex items-center gap-4">
         <button onClick={() => setQuizState('home')} className="p-3 bg-white rounded-xl shadow-sm border border-black/5">←</button>
         <h2 className="text-2xl font-black">Configure Quiz</h2>
      </div>

      <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Selected Deck</label>
          <div className="text-xl font-black text-primary">{selectedQuizDeck.name}</div>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Questions</label>
          <div className="flex gap-2">
            {[5, 10, 15, 'All'].map(val => (
              <button 
                key={val}
                onClick={() => setQuizConfig({...quizConfig, numQuestions: val as any})}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${quizConfig.numQuestions === val ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Time Limit</label>
          <div className="flex gap-2">
            {[15, 30, 60, null].map(val => (
              <button 
                key={val || 'None'}
                onClick={() => setQuizConfig({...quizConfig, timePerQuestion: val as any})}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${quizConfig.timePerQuestion === val ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}
              >
                {val ? `${val}s` : 'No Timer'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
           <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Shuffle Questions</span>
              <div onClick={() => setQuizConfig({...quizConfig, shuffle: !quizConfig.shuffle})} className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all ${quizConfig.shuffle ? 'bg-primary' : 'bg-gray-200'}`}>
                <motion.div animate={{ x: quizConfig.shuffle ? 24 : 0 }} className="size-4 bg-white rounded-full shadow-sm" />
              </div>
           </div>
           <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700">Instant Feedback</span>
              <div onClick={() => setQuizConfig({...quizConfig, instantFeedback: !quizConfig.instantFeedback})} className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all ${quizConfig.instantFeedback ? 'bg-primary' : 'bg-gray-200'}`}>
                <motion.div animate={{ x: quizConfig.instantFeedback ? 24 : 0 }} className="size-4 bg-white rounded-full shadow-sm" />
              </div>
           </div>
        </div>

        <button 
          onClick={startQuiz}
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Start Quiz Now
        </button>
      </div>
    </div>
  );

  const renderQuizActive = () => {
    const q = activeQuiz.questions[activeQuiz.currentIndex];
    const progress = ((activeQuiz.currentIndex + 1) / activeQuiz.questions.length) * 100;
    const dashArray = 251.2; // 2 * PI * r (approx for r=40)
    const dashOffset = quizConfig.timePerQuestion ? dashArray - (dashArray * timeLeft) / quizConfig.timePerQuestion : 0;

    return (
      <div className="max-w-md mx-auto pt-8 p-6 h-[85vh] flex flex-col justify-between text-gray-900 overflow-hidden">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
             <div className="space-y-1">
                <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Question {activeQuiz.currentIndex + 1} / {activeQuiz.questions.length}</div>
                <div className="text-lg font-black text-primary">Score: {activeQuiz.score}</div>
             </div>
             
             {quizConfig.timePerQuestion && (
               <div className="relative size-16 flex items-center justify-center">
                 <svg className="size-full rotate-[-90deg]">
                   <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-100" />
                   <motion.circle 
                     cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={dashArray} 
                     animate={{ strokeDashoffset: dashOffset }}
                     className="text-primary" 
                   />
                 </svg>
                 <span className="absolute font-black text-sm">{timeLeft}s</span>
               </div>
             )}
          </div>

          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
             <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-full bg-primary" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeQuiz.currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 min-h-[180px] flex items-center justify-center text-center"
            >
              <h3 className="text-xl font-bold leading-relaxed">{q.question}</h3>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid gap-3 pt-8">
           {q.options.map((opt: string) => {
             const isSelected = quizFeedback.selectedOption === opt;
             const isCorrect = opt === q.correctAnswer;
             let btnClass = "bg-white border-2 border-black/5 text-gray-700";
             
             if (quizFeedback.isVisible) {
               if (isCorrect) btnClass = "bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/20 scale-105";
               else if (isSelected) btnClass = "bg-red-500 border-red-500 text-white shadow-lg shadow-red-500/20";
             }

             return (
               <button 
                 key={opt}
                 disabled={quizFeedback.isVisible}
                 onClick={() => handleQuizAnswer(opt)}
                 className={`w-full p-4 rounded-2xl font-bold flex justify-between items-center transition-all min-h-[64px] ${btnClass}`}
               >
                 <span className="text-sm text-left">{opt}</span>
                 {quizFeedback.isVisible && isCorrect && <Zap size={20} className="fill-current" />}
                 {quizFeedback.isVisible && isSelected && !isCorrect && <X size={20} />}
               </button>
             );
           })}
           
           <div className="flex justify-end pt-2">
             <button 
               disabled={quizFeedback.isVisible}
               onClick={() => handleQuizAnswer(null)}
               className="text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-gray-600 p-2"
             >
               Skip →
             </button>
           </div>
        </div>
      </div>
    );
  };

  const renderQuizResults = () => {
    const summary = quizHistory[0]; // Most recent result
    const motivational = summary.percentage >= 90 ? "Outstanding! You've mastered this material." :
                         summary.percentage >= 70 ? "Solid work! Review the ones you missed and you'll ace it." :
                         summary.percentage >= 50 ? "Getting there! Spend more time with the flashcards and try again." :
                         "No worries. Every expert was once a beginner. Hit the flashcards and come back stronger.";

    return (
      <div className="space-y-8 pb-32 pt-8 px-4 max-w-2xl mx-auto text-gray-900 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-6 py-8">
           <div className="relative size-40 mx-auto flex items-center justify-center">
             <svg className="size-full rotate-[-90deg]">
                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                <motion.circle 
                  cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" 
                  strokeDasharray="439.6"
                  initial={{ strokeDashoffset: 439.6 }}
                  animate={{ strokeDashoffset: 439.6 - (439.6 * summary.percentage) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={summary.percentage >= 70 ? 'text-green-500' : summary.percentage >= 40 ? 'text-orange-500' : 'text-red-500'}
                />
             </svg>
             <div className="absolute flex flex-col">
               <span className="text-5xl font-black">{summary.score}</span>
               <span className="text-xs font-bold text-gray-400 uppercase">out of {summary.total}</span>
             </div>
             
             <div className="absolute -top-2 -right-2 size-12 rounded-full border-4 border-navy-dark bg-primary flex items-center justify-center text-white font-black text-xl shadow-xl">
                {summary.grade}
             </div>
           </div>

           <div className="space-y-2">
             <h2 className="text-2xl font-black">Level Up!</h2>
             <p className="text-gray-500 font-medium max-w-xs mx-auto leading-relaxed">{motivational}</p>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button onClick={startQuiz} className="bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20">Retake Quiz</button>
           <button onClick={() => setQuizState('home')} className="bg-white border border-black/5 py-4 rounded-2xl font-bold shadow-sm text-gray-700">Back Home</button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
           <div className="p-6 border-b border-black/5 bg-gray-50/50 flex justify-between items-center">
              <h3 className="font-bold text-xs text-gray-400 uppercase tracking-widest">Question Review</h3>
              <span className="text-xs font-black text-gray-500">{summary.totalTime}s total</span>
           </div>
           <div className="divide-y divide-black/5 max-h-[400px] overflow-y-auto">
              {summary.questions.map((qr: any, idx: number) => (
                <div key={idx} className="p-6 space-y-3">
                   <div className="flex gap-3">
                      <div className={`mt-1 size-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black ${qr.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {qr.isCorrect ? '✓' : '✕'}
                      </div>
                      <p className="font-bold text-sm leading-relaxed">{qr.question}</p>
                   </div>
                   <div className="pl-8 space-y-1">
                      <div className="text-xs">
                        <span className="text-gray-400 font-bold uppercase text-[9px] mr-2">Your Answer:</span>
                        <span className={qr.isCorrect ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>{qr.userAnswer || 'Skipped'}</span>
                      </div>
                      {!qr.isCorrect && (
                         <div className="text-xs">
                            <span className="text-gray-400 font-bold uppercase text-[9px] mr-2">Correct:</span>
                            <span className="text-green-600 font-bold">{qr.correctAnswer}</span>
                         </div>
                      )}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  };

  // AI Tutor Logic
  const formatMarkdown = (text: string) => {
    // Headers
    text = text.replace(/^### (.*$)/gim, '<h3 class="text-lg font-black mt-4 mb-2 text-primary uppercase tracking-wider">$1</h3>');
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-gray-900">$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>');
    // Bullets
    text = text.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc text-gray-700">$1</li>');
    // Numbered
    text = text.replace(/^\d\. (.*$)/gim, '<li class="ml-4 list-decimal text-gray-700">$1</li>');
    // Code blocks
    text = text.replace(/```(.*?)```/gs, '<code class="block bg-gray-100 p-3 rounded-xl font-mono text-xs my-2 whitespace-pre-wrap">$1</code>');
    
    // Flashcard detection (Q1: ... A1: ...)
    const qPattern = /Q(\d+):\s*(.*?)\s*A\1:\s*(.*?)(?=Q\d+:|$)/gs;
    text = text.replace(qPattern, (match, num, q, a) => {
      return `
        <div class="bg-white border border-primary/10 rounded-2xl p-4 my-4 shadow-sm border-l-4 border-l-primary">
          <div class="text-[10px] font-black text-primary uppercase mb-1">Flashcard #${num}</div>
          <div class="font-bold text-sm mb-1">${q}</div>
          <div class="text-xs text-gray-500 italic">${a}</div>
        </div>
      `;
    });

    return text.replace(/\n/g, '<br />');
  };

  const getAIContext = () => {
    const lastQuizzes = quizHistory.slice(0, 3).map(h => `${h.deckName}: ${h.percentage}%`).join(', ');
    const weakAreas = decks.flatMap(d => d.cards.filter((c: any) => c.difficulty === 'hard' || c.difficulty === 'nope')).slice(0, 5).map(c => c.question).join(', ');
    const decksInfo = decks.map(d => `${d.name} (${d.cards.length} cards, ${d.masteryPercent}% master)`).join(', ');
    
    return `STUDENT'S APP DATA:
Name: ${userName}
Flashcard Decks: ${decksInfo || 'None yet'}
Recent Quiz Scores: ${lastQuizzes || 'None yet'}
Weak Areas: ${weakAreas || 'None identified yet'}
Study Streak: ${stats.streak} days
Total Cards Studied: ${stats.cardsStudied}`;
  };

  const handleSendToGuru = async (text: string) => {
    if (!text.trim() || !geminiKey) return;

    const userMsg = { role: 'user', content: text, timestamp: new Date().toISOString() };
    const newHistory = [...chatHistory, userMsg];
    setChatHistory(newHistory);
    setChatInput('');
    setIsGuruTyping(true);

    try {
      const systemPrompt = `You are PadhAI Guru, a friendly and knowledgeable AI study buddy inside the PadhAI study app. Your personality is warm, encouraging, and relatable. You explain things using real-world analogies and examples from everyday life.

Rules:
- Explain concepts in simple, clear language. No jargon unless asked.
- Use analogies from daily life (chai stalls, cricket, Instagram, Uber, etc.)
- Keep responses under 200 words unless the student asks for detail
- Use emojis occasionally to keep it friendly
- If asked about something outside academics, be helpful but gently redirect to studying
- When the student is struggling, be encouraging but honest
- If asked to create flashcards, format them as numbered pairs: Q1: ... A1: ...
- Personalize responses using the student's data provided below`;

      const context = getAIContext();
      const prompt = `[SYSTEM]: ${systemPrompt}\n\n[STUDENT CONTEXT]: ${context}\n\n[STUDENT MESSAGE]: ${text}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();
      
      if (data.error) {
         throw new Error(data.error.message || 'API Error');
      }

      const guruResponse = data.candidates[0].content.parts[0].text;
      
      // Artificial delay
      setTimeout(() => {
        const guruMsg = { role: 'assistant', content: guruResponse, timestamp: new Date().toISOString() };
        const finalHistory = [...newHistory, guruMsg].slice(-50);
        setChatHistory(finalHistory);
        localStorage.setItem('chatHistory', JSON.stringify(finalHistory));
        setIsGuruTyping(false);
      }, 1000);

    } catch (error) {
      console.error(error);
      setIsGuruTyping(false);
      const errorMsg = { role: 'assistant', content: "Oops, something went wrong. Check your API key in Profile > Settings, or try again.", timestamp: new Date().toISOString(), isError: true };
      setChatHistory([...newHistory, errorMsg]);
    }
  };

  const testGeminiKey = async () => {
    if (!geminiKey) return;
    setIsTestingKey(true);
    setIsKeyValid(null);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Hello, respond with just 'Connected successfully!'" }] }]
        })
      });

      const data = await response.json();
      if (data.candidates?.[0]?.content?.parts?.[0]?.text?.includes('Connected successfully')) {
        setIsKeyValid(true);
      } else {
        setIsKeyValid(false);
      }
    } catch (err) {
      setIsKeyValid(false);
    } finally {
      setIsTestingKey(false);
    }
  };

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatHistory, isGuruTyping]);

  const renderTutor = () => {
    const welcomeMsg = `Hey ${userName}! I'm PadhAI Guru, your personal study buddy. 🎓

I can help you with:
- Explaining any concept in simple language
- Creating better flashcards from your notes
- Quiz practice and doubt clearing
- Study strategies and memory techniques
- Summarizing long chapters

I also know about your flashcard decks and quiz scores, so I can give you personalized advice. Just type anything or tap a quick action below!`;

    const quickActions = [
      "Explain a concept to me",
      "Help me memorize this",
      "Summarize my notes",
      "What should I study next?",
      "Give me study tips",
      "Create flashcards"
    ];

    if (!geminiKey) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center space-y-6">
           <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center text-4xl mb-4">🔑</div>
           <h2 className="text-2xl font-black text-gray-900">Unlock PadhAI Guru</h2>
           <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
             To start chatting, enter your Gemini API key in Profile &gt; Settings. It takes 30 seconds and it's free!
           </p>
           <button 
             onClick={() => setActiveTab('profile')}
             className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
           >
             Go to Settings
           </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-[calc(100vh-160px)] max-w-2xl mx-auto pt-4 relative bg-white">
        {/* Guru Header */}
        <div className="flex items-center gap-4 px-6 pb-4 border-b border-black/5">
           <div className="size-12 bg-primary rounded-full flex items-center justify-center text-2xl shadow-lg">🎓</div>
           <div>
              <h2 className="font-black text-gray-900">PadhAI Guru</h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your AI Study Buddy</p>
           </div>
           <button 
             onClick={() => { setChatHistory([]); localStorage.removeItem('chatHistory'); }}
             className="ml-auto p-2 text-gray-300 hover:text-gray-600 transition-colors"
           >
             <X size={20} />
           </button>
        </div>

        {/* Message Area */}
        <div ref={chatScrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {chatHistory.length === 0 && (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-[#EDE7F6] p-5 rounded-2xl rounded-tl-none mr-12 text-gray-800 text-sm leading-relaxed whitespace-pre"
             >
               {welcomeMsg}
             </motion.div>
          )}

          {chatHistory.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end ml-12' : 'items-start mr-12'}`}
            >
              <div 
                className={`p-4 rounded-2xl text-sm leading-relaxed overflow-hidden ${
                  msg.role === 'user' 
                  ? 'bg-navy-dark text-white rounded-tr-none' 
                  : msg.isError ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-[#EDE7F6] text-gray-800 rounded-tl-none'
                }`}
                dangerouslySetInnerHTML={{ __html: msg.role === 'assistant' ? formatMarkdown(msg.content) : msg.content }}
              />
              <span className="text-[8px] font-bold text-gray-300 uppercase mt-1 px-1">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              {msg.isError && (
                <button 
                  onClick={() => handleSendToGuru(chatHistory[chatHistory.length - 2].content)}
                  className="mt-2 text-[10px] font-black text-primary uppercase border border-primary/20 px-3 py-1 rounded-full bg-primary/5"
                >
                  Retry Resend
                </button>
              )}
            </motion.div>
          ))}

          {isGuruTyping && (
             <div className="flex gap-1 items-center bg-[#EDE7F6] p-4 rounded-2xl rounded-tl-none w-16 mr-auto">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="size-1.5 bg-primary rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="size-1.5 bg-primary rounded-full" />
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="size-1.5 bg-primary rounded-full" />
             </div>
          )}
        </div>

        {/* Input Bar Section */}
        <div className="bg-white border-t border-black/5 p-4 space-y-4">
           {/* Quick Actions */}
           <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {quickActions.map(action => (
                <button 
                  key={action}
                  onClick={() => { setChatInput(action); }}
                  className="flex-shrink-0 bg-gray-50 text-gray-500 px-4 py-2 rounded-full text-xs font-bold border border-black/5 hover:bg-primary/5 hover:text-primary transition-all active:scale-95"
                >
                  {action}
                </button>
              ))}
           </div>

           {/* Input bar */}
           <div className="flex gap-2 items-center bg-gray-50 p-2 rounded-2xl border border-black/5 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendToGuru(chatInput)}
                placeholder="Ask PadhAI Guru anything..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-sm text-gray-800 font-medium outline-none"
              />
              <button 
                onClick={() => handleSendToGuru(chatInput)}
                disabled={!chatInput.trim() || isGuruTyping}
                className="size-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 disabled:opacity-50 active:scale-90 transition-all"
              >
                <Zap size={20} fill="currentColor" />
              </button>
           </div>
        </div>
      </div>
    );
  };
  const renderDashboard = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
    const todayStr = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    return (
      <div className="space-y-10 pb-32 pt-8 px-4 max-w-2xl mx-auto text-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="flex justify-between items-start">
           <div className="space-y-1">
             <h2 className="text-2xl font-black">{greeting}, {userName}!</h2>
             <p className="text-gray-400 font-bold text-sm tracking-tight">{todayStr}</p>
           </div>
           <div className="bg-primary/10 px-4 py-2 rounded-2xl flex items-center gap-2 border border-primary/10">
             <span className="text-xl">🔥</span>
             <div className="text-right">
               <div className="text-xs font-black text-primary leading-none">{stats.streak} Day Streak</div>
               <div className="text-[8px] font-bold text-primary/60 uppercase">{stats.streak === 0 ? 'Start Today!' : 'Keep it up!'}</div>
             </div>
           </div>
        </div>

        {/* Daily Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
           {[
             { icon: '📚', label: 'Studied', val: `${dashboardData.cardsStudiedToday} cards`, color: 'text-blue-500' },
             { icon: '🧠', label: 'Quizzes', val: `${dashboardData.quizzesToday} taken`, color: 'text-purple-500' },
             { icon: '⭐', label: 'Mastery', val: `${dashboardData.avgMastery}%`, color: 'text-yellow-500' },
             { icon: '🔥', label: 'Streak', val: `${stats.streak} days`, color: 'text-orange-500' },
           ].map(s => (
             <div key={s.label} className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 text-center flex flex-col items-center gap-1">
               <span className="text-xl mb-1">{s.icon}</span>
               <div className={`text-sm font-black ${s.color}`}>{s.val}</div>
               <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
             </div>
           ))}
        </div>

        {/* Weekly Chart */}
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-black/5 space-y-6">
           <div className="flex justify-between items-end">
             <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">This Week</h3>
             <div className="text-[10px] font-bold text-gray-400">Activity Level</div>
           </div>
           <div className="flex justify-between items-end h-32 px-2">
              {dashboardData.weeklyActivity.map((val, i) => {
                const height = Math.min(100, (val / 20) * 100); 
                const isToday = i === 6;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 group relative h-full">
                    <div className="flex-1 w-full flex items-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: val === 0 ? 4 : `${height}%` }}
                        className={`w-8 rounded-t-lg transition-all ${val === 0 ? 'bg-gray-100' : 'bg-gradient-to-t from-primary to-accent'} ${isToday ? 'ring-2 ring-cyan-400 ring-offset-2' : ''}`}
                      />
                    </div>
                    <span className={`text-[10px] font-black uppercase ${isToday ? 'text-primary' : 'text-gray-300'}`}>
                      {['M','T','W','T','F','S','S'][i]}
                    </span>
                    {val > 0 && (
                      <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-navy-dark text-white text-[10px] font-bold py-1 px-2 rounded-lg pointer-events-none z-10">
                        {val} items
                      </div>
                    )}
                  </div>
                );
              })}
           </div>
           <p className="text-xs font-medium text-gray-500 text-center">
             You studied {dashboardData.cardsStudiedToday} cards and took {dashboardData.quizzesToday} quizzes today.
           </p>
        </div>

        {/* Deck Mastery */}
        <div className="space-y-4">
           <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Your Progress</h3>
           <div className="space-y-3">
             {dashboardData.deckProgress.length === 0 ? (
               <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-gray-100 text-center text-gray-400 font-bold text-sm">
                 Create your first flashcard deck to track progress!
               </div>
             ) : (
               dashboardData.deckProgress.slice(0, 3).map(deck => (
                 <div key={deck.id} className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 space-y-4">
                    <div className="flex justify-between items-start">
                       <div className="space-y-1">
                          <h4 className="font-bold text-sm">{deck.name}</h4>
                          <span className="text-[8px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-bold uppercase">{deck.subject}</span>
                       </div>
                       <div className="text-right">
                          <div className="text-sm font-black text-green-500">{deck.masteryPercent}%</div>
                          <div className="text-[8px] font-bold text-gray-300 uppercase">Mastered</div>
                       </div>
                    </div>
                    <div className="flex h-1.5 rounded-full overflow-hidden bg-gray-100">
                       <div className="bg-green-500 h-full" style={{ width: `${deck.masteryPercent}%` }} />
                       <div className="bg-orange-500 h-full" style={{ width: `${deck.cards.filter((c:any) => c.difficulty === 'medium').length / deck.cards.length * 100}%` }} />
                       <div className="bg-red-500 h-full" style={{ width: `${deck.cards.filter((c:any) => c.difficulty === 'hard').length / deck.cards.length * 100}%` }} />
                    </div>
                 </div>
               ))
             )}
           </div>
        </div>

        {/* Heatmap */}
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-black/5 space-y-4">
           <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Study Calendar</h3>
           <div className="flex flex-wrap gap-1.5 justify-center">
              {dashboardData.heatmap.map((day, i) => {
                let color = 'bg-gray-100';
                if (day.intensity > 15) color = 'bg-primary';
                else if (day.intensity > 5) color = 'bg-primary/50';
                else if (day.intensity > 0) color = 'bg-primary/20';

                return (
                  <div key={i} className={`size-4 rounded-[3px] ${color} transition-all cursor-help relative group`}>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-all bg-navy-dark text-white text-[9px] font-bold py-1 px-2 rounded-lg whitespace-nowrap z-10">
                      {day.date.toLocaleDateString([], { month: 'short', day: 'numeric' })}: {day.cards} cards, {day.quizzes} quiz
                    </div>
                  </div>
                );
              })}
           </div>
           <div className="flex justify-center gap-4 pt-2">
              <div className="flex items-center gap-1">
                 <div className="size-2 bg-gray-100 rounded-[2px]" />
                 <span className="text-[8px] font-bold text-gray-400 uppercase">None</span>
              </div>
              <div className="flex items-center gap-1">
                 <div className="size-2 bg-primary/20 rounded-[2px]" />
                 <span className="text-[8px] font-bold text-gray-400 uppercase">1-5</span>
              </div>
              <div className="flex items-center gap-1">
                 <div className="size-2 bg-primary/50 rounded-[2px]" />
                 <span className="text-[8px] font-bold text-gray-400 uppercase">6-15</span>
              </div>
              <div className="flex items-center gap-1">
                 <div className="size-2 bg-primary rounded-[2px]" />
                 <span className="text-[8px] font-bold text-gray-400 uppercase">16+</span>
              </div>
           </div>
        </div>

        {/* Insights */}
        <div className="space-y-4">
           <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Insights 💡</h3>
           <div className="grid gap-3">
              {dashboardData.insights.map((insight, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-primary flex gap-3 items-center">
                   <p className="text-sm font-medium text-gray-700">{insight}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
           {[
             { label: 'New Deck', icon: '➕', tab: 'flashcards' as const },
             { label: 'Take Quiz', icon: '🧠', tab: 'quiz' as const },
             { label: 'Ask Guru', icon: '💬', tab: 'tutor' as const },
           ].map(action => (
             <button 
               key={action.label} 
               onClick={() => setActiveTab(action.tab)}
               className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 flex flex-col items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all text-center"
             >
               <span className="text-xl">{action.icon}</span>
               <span className="text-[10px] font-black uppercase text-primary">{action.label}</span>
             </button>
           ))}
        </div>

        {/* Recent Activity */}
        <div className="space-y-4 pb-12">
           <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Recent Activity</h3>
           <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden divide-y divide-black/5">
              {dashboardData.sortedFeed.length === 0 ? (
                <div className="p-12 text-center text-gray-400 font-bold text-sm">No activity yet. Start studying to see your history!</div>
              ) : (
                dashboardData.sortedFeed.map((item, i) => (
                  <div key={i} className="p-4 flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors">
                     <div className="flex gap-3 items-center">
                        <div className="size-8 bg-gray-50 rounded-full flex items-center justify-center text-sm">
                           {item.type === 'deck_created' ? '📄' : item.type === 'quiz_taken' ? '🏆' : '📚'}
                        </div>
                        <div>
                           <p className="text-xs font-bold text-gray-800">
                              {item.type === 'deck_created' ? `Created deck: ${item.name}` : 
                               item.type === 'quiz_taken' ? `Scored ${item.score}% on ${item.name}` : 
                               `Studied card from ${item.name}`}
                           </p>
                           <p className="text-[9px] text-gray-400 font-bold">{new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(item.date).toLocaleDateString([], { month: 'short', day: 'numeric' })}</p>
                        </div>
                     </div>
                  </div>
                ))
              )}
           </div>
        </div>
      </div>
    );
  };

  const renderFlashcards = () => (
    <div className="space-y-8 pb-32 pt-8 px-4 max-w-2xl mx-auto text-gray-900">
      {/* Input Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 space-y-4">
        <div className="relative">
          <textarea 
            value={pastedText}
            onChange={(e) => setPastedText(e.target.value.slice(0, 5000))}
            className="w-full h-40 p-4 bg-gray-50 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-gray-700 font-medium"
            placeholder="Paste your notes, textbook chapter, or any study material here..."
          />
          <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-400">
            {pastedText.length} / 5000
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
            <select 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-gray-50 rounded-xl border-none font-semibold text-gray-700"
            >
              {[ 'General', 'Science', 'History', 'Math', 'Economics', 'Computer Science', 'Law', 'Other'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cards</label>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map(n => (
                <button 
                  key={n}
                  onClick={() => setCardCount(n)}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all ${cardCount === n ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={isGenerating || !pastedText.trim()}
          className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
        >
          {isGenerating ? <div className="size-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <Sparkles size={20} />}
          {isGenerating ? 'Generating...' : 'Generate Flashcards'}
        </button>
      </div>

      {/* Decks Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-gray-900">Your Decks</h2>
            <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold uppercase">{decks.length}</span>
          </div>
          {decks.length > 0 && (
            <button 
              onClick={startSmartStudy}
              className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
            >
              <Zap size={16} /> Smart Study
            </button>
          )}
        </div>

        {decks.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-gray-200 text-center space-y-4">
            <div className="size-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-3xl">📚</div>
            <h3 className="text-xl font-bold text-gray-900">No decks yet.</h3>
            <p className="text-gray-400 max-w-[240px] mx-auto">Paste some notes above to create your first study set!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {decks.map(deck => (
              <div 
                key={deck.id}
                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:border-primary/20 transition-all cursor-pointer overflow-hidden text-gray-900"
                onClick={() => startStudying(deck)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1 pr-12">
                    <h3 className="font-bold text-lg leading-tight">{deck.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase">{deck.subject}</span>
                      <span className="text-xs text-gray-400 font-medium">{deck.cards.length} cards</span>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); deleteDeck(deck.id); }}
                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    <span>Mastery</span>
                    <span>{deck.masteryPercent}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${deck.masteryPercent}%` }}
                      className="h-full bg-green-500" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderStudyMode = () => {
    if (studySummary) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center space-y-8 animate-in fade-in zoom-in duration-300 text-gray-900">
          <div className="size-32 bg-green-500/10 rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-green-500/10">🏁</div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black">All Done!</h2>
            <p className="text-gray-500 font-medium text-lg">Great work on finishing your session.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
              <div className="text-2xl font-black text-green-500">{studySummary.easy}</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">Easy</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
              <div className="text-2xl font-black text-orange-500">{studySummary.medium}</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">Medium</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
              <div className="text-2xl font-black text-red-500">{studySummary.hard}</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">Hard</div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-gray-200 h-4 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${studySummary.mastery}%` }}
              className="h-full bg-green-500" 
            />
          </div>
          <div className="text-sm font-bold text-gray-600 uppercase">Mastery: {studySummary.mastery}%</div>

          <div className="flex flex-col w-full max-w-xs gap-3 pt-4">
            <button 
              onClick={() => startStudying(currentDeck)}
              className="bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20"
            >
              Study Again
            </button>
            <button 
              onClick={() => { setStudyMode(false); setStudySummary(null); }}
              className="text-gray-500 font-bold py-2"
            >
              Back to Decks
            </button>
          </div>
        </div>
      );
    }

    const currentCard = currentDeck.cards[currentCardIndex];
    return (
      <div className="max-w-md mx-auto pt-12 p-6 h-[85vh] flex flex-col justify-between text-gray-900">
        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm font-bold text-gray-400">
             <button onClick={() => setStudyMode(false)} className="hover:text-gray-900 transition-colors uppercase tracking-widest">← Exit</button>
             <span>Card {currentCardIndex + 1} of {currentDeck.cards.length}</span>
             <div className="size-2" />
          </div>

          <div className={`flashcard w-full h-[320px] ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
            <div className="flashcard-inner">
              <div className="flashcard-front">
                {currentCard.sourceDeck && <div className="absolute top-4 italic text-[10px] text-primary/50 font-bold tracking-widest">{currentCard.sourceDeck}</div>}
                <p className="text-2xl font-bold leading-relaxed">{currentCard.question}</p>
                <div className="absolute bottom-6 text-gray-300 text-xs font-black uppercase tracking-widest animate-pulse">Tap to flip</div>
              </div>
              <div className="flashcard-back">
                <p className="text-xl font-medium leading-relaxed text-green-900">{currentCard.answer}</p>
                <div className="absolute bottom-6 text-green-500/40 text-xs font-black uppercase tracking-widest">Answer revealed</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`space-y-6 transition-all duration-500 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">How was that?</p>
          <div className="grid grid-cols-3 gap-3">
             <button onClick={() => handleRating('hard')} className="bg-white border-2 border-red-500/20 text-red-500 p-4 rounded-2xl flex flex-col items-center gap-1 hover:bg-red-500 hover:text-white transition-all shadow-sm">
               <X className="size-6" />
               <span className="text-[10px] font-black uppercase">Nope</span>
             </button>
             <button onClick={() => handleRating('medium')} className="bg-white border-2 border-orange-500/20 text-orange-500 p-4 rounded-2xl flex flex-col items-center gap-1 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
               <span className="text-xl font-black">~</span>
               <span className="text-[10px] font-black uppercase">Kinda</span>
             </button>
             <button onClick={() => handleRating('easy')} className="bg-white border-2 border-green-500/20 text-green-500 p-4 rounded-2xl flex flex-col items-center gap-1 hover:bg-green-500 hover:text-white transition-all shadow-sm">
               <Zap className="size-6 fill-current" />
               <span className="text-[10px] font-black uppercase">Got it</span>
             </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="space-y-8 pb-32 pt-8 px-4 max-w-2xl mx-auto text-gray-900">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex items-center gap-6">
        <div className="size-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl text-white font-black shadow-lg">
          {userName.charAt(0)}
        </div>
        <div className="space-y-1">
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}
            className="text-2xl font-black text-gray-900 bg-transparent border-none p-0 focus:ring-0 w-full"
          />
          <p className="text-gray-400 font-bold text-sm">Student • PadhAI Scholar</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Decks', val: stats.decksCreated, color: 'text-primary' },
          { label: 'Cards Studied', val: stats.cardsStudied, color: 'text-blue-500' },
          { label: 'Streak', val: `${stats.streak}d`, color: 'text-orange-500' },
        ].map(s => (
          <div key={s.label} className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 text-center">
            <div className={`text-2xl font-black ${s.color}`}>{s.val}</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
        <div className="p-6 border-b border-black/5"><h3 className="font-bold uppercase text-xs text-gray-400 tracking-widest">Settings</h3></div>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-gray-600">Gemini API Key</label>
              {isKeyValid !== null && (
                <span className={`text-[10px] font-black uppercase tracking-widest ${isKeyValid ? 'text-green-500' : 'text-red-500'}`}>
                  {isKeyValid ? '✓ Key is valid' : '✕ Invalid key'}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <input 
                type="password" 
                value={geminiKey}
                onChange={(e) => { setGeminiKey(e.target.value); setIsKeyValid(null); }}
                placeholder="Paste your key here..."
                className="flex-1 p-3 bg-gray-50 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all font-mono text-sm"
              />
              <button 
                onClick={testGeminiKey}
                disabled={isTestingKey || !geminiKey}
                className="bg-primary/10 text-primary px-4 rounded-xl font-bold text-xs hover:bg-primary/20 transition-all disabled:opacity-50"
              >
                {isTestingKey ? '...' : 'Test'}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center opacity-50">
            <span className="font-bold text-gray-700">Dark Mode</span>
            <div className="w-12 h-6 bg-gray-200 rounded-full cursor-not-allowed"><div className="size-6 bg-white rounded-full shadow-sm" /></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-700">Sound Effects</span>
            <div 
              onClick={() => setSoundEffects(!soundEffects)}
              className={`w-12 h-6 rounded-full transition-all cursor-pointer relative p-1 ${soundEffects ? 'bg-primary' : 'bg-gray-200'}`}
            >
              <motion.div animate={{ x: soundEffects ? 24 : 0 }} className="size-4 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-gray-400 text-xs font-medium">Built at Masters' Union Workshop. PadhAI v1.0</p>
        <button 
          onClick={resetAllData}
          className="text-red-500 font-black text-sm uppercase tracking-widest hover:underline"
        >
          Reset All Data
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home': return renderDashboard();
      case 'flashcards': return studyMode ? renderStudyMode() : renderFlashcards();
      case 'quiz': {
        switch (quizState) {
           case 'home': return renderQuizHome();
           case 'config': return renderQuizConfig();
           case 'active': return renderQuizActive();
           case 'results': return renderQuizResults();
        }
      }
      case 'tutor': return renderTutor();
      case 'profile': return renderProfile();
    }
  };

  if (!showApp) {
    return (
      <div className="min-h-screen selection:bg-primary/30 selection:text-white">
        <Navbar onStart={() => setShowApp(true)} />
        <main>
          <Hero onStart={() => setShowApp(true)} />
          <Features />
          <HowItWorks />
          <SocialProof />
          <div className="py-24 px-6">
            <FadeIn>
              <div className="max-w-5xl mx-auto gradient-purple-cyan rounded-[48px] p-12 md:p-20 text-center space-y-8 shadow-[0_0_80px_rgba(108,92,231,0.4)]">
                <h2 className="text-4xl md:text-6xl font-black text-white">Your next exam is closer than you think.</h2>
                <p className="text-xl text-white/90 font-medium">Start studying smarter today.</p>
                <button 
                  onClick={() => setShowApp(true)}
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl"
                >
                  Launch PadhAI Now
                </button>
              </div>
            </FadeIn>
          </div>
        </main>
        <Footer />
        
        {/* Quick Launch Button Mobile */}
        <div className="fixed bottom-0 left-0 right-0 p-6 md:hidden z-30">
          <button 
            onClick={() => setShowApp(true)}
            className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/30 active:scale-95 transition-all"
          >
            Launch PadhAI
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen app-container relative font-sans text-gray-900">
      <div className="pb-24">
         {renderTabContent()}
      </div>

      {/* Tabs Bar */}
      {!studyMode && quizState !== 'active' && (
      <div className="tab-bar fixed bottom-0 left-0 right-0 flex justify-around items-center h-24 pb-4 px-4 z-50">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'flashcards', label: 'Study', icon: BookOpen },
          { id: 'quiz', label: 'Quiz', icon: Zap },
          { id: 'tutor', label: 'Tutor', icon: MessageSquare },
          { id: 'profile', label: 'User', icon: Menu }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => { setActiveTab(tab.id as any); setStudyMode(false); setQuizState('home'); }}
            className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === tab.id ? 'text-primary' : 'text-gray-400'}`}
          >
            <div className={`p-2 rounded-xl transition-all ${activeTab === tab.id ? 'bg-primary/10' : ''}`}>
              <tab.icon size={22} className={activeTab === tab.id ? 'fill-primary/20' : ''} />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest">{tab.label}</span>
          </button>
        ))}
      </div>
      )}
    </div>
  );
}
