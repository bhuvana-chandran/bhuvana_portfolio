import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h2>Full Stack Developer</h2>
              <br />
               <Grid item xs={12} sm={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                💻 <strong>Experienced Full-Stack Developer</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                With <strong>2 years of IT industry experience</strong>, including <strong>1.5 years in full-stack development</strong> using the <strong>MERN stack</strong>, I specialize in designing and developing <strong>scalable web applications</strong> and building <strong>RESTful APIs</strong>. My expertise includes <strong>optimizing front-end/back-end performance</strong> and delivering user-friendly solutions.
              </Typography>

              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                🤖 <strong>Passionate About Innovation</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                I am deeply interested in <strong>machine learning</strong> and <strong>artificial intelligence</strong>. With hands-on experience in <strong>fine-tuning large language models (LLMs)</strong>, I have enhanced application functionality, customer engagement, and business efficiency.
              </Typography>

              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                👨‍💻 <strong>Team Collaboration & Agile</strong>
              </Typography>
              <Typography variant="body1">
                A dedicated team player, I thrive in <strong>Agile/Scrum environments</strong> and contribute to project success through efficient teamwork and collaboration. I am committed to delivering <strong>data-driven solutions</strong> with a focus on quality and performance.
              </Typography>
            </Box>
          </Grid>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
