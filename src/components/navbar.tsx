import { navData } from '@/lib/data'
import Link from 'next/link';


const Navbar = () => {

    
  return (
    <div className='flex items-center gap-8 content-wrapper  '>
        {
            navData.map((item: { title: string; path: string; }) => {
                return (
                    <Link key={item.path} href={item.path} className='text-white-500 text-base font-medium hover:underline'>{item.title}</Link>
                )
            })
        }
    </div>
  )
}

export default Navbar