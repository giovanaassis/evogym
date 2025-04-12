import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPages } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPages) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
    onClick={() => setSelectedPage(SelectedPages.ContactUs)}
    href={`#${SelectedPages.ContactUs}`}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton