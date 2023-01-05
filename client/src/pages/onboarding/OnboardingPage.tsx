import type { Character } from '../../slices/types'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { page } from '../../FramerAnimations'
import { getConfiguration } from '../../configuration/configuration'
import { useAppDispatch } from '../../hooks/hooks'
import { useTitle } from '../../hooks/useTitle'
import { useCharacters } from '../../slices/characters/charactersSelectors'
import { setCharacter } from '../../slices/characters/charactersSlice'
import { fetchAllCharacters } from '../../slices/characters/charactersThunks'
import { useConnection } from '../../slices/connection/connectionSelectors'
import { clearConnection } from '../../slices/connection/connectionSlice'
import { useCredentials } from '../../slices/credentials/credentialsSelectors'
import { clearCredentials } from '../../slices/credentials/credentialsSlice'
import { useOnboarding } from '../../slices/onboarding/onboardingSelectors'
import { completeOnboarding } from '../../slices/onboarding/onboardingSlice'
import { fetchAllUseCasesByCharId } from '../../slices/useCases/useCasesThunks'
import { fetchWallets } from '../../slices/wallets/walletsThunks'
import { basePath } from '../../utils/BasePath'

export const OnboardingPage: React.FC = () => {
  useTitle('Get Started | BC Wallet Self-Sovereign Identity Demo')

  const { slug } = useParams()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { characters, currentCharacter } = useCharacters()
  const { Stepper, OnboardingContainer, OnboardingComplete, StepperItems } = getConfiguration(currentCharacter)

  const { onboardingStep, isCompleted } = useOnboarding()
  const { id, state, invitationUrl } = useConnection()
  const { credentials } = useCredentials()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if ((OnboardingComplete(onboardingStep) || isCompleted) && currentCharacter) {
      dispatch(completeOnboarding())
      dispatch(clearCredentials())
      dispatch(clearConnection())
      dispatch(fetchAllUseCasesByCharId(currentCharacter.id))
      navigate(`${basePath}/dashboard`)
    } else {
      dispatch({ type: 'demo/RESET' })
      dispatch(fetchWallets())
      dispatch(fetchAllCharacters())
      setMounted(true)
    }
  }, [dispatch])

  useEffect(() => {
    // use character from route
    if (characters?.length && !currentCharacter) {
      let character: Character = characters[0]
      if (slug) {
        const res = characters.find((char) => char.type.toLowerCase() === slug)
        if (res) {
          character = res
        }
      }
      dispatch(setCharacter(character ?? characters[0]))
    }
  }, [characters])

  return (
    <motion.div
      variants={page}
      initial="hidden"
      animate="show"
      exit="exit"
      className="container flex flex-col items-center p-4"
    >
      <Stepper steps={StepperItems} onboardingStep={onboardingStep} />
      <AnimatePresence exitBeforeEnter>
        {mounted && (
          <OnboardingContainer
            characters={characters}
            currentCharacter={currentCharacter}
            onboardingStep={onboardingStep}
            connectionId={id}
            connectionState={state}
            invitationUrl={invitationUrl}
            credentials={credentials}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
