import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
    return (
        <div class="w-full bg-secondary text-black text-left">
  <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
    <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
      <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
        
        <h1>Greet</h1>
        
      </div>
      <div class="w-full sm:w-1/5 flex flex-col space-y-4">
        <a class="opacity-60">About Us</a>
        <a class="opacity-60">Responsibilities</a>
        <a class="opacity-60">Out Services</a>
        <a class="opacity-60">Contact</a>
      </div>
      <div class="w-full sm:w-1/5 flex flex-col space-y-4">
        <a class="opacity-60">Disclaimer</a>
        <a class="opacity-60">Testimonials</a>
        <a class="opacity-60">Privacy Policy</a>
        <a class="opacity-60">Terms of Service</a>
      </div>
      <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
        <div class="flex flex-row space-x-4">
        <h1>Follow us</h1>
        <br />
        <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
        <FontAwesomeIcon className="text-4xl mb-4" icon={faCoffee} />
        </div>
      </div>
    </div>
 
  </div>
</div>
    )
}