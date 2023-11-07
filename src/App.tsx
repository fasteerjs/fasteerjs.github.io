import { Fragment } from "react"
import tw from "twin.macro"
import { css, Global } from "@emotion/react";

const BodyStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "IBM Plex Sans", sans-serif;
        ${tw`m-0 min-w-full min-h-full w-screen h-screen bg-gray-800`}
      }
      #root {
        ${tw`w-full h-full`}
      }
    `}
  />
)

const PageWrapper = tw.div`flex w-full h-full justify-center items-center`

const Title = tw.h1`text-purple-400 font-medium text-5xl m-0`

const Subtitle = tw.h2`text-gray-200 font-thin text-xl`

const Paragraph = tw.p`text-gray-300 text-center`

const Link = tw.a`text-purple-400 no-underline hover:text-purple-300 transition duration-100 ease-in-out`

const Footer = tw.footer`mt-24 text-center text-gray-400 font-normal`

const App = () => {
  return (
    <Fragment>
      <BodyStyles />

      <PageWrapper>
        <div>
          <div tw="text-center">
            <Title>Fasteer.js</Title>
            <Subtitle>
              Small Fastify framework to easily bootstrap your Node.js project!
            </Subtitle>
          </div>

          <div tw="mt-8">
            <Paragraph>
              This project hasn't been maintained for a while now, however, as of 07/11/2023,
              I intend to rewrite it and make it even better than before. Stay tuned!
            </Paragraph>
          </div>

          <Footer>
            <p>2020-2023 &copy; Mia Vališová</p>

            <div tw="mt-1">
              All projects under the{" "}
              <Link href="https://github.com/fasteerjs">@fasteerjs</Link> GitHub
              organization are licensed under the MIT license.
            </div>
          </Footer>
        </div>
      </PageWrapper>
    </Fragment>
  )
}

export default App
