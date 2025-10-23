import arrowSvg from '../assets/arrow.svg'

interface HeroSectionProps {
  onRequestAccess: () => void
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[21px] h-[19px] items-center shrink-0" data-name="Navigation">
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] flex flex-col font-light justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[16px] text-nowrap text-right">
        <p className="leading-[normal] whitespace-pre">Contact</p>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <div className="h-[29px] relative shrink-0 w-[100px]" data-name="Logo">
        <div className="[text-shadow:rgba(0,0,0,0.35)_0px_4px_4px] absolute bottom-[-3.19px] flex flex-col font-black justify-center leading-[0] left-0 not-italic right-0 text-[#f0f0f0] text-[24px] text-center top-0">
          <p className="leading-[normal]">M.XYZ</p>
        </div>
      </div>
      <Navigation />
    </div>
  )
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 lg:left-[129.5px] not-italic top-[165px] md:top-[200px] max-w-[287px] md:max-w-none lg:max-w-[500px] md:justify-start lg:justify-center">
      <p className="[text-shadow:rgba(72,72,72,0.15)_2px_4px_6px] bg-clip-text bg-gradient-to-b font-black from-50% from-[#f0f0f0] leading-[normal] relative shrink-0 text-[32px] md:text-[40px] to-[#bebebe] to-[91.859%] w-[287px] md:w-[470.702px] lg:w-[500px]" style={{ WebkitTextFillColor: "transparent" }}>
        Predictive modeling for cities, industries, and communities
      </p>
      <div className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-light leading-[normal] relative shrink-0 text-[#f0f0f0] text-[14px] md:text-[16px] w-[287px] md:w-[368.43px] lg:w-[370px]">
        <p className="mb-0">Climate change, migration, economic disruption and political events are reshaping every city.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Meridian XYZ helps you see what's coming next and act with confidence.</p>
      </div>
    </div>
  )
}

interface Frame3Props {
  onRequestAccess: () => void
}

function Frame3({ onRequestAccess }: Frame3Props) {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-end justify-between relative shrink-0 w-full h-[107px] md:h-auto">
      <div className="flex flex-col font-light justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(170,170,170,0.94)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Plan for the future with confidence.</p>
      </div>
      <button 
        onClick={onRequestAccess}
        className="bg-[#666666] box-border content-stretch flex flex-col h-[48px] items-end justify-end p-[8px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[154px] cursor-pointer hover:bg-[#757575] transition-colors" 
        data-name="Button"
      >
        <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-light leading-[normal] not-italic relative shrink-0 text-[#f0f0f0] text-[16px] text-nowrap whitespace-pre">Request Access</p>
        <div className="h-0 relative shrink-0 w-[120px]">
          <div className="absolute inset-[-2.89px_-3.33%_-10.89px_-3.75%]">
            <img src={arrowSvg} alt="arrow" className="block size-full" />
          </div>
        </div>
      </button>
    </div>
  )
}

function Frame2({ onRequestAccess }: Frame3Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Header />
      {/* Mobile: Frame3 before Frame4, Desktop/Tablet: Frame4 before Frame3 */}
      <div className="md:hidden w-full"><Frame3 onRequestAccess={onRequestAccess} /></div>
      <Frame4 />
      <div className="hidden md:block w-full"><Frame3 onRequestAccess={onRequestAccess} /></div>
    </div>
  )
}

export default function HeroSection({ onRequestAccess }: HeroSectionProps) {
  return (
    <div className="bg-[#303030] relative size-full" data-name="Hero Section">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[56px] items-end px-[44px] py-[50px] md:p-[50px] relative size-full">
          <Frame2 onRequestAccess={onRequestAccess} />
        </div>
      </div>
    </div>
  )
}

