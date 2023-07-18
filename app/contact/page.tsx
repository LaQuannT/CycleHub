import { GoMail } from 'react-icons/go';
import Image from 'next/image';

const metadata = {
  title: 'Cycle Hub | Contact',
};

const Contact = () => {
  return (
    <main>
      <div className="max-width mx-auto">
        <div className="flex flex-col gap-5 min-h-screen md:flex-row">
          <section className="flex justify-center items-center my-16 md:w-1/2">
            <div className="mx-3 space-y-4">
              <div>
                <h2 className="text-5xl font-semibold text-gray-500">
                  Let&#39;s Chat.
                </h2>
                <h2 className="text-5xl font-semibold text-gray-500">
                  Give us feed back.
                </h2>
              </div>
              <small className="text-sm font-light">
                Help improve your user experience.
              </small>
              <div className="flex space-x-2 items-center rounded shadow py-2 px-3 w-fit">
                <GoMail />
                <small className="text-violet-500 font-light">
                  cyclehub@fakeemail.com
                </small>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center md:w-1/2">
            <div className="my-6 flex gap-3 items-center p-4 text-gray-500">
              <Image
                src="/twitter-logo.svg"
                width={50}
                height={50}
                alt="twitter logo"
              />
              <p className="text-xl font-semibold">@CycleHub</p>
            </div>
            <div className="my-6 flex gap-3 items-center p-4 text-gray-500">
              <Image
                src="/instagram-logo.svg"
                width={50}
                height={50}
                alt="instagram logo"
              />
              <p className="text-xl font-semibold">@CycleHubSpecs</p>
            </div>
            <div className="my-6 flex gap-3 items-center p-4 text-gray-500">
              <Image
                src="/facebook-logo.svg"
                width={50}
                height={50}
                alt="facebook logo"
              />
              <p className="text-xl font-semibold">@CycleHub</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
