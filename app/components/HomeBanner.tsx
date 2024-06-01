import Image from "next/image"

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-red-500 to-red-700 mb-8">
          <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Game Ready!!</h1>
                <p className="text-lg md:text-xl text-black mb-2">Topnotch quality for best prices</p>
                <p className="text-2xl md:text-5xl text-yellow-500 font-bold">GET A FREE BADGE</p>
            </div>
            <div className="w-1/3 relative hidden md:block" style={{ aspectRatio: '16/9'}}>
                <Image 
                src="/bann-image.png"
                layout="fill"
                alt="Banner Image"
                 className="object-contain transform scale-150"/>
            </div>
          </div>
        </div>
    )
}

export default HomeBanner