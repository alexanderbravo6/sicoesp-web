'use client'
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

function Breadcrumb({ items }) {

  return (
    <>
      <Breadcrumbs
        itemClasses={{
          item: "text-white",
          separator: "text-white",
        }}
        underline="hover"
      >
        {
          items.map((item, index) => (
            <BreadcrumbItem key={index} href={item.href} >{item.name} </BreadcrumbItem>
          ))
        }
      </Breadcrumbs>
    </>
  )
}

export default Breadcrumb