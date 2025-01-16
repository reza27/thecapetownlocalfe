export const InputTheme = {
  input: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "blue",
      label: "",
      error: false,
      success: false,
      icon: undefined,
      labelProps: undefined,
      containerProps: undefined,
      shrink: false,
      className: "",
    },
    valid: {
      variants: ["standard", "outlined", "static"],
      sizes: ["md", "lg"],
      colors: [
        "black",
        "white",
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
        input: {
          peer: "peer",
          width: "w-full",
          height: "h-full",
          bg: "bg-transparent",
          color: "text-blue-gray-700",
          fontFamily: "font-sans",
          fontWeight: "font-normal",
          outline: "outline outline-0 focus:outline-0",
          disabled: "disabled:bg-blue-gray-50 disabled:border-0",
          transition: "transition-all",
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
          textOverflow: "truncate",
          color: "peer-placeholder-shown:text-blue-gray-500",
          lineHeight: "leading-tight peer-focus:leading-tight",
          disabled:
            "peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
          transition: "transition-all",
        },
        icon: {
          display: "grid",
          placeItems: "place-items-center",
          position: "absolute",
          color: "text-blue-gray-500",
        },
        asterisk: {
          display: "inline-block",
          color: "text-red-500",
          ml: "ml-0.5",
        },
      },
      variants: {
        outlined: {
          base: {
            input: {
              borderWidth: "placeholder-shown:border",
              borderColor:
                "placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200",
              floated: {
                borderWidth: "border focus:border-2",
                borderColor: "border-t-transparent focus:border-t-transparent",
              },
            },
            inputWithIcon: {
              pr: "!pr-9",
            },
            icon: {
              top: "top-2/4",
              right: "right-3",
              transform: "-translate-y-2/4",
            },
            label: {
              position: "-top-1.5",
              fontSize: "peer-placeholder-shown:text-sm",
              floated: {
                fontSize: "text-[11px] peer-focus:text-[11px]",
              },
              before: {
                content: "before:content[' ']",
                display: "before:block",
                boxSizing: "before:box-border",
                width: "before:w-2.5",
                height: "before:h-1.5",
                mt: "before:mt-[6.5px]",
                mr: "before:mr-1",
                borderColor: "peer-placeholder-shown:before:border-transparent",
                borderRadius: "before:rounded-tl-md",
                floated: {
                  bt: "before:border-t peer-focus:before:border-t-2",
                  bl: "before:border-l peer-focus:before:border-l-2",
                },
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
                borderColor: "peer-placeholder-shown:after:border-transparent",
                borderRadius: "after:rounded-tr-md",
                floated: {
                  bt: "after:border-t peer-focus:after:border-t-2",
                  br: "after:border-r peer-focus:after:border-r-2",
                },
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
              input: {
                fontSize: "text-xs",
                px: "px-3",
                py: "py-2.5",
                borderRadius: "rounded-[7px]",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[3.75]",
              },
              icon: {
                width: "w-5",
                height: "h-5",
              },
            },
            lg: {
              container: {
                height: "h-11",
              },
              input: {
                fontSize: "text-xs",
                px: "px-3",
                py: "py-3",
                borderRadius: "rounded-md",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[4.1]",
              },
              icon: {
                width: "w-6",
                height: "h-6",
              },
            },
          },
          colors: {
            input: {
              black: {
                color: "text-black",
                borderColor: "border-black",
                borderColorFocused: "focus:border-black",
              },
              white: {
                color: "text-white",
                borderColor: "border-white",
                borderColorFocused: "focus:border-white",
              },
              "blue-gray": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-blue-gray-500",
              },
              gray: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-gray-500",
              },
              brown: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-brown-500",
              },
              "deep-orange": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-deep-orange-500",
              },
              orange: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-orange-500",
              },
              amber: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-amber-500",
              },
              yellow: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-yellow-500",
              },
              lime: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-lime-500",
              },
              "light-green": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-light-green-500",
              },
              green: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-green-500",
              },
              teal: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-teal-500",
              },
              cyan: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-cyan-500",
              },
              "light-blue": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-light-blue-500",
              },
              blue: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-blue-500",
              },
              indigo: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-indigo-500",
              },
              "deep-purple": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-deep-purple-500",
              },
              purple: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-purple-500",
              },
              pink: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-pink-500",
              },
              red: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-red-500",
              },
            },
            label: {
              black: {
                color: "!text-black peer-focus:text-black",
                before: "before:border-black peer-focus:before:!border-black",
                after: "after:border-black peer-focus:after:!border-black",
              },
              white: {
                color: "!text-white peer-focus:text-white",
                before: "before:border-white peer-focus:before:!border-white",
                after: "after:border-white peer-focus:after:!border-white",
              },
              "blue-gray": {
                color: "text-blue-gray-400 peer-focus:text-blue-gray-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-blue-gray-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-blue-gray-500",
              },
              gray: {
                color: "text-blue-gray-400 peer-focus:text-gray-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-gray-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-gray-500",
              },
              brown: {
                color: "text-blue-gray-400 peer-focus:text-brown-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-brown-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-brown-500",
              },
              "deep-orange": {
                color: "text-blue-gray-400 peer-focus:text-deep-orange-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-deep-orange-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-deep-orange-500",
              },
              orange: {
                color: "text-blue-gray-400 peer-focus:text-orange-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-orange-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-orange-500",
              },
              amber: {
                color: "text-blue-gray-400 peer-focus:text-amber-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-amber-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-amber-500",
              },
              yellow: {
                color: "text-blue-gray-400 peer-focus:text-yellow-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-yellow-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-yellow-500",
              },
              lime: {
                color: "text-blue-gray-400 peer-focus:text-lime-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-lime-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-lime-500",
              },
              "light-green": {
                color: "text-blue-gray-400 peer-focus:text-light-green-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-light-green-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-light-green-500",
              },
              green: {
                color: "text-blue-gray-400 peer-focus:text-green-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-green-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-green-500",
              },
              teal: {
                color: "text-blue-gray-400 peer-focus:text-teal-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-teal-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-teal-500",
              },
              cyan: {
                color: "text-blue-gray-400 peer-focus:text-cyan-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-cyan-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-cyan-500",
              },
              "light-blue": {
                color: "text-blue-gray-400 peer-focus:text-light-blue-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-light-blue-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-light-blue-500",
              },
              blue: {
                color: "text-blue-gray-400 peer-focus:text-blue-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-blue-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-blue-500",
              },
              indigo: {
                color: "text-blue-gray-400 peer-focus:text-indigo-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-indigo-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-indigo-500",
              },
              "deep-purple": {
                color: "text-blue-gray-400 peer-focus:text-deep-purple-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-deep-purple-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-deep-purple-500",
              },
              purple: {
                color: "text-blue-gray-400 peer-focus:text-purple-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-purple-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-purple-500",
              },
              pink: {
                color: "text-blue-gray-400 peer-focus:text-pink-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-pink-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-pink-500",
              },
              red: {
                color: "text-blue-gray-400 peer-focus:text-red-500",
                before:
                  "before:border-blue-gray-200 peer-focus:before:!border-red-500",
                after:
                  "after:border-blue-gray-200 peer-focus:after:!border-red-500",
              },
            },
          },
          error: {
            input: {
              borderColor:
                "border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500",
              borderColorFocused: "focus:border-red-500",
            },
            label: {
              color:
                "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
              before: "before:border-red-500 peer-focus:before:border-red-500",
              after: "after:border-red-500 peer-focus:after:border-red-500",
            },
          },
          success: {
            input: {
              borderColor:
                "border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500",
              borderColorFocused: "focus:border-green-500",
            },
            label: {
              color:
                "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
              before:
                "before:border-green-500 peer-focus:before:border-green-500",
              after: "after:border-green-500 peer-focus:after:border-green-500",
            },
          },
          shrink: {
            input: {
              borderTop: "!border-t-transparent",
            },
            label: {
              fontSize: "!text-[11px]",
              lineHeight: "!leading-tight",
              borderColor:
                "before:!border-blue-gray-200 after:!border-blue-gray-200",
            },
          },
        },
        standard: {
          base: {
            input: {
              borderWidth: "border-b",
              borderColor: "placeholder-shown:border-blue-gray-200",
            },
            inputWithIcon: {
              pr: "!pr-7",
            },
            icon: {
              top: "top-2/4",
              right: "right-0",
              transform: "-translate-y-1/4",
            },
            label: {
              position: "-top-1.5",
              fontSize: "peer-placeholder-shown:text-xs",
              floated: {
                fontSize: "text-[11px] peer-focus:text-[11px]",
              },
              after: {
                content: "after:content[' ']",
                display: "after:block",
                width: "after:w-full",
                position: "after:absolute",
                bottom: "after:-bottom-1.5",
                left: "left-0",
                borderWidth: "after:border-b-2",
                scale: "after:scale-x-0",
                floated: {
                  scale: "peer-focus:after:scale-x-100",
                },
                transition: "after:transition-transform after:duration-300",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-11",
              },
              input: {
                fontSize: "text-xs",
                pt: "pt-4",
                pb: "pb-1.5",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[4.25]",
              },
              icon: {
                width: "w-5",
                height: "h-5",
              },
            },
            lg: {
              container: {
                height: "h-12",
              },
              input: {
                fontSize: "text-sm",
                px: "px-px",
                pt: "pt-5",
                pb: "pb-2",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-[4.875]",
              },
              icon: {
                width: "w-6",
                height: "h-6",
              },
            },
          },
          colors: {
            input: {
              black: {
                color: "text-black",
                borderColor: "border-black",
                borderColorFocused: "focus:border-black",
              },
              white: {
                color: "text-white",
                borderColor: "border-white",
                borderColorFocused: "focus:border-white",
              },
              "blue-gray": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-blue-gray-500",
              },
              gray: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-gray-500",
              },
              brown: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-brown-500",
              },
              "deep-orange": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-deep-orange-500",
              },
              orange: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-orange-500",
              },
              amber: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-amber-500",
              },
              yellow: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-yellow-500",
              },
              lime: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-lime-500",
              },
              "light-green": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-light-green-500",
              },
              green: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-green-500",
              },
              teal: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-teal-500",
              },
              cyan: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-cyan-500",
              },
              "light-blue": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-light-blue-500",
              },
              blue: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-blue-500",
              },
              indigo: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-indigo-500",
              },
              "deep-purple": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-deep-purple-500",
              },
              purple: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-purple-500",
              },
              pink: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-pink-500",
              },
              red: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-red-500",
              },
            },
            label: {
              black: {
                color: "!text-black peer-focus:text-black",
                after: "after:border-black peer-focus:after:border-black",
              },
              white: {
                color: "!text-white peer-focus:text-white",
                after: "after:border-white peer-focus:after:border-white",
              },
              "blue-gray": {
                color: "text-blue-gray-500 peer-focus:text-blue-gray-500",
                after:
                  "after:border-blue-gray-500 peer-focus:after:border-blue-gray-500",
              },
              gray: {
                color: "text-blue-gray-500 peer-focus:text-gray-500",
                after: "after:border-gray-500 peer-focus:after:border-gray-500",
              },
              brown: {
                color: "text-blue-gray-500 peer-focus:text-brown-500",
                after:
                  "after:border-brown-500 peer-focus:after:border-brown-500",
              },
              "deep-orange": {
                color: "text-blue-gray-500 peer-focus:text-deep-orange-500",
                after:
                  "after:border-deep-orange-500 peer-focus:after:border-deep-orange-500",
              },
              orange: {
                color: "text-blue-gray-500 peer-focus:text-orange-500",
                after:
                  "after:border-orange-500 peer-focus:after:border-orange-500",
              },
              amber: {
                color: "text-blue-gray-500 peer-focus:text-amber-500",
                after:
                  "after:border-amber-500 peer-focus:after:border-amber-500",
              },
              yellow: {
                color: "text-blue-gray-500 peer-focus:text-yellow-500",
                after:
                  "after:border-yellow-500 peer-focus:after:border-yellow-500",
              },
              lime: {
                color: "text-blue-gray-500 peer-focus:text-lime-500",
                after: "after:border-lime-500 peer-focus:after:border-lime-500",
              },
              "light-green": {
                color: "text-blue-gray-500 peer-focus:text-light-green-500",
                after:
                  "after:border-light-green-500 peer-focus:after:border-light-green-500",
              },
              green: {
                color: "text-blue-gray-500 peer-focus:text-green-500",
                after:
                  "after:border-green-500 peer-focus:after:border-green-500",
              },
              teal: {
                color: "text-blue-gray-500 peer-focus:text-teal-500",
                after: "after:border-teal-500 peer-focus:after:border-teal-500",
              },
              cyan: {
                color: "text-blue-gray-500 peer-focus:text-cyan-500",
                after: "after:border-cyan-500 peer-focus:after:border-cyan-500",
              },
              "light-blue": {
                color: "text-blue-gray-500 peer-focus:text-light-blue-500",
                after:
                  "after:border-light-blue-500 peer-focus:after:border-light-blue-500",
              },
              blue: {
                color: "text-blue-gray-500 peer-focus:text-blue-500",
                after: "after:border-blue-500 peer-focus:after:border-blue-500",
              },
              indigo: {
                color: "text-blue-gray-500 peer-focus:text-indigo-500",
                after:
                  "after:border-indigo-500 peer-focus:after:border-indigo-500",
              },
              "deep-purple": {
                color: "text-blue-gray-500 peer-focus:text-deep-purple-500",
                after:
                  "after:border-deep-purple-500 peer-focus:after:border-deep-purple-500",
              },
              purple: {
                color: "text-blue-gray-500 peer-focus:text-purple-500",
                after:
                  "after:border-purple-500 peer-focus:after:border-purple-500",
              },
              pink: {
                color: "text-blue-gray-500 peer-focus:text-pink-500",
                after: "after:border-pink-500 peer-focus:after:border-pink-500",
              },
              red: {
                color: "text-blue-gray-500 peer-focus:text-red-500",
                after: "after:border-red-500 peer-focus:after:border-red-500",
              },
            },
          },
          error: {
            input: {
              borderColor: "border-red-500 placeholder-shown:border-red-500",
              borderColorFocused: "focus:border-red-500",
            },
            label: {
              color:
                "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
              after: "after:border-red-500 peer-focus:after:border-red-500",
            },
          },
          success: {
            input: {
              borderColor:
                "border-green-500 placeholder-shown:border-green-500",
              borderColorFocused: "focus:border-green-500",
            },
            label: {
              color:
                "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
              after: "after:border-green-500 peer-focus:after:border-green-500",
            },
          },
          shrink: {
            input: {},
            label: {
              fontSize: "!text-[11px]",
              lineHeight: "!leading-tight",
            },
          },
        },
        static: {
          base: {
            input: {
              borderWidth: "border-b",
              borderColor: "placeholder-shown:border-blue-gray-200",
            },
            inputWithIcon: {
              pr: "!pr-7",
            },
            icon: {
              top: "top-2/4",
              right: "right-0",
              transform: "-translate-y-1/4",
            },
            label: {
              position: "-top-2.5",
              fontSize: "text-sm peer-focus:text-sm",
              after: {
                content: "after:content[' ']",
                display: "after:block",
                width: "after:w-full",
                position: "after:absolute",
                bottom: "after:-bottom-2.5",
                left: "left-0",
                borderWidth: "after:border-b-2",
                scale: "after:scale-x-0",
                floated: {
                  scale: "peer-focus:after:scale-x-100",
                },
                transition: "after:transition-transform after:duration-300",
              },
            },
          },
          sizes: {
            md: {
              container: {
                height: "h-11",
              },
              input: {
                fontSize: "text-sm",
                pt: "pt-4",
                pb: "pb-1.5",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-tight",
              },
              icon: {
                width: "w-5",
                height: "h-5",
              },
            },
            lg: {
              container: {
                height: "h-12",
              },
              input: {
                fontSize: "text-sm",
                px: "px-px",
                pt: "pt-5",
                pb: "pb-2",
              },
              label: {
                lineHeight: "peer-placeholder-shown:leading-tight",
              },
              icon: {
                width: "w-6",
                height: "h-6",
              },
            },
          },
          colors: {
            input: {
              black: {
                color: "text-black",
                borderColor: "border-black",
                borderColorFocused: "focus:border-black",
              },
              white: {
                color: "text-white",
                borderColor: "border-white",
                borderColorFocused: "focus:border-white",
              },
              "blue-gray": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-blue-gray-500",
              },
              gray: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-gray-500",
              },
              brown: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-brown-500",
              },
              "deep-orange": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-deep-orange-500",
              },
              orange: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-orange-500",
              },
              amber: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-amber-500",
              },
              yellow: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-yellow-500",
              },
              lime: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-lime-500",
              },
              "light-green": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-light-green-500",
              },
              green: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-green-500",
              },
              teal: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-teal-500",
              },
              cyan: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-cyan-500",
              },
              "light-blue": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-light-blue-500",
              },
              blue: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-blue-500",
              },
              indigo: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-indigo-500",
              },
              "deep-purple": {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-deep-purple-500",
              },
              purple: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-purple-500",
              },
              pink: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-pink-500",
              },
              red: {
                borderColor: "border-blue-gray-200",
                borderColorFocused: "focus:border-red-500",
              },
            },
            label: {
              black: {
                color: "!text-black peer-focus:black",
                after: "after:border-black peer-focus:after:border-black",
              },
              white: {
                color: "!text-white peer-focus:white",
                after: "after:border-white peer-focus:after:border-white",
              },
              "blue-gray": {
                color: "text-blue-gray-500 peer-focus:text-blue-gray-500",
                after:
                  "after:border-blue-gray-500 peer-focus:after:border-blue-gray-500",
              },
              gray: {
                color: "text-blue-gray-500 peer-focus:text-gray-500",
                after: "after:border-gray-500 peer-focus:after:border-gray-500",
              },
              brown: {
                color: "text-blue-gray-500 peer-focus:text-brown-500",
                after:
                  "after:border-brown-500 peer-focus:after:border-brown-500",
              },
              "deep-orange": {
                color: "text-blue-gray-500 peer-focus:text-deep-orange-500",
                after:
                  "after:border-deep-orange-500 peer-focus:after:border-deep-orange-500",
              },
              orange: {
                color: "text-blue-gray-500 peer-focus:text-orange-500",
                after:
                  "after:border-orange-500 peer-focus:after:border-orange-500",
              },
              amber: {
                color: "text-blue-gray-500 peer-focus:text-amber-500",
                after:
                  "after:border-amber-500 peer-focus:after:border-amber-500",
              },
              yellow: {
                color: "text-blue-gray-500 peer-focus:text-yellow-500",
                after:
                  "after:border-yellow-500 peer-focus:after:border-yellow-500",
              },
              lime: {
                color: "text-blue-gray-500 peer-focus:text-lime-500",
                after: "after:border-lime-500 peer-focus:after:border-lime-500",
              },
              "light-green": {
                color: "text-blue-gray-500 peer-focus:text-light-green-500",
                after:
                  "after:border-light-green-500 peer-focus:after:border-light-green-500",
              },
              green: {
                color: "text-blue-gray-500 peer-focus:text-green-500",
                after:
                  "after:border-green-500 peer-focus:after:border-green-500",
              },
              teal: {
                color: "text-blue-gray-500 peer-focus:text-teal-500",
                after: "after:border-teal-500 peer-focus:after:border-teal-500",
              },
              cyan: {
                color: "text-blue-gray-500 peer-focus:text-cyan-500",
                after: "after:border-cyan-500 peer-focus:after:border-cyan-500",
              },
              "light-blue": {
                color: "text-blue-gray-500 peer-focus:text-light-blue-500",
                after:
                  "after:border-light-blue-500 peer-focus:after:border-light-blue-500",
              },
              blue: {
                color: "text-blue-gray-500 peer-focus:text-blue-500",
                after: "after:border-blue-500 peer-focus:after:border-blue-500",
              },
              indigo: {
                color: "text-blue-gray-500 peer-focus:text-indigo-500",
                after:
                  "after:border-indigo-500 peer-focus:after:border-indigo-500",
              },
              "deep-purple": {
                color: "text-blue-gray-500 peer-focus:text-deep-purple-500",
                after:
                  "after:border-deep-purple-500 peer-focus:after:border-deep-purple-500",
              },
              purple: {
                color: "text-blue-gray-500 peer-focus:text-purple-500",
                after:
                  "after:border-purple-500 peer-focus:after:border-purple-500",
              },
              pink: {
                color: "text-blue-gray-500 peer-focus:text-pink-500",
                after: "after:border-pink-500 peer-focus:after:border-pink-500",
              },
              red: {
                color: "text-blue-gray-500 peer-focus:text-red-500",
                after: "after:border-red-500 peer-focus:after:border-red-500",
              },
            },
          },
          error: {
            input: {
              borderColor: "border-red-500 placeholder-shown:border-red-500",
              borderColorFocused: "focus:border-red-500",
            },
            label: {
              color:
                "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
              after: "after:border-red-500 peer-focus:after:border-red-500",
            },
          },
          success: {
            input: {
              borderColor:
                "border-green-500 placeholder-shown:border-green-500",
              borderColorFocused: "focus:border-green-500",
            },
            label: {
              color:
                "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
              after: "after:border-green-500 peer-focus:after:border-green-500",
            },
          },
          shrink: {
            input: {},
            label: {},
          },
        },
      },
    },
  },
};
