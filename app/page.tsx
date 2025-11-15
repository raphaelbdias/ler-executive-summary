import Image from "next/image";

// ---------- PAGE 1 CONTENT ----------

const execSummary = [
  "Limited Edition Realty (LER) is pioneering a strategic investment gateway into Goa’s premium real estate market, targeting discerning investors seeking secure, high-yield opportunities in one of India’s most promising coastal destinations.",
  "Our approach is rooted in leveraging two core investment models—secured joint ventures and structured financing—that balance investor equity participation with robust governance controls.",
  "LER's portfolio consists of carefully curated projects positioned across key locations in Goa, including premium residential villas and commercial hospitality developments. These projects are underpinned by a commitment to sustainable design, operational excellence, and brand integrity."
];

const governance = [
  "Governing principles emphasize full operational and land ownership control by LER, while investors receive financial participation without management involvement.",
  "Investment funds are protected through strict milestone-linked escrow mechanisms, ensuring fund security and project accountability.",
  "Regular comprehensive reporting, audits, and independent certifications further safeguard investor interests.",
  "This approach allows LER to maintain creative control and uphold brand standards while providing investors with transparent and secure participation in Goa’s flourishing real estate market."
];

const keyHighlights = [
  "Joint Venture Model: Equitable capital infusion aligned with milestone-based returns, ensuring investors benefit directly from project success.",
  "Structured Financing Model: Fixed or revenue-linked returns secured through staged escrow payments, minimizing investor risk.",
  "Hybrid Financing Model: Combining fixed minimum returns with upside potential linked to project revenues to optimize investor value."
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const heroSrc = `${basePath}/images/banner.jpg`;

  return (
    <main className="brochure">
      {/* ===================== PAGE 1 ===================== */}
      <section className="a4-page">
        <div className="content-container">
          {/* HERO */}
          <div className="hero-banner">
            <Image src={heroSrc} alt="Banner" fill priority />
            <div className="hero-overlay">
              <p className="kicker">Investment Summary</p>
              <h1 className="hero-title">
                Limited Edition Realty – Goa Investment Summary
              </h1>
              <p className="hero-subtitle">
                Structured participation in Goa&apos;s premium villa and hospitality developments.
              </p>
            </div>
          </div>

          {/* EXEC SUMMARY + GOVERNANCE + HIGHLIGHTS (Option D layout) */}
          <div className="page1-columns">
            {/* LEFT COLUMN */}
            <div className="left-col">
              <h2 className="section-title">Executive Summary</h2>
              {execSummary.map((p, i) => (
                <p className="para" key={i}>
                  {p}
                </p>
              ))}

              <h2 className="section-title top-gap">Governance Framework</h2>
              <p className="para">{governance[0]}</p>
              <p className="para">{governance[1]}</p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-col">
              <p className="para">{governance[2]}</p>
              <p className="para">{governance[3]}</p>

              <div className="highlights-card">
                <p className="highlights-kicker">What sets LER apart</p>
                <h3 className="highlights-title">Key Highlights</h3>
                <ul className="highlights-list">
                  {keyHighlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <footer className="page-footer">Limited Edition Realty · Page 1 of 3</footer>
        </div>
      </section>

      {/* ===================== PAGE 2 ===================== */}
      <section className="a4-page">
        <div className="content-container page2-start">
          {/* LOCATIONS TABLE */}
          <h2 className="section-title">Shortlisted Investment Locations</h2>
          <p className="para">
            Detailed project-level metrics outlining land and development costs, execution timelines,
            investor payables, and indicative ROI across key micro-markets in Goa.
          </p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Guirim-Mapusa</th>
                  <th>Assagaon</th>
                  <th>Thivim (JV Model)</th>
                  <th>Siolim (Commercial Hotel)</th>
                  <th>Arpora</th>
                  <th>Nerul</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Land Cost Range Per Sq Mt</td>
                  <td>₹35,000 - 40,000</td>
                  <td>₹80,000 - 100,000</td>
                  <td>N/A</td>
                  <td>₹50,000 - 70,000</td>
                  <td>₹50,000 - 70,000</td>
                  <td>₹30,000 - 45,000</td>
                </tr>
                <tr>
                  <td>Plot Size (sq.mt.)</td>
                  <td>700</td>
                  <td>3000</td>
                  <td>5400</td>
                  <td>4500</td>
                  <td>1325</td>
                  <td>30,000 - 45,000</td>
                </tr>
                <tr>
                  <td>Land Cost (incl. clearances)</td>
                  <td>₹2.8 Cr</td>
                  <td>₹24 Cr</td>
                  <td>₹80,00,000</td>
                  <td>₹27 Cr</td>
                  <td>₹7.95 Cr</td>
                  <td>₹13 - ₹17 Cr</td>
                </tr>
                <tr>
                  <td>Development Cost (E2E)</td>
                  <td>₹6.28 Cr</td>
                  <td>₹36.7 Cr</td>
                  <td>₹17.64 Cr</td>
                  <td>₹62.1 Cr</td>
                  <td>₹11.76 Cr</td>
                  <td>₹12 - ₹15 Cr</td>
                </tr>
                <tr>
                  <td>Execution Timeline (months)</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24</td>
                  <td>24 - 28</td>
                </tr>
                <tr>
                  <td>Indicative Sale Value</td>
                  <td>₹10.08 Cr</td>
                  <td>₹64.8 Cr</td>
                  <td>₹3.65 Cr</td>
                  <td>₹112.5 Cr</td>
                  <td>₹23.85 Cr</td>
                  <td>₹38 - ₹45 Cr</td>
                </tr>
                <tr>
                  <td>Projected ROI (%)</td>
                  <td>62%</td>
                  <td>57%</td>
                  <td>30–45%</td>
                  <td>Revenue-linked</td>
                  <td>35–50%</td>
                  <td>30–45%</td>
                </tr>
                <tr>
                  <td>Total Payable to Investor</td>
                  <td>₹8.17 Cr</td>
                  <td>₹47.6 Cr</td>
                  <td>₹33.05 Cr</td>
                  <td>₹114.43 Cr</td>
                  <td>₹18.66 Cr</td>
                  <td>₹15–22 Cr</td>
                </tr>
                <tr>
                  <td>Investor ROI @15% PA</td>
                  <td>₹1.88 Cr</td>
                  <td>₹11 Cr</td>
                  <td>₹10.28 Cr</td>
                  <td>₹42.91 Cr</td>
                  <td>₹4.31 Cr</td>
                  <td>₹5–8 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ROI BAND */}
          <div className="section-band band-navy top-gap">
            <h2>Return on Investment Options</h2>
          </div>

          <div className="page2-grid">
            {/* ROI CARDS */}
            <div className="roi-column">
              <div className="roi-box">
                <h3>Joint Venture Model</h3>
                <p className="para">
                  Direct equity participation aligned to capital contribution, with upside linked to
                  realised project profits post-completion and sales realisation.
                </p>
                <ul className="para-list">
                  <li>Milestones achieved on schedule.</li>
                  <li>Market remains favourable for targeted sale values.</li>
                  <li>Transparent, pre-agreed profit sharing mechanisms.</li>
                </ul>
              </div>

              <div className="roi-box">
                <h3>Structured Financing</h3>
                <p className="para">
                  Fixed or revenue-linked returns through controlled, escrow-verified capital deployment,
                  suited for investors seeking predictable outcomes.
                </p>
                <ul className="para-list">
                  <li>Milestones independently verified before drawdowns.</li>
                  <li>Revenue performance aligned to projections.</li>
                  <li>Strong audit and escrow controls across the lifecycle.</li>
                </ul>
              </div>
            </div>

            {/* EMPTY RIGHT COLUMN FOR WHITE SPACE BALANCE */}
            <div className="roi-aside-note">
              <p className="kicker">Risk & reward alignment</p>
              <p className="para">
                Both structures are designed to align capital deployment with real asset progress, combining
                downside protection through escrow with measured exposure to Goa&apos;s growth upside.
              </p>
            </div>
          </div>

          <footer className="page-footer">Limited Edition Realty · Page 2 of 3</footer>
        </div>
      </section>

      {/* ===================== PAGE 3 ===================== */}
      <section className="a4-page page3">
        <div className="content-container">
          {/* GOVERNANCE BAND */}
          <div className="section-band band-navy">
            <h2>Governing Principles & Key Assumptions</h2>
          </div>

          <div className="gov-grid">
            <div className="gov-left">
              <h3 className="gov-heading">Governing Principles</h3>
              <p className="para">
                Limited Edition Realty retains full land ownership and operational control over all projects,
                ensuring disciplined governance and consistent brand execution.
              </p>
              <p className="para">
                Investment funds are released strictly via milestone-linked escrow, tied to independent
                verification of progress and budget adherence.
              </p>
              <p className="para">
                Regular reporting, third-party audits, and certification-driven oversight provide
                transparency and protect investor capital.
              </p>
            </div>

            <div className="gov-right">
              <h3 className="gov-heading">Key Assumptions</h3>
              <ul className="para-list">
                <li>Investors participate solely as financial partners without management rights.</li>
                <li>Construction milestones and timelines are met with disciplined execution.</li>
                <li>
                  Transparent communications and structured reporting are maintained throughout the project lifecycle.
                </li>
              </ul>
            </div>
          </div>

          {/* PROJECT PROFILES BAND */}
          <div className="section-band band-slate top-gap">
            <h2>Project Profiles & Locations</h2>
          </div>

          <div className="table-wrapper themed-table dark-table">
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Land Size</th>
                  <th>Unit Land Cost</th>
                  <th>FAR / FSI</th>
                  <th>Build-up Area</th>
                  <th>Project Type</th>
                  <th>Investment Model</th>
                  <th>Key Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Guirim-Mapusa</td>
                  <td>700</td>
                  <td>40,000</td>
                  <td>0.6</td>
                  <td>420</td>
                  <td>Residential Villas</td>
                  <td>Direct / Joint Venture</td>
                  <td>Mid-sized villa project</td>
                </tr>
                <tr>
                  <td>Assagaon</td>
                  <td>3,000</td>
                  <td>80,000</td>
                  <td>0.6</td>
                  <td>1,800</td>
                  <td>Residential Villas</td>
                  <td>Direct / Joint Venture</td>
                  <td>Prime residential zone</td>
                </tr>
                <tr>
                  <td>Thivim</td>
                  <td>5,400</td>
                  <td>1,481</td>
                  <td>0.8</td>
                  <td>4,320</td>
                  <td>Villas (JV Model)</td>
                  <td>Joint Venture Preferred</td>
                  <td>Large-scale JV project</td>
                </tr>
                <tr>
                  <td>Siolim</td>
                  <td>4,500</td>
                  <td>60,000</td>
                  <td>1.0</td>
                  <td>4,500</td>
                  <td>Commercial Hotel</td>
                  <td>Structured Financing</td>
                  <td>Revenue-linked hotel development</td>
                </tr>
                <tr>
                  <td>Arpora</td>
                  <td>1,325</td>
                  <td>60,000</td>
                  <td>0.6</td>
                  <td>795</td>
                  <td>Residential Villas</td>
                  <td>Direct / Joint Venture</td>
                  <td>Compact and well-located</td>
                </tr>
              </tbody>
            </table>
          </div>

          <footer className="page-footer">Limited Edition Realty · Page 3 of 3</footer>
        </div>
      </section>
    </main>
  );
}
