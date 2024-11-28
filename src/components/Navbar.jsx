import { NavLink } from 'react-router-dom';
import { PiBriefcaseMetalFill } from "react-icons/pi";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='bg-gray-100 border-b border-blue-100 shadow-md'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <PiBriefcaseMetalFill  className='text-4xl' />
              <span className='hidden md:block text-black text-2xl font-bold ml-2'>
                Soft | Jobs
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;