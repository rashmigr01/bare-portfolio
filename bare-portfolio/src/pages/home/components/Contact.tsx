import { Mail } from "lucide-react";
import { Bluesky, Facebook, Github, Instagram, Linkedin, X } from "../../../icons";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex items-center justify-between gap-2">
        <Mail className="size-4" />
        <Link to="mailto:name@email.com" className="relative group">
          name@email.com
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"/>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Github className="size-4" />
        <Link to="https://github.com/username" className="relative group">
          username
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full"/>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Linkedin className="size-4" />
        <Link to="https://linkedin.com/in/username" className="relative group">
          username
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full"/>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <X className="size-4" />
        <Link to="https://x.com/username" className="relative group">
          username
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full"/>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Bluesky className="size-4" />
        <Link to="https://bsky.app/profile/username" className="relative group">
          username
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full"/>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Instagram className="size-4" />
        <Link to="https://instagram.com/username" className="relative group">
          username
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full"/>
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Facebook className="size-4" />
        <Link to="https://facebook.com/username" className="relative group">
          username
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full"/>
        </Link>
      </div>
    </div>
  );
};

export { Contact };