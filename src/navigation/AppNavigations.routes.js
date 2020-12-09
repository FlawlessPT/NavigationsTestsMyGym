import React from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ParkList from "../pages/Park/ParkList";
import HistoryList from "../pages/History/HistoryList";

import TabBarIcon from "../components/BottomTabBarIcon";

import Park from "../pages/Park/Park";
import Infos from "../pages/Profile/TopTabs/Infos";
import Vehicules from "../pages/Profile/TopTabs/Vehicules";
import Payments from "../pages/Profile/TopTabs/Payments";
import History from "../pages/History/History";
import InitialPage from "../pages/Initial/Initial";
import Login from "../pages/Initial/Login";
import Register from "../pages/Initial/Register";
import AddVehicule from "../pages/Profile/TopTabs/Vehicules/Add";
import AddPayment from "../pages/Profile/TopTabs/Payments/Add";

import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const ParkListStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HistoryListStack = createStackNavigator();

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const RootStack = createStackNavigator();

function ParkListStackScreen() {
  return (
    <ParkListStack.Navigator>
      <ParkListStack.Screen
        name="ParkList"
        component={ParkList}
        options={{ tabBarLabel: "Lista Parques" }}
      />
    </ParkListStack.Navigator>
  );
}

function ProfileTopTabNavigatorScreen() {
  return (
    <TopTab.Navigator
      backBehavior="none"
      tabBarOptions={{
        style: {
          backgroundColor: "#0063a1",
        },
        activeTintColor: "white",
        pressColor: "white",
        indicatorStyle: {
          backgroundColor: "white",
          padding: 2,
        },
        labelStyle: { fontSize: 13 },
      }}
    >
      <TopTab.Screen
        name="Infos"
        component={Infos}
        options={{
          title: "Informações",
        }}
      />
      <TopTab.Screen
        name="Vehicules"
        component={Vehicules}
        options={{
          title: "Veículos",
        }}
      />
      <TopTab.Screen
        name="Payments"
        component={Payments}
        options={{
          title: "Pagamentos",
        }}
      />
    </TopTab.Navigator>
  );
}

function HistoryListStackScreen() {
  return (
    <HistoryListStack.Navigator>
      <HistoryListStack.Screen
        name="HistoryList"
        component={HistoryList}
        options={{ tabBarLabel: "Histórico" }}
      />
    </HistoryListStack.Navigator>
  );
}

function Tabs() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        tintColor: "#F3F4F5",
        activeTintColor: "#8743CC",
        inactiveTintColor: "#F3F4F5",
        style: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0063a1",
          overflow: "hidden",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => <TabBarIcon {...props} route={route.name} />,
      })}
    >
      <BottomTab.Screen name="ParkList" component={ParkListStackScreen} />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTopTabNavigatorScreen}
      />
      <BottomTab.Screen name="HistoryList" component={HistoryListStackScreen} />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "ParkList";

  switch (routeName) {
    case "ParkList":
      return "Lista Parques";
    case "Profile":
      return "Perfil";
    case "HistoryList":
      return "Histórico";
  }
}

export default function AppNavigations() {
  return (
    <RootStack.Navigator initialRouteName="Initial">
      <RootStack.Screen
        name="Inital"
        component={InitialPage}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <RootStack.Screen
        name="Register"
        component={Register}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <RootStack.Screen
        name="Main"
        component={Tabs}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <Button>
              <Icon name="home" size={30} color="#fff" />
            </Button>
          ),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#0063a1",
          },
        })}
      />
      <RootStack.Screen
        name="Park"
        component={Park}
        options={({ route }) => ({
          headerTitle: "Detalhes Parque",
        })}
      />
      <RootStack.Screen
        name="History"
        component={History}
        options={({ route }) => ({
          headerTitle: "Detalhes Histórico",
        })}
      />
      <RootStack.Screen
        name="AddVehicule"
        component={AddVehicule}
        options={({ route }) => ({
          headerTitle: "Add Vehicule",
        })}
      />
      <RootStack.Screen
        name="Add Payments"
        component={AddPayment}
        options={({ route }) => ({
          headerTitle: "Add Payment",
        })}
      />
    </RootStack.Navigator>
  );
}
