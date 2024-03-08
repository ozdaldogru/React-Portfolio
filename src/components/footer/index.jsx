import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>All rights reserved &#169; OZdal Dogru, 2024</h2>
      <p>
        <ul>
          <a href="https://github.com/ozdaldogru">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/ozdal-dogru/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/ozdal.dogru/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
