import { Disclosure } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export function FAQCard() {
  return (
    <div className="w-full px-4 pt-4">
      <div className="w-full p-2 mx-auto bg-white rounded-2xl text-left">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
           

              <FontAwesomeIcon className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`} icon={faChevronUp} />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
       
      </div>
    </div>
  )
}