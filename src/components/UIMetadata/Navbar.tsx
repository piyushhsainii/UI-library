const metadata = {
  cli: 'npx ui-library add navbar',
  description: "A Navigation Bar with animation",
  import: `
  import { LeftSideItems, Logo, Navbar, NavbarItem, RightSideItems } from './components/ui/navbar'
    `,
  code: `
    import { LeftSideItems, Logo, Navbar, NavbarItem, RightSideItems } from './components/ui/navbar'
    <Navbar className='bg-black'>
          <LeftSideItems>
            <Logo>Aura UI</Logo>
            <NavbarItem> Home</NavbarItem>
            <NavbarItem> About</NavbarItem>
          </LeftSideItems>
          <RightSideItems>
            <NavbarItem> Login </NavbarItem>
          </RightSideItems>
        </Navbar>
    `,
  demo: "",
  hasVariants: false
}

export { metadata }