export const SelectTheme = {
  select: {
    defaultProps: {
      variant: "outlined",
      color: "blue",
      size: "md",
      label: "",
      error: false,
      success: false,
      arrow: undefined,
      value: undefined,
      onChange: undefined,
      selected: undefined,
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      autoHeight: false,
      lockScroll: false,
      labelProps: {},
      menuProps: {},
      className: "",
      disabled: false,
      containerProps: undefined,
    },
    valid: {
      variants: ["standard", "outlined", "static"],
      sizes: ["md", "lg"],
      colors: [
        "blue-gray",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    styles: {
      base: {
        container: {
          position: "relative",
          width: "w-full",
          minWidth: "min-w-[100px]",
        },
        select: {
          peer: "peer",
          width: "w-full",
          height: "h-full",
          bg: "bg-transparent",
          color: "text-blue-gray-700",
          fontFamily: "font-sans",
          fontWeight: "font-normal",
          textAlign: "text-left",
          outline: "outline outline-0 focus:outline-0",
          disabled: "disabled:bg-blue-gray-50 disabled:border-0",
          transition: "transition-all",
        },
        arrow: {
          initial: {
            display: "grid",
            placeItems: "place-items-center",
            position: "absolute",
            top: "top-2/4",
            right: "right-2",
            pt: "pt-px",
            width: "w-5",
            height: "h-5",
            color: "text-blue-gray-400",
            transform: "rotate-0 -translate-y-2/4",
            transition: "transition-all",
          },
          active: {
            transform: "rotate-180",
            mt: "mt-px",
          },
        },
        label: {
          display: "flex",
          width: "w-full",
          height: "h-full",
          userSelect: "select-none",
          pointerEvents: "pointer-events-none",
          position: "absolute",
          left: "left-0",
          fontWeight: "font-normal",
          transition: "transition-all",
        },
        menu: {
          width: "w-full",
          maxHeight: "max-h-96",
          bg: "bg-white",
          p: "p-3",
          border: "border border-blue-gray-50",
          borderRadius: "rounded-md",
          boxShadow: "shadow-lg shadow-blue-gray-500/10",
          fontFamily: "font-sans",
          fontSize: "text-xs",
          fontWeight: "font-normal",
          color: "text-blue-gray-500",
          overflow: "overflow-auto",
          outline: "focus:outline-none",
        },
        option: {
          initial: {
            pt: "pt-[9px]",
            pb: "pb-2",
            px: "px-3",
            borderRadius: "rounded-md",
            lightHeight: "leading-tight",
            cursor: "cursor-pointer",
            userSelect: "select-none",
            background: "hover:bg-blue-gray-50 focus:bg-blue-gray-50",
            opacity: "hover:bg-opacity-80 focus:bg-opacity-80",
            color: "hover:text-blue-gray-900 focus:text-blue-gray-900",
            outline: "outline outline-0",
            transition: "transition-all",
          },
          active: {
            bg: "bg-blue-gray-50 bg-opacity-80",
            color: "text-blue-gray-900",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            userSelect: "select-none",
            pointerEvents: "pointer-events-none",
          },
        },
      },
      variants: {
        outlined: {
          base: {
            select: {},
            label: {
              position: "-top-1.5",
              before: {
                content: "before:content[' ']",
                display: "before:block",
                boxSizing: "before:box-border",
                width: "before:w-2.5",
                height: "before:h-1.5",
                mt: "before:mt-[6.5px]",
                mr: "before:mr-1",
                borderRadius: "before:rounded-tl-md",
                pointerEvents: "before:pointer-events-none",
                transition: "before:transition-all",
                disabled: "peer-disabled:before:border-transparent",
              },
              after: {
                content: "after:content[' ']",
                display: "after:block",
                flexGrow: "after:flex-grow",
                boxSizing: "after:box-border",
                width: "after:w-2.5",
                height: "after:h-1.5",
                mt: "after:mt-[6.5px]",
                ml: "after:ml-1",
                borderRadius: "after:rounded-tr-md",
                pointerEvents: "after:pointer-events-none",
                transition: "after:transition-all",
                disabled: "peer-disabled:after:border-transparent",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-10",
              },
              select: {
                fontSize: "text-xs",
                px: "px-3",
                py: "py-2.5",
                borderRadius: "rounded-[7px]",
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: "leading-[3.75]",
                  },
                  open: {
                    lineHeight: "leading-tight",
                  },
                  withValue: {
                    lineHeight: "leading-tight",
                  },
                },
              },
            },
            lg: {
              container: {
                height: "h-11",
              },
              select: {
                fontSize: "text-xs",
                px: "px-3",
                py: "py-3",
                borderRadius: "rounded-[7px]",
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: "leading-[4.1]",
                  },
                  open: {
                    lineHeight: "leading-tight",
                  },
                  withValue: {
                    lineHeight: "leading-tight",
                  },
                },
              },
            },
          },
          colors: {
            select: {
              "blue-gray": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-blue-gray-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              gray: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-gray-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              brown: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-brown-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              "deep-orange": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-deep-orange-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              orange: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-orange-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              amber: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-amber-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              yellow: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-yellow-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              lime: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-lime-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              "light-green": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-light-green-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              green: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-green-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              teal: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-teal-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              cyan: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-cyan-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              "light-blue": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-light-blue-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              blue: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-blue-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              indigo: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-indigo-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              "deep-purple": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-deep-purple-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              purple: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-purple-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              pink: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-pink-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
              red: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-red-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                  borderTopColor: "border-t-transparent",
                },
              },
            },
            label: {
              "blue-gray": {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-blue-gray-500",
                  before: "before:border-blue-gray-500",
                  after: "after:border-blue-gray-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              gray: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-gray-500",
                  before: "before:border-gray-500",
                  after: "after:border-gray-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              brown: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-brown-500",
                  before: "before:border-brown-500",
                  after: "after:border-brown-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              "deep-orange": {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-deep-orange-500",
                  before: "before:border-deep-orange-500",
                  after: "after:border-deep-orange-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              orange: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-orange-500",
                  before: "before:border-orange-500",
                  after: "after:border-orange-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              amber: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-amber-500",
                  before: "before:border-amber-500",
                  after: "after:border-amber-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              yellow: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-yellow-500",
                  before: "before:border-yellow-500",
                  after: "after:border-yellow-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              lime: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-lime-500",
                  before: "before:border-lime-500",
                  after: "after:border-lime-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              "light-green": {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-light-green-500",
                  before: "before:border-light-green-500",
                  after: "after:border-light-green-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              green: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-green-500",
                  before: "before:border-green-500",
                  after: "after:border-green-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              teal: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-teal-500",
                  before: "before:border-teal-500",
                  after: "after:border-teal-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              cyan: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-cyan-500",
                  before: "before:border-cyan-500",
                  after: "after:border-cyan-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              "light-blue": {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-light-blue-500",
                  before: "before:border-light-blue-500",
                  after: "after:border-light-blue-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              blue: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-blue-500",
                  before: "before:border-blue-500",
                  after: "after:border-blue-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              indigo: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-indigo-500",
                  before: "before:border-indigo-500",
                  after: "after:border-indigo-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              "deep-purple": {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-deep-purple-500",
                  before: "before:border-deep-purple-500",
                  after: "after:border-deep-purple-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              purple: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-purple-500",
                  before: "before:border-purple-500",
                  after: "after:border-purple-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              pink: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-pink-500",
                  before: "before:border-pink-500",
                  after: "after:border-pink-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
              red: {
                close: {
                  color: "text-blue-gray-400",
                  before: "before:border-transparent",
                  after: "after:border-transparent",
                },
                open: {
                  color: "text-red-500",
                  before: "before:border-red-500",
                  after: "after:border-red-500",
                },
                withValue: {
                  color: "text-blue-gray-400",
                  before: "before:border-blue-gray-200",
                  after: "after:border-blue-gray-200",
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: "border",
              },
              label: {
                fontSize: "text-xs",
                disabled: "peer-disabled:text-blue-gray-400",
                before: {
                  bt: "before:border-t-transparent",
                  bl: "before:border-l-transparent",
                },
                after: {
                  bt: "after:border-t-transparent",
                  br: "after:border-r-transparent",
                },
              },
            },
            open: {
              select: {
                borderWidth: "border-2",
                borderColor: "border-t-transparent",
              },
              label: {
                fontSize: "text-[11px]",
                disabled: "peer-disabled:text-transparent",
                before: {
                  bt: "before:border-t-2",
                  bl: "before:border-l-2",
                },
                after: {
                  bt: "after:border-t-2",
                  br: "after:border-r-2",
                },
              },
            },
            withValue: {
              select: {
                borderWidth: "border",
                borderColor: "border-t-transparent",
              },
              label: {
                fontSize: "text-[11px]",
                disabled: "peer-disabled:text-transparent",
                before: {
                  bt: "before:border-t",
                  bl: "before:border-l",
                },
                after: {
                  bt: "after:border-t",
                  br: "after:border-r",
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: "border-red-500",
                },
                open: {
                  borderColor: "border-red-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-red-500",
                  borderTopColor: "border-t-transparent",
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: "text-red-500",
                  before: "before:border-red-500",
                  after: "after:border-red-500",
                },
                open: {
                  color: "text-red-500",
                  before: "before:border-red-500",
                  after: "after:border-red-500",
                },
                withValue: {
                  color: "text-red-500",
                  before: "before:border-red-500",
                  after: "after:border-red-500",
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: "border-green-500",
                },
                open: {
                  borderColor: "border-green-500",
                  borderTopColor: "border-t-transparent",
                },
                withValue: {
                  borderColor: "border-green-500",
                  borderTopColor: "border-t-transparent",
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: "text-green-500",
                  before: "before:border-green-500",
                  after: "after:border-green-500",
                },
                open: {
                  color: "text-green-500",
                  before: "before:border-green-500",
                  after: "after:border-green-500",
                },
                withValue: {
                  color: "text-green-500",
                  before: "before:border-green-500",
                  after: "after:border-green-500",
                },
              },
            },
          },
        },
        standard: {
          base: {
            select: {},
            label: {
              position: "-top-1.5",
              after: {
                content: "after:content[' ']",
                display: "after:block",
                width: "after:w-full",
                position: "after:absolute",
                bottom: "after:-bottom-1.5",
                left: "left-0",
                borderWidth: "after:border-b-2",
                transition: "after:transition-transform after:duration-300",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-11",
              },
              select: {
                fontSize: "text-xs",
                pt: "pt-4",
                pb: "pb-1.5",
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: "leading-[4.25]",
                  },
                  open: {
                    lineHeight: "leading-tight",
                  },
                  withValue: {
                    lineHeight: "leading-tight",
                  },
                },
              },
            },
            lg: {
              container: {
                height: "h-12",
              },
              select: {
                fontSize: "text-xs",
                px: "px-px",
                pt: "pt-5",
                pb: "pb-2",
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: "leading-[4.875]",
                  },
                  open: {
                    lineHeight: "leading-tight",
                  },
                  withValue: {
                    lineHeight: "leading-tight",
                  },
                },
              },
            },
          },
          colors: {
            select: {
              "blue-gray": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-blue-gray-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              gray: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-gray-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              brown: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-brown-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "deep-orange": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-deep-orange-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              orange: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-orange-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              amber: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-amber-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              yellow: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-yellow-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              lime: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-lime-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "light-green": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-light-green-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              green: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-green-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              teal: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-teal-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              cyan: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-cyan-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "light-blue": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-light-blue-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              blue: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-blue-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              indigo: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-indigo-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "deep-purple": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-deep-purple-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              purple: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-purple-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              pink: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-pink-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              red: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-red-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
            },
            label: {
              "blue-gray": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-gray-500",
                },
                open: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-gray-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-gray-50",
                },
              },
              gray: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-gray-500",
                },
                open: {
                  color: "text-gray-500",
                  after: "after:border-gray-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-gray-500",
                },
              },
              brown: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-brown-500",
                },
                open: {
                  color: "text-brown-500",
                  after: "after:border-brown-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-brown-500",
                },
              },
              "deep-orange": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-orange-500",
                },
                open: {
                  color: "text-deep-orange-500",
                  after: "after:border-deep-orange-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-orange-500",
                },
              },
              orange: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-orange-500",
                },
                open: {
                  color: "text-orange-500",
                  after: "after:border-orange-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-orange-500",
                },
              },
              amber: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-amber-500",
                },
                open: {
                  color: "text-amber-500",
                  after: "after:border-amber-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-amber-500",
                },
              },
              yellow: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-yellow-500",
                },
                open: {
                  color: "text-yellow-500",
                  after: "after:border-yellow-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-yellow-500",
                },
              },
              lime: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-lime-500",
                },
                open: {
                  color: "text-lime-500",
                  after: "after:border-lime-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-lime-500",
                },
              },
              "light-green": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-green-500",
                },
                open: {
                  color: "text-light-green-500",
                  after: "after:border-light-green-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-green-500",
                },
              },
              green: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-green-500",
                },
                open: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-green-500",
                },
              },
              teal: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-teal-500",
                },
                open: {
                  color: "text-teal-500",
                  after: "after:border-teal-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-teal-500",
                },
              },
              cyan: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-cyan-500",
                },
                open: {
                  color: "text-cyan-500",
                  after: "after:border-cyan-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-cyan-500",
                },
              },
              "light-blue": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-blue-500",
                },
                open: {
                  color: "text-light-blue-500",
                  after: "after:border-light-blue-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-blue-500",
                },
              },
              blue: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-500",
                },
                open: {
                  color: "text-blue-500",
                  after: "after:border-blue-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-500",
                },
              },
              indigo: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-indigo-500",
                },
                open: {
                  color: "text-indigo-500",
                  after: "after:border-indigo-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-indigo-500",
                },
              },
              "deep-purple": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-purple-500",
                },
                open: {
                  color: "text-deep-purple-500",
                  after: "after:border-deep-purple-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-purple-500",
                },
              },
              purple: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-purple-500",
                },
                open: {
                  color: "text-purple-500",
                  after: "after:border-purple-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-purple-500",
                },
              },
              pink: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-pink-500",
                },
                open: {
                  color: "text-pink-500",
                  after: "after:border-pink-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-pink-500",
                },
              },
              red: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-red-500",
                },
                open: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-red-500",
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: "border-b",
              },
              label: {
                fontSize: "text-xs",
                disabled: "peer-disabled:text-blue-gray-400",
                after: {
                  transform: "after:scale-x-0",
                },
              },
            },
            open: {
              select: {
                borderWidth: "border-b",
              },
              label: {
                fontSize: "text-[11px]",
                disabled: "peer-disabled:text-transparent",
                after: {
                  transform: "after:scale-x-100",
                },
              },
            },
            withValue: {
              select: {
                borderWidth: "border-b",
              },
              label: {
                fontSize: "text-[11px]",
                disabled: "peer-disabled:text-transparent",
                after: {
                  transform: "after:scale-x-0",
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: "border-red-500",
                },
                open: {
                  borderColor: "border-red-500",
                },
                withValue: {
                  borderColor: "border-red-500",
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
                open: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
                withValue: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: "border-green-500",
                },
                open: {
                  borderColor: "border-green-500",
                },
                withValue: {
                  borderColor: "border-green-500",
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
                open: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
                withValue: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
              },
            },
          },
        },
        static: {
          base: {
            select: {},
            label: {
              position: "-top-2.5",
              after: {
                content: "after:content[' ']",
                display: "after:block",
                width: "after:w-full",
                position: "after:absolute",
                bottom: "after:-bottom-2.5",
                left: "left-0",
                borderWidth: "after:border-b-2",
                transition: "after:transition-transform after:duration-300",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-11",
              },
              select: {
                fontSize: "text-xs",
                pt: "pt-4",
                pb: "pb-1.5",
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: "leading-tight",
                  },
                  open: {
                    lineHeight: "leading-tight",
                  },
                  withValue: {
                    lineHeight: "leading-tight",
                  },
                },
              },
            },
            lg: {
              container: {
                height: "h-12",
              },
              select: {
                fontSize: "text-xs",
                px: "px-px",
                pt: "pt-5",
                pb: "pb-2",
              },
              label: {
                initial: {},
                states: {
                  close: {
                    lineHeight: "leading-tight",
                  },
                  open: {
                    lineHeight: "leading-tight",
                  },
                  withValue: {
                    lineHeight: "leading-tight",
                  },
                },
              },
            },
          },
          colors: {
            select: {
              "blue-gray": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-blue-gray-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              gray: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-gray-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              brown: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-brown-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "deep-orange": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-deep-orange-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              orange: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-orange-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              amber: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-amber-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              yellow: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-yellow-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              lime: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-lime-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "light-green": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-light-green-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              green: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-green-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              teal: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-teal-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              cyan: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-cyan-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "light-blue": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-light-blue-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              blue: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-blue-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              indigo: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-indigo-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              "deep-purple": {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-deep-purple-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              purple: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-purple-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              pink: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-pink-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
              red: {
                close: {
                  borderColor: "border-blue-gray-200",
                },
                open: {
                  borderColor: "border-red-500",
                },
                withValue: {
                  borderColor: "border-blue-gray-200",
                },
              },
            },
            label: {
              "blue-gray": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-gray-500",
                },
                open: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-gray-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-gray-50",
                },
              },
              gray: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-gray-500",
                },
                open: {
                  color: "text-gray-500",
                  after: "after:border-gray-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-gray-500",
                },
              },
              brown: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-brown-500",
                },
                open: {
                  color: "text-brown-500",
                  after: "after:border-brown-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-brown-500",
                },
              },
              "deep-orange": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-orange-500",
                },
                open: {
                  color: "text-deep-orange-500",
                  after: "after:border-deep-orange-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-orange-500",
                },
              },
              orange: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-orange-500",
                },
                open: {
                  color: "text-orange-500",
                  after: "after:border-orange-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-orange-500",
                },
              },
              amber: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-amber-500",
                },
                open: {
                  color: "text-amber-500",
                  after: "after:border-amber-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-amber-500",
                },
              },
              yellow: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-yellow-500",
                },
                open: {
                  color: "text-yellow-500",
                  after: "after:border-yellow-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-yellow-500",
                },
              },
              lime: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-lime-500",
                },
                open: {
                  color: "text-lime-500",
                  after: "after:border-lime-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-lime-500",
                },
              },
              "light-green": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-green-500",
                },
                open: {
                  color: "text-light-green-500",
                  after: "after:border-light-green-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-green-500",
                },
              },
              green: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-green-500",
                },
                open: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-green-500",
                },
              },
              teal: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-teal-500",
                },
                open: {
                  color: "text-teal-500",
                  after: "after:border-teal-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-teal-500",
                },
              },
              cyan: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-cyan-500",
                },
                open: {
                  color: "text-cyan-500",
                  after: "after:border-cyan-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-cyan-500",
                },
              },
              "light-blue": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-blue-500",
                },
                open: {
                  color: "text-light-blue-500",
                  after: "after:border-light-blue-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-light-blue-500",
                },
              },
              blue: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-500",
                },
                open: {
                  color: "text-blue-500",
                  after: "after:border-blue-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-blue-500",
                },
              },
              indigo: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-indigo-500",
                },
                open: {
                  color: "text-indigo-500",
                  after: "after:border-indigo-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-indigo-500",
                },
              },
              "deep-purple": {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-purple-500",
                },
                open: {
                  color: "text-deep-purple-500",
                  after: "after:border-deep-purple-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-deep-purple-500",
                },
              },
              purple: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-purple-500",
                },
                open: {
                  color: "text-purple-500",
                  after: "after:border-purple-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-purple-500",
                },
              },
              pink: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-pink-500",
                },
                open: {
                  color: "text-pink-500",
                  after: "after:border-pink-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-pink-500",
                },
              },
              red: {
                close: {
                  color: "text-blue-gray-500",
                  after: "after:border-red-500",
                },
                open: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
                withValue: {
                  color: "text-blue-gray-500",
                  after: "after:border-red-500",
                },
              },
            },
          },
          states: {
            close: {
              select: {
                borderWidth: "border-b",
              },
              label: {
                fontSize: "text-xs",
                disabled: "peer-disabled:text-blue-gray-400",
                after: {
                  transform: "after:scale-x-0",
                },
              },
            },
            open: {
              select: {
                borderWidth: "border-b",
              },
              label: {
                fontSize: "text-xs",
                disabled: "peer-disabled:text-transparent",
                after: {
                  transform: "after:scale-x-100",
                },
              },
            },
            withValue: {
              select: {
                borderWidth: "border-b",
              },
              label: {
                fontSize: "text-xs",
                disabled: "peer-disabled:text-transparent",
                after: {
                  transform: "after:scale-x-0",
                },
              },
            },
          },
          error: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: "border-red-500",
                },
                open: {
                  borderColor: "border-red-500",
                },
                withValue: {
                  borderColor: "border-red-500",
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
                open: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
                withValue: {
                  color: "text-red-500",
                  after: "after:border-red-500",
                },
              },
            },
          },
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderColor: "border-green-500",
                },
                open: {
                  borderColor: "border-green-500",
                },
                withValue: {
                  borderColor: "border-green-500",
                },
              },
            },
            label: {
              initial: {},
              states: {
                close: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
                open: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
                withValue: {
                  color: "text-green-500",
                  after: "after:border-green-500",
                },
              },
            },
          },
        },
      },
    },
  },
};
