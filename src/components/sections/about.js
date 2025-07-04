import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list,
  ul.concept-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Splunk',
    'SentinelOne EDR/XDR',
    'CrowdStrike Falcon',
    'FortiEDR, FortiSIEM, FortiOS, FortiDeceptor',
    'Cobalt Strike',
    'Metasploit',
    'Empire/Starkiller',
    'Burp Suite Pro',
    'NMAP',
    'Wireshark',
  ];
  const concepts = [
    'Risk Assessment & Management',
    'Systems Engineering',
    'Exploit Development',
    'Incident Handling',
    'Penetration Testing',
    'Red Team Operations',
    'Adversary Emulation & Simulation',
    'Meme Development',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’ve been referred to as an “ultra geek” because of my love for technology and
              security. Since I was a child, I’ve been tinkering with computers, bypassing my
              father’s security measures and learning new things. I have in depth experience with a
              vast array of <strong> SIEMs, SOARs, EDR/XDR Platforms</strong> and{' '}
              <strong> Pentesting Tools</strong>.
            </p>

            <p>
              While my career is shifting more torwards the offensive operations and red team side
              of the house, my previous experience on the defensive side along with network and
              systems engineering gives me a fantastic background as a more experienced red team
              operator.
            </p>
            <p>
              Whenever I have time, I enjoy furthering my education with a fully equipped
              <strong> Home Lab</strong> which includes a{' '}
              <strong> FortiGate Firewall and Switch</strong>, <strong>ESXi Hypervisor</strong> with
              <strong> Pentesting OSes</strong> and <strong> Log Management</strong> in addition to{' '}
              <strong> TryHackMe</strong> and <strong> Hack The Box</strong> to continuously expand
              my skill set.
            </p>

            <p>
              Recently, I <a href="https://cyber.info">launched a nonprofit</a> that aims to empower
              career growth with easy access to cybersecurity education.
            </p>

            <p>These are technologies that I have experience with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <p>Here are some skills and concepts I am familiar with:</p>

          <ul className="concept-list">
            {concepts && concepts.map((concept, i) => <li key={i}>{concept}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Head shot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
