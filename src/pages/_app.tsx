import { type AppType } from "next/app";
import { type Session } from "next-auth";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import Hydration from "~/components/Hydration";
import WalletProvider from "~/contexts/Wallet";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Hydration>
      <WalletProvider session={session}>
        <Component {...pageProps} />
      </WalletProvider>
    </Hydration>
  );
};

export default api.withTRPC(MyApp);
