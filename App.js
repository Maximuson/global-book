// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./src/store";

import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";

function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <Provider store={store}>
        <AppLoading
          startAsync={bootstrap}
          onFinish={() => setIsReady(true)}
          onError={(err) => {
            console.log(err);
          }}
        />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
