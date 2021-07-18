import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export function HowItWorks() {
    return (
        <div className="bg-secondary  pt-32">
            
            
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">How Greet works</h1>
            
                <div className="grid grid-cols-3 gap-14 py-24 text-left w-10/12 mx-auto ">
                    <div>
                        <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 pb-3">Take a look at the job board</h1>
                        <p>Rows is the first true spreadsheet with built-in integrations and a slick sharing experience. </p>
                    </div>
              
                    <div>
                        <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 pb-3">Refer your friends or why not yourself</h1>
                        <p>Rows is the first true spreadsheet with built-in integrations and a slick sharing experience. </p>
                    </div>

                    <div>
                        <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
                        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 pb-3">Get paid if a match is found. </h1>
                        <p>Rows is the first true spreadsheet with built-in integrations and a slick sharing experience. </p>
                    </div>
                </div>
            
        </div>
    )
}