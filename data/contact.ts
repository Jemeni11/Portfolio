import {
  SiDevdotto,
  SiDiscord,
  SiGmail,
  SiHashnode,
  SiLinkedin,
  SiTwitter,
} from "@icons-pack/react-simple-icons";
import type { contactObject } from "@/types/contact";

export const contacts: contactObject[] = [
  {
    category: "Social Media",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/emmanuel-jemeni/",
    image: SiLinkedin,
    image_attribution:
      "LinkedIn, the LinkedIn logo, the IN logo and InMail are registered trademarks or trademarks of LinkedIn Corporation and its affiliates in the United States and/or other countries.",
    color: "#0A66C2",
  },
  {
    category: "Social Media",
    name: "Twitter",
    url: "https://twitter.com/Jemeni11_",
    image: SiTwitter,
    color: "#1DA1F2",
  },
  {
    category: "Email",
    name: "Mail",
    url: "mailto:emmanueljemeni@gmail.com",
    image: SiGmail,
    color: "#EA4335",
  },
  {
    category: "Instant Messaging",
    name: "Discord",
    url: "https://discord.com/users/890338018832039966",
    image: SiDiscord,
    color: "#5865F2",
  },
  {
    category: "Communities",
    name: "Dev.to",
    url: "https://dev.to/jemeni11",
    image: SiDevdotto,
    color: "#0A0A0A",
  },
  {
    category: "Communities",
    name: "Hashnode",
    url: "https://jemeni11.hashnode.dev",
    image: SiHashnode,
    color: "#2962FF",
  },
];
