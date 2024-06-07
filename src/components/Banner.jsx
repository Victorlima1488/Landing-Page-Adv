import { Header } from './Header'
import { Appointment } from './Appointment'

import LawyerImage from '../assets/img/imgAdvogados.png'

export function Banner() {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f1e8e8] to-[#f1e8e8]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-32">
        {/* left side */}
        <div className="text-center h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary text-6xl lg:text-7xl text-#611718 mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
            Rhávila Guedes <br />
            <span className="text-accent">Advocacia</span>
          </h1>

          {/* <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]">
            A necessidade de um advogado surge devido à complexidade do sistema
            jurídico e à importância de garantir nossos direitos e interesses de
            maneira adequada.
          </p> */}
          {/* Appointment */}
        </div>
        {/* Right side */}
        <div className="hidden flex-1 lg:flex lg:flex-col items-end">
          <img src={LawyerImage} alt="/" />
        </div>
      </div>
    </section>
  )
}
