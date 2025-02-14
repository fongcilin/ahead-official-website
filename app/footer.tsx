import Image from "next/image";
import { Mail, ListTodo } from "lucide-react";

import { Icons } from "@/try-stuff/components/icons";
import { Typography } from "@/try-stuff/components/typography";
import { Button } from "@/try-stuff/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-300 to-white mt-20">
      <div className="flex justify-center space-x-6 py-10 px-4">
        <Image
          src="/images/ahead_logo.png"
          alt="Ahead logo"
          width={128}
          height={105}
          priority
          className="self-start"
        />
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
          <div className="max-w-[240px]">
            <Typography.Muted>AHEAD Medicine</Typography.Muted>
            <Typography.Muted>
              2880 Zanker Rd, Suite 103, San Jose, CA, 95134
            </Typography.Muted>
            <Typography.Muted>
              Taipei office: Room 437, 4F, No. 19-13, Sanchong Rd, Nangang
              District, Taipei City, Taiwan, 115
            </Typography.Muted>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon">
              <Mail className="w-7 h-7" />
            </Button>
            <Button variant="outline" size="icon">
              <Icons.X className="w-7 h-7" />
            </Button>
            <Button variant="outline" size="icon">
              <Icons.Linkedin className="w-7 h-7" />
            </Button>
            <Button variant="outline" size="icon">
              <ListTodo className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
