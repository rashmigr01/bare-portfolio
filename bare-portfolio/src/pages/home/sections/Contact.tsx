import { Mail } from "lucide-react";
import {
  Bluesky,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  X,
} from "../../../icons";
import { Link } from "react-router";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  X as X_INFO,
  BLUESKY,
  INSTAGRAM,
  FACEBOOK,
} from "../../../config/info";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex items-center justify-between gap-4">
        <Mail className="size-4" />
        <Link to={`mailto:${EMAIL}`} className="relative group truncate">
          {EMAIL}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Github className="size-4" />
        <Link to={GITHUB} className="relative group truncate">
          {GITHUB}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Linkedin className="size-4" />
        <Link to={LINKEDIN} className="relative group truncate">
          {LINKEDIN}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <X className="size-4" />
        <Link to={X_INFO} className="relative group truncate">
          {X_INFO}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Bluesky className="size-4" />
        <Link to={BLUESKY} className="relative group truncate">
          {BLUESKY}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Instagram className="size-4" />
        <Link to={INSTAGRAM} className="relative group truncate">
          {INSTAGRAM}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Facebook className="size-4" />
        <Link to={FACEBOOK} className="relative group truncate">
          {FACEBOOK}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </Link>
      </div>
    </div>
  );
};

export { Contact };
