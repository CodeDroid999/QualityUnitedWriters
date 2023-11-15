import AssignmentTable from 'components/BrowseAssignments/AssignmentTable'
import HeroArea from 'components/Homepage/HeroSection'
import HowItWorksSection from 'components/Homepage/HowITWorksSection'
import PostYourAssignment from 'components/Homepage/PostYourAssignment'
import ReferFriends from 'components/Homepage/ReferFriensSection.tsx'
import StatsCounter from 'components/Homepage/StatsCounter'
import Steps from 'components/Howitworks/Steps'
import Footer from 'components/layout/Footer'
import Layout from 'components/layout/layout'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import type { SharedPageProps } from 'pages/_app'
import React, { useState } from 'react'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function BecomeATutor(props: PageProps) {
  const { posts, settings, draftMode } = props

  return (
    <>
      <Head>
        <title>
          QualityUnitedWriters - Your Academic Research and Project Partner
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Discover a dedicated platform for students and tutors offering expert assistance in a wide range of academic research and projects. Quality Unitted Writers connects you with quality solutions for your educational needs. Whether you're seeking help with essays, theses, or any academic work, our talented team is here to assist you."
        />
        <meta name="keywords" content="Academic writing services, Expert academic writers, Professional research assistance, High-quality research papers, Academic project support, Thesis and dissertation help, Essay writing service, Top-rated tutors, Academic success tips, Homework assistance, Online tutoring, Quality writing solutions, Best essay writers, Custom research papers, Academic support platform, Tutoring for students, Research paper editing, Writing and editing services, Academic guidance, Homework help for students" />
        <meta name="author" content="QualityUnitedWriters" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" property="og:title" content="QualityUnitedWriters - Your Academic Research and Project Partner" />
        <meta
          name="og:description"
          property="og:description"
          content="Discover a dedicated platform for students and tutors offering expert assistance in a wide range of academic research and projects. Quality Unitted Writers connects you with quality solutions for your educational needs. Whether you're seeking help with essays, theses, or any academic work, our talented team is here to assist you."
        />
        <meta name="og:image" property="og:image" content="public/airtaskalogo.jpeg" />
        <meta name="og:url" property="og:url" content="https://www.qualityunitedswriters.com" />
      </Head>
      <HeroArea />
      <StatsCounter/>
      <PostYourAssignment />
      <div className="container pb-3">
        <AssignmentTable/>
      </div>
      <ReferFriends/>
      <HowItWorksSection />
      <Footer />
    </>
  )
}

export const getStaticProps = async (ctx: any) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
