import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="container mx-auto flex justify-between my-5 fixed w-full left-1/2 top-0 -translate-x-1/2 font-inter-nextjs">
        {/* logo */}
        <Image src="/logo.svg" alt="logo" width={120} height={120} />
        {/* menu navigation */}
        <nav className="flex center items-center">
          {/* links */}
          <ul className="flex mr-10 gap-8 capitalize text-slate-50 text-sm">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">shop</a>
            </li>
            <li>
              <a href="">about us</a>
            </li>
            <li>
              <a href="">contact us</a>
            </li>
          </ul>

          {/* links icons */}
          <ul className="flex ml-10 gap-8">
            <li>
              {' '}
              <a href="">
                <Image src="/search.svg" alt="logo" width={28} height={28} />
              </a>{' '}
            </li>
            <li>
              <a href="">
                <Image src="/cart.svg" alt="logo" width={28} height={28} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* hero */}
      <section className="container mx-auto">
        <span className="w-[2px] h-48 block bg-slate-50 ml-80"></span>
        <div className="flex flex-row">
          <div>
            {/* <Image /> */}
            <h1 className="text-slate-50 text-9xl capitalize flex flex-col font-dm-serif-display-nextjs">
              <span>discover</span>
              <span>our new</span>
              <span>collection</span>
            </h1>
            <p className="text-slate-50 font-inter-nextjs max-w-xs mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="border-solid border-2 border-slate-50  text-slate-50 capitalize font-inter-nextjs px-[1.5rem] py-[0.65rem] flex gap-4 text-sm hover:bg-slate-50 hover:text-slate-950 transition">
              shop
              <Image src="/arrow.svg" alt="arrow" width={28} height={28} />
            </button>
          </div>
          <div className="flex absolute bottom-[163px] left-1/2">
            <div className="relative">
              <Image
                src="/unsplash_nimElTcTNyY.svg"
                alt="image3"
                width={300}
                height={434}
              />
            </div>
            <div>
              <Image
                src="/unsplash_zi5QQl26vaM.svg"
                alt="image"
                width={333}
                height={360}
              />
              <Image
                src="/unsplash_SUUGUg7RXYY.svg"
                alt="image2"
                width={403}
                height={344}
              />
            </div>
          </div>
        </div>
        <span className="w-[2px] h-56 block bg-slate-50 ml-80"></span>
      </section>
    </main>
  );
}
