import Button from "components/button/Button";
import Stack from "components/stack/Stack";
import { ConnectKitButton } from "connectkit";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const GeneralDefaultConnectWallet = ({ children }: Props) => {
  return (
    <Stack className="relative mt-8 h-full max-h-screen items-center !gap-9 text-center sm:mt-0 sm:justify-center">
      {children}
      <div className="space-y-3">
        <ConnectKitButton.Custom>
          {({ show }) => {
            return (
              <Button onClick={show} variant="primary" size="base">
                Connect Wallet
              </Button>
            );
          }}
        </ConnectKitButton.Custom>
      </div>
    </Stack>
  );
};

export default GeneralDefaultConnectWallet;
