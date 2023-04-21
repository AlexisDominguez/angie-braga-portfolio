import Image from 'next/image'

import MainLayout from '@/components/layout/MainLayout/MainLayout'
import Button from '@/components/inputs/Button/Button'
import OutlineBox from '@/components/OutlineBox/OutlineBox'
import AngieBragaPhoto from '@/assets/images/angie-braga-photo.jpeg'

export default function Home() {
  return (
    <MainLayout>
      <div className="flex items-center min-h-[70vh]">
        <div className="flex items-center">
          <div>
            <h1 className="text-8xl mb-8 mt-32">oh, hey!</h1>
            <p className="text-2xl max-w-2xl mb-10 font-light pr-8">
              My name is Angie Braga and I'm a product designer specialized in
              UX/UI. I would like to share my resume with you so you can get to
              know me better and, if we want to, we can explore the possibility
              of working together.
            </p>
            <Button>
              <span className="text-xl font-light">Let's Beggin</span>
            </Button>
          </div>
          <div className="relative ml-3 mt-10">
            <Image src={AngieBragaPhoto} alt="Angie's Braga Photo" priority />
            <OutlineBox customClassName="absolute -bottom-24 -right-80 w-96">
              <div className="absolute right-5 top-0">x</div>
              <h2 className="text-xl mb-3">
                Reminder <sup>01</sup>
              </h2>
              <p className="mb-3">
                Take action and keep moving forward,
                <br /> even if progress is slow.
              </p>
              <div className="flex justify-end">
                <Button>
                  <span className="text-sm">Success</span>
                </Button>
              </div>
            </OutlineBox>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
