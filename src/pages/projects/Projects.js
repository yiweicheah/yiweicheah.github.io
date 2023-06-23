import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <div
            className="repo-card-div"
            style={{ backgroundColor: theme.highlight }}
          >
            <Fade bottom duration={2000} distance="40px">
              <div
                key="1"
                onClick={() =>
                  window.open("https://www.timmycards.com", "_blank")
                }
              >
                <div className="repo-name-div">
                  <svg
                    aria-hidden="true"
                    className="octicon repo-svg"
                    height="16"
                    role="img"
                    viewBox="0 0 12 16"
                    width="12"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    ></path>
                  </svg>
                  <p className="repo-name" style={{ color: theme.text }}>
                    Timmy Cards
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  A website for avid TCG lovers to trade and sell.
                </p>
                <div className="repo-details">
                  <p
                    className="repo-creation-date subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Created on 2023-03-07
                  </p>
                  {/* <ProjectLanguages className="repo-languages" logos="React" /> */}
                </div>
              </div>
            </Fade>
          </div>{" "}
          <div
            className="repo-card-div"
            style={{ backgroundColor: theme.highlight }}
          >
            <Fade bottom duration={2000} distance="40px">
              <div
                key="1"
                onClick={() =>
                  window.open("https://www.dmemusic.com.my", "_blank")
                }
              >
                <div className="repo-name-div">
                  <svg
                    aria-hidden="true"
                    className="octicon repo-svg"
                    height="16"
                    role="img"
                    viewBox="0 0 12 16"
                    width="12"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    ></path>
                  </svg>
                  <p className="repo-name" style={{ color: theme.text }}>
                    DME Music Studio
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  An info site for DME Music SDN. BHD.
                </p>
                <div className="repo-details">
                  <p
                    className="repo-creation-date subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Created on 2023-06-12
                  </p>
                  {/* <ProjectLanguages className="repo-languages" logos="React" /> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
