import type { IconType } from "@icons-pack/react-simple-icons";

export type contactObject = {
  category: "Social Media" | "Email" | "Instant Messaging" | "Communities";
  name: string;
  url: string;
  image: IconType;
  image_attribution?: string;
  color: string;
};
