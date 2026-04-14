import { FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/papopctck/",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/PapopCtck",
    Icon: SiGithub,
  },
  {
    label: "Email",
    href: "mailto:me@papopctck.cc",
    Icon: SiGmail,
  },
] as const;

export const CONTACT_LINKS = [
  ...SOCIAL_LINKS,
  {
    label: "Phone",
    href: "tel:+66638965941",
    Icon: FaPhone,
  },
] as const;
