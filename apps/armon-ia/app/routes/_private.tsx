import { PrivateLayout } from '~/components/layout/private-layout'
import { SidebarProvider } from '~/contexts/sidebar-context'
import { ThemeProvider } from '~/contexts/theme-context'

export default function PrivateLayoutRoute() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <PrivateLayout />
      </SidebarProvider>
    </ThemeProvider>
  )
}
