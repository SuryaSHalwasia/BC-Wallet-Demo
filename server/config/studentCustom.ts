import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'
export const studentCustom: CustomCharacter = {
  name: 'Alice',
  type: 'Ford',
  image: '/public/student/student.svg',
  revocationInfo: [
    {
      credentialName: 'Student Card',
      credentialIcon: '/public/student/icon-student.svg',
      title: 'Revoke your Student Card',
      description:
        'Best BC College allows you to revoke your Student Card "if":\n• there is a problem with your credential.\n• your device was lost or stolen and you want to secure your personal information.',
    },
  ],
  progressBar: [
    {
      name: 'person',
      onboardingStep: 'PICK_CHARACTER',
      iconLight: '/public/common/icon-person-light.svg',
      iconDark: '/public/common/icon-person-dark.svg',
    },
    {
      name: 'moon',
      onboardingStep: 'SETUP_START',
      iconLight: '/public/common/icon-moon-light.svg',
      iconDark: '/public/common/icon-moon-dark.svg',
    },
    {
      name: 'wallet',
      onboardingStep: 'CHOOSE_WALLET',
      iconLight: '/public/common/icon-wallet-light.svg',
      iconDark: '/public/common/icon-wallet-dark.svg',
    },
    {
      name: 'notification',
      onboardingStep: 'ACCEPT_CREDENTIAL',
      iconLight: '/public/common/icon-notification-light.svg',
      iconDark: '/public/common/icon-notification-dark.svg',
    },
    {
      name: 'balloon',
      onboardingStep: 'SETUP_COMPLETED',
      iconLight: '/public/common/icon-balloon-light.svg',
      iconDark: '/public/common/icon-balloon-dark.svg',
    },
  ],
  onboarding: [
    {
      screenId: 'PICK_CHARACTER',
      title: 'Meet Alice',
<<<<<<< HEAD
      text: "Meet Alice (that's you in this demo!). Alice is a student at a college. To help make student life easier, Alice took a Ford vehicle and now needs digital credentials to verify her driving license.",
=======
      text: "Meet Alice (that's you in this demo!). Alice is a student at BestBC College. To help make student life easier, BestBC College is going to offer Alice a digital Student Card to put in her FHWA.",
>>>>>>> f60aa7b337ce8403abb5f05d9b73bd576a16c747
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'FHWA is a new app for storing and using credentials on your smartphone. Credentials are things like IDs, licenses and diplomas. \nUsing your FHWA is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use two credentials to prove who you are and access court materials online instead of in-person.',
      image: '/public/common/FHWA-Logo.svg',
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install FHWA',
      text: 'First, install the FHWA app onto your smartphone. Select the button below for instructions and the next step.',
      image: '/public/common/app-store-screenshots.png',
    },
    {
      screenId: 'CONNECT',
<<<<<<< HEAD
      title: 'Connect with CA (Certificate Authority)',
      text: 'Imagine, as Alice, you are connected with a CA. They want to offer you your credentials. Use your app to scan the QR code from the website.',
=======
      title: 'Connect with BestBC College',
      text: 'Imagine, as Alice, you are logged into the BestBC College website (see below). They want to offer you a Digital Student Card. Use your FHWA to scan the QR code from the website.',
>>>>>>> f60aa7b337ce8403abb5f05d9b73bd576a16c747
      image: '/public/student/onboarding-connect-light.svg',
      issuer_name: 'BestBC College',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your student card',
      text: "Your wallet now has a secure and private connection with BestBC College. You should have received an offer in FHWA for a Student Card.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/common/onboarding-credential-light.svg',
      credentials: [
        {
          name: 'student_card',
          version: '1.2',
          icon: '/public/student/icon-student.svg',
          attributes: [
            {
              name: 'student_first_name',
              value: 'Alice',
            },
            {
              name: 'student_last_name',
              value: 'Smith',
            },
            {
              name: 'expiry_date',
              value: `${getDateInt(4)}`,
            },
          ],
        },
      ],
    },
    {
      screenId: 'SETUP_COMPLETED',
      title: "You're all set!",
      text: 'Congratulations, you’ve just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
      image: '/public/common/onboarding-completed-light.svg',
    },
  ],
  useCases: [
    {
      id: 'clothesOnline',
      name: 'Infrastructure',
      screens: [
        {
          screenId: 'START',
          title: 'Connecting with infrastructure',
          text: "Alice (that's you in this demo!) needs to send her credentials to connect to the infrastrcture. In this example, you will just send the infrastructure your complete credentials.",
          image: '/public/student/useCases/store/card-school.svg',
        },
        {
          screenId: 'CONNECTION',
          title: "Start proving you're a student",
          text: "Imagine, as Alice, you are in the checkout process for Cool Clothes Online. They're offering you a 15% discount on your purchase if you can prove you're a student. First, scan the QR code.",
          image: '/public/student/useCases/store/cool-clothes-no-overlay.png',
          verifier: { name: 'Cool Clothes Online', icon: '/public/student/useCases/store/logo-university.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "FHWA will now ask you to confirm what to send. Notice how it will only share if the credential has expired, not even the expiry date itself gets shared. You don't have to share anything else for it to be trustable.",
          requestOptions: {
            title: 'Cool Clothes Online Request',
            text: 'Cool Clothes Online would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/student/useCases/school/icon-university-card.png',
                name: 'student_card',
                predicates: {
                  name: 'expiry_date',
                  type: '>=',
                  value: getDateInt(),
                },
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "You proved that you're a student, and Cool Clothes Online gave you the discount. It only took a few seconds, you revealed minimal information, and Cool Clothes Online could easily and automatically trust what you sent.",
          image: '/public/student/student-accepted.svg',
        },
      ],
    },
    {
      id: 'study',
      name: 'Bob',
      screens: [
        {
          screenId: 'START',
          title: 'Book a study room',
          text: "Alice has lots of work to do, and needs a study room for some peace and quiet. In this example, we'll present some info from our Student Card, but just what's needed to book the room.",
          image: '/public/student/useCases/school/card-school.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start booking the room',
          text: "Imagine you're on the room booking page for BestBC College, abd you've chosen a data and time. Now they just need to confirm a few details. Scan the QR code to continue.",
          image: '/public/student/useCases/school/best-bc-college-no-overlay.png',
          verifier: { name: 'BestBC College', icon: '/public/student/useCases/school/logo-university.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "FHWA will now ask you to confirm what to send for the booking. Notice how they only need your first name so they can display it on the booking screen. By providing anything from your student card, they automatically know your student card hasn't been revoked.",
          requestOptions: {
            title: 'BestBC College Request',
            text: 'BestBC College would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/student/useCases/school/icon-university-card.png',
                name: 'student_card',
                properties: ['student_first_name'],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "The room is booked. Just by proving your first name, Best BC College could trust you are a current student, and could let others know there's a booking without revealing too much about you.",
          image: '/public/student/student-accepted.svg',
        },
      ],
    },
  ],
}
