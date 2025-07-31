// import React from 'react';
// import './Footer.css';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { name: 'LinkedIn', url: 'https://linkedin.com/in/sarahchen', icon: '💼' },
//     { name: 'Twitter', url: 'https://twitter.com/sarahchen', icon: '🐦' },
//     { name: 'Email', url: 'mailto:sarah.chen@email.com', icon: '📧' },
//     { name: 'GitHub', url: 'https://github.com/sarahchen', icon: '💻' }
//   ];

//   const quickLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId.replace('#', ''));
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="container">
//           <div className="footer-main">
//             <div className="footer-brand">
//               <h3 className="footer-logo">Sarah Chen</h3>
//               <p className="footer-tagline">
//                 Project Manager & Growth Marketer
//               </p>
//               <p className="footer-description">
//                 Transforming ideas into successful realities through strategic
//                 project management and data-driven growth marketing.
//               </p>
//               <div className="social-links">
//                 {socialLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.url}
//                     className="social-link"
//                     title={link.name}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span className="social-icon">{link.icon}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div className="footer-links">
//               <div className="footer-section">
//                 <h4>Quick Links</h4>
//                 <ul>
//                   {quickLinks.map((link, index) => (
//                     <li key={index}>
//                       <a
//                         href={link.href}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           scrollToSection(link.href);
//                         }}
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="footer-section">
//                 <h4>Services</h4>
//                 <ul>
//                   <li><span>Project Management</span></li>
//                   <li><span>Growth Marketing</span></li>
//                   <li><span>Strategic Consulting</span></li>
//                   <li><span>Team Leadership</span></li>
//                   <li><span>Process Optimization</span></li>
//                 </ul>
//               </div>

//               <div className="footer-section">
//                 <h4>Let's Connect</h4>
//                 <div className="contact-info">
//                   <div className="contact-item">
//                     <span className="contact-icon">📧</span>
//                     <a href="mailto:sarah.chen@email.com">sarah.chen@email.com</a>
//                   </div>
//                   <div className="contact-item">
//                     <span className="contact-icon">📱</span>
//                     <a href="tel:+15551234567">+1 (555) 123-4567</a>
//                   </div>
//                   <div className="contact-item">
//                     <span className="contact-icon">📍</span>
//                     <span>San Francisco, CA</span>
//                   </div>
//                 </div>
//                 <div className="availability-badge">
//                   <div className="status-dot"></div>
//                   Available for new projects
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <div className="container">
//           <div className="footer-bottom-content">
//             <div className="copyright">
//               <p>&copy; {currentYear} Sarah Chen. All rights reserved.</p>
//             </div>
//             <div className="footer-bottom-links">
//               <button
//                 className="back-to-top"
//                 onClick={scrollToTop}
//                 title="Back to top"
//               >
//                 ↑ Back to Top
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
