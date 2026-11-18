import React from 'react'

const sections = [
  "World",
  "National",
  "Business",
  "Science",
  "Arts",
  "Sport",
  "Opinion",
  "Weather",
];

const briefs = [
  {
    headline: "Council Approves New Cycle Lane Along Seafront",
    body: "Work is expected to begin in the spring after a narrow vote. Shop owners say they were not consulted on the loss of parking.",
  },
  {
    headline: "Rail Operators Promise Fewer Delays Over Winter",
    body: "Timetable changes take effect next month, with extra staff on the busiest commuter routes during morning and evening peaks.",
  },
  {
    headline: "Local School Wins National Science Prize",
    body: "A team of sixth-form students built a low-cost water sensor that has already been tested in three rivers.",
  },
];

const opinions = [
  {
    headline: "The High Street Is Not Dead, It Is Changing",
    byline: "By the Editorial Board",
  },
  {
    headline: "Why We Should Plant More Trees in Cities",
    byline: "By a Staff Columnist",
  },
  {
    headline: "A Fair Deal for Renters Is Long Overdue",
    byline: "By a Guest Contributor",
  },
];

function Rule({ heavy = false }: { heavy?: boolean }) {
  return (
    <div
      className={
        heavy
          ? "border-t-4 border-double border-[#1a1a1a]"
          : "border-t border-[#1a1a1a]"
      }
    />
  );
}

function Newspaper() {
  return (
        <div className="min-h-screen bg-[#f2efe8] border-4 border-pink-400 text-[#1a1a1a]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        {/* Masthead */}
        <header className="text-center">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span>Wednesday, November 18, 2026</span>
            <span className="hidden sm:inline">Late Edition</span>
            <span>Price £2.00</span>
          </div>
          <h1 className="my-3 text-5xl font-black tracking-tight sm:text-7xl geist-pixel">
            The Daily Chronicle
          </h1>
          <Rule heavy />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 py-2 text-sm">
            {sections.map((s) => (
              <a key={s} href="#" className="hover:underline">
                {s}
              </a>
            ))}
          </nav>
          <Rule />
        </header>

        <main className="mt-6 grid gap-8 lg:grid-cols-[1fr_2.2fr_1fr]">
          {/* Left column: briefs */}
          <aside className="order-2 flex flex-col gap-5 lg:order-1 lg:border-r lg:border-[#1a1a1a]/40 lg:pr-6">
            {briefs.map((b) => (
              <article
                key={b.headline}
                className="border-b border-[#1a1a1a]/40 pb-5 last:border-b-0"
              >
                <h3 className="text-lg font-bold leading-snug">{b.headline}</h3>
                <p className="mt-2 text-sm leading-6">{b.body}</p>
              </article>
            ))}
          </aside>

          {/* Centre: lead story */}
          <article className="order-1 lg:order-2">
            <h2 className="text-center text-4xl font-black leading-tight sm:text-5xl">
              Storm Brings Record Rainfall to the South Coast
            </h2>
            <p className="mt-3 text-center text-lg italic leading-7">
              Thousands without power as emergency crews work through the night
              to clear flooded roads
            </p>
            <p className="mt-2 text-center text-xs">
              By Staff Reporter &nbsp;|&nbsp; Updated 6:10 a.m.
            </p>

            <figure className="mt-5">
              <div className="flex aspect-[16/9] items-center justify-center bg-[#cfcac0] text-sm text-[#1a1a1a]/60">
                Photograph
              </div>
              <figcaption className="mt-1 text-xs italic">
                Volunteers lay sandbags along a flooded street on Tuesday
                evening as the water continued to rise.
              </figcaption>
            </figure>

            <div className="mt-5 text-justify text-base leading-7 [column-rule:1px_solid_rgb(26_26_26/0.4)] sm:columns-2 sm:gap-6 [&>p+p]:indent-6 [&>p]:hyphens-auto">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85]">
                Heavy rain swept across the coast overnight, bringing the
                highest rainfall total recorded in a single day since records
                began in the area. Forecasters said the system would move
                slowly north through the morning, with further warnings in
                place for several counties.
              </p>
              <p>
                Emergency services received more than four hundred calls
                between midnight and dawn, most of them from residents whose
                homes or businesses were threatened by rising water. Several
                main roads were closed, and train services were suspended on
                two lines while engineers inspected embankments.
              </p>
              <p>
                Power companies said around eight thousand households lost
                supply at the height of the storm. Crews had restored most of
                them by early morning, though some rural areas could remain
                without electricity until the afternoon.
              </p>
              <p>
                Local officials urged people to avoid unnecessary travel and
                to keep away from rivers and the shoreline. Rest centres have
                been opened at three community halls, offering hot meals and
                somewhere warm to wait.
              </p>
              <p>
                &ldquo;The response from neighbours has been remarkable,&rdquo;
                said one resident, who spent the night helping an elderly
                couple move belongings upstairs. &ldquo;Everyone just turned
                up with whatever they had.&rdquo;
              </p>
              <p>
                The weather service expects conditions to ease by Thursday,
                although ground already saturated by weeks of wet weather
                means the risk of flooding will remain high through the
                weekend.
              </p>
            </div>
          </article>

          {/* Right column: opinion and weather */}
          <aside className="order-3 flex flex-col gap-6 lg:border-l lg:border-[#1a1a1a]/40 lg:pl-6">
            <section>
              <h3 className="border-b border-[#1a1a1a] pb-1 text-xl font-bold">
                Opinion
              </h3>
              <ul className="mt-3 flex flex-col gap-4">
                {opinions.map((o) => (
                  <li key={o.headline}>
                    <a href="#" className="font-bold leading-snug hover:underline">
                      {o.headline}
                    </a>
                    <div className="mt-1 text-xs italic">{o.byline}</div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-[#1a1a1a] p-4">
              <h3 className="text-center text-lg font-bold">Today&rsquo;s Weather</h3>
              <p className="mt-2 text-center text-3xl font-black">11°C</p>
              <p className="text-center text-sm">Rain, heavy at times</p>
              <p className="mt-2 text-center text-xs">
                Tomorrow: showers easing, 12°C
              </p>
            </section>

            <section>
              <h3 className="border-b border-[#1a1a1a] pb-1 text-xl font-bold">
                Markets
              </h3>
              <dl className="mt-3 grid grid-cols-[1fr_auto] gap-y-1 text-sm">
                <dt>FTSE 100</dt>
                <dd>+0.4%</dd>
                <dt>Pound / Dollar</dt>
                <dd>1.31</dd>
                <dt>Brent Crude</dt>
                <dd>-0.8%</dd>
              </dl>
            </section>
          </aside>
        </main>

        <footer className="mt-10">
          <Rule heavy />
          <p className="py-3 text-center text-xs">
            &copy; 2026 The Daily Chronicle. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Newspaper
