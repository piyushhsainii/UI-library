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
  demo: `
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
  hasVariants: false,
  manualSteps: [
    {
      title: "Install the following dependencies:",
      code: "npm install tailwind-merge framer-motion"
    },
    {
      title: "Copy and paste the following code into your project",
      code: `
      import { LeftSideItems, Logo, Navbar, NavbarItem, RightSideItems }
      from './components/ui/navbar'
      \n
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
      `
    },
    {
      title: "Update the import paths to match your project setup."
    },

  ]
}

export { metadata }