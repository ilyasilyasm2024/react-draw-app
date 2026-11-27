/** @format */

import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/presentation/navigation/RootNavigator";
import { LanguageProvider } from "./src/presentation/hooks/useLanguage";
import { AppLayout } from "./src/presentation/components/AppLayout";

export default function App() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <AppLayout>
            <RootNavigator />
          </AppLayout>
        </NavigationContainer>
      </LanguageProvider>
    </SafeAreaProvider>
  );
}
