import React from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

type Props = {}

export default function MainPage({}: Props) {
  return (
    <>
      <Header />
      <MainSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}