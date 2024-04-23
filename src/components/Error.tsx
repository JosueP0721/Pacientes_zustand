import { PropsWithChildren } from "react";

export default function Error({children} : PropsWithChildren) {
  return (
    <p className=" text-center my-4 bg-red-600 text-white uppercase p-3 text-sm font-bold">
        {children}
    </p>
  )
}
