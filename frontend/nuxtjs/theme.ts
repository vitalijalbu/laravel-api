export const themeSettings = {
  colorMode: false,
  ui: {
    size: 'lg',
    // colors: {
    //   primary: 'red',
    //   neutral: 'zinc'
    // },
    container: {
      base: 'max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8'
    },
    modal: {
      slots: {
        footer: 'justify-end',
      },
    },
    card: {
      slots: {
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6',
      },
    },
    formField: {
      slots: {
        root: 'w-full',
        wrapper: 'w-full',
      },
    },
    input: {
      slots: {
        root: 'w-full',
      },
    },
    selectMenu: {
      slots: {
        group: 'cursor-pointer',
        base: 'w-full'
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
    },
    toast: {
      slots: {
        progress: 'hidden'
      }
    }
  },
};
