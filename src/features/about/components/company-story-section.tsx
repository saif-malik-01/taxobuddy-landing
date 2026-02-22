import Image from 'next/image';
import Link from 'next/link';

export default function CompanyStorySection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-md">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Check our stats</span>
              <h2 className="font-heading mb-8 text-6xl md:text-7xl text-white tracking-tighter-xl">Making credit history with nightcard</h2>
              <p className="mb-8 text-lg text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
              <Link className="inline-block text-white hover:text-opacity-80 font-medium underline transition duration-500" href="#">
                Read more
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="mx-auto max-w-lg md:mr-0">
              <div className="flex flex-wrap -m-4">
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap">
                    <div className="mb-8 w-full">
                      <Image className="w-full" src="/images/img2.png" alt="Company story image 1" width={300} height={200} />
                    </div>
                    <div className="w-full">
                      <Image className="w-full" src="/images/img4.png" alt="Company story image 2" width={300} height={200} />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap mt-24">
                    <div className="mb-8 w-full">
                      <Image className="w-full" src="/images/img3.png" alt="Company story image 3" width={300} height={200} />
                    </div>
                    <div className="w-full">
                      <Image className="w-full" src="/images/img.png" alt="Company story image 4" width={300} height={200} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
