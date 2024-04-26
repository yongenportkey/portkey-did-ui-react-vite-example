import {
  SignIn,
  DIDWalletInfo,
  ISignIn,
  PortkeyProvider,
} from "@portkey/did-ui-react";
import { useCallback, useRef } from "react";
import "@portkey/did-ui-react/dist/assets/index.css";
import styles from "./App.module.css";

const App = () => {
  const ref = useRef<ISignIn>();

  const onFinish = useCallback((didWallet: DIDWalletInfo) => {
    // didWallet will contain the wallet data
  }, []);

  return (
    <PortkeyProvider networkType={"TESTNET"}>
      <div className={styles.wrapper}>
        <button
          className={styles.button}
          onClick={() => {
            ref.current?.setOpen(true);
          }}
        >
          Sign In
        </button>
      </div>
      <SignIn ref={ref} onFinish={onFinish} />
    </PortkeyProvider>
  );
};

export default App;
