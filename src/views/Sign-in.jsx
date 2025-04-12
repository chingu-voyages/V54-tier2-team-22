import Signinform from '../components/signinForm';

export default function Signin() {
  return (
    <main className="flex flex-col w-full items-center gap-[40px] max-xl:gap-[40px] pt-[32px] max-xl:pt-[16px] px-[225px] max-xl:px-[32px] max-sm:px-[16px]">
      <section className="  h-full w-full sm:w-3/5 md:w-4/5 lg:w-3/5 flex flex-col justify-center items-center">
        <Signinform />
      </section>
    </main>
  );
}
