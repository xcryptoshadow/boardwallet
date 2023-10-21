/* eslint-disable tailwindcss/no-custom-classname */
import Footer from "components/footer";
import Menu from "components/menu/menu";
import Navbar from "components/navbar/Navbar";
import PeaceLogo from "components/PeaceLogo/PeaceLogo";
import Section from "components/Section/Section";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useConnect } from "wagmi";
import { NavbarN } from "components/menu/NavbarN";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const { connect, connectors } = useConnect();

  const connector = connectors[0];

  useEffect(() => {
    connect({ connector });
  }, [connect, connector, connectors]);

  const renderLayout = () => {
    if (router.route === "/beneficiary-login") {
      return <>{children}</>;
    }
    return (
      <Section style={{ display: "flex", flexDirection: "column" }}>
        {/* <Menu /> */}
        {/* <NavbarN /> */}

        <div className="relative m-6 flex min-h-screen w-full flex-col px-5 pb-20 lg:pb-0  lg-max:overflow-y-auto">
          <>
            {/* <PeaceLogo className="top-0 left-0 z-20 hidden flex-row pt-10 lg-max:flex" /> */}
            <Navbar />
            <div style={{ margin: "0 10% 10% 10%" }}>{children}</div>
          </>
        </div>
      </Section>
    );
  };

  return renderLayout();
};

export default Layout;
