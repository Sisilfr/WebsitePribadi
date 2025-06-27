import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2 className="about-title">My Journey</h2>
      <div className="resume-item">
        <p>
          A dedicated and detail-oriented professional with over 5 years of experience in customer service, administration, and hospitality. 
          Known for strong communication skills, quick learning ability, and a passion for delivering excellent service. 
          Currently pursuing a Bachelor's degree in Data Science to expand my analytical and technical capabilities.
        </p>
      </div>

      <div className="resume-item">
        <h3>Work Experience Highlights</h3>
        <ul>
          <li><strong>Customer Relation Officer – PT. MEA Digital Agency (2024 – Present):</strong> Managed 72+ clients, improved service delivery, and enhanced client satisfaction with reporting and cross-selling.</li>
          <li><strong>Customer Service – Onna Interior (2023):</strong> Managed customer data, resolved issues, managing contract follow-ups, payments, and purchase orders.</li>
          <li><strong>Front Office – PIA Hotel (2022 – 2023):</strong> Provide check-in check-out guest service, resolved complaints, and coordinated operations.</li>
          <li><strong>Warehouse Admin – Ekacellular (2022):</strong> Maintained accurate inventory reports, contributed to daily product audits and sales, and improved customer interaction online.</li>
          <li><strong>Warehouse Admin – PT. Trimulia Warnajaya (2021 – 2022):</strong> Managed barcode printing, fabric tracking, and warehouse input systems.</li>
          <li><strong>Barcode Admin – PT. Karya Putra Sangkuriang (2020 – 2021):</strong> Ensured quality control and inventory data integrity for spare parts.</li>
        </ul>
      </div>

      <div className="resume-item">
        <h3>Education</h3>
        <ul>
          <li><strong>Bachelor Degree in Data Science (Ongoing)</strong> – Cakrawala University, 2024 – Present</li>
          <li><strong>High School Graduate</strong> – SMAN 6 Cimahi, 2018</li>
        </ul>
      </div>

<div className="resume-item skill-box">
  <h2 className="skills-title">Technical and Skill Proficiencies</h2>

  <div className="skills-category">
    <h3>Core Competencies</h3>
    <div className="skills-tags">
      <span className="tag">Customer Relationship Management (CRM)</span>
      <span className="tag">Data Entry & Reporting</span>
      <span className="tag">Complaint Resolution & Critical Thinking</span>
      <span className="tag">Clear Communication & Collaboration</span>
      <span className="tag">Inventory & Order Management</span>
      <span className="tag">Empathy & Active Listener</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Technical Skills</h3>
    <div className="skills-tags">
      <span className="tag">Microsoft Office</span>
      <span className="tag">Google Workspace</span>
      <span className="tag">Canva</span>
      <span className="tag">Photoshop</span>
      <span className="tag">Illustrator</span>
      <span className="tag">Shopee Ops</span>
      <span className="tag">Tokopedia Ops</span>
      <span className="tag">TikTokShop Ops</span>
      <span className="tag">Digital Marketing</span>
      <span className="tag">Ads Strategy</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Programming Languages</h3>
    <div className="skills-tags scroll-left">
      <span className="tag">Python</span>
      <span className="tag">SQL</span>
      <span className="tag">JavaScript</span>
      <span className="tag">C++</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Tools & Frameworks</h3>
    <div className="skills-tags scroll-left">
      <span className="tag">Vite</span>
      <span className="tag">Numpy</span>
      <span className="tag">Pandas</span>
      <span className="tag">Tableau</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Languages</h3>
    <div className="skills-tags scroll-left">
      <span className="tag">Indonesian (Fluent)</span>
      <span className="tag">English (Fluent)</span>
      <span className="tag">German (Intermediate)</span>
      <span className="tag">Japanese (Intermediate)</span>
      <span className="tag">Korean (Intermediate)</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Interests</h3>
    <div className="skills-tags">
      <span className="tag">Data Science</span>
      <span className="tag">Machine Learning</span>
      <span className="tag">Deep Learning</span>
      <span className="tag">Beauty</span>
      <span className="tag">Design</span>
      <span className="tag">Books</span>
      <span className="tag">Pilates</span>
      <span className="tag">Health</span>
      <span className="tag">Technology</span>
    </div>
  </div>
</div>
    </section>
  );
}

export default Resume;