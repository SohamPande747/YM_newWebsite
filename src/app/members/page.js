"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

const membersByYear = {
  2024: [
    { "name": "Dr. Sandeep Ahankari", "role": "Faculty Coordinator", "image": "/images/Board2425/SandeepSir.jpg" },
    { "name": "Mayuresh", "role": "Chairperson", "image": "/images/Board2425/Mayuresh.jpg" },
    { "name": "Aastha Dugad", "role": "Secretary", "image": "/images/Board2425/Aastha.png" },
    { "name": "Soham Pande", "role": "Co-Secretary", "image": "/images/Board2425/Soham.png" },
    { "name": "Manas Kulkarni", "role": "Vice Chairperson", "image": "/images/Board2425/Manas.jpg" },
    { "name": "Anish Joshi", "role": "Management Head", "image": "/images/Board2425/Anish Joshi.jpg" },
    { "name": "Anchal Bhartiya", "role": "Events Head", "image": "/images/Board2425/Anchal.jpg" },
    { "name": "Atharva Narkar", "role": "Design Head", "image": "/images/Board2425/Atharva Narkar.jpg" },
    { "name": "Niranjan Thite", "role": "Editorial Head", "image": "/images/Board2425/Niranjan.png" },
    { "name": "Ishita Bakde", "role": "PR and Finance Head", "image": "/images/Board2425/Ishita Bakde.jpg" },
    { "name": "Chinmayee Chaudhary", "role": "Technical Head", "image": "/images/Board2425/Chinmayee.jpg" },
    { "name": "Angiras Nazar", "role": "Creativity Head", "image": "/images/Board2425/Angiras.png" }
]

  
};

export default function Members() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const members = membersByYear[selectedYear] || [];
  const topMember = members[0];
  const gridMembers = members.slice(1);

  return (
    <>
      <Head>
        <title>Executive Board</title>
      </Head>

      <section className={styles.members}>
        <div className={styles.top}>
          <h1 className={styles.heading}>Executive Board</h1>
          <select
            className={styles.yearSelector}
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {Object.keys(membersByYear)
              .reverse()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>

        {/* Top Member */}
        {topMember && (
          <div className={styles.topMember}>
            <div className={styles.headsInfoContainer}>
              <div className={styles.headsPhotoContainer}>
                <a href={topMember.link} target="_blank" rel="noopener noreferrer">
                  <Image className={styles.clubHeadImage} src={topMember.image} alt={topMember.name} width={200} height={200} />
                </a>
              </div>
              <div className={styles.headsInfo}>
                <a href={topMember.link} target="_blank" rel="noopener noreferrer">
                  <h3 className={styles.headName}>{topMember.name}</h3>
                  <p className={styles.headSubname}>{topMember.role}</p>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Members Grid */}
        <div className={styles.clubHeads}>
          {gridMembers.map((member, index) => (
            <div key={index} className={styles.headsInfoContainer}>
              <div className={styles.headsPhotoContainer}>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <Image className={styles.clubHeadImage} src={member.image} alt={member.name} width={200} height={200} />
                </a>
              </div>
              <div className={styles.headsInfo}>
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <h3 className={styles.headName}>{member.name}</h3>
                  <p className={styles.headSubname}>{member.role}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
