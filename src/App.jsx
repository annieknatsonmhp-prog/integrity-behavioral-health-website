import React from 'react'
import { ShieldCheck, Scale, FileCheck2, HeartHandshake, Building2, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react'

export default function App(){
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <div className="logo-mark"><ShieldCheck size={20} /></div>
            <div className="logo-name">
              <div style={{fontWeight:700}}>Integrity Behavioral Health</div>
              <div className="small">& Compliance Center</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#mission">Mission</a>
            <a href="#vision">Vision & Values</a>
            <a href="#overview">Overview</a>
            <a href="#services">Programs</a>
            <a href="#referrals">Referrals</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn" href="#contact">Refer a Client <ArrowRight size={16}/></a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="chip"><Scale size={14}/> Court‑Trusted, Client‑Focused</span>
            <h1 style={{marginTop:20, fontSize:'2.8rem', lineHeight:1.1}}>
              Integrity Behavioral Health <span className="gold" style={{display:'block'}}>& Compliance Center</span>
            </h1>
            <p style={{marginTop:12, fontSize:'1.1rem', color:'#4b5563', maxWidth:640}}>
              “Where ethics, accountability, and healing meet.” We bridge the gap between judicial systems and behavioral health with evidence‑based, trauma‑informed care for court‑involved and community clients.
            </p>
            <div style={{marginTop:18, display:'flex', gap:10, flexWrap:'wrap'}}>
              <a className="btn" href="#services">Explore Programs <ArrowRight size={16}/></a>
              <a className="btn secondary" href="#overview">About Our Center</a>
            </div>
            <div className="badges">
              <div style={{display:'flex',alignItems:'center',gap:8}}><CheckCircle2 size={16}/> Evidence‑Based</div>
              <div style={{display:'flex',alignItems:'center',gap:8}}><CheckCircle2 size={16}/> Trauma‑Informed</div>
              <div style={{display:'flex',alignItems:'center',gap:8}}><CheckCircle2 size={16}/> Culturally Responsive</div>
            </div>
          </div>
          <div className="card">
            <div style={{display:'grid', gap:12}}>
              <div style={{display:'flex', gap:12}}>
                <FileCheck2 size={20} style={{marginTop:2}}/>
                <div>
                  <p style={{fontWeight:700}}>Court‑Ordered Psychotherapy</p>
                  <p style={{color:'#6b7280', fontSize:14}}>Structured, evidence‑based care addressing anger, trauma, depression, substance use, and impulsivity.</p>
                </div>
              </div>
              <div style={{display:'flex', gap:12}}>
                <HeartHandshake size={20} style={{marginTop:2}}/>
                <div>
                  <p style={{fontWeight:700}}>Collaborative Reporting</p>
                  <p style={{color:'#6b7280', fontSize:14}}>Timely progress updates, attendance verification, and compliance documentation for courts and probation.</p>
                </div>
              </div>
              <div style={{display:'flex', gap:12}}>
                <Building2 size={20} style={{marginTop:2}}/>
                <div>
                  <p style={{fontWeight:700}}>Community & Preventive Services</p>
                  <p style={{color:'#6b7280', fontSize:14}}>Voluntary counseling, workshops, and skills groups that promote resilience and wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section alt">
        <div className="container">
          <h2 style={{fontSize:'2rem'}}>Mission</h2>
          <p style={{marginTop:12, color:'#4b5563', lineHeight:1.7}}>
            At <strong>Integrity Behavioral Health & Compliance Center</strong>, our mission is to deliver ethical, evidence‑based, and trauma‑informed therapeutic services that empower individuals to embrace accountability and achieve emotional wellness. We support court‑involved and community clients through structured, compassionate care that fosters insight, responsibility, and long‑term change. By uniting professionalism with empathy, we bridge the gap between justice systems and behavioral health—helping individuals rebuild trust, stability, and purpose in their lives.
          </p>
        </div>
      </section>

      {/* Vision & Values */}
      <section id="vision" className="section gray">
        <div className="container grid grid-2">
          <div>
            <h2 style={{fontSize:'2rem'}}>Vision</h2>
            <p style={{marginTop:12, color:'#4b5563', lineHeight:1.7}}>
              Our vision is to be a leading provider of forensic and behavioral health services recognized for our commitment to integrity, innovation, and impact. We strive to create a system where accountability and compassion coexist, where individuals are met with respect and guided toward meaningful transformation. Through collaboration with judicial, community, and clinical partners, we envision a future in which every client is given the opportunity to heal, grow, and contribute positively to society.
            </p>
          </div>
          <div>
            <h3 style={{fontSize:'1.4rem'}}>Core Values</h3>
            <ul className="grid values" style={{marginTop:12, gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:12, paddingLeft:0, listStyle:'none'}}>
              {[
                ['Integrity','Honesty, ethics, and transparency in every interaction.'],
                ['Accountability','Responsibility and self‑awareness for lasting change.'],
                ['Compassion','Empathy and dignity for every individual.'],
                ['Collaboration','Courts, community agencies, and families working together.'],
                ['Excellence','Quality care guided by evidence‑based practice.'],
                ['Cultural Humility','Respect for each client’s unique background and beliefs.'],
                ['Restoration','Healing and rehabilitation through structure and support.']
              ].map(([t,d])=> (
                <li key={t}><p style={{fontWeight:700}}>{t}</p><p style={{color:'#6b7280', fontSize:14, marginTop:4}}>{d}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="section alt">
        <div className="container">
          <h2 style={{fontSize:'2rem'}}>Company Overview</h2>
          <div style={{marginTop:12, color:'#4b5563', lineHeight:1.7, display:'grid', gap:12}}>
            <p><strong>Integrity Behavioral Health & Compliance Center</strong> is a trauma‑informed and evidence‑based organization providing comprehensive therapeutic services for court‑involved and community clients. Founded on ethics, accountability, and compassion, we deliver individualized care that bridges the gap between the judicial system and behavioral health services.</p>
            <p>Our programs support individuals navigating probation, diversion, or other court mandates, while also offering voluntary counseling and wellness options. Services include clinical assessments, individual and group psychotherapy, behavioral health education, and compliance‑based interventions focused on rehabilitation and prevention.</p>
            <p>We collaborate closely with judges, probation officers, attorneys, and community partners to promote continuity of care and ensure adherence to court requirements. Beyond compliance, our mission is to inspire meaningful transformation by helping clients develop insight, emotional regulation, and resilience.</p>
            <p>Through a multidisciplinary approach that combines therapeutic best practices with a commitment to ethical care, we aim to restore stability, rebuild trust, and empower individuals to lead purposeful, responsible lives.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section gray">
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:12,flexWrap:'wrap'}}>
            <div>
              <h2 style={{fontSize:'2rem'}}>Programs & Services</h2>
              <p style={{marginTop:6, color:'#4b5563'}}>Rooted in evidence‑based practice, cultural responsiveness, and trauma‑informed care.</p>
            </div>
            <a className="btn" href="#contact">Request Intake <ArrowRight size={16}/></a>
          </div>
          <div className="grid grid-3" style={{marginTop:16}}>
            {[
              ['Court‑Ordered Psychotherapy','Structured treatment addressing anger, impulsivity, trauma, depression, or substance use; supports court expectations and behavioral change.'],
              ['Individual Therapy','One‑on‑one counseling integrating CBT, Solution‑Focused, and mindfulness‑based approaches for healing and empowerment.'],
              ['Group Therapy & Psychoeducation','Anger Management, Substance Use Recovery, Accountability & Decision‑Making, Life Skills & Wellness.'],
              ['Family & Relationship Counseling','Strengthening communication, rebuilding trust, and promoting supportive dynamics through collaborative problem‑solving.'],
              ['Clinical Assessments & Evaluations','Biopsychosocial, Substance Use, Anger & Violence Risk screenings, and Mental Health diagnostic evaluations meeting court standards.'],
              ['Compliance Monitoring & Reporting','Transparent progress reports, attendance documentation, and treatment updates for courts, probation, and attorneys.'],
              ['Community Counseling & Prevention','Voluntary therapy for stress, anxiety, depression, life transitions; workshops for stress management and emotional regulation.'],
              ['Future Programs (Coming Soon)','Domestic Violence Intervention, Parenting Education, Crisis Intervention & Trauma Recovery, and statewide Telehealth services.']
            ].map(([t,d]) => (
              <div key={t} className="card">
                <p style={{fontWeight:700}}>{t}</p>
                <p style={{marginTop:6, color:'#6b7280', fontSize:14, lineHeight:1.6}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referrals */}
      <section id="referrals" className="section alt">
        <div className="container grid grid-2">
          <div>
            <h2 style={{fontSize:'2rem'}}>Referral Sources & Process</h2>
            <div style={{marginTop:10, color:'#4b5563'}}>
              <p style={{fontWeight:700}}>We accept referrals from:</p>
              <ul style={{margin:'8px 0 0 18px', lineHeight:1.8}}>
                <li>Judges and Court Administrators</li>
                <li>Probation and Parole Officers</li>
                <li>Attorneys and Public Defenders</li>
                <li>DFCS and Community Agencies</li>
                <li>Self‑Referrals and Family Members</li>
              </ul>
              <p style={{marginTop:12,fontWeight:700}}>What to include with referrals:</p>
              <ul style={{margin:'8px 0 0 18px', lineHeight:1.8}}>
                <li>Client contact information and case number (if applicable)</li>
                <li>Mandated services and required timelines</li>
                <li>Any prior evaluations or treatment history</li>
              </ul>
            </div>
          </div>
          <div className="card" style={{background:'#f6f6f6'}}>
            <p style={{fontWeight:700}}>Turnaround & Reporting</p>
            <p style={{marginTop:6, color:'#4b5563', fontSize:14}}>We provide timely attendance verification and progress updates. Formal compliance reports are available upon request and aligned with court schedules.</p>
            <a className="btn" href="#contact" style={{marginTop:10}}>Submit a Referral <ArrowRight size={16}/></a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{background:'#2B2B2B', color:'white'}}>
        <div className="container grid grid-2">
          <div>
            <h2 style={{fontSize:'2rem'}}>Contact</h2>
            <p style={{marginTop:8, color:'#d1d5db'}}>Have a question or need to make a referral? Reach out and our team will respond promptly.</p>
            <div style={{marginTop:14, display:'grid', gap:8, fontSize:15}}>
              <p style={{display:'flex',alignItems:'center',gap:8}}><Phone size={16}/> 912-225-2021</p>
              <p style={{display:'flex',alignItems:'center',gap:8}}><Mail size={16}/> annieknatsonmhp@gmail.com</p>
            </div>
            <p className="notice">*Privacy Notice: Do not include confidential case details in this form. We will follow up by phone for protected information.</p>
            <p style={{marginTop:12, fontSize:14, color:'#e5e7eb'}}><strong>Payment Policy:</strong> Integrity Behavioral Health & Compliance Center is a <strong>self‑pay only</strong> practice. Receipts are provided for out‑of‑network reimbursement.</p>
          </div>
          <form className="card form" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We received your message and will follow up by phone or email.')}}>
            <div style={{display:'grid', gap:10}}>
              <div>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="First and last name" required/>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" required/>
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" placeholder="(###) ###-####" required/>
                </div>
              </div>
              <div>
                <label htmlFor="role">I am a…</label>
                <select id="role">
                  <option>Probation/Parole Officer</option>
                  <option>Attorney / Public Defender</option>
                  <option>Judge / Court Staff</option>
                  <option>DFCS / Community Agency</option>
                  <option>Client / Family Member</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Briefly describe your request (no PHI)"></textarea>
              </div>
              <button type="submit">Send Secure Inquiry</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <p>© {new Date().getFullYear()} Integrity Behavioral Health & Compliance Center. All rights reserved.</p>
          <div style={{display:'flex',gap:12}}>
            <a href="#mission">Mission</a>
            <a href="#services">Programs</a>
            <a href="#referrals">Referrals</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
