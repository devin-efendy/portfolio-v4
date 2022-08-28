import { createContext, useContext } from 'react'

const defaultValue: any = {}

const FeatureToggleContext = createContext(defaultValue)

export const FeatureToggleProvider = FeatureToggleContext.Provider

export const useFeatureToggle = () => useContext(FeatureToggleContext)
