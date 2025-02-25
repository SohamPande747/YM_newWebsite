"use client"; // Add this line to mark the component as a client-side component

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [membersData, setMembersData] = useState({});

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 11000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    fetch('/data/members.json')
      .then((response) => response.json())
      .then((data) => setMembersData(data))
      .catch((error) => console.error('Error loading member data:', error));
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#domains">Domains</a></li>
          <li><a href="#members">Members</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* About Us Section */}
      <section id="about" className={styles.about}>
        <h2>About Us</h2>
        <p>Yuva Marathi (Marathi Literary Association) is a Literary and Cultural Club functioning under the Office of Students' Welfare at Vellore Institute of Technology in Tamil Nadu. We focus on celebrating Marathi culture through various literary and cultural events.</p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={styles.gallery}>
        <div className={styles.galleryGrid}>
          <img src={images[currentIndex]} alt="Gallery Image" className={styles.galleryImage} />
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className={styles.domains}>
        <h2>Our Domains</h2>
        <div className={styles.domainGrid}>
          <div className={styles.domain}>
            <h3>Dance</h3>
            <p>Especially during the Aikya parade, but also otherwise, members of the dance academy always put up an exciting show and raise the spirits of all those watching.</p>
          </div>
          <div className={styles.domain}>
            <h3>Drama</h3>
            <p>Be it Shivajallosh or Gudhipadwa, students of our Drama Academy always manage to come up with entertaining dramatic presentations that tie together the various aspects of the entire event.</p>
          </div>
          <div className={styles.domain}>
            <h3>Music</h3>
            <p>The members of the Music Academy showcase their musical skills during each of our events and are extremely instrumental in setting the tone of the occasion.</p>
          </div>
          <div className={styles.domain}>
            <h3>Design</h3>
            <p>Designing and editing Instagram posts, YouTube videos, posters, reels, brochures, websites and so much more, our design department determines how we are perceived by our audience, especially after the world has moved online.</p>
          </div>
          <div className={styles.domain}>
            <h3>Editorial</h3>
            <p>Our Editorial Department is the very soul of our club. Right from drama scripts and Instagram captions to publishing our very own magazine, our budding writers always conjure up stimulating content for all of our endeavors.</p>
          </div>
          <div className={styles.domain}>
            <h3>Management</h3>
            <p>Communicating between various departments, conducting events as well as managing PR and sponsorship, our biggest division – the Management Department is the thread that binds together all of our different units.</p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className={styles.members}>
        <h2>Our Members</h2>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {Object.keys(membersData).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <div className={styles.membersContainer}>
          {membersData[selectedYear]?.length > 0 && (
            <div className={styles.topMember}>
              <img src={membersData[selectedYear][0].photo} alt={membersData[selectedYear][0].name} />
              <h3>{membersData[selectedYear][0].name}</h3>
              <p>{membersData[selectedYear][0].role}</p>
            </div>
          )}
          <div className={styles.membersGrid}>
            {membersData[selectedYear]?.slice(1).map((member, index) => (
              <div key={index} className={styles.memberCard}>
                <img src={member.photo} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section id="social" className={styles.social}>
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>
    </div>
  );
}