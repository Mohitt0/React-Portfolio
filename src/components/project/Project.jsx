import React, { useState } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import {RiGithubLine,RiLink} from 'react-icons/ri'
import '../project/project.css'
const Project = () => {
  const [items, setItems] = useState(Menu);
  return (
    <section className="section container" id="project">
      <h1 className="section__title">Projects</h1>
      <div className="portfolio__container grid">
        {items.map((ele) => {
          const { id, image, title, url, repositoryUrl } = ele;

          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="portfolio__card"
              key={id}>
                <div className="portfolio__thumbnail">
                    <img src={image} className="potfolio__img" alt="" />
                    <div className="portfolio__mask"></div>
                </div>

                <h3 className="portfolio__title">{title}</h3>
                <a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
                    <RiLink className="portfolio__button-icon"/>
                </a>
                <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
                    <RiGithubLine className="portfolio__github-icon"/>
                </a>
              </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
