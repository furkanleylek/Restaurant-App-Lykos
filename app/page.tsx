import Image from 'next/image'
import WelcomeSection from '@/components/home/welcome'
import SectionTwo from '@/components/home/sectionTwo/sectionTwoMain'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  overflow-x-hidden">
      <section
        className="w-full h-full  bg-secondaryBg"
      >
        <div className='w-full flex gap-4 md:gap-16 xl:gap-32 container mx-auto py-8  px-4 md:px-16 xl:px-32 relative '
        >
          <WelcomeSection />
        </div>
      </section>
      <section
        className="w-full h-full bg-primaryBg "
      >
        <div className='w-full flex gap-32 container mx-auto px-4 pt-16 pb-8 md:px-16 xl:px-32 relative '
        >
          <SectionTwo />
        </div>
      </section>
      <section
        className="w-full h-full bg-primaryBg "
      >
        <div className='w-full flex gap-32 container mx-auto px-4 pt-16 pb-8 md:px-16 xl:px-32 relative '
        >
          <SectionTwo />
        </div>
      </section>
    </main>
  )
}
