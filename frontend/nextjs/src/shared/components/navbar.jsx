import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { Button } from "antd";

const Navbar = ({ showBack, backUrl, title, left, right }) => {
  return (
    <div className="flex border-1 relative items-center w-full overflow-hidden pl-2-safe pr-2-safe py-4 justify-between">
      {/* Left */}
      <div className="flex justify-center items-center h-full me-2 transform transform-gpu">
        {showBack && (
          <Link href={backUrl ?? "/"}>
            <Button
              type="text"
              shape="circle"
              icon={<IconChevronLeft />}
              className="text-white"
              aria-label="Go back"
            />
          </Link>
        )}
        {left}
      </div>
      {/* Center */}
      <div className="whitespace-nowrap leading-tight absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center font-semibold">
        <h1 className="text-white font-bold text-3xl">{title}</h1>
      </div>
      {/* Right */}
      <div className="flex relative items-center w-full overflow-hidden pl-2-safe pr-2-safe h-11 justify-end">
        {right}
      </div>
    </div>
  );
};

export default Navbar;
