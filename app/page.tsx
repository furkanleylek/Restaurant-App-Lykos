import Image from 'next/image'
import WelcomeSection from '@/components/home/welcome'
import About from '@/components/home/sectionTwo/about'
import Icons from '@/components/home/sectionTwo/icons'
import MenuSection from '@/components/home/menuSection'
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
        <div className='w-full flex gap-32 container mx-auto pt-20 xl:pt-32 pb-20 xl:pb-24 px-4 md:px-16 xl:px-32 relative '
        >
          <Icons />
        </div>
        <Image
          src="/Photo.svg"
          width={420}
          height={420}
          alt="Restaurant İçi"
          className='xl:hidden h-60 md:h-80 w-full object-cover'
        />
        <div className='w-full flex gap-32 container mx-auto pb-16 xl:pb-32 px-4 md:px-16 xl:px-32 relative '
        >
          <About />
        </div>
      </section>


      <section
        className="w-full h-full"
      >
        <div className='w-full flex gap-32 container mx-auto pb-20 xl:pb-32 px-4 pt-16  md:px-16 xl:px-32 relative '
        >
          <MenuSection />
        </div>
      </section>


    </main>
  )
}
