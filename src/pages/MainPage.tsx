import React from 'react'
import Header from '../components/common/Header'
import MainSection from '../components/section/MainSection'
import ProjectsSection from '../components/section/ProjectsSection'
import AboutSection from '../components/section/AboutSection'
import ContactSection from '../components/section/ContactSection'

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