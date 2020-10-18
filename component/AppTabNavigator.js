import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SubjectScreen from './screens/SubjectScreen';
import HomeworkScreen from './screens/HomeworkScreen';
import StreakScreen from './screens/StreakScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyHomework : {
    screen : HomeworkScreen
  },
  Subjects : {
    screen : SubjectScreen
  },
  Streak : {
    screen : StreakScreen
  },
Analysis : {
    screen : AnalysisScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
