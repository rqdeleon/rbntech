"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { TriangleAlert } from "lucide-react"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-lime-600 group-[.toast]:text-primary-foreground p-2",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground text-md",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
