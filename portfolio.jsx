import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const resume = {
    name: "A. SAI JAYANTH",
    title: "Product Manager | PM",
    email: "jayanthallumolu@gmail.com",
    phone: "+91 7207815313",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/a-sai-jayanth-a19854312/",
    resumeLink: "#",
  };

  const caseStudies = [
    {
      id: 1,
      title: "Credit on UPI - Market Analysis",
      subtitle: "Analysing India's UPI credit market and user needs",
      content: `
<section>
  <h3 class="font-semibold text-lg mb-2">1. Market Size & Sub-segments</h3>
  <p>The UPI payments market is projected to grow from $16.9B (2024) to $478.9B by 2033, at a CAGR of 45%. Credit-on-UPI currently handles Rs.10,000 crore per month (Aug 2024), with potential to reach $1 trillion by 2030. Key sub-segments include pre-approved credit lines, instant micro-loans, merchant lending, and UPI-linked credit cards.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">2. Chosen Sub-segment & Jobs to be Done</h3>
  <p>Focus: Pre-approved credit lines for consumers enabling instant UPI purchases despite insufficient balance. Users seek seamless approvals, transparency, and flexible repayments through familiar interfaces.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">3. Key Players</h3>
  <p>Major players include PhonePe, Google Pay, Paytm, and banks underwriting credit. Fintech lenders like M2P Fintech are building UPI-based credit stacks with support from NPCI infrastructure.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">4. Value Proposition & Trends</h3>
  <p>Instant activation, seamless integration, transparency, and inclusion are core differentiators. Recent trends include UPI-credit card integration, data-based underwriting, and rapid merchant adoption.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">5. Product Vision & Features</h3>
  <p>Vision: “Seamless credit within UPI—instant access, transparent terms, rewarding experience.”</p>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>Instant activation post-KYC</li>
    <li>Use credit option at checkout</li>
    <li>Flexible repayment (30/60 days or EMI)</li>
    <li>Rewards, dashboards, and credit insights</li>
  </ul>

  <h3 class="font-semibold text-lg mt-6 mb-2">6. Metrics & Challenges</h3>
  <p>Measure activation rate, transaction size, repayment compliance, and user retention. Key challenges: default risk, merchant education, and regulatory clarity.</p>
</section>`
    },
    {
      id: 2,
      title: "Zomato Group Ordering - Product Teardown",
      subtitle: "Comprehensive teardown of Zomato’s group ordering experience",
      content: `
<section>
  <h3 class="font-semibold text-lg mb-2">1. Why Teardown?</h3>
  <p>Reverse-engineering Zomato’s group order feature reveals UX tradeoffs, user needs, and business levers behind shared meal ordering experiences.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">2. Market & Business Context</h3>
  <p>Targeting offices, colleges, and friend groups, Zomato’s group ordering reduces friction and increases average order value (AOV). Competes with Swiggy’s similar feature.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">3. User Personas</h3>
  <p>Four archetypes—Coordinator Carl, Planner Pooja, Host Harish, and Student Sameer—capture needs from coordination to payment flexibility.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">4. Problem Statement</h3>
  <p>Current group ordering involves passing phones, manual entry errors, payment friction, and coordination fatigue.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">5. Core Journey</h3>
  <p>Starts with “Create group order”, progresses through sharing links, adding items, and finalizing payment under a single payer. Deferred split payments introduce later friction.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">6. Key UX Decisions</h3>
  <p>Shared cart via link and phased rollouts balance simplicity and operational feasibility.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">7. Suggested Improvements</h3>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>In-app split payments using UPI collect</li>
    <li>Item tagging and packaging by owner</li>
    <li>Coupon allocation logic and reminders</li>
    <li>Corporate ordering modes and analytics</li>
  </ul>

  <h3 class="font-semibold text-lg mt-6 mb-2">8. Key Metrics</h3>
  <p>Track creation rate, participant completion, AOV uplift, repeat group usage, and conversion.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">9. Summary</h3>
  <p>Group ordering boosts revenue through convenience and social engagement. Split payments and ownership labeling can further enhance adoption and trust.</p>
</section>`
    },
    {
      id: 3,
      title: "Zepto UX Analysis - Usability Audit",
      subtitle: "Evaluating Zepto’s 10-minute delivery experience using UX heuristics",
      content: `
<section>
  <h3 class="font-semibold text-lg mb-2">Executive Summary</h3>
  <p>Zepto excels in delivery speed and clean UI but faces usability challenges around visibility, user control, and error prevention. This audit evaluates the app using Nielsen’s 10 heuristics.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">Key Findings</h3>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>Excellent visibility and feedback loops with live tracking</li>
    <li>Consistent design language and imagery standards</li>
    <li>Critical gaps in address validation and cancellation options</li>
    <li>Minor inconsistencies in CTA placements and cluttered home feed</li>
  </ul>

  <h3 class="font-semibold text-lg mt-6 mb-2">Recommendations</h3>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>Enable cancellation within 5 minutes of packing</li>
    <li>Add real-time address validation and duplicate order detection</li>
    <li>Introduce undo for destructive actions</li>
    <li>Streamline homepage sections for reduced cognitive load</li>
  </ul>

  <h3 class="font-semibold text-lg mt-6 mb-2">Conclusion</h3>
  <p>Zepto’s foundation is strong; addressing control and error issues will solidify its user trust and reduce support overhead.</p>
</section>`
    },
    {
      id: 4,
      title: "AI Date Planning Assistant - Product Design",
      subtitle: "Designing an AI-powered assistant for seamless date coordination",
      content: `
<section>
  <h3 class="font-semibold text-lg mb-2">Concept Overview</h3>
  <p>This case study introduces an AI-based date planning assistant within dating apps to simplify planning, coordination, and logistics while improving match-to-meet conversion rates.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">Core User Jobs</h3>
  <ul class="list-disc list-inside mt-2 space-y-1">
    <li>Discover personalized date ideas based on shared interests</li>
    <li>Coordinate schedules and locations seamlessly</li>
    <li>Manage logistics, reminders, and venue details</li>
    <li>Access past plans and avoid repetition</li>
    <li>Receive AI-powered conversation prompts and feedback</li>
  </ul>

  <h3 class="font-semibold text-lg mt-6 mb-2">Design Flow</h3>
  <p>The flow begins when matched users express interest in meeting. The assistant gathers quick preferences, generates 3–5 tailored suggestions, and enables both to confirm time, venue, and logistics within a shared interface.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">Key Screens</h3>
  <p>Discovery banners, preference selection cards, AI-generated venue cards, availability calendars, and confirmed plan dashboards create an intuitive experience.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">Outcomes & Metrics</h3>
  <p>Metrics include activation rate, plan completion, chat-to-date conversion, and repeat usage. Design focuses on collaborative, async-friendly, and privacy-aware experiences.</p>

  <h3 class="font-semibold text-lg mt-6 mb-2">Future Enhancements</h3>
  <p>Learning-based personalization, group date planning, in-app bookings, safety integrations, and premium personalization packages.</p>
</section>`
    }
  ];

  const currentCase = caseStudies.find(cs => page === `case${cs.id}`);

  if (currentCase) {
    return (
      <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors`}> 
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}> 
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => setPage('home')}>{resume.name}</h1>
            <button onClick={() => setDarkMode(!darkMode)} className="border px-3 py-1 rounded-md">{darkMode ? 'Light' : 'Dark'}</button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold mb-2">{currentCase.title}</h2>
          <p className="text-sm opacity-70 mb-6">{currentCase.subtitle}</p>
          <article className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`} dangerouslySetInnerHTML={{ __html: currentCase.content }} />
          <div className="mt-6">
            <button onClick={() => setPage('home')} className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">← Back to Case Studies</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}> 
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{resume.name}</h1>
            <p className="text-sm opacity-80">{resume.title} — {resume.location}</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#case-studies" className="hover:underline">Case Studies</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="border px-3 py-1 rounded-md">
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="hero" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-3">Product Manager & Problem Solver</h2>
            <p className="opacity-80 mb-5">I design and refine digital products through research-driven strategies, practical design thinking, and data-informed decisions. My goal is to build experiences that are not just functional but meaningful.</p>
            <div className="flex gap-3">
              <a href="#case-studies" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">See Work</a>
              <a href="#contact" className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">Contact</a>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h3 className="font-semibold">Quick Info</h3>
            <ul className="mt-3 text-sm space-y-2 opacity-90">
              <li><strong>Email:</strong> {resume.email}</li>
              <li><strong>Phone:</strong> {resume.phone}</li>
              <li><strong>LinkedIn:</strong> <a href={resume.linkedin} className="underline text-indigo-500">View Profile</a></li>
            </ul>
          </div>
        </section>

        <section id="case-studies" className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map(cs => (
              <article key={cs.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow transition hover:shadow-md`}> 
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold mb-1">{cs.title}</h4>
                    <p className="text-sm opacity-70 mb-3">{cs.subtitle}</p>
                    <p className="text-sm opacity-80 line-clamp-3">{cs.content.replace(/<[^>]+>/g, '').substring(0, 140)}...</p>
                  </div>
                </div>
                <button onClick={() => setPage(`case${cs.id}`)} className="mt-4 text-sm font-medium text-indigo-600 hover:underline">Read More →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={`mt-16 p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-sm mt-2 opacity-90">Email: <a href={`mailto:${resume.email}`} className="underline">{resume.email}</a> • Phone: {resume.phone}</p>
          <div className="mt-4 flex gap-3">
            <a href={resume.resumeLink} className="px-4 py-2 border rounded bg-indigo-600 text-white hover:bg-indigo-700 transition">Download Resume</a>
          </div>
        </section>

        <footer className="mt-12 text-center text-xs opacity-60">© {new Date().getFullYear()} A. Sai Jayanth — All rights reserved.</footer>
      </main>
    </div>
  );
}
