import SectionHero from '@/components/SectionHero';
import SectionAbout from '@/components/SectionAbout';
import SectionCalc from '@/components/SectionCalc';
import SectionVideo from '@/components/SectionVideo';
import SectionWho from '@/components/SectionWho';
import SectionProgram from '@/components/SectionProgram';
import SectionHowLearning from '@/components/SectionHowLearning';
import SectionBonuses from '@/components/SectionBonuses';
import SectionTalent from '@/components/SectionTalent';
import SectionSpeakers from '@/components/SectionSpeakers';
import SectionTariff from '@/components/SectionTariff';
import SectionAcademy from '@/components/SectionAcademy';
import SectionMyResults from '@/components/SectionMyResults';
import SectionReviews from '@/components/SectionReviews';
import SectionFaq from '@/components/SectionFaq';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="page-wrapper">
      <img
        src="/images/67090a00bdc7f308273e71f2_%D0%A8%D0%A3%D0%9C.webp"
        loading="lazy"
        decoding="async"
        width={1280}
        height={794}
        alt=""
        aria-hidden="true"
        className="noise"
      />
      <SectionHero />
      <SectionAbout />
      <SectionCalc />
      <SectionVideo />
      <SectionWho />
      <SectionProgram />
      <SectionHowLearning />
      <SectionBonuses />
      <SectionTalent />
      <SectionSpeakers />
      <SectionTariff />
      <SectionAcademy />
      <SectionMyResults />
      <SectionReviews />
      <SectionFaq />
      <Footer />
    </div>
  );
}
