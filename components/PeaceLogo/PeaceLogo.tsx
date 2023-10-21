import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logos/logo.png";

interface Props {
  className?: string;
}

const PeaceLogo = ({ className }: Props) => {
  return (
    <div className={className} style={{ marginRight: "20px" }}>
      <Link href="#">
        <Image
          src={logo}
          alt="Guardian Wallet"
          width={210}
          objectFit="contain"
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default PeaceLogo;
