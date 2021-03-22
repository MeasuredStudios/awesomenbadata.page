import * as React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'twin.macro';
import ThemeToggle from './themeToggle';
import stylesBase from './stylesBase';

const TileArticle = () => {
  return (
    <article tw="relative">
      <span tw="before:(content block absolute top-0 left-0 w-full h-full z-10 bg-blue-300 opacity-60) relative block w-full rounded-sm overflow-hidden md:transform md:hover:-translate-y-2 md:transition-transform after:(content block absolute top-0 left-0 w-full h-full opacity-20 z-20)">
        <img
          tw="block w-full rounded-sm"
          src="https://source.unsplash.com/random/256x256"
          alt="unsplash"
        />
      </span>
      <a tw="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full p-1 z-30 border-b-0 text-center">
        <h2 tw="m-0 text-2xl">STATS LINK</h2>
      </a>
    </article>
  );
};

const Main = (props) => {
  return (
    <div id="body" tw="w-full ml-0 pl-0">
      {props.children}
    </div>
  );
};

const Layout: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <GlobalStyles />
      <Global styles={stylesBase} />
      <div tw="relative min-h-screen overflow-hidden" {...rest}>
        <div tw="flex flex-col mb-4">
          <Main>
            <NavBar />
            <section id="hero" tw="pt-8 md:pt-32 pb-24 md:pb-36">
              <div tw="max-w-screen-xl m-auto px-5">
                <img
                  src="https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/1425584/3e4738d1c5a64e049ef8be43e005cad0/1.jpeg?token-time=2145916800&token-hash=MMIY2tmERFi2C_i10TZyq7CwxwygnYcGwPE59-kyNK0%3D"
                  tw="rounded-full w-16 h-16 mb-5"
                  alt="my avatar"
                  width={64}
                  height={64}
                />
                <div tw="grid grid-cols-12 gap-5">
                  <div tw="col-start-1 col-end-12 lg:col-end-10">
                    <h1 tw="text-8xl md:text-7xl tracking-tighter font-bold md:mb-3">
                      Top scorers in NBA history
                    </h1>
                    <p tw="block text-xl tracking-tight text-gray-700 mb-10 md:w-2/3">
                      with new data and a deeper look at the all-time best
                      scorers in NBA history. What makes someone a great scorer?
                      What misconceptions are common about volume vs.
                      efficiency, on-ball vs. off-ball scoring and finishing vs.
                      dependency.
                    </p>
                    <p>Listen to the podcast or read the article.</p>
                  </div>
                </div>
              </div>
            </section>
            <section id="works" tw="pb-24 md:pb-36">
              <div tw="px-5 max-w-screen-xl lg:mx-auto">
                <div tw="py-10 grid gap-x-2 gap-y-5 sm:gap-y-2 grid-cols-1 md:grid-cols-3 md:grid-flow-row-dense">
                  <div tw="md:col-span-3">
                    <h2 tw="mb-10 text-6xl tracking-tighter font-bold">
                      Players
                    </h2>
                    <p tw="text-xl tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <a
                    href="/works/99/"
                    title="view 99.co"
                    tw="flex flex-col justify-between relative md:transform md:hover:-translate-y-2 md:transition-transform"
                  >
                    <article style={{ backgroundColor: '#D5E7F3' }}>
                      <header tw="p-5 lg:p-8 h-24 md:h-48">
                        <span tw="text-3xl tracking-tighter font-bold block">
                          LeBron James
                        </span>
                        <span tw="text-base font-normal">2011-2014</span>
                      </header>
                      <picture tw="block">
                        <img
                          loading="lazy"
                          src="https://res.cloudinary.com/kailoon/image/upload/q_auto,f_auto,w_400/99-featured.webp"
                          srcSet="https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_400/kailoon.com/99-featured.webp 400w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_600/kailoon.com/99-featured.webp 600w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_768/kailoon.com/99-featured.webp 768w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_820/kailoon.com/99-featured.webp 820w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_1240/kailoon.com/99-featured.webp 1240w"
                          alt="99.co"
                          width={400}
                          height={300}
                          sizes="100vw"
                        />
                      </picture>
                    </article>
                  </a>
                  <a
                    href="/works/envato-marketplaces-logo/"
                    title="view Envato Marketplaces"
                    tw="flex flex-col justify-between bg-gray-800 relative md:transform md:hover:-translate-y-2 md:transition-transform"
                  >
                    <article style={{ backgroundColor: '#E8E8E8' }}>
                      <header tw="p-5 lg:p-8 h-24 md:h-48">
                        <span tw="text-3xl tracking-tighter font-bold block">
                          Kevin Garnett
                        </span>
                        <span tw="text-base font-normal">2011-2014</span>
                      </header>
                      <picture tw="block">
                        <img
                          loading="lazy"
                          src="https://res.cloudinary.com/kailoon/image/upload/q_auto,f_auto,w_400/99-featured.webp"
                          srcSet="https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_400/kailoon.com/99-featured.webp 400w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_600/kailoon.com/99-featured.webp 600w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_768/kailoon.com/99-featured.webp 768w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_820/kailoon.com/99-featured.webp 820w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_1240/kailoon.com/99-featured.webp 1240w"
                          alt="99.co"
                          width={400}
                          height={300}
                          sizes="100vw"
                        />
                      </picture>
                    </article>
                  </a>
                  <a
                    href="/works/qbasis/"
                    title="view Qbasis"
                    tw="flex flex-col justify-between bg-gray-800 relative md:transform md:hover:-translate-y-2 md:transition-transform"
                  >
                    <article style={{ backgroundColor: '#E3F0D0' }}>
                      <header tw="p-5 lg:p-8 h-24 md:h-48">
                        <span tw="text-3xl tracking-tighter font-bold block">
                          Dwyane Wade
                        </span>
                        <span tw="text-base font-normal">2011-2014</span>
                      </header>
                      <picture tw="block">
                        <img
                          loading="lazy"
                          src="https://res.cloudinary.com/kailoon/image/upload/q_auto,f_auto,w_400/99-featured.webp"
                          srcSet="https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_400/kailoon.com/99-featured.webp 400w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_600/kailoon.com/99-featured.webp 600w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_768/kailoon.com/99-featured.webp 768w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_820/kailoon.com/99-featured.webp 820w, https://res.cloudinary.com/kailoon/image/upload/dpr_auto,q_auto,w_1240/kailoon.com/99-featured.webp 1240w"
                          alt="99.co"
                          width={400}
                          height={300}
                          sizes="100vw"
                        />
                      </picture>
                    </article>
                  </a>
                </div>
              </div>
            </section>
            <section id="services" tw="pb-24 md:pb-36">
              <div tw="max-w-screen-xl m-auto px-5">
                <div tw="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div tw="sm:col-span-2 md:col-span-3 md:mb-5 sm:w-4/6">
                    <h2 tw="mb-10 text-6xl tracking-tighter font-bold">
                      Seasons
                    </h2>
                    <p tw="text-xl tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <h3 tw="font-bold mb-8 text-3xl tracking-tight">80's</h3>
                    <p tw="md:pb-5 text-xl tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul tw="leading-8">
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                    </ul>
                  </div>
                  <div>
                    <h3 tw="font-bold mb-8 text-3xl tracking-tight">90's</h3>
                    <p tw="md:pb-5 text-xl tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul tw="leading-8">
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                    </ul>
                  </div>
                  <div>
                    <h3 tw="font-bold mb-8 text-3xl tracking-tight">00's</h3>
                    <p tw="md:pb-5 text-xl tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul tw="leading-8">
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                      <li tw="font-bold tracking-tight"># year</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="stats" tw="pb-24 md:pb-36">
              <div tw="max-w-screen-xl m-auto px-5">
                <div tw="container px-5 mx-auto">
                  <h2 tw="mb-10 text-6xl tracking-tighter font-bold">Stats</h2>
                  <section tw="grid grid-cols-3 gap-x-8 gap-y-16">
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                    <TileArticle />
                  </section>
                </div>
              </div>
            </section>
            <div tw="relative max-w-screen-md mx-auto pb-24 md:pb-36 md:leading-tight text-center font-bold tracking-tighter text-3xl md:text-5xl px-10">
              <span tw="block">🎧 & 📹</span>
              Come a subscriber to thinking basketball
              <br />
              Check out the latest season and more on thinking basketball
              youtube.
              <div>
                <a
                  href=""
                  title="get in touch"
                  target="_blank"
                  rel="noreferrer"
                  tw="text-xl tracking-tight py-4"
                >
                  More?!?
                </a>
              </div>
            </div>
          </Main>
          <footer
            id="footer"
            tw="md:pt-6 md:pb-16 border-t border-gray-200 dark:border-gray-800"
          >
            <div tw="text-center md:text-left max-w-screen-xl m-auto sm:flex sm:justify-between sm:items-center text-sm pb-16 md:pb-0">
              <p id="credit" tw="p-5 text-gray-500 dark:text-gray-400">
                2021 © Thinking Basketball. This site was designed in
                <a
                  href="https://www.figma.com/"
                  tw="text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                  target="_blank"
                  rel="noreferrer"
                  title="follow me on social media"
                >
                  figma
                </a>
                ,
                <a
                  href="https://www.gatsbyjs.com/"
                  tw="text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                  target="_blank"
                  rel="noreferrer"
                  title="follow me on social media"
                >
                  Gatsby.js
                </a>
                ,
                <a
                  href="https://tailwindcss.com/"
                  tw="text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                  target="_blank"
                  rel="noreferrer"
                  title="follow me on social media"
                >
                  tailwindcss
                </a>{' '}
                &amp;
                <a
                  href="https://www.netlify.com/"
                  tw="text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                  target="_blank"
                  rel="noreferrer"
                  title="follow me on social media"
                >
                  deployed via Netlify
                </a>
                .
              </p>
              <p tw="p-5">
                <span tw="inline-flex space-x-5 leading-tight">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    tw="font-bold text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                    title="follow me on social"
                  >
                    book.
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    tw="font-bold text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                    title="follow me on social"
                  >
                    youtube.
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    tw="font-bold text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                    title="follow me on social"
                  >
                    podcast.
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    tw="font-bold text-black hover:text-purple-800 dark:text-gray-200 dark:hover:text-yellow-200"
                    title="follow me on social"
                  >
                    twitter.
                  </a>
                </span>
              </p>
              {/* sticky footer for mobile */}
              <div
                id="sticky-footer"
                tw="md:hidden text-base w-full px-5 flex justify-between items-center fixed bottom-0 bg-black md:relative dark:bg-purple-900"
              >
                <a
                  href=""
                  tw="text-gray-300 py-4 dark:text-purple-300

          "
                >
                  book.
                </a>
                <a
                  href=""
                  tw="text-gray-300 py-4 dark:text-purple-300

          "
                >
                  youtube.
                </a>
                <a
                  href=""
                  tw="text-gray-300 py-4 dark:text-purple-300

          "
                >
                  podcast.
                </a>
                <a
                  href=""
                  title="get in touch"
                  target="_blank"
                  rel="noreferrer"
                  tw="text-gray-300 py-4 dark:text-purple-300"
                >
                  twitter.
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
