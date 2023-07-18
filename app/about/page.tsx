import { Balancer } from 'react-wrap-balancer';

const metadata = {
  title: 'Cycle Hub | About',
};

const About = () => {
  return (
    <main>
      <div className="max-width mx-auto text-center">
        <section className="my-24 mx-3">
          <h2 className="text-3xl font-bold text-gray-500 my-16">Our Story</h2>

          <h4 className="h4-questions">
            Do you have a interest in motorcycles?
          </h4>

          <h4 className="h4-questions">Do You own a motorcycle?</h4>

          <h4 className="h4-questions">
            Have you done any maintenance or a service on a motorcycle?
          </h4>

          <p className="p-text">
            <Balancer>
              Chances are you have said &#34;Yes&#34; to at least one of these
              questions, otherwise why would you be here? If that is the case,
              you understand why Cycle Hub was needed.
            </Balancer>
          </p>

          <p className="p-text">
            <Balancer>
              Cycle Hub is the result of many long days of tinkering on various
              different motorcycles. Many of time you can wing it and get
              similar or even the exact specifications for certain parts. Other
              times not so much.
            </Balancer>
          </p>

          <p className="p-text">
            <Balancer>
              On those not so much times, it becomes a wild goose change trying
              to find the right specifications for your particular Make and
              Model. Sometimes this can be a breeze other times its like looking
              for a needle in a hay stack. So why not just have one singular
              place you can look up your motorcycle and get the specs? And just
              like that idea of Cycle Hub was born.
            </Balancer>
          </p>

          <p className="p-text">
            <Balancer>
              Cycle Hub was created for ease of use! Spend less time finding
              specs and more time on the open road!
            </Balancer>
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
