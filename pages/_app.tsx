  import { ChakraProvider, extendTheme } from "@chakra-ui/react";
  import { fab } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope,
    faMagnifyingGlass,
    faSliders,
    faTrash,
    faXmark,
  } from "@fortawesome/free-solid-svg-icons";
  import Layout from "components/layout";
  // import { ConnectKitProvider, getDefaultClient, Types } from "connectkit";
  import {
    ConnectKitProvider,
    ConnectKitButton,
    getDefaultConfig,
  } from "connectkit";
  import { WagmiConfig, createConfig } from "wagmi";

  import { appWithTranslation } from "next-i18next";
  import { AppProps } from "next/app";
  import Image from "next/image";
  import { Provider } from "react-redux";
  import { store } from "store";
  // import { createClient, WagmiConfig } from "wagmi";

  import Script from "next/script";
  import { polygonMumbai, zkSyncTestnet } from "wagmi/chains";

  import "../styles/globals.scss";
  // why import with require? https://github.com/FortAwesome/Font-Awesome/issues/19348
  const { library } = require("@fortawesome/fontawesome-svg-core");

  const MyCustomAvatar = ({ ensName }: Types.CustomAvatarProps) => {
    return (
      <div className="relative h-24 w-24 overflow-hidden rounded-full">
        <Image
          src={ensName ?? "/images/astronaut2.png"}
          layout="fill"
          alt={ensName ?? "astronaut"}
        />
      </div>
    );
  };

  const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          fontWeight: "normal",
        },
      },
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
  });

  const mumbai = { ...polygonMumbai, name: "Mumbai" };

  // const client = createClient(
  //   getDefaultClient({
  //     appName: "Peace",
  //     alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  //     chains: [mumbai],
  //   })
  // );

  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // or infuraId
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
      chains: [zkSyncTestnet],
      // Required
      appName: "Your App Name",

      // Optional
      appDescription: "Your App Description",
      appUrl: "https://family.co", // your app's url
      appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
  );

  library.add(fab, faEnvelope, faMagnifyingGlass, faSliders, faXmark, faTrash);

  function App({ Component, pageProps }: AppProps) {
    return (
      <WagmiConfig config={config}>
        <ConnectKitProvider
          theme="auto"
          mode="light"
          options={{
            customAvatar: MyCustomAvatar,
          }}
        >
          <Provider store={store}>
            <ChakraProvider theme={theme}>
              <Layout>
                <Script id="hotjar">
                  {`(function (h, o, t, j, a, r) {
                    h.hj =
                      h.hj ||
                      function () {
                        (h.hj.q = h.hj.q || []).push(arguments);
                      };
                    h._hjSettings = { hjid: 3003115, hjsv: 6 };
                    a = o.getElementsByTagName('head')[0];
                    r = o.createElement('script');
                    r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(
                    window,
                    document,
                    'https://static.hotjar.com/c/hotjar-',
                    '.js?sv='
                  )`}
                </Script>
                <Component {...pageProps} />
              </Layout>
            </ChakraProvider>
          </Provider>
        </ConnectKitProvider>
      </WagmiConfig>
    );
  }

  export default appWithTranslation(App);
