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
],
2023: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Sharv Patil", "role": "Chairperson", "image": "/images/Board2324/Sharv Patil.jpg", "link_profile": "" },
  { "name": "Disha Shekle", "role": "President", "image": "/images/Board2324/Disha Shelke.jpg", "link_profile": "" },
  { "name": "Om Potdar", "role": "Vice Chairperson", "image": "/images/Board2324/OM POTDAR.jpeg", "link_profile": "" },
  { "name": "Atharva Yawalkar", "role": "Secretary", "image": "/images/Board2324/Atharva_Yawalkar.jpg", "link_profile": "" }, 
  { "name": "Prathamesh Bhangale", "role": "Design Head", "image": "/images/Board2324/Prathamesh_Bhangale.jpg", "link_profile": "" },
  { "name": "Mayuresh Parale", "role": "Editorial Head", "image": "/images/Board2324/Mayuresh Parale.jpg", "link_profile": "" },
  { "name": "Ayush Katkurwar", "role": "Publicity Head", "image": "/images/Board2324/Ayush Katkurwar.jpg", "link_profile": "" },
  { "name": "Atharva Navghane", "role": "Technical Head", "image": "/images/Board2324/Atharva Pravin Navghane.jpg", "link_profile": "" },
  { "name": "Anish Adkar", "role": "Finance Head", "image": "/images/Board2324/Anish Adkar.jpeg", "link_profile": "" },
  { "name": "Aastha Dugad", "role": "Co Secretary", "image": "/images/Board2324/Astha Dugad.jpg", "link_profile": "" },
  { "name": "Ameya Gokhale", "role": "Drama Head", "image": "/images/Board2324/Ameya_Gokhale_.jpg", "link_profile": "" },
  { "name": "Yashodhan Prabhughate", "role": "Creative Head", "image": "/images/Board2324/Yashodhan Prabhughate.jpg", "link_profile": "" }
],
2022: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Gayatri Kalyani", "role": "Chairperson", "image": "/images/Board2223/Gayatri kalyani profile1.jpg", "link_profile": "" },
  { "name": "Tanmay Deshpande", "role": "Vice Chairperson", "image": "/images/Board2223/Tanmay.jpeg", "link_profile": "" },
  { "name": "Mandar Kulkarni", "role": "Secretary", "image": "/images/Board2223/mandar kulkarni.jpeg", "link_profile": "" },
  { "name": "Shreya Markhedkar", "role": "Co-Secretary", "image": "/images/Board2223/Shreya Markhedkar.jpeg", "link_profile": "" },
  { "name": "Madhav Patil", "role": "Design Head", "image": "/images/Board2223/Madhav Patil.jpg", "link_profile": "" },
  { "name": "Himanshu Shah", "role": "Editorial Head", "image": "/images/Board2223/Himanshu Shah.jpeg", "link_profile": "" },
  { "name": "Sharv Patil", "role": "Publicity Head", "image": "/images/Board2223/Sharv.jpg", "link_profile": "" },
  { "name": "Atharva Parkale", "role": "Technical Head", "image": "/images/Board2223/AtharvaP.jpg", "link_profile": "" },
  { "name": "Atharva Yawalkar", "role": "Finance Head", "image": "/images/Board2223/Atharva Yawalkar.jpeg", "link_profile": "" },
  { "name": "Pranav Arage", "role": "Creative Head", "image": "/images/Board2223/PranavArage.jpg", "link_profile": "" }
],
2021: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Mrunmayi Mane", "role": "Events Head", "image": "/images/Board2122/Mrunmayi Mane_Events Head (2).jpeg", "link_profile": "" },
  { "name": "Anurag Gumaste", "role": "Operations Head", "image": "/images/Board2122/Anurag Gumaste _ Operations Head.jpg", "link_profile": "" },
  { "name": "Apurv Shewale", "role": "Management Head", "image": "/images/Board2122/Apurv Shewale _ Management Head.jpg", "link_profile": "" },
  { "name": "Amogh Hatkar", "role": "Secretary", "image": "/images/Board2122/Amogh Hatkar Secretary.jpg", "link_profile": "" },
  { "name": "Tanishq Gandhi", "role": "Technical Head", "image": "/images/Board2122/Tanishq Gandhi- Technical Head.jpg", "link_profile": "" },
  { "name": "Ishan Jogalekar", "role": "Design Head", "image": "/images/Board2122/Ishan Jogalekar Design Head.jpg", "link_profile": "" },
  { "name": "Vedant Karale", "role": "PR and Drama Head", "image": "/images/Board2122/Vedant Karale_PR and Drama Head.jpg", "link_profile": "" },
  { "name": "Krantdarshi Mirajkar", "role": "Editorial Head", "image": "/images/Board2122/Krantdarshi Mirajkar_Editorial head.jpg", "link_profile": "" },
  { "name": "Janhavi Bhosale", "role": "Dance Head", "image": "/images/Board2122/Janhavi Bhosale _ Dance head.jpg", "link_profile": "" },
  { "name": "Anushka Pawar", "role": "Music Head", "image": "/images/Board2122/Anushka Pawar _ Music Head.jpg", "link_profile": "" },
  { "name": "Piyush Waghirkar", "role": "Finance Head", "image": "/images/Board2122/Piyush Waghirkar Finance Head.jpg", "link_profile": "" }
],
2020: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Rucha Jagtap", "role": "Chairperson", "image": "/images/Board2021/Rucha Jagtap chairperson.jpg", "link_profile": "" },
  { "name": "Atharva Wagh", "role": "Vice Chairperson", "image": "/images/Board2021/Atharva Wagh - Vice chairperson.jpg", "link_profile": "" },
  { "name": "Amit Manthekar", "role": "Secretary", "image": "/images/Board2021/Amit Manthekar - Secretary.jpg", "link_profile": "" },
  { "name": "Om More", "role": "Technical Head", "image": "/images/Board2021/_Om more_Technical head_.jpg", "link_profile": "" },
  { "name": "Soham Shinde", "role": "Finance Head", "image": "/images/Board2021/Soham Girish Shinde_Finance Head.jpg", "link_profile": "" },
  { "name": "Utkarsh Deshmukh", "role": "PR and Sponsorship Head", "image": "/images/Board2021/Utkarsh Deshmukh PR and Sponsorship Head.JPG", "link_profile": "" },
  { "name": "Riya Jadhav", "role": "Design Head", "image": "/images/Board2021/Riya Jadhav- Design H_.jpg", "link_profile": "" },
  { "name": "Adesh Chougule", "role": "Marketing Head", "image": "/images/Board2021/Adesh Chougule Marketing Head.jpg", "link_profile": "" },
  { "name": "Yatin Kinare", "role": "Editorial Head", "image": "/images/Board2021/_ Yatin Pundalik Kinare_ Editorial Head.png", "link_profile": "" },
  { "name": "Atharv Kulkarni", "role": "Drama Head", "image": "/images/Board2021/Atharv kulkarni - Drama Academy head.jpg", "link_profile": "" },
  { "name": "Sanchita Suryavanshi", "role": "Dance Head", "image": "/images/Board2021/Sanchita Suryavanshi- Dance Head.jpg", "link_profile": "" }
],
2019: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Tanuj Warpade", "role": "Chairperson", "image": "/images/Board1920/Tanuj Warpade _ Chairperson.jpg", "link_profile": "" },
  { "name": "Shravani Shinde", "role": "Vice Chairperson", "image": "/images/Board1920/Shravani Shinde Vice President.jpg", "link_profile": "" },
  { "name": "Varad Abhyankar", "role": "Secretary", "image": "/images/Board1920/Varad Abhyankar_Secretary.jpg", "link_profile": "" },
  { "name": "Abhishek Patil", "role": "Vice Chairperson Secretary", "image": "/images/Board1920/Abhishek Patil_Vice Chairperson.jpg", "link_profile": "" },
  { "name": "Manjiri Dighade", "role": "Marketing Head", "image": "/images/Board1920/Manjiri Dighade_ Marketing head.JPG", "link_profile": "" },
  { "name": "Samved Naykalkar", "role": "Finance Head", "image": "/images/Board1920/Samved Naykalkar - Finance Head.jpeg", "link_profile": "" },
  { "name": "Mohit Amdhare", "role": "PR, Sponsorship and Design Head", "image": "/images/Board1920/Mohit Amdhare_PR, Sponsorship _ Design Head.jpg", "link_profile": "" },
  { "name": "Aditya Bhosale", "role": "Editorial Head", "image": "/images/Board1920/Aditya Bhosale Editorial Head 2019-20.jpg", "link_profile": "" },
  { "name": "Tejas Mahulkar", "role": "Drama Head", "image": "/images/Board1920/Tejas Mahulkar - Drama Head.jpg", "link_profile": "" },
  { "name": "Kalyani Kulkarni", "role": "Cultural and Dance Head", "image": "/images/Board1920/Kalyani Kulkarni _ Cultural (Dance) Head.jpg", "link_profile": "" }
],
2018: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Tukaram Jagtap", "role": "Chairperson", "image": "/images/Board1819/Tukaram Jagtap.jfif" },
  { "name": "Shalaka Mahurkar", "role": "Vice Chairperson", "image": "/images/Board1819/Shalaka Shashank Mahurkar_Vice President.jpg" },
  { "name": "Vedant Kadam", "role": "Management Head", "image": "/images/placeHolder.jpg" },
  { "name": "Vaishnavi Deshpande", "role": "PR Head", "image": "/images/Board1819/Vaishnavi Deshpande__01.jpg" },
  { "name": "Ashutosh Nandanwar", "role": "Design and Marketing Head", "image": "/images/Board1819/Ashutosh Nandanwar.jfif" },
  { "name": "Mahesh Patil", "role": "Finance Head", "image": "/images/Board1819/Mahesh Patil.jfif" },
  { "name": "Prachi Khadilkar", "role": "G. Secretary", "image": "/images/Board1819/Prachi Khadilkar.jfif" },
  { "name": "Vaishnavi Ingale", "role": "HR", "image": "/images/placeHolder.jpg" },
  { "name": "Padmanabh Deshpande", "role": "Technical Head", "image": "/images/placeHolder.jpg" },
  { "name": "Prajyot Jadhav", "role": "Editorial Head", "image": "/images/Board1819/Prajyot Jadhav.jfif" }
],
2017: [
  { "name": "Dr. Pundlik Bhagat", "role": "Faculty Coordinator", "image": "/images/bhagatSir.png" },
  { "name": "Indrajeet Kenjale", "role": "Chairperson", "image": "/images/Board1718/IndrajeetKenjale.JPG" },
  { "name": "Priyanka Dani", "role": "Vice Chairperson, Events Head", "image": "/images/Board1718/PriyankaDani.png" },
  { "name": "Aboli Vartak", "role": "Secretary", "image": "/images/Board1718/Aboli Vartak.jfif" },
  { "name": "Saurabh Zaware", "role": "Treasurer", "image": "/images/Board1718/Saurabh Zaware.jfif" },
  { "name": "Ojaswi Sumbh", "role": "PR Head", "image": "/images/Board1718/Ojaswi Sumbh_PR Head .jpg" },
  { "name": "Kiran Kulkarni", "role": "Marketing Head", "image": "/images/Board1718/KiranKulkarni_MarketingHead.jpg" },
  { "name": "Utkarsh Ghadge", "role": "Design Head", "image": "/images/Board1718/Utkarsh Ghadge.jfif" },
  { "name": "Pranit Amrutkar", "role": "Design Sub Head", "image": "/images/Board1718/Pranit Amrutkar.jfif" },
  { "name": "Chaitanya Inamdar", "role": "Events Sub Head", "image": "/images/Board1718/Chaitanya Inamdar.jfif" },
  { "name": "Dhanashri Patil", "role": "Technical Head", "image": "/images/Board1718/Dhanashri Patil.jfif" }
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
