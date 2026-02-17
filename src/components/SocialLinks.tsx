// src/components/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 text-pink-500 mt-4">
      <a href="#"><FaGithub size={24} /></a>
      <a href="#"><FaLinkedin size={24} /></a>
      <a href="#"><FaFacebook size={24} /></a>
      <a href="#"><FaTwitter size={24} /></a>
    </div>
  );
}
