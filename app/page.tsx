import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <ScrollStack className='bg-gray-100'>
        <ScrollStackItem>
          <img
            src='https://stsci-opo.org/STScI-01EVSVGFSPB2QA5Q0NFXK5MHKR.jpg'
            alt='step'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src='https://stsci-opo.org/STScI-01EVSVGFSPB2QA5Q0NFXK5MHKR.jpg'
            alt='step'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src='https://stsci-opo.org/STScI-01EVSVGFSPB2QA5Q0NFXK5MHKR.jpg'
            alt='step'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src='https://stsci-opo.org/STScI-01EVSVGFSPB2QA5Q0NFXK5MHKR.jpg'
            alt='step'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src='https://stsci-opo.org/STScI-01EVSVGFSPB2QA5Q0NFXK5MHKR.jpg'
            alt='step'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
        <ScrollStackItem>
          <img
            src='https://stsci-opo.org/STScI-01EVSVGFSPB2QA5Q0NFXK5MHKR.jpg'
            alt='step'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
      </ScrollStack>
    </>
  );
}
