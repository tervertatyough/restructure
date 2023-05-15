import Header from "./header";

function About() {
  return (
    <>
      <Header />
      <div className="container h-full w-full px-8 py-8">
        <div className="flex flex-row">
          <div className="basis-1/3 my-auto">
            <p className="mt-6 mb-10 text-4xl font-bold">
              Welcome to Urbandealers
            </p>
            <p>
              where we are changing the game in the real estate industry! We are
              a new generation real estate group that focus in recruiting
              individuals who are driven, self-motivated and passionate to sell
              verified properties for decent commissions, all while making the
              process easy and efficient using digital mediums.
            </p>
          </div>
          <div className="basis-2/3 px-8">
            <div className="container w-full h-full bg-slate-500"></div>
          </div>
        </div>
        <div className="container py-32">
          <div className="flex flex-row">
            <div className="basis-1/3">
              <p>
                Our mission is to provide our clients with the best possible
                real estate experience, while also empowering our recruits with
                the knowledge and tools they need to succeed in this industry.
                We achieve this through our comprehensive training program,
                which equips our recruits with the latest sales techniques,
                digital marketing strategies, and industry insights to help them
                excel in their roles. At Urbandealers we believe that the key to
                success in this industry is authenticity, transparency, and
                honesty. That's why we take pride in providing our clients with
                verified properties that meet their exact needs, and our
                recruits with the support and resources they need to sell these
                properties with confidence.
              </p>
            </div>
            <div className="basis-2/3">
              <div className="container h-full w-full bg-slate-500"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
