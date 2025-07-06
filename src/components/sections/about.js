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
    'Wazuh',
    'EDR/XDR',
    'Wireshark',
    'OPNSense Firewall',
    'OpenCTI',
    'OSINT',
    'NMAP',
    'Metasploit',
    'Burp Suite Basic',
    'Python',
    'SQL/KQL/SPL',
  ];
  const concepts = [
    'Risk Assessment & Management',
    'Systems Design',
    'Incident Handling',
    'Basic Penetration Testing',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I've been referred to as “geeky” because of my love for technology and security. Since
              I was a child, I've been tinkering with computers, bypassing security measures and
              learning new things. I'm actively learning and gaining experience with a vast array of{' '}
              <strong>SIEMs, SOARs, EDR/XDR Platforms</strong> and{' '}
              <strong>Pentesting Tools.</strong>
            </p>

            <p>
              Leveraging my background in AI/ML, Python, hands-on experience with endpoint analysis
              & phishing simulations, I am exceptionally positioned for a blue team role, with a
              long-term trajectory toward advanced red team operations.
            </p>
            <p>
              Whenever I have time, I enjoy furthering my education with a fully equipped
              <strong> Home Lab</strong> which includes a <strong> OPNsense Firewall </strong>,{' '}
              <strong>KVM - Type-1 hypervisor</strong> with
              <strong> Pentesting OS</strong> and <strong> Log Management</strong> in addition to{' '}
              <strong> TryHackMe</strong> and <strong> Hack The Box</strong> to continuously expand
              my skill set.
            </p>

            <p>
              Recently, I <a href="https://zenithmen.surge.sh/">launched a nonprofit</a> that aims
              at breaking the silence on men's mental health. Creating a supportive community where
              vulnerability becomes strength.
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
