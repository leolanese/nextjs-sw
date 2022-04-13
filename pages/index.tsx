import { ChakraProvider, Container, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const IndexPage = () => (
       <ChakraProvider>
        <Container maxWidth="container.x1" padding={15}>
         <Stack>
         <Heading>The spectacle before us was indeed sublime.</Heading>
         <Text>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the same
            illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside, the sable cloud beneath was dished out, and
            the car seemed to float in the middle of an immense dark sphere, whose
            upper half was strewn with silver. Looking down into the dark gulf
            below, I could see a ruddy light streaming through a rift in the
            clouds.
        </Text>
      </Stack>
            <Flex h="100vh" py={20}>
                  <VStack 
                        w="full" 
                        h="full" 
                        p={10} 
                        spacing={5} 
                        alignItems="flex-start"
                  ></VStack>
            <Heading marginRight={15}>
                  The spectacle before us was indeed sublime.
            </Heading>
            <Text>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the same
            illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside, the sable cloud beneath was dished out, and
            the car seemed to float in the middle of an immense dark sphere, whose
            upper half was strewn with silver. Looking down into the dark gulf
            below, I could see a ruddy light streaming through a rift in the
            clouds.
            </Text>
            <VStack 
                  w="full" 
                  h="full" 
                  p={10} 
                  spacing={5} 
                  alignItems="flex-start"
                  bg="gray.50"
            ></VStack>
            <Heading marginRight={15}>
                  The spectacle before us was indeed sublime.
            </Heading>
            <Text>
                  Apparently we had reached a great height in the atmosphere, for the
                  sky was a dead black, and the stars had ceased to twinkle. By the same
                  illusion which lifts the horizon of the sea to the level of the
                  spectator on a hillside, the sable cloud beneath was dished out, and
                  the car seemed to float in the middle of an immense dark sphere, whose
                  upper half was strewn with silver. Looking down into the dark gulf
                  below, I could see a ruddy light streaming through a rift in the
                  clouds.
            </Text>
         </Flex>
      </Container>
  </ChakraProvider>
)

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default IndexPage