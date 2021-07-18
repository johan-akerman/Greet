import { FAQCard } from "./FAQCard"
export function FAQ() {
    return (
        <div className="bg-secondary">
            <h1 className="text-center tracking-tight pb-8 font-extrabold text-gray-900 sm:text-5xl md:text-5xl">Let's cure your curiosity</h1>
            <div className="w-8/12 mx-auto">
                <FAQCard />
                <FAQCard />
                <FAQCard />
            </div>
        </div>
    )
}