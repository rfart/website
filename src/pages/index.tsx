import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {experiences, certifications} from "@/component/string";


export default function Home() {
  return (
    <>
      <Head>
        <title>Riyan Firdaus Amerta</title>
        <meta name="description" content="Riyan's Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.profileName}>
          <div className={styles.userWrapper}>
            <div className={styles.profilePic}>
              <img src="/profilepiccroped.jpeg" alt="Riyan" />
            </div>
            <h1>RIYAN FIRDAUS AMERTA</h1>
            <h6>FULLSTACK BLOCKCHAIN DEVELOPER</h6>
            <div className={styles.contactItem}>
              <a href="mailto:firdausamerta@gmail.com">
                <span className={styles.icContact}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.875 4.5C20.325 4.5 21.5 5.675 21.5 7.125V16.875C21.5 18.325 20.325 19.5 18.875 19.5H5.125C4.42881 19.5 3.76113 19.2234 3.26884 18.7312C2.77656 18.2389 2.5 17.5712 2.5 16.875V7.125C2.5 5.675 3.675 4.5 5.125 4.5H18.875ZM20.25 9.1755L12.301 13.5475C12.2192 13.5925 12.1284 13.6186 12.0352 13.6238C11.942 13.6291 11.8488 13.6134 11.7625 13.578L11.699 13.548L3.75 9.175V16.875C3.75 17.2397 3.89487 17.5894 4.15273 17.8473C4.41059 18.1051 4.76033 18.25 5.125 18.25H18.875C19.2397 18.25 19.5894 18.1051 19.8473 17.8473C20.1051 17.5894 20.25 17.2397 20.25 16.875V9.1755ZM18.875 5.75H5.125C4.76033 5.75 4.41059 5.89487 4.15273 6.15273C3.89487 6.41059 3.75 6.76033 3.75 7.125V7.7495L12 12.2865L20.25 7.749V7.125C20.25 6.76033 20.1051 6.41059 19.8473 6.15273C19.5894 5.89487 19.2397 5.75 18.875 5.75Z" fill="white" fill-opacity="0.6"/>
                  </svg>
                </span>
              </a>
              <a href="https://wa.me/6281252512005" rel="whatsapp" target="_blank">
                <span className={styles.icContact}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633C17.5714 4.79588 16.5819 4.13211 15.4919 3.68015C14.4019 3.22818 13.233 2.997 12.053 3C7.105 3 3.077 7.027 3.075 11.977C3.075 13.559 3.488 15.103 4.273 16.465L3 21.116L7.759 19.867C9.07539 20.5836 10.5502 20.9593 12.049 20.96H12.053C17 20.96 21.028 16.933 21.03 11.983C21.0334 10.8035 20.803 9.63499 20.3521 8.54506C19.9012 7.45513 19.2387 6.46537 18.403 5.633V5.633ZM12.053 19.445H12.05C10.7135 19.4451 9.40163 19.0856 8.252 18.404L7.98 18.242L5.156 18.983L5.909 16.23L5.732 15.948C4.98479 14.7584 4.58923 13.3818 4.591 11.977C4.593 7.863 7.94 4.516 12.056 4.516C13.0363 4.51382 14.0072 4.70608 14.9127 5.08165C15.8181 5.45722 16.6401 6.00864 17.331 6.704C18.0256 7.39604 18.5762 8.21889 18.9509 9.125C19.3256 10.0311 19.517 11.0025 19.514 11.983C19.512 16.097 16.165 19.445 12.053 19.445ZM16.146 13.856C15.921 13.743 14.819 13.201 14.613 13.126C14.408 13.051 14.259 13.014 14.109 13.238C13.959 13.462 13.529 13.967 13.398 14.117C13.267 14.267 13.136 14.285 12.912 14.173C12.688 14.061 11.965 13.824 11.108 13.06C10.441 12.465 9.991 11.731 9.86 11.506C9.729 11.281 9.846 11.16 9.959 11.048C10.06 10.948 10.183 10.786 10.295 10.655C10.407 10.524 10.444 10.431 10.519 10.281C10.594 10.131 10.557 10 10.5 9.888C10.444 9.775 9.995 8.671 9.808 8.222C9.627 7.787 9.442 7.845 9.304 7.839C9.16108 7.83315 9.01804 7.83048 8.875 7.831C8.76126 7.8339 8.64934 7.86026 8.54626 7.90845C8.44318 7.95663 8.35117 8.02559 8.276 8.111C8.07 8.336 7.491 8.878 7.491 9.982C7.491 11.086 8.295 12.153 8.407 12.303C8.519 12.453 9.989 14.718 12.239 15.69C12.775 15.921 13.193 16.059 13.518 16.163C14.055 16.334 14.544 16.309 14.931 16.252C15.362 16.188 16.258 15.71 16.445 15.186C16.632 14.662 16.632 14.213 16.576 14.119C16.52 14.025 16.369 13.968 16.146 13.856" fill="white" fill-opacity="0.6"/>
                  </svg>
                </span>
              </a>
              <a href="https://github.com/rfart" rel="github" target="_blank">
                <span className={styles.icContact}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M12 2.92603C7.0275 2.92603 3 7.07237 3 12.1916C3 16.2916 5.57625 19.7546 9.15374 20.9823C9.60374 21.0634 9.77249 20.7854 9.77249 20.5422C9.77249 20.3221 9.76124 19.5925 9.76124 18.8165C7.5 19.245 6.915 18.249 6.735 17.7278C6.63375 17.4614 6.195 16.6391 5.8125 16.419C5.4975 16.2453 5.0475 15.8167 5.80125 15.8052C6.51 15.7936 7.01625 16.4769 7.185 16.7549C7.995 18.1563 9.28874 17.7625 9.80624 17.5193C9.88499 16.917 10.1212 16.5117 10.38 16.28C8.3775 16.0484 6.285 15.2492 6.285 11.7052C6.285 10.6975 6.63375 9.86362 7.2075 9.21503C7.1175 8.98339 6.8025 8.03367 7.2975 6.75965C7.2975 6.75965 8.05125 6.51643 9.77249 7.70937C10.4925 7.5009 11.2575 7.39666 12.0225 7.39666C12.7875 7.39666 13.5525 7.5009 14.2725 7.70937C15.9937 6.50485 16.7475 6.75965 16.7475 6.75965C17.2425 8.03367 16.9275 8.98339 16.8375 9.21503C17.4112 9.86362 17.76 10.6859 17.76 11.7052C17.76 15.2608 15.6562 16.0484 13.6537 16.28C13.98 16.5696 14.2612 17.1255 14.2612 17.9942C14.2612 19.2334 14.25 20.2295 14.25 20.5422C14.25 20.7854 14.4187 21.075 14.8687 20.9823C16.6554 20.3613 18.2079 19.1791 19.3077 17.6022C20.4076 16.0253 20.9994 14.1329 21 12.1916C21 7.07237 16.9725 2.92603 12 2.92603Z" fill="white" fill-opacity="0.6"/>
                  </svg>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/riyan-firdaus-amerta/" rel="linkedin" target="_blank">
                <span className={styles.icContact}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none">
                  <path ill-rule="evenodd" clipRule="evenodd" fill="white" fill-opacity="0.6" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>      
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentSection}>
            <h2>SUMMARY</h2>
              <p>
              🚀 Passionate Blockchain and JavaScript Developer | Transforming Ideas into Innovation.
              </p>
              <br></br>
              <p>Hello there! 👋 I'm Riyan Firdaus Amerta, a dedicated Blockchain and JavaScript Developer with a knack for turning lines of code into real-world solutions. I thrive on the dynamic intersection of technology and creativity, bringing ideas to life in the digital realm.</p>
              <br></br>
              <p>
              As a blockchain aficionado, I'm on a mission to revolutionize the way we interact with data. From decentralized applications to smart contracts, I leverage my expertise to build secure and scalable solutions that redefine possibilities.
              </p>
              <br></br>
              <p>Feel free to reach out for discussions on blockchain, JavaScript, or anything tech-related. Let's create the future together!</p>
            <div className={styles.button}><a href="/resume.pdf" target="_blank">VIEW FULL RESUME</a></div>
          </div>

          <div className={styles.contentSection}>
            <h2>EXPERIENCE</h2>
            {experiences.map((exp)=>{
              return(
                <div className={styles.listItem}>
                  <div className={styles.year}>{exp.year}</div>
                  <div className={styles.jobDesc}>
                    <h3>{exp.role} · <a className={styles.company} href={exp.website} rel="knitto" target="_blank">{exp.company}</a></h3>
                    <p>{exp.description}</p>
                    <div className={styles.skillWrapper}>
                      {exp.skill.map((skill)=>{
                        return(
                          <span className={styles.skillSet}>{skill}</span>
                        )
                      }
                      )}
                    </div>
                  </div>
                </div>
              )
            }
            )}


          </div>

          <div className={styles.contentSection}>
            <h2>LATEST PROJECT</h2>
            {certifications.map((cr)=>{
              return(
                <div className={styles.listItem}>
                  <div className={styles.year}>{cr.year}</div>
                  <div className={styles.jobDesc}>
                    <h3>{cr.role} · <a className={styles.company} href={cr.website} rel="knitto" target="_blank">{cr.company}</a></h3>
                    <p>{cr.description}</p>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
