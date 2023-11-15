import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return <>
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className=" bg-black-200/40 h-[274px] w-full rounded-lg" />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 bg-black-200/40" />
        <div className="mt-12 w-full flex flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] w-full sm:w-[356] bg-black-200/40" />
          <Skeleton className="h-[440px] w-full sm:w-[356] bg-black-200/40" />
          <Skeleton className="h-[440px] w-full sm:w-[356] bg-black-200/40" />
        </div>
      </section>
    </main>

  </>
}

export default loading