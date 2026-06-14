// import Image from "next/image";

import MotionDiv from '../components/MotionDiv';
import Image from 'next/image';
export default function About() {
  return (
    <section id="about" className="my-8 md:my-20 flex flex-col md:flex-row">
      <div className="flex flex-col  lg:w-2/3 space-y-6 order-2 md:order-1">
        <MotionDiv delayOffset={0.2}>
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold">Hakkımda</h2>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <p className="text-gray-500 ">
            Merhaba! Ben Burak Sağlık, Türkiye de yaşayan bir Web Geliştirici ve Fotoğrafçıyım. 2018 yılında Sivas Cumhuriyet Üniversitesi
            Yönetim Bilişim Sistemleri bölümünden bölüm birincisi olarak mezun oldum 🎓.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={0.5}>
          <p className="text-gray-500 ">
            Kariyerime 2016 yılında Detaysoft ta Frontend, Mobil ve SAP Fiori Geliştirici olarak başladım. Bu süreçte hem kurumsal hem de
            kullanıcı odaklı projelerde geniş bir deneyim edindim.
          </p>
        </MotionDiv>
        <MotionDiv delayOffset={0.6}>
          <p className="text-gray-500 ">
            Şu an Innova da çalışmaktayım. React.js, Next.js ve SAP Fiori ile kurumsal ve kullanıcı odaklı projeler geliştiriyorum.
            Öğrenmeyi bırakmadığım sürece iyi iş çıkarabileceğime inanıyorum.
          </p>
        </MotionDiv>
        <p className="text-xs md:text-[2rem] text-white font-golden">
          Burak Sağlık Frontend & Mobile Developer Photographer React.js Next.js JavaScript TypeScript SAP Fiori ui/ux burak sağlik burak
          sağlık{' '}
        </p>
      </div>
      <div className="lg:w-1/3 order-1 md:order-2">
        <MotionDiv delayOffset={0.4}>
          <Image
            width={400}
            height={500}
            src="/user.jpeg"
            alt="Burak Sağlık - Web Developer and Photographer"
            className="w-[350px] min-w-[300px] max-h-[400px] object-cover rounded-xl transition-all hover:scale-110 "
            loading="lazy"
            unoptimized
          />
        </MotionDiv>
      </div>
    </section>
  );
}
