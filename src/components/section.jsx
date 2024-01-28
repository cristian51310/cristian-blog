export default function Section({ children }) {
  return (
    <section className="w-full mt-12 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      {children}
    </section>
  )
}